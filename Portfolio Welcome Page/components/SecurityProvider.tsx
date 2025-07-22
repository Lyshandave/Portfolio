import React, { useEffect } from 'react';

export function SecurityProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // ========================================
    // 🔐 RIGHT-CLICK & CONTEXT MENU BLOCKER
    // ========================================
    const handleRightClick = (e: MouseEvent) => {
      e.preventDefault();
      console.clear();
      console.log('%c🔐 LYSHANDAVE Portfolio - Code Protected', 'color: #8b5cf6; font-size: 16px; font-weight: bold;');
      console.log('%c⚠️ Unauthorized code inspection is not allowed', 'color: #ef4444; font-size: 12px;');
      return false;
    };

    // ========================================
    // 🔐 KEYBOARD SHORTCUTS BLOCKER
    // ========================================
    const handleKeyDown = (e: KeyboardEvent) => {
      // Block F12 (Developer Tools)
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }
      
      // Block Ctrl+Shift+I (Developer Tools)
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        return false;
      }
      
      // Block Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        return false;
      }
      
      // Block Ctrl+Shift+C (Element Inspector)
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        return false;
      }
      
      // Block Ctrl+U (View Source)
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        return false;
      }
      
      // Block Ctrl+S (Save Page)
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        return false;
      }
      
      // Block Ctrl+A (Select All) - Optional, uncomment if needed
      // if (e.ctrlKey && e.key === 'a') {
      //   e.preventDefault();
      //   return false;
      // }
      
      // Block Ctrl+P (Print) - Optional, uncomment if needed
      // if (e.ctrlKey && e.key === 'p') {
      //   e.preventDefault();
      //   return false;
      // }
    };

    // ========================================
    // 🔐 TEXT SELECTION BLOCKER (Optional)
    // ========================================
    const handleSelectStart = (e: Event) => {
      // Uncomment to disable text selection
      // e.preventDefault();
      // return false;
    };

    // ========================================
    // 🔐 DEVELOPER TOOLS DETECTION
    // ========================================
    const detectDevTools = () => {
      const threshold = 160; // DevTools width threshold
      
      setInterval(() => {
        if (window.outerHeight - window.innerHeight > threshold || 
            window.outerWidth - window.innerWidth > threshold) {
          console.clear();
          console.log('%c🔐 Developer Tools Detected!', 'color: #ef4444; font-size: 20px; font-weight: bold;');
          console.log('%c⚠️ Please close developer tools to continue', 'color: #f59e0b; font-size: 14px;');
          // Optional: Redirect or disable functionality
          // window.location.href = 'about:blank';
        }
      }, 1000);
    };

    // ========================================
    // 🔐 CONSOLE WARNING MESSAGE
    // ========================================
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
    // 🔐 ACTIVATE SECURITY MEASURES
    // ========================================
    
    // Add event listeners
    document.addEventListener('contextmenu', handleRightClick);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('selectstart', handleSelectStart);
    
    // Show console warning
    showConsoleWarning();
    
    // Start developer tools detection
    detectDevTools();
    
    // ========================================
    // 🔐 ADDITIONAL PROTECTION MEASURES
    // ========================================
    
    // Disable text selection via CSS (added to body)
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    document.body.style.msUserSelect = 'none';
    document.body.style.mozUserSelect = 'none';
    
    // Disable drag and drop
    document.addEventListener('dragstart', (e) => e.preventDefault());
    document.addEventListener('drop', (e) => e.preventDefault());
    
    // Clear console periodically
    const consoleClearInterval = setInterval(() => {
      console.clear();
      showConsoleWarning();
    }, 30000); // Every 30 seconds

    // ========================================
    // 🔐 CLEANUP FUNCTION
    // ========================================
    return () => {
      document.removeEventListener('contextmenu', handleRightClick);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('selectstart', handleSelectStart);
      clearInterval(consoleClearInterval);
      
      // Reset body styles
      document.body.style.userSelect = '';
      document.body.style.webkitUserSelect = '';
      document.body.style.msUserSelect = '';
      document.body.style.mozUserSelect = '';
    };
  }, []);

  return <>{children}</>;
}

// ========================================
// 🔐 SECURITY CONFIGURATION NOTES:
// 
// TO ADJUST SECURITY LEVELS:
// 1. DISABLE FEATURES: Comment out unwanted event listeners
// 2. TEXT SELECTION: Uncomment handleSelectStart preventDefault to disable text selection
// 3. DEV TOOLS: Adjust 'threshold' value for dev tools detection sensitivity
// 4. CONSOLE CLEAR: Change interval time (currently 30000ms = 30 seconds)
// 
// FEATURES INCLUDED:
// ✅ Right-click blocking
// ✅ Developer tools keyboard shortcuts blocking
// ✅ Developer tools detection
// ✅ Console warnings and clearing
// ✅ Text selection prevention (configurable)
// ✅ Drag & drop prevention
// ✅ Save page prevention
// ✅ View source prevention
// 
// OPTIONAL FEATURES (Currently commented):
// - Print blocking (Ctrl+P)
// - Select all blocking (Ctrl+A)
// - Automatic redirect when dev tools detected
// ========================================