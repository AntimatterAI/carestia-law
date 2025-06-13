import { LRUCache } from 'lru-cache';

type RateLimitOptions = {
  uniqueTokenPerInterval?: number;
  interval?: number;
};

interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: Date;
}

class RateLimit {
  private cache: LRUCache<string, number[]>;
  private options: Required<RateLimitOptions>;

  constructor(options: RateLimitOptions = {}) {
    this.options = {
      uniqueTokenPerInterval: options.uniqueTokenPerInterval ?? 500,
      interval: options.interval ?? 60000, // 1 minute default
    };

    this.cache = new LRUCache<string, number[]>({
      max: this.options.uniqueTokenPerInterval,
      ttl: this.options.interval,
    });
  }

  async limit(identifier: string, limit: number = 3): Promise<RateLimitResult> {
    const now = Date.now();
    const window = Math.floor(now / this.options.interval);
    const key = `${identifier}:${window}`;
    
    const requests = this.cache.get(key) || [];
    
    // Clean old requests (older than the current interval)
    const currentIntervalStart = window * this.options.interval;
    const validRequests = requests.filter(time => time >= currentIntervalStart);
    
    if (validRequests.length >= limit) {
      // Rate limit exceeded
      const oldestRequest = Math.min(...validRequests);
      const resetTime = new Date(oldestRequest + this.options.interval);
      
      return {
        success: false,
        limit,
        remaining: 0,
        reset: resetTime,
      };
    }
    
    // Add current request
    validRequests.push(now);
    this.cache.set(key, validRequests);
    
    const nextIntervalStart = (window + 1) * this.options.interval;
    const resetTime = new Date(nextIntervalStart);
    
    return {
      success: true,
      limit,
      remaining: limit - validRequests.length,
      reset: resetTime,
    };
  }

  // Method to check current status without incrementing
  async check(identifier: string, limit: number = 3): Promise<RateLimitResult> {
    const now = Date.now();
    const window = Math.floor(now / this.options.interval);
    const key = `${identifier}:${window}`;
    
    const requests = this.cache.get(key) || [];
    const currentIntervalStart = window * this.options.interval;
    const validRequests = requests.filter(time => time >= currentIntervalStart);
    
    const nextIntervalStart = (window + 1) * this.options.interval;
    const resetTime = new Date(nextIntervalStart);
    
    if (validRequests.length >= limit) {
      return {
        success: false,
        limit,
        remaining: 0,
        reset: resetTime,
      };
    }
    
    return {
      success: true,
      limit,
      remaining: limit - validRequests.length,
      reset: resetTime,
    };
  }

  // Clear rate limit for an identifier (useful for testing or admin override)
  async reset(identifier: string): Promise<void> {
    const now = Date.now();
    const window = Math.floor(now / this.options.interval);
    const key = `${identifier}:${window}`;
    this.cache.delete(key);
  }
}

// Create rate limiter instance for contact form
// 3 submissions per hour (3600000 ms)
export const ratelimit = new RateLimit({
  interval: 3600000, // 1 hour
  uniqueTokenPerInterval: 500, // Limit it to 500 users per hour
});

// Additional rate limiter for stricter endpoints if needed
export const strictRateLimit = new RateLimit({
  interval: 86400000, // 24 hours
  uniqueTokenPerInterval: 100, // Limit it to 100 users per day
});

// Export the class for custom implementations
export { RateLimit };

// Helper function to get a standardized identifier from request
export function getIdentifier(request: Request | { ip?: string; headers: { get(name: string): string | null } }): string {
  // Try to get the real IP address
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const ip = ('ip' in request ? request.ip : null) || 
            (forwarded ? forwarded.split(',')[0].trim() : null) ||
            realIP ||
            'unknown';
  
  return ip;
}

// Helper function to create rate limit headers
export function createRateLimitHeaders(result: RateLimitResult): Record<string, string> {
  return {
    'X-RateLimit-Limit': result.limit.toString(),
    'X-RateLimit-Remaining': result.remaining.toString(),
    'X-RateLimit-Reset': Math.ceil(result.reset.getTime() / 1000).toString(),
    'Retry-After': result.success ? '0' : Math.ceil((result.reset.getTime() - Date.now()) / 1000).toString(),
  };
} 