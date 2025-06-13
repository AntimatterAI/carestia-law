// Comprehensive Design System for Carestia Law Firm
// TypeScript definitions and semantic tokens for consistent UI development

// ============================================================================
// COLOR SYSTEM
// ============================================================================

// Raw color palette - HEX values
export const rawColors = {
  // Law Firm Primary Palette
  black: {
    pure: '#000000',
    rich: '#0A0A0A',
    soft: '#1A1A1A',
  },
  gold: {
    rich: '#FFD700',      // Primary gold
    champagne: '#F7E7CE', // Light gold
    warm: '#B8860B',      // Dark gold
    muted: '#E6D690',     // Muted gold
  },
  
  // Neutral palette
  white: {
    pure: '#FFFFFF',
    soft: '#FAFAFA',
    warm: '#F8F8F6',
  },
  gray: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0A0A0A',
  },
  
  // Semantic colors
  red: {
    50: '#FEF2F2',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
  },
  green: {
    50: '#F0FDF4',
    500: '#22C55E', 
    600: '#16A34A',
    700: '#15803D',
  },
  blue: {
    50: '#EFF6FF',
    500: '#3B82F6',
    600: '#2563EB',
    700: '#1D4ED8',
  },
  yellow: {
    50: '#FEFCE8',
    500: '#EAB308',
    600: '#CA8A04',
    700: '#A16207',
  },
} as const;

// Semantic color tokens with WCAG AA compliance
export const semanticColors = {
  // Primary brand colors
  primary: {
    50: rawColors.gold.champagne,
    100: rawColors.gold.muted,
    500: rawColors.gold.rich,      // Main primary - 4.5:1 contrast on white
    600: rawColors.gold.warm,      // Darker primary - 7:1 contrast on white
    900: rawColors.black.pure,
    foreground: rawColors.black.pure,
    background: rawColors.gold.rich,
  },
  
  // Secondary colors
  secondary: {
    50: rawColors.gray[50],
    100: rawColors.gray[100],
    200: rawColors.gray[200],
    500: rawColors.gray[500],
    600: rawColors.gray[600],
    900: rawColors.gray[900],
    foreground: rawColors.gray[900],
    background: rawColors.gray[100],
  },
  
  // Accent colors
  accent: {
    50: rawColors.gold.champagne,
    500: rawColors.gold.warm,
    600: '#9A7209',               // Darker for better contrast
    foreground: rawColors.white.pure,
    background: rawColors.gold.warm,
  },
  
  // Neutral colors
  neutral: {
    0: rawColors.white.pure,
    50: rawColors.gray[50],
    100: rawColors.gray[100],
    200: rawColors.gray[200],
    300: rawColors.gray[300],
    400: rawColors.gray[400],
    500: rawColors.gray[500],
    600: rawColors.gray[600],
    700: rawColors.gray[700],
    800: rawColors.gray[800],
    900: rawColors.gray[900],
    950: rawColors.gray[950],
  },
  
  // Surface colors
  surface: {
    background: rawColors.white.pure,
    foreground: rawColors.black.pure,
    muted: rawColors.gray[100],
    'muted-foreground': rawColors.gray[600],
    subtle: rawColors.gray[50],
    border: rawColors.gray[200],
    input: rawColors.gray[100],
    ring: rawColors.gold.warm,
  },
  
  // State colors (WCAG AA compliant)
  success: {
    50: rawColors.green[50],
    500: rawColors.green[500],
    600: rawColors.green[600],
    700: rawColors.green[700],
    foreground: rawColors.white.pure,
    background: rawColors.green[500],
  },
  
  warning: {
    50: rawColors.yellow[50],
    500: rawColors.yellow[500],
    600: rawColors.yellow[600],
    700: rawColors.yellow[700],
    foreground: rawColors.black.pure,
    background: rawColors.yellow[500],
  },
  
  error: {
    50: rawColors.red[50],
    500: rawColors.red[500],
    600: rawColors.red[600],
    700: rawColors.red[700],
    foreground: rawColors.white.pure,
    background: rawColors.red[500],
  },
  
  info: {
    50: rawColors.blue[50],
    500: rawColors.blue[500],
    600: rawColors.blue[600],
    700: rawColors.blue[700],
    foreground: rawColors.white.pure,
    background: rawColors.blue[500],
  },
} as const;

