# ModernHeader Component Documentation

## Overview

The `ModernHeader` component is a sophisticated, responsive navigation header designed specifically for the Carestia Law website. It features scroll detection, smooth animations, mobile-responsive design, and professional styling that adapts based on user interactions.

## ✨ Key Features

### 🎯 **Sticky Navigation with Scroll Detection**
- Automatically detects scroll position
- Becomes more compact when scrolled (header height reduces from 80px to 64px)
- Background becomes semi-transparent with backdrop blur effect
- Adds elegant gold-tinted shadow when scrolled

### 🎨 **Professional Branding**
- Refined "CL" monogram with gradient gold background
- Firm name with "Attorneys at Law" subtitle
- Consistent typography using Playfair Display serif font
- Hover animations on logo elements

### 📱 **Mobile-First Responsive Design**
- Hamburger menu for mobile devices
- Smooth slide-out animation from right side
- Full-screen mobile menu with backdrop blur
- Expandable dropdown sections for sub-navigation
- Touch-friendly interactive elements

### 🎬 **Smooth Animations**
- Framer Motion powered animations
- Scroll-triggered size changes
- Menu transition animations
- Hover effects on interactive elements
- Backdrop animations

### ♿ **Accessibility Features**
- Keyboard navigation support
- ARIA labels for screen readers
- Focus management and escape key handling
- High contrast support
- Semantic HTML structure

### 🎪 **Advanced Navigation**
- Desktop dropdown menus for Practice Areas
- Smooth hover animations
- Auto-close functionality
- Nested navigation support

## 🏗️ Component Structure

```
ModernHeader/
├── Logo Component
├── Desktop Navigation
├── Mobile Menu
└── Main Header Container
```

### **Logo Component**
- Animated monogram that scales on scroll
- Firm name with responsive font sizing
- Professional tagline "Attorneys at Law"
- Hover effects and smooth transitions

### **Desktop Navigation** 
- Horizontal menu bar for large screens
- Dropdown support for sub-navigation
- Hover state animations
- Professional styling with gold accents

### **Mobile Menu**
- Slide-out panel from right side
- Full navigation hierarchy
- Contact information integration
- Call-to-action buttons

## 📋 Props Interface

```typescript
interface ModernHeaderProps {
  className?: string;           // Additional CSS classes
  monogram?: string;           // Logo monogram (default: 'CL')
  firmName?: string;           // Firm name (default: 'Carestia Law')
  contactNumber?: string;      // Phone number (default: '(555) 123-4567')
  navigationItems?: NavigationItem[]; // Custom navigation
  sticky?: boolean;            // Enable sticky behavior (default: true)
}

interface NavigationItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  subItems?: NavigationItem[];
}
```

## 🚀 Usage Examples

### **Basic Usage**
```tsx
import { ModernHeader } from '@/components/layout';

export default function Layout({ children }) {
  return (
    <>
      <ModernHeader />
      <main>{children}</main>
    </>
  );
}
```

### **Customized Usage**
```tsx
import { ModernHeader } from '@/components/layout';

const customNavigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Services', 
    href: '/services',
    hasDropdown: true,
    subItems: [
      { name: 'Consultation', href: '/services/consultation' },
      { name: 'Representation', href: '/services/representation' },
    ]
  },
];

export default function Layout({ children }) {
  return (
    <>
      <ModernHeader
        monogram="YF"
        firmName="Your Firm"
        contactNumber="(555) 987-6543"
        navigationItems={customNavigation}
      />
      <main>{children}</main>
    </>
  );
}
```

### **With Custom Styling**
```tsx
<ModernHeader 
  className="border-b-2 border-gold-rich"
  sticky={false}
/>
```

## 🎨 Styling & Design Tokens

### **Color Scheme**
- **Background**: Black (`#000000`) with transparency on scroll
- **Text**: White with gold hover states
- **Accents**: Gold gradient (`#FFD700` to `#B8860B`)
- **Logo**: Gold gradient background with black text

### **Typography**
- **Font Family**: Playfair Display (serif) for branding
- **Logo Size**: 24px desktop / 20px mobile (scales down when scrolled)
- **Navigation**: 14px medium weight
- **Responsive**: Automatic scaling based on screen size

### **Animations**
```typescript
// Scroll detection animations
const scrollAnimations = {
  header: {
    backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 1)',
    backdropFilter: isScrolled ? 'blur(10px)' : 'blur(0px)',
    boxShadow: isScrolled ? 'gold-tinted shadow' : 'none',
  },
  logo: {
    scale: isScrolled ? 0.9 : 1,
    fontSize: isScrolled ? '20px' : '24px',
  }
};

// Mobile menu animations
const mobileMenuAnimations = {
  backdrop: { opacity: [0, 1] },
  panel: { x: ['100%', '0%'] },
  items: { opacity: [0, 1], height: [0, 'auto'] }
};
```

