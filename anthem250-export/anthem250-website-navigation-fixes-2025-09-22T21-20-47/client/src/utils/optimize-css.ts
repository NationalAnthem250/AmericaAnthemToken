// CSS optimization utilities for performance

/**
 * Preload critical CSS for faster First Contentful Paint
 */
export const preloadCriticalCSS = () => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'style';
  link.href = '/src/critical.css';
  document.head.appendChild(link);
};

/**
 * Load non-critical CSS asynchronously
 */
export const loadNonCriticalCSS = (href: string) => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  link.media = 'print';
  link.onload = function() {
    // @ts-ignore
    this.media = 'all';
  };
  document.head.appendChild(link);
};

/**
 * Remove unused CSS variables from :root
 */
export const cleanupUnusedCSSVariables = () => {
  const root = document.documentElement;
  const computedStyle = getComputedStyle(root);
  const usedVariables = new Set<string>();
  
  // Get all CSS variables defined
  const allVariables = Array.from(computedStyle)
    .filter(prop => prop.startsWith('--'));
  
  // Check which variables are actually used
  document.querySelectorAll('*').forEach(element => {
    const styles = getComputedStyle(element);
    allVariables.forEach(variable => {
      const value = styles.getPropertyValue(variable);
      if (value && value !== '') {
        usedVariables.add(variable);
      }
    });
  });
  
  // Remove unused variables (in production only)
  if (import.meta.env.PROD) {
    allVariables.forEach(variable => {
      if (!usedVariables.has(variable)) {
        root.style.removeProperty(variable);
      }
    });
  }
};

/**
 * Optimize animations for mobile devices
 */
export const optimizeAnimationsForMobile = () => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    // Reduce animation complexity on mobile
    document.documentElement.style.setProperty('--animation-duration', '0.2s');
    
    // Disable complex animations
    const complexAnimations = document.querySelectorAll('.hover\\:scale-110, .hover\\:scale-105');
    complexAnimations.forEach(element => {
      element.classList.remove('hover:scale-110', 'hover:scale-105');
    });
  }
};

/**
 * Initialize all CSS optimizations
 */
export const initializeCSSOptimizations = () => {
  // Run optimizations after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      optimizeAnimationsForMobile();
      cleanupUnusedCSSVariables();
    });
  } else {
    optimizeAnimationsForMobile();
    cleanupUnusedCSSVariables();
  }
};