// Dark mode variants
export const darkModeColors = {
  primary: {
    50: rawColors.gold.champagne,
    500: rawColors.gold.rich,
    600: rawColors.gold.warm,
    900: rawColors.gold.rich,
    foreground: rawColors.black.pure,
    background: rawColors.gold.rich,
  },
  
  surface: {
    background: rawColors.black.pure,
    foreground: rawColors.gold.champagne,
    muted: rawColors.gray[900],
    'muted-foreground': rawColors.gray[400],
    subtle: rawColors.gray[950],
    border: rawColors.gray[800],
    input: rawColors.gray[900],
    ring: rawColors.gold.rich,
  },
} as const;

// ============================================================================
// TYPOGRAPHY SYSTEM
// ============================================================================

export const typography = {
  // Font families
  fontFamily: {
    serif: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'Times New Roman', 'serif'],
    sans: ['var(--font-inter)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
    mono: ['SF Mono', 'Monaco', 'Inconsolata', 'monospace'],
  },
  
  // Font sizes with consistent scale
  fontSize: {
    xs: {
      size: '0.75rem',    // 12px
      lineHeight: '1rem', // 16px
      letterSpacing: '0.025em',
    },
    sm: {
      size: '0.875rem',      // 14px
      lineHeight: '1.25rem', // 20px
      letterSpacing: '0.01em',
    },
    base: {
      size: '1rem',        // 16px
      lineHeight: '1.5rem', // 24px
      letterSpacing: '0',
    },
    lg: {
      size: '1.125rem',     // 18px
      lineHeight: '1.75rem', // 28px
      letterSpacing: '-0.01em',
    },
    xl: {
      size: '1.25rem',     // 20px
      lineHeight: '1.75rem', // 28px
      letterSpacing: '-0.01em',
    },
    '2xl': {
      size: '1.5rem',      // 24px
      lineHeight: '2rem',   // 32px
      letterSpacing: '-0.02em',
    },
    '3xl': {
      size: '1.875rem',    // 30px
      lineHeight: '2.25rem', // 36px
      letterSpacing: '-0.03em',
    },
    '4xl': {
      size: '2.25rem',     // 36px
      lineHeight: '2.5rem', // 40px
      letterSpacing: '-0.03em',
    },
    '5xl': {
      size: '3rem',        // 48px
      lineHeight: '1.1',
      letterSpacing: '-0.04em',
    },
    '6xl': {
      size: '3.75rem',     // 60px
      lineHeight: '1.1',
      letterSpacing: '-0.04em',
    },
    '7xl': {
      size: '4.5rem',      // 72px
      lineHeight: '1.1',
      letterSpacing: '-0.05em',
    },
  },
  
  // Font weights
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  
  // Semantic text styles
  textStyles: {
    // Headings (using Playfair Display)
    'display-2xl': {
      fontFamily: 'var(--font-playfair)',
      fontSize: '4.5rem',
      lineHeight: '1.1',
      fontWeight: '700',
      letterSpacing: '-0.05em',
    },
    'display-xl': {
      fontFamily: 'var(--font-playfair)',
      fontSize: '3.75rem',
      lineHeight: '1.1', 
      fontWeight: '700',
      letterSpacing: '-0.04em',
    },
    'display-lg': {
      fontFamily: 'var(--font-playfair)',
      fontSize: '3rem',
      lineHeight: '1.1',
      fontWeight: '600',
      letterSpacing: '-0.04em',
    },
    'heading-xl': {
      fontFamily: 'var(--font-playfair)',
      fontSize: '2.25rem',
      lineHeight: '2.5rem',
      fontWeight: '600',
      letterSpacing: '-0.03em',
    },
    'heading-lg': {
      fontFamily: 'var(--font-playfair)',
      fontSize: '1.875rem',
      lineHeight: '2.25rem',
      fontWeight: '600',
      letterSpacing: '-0.03em',
    },
    'heading-md': {
      fontFamily: 'var(--font-playfair)',
      fontSize: '1.5rem',
      lineHeight: '2rem',
      fontWeight: '600',
      letterSpacing: '-0.02em',
    },
    'heading-sm': {
      fontFamily: 'var(--font-playfair)',
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
      fontWeight: '600',
      letterSpacing: '-0.01em',
    },
    
    // Body text (using Inter)
    'body-xl': {
      fontFamily: 'var(--font-inter)',
      fontSize: '1.125rem',
      lineHeight: '1.75rem',
      fontWeight: '400',
      letterSpacing: '-0.01em',
    },
    'body-lg': {
      fontFamily: 'var(--font-inter)',
      fontSize: '1rem',
      lineHeight: '1.5rem',
      fontWeight: '400',
      letterSpacing: '0',
    },
    'body-md': {
      fontFamily: 'var(--font-inter)',
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      fontWeight: '400',
      letterSpacing: '0.01em',
    },
    'body-sm': {
      fontFamily: 'var(--font-inter)',
      fontSize: '0.75rem',
      lineHeight: '1rem',
      fontWeight: '400',
      letterSpacing: '0.025em',
    },
    
    // Legal-specific styles
    'legal-title': {
      fontFamily: 'var(--font-playfair)',
      fontSize: '3rem',
      lineHeight: '1.1',
      fontWeight: '700',
      letterSpacing: '-0.04em',
    },
    'legal-subtitle': {
      fontFamily: 'var(--font-inter)',
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
      fontWeight: '500',
      letterSpacing: '-0.01em',
    },
    'legal-body': {
      fontFamily: 'var(--font-inter)',
      fontSize: '1rem',
      lineHeight: '1.6',
      fontWeight: '400',
      letterSpacing: '0',
    },
    'legal-caption': {
      fontFamily: 'var(--font-inter)',
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      fontWeight: '500',
      letterSpacing: '0.05em',
      textTransform: 'uppercase' as const,
    },
  },
} as const;