## 🔧 Technical Implementation

### **Scroll Detection**
```typescript
useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 10);
  };

  if (sticky) {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }
}, [sticky]);
```

### **Mobile Menu Management**
```typescript
// Prevent body scroll when menu is open
useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }
  return () => {
    document.body.style.overflow = 'unset';
  };
}, [isOpen]);

// Escape key handling
useEffect(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsMobileMenuOpen(false);
    }
  };
  // ... event listener setup
}, [isMobileMenuOpen]);
```

### **Responsive Behavior**
- **Desktop** (≥ 1024px): Full horizontal navigation with dropdowns
- **Tablet/Mobile** (< 1024px): Hamburger menu with slide-out panel
- **Touch Devices**: Optimized touch targets and gestures

## 📱 Mobile Features

### **Slide-out Menu**
- Width: 320px (80 on Tailwind scale)
- Direction: Right-to-left slide
- Background: Black with gold accents
- Backdrop: Blurred with 50% opacity

### **Menu Structure**
1. **Header**: Logo and close button
2. **Navigation**: Expandable menu items
3. **Contact Info**: Phone number and consultation CTA
4. **Footer**: Emergency contact banner

### **Touch Interactions**
- Backdrop tap to close
- Smooth expand/collapse animations
- Touch-friendly button sizes (44px minimum)

## 🎯 Accessibility Features

### **Keyboard Navigation**
- Tab order follows logical flow
- Enter/Space key activation
- Escape key closes modals
- Arrow key navigation in dropdowns

### **Screen Reader Support**
```tsx
<Button aria-label="Open mobile menu">
  <Menu className="h-6 w-6" />
  <span className="sr-only">Toggle menu</span>
</Button>
```

### **Focus Management**
- Visible focus indicators
- Focus trapping in mobile menu
- Logical tab order
- Skip links for navigation

### **ARIA Labels**
- Descriptive button labels
- Navigation landmarks
- Menu state indicators
- Screen reader announcements

## 🚀 Performance Optimizations

### **Scroll Performance**
- Passive event listeners
- Throttled scroll detection
- Hardware-accelerated animations
- Efficient state updates

### **Animation Performance**
- CSS transforms over layout changes
- Will-change properties for smooth animations
- Framer Motion optimizations
- Reduced motion respect

### **Code Splitting**
- Lazy-loaded mobile menu components
- Conditional rendering based on screen size
- Optimized bundle size

## 🧪 Testing Considerations

### **Responsive Testing**
- Test on multiple device sizes
- Verify touch interactions
- Check menu animations
- Validate scroll behavior

### **Accessibility Testing**
- Screen reader compatibility
- Keyboard-only navigation
- High contrast mode
- Focus management

### **Performance Testing**
- Scroll performance on lower-end devices
- Animation smoothness
- Memory usage during interactions
- Bundle size impact

## 🔮 Future Enhancements

### **Potential Features**
- Search functionality integration
- Multi-language support
- Theme switching capability
- Advanced animation presets
- Voice navigation support

### **Customization Options**
- More color scheme variants
- Animation speed controls
- Layout configuration options
- Custom logo upload support

## 📚 Related Components

- **`ModernLayout`**: Layout wrapper that includes ModernHeader
- **`useSmoothScroll`**: Hook for smooth scrolling behavior
- **Design System**: Color and typography tokens
- **shadcn/ui**: Base UI components (Button, Sheet, Badge)

## 🐛 Troubleshooting

### **Common Issues**

1. **Scroll detection not working**
   - Check `sticky` prop is set to `true`
   - Verify scroll event listeners are attached
   - Ensure proper CSS positioning

2. **Mobile menu not appearing**
   - Check z-index values
   - Verify Framer Motion is installed
   - Validate viewport settings

3. **Typography not loading**
   - Confirm Playfair Display font is loaded
   - Check CSS variable definitions
   - Verify font display settings

4. **Performance issues**
   - Use passive scroll listeners
   - Optimize animation frequency
   - Check for memory leaks in useEffect

## 📄 License & Credits

This component is part of the Carestia Law website project and uses:
- **Framer Motion** for animations
- **Lucide React** for icons
- **shadcn/ui** for base components
- **Tailwind CSS** for styling
- **Next.js** for routing and optimization

---

*For additional support or customization requests, please refer to the project documentation or contact the development team.* 