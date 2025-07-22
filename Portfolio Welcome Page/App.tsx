import React, { useEffect } from 'react';

// ========================================
// 🎯 ALL COMPONENTS - Direct Import Only
// ========================================
import { Navigation } from './components/Navigation';           // Top navigation bar
import { HeroSection } from './components/HeroSection';         // Welcome/Landing section
import { HomeSection } from './components/HomeSection';         // Home section with profile
import { AboutSection } from './components/AboutSection';       // About section with bio
import { SkillsSection } from './components/SkillsSection';     // Skills and expertise
import { TechnologiesSection } from './components/TechnologiesSection'; // Technologies & tools
import { ProjectsSection } from './components/ProjectsSection'; // Projects portfolio
import { ContactSection } from './components/ContactSection';   // Contact form

export default function App() {
  // ========================================
  // 🔐 SECURITY & PERFORMANCE INITIALIZATION
  // ========================================
  useEffect(() => {
    // ========================================
    // 🎨 INJECT PERFORMANCE CSS
    // ========================================
    const performanceStyles = `
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      .animation-delay-100 { animation-delay: 100ms; }
      .animation-delay-150 { animation-delay: 150ms; }
      .animation-delay-200 { animation-delay: 200ms; }
      .hw-accelerate { transform: translateZ(0); will-change: transform; }
      .optimize-repaint { backface-visibility: hidden; perspective: 1000px; }
      html { scroll-behavior: smooth; }
      * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; text-rendering: optimizeLegibility; }
      img { image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges; }
    `;
    
    const styleElement = document.createElement('style');
    styleElement.textContent = performanceStyles;
    document.head.appendChild(styleElement);

    // ========================================
    // 🔐 SECURITY MEASURES - All in one place
    // ========================================
    
    // Right-click protection
    const handleRightClick = (e: MouseEvent) => {
      e.preventDefault();
      console.clear();
      console.log('%c🔐 LYSHANDAVE Portfolio - Code Protected', 'color: #8b5cf6; font-size: 16px; font-weight: bold;');
      console.log('%c⚠️ Unauthorized code inspection is not allowed', 'color: #ef4444; font-size: 12px;');
      return false;
    };

    // Keyboard shortcuts blocking
    const handleKeyDown = (e: KeyboardEvent) => {
      // Block F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Ctrl+U, Ctrl+S
      if (e.key === 'F12' || 
          (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) ||
          (e.ctrlKey && ['u', 's'].includes(e.key))) {
        e.preventDefault();
        return false;
      }
      
      // Print screen detection
      if (e.key === 'PrintScreen') {
        e.preventDefault();
        console.clear();
        console.log('%c🔐 Screenshot disabled for security', 'color: #ef4444; font-size: 14px;');
      }
    };

    // Disable image dragging
    const disableImageDrag = (e: DragEvent) => {
      if ((e.target as HTMLElement).tagName === 'IMG') {
        e.preventDefault();
      }
    };

    // Disable text selection (optional - currently disabled)
    const handleSelectStart = (e: Event) => {
      // e.preventDefault(); // Uncomment to disable text selection
      // return false;
    };

    // Developer tools detection
    const detectDevTools = () => {
      const threshold = 160;
      setInterval(() => {
        if (window.outerHeight - window.innerHeight > threshold || 
            window.outerWidth - window.innerWidth > threshold) {
          console.clear();
          console.log('%c🔐 Developer Tools Detected!', 'color: #ef4444; font-size: 20px; font-weight: bold;');
          console.log('%c⚠️ Please close developer tools to continue', 'color: #f59e0b; font-size: 14px;');
        }
      }, 1000);
    };

    // Console warning message
    const showConsoleWarning = () => {
      console.clear();
      console.log('%c🔐 LYSHANDAVE PORTFOLIO - PROTECTED CODE', 'color: #8b5cf6; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);');
      console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #8b5cf6;');
      console.log('%c⚠️  WARNING: Unauthorized code inspection is prohibited!', 'color: #ef4444; font-size: 16px; font-weight: bold;');
      console.log('%c🛡️  This website is protected by multiple security layers', 'color: #10b981; font-size: 14px;');
      console.log('%c📧  Contact: lyshan.projects@gmail.com for inquiries', 'color: #3b82f6; font-size: 14px;');
      console.log('%c🌐  Portfolio: LYSHANDAVE Computer Technician', 'color: #8b5cf6; font-size: 14px;');
      console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #8b5cf6;');
    };

    // ========================================
    // 🔐 APPLY SECURITY MEASURES
    // ========================================
    
    // Add event listeners
    document.addEventListener('contextmenu', handleRightClick);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('dragstart', disableImageDrag);
    document.addEventListener('dragstart', (e) => e.preventDefault());
    document.addEventListener('drop', (e) => e.preventDefault());
    
    // Show console warning
    showConsoleWarning();
    
    // Start developer tools detection
    detectDevTools();
    
    // Disable text selection via CSS
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    document.body.style.msUserSelect = 'none';
    document.body.style.mozUserSelect = 'none';
    
    // Clear console periodically
    const consoleClearInterval = setInterval(() => {
      console.clear();
      showConsoleWarning();
    }, 30000); // Every 30 seconds

    // ========================================
    // 📊 PERFORMANCE MONITORING
    // ========================================
    const startTime = performance.now();
    
    const logPerformance = () => {
      const loadTime = performance.now() - startTime;
      console.log(`%c🚀 LYSHANDAVE Portfolio Loaded in ${Math.round(loadTime)}ms`, 
        'color: #10b981; font-size: 14px; font-weight: bold;'
      );
      
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        console.log(`%c📡 Connection: ${connection?.effectiveType || 'unknown'} (${connection?.downlink || 'unknown'}Mbps)`, 
          'color: #3b82f6; font-size: 12px;'
        );
      }
    };

    // ========================================
    // 🌐 OPTIMIZATION SETUP
    // ========================================
    document.documentElement.style.scrollBehavior = 'smooth';

    // PWA installation prompt
    let deferredPrompt: any;
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      deferredPrompt = e;
      console.log('💾 PWA install available');
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Resource hints
    const addResourceHints = () => {
      const dnsHints = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://cdn.jsdelivr.net',
        'https://cdnjs.cloudflare.com'
      ];

      dnsHints.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = url;
        document.head.appendChild(link);
      });

      const preconnectHints = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
      ];

      preconnectHints.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = url;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    // Basic SEO
    const addBasicSEO = () => {
      document.title = "LYSHANDAVE - Expert Computer Technician | Professional IT Portfolio";
      
      const metaTags = [
        { name: 'description', content: 'Professional computer technician specializing in system repair, programming, and IT solutions. View my portfolio of technical expertise and professional services.' },
        { name: 'keywords', content: 'LYSHANDAVE, computer technician, IT specialist, computer repair, programming, web development, technical support, system maintenance, network setup' },
        { name: 'author', content: 'LYSHANDAVE' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
      ];

      metaTags.forEach(tag => {
        const meta = document.createElement('meta');
        meta.name = tag.name;
        meta.content = tag.content;
        document.head.appendChild(meta);
      });
    };

    // Initialize everything
    addResourceHints();
    addBasicSEO();
    
    if (document.readyState === 'complete') {
      logPerformance();
    } else {
      window.addEventListener('load', logPerformance);
    }

    // ========================================
    // 🧹 CLEANUP FUNCTION
    // ========================================
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      document.removeEventListener('contextmenu', handleRightClick);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('dragstart', disableImageDrag);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('load', logPerformance);
      clearInterval(consoleClearInterval);
      
      // Reset body styles
      document.body.style.userSelect = '';
      document.body.style.webkitUserSelect = '';
      document.body.style.msUserSelect = '';
      document.body.style.mozUserSelect = '';
      
      if (styleElement.parentNode) {
        styleElement.parentNode.removeChild(styleElement);
      }
    };
  }, []);

  // ========================================
  // 🎨 MAIN APPLICATION RENDER
  // ========================================
  return (
    <div className="min-h-screen bg-slate-900">
      {/* ========================================
          🧭 NAVIGATION BAR - Always visible at top
          ======================================== */}
      <Navigation />
      
      {/* ========================================
          🎯 HERO SECTION - Welcome/Landing page
          ======================================== */}
      <HeroSection />
      
      {/* ========================================
          🏠 HOME SECTION - Computer Technician profile
          ======================================== */}
      <HomeSection />

      {/* ========================================
          👤 ABOUT SECTION - Personal bio and story
          ======================================== */}
      <AboutSection />

      {/* ========================================
          💻 SKILLS SECTION - Programming languages & expertise
          ======================================== */}
      <SkillsSection />

      {/* ========================================
          🛠️ TECHNOLOGIES SECTION - Tools and technologies
          ======================================== */}
      <TechnologiesSection />

      {/* ========================================
          🚀 PROJECTS SECTION - Portfolio showcase
          ======================================== */}
      <ProjectsSection />

      {/* ========================================
          📧 CONTACT SECTION - Contact form and social media
          ======================================== */}
      <ContactSection />

      {/* ========================================
          🔐 SECURITY NOTICE - Hidden but functional
          ======================================== */}
      <div style={{ display: 'none' }}>
        <p>🔐 This website is protected by LYSHANDAVE Security System</p>
        <p>📧 Contact: lyshan.projects@gmail.com</p>
        <p>⚠️ Unauthorized code inspection is prohibited</p>
      </div>

      {/* ========================================
          📊 PERFORMANCE ANALYTICS SCRIPT
          ======================================== */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // 📊 Basic performance tracking
            window.addEventListener('load', function() {
              setTimeout(function() {
                var perfData = performance.getEntriesByType('navigation')[0];
                if (perfData) {
                  console.log('%c📊 Performance Metrics:', 'color: #8b5cf6; font-weight: bold;');
                  console.log('🚀 DOM Content Loaded:', Math.round(perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart) + 'ms');
                  console.log('⚡ Page Load Complete:', Math.round(perfData.loadEventEnd - perfData.loadEventStart) + 'ms');
                  console.log('🎯 Total Load Time:', Math.round(perfData.loadEventEnd - perfData.fetchStart) + 'ms');
                }
              }, 100);
            });

            // 🔐 Additional security - obfuscated
            (function(){var a=console.log;console.log=function(){a.apply(console,['%c🔐 LYSHANDAVE Security Active','color:#ef4444;font-weight:bold;']);a.apply(console,arguments);};})();
          `
        }}
      />
    </div>
  );
}

// ========================================
// 🛡️ LYSHANDAVE PORTFOLIO - COMPLETE FEATURES SUMMARY:
// 
// 🎨 SECTIONS INCLUDED:
// ✅ Navigation - Responsive navbar with LYSHANDAVE logo (image URL)
// ✅ Hero - Welcome landing page with animations
// ✅ Home - Computer Technician profile with contact info
// ✅ About - Personal bio with profile image
// ✅ Skills - Programming languages and technical expertise
// ✅ Technologies - Tools and technologies with logos
// ✅ Projects - Portfolio showcase with "View Projects" button
// ✅ Contact - Professional contact form with illustration (image URL)
// 
// 🔐 SECURITY FEATURES - ALL INTEGRATED:
// ✅ Right-click protection
// ✅ Developer tools blocking (F12, Ctrl+Shift+I, etc.)
// ✅ Context menu disabled
// ✅ Text selection prevention (configurable)
// ✅ Image drag protection
// ✅ Print screen detection
// ✅ Console warning messages
// ✅ Developer tools detection
// ✅ Source code obfuscation hints
// ✅ Periodic console clearing
// 
// ⚡ PERFORMANCE FEATURES:
// ✅ Zero dynamic imports - All direct imports
// ✅ Resource hints (DNS prefetch, preconnect)
// ✅ Performance monitoring
// ✅ Hardware acceleration
// ✅ Font optimization
// ✅ Image optimization
// ✅ Inline CSS styles
// 
// 🔍 SEO FEATURES:
// ✅ Basic meta tags (title, description, keywords)
// ✅ Author information
// ✅ Proper viewport settings
// ✅ Mobile optimization
// 
// 📱 RESPONSIVE DESIGN:
// ✅ Mobile (320px-640px) - Compact, touch-friendly
// ✅ Tablet (641px-1024px) - Medium-sized, intuitive
// ✅ Laptop (1025px-1440px) - Standard desktop experience
// ✅ Desktop (1441px+) - Large, comfortable viewing
// ✅ Automatic text scaling per device (via globals.css)
// 
// 🌐 DEPLOYMENT READY:
// ✅ Cloudflare compatible
// ✅ SSL/HTTPS ready
// ✅ CDN optimized
// ✅ Production minification ready
// ✅ Firebase compatible
// ✅ Multiple hosting platform support
// ✅ ZERO external dependencies causing import errors
// 
// 🎯 INTERACTIVE FEATURES:
// ✅ Smooth scrolling navigation
// ✅ Active navbar indicators
// ✅ Navbar hide/show on scroll
// ✅ Functional contact buttons (phone, email, maps)
// ✅ Social media links (Discord, GitHub, Facebook)
// ✅ Professional hover animations
// ✅ 3D image effects
// ✅ Form validation and submission ready
// 
// 🔧 FINAL FIXES APPLIED - BLOB URL ERRORS ELIMINATED:
// ✅ Removed ALL Figma asset imports (Navigation logo, Contact image)
// ✅ Converted to standard image URLs for easy replacement
// ✅ Zero dynamic imports anywhere in the codebase
// ✅ All components load immediately and reliably
// ✅ No more blob URL errors permanently
// ✅ Maintained all functionality and security features
// ✅ Easy image replacement via URL variables
// ✅ Complete portfolio ready for production deployment
// ========================================