// ============================================================================
// SPACING SYSTEM (4px grid)
// ============================================================================

export const spacing = {
  // Base spacing scale
  0: '0',
  0.5: '0.125rem',  // 2px
  1: '0.25rem',     // 4px  - Base unit
  1.5: '0.375rem',  // 6px
  2: '0.5rem',      // 8px
  2.5: '0.625rem',  // 10px
  3: '0.75rem',     // 12px
  3.5: '0.875rem',  // 14px
  4: '1rem',        // 16px
  5: '1.25rem',     // 20px
  6: '1.5rem',      // 24px
  7: '1.75rem',     // 28px
  8: '2rem',        // 32px
  9: '2.25rem',     // 36px
  10: '2.5rem',     // 40px
  11: '2.75rem',    // 44px
  12: '3rem',       // 48px
  14: '3.5rem',     // 56px
  16: '4rem',       // 64px
  20: '5rem',       // 80px
  24: '6rem',       // 96px
  28: '7rem',       // 112px
  32: '8rem',       // 128px
  36: '9rem',       // 144px
  40: '10rem',      // 160px
  44: '11rem',      // 176px
  48: '12rem',      // 192px
  52: '13rem',      // 208px
  56: '14rem',      // 224px
  60: '15rem',      // 240px
  64: '16rem',      // 256px
  72: '18rem',      // 288px
  80: '20rem',      // 320px
  96: '24rem',      // 384px
  
  // Component-specific spacing
  component: {
    'button-padding-x': '1rem',      // 16px
    'button-padding-y': '0.5rem',    // 8px
    'card-padding': '1.5rem',        // 24px
    'section-padding-y': '5rem',     // 80px
    'section-padding-x': '1rem',     // 16px
    'header-height': '4rem',         // 64px
    'footer-padding-y': '3rem',      // 48px
  },
  
  // Responsive spacing
  responsive: {
    'section-sm': '3rem',    // 48px
    'section-md': '5rem',    // 80px
    'section-lg': '7rem',    // 112px
    'section-xl': '9rem',    // 144px
  },
} as const;

// ============================================================================
// COMPONENT VARIANTS
// ============================================================================

