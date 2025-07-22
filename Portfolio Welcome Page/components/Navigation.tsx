import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navigation() {
  // ========================================
  // LOGO CONFIGURATION - LYSHANDAVE Custom Logo
  // ========================================
  const logoImageUrl = "https://i.imgur.com/U9dRe69.png";
  // TO CHANGE LOGO: Simply replace the logoImageUrl above with your logo image URL

  // ========================================
  // MENU CONFIGURATION - Edit menu items here
  // ========================================
  const menuItems = [
    { name: 'Welcome', id: 'welcome' },  // Change 'Welcome' to edit menu text
    { name: 'Home', id: 'home' },       // Change 'Home' to edit menu text
    { name: 'About', id: 'about' },     // Change 'About' to edit menu text
    { name: 'Skills', id: 'skills' },   // Change 'Skills' to edit menu text
    { name: 'Projects', id: 'projects' }, // Change 'Projects' to edit menu text
    { name: 'Contact', id: 'contact' }  // Change 'Contact' to edit menu text
  ];

  // ========================================
  // STATE MANAGEMENT - SIMPLIFIED (NO AUTO-HIDE)
  // ========================================
  const [activeSection, setActiveSection] = useState('welcome');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ========================================
  // SCROLL SECTION DETECTION - Active section only
  // ========================================
  useEffect(() => {
    const handleScroll = () => {
      // Active section detection (optimized for better performance)
      const sections = menuItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });
    return () => window.removeEventListener('scroll', scrollListener);
  }, [menuItems]);

  // ========================================
  // IMPROVED SCROLL FUNCTION - No navbar hiding
  // ========================================
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Calculate proper offset
      const navbarHeight = 80;
      const extraOffset = sectionId === 'contact' ? 40 : 0; // Extra space for contact section
      const offsetTop = section.offsetTop - navbarHeight - extraOffset;
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  // ========================================
  // MOBILE MENU TOGGLE
  // ========================================
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* ========================================
          ALWAYS VISIBLE NAVBAR - No auto-hide behavior
          ======================================== */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800/50">
        <div className="container mx-auto px-6 py-4">
          {/* ========================================
              CENTERED NAVBAR LAYOUT - Main container
              ======================================== */}
          <div className="flex items-center justify-center relative">
            
            {/* ========================================
                LOGO SECTION - LYSHANDAVE Custom Logo (ABSOLUTE POSITIONED LEFT)
                ======================================== */}
            <motion.div 
              className="absolute left-0 flex items-center space-x-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('welcome')}
            >
              {/* ========================================
                  LOGO SIZE CONTROL - EDIT THESE VALUES TO ADJUST LOGO SIZE
                  ======================================== */}
              <motion.div 
                className="h-30 rounded-lg overflow-hidden bg-transparent flex items-center justify-center"
                /* 👆 LOGO HEIGHT: Change 'h-16' to adjust container height
                     (large)
                     - h-16 = 64px (extra large) ← CURRENT SIZE
                     - h-20 = 80px (huge)
                     - h-24 = 96px (massive) */
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
              >
                <img
                  src={logoImageUrl}
                  alt="LYSHANDAVE Logo"
                  className="h-full w-auto object-contain"
                  style={{ 
                    filter: 'brightness(1.1) contrast(1.05)',
                    maxHeight: '120px'  /* 👈 EXACT PIXEL SIZE: Change this to match the height above
                                            - h-8  = maxHeight: '32px'
                                            - h-10 = maxHeight: '40px'
                                            - h-12 = maxHeight: '48px'
                                            - h-14 = maxHeight: '56px'
                                            - h-16 = maxHeight: '64px' ← CURRENT
                                            - h-20 = maxHeight: '80px'
                                            - h-24 = maxHeight: '96px' */
                  }}
                />
              </motion.div>
            </motion.div>

            {/* ========================================
                CENTERED NAVIGATION MENU - Desktop menu
                ======================================== */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative transition-colors duration-200 ${
                    activeSection === item.id 
                      ? 'text-purple-400'           
                      : 'text-gray-300 hover:text-purple-400'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.15 }} // Faster transitions
                >
                  {item.name}
                  
                  {/* ACTIVE INDICATOR */}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-400"
                      layoutId="activeTab"
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* ========================================
                MOBILE MENU BUTTON - For small screens
                ======================================== */}
            <motion.button 
              className="absolute right-0 md:hidden text-gray-300 hover:text-purple-400 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMobileMenu}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* ========================================
          MOBILE MENU DROPDOWN - Animated mobile menu
          ======================================== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed top-[73px] left-0 right-0 z-40 md:hidden bg-slate-900/95 backdrop-blur-md border-b border-slate-800/50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col space-y-4">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left py-2 transition-colors duration-200 ${
                      activeSection === item.id 
                        ? 'text-purple-400 border-l-2 border-purple-400 pl-4'
                        : 'text-gray-300 hover:text-purple-400 hover:pl-2'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.15,
                      delay: index * 0.05 // Minimal stagger for faster appearance
                    }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================
          NAVBAR BEHAVIOR UPDATED:
          
          ✅ ALWAYS VISIBLE - Navbar no longer hides when scrolling down
          ✅ SMOOTH SCROLLING - Perfect navigation to all sections
          ✅ ACTIVE INDICATORS - Shows current section
          ✅ RESPONSIVE DESIGN - Works on all devices
          ✅ LOGO POSITIONING - LYSHANDAVE logo perfectly positioned left
          ✅ CENTERED MENU - Navigation items centered
          ✅ MOBILE FRIENDLY - Hamburger menu for small screens
          
          REMOVED FEATURES:
          ❌ Auto-hide on scroll down
          ❌ Show on scroll up
          ❌ Scroll direction detection
          ❌ Visibility state management
          
          NAVBAR NOW STAYS VISIBLE AT ALL TIMES FOR BETTER UX!
          ======================================== */}
    </>
  );
}