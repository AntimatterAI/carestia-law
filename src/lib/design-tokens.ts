// Design Token Utilities
// Easy-to-use functions for applying design system tokens in components

import { 
  semanticColors, 
  typography, 
  spacing, 
  animations, 
  layout
} from './design-system';

import type {
  TextStyle,
  ButtonVariant,
  CardVariant,
  AnimationPreset 
} from './design-system';

// ============================================================================
// COLOR UTILITIES
// ============================================================================

/**
 * Get CSS color value from semantic color token
 * @param token - Semantic color token (e.g., 'primary.500', 'surface.background')
 * @returns CSS color value
 */
export const getColorValue = (token: string): string => {
  const parts = token.split('.');
  let current: any = semanticColors;
  
  for (const part of parts) {
    current = current?.[part];
  }
  
  return current || token;
};

/**
 * Generate CSS custom properties for colors
 * Useful for CSS-in-JS or styled-components
 */
export const colorVars = {
  // Primary colors
  primary: 'var(--color-primary)',
  'primary-foreground': 'var(--color-primary-foreground)',
  
  // Surface colors
  background: 'var(--color-background)',
  foreground: 'var(--color-foreground)',
  muted: 'var(--color-muted)',
  'muted-foreground': 'var(--color-muted-foreground)',
  border: 'var(--color-border)',
  
  // State colors
  success: 'var(--color-success)',
  warning: 'var(--color-warning)',
  error: 'var(--color-error)',
  info: 'var(--color-info)',
  
  // Law firm specific
  'gold-rich': 'oklch(0.873 0.16 89.4)',
  'gold-champagne': 'oklch(0.936 0.035 89.4)',
  'gold-warm': 'oklch(0.574 0.08 89.4)',
  'black-primary': 'oklch(0 0 0)',
} as const;

// ============================================================================
// TYPOGRAPHY UTILITIES
// ============================================================================

/**
 * Apply text style from design system
 * @param style - Text style token
 * @returns CSS style object
 */
export const applyTextStyle = (style: TextStyle) => {
  const textStyle = typography.textStyles[style];
  return {
    fontFamily: textStyle.fontFamily,
    fontSize: textStyle.fontSize,
    lineHeight: textStyle.lineHeight,
    fontWeight: textStyle.fontWeight,
    letterSpacing: textStyle.letterSpacing,
    ...(textStyle.textTransform && { textTransform: textStyle.textTransform }),
  };
};

/**
 * Generate responsive font size utility
 * @param base - Base font size
 * @param scale - Scale factor for larger screens
 * @returns CSS clamp value
 */
export const responsiveText = (base: string, scale: string = '1.2') => {
  return `clamp(${base}, ${base} + 2vw, calc(${base} * ${scale}))`;
};

/**
 * Tailwind classes for common text styles
 */
export const textStyles = {
  // Display text
  'display-2xl': 'font-serif text-5xl lg:text-7xl font-bold leading-none tracking-tight',
  'display-xl': 'font-serif text-4xl lg:text-6xl font-bold leading-none tracking-tight',
  'display-lg': 'font-serif text-3xl lg:text-5xl font-semibold leading-tight tracking-tight',
  
  // Headings
  'heading-xl': 'font-serif text-2xl lg:text-4xl font-semibold leading-tight tracking-tight',
  'heading-lg': 'font-serif text-xl lg:text-3xl font-semibold leading-tight tracking-tight',
  'heading-md': 'font-serif text-lg lg:text-2xl font-semibold leading-tight tracking-tight',
  'heading-sm': 'font-serif text-base lg:text-xl font-semibold leading-tight tracking-tight',
  
  // Body text
  'body-xl': 'font-sans text-lg lg:text-xl leading-relaxed',
  'body-lg': 'font-sans text-base lg:text-lg leading-relaxed',
  'body-md': 'font-sans text-sm lg:text-base leading-relaxed',
  'body-sm': 'font-sans text-xs lg:text-sm leading-relaxed',
  
  // Legal specific
  'legal-title': 'font-serif text-3xl lg:text-5xl font-bold leading-tight tracking-tight text-black',
  'legal-subtitle': 'font-sans text-lg lg:text-xl font-medium text-gold-warm',
  'legal-body': 'font-sans text-base lg:text-lg leading-relaxed text-gray-700',
  'legal-caption': 'font-sans text-sm font-medium uppercase tracking-wide text-gold-warm',
} as const;

// ============================================================================
// SPACING UTILITIES
// ============================================================================

/**
 * Get spacing value from token
 * @param token - Spacing token (e.g., '4', '8', 'lg')
 * @returns CSS spacing value
 */
export const getSpacing = (token: keyof typeof spacing): string => {
  return spacing[token];
};

/**
 * Generate consistent padding/margin utilities
 */
export const spacingUtils = {
  // Section spacing
  sectionPadding: 'py-16 lg:py-24',
  sectionPaddingSmall: 'py-8 lg:py-12',
  sectionPaddingLarge: 'py-24 lg:py-32',
  
  // Container spacing
  containerPadding: 'px-4 lg:px-6',
  cardPadding: 'p-6 lg:p-8',
  buttonPadding: 'px-4 py-2 lg:px-6 lg:py-3',
  
  // Component spacing
  stackSpacing: 'space-y-4 lg:space-y-6',
  stackSpacingSmall: 'space-y-2 lg:space-y-4',
  stackSpacingLarge: 'space-y-8 lg:space-y-12',
  
  gridGap: 'gap-4 lg:gap-6',
  gridGapSmall: 'gap-2 lg:gap-4',
  gridGapLarge: 'gap-8 lg:gap-12',
} as const;

// ============================================================================
// ANIMATION UTILITIES
// ============================================================================

/**
 * Apply animation preset
 * @param preset - Animation preset name
 * @returns Framer Motion animation props
 */
export const applyAnimation = (preset: AnimationPreset) => {
  return animations.presets[preset];
};

/**
 * Common animation configurations for Framer Motion
 */
export const motionConfig = {
  // Page transitions
  pageTransition: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  
  // Stagger children
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
  
  // Hover effects
  buttonHover: {
    whileHover: { scale: 1.02, y: -2 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 },
  },
  
  cardHover: {
    whileHover: { 
      scale: 1.02, 
      y: -4,
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
    },
    transition: { duration: 0.3 },
  },
  
  // Legal-specific animations
  elegantEntrance: {
    initial: { opacity: 0, y: 40, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { 
      duration: 0.8, 
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
  
  goldShimmer: {
    animate: {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'linear',
    },
  },
} as const;

// ============================================================================
// COMPONENT STYLE UTILITIES
// ============================================================================

/**
 * Generate button styles based on variant and size
 * @param variant - Button variant
 * @param size - Button size
 * @returns Tailwind CSS classes
 */
export const getButtonStyles = (
  variant: ButtonVariant = 'primary',
  size: 'sm' | 'md' | 'lg' | 'xl' = 'md'
) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-gold-rich text-black hover:bg-gold-warm focus:ring-gold-warm',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500',
    outline: 'border border-gold-rich text-gold-warm hover:bg-gold-rich hover:text-black focus:ring-gold-warm',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    elegant: 'bg-black text-gold-rich hover:bg-gray-900 shadow-lg hover:shadow-xl focus:ring-gold-rich',
    luxury: 'bg-gradient-to-r from-gold-rich to-gold-warm text-black font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:ring-gold-rich',
  };
  
  const sizes = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-base',
    lg: 'h-12 px-6 text-lg',
    xl: 'h-14 px-8 text-xl',
  };
  
  return `${baseStyles} ${variants[variant]} ${sizes[size]}`;
};

/**
 * Generate card styles based on variant
 * @param variant - Card variant
 * @returns Tailwind CSS classes
 */
export const getCardStyles = (variant: CardVariant = 'default') => {
  const baseStyles = 'rounded-lg transition-all duration-300';
  
  const variants = {
    default: 'bg-white border border-gray-200 shadow-sm',
    elevated: 'bg-white shadow-lg hover:shadow-xl',
    bordered: 'bg-white border-2 border-gray-200',
    luxury: 'bg-white border border-gold-champagne/30 shadow-lg shadow-gold-rich/10 relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-gold-rich before:to-gold-warm',
  };
  
  return `${baseStyles} ${variants[variant]}`;
};

// ============================================================================
// RESPONSIVE UTILITIES
// ============================================================================

/**
 * Responsive breakpoint utilities
 */
export const breakpoints = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',
} as const;

/**
 * Container width utilities
 */
export const containers = {
  sm: 'max-w-3xl mx-auto px-4',
  md: 'max-w-4xl mx-auto px-4',
  lg: 'max-w-6xl mx-auto px-4',
  xl: 'max-w-7xl mx-auto px-4',
  '2xl': 'max-w-screen-2xl mx-auto px-4',
  full: 'w-full px-4',
} as const;

// ============================================================================
// THEME UTILITIES
// ============================================================================

/**
 * Dark mode utilities
 */
export const darkMode = {
  toggle: 'dark:bg-gray-900 dark:text-gold-champagne',
  card: 'dark:bg-gray-800 dark:border-gray-700',
  text: 'dark:text-gold-champagne',
  textMuted: 'dark:text-gray-400',
  border: 'dark:border-gray-700',
  hover: 'dark:hover:bg-gray-700',
} as const;

/**
 * Accessibility utilities
 */
export const a11y = {
  focusRing: 'focus:outline-none focus:ring-2 focus:ring-gold-warm focus:ring-offset-2',
  screenReader: 'sr-only',
  skipLink: 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-gold-rich text-black px-4 py-2 rounded-md z-50',
  highContrast: 'contrast-more:border-2 contrast-more:border-black',
} as const;

// ============================================================================
// LAW FIRM SPECIFIC UTILITIES
// ============================================================================

/**
 * Law firm specific style patterns
 */
export const legalStyles = {
  // Hero sections
  heroBackground: 'bg-gradient-to-br from-gold-champagne/5 to-gold-rich/10',
  heroOverlay: 'absolute inset-0 bg-black/10',
  
  // Professional sections
  professionalCard: 'bg-white border border-gold-champagne/20 shadow-lg shadow-gold-rich/5 hover:shadow-gold-rich/10 transition-all duration-300',
  
  // Call-to-action styles
  ctaPrimary: 'bg-gold-rich text-black hover:bg-gold-warm transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl',
  ctaSecondary: 'border-2 border-gold-rich text-gold-warm hover:bg-gold-rich hover:text-black',
  
  // Legal document styles
  documentText: 'text-gray-700 leading-relaxed font-serif',
  legalNotice: 'text-sm text-gray-600 italic',
  
  // Professional badges
  badge: 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gold-champagne/20 text-gold-warm border border-gold-champagne/30',
} as const;

// Export everything
export const designTokens = {
  colors: colorVars,
  text: textStyles,
  spacing: spacingUtils,
  motion: motionConfig,
  buttons: getButtonStyles,
  cards: getCardStyles,
  responsive: { breakpoints, containers },
  theme: { darkMode, a11y },
  legal: legalStyles,
} as const;

export default designTokens; 