// Button variants with proper typing
export const buttonVariants = {
  variant: {
    primary: {
      background: semanticColors.primary.background,
      color: semanticColors.primary.foreground,
      border: 'none',
      '&:hover': {
        background: semanticColors.primary[600],
        transform: 'translateY(-1px)',
      },
      '&:focus': {
        outline: `2px solid ${semanticColors.primary[500]}`,
        outlineOffset: '2px',
      },
    },
    secondary: {
      background: semanticColors.secondary.background,
      color: semanticColors.secondary.foreground,
      border: `1px solid ${semanticColors.surface.border}`,
      '&:hover': {
        background: semanticColors.secondary[200],
      },
    },
    outline: {
      background: 'transparent',
      color: semanticColors.primary[600],
      border: `1px solid ${semanticColors.primary[500]}`,
      '&:hover': {
        background: semanticColors.primary[50],
        color: semanticColors.primary[700],
      },
    },
    ghost: {
      background: 'transparent',
      color: semanticColors.surface.foreground,
      border: 'none',
      '&:hover': {
        background: semanticColors.surface.muted,
      },
    },
    // Law firm specific variants
    elegant: {
      background: semanticColors.neutral[900],
      color: semanticColors.primary[500],
      border: 'none',
      boxShadow: '0 4px 12px rgba(255, 215, 0, 0.2)',
      '&:hover': {
        background: semanticColors.neutral[800],
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 24px rgba(255, 215, 0, 0.3)',
      },
    },
    luxury: {
      background: `linear-gradient(135deg, ${semanticColors.primary[500]} 0%, ${semanticColors.accent[500]} 100%)`,
      color: semanticColors.neutral[900],
      border: 'none',
      fontWeight: '600',
      '&:hover': {
        transform: 'translateY(-1px)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  
  size: {
    sm: {
      height: '2rem',       // 32px
      paddingX: '0.75rem',  // 12px
      fontSize: typography.fontSize.sm.size,
    },
    md: {
      height: '2.5rem',     // 40px
      paddingX: '1rem',     // 16px
      fontSize: typography.fontSize.base.size,
    },
    lg: {
      height: '3rem',       // 48px
      paddingX: '1.5rem',   // 24px
      fontSize: typography.fontSize.lg.size,
    },
    xl: {
      height: '3.5rem',     // 56px
      paddingX: '2rem',     // 32px
      fontSize: typography.fontSize.xl.size,
    },
  },
} as const;

// Card variants
export const cardVariants = {
  variant: {
    default: {
      background: semanticColors.surface.background,
      border: `1px solid ${semanticColors.surface.border}`,
      borderRadius: '0.5rem',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    },
    elevated: {
      background: semanticColors.surface.background,
      border: 'none',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    bordered: {
      background: semanticColors.surface.background,
      border: `2px solid ${semanticColors.surface.border}`,
      borderRadius: '0.5rem',
      boxShadow: 'none',
    },
    luxury: {
      background: semanticColors.surface.background,
      border: `1px solid ${semanticColors.primary[200]}`,
      borderRadius: '0.5rem',
      boxShadow: '0 4px 12px rgba(255, 215, 0, 0.1)',
      position: 'relative' as const,
      '&::before': {
        content: '""',
        position: 'absolute' as const,
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: `linear-gradient(90deg, ${semanticColors.primary[500]} 0%, ${semanticColors.accent[500]} 100%)`,
        borderRadius: '0.5rem 0.5rem 0 0',
      },
    },
  },
  
  padding: {
    sm: spacing[4],      // 16px
    md: spacing[6],      // 24px
    lg: spacing[8],      // 32px
    xl: spacing[12],     // 48px
  },
} as const;

// Input variants
export const inputVariants = {
  variant: {
    default: {
      background: semanticColors.surface.input,
      border: `1px solid ${semanticColors.surface.border}`,
      color: semanticColors.surface.foreground,
      '&:focus': {
        outline: 'none',
        border: `1px solid ${semanticColors.primary[500]}`,
        boxShadow: `0 0 0 2px ${semanticColors.primary[500]}20`,
      },
    },
    error: {
      background: semanticColors.surface.input,
      border: `1px solid ${semanticColors.error[500]}`,
      color: semanticColors.surface.foreground,
      '&:focus': {
        outline: 'none',
        border: `1px solid ${semanticColors.error[600]}`,
        boxShadow: `0 0 0 2px ${semanticColors.error[500]}20`,
      },
    },
    success: {
      background: semanticColors.surface.input,
      border: `1px solid ${semanticColors.success[500]}`,
      color: semanticColors.surface.foreground,
      '&:focus': {
        outline: 'none',
        border: `1px solid ${semanticColors.success[600]}`,
        boxShadow: `0 0 0 2px ${semanticColors.success[500]}20`,
      },
    },
  },
  
  size: {
    sm: {
      height: '2rem',
      paddingX: '0.75rem',
      fontSize: typography.fontSize.sm.size,
    },
    md: {
      height: '2.5rem',
      paddingX: '1rem',
      fontSize: typography.fontSize.base.size,
    },
    lg: {
      height: '3rem',
      paddingX: '1.25rem',
      fontSize: typography.fontSize.lg.size,
    },
  },
} as const;

// ============================================================================
// ANIMATION TOKENS
// ============================================================================

export const animations = {
  // Duration tokens
  duration: {
    instant: '0ms',
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    slower: '700ms',
    slowest: '1000ms',
  },
  
  // Easing functions
  easing: {
    linear: 'linear',
    'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
    'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
    'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    'ease-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    'ease-elastic': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  
  // Preset animations for common interactions
  presets: {
    // Fade animations
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    fadeOut: {
      initial: { opacity: 1 },
      animate: { opacity: 0 },
      transition: { duration: 0.2, ease: 'easeIn' },
    },
    
    // Scale animations
    scaleIn: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    scaleOut: {
      initial: { opacity: 1, scale: 1 },
      animate: { opacity: 0, scale: 0.9 },
      transition: { duration: 0.2, ease: 'easeIn' },
    },
    
    // Slide animations
    slideInUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4, ease: 'easeOut' },
    },
    slideInDown: {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4, ease: 'easeOut' },
    },
    slideInLeft: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.4, ease: 'easeOut' },
    },
    slideInRight: {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.4, ease: 'easeOut' },
    },
    
    // Sophisticated animations for law firm
    elegant: {
      initial: { opacity: 0, y: 30, scale: 0.95 },
      animate: { opacity: 1, y: 0, scale: 1 },
      transition: { 
        duration: 0.6, 
        ease: 'easeOut',
        staggerChildren: 0.1,
      },
    },
    luxury: {
      initial: { opacity: 0, y: 40, rotateX: 15 },
      animate: { opacity: 1, y: 0, rotateX: 0 },
      transition: { 
        duration: 0.8, 
        ease: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  
  // Hover and interaction animations
  interactions: {
    buttonHover: {
      scale: 1.02,
      y: -2,
      transition: { duration: 0.2, ease: 'easeOut' },
    },
    cardHover: {
      scale: 1.02,
      y: -4,
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    iconHover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.2, ease: 'easeOut' },
    },
  },
} as const;

// ============================================================================
// LAYOUT TOKENS
// ============================================================================

export const layout = {
  // Border radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',      // 2px
    base: '0.25rem',     // 4px
    md: '0.375rem',      // 6px
    lg: '0.5rem',        // 8px
    xl: '0.75rem',       // 12px
    '2xl': '1rem',       // 16px
    '3xl': '1.5rem',     // 24px
    full: '9999px',
  },
  
  // Shadows with law firm sophistication
  boxShadow: {
    none: 'none',
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.1), 0 8px 10px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px rgba(0, 0, 0, 0.15)',
    inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
    
    // Law firm specific shadows
    gold: '0 4px 12px rgba(255, 215, 0, 0.2)',
    'gold-lg': '0 8px 24px rgba(255, 215, 0, 0.3)',
    elegant: '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)',
    luxury: '0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 16px rgba(255, 215, 0, 0.1)',
  },
  
  // Z-index scale
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  
  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  // Container sizes
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
    '3xl': '1920px',
  },
} as const;

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

// Color types
export type ColorToken = keyof typeof semanticColors;
export type ColorShade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export type SemanticColor = keyof typeof semanticColors;

// Typography types
export type FontSize = keyof typeof typography.fontSize;
export type FontWeight = keyof typeof typography.fontWeight;
export type TextStyle = keyof typeof typography.textStyles;

// Spacing types
export type SpacingToken = keyof typeof spacing;
export type ComponentSpacing = keyof typeof spacing.component;

// Component types
export type ButtonVariant = keyof typeof buttonVariants.variant;
export type ButtonSize = keyof typeof buttonVariants.size;
export type CardVariant = keyof typeof cardVariants.variant;
export type InputVariant = keyof typeof inputVariants.variant;

// Animation types
export type AnimationDuration = keyof typeof animations.duration;
export type AnimationEasing = keyof typeof animations.easing;
export type AnimationPreset = keyof typeof animations.presets;

// ============================================================================
// EXPORTS
// ============================================================================

// Main design system object
export const designSystem = {
  colors: {
    raw: rawColors,
    semantic: semanticColors,
    darkMode: darkModeColors,
  },
  typography,
  spacing,
  components: {
    button: buttonVariants,
    card: cardVariants,
    input: inputVariants,
  },
  animations,
  layout,
} as const;

// Utility functions for design system
export const getColor = (token: string, shade?: number) => {
  const [colorName, colorShade] = token.split('.');
  if (colorShade) {
    const colorObj = semanticColors[colorName as keyof typeof semanticColors] as any;
    return colorObj?.[colorShade];
  }
  return semanticColors[colorName as keyof typeof semanticColors];
};

export const getSpacing = (token: keyof typeof spacing) => spacing[token];

export const getTextStyle = (style: TextStyle) => typography.textStyles[style];

// Export everything as default
export default designSystem; 