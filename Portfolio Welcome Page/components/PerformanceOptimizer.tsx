import React, { Suspense, lazy, useState, useEffect } from 'react';

// ========================================
// 🚀 LAZY LOADING COMPONENTS - Fixed imports
// ======================================== 
const LazyHomeSection = lazy(() => import('./HomeSection'));
const LazyAboutSection = lazy(() => import('./AboutSection'));
const LazySkillsSection = lazy(() => import('./SkillsSection'));
const LazyTechnologiesSection = lazy(() => import('./TechnologiesSection'));
const LazyProjectsSection = lazy(() => import('./ProjectsSection'));
const LazyContactSection = lazy(() => import('./ContactSection'));

// ========================================
// 🎨 LOADING SPINNER COMPONENT
// ========================================
function LoadingSpinner({ section }: { section: string }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinning loader */}
        <div className="relative">
          <div className="w-12 h-12 border-4 border-slate-700 border-t-purple-500 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-r-purple-400 rounded-full animate-spin animation-delay-150"></div>
        </div>
        
        {/* Loading text */}
        <div className="text-center">
          <p className="text-purple-400 font-medium">Loading {section}...</p>
          <p className="text-slate-400 text-sm">Optimizing for performance</p>
        </div>
        
        {/* Progress dots */}
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse animation-delay-100"></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse animation-delay-200"></div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// 🔍 INTERSECTION OBSERVER HOOK - Lazy Loading
// ========================================
function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [targetRef, setTargetRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!targetRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: '100px', // Start loading 100px before entering viewport
        ...options
      }
    );

    observer.observe(targetRef);

    return () => {
      observer.disconnect();
    };
  }, [targetRef, options]);

  return [targetRef, isIntersecting, setTargetRef] as const;
}

// ========================================
// 🎯 LAZY SECTION WRAPPER
// ========================================
interface LazySectionProps {
  children: React.ReactNode;
  sectionName: string;
  id?: string;
  className?: string;
}

function LazySection({ children, sectionName, id, className }: LazySectionProps) {
  const [ref, isVisible, setRef] = useIntersectionObserver();
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (isVisible && !hasLoaded) {
      setHasLoaded(true);
    }
  }, [isVisible, hasLoaded]);

  return (
    <div ref={setRef} id={id} className={className}>
      {hasLoaded ? (
        <Suspense fallback={<LoadingSpinner section={sectionName} />}>
          {children}
        </Suspense>
      ) : (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center">
          <div className="text-slate-600 text-center">
            <div className="w-8 h-8 border-2 border-slate-700 border-t-purple-500 rounded-full animate-spin mx-auto mb-2"></div>
            <p className="text-sm">Preparing {sectionName}...</p>
          </div>
        </div>
      )}
    </div>
  );
}

// ========================================
// 🚀 PERFORMANCE OPTIMIZED SECTIONS
// ========================================
export function OptimizedSections() {
  // ========================================
  // 📊 PERFORMANCE MONITORING
  // ========================================
  useEffect(() => {
    // Performance observer for monitoring loading times
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            console.log('🚀 Page Load Performance:', {
              loadTime: `${Math.round(entry.loadEventEnd - entry.loadEventStart)}ms`,
              domContentLoaded: `${Math.round(entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart)}ms`,
              firstPaint: 'Check DevTools Performance tab'
            });
          }
        }
      });
      
      observer.observe({ entryTypes: ['navigation'] });
      
      return () => observer.disconnect();
    }
  }, []);

  // ========================================
  // 🎯 PRELOAD CRITICAL SECTIONS
  // ========================================
  useEffect(() => {
    // Preload critical sections after initial load
    const preloadTimer = setTimeout(() => {
      // Preload Home and About sections (most important)
      import('./HomeSection');
      import('./AboutSection');
    }, 1000);

    // Preload remaining sections after 3 seconds
    const preloadDelayedTimer = setTimeout(() => {
      import('./SkillsSection');
      import('./TechnologiesSection');
      import('./ProjectsSection');
      import('./ContactSection');
    }, 3000);

    return () => {
      clearTimeout(preloadTimer);
      clearTimeout(preloadDelayedTimer);
    };
  }, []);

  return (
    <>
      {/* ========================================
          🏠 HOME SECTION - Priority Load
          ======================================== */}
      <LazySection sectionName="Home" id="home">
        <LazyHomeSection />
      </LazySection>

      {/* ========================================
          👤 ABOUT SECTION - High Priority
          ======================================== */}
      <LazySection sectionName="About" id="about">
        <LazyAboutSection />
      </LazySection>

      {/* ========================================
          💻 SKILLS SECTION - Medium Priority
          ======================================== */}
      <LazySection sectionName="Skills" id="skills">
        <LazySkillsSection />
      </LazySection>

      {/* ========================================
          🛠️ TECHNOLOGIES SECTION - Medium Priority
          ======================================== */}
      <LazySection sectionName="Technologies">
        <LazyTechnologiesSection />
      </LazySection>

      {/* ========================================
          🚀 PROJECTS SECTION - Lower Priority
          ======================================== */}
      <LazySection sectionName="Projects" id="projects">
        <LazyProjectsSection />
      </LazySection>

      {/* ========================================
          📧 CONTACT SECTION - Lower Priority
          ======================================== */}
      <LazySection sectionName="Contact" id="contact">
        <LazyContactSection />
      </LazySection>
    </>
  );
}

// ========================================
// 🎨 CUSTOM CSS FOR LOADING ANIMATIONS
// ========================================
export const performanceStyles = `
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .animation-delay-100 {
    animation-delay: 100ms;
  }

  .animation-delay-150 {
    animation-delay: 150ms;
  }

  .animation-delay-200 {
    animation-delay: 200ms;
  }

  /* ========================================
     🚀 PERFORMANCE OPTIMIZATION CSS
     ======================================== */
  
  /* Hardware acceleration for animations */
  .hw-accelerate {
    transform: translateZ(0);
    will-change: transform;
  }

  /* Optimize repaints */
  .optimize-repaint {
    backface-visibility: hidden;
    perspective: 1000px;
  }

  /* Smooth scrolling for all devices */
  html {
    scroll-behavior: smooth;
  }

  /* Optimize font rendering */
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  /* Image optimization */
  img {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
  }
`;

// ========================================
// 🔧 PERFORMANCE OPTIMIZATION GUIDE:
// 
// FEATURES IMPLEMENTED:
// ✅ Lazy loading with Intersection Observer
// ✅ Code splitting for each section
// ✅ Intelligent preloading strategy
// ✅ Performance monitoring
// ✅ Loading states and animations
// ✅ Hardware acceleration hints
// ✅ Progressive loading (critical sections first)
// 
// LOADING STRATEGY:
// 1. Immediate: Navigation & Hero (always visible)
// 2. Priority: Home & About (preload after 1s)
// 3. Standard: Skills, Technologies, Projects, Contact (preload after 3s)
// 4. On-demand: Only load when scrolling near section
// 
// FIXED IMPORT ISSUES:
// ✅ Simplified dynamic imports
// ✅ Removed complex module destructuring
// ✅ Direct component imports
// ✅ Proper fallback handling
// ========================================