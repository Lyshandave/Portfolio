import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const programmingLanguages = [
    { 
      name: 'HTML', 
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    { 
      name: 'CSS', 
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    { 
      name: 'JavaScript', 
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    { 
      name: 'Python', 
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    { 
      name: 'MySQL', 
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    }
  ];

  const technicalExpertise = [
    { 
      name: 'Installing & Configuring Computer Systems', 
      logoUrl: 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/computer-desktop.svg'
    },
    { 
      name: 'Setting up Networks and Servers', 
      logoUrl: 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/server-stack.svg'
    },
    { 
      name: 'Maintaining and Repairing Computer Systems', 
      logoUrl: 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/wrench-screwdriver.svg'
    },
    { 
      name: 'Technical Support & Troubleshooting', 
      logoUrl: 'https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/cog-6-tooth.svg'
    }
  ];

  return (
    <section id="skills" className="min-h-screen bg-slate-900 py-20 pb-0 flex items-center justify-center relative overflow-hidden">
      {/* ========================================
          SKILLS SECTION SPACING - REMOVED BOTTOM PADDING
          ======================================== */}
      {/* 
          py-20 = top padding (kept for proper spacing from About section)
          pb-0 = NO BOTTOM PADDING (connects directly to Technologies section)
          
          BEFORE: py-20 (padding top and bottom)
          AFTER: py-20 pb-0 (padding top only, zero bottom)
          RESULT: Skills section flows directly into Technologies section
      */}
      
      <motion.div 
        ref={ref}
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-500 mb-6"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: '200% 200%'
            }}
          >
            Skills &amp; Expertise
          </motion.h2>
          <motion.p 
            className="text-gray-200 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A comprehensive overview of my technical abilities and professional competencies
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
        >
          {/* Programming Languages */}
          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="flex items-center mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div 
                className="text-2xl mr-3 text-purple-400"
                animate={{
                  rotateY: [0, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                &lt;/&gt;
              </motion.div>
              <h3 className="text-2xl text-white">Programming Languages</h3>
            </motion.div>

            <motion.div 
              className="space-y-6"
              variants={containerVariants}
            >
              {programmingLanguages.map((language, index) => (
                <motion.div
                  key={language.name}
                  className="flex items-center group cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ 
                    x: 8,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className="w-6 h-6 mr-4 flex items-center justify-center"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2 + (index * 0.3),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <ImageWithFallback
                      src={language.logoUrl}
                      alt={`${language.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                  <motion.span 
                    className="text-gray-300 group-hover:text-white transition-colors duration-300"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {language.name}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Technical Expertise */}
          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-800/50 p-8"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="flex items-center mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.div 
                className="text-2xl mr-3 text-purple-400"
                animate={{
                  rotateZ: [0, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ⚙️
              </motion.div>
              <h3 className="text-2xl text-white">Technical Expertise</h3>
            </motion.div>

            <motion.div 
              className="space-y-6"
              variants={containerVariants}
            >
              {technicalExpertise.map((expertise, index) => (
                <motion.div
                  key={expertise.name}
                  className="flex items-start group cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ 
                    x: 8,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className="w-6 h-6 mr-4 mt-0.5 flex-shrink-0 flex items-center justify-center"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2.5 + (index * 0.3),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <ImageWithFallback
                      src={expertise.logoUrl}
                      alt={`${expertise.name} icon`}
                      className="w-full h-full object-contain text-purple-400"
                      style={{ filter: 'invert(0.6) sepia(1) saturate(5) hue-rotate(240deg)' }}
                    />
                  </motion.div>
                  <motion.span 
                    className="text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {expertise.name}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ========================================
          CUSTOMIZATION GUIDE:
          
          TO CHANGE PROGRAMMING LANGUAGE LOGOS:
          1. Edit the logoUrl in the programmingLanguages array
          2. Use DevIcons CDN URLs for consistent tech logos
          3. All logos automatically resize and maintain quality
          
          TO CHANGE TECHNICAL EXPERTISE ICONS:
          1. Edit the logoUrl in the technicalExpertise array  
          2. Use Heroicons CDN URLs for clean outline icons
          3. Icons auto-styled with purple color filter
          
          TO MODIFY SPACING BETWEEN SKILLS AND TECHNOLOGIES:
          - Current: pb-0 (zero bottom padding - sections connected)
          - For gap: change pb-0 to pb-8, pb-12, pb-16, etc.
          - For overlap: use negative margins in Technologies section
          
          TO ADJUST GRID LAYOUT:
          - grid-cols-1 lg:grid-cols-2 = single column mobile, two columns desktop
          - gap-8 = spacing between Programming and Technical cards
          
          TO EDIT SECTION TITLE:
          - Change "Skills & Expertise" text in the h2 element
          - Animated gradient text automatically applies
          
          RESPONSIVE BEHAVIOR:
          - Mobile: Single column layout, smaller cards
          - Tablet: Single column, medium cards
          - Desktop: Two column layout, full-sized cards
          
          CONNECTED TO TECHNOLOGIES SECTION:
          ✅ Zero bottom padding creates seamless flow
          ✅ Skills flows directly into Technologies
          ✅ Perfect visual connection maintained
          ======================================== */}
    </section>
  );
}