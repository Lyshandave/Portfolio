import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function TechnologiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // ========================================
  // TECHNOLOGY LOGOS - Edit URLs here for easy replacement
  // ========================================
  const technologies = [
    {
      name: 'HTML',
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
      // TO CHANGE LOGO: Replace logoUrl with your preferred logo URL
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
    },
    {
      name: 'Git',
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    {
      name: 'Windows',
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg'
    },
    {
      name: 'Linux',
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="pt-0 pb-32 bg-slate-900">
      {/* ========================================
          TECHNOLOGIES SECTION SPACING - CONNECTED TO SKILLS
          ======================================== */}
      {/* 
          pt-0 = NO TOP PADDING (connects directly from Skills section)
          pb-32 = large bottom padding (proper space before Projects section)
          
          BEFORE: pt-4 pb-32 (small top gap)
          AFTER: pt-0 pb-32 (zero top gap, seamless connection)
          RESULT: Technologies section flows directly from Skills section
      */}
      
      <motion.div 
        ref={ref}
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* ========================================
            SECTION TITLE - Edit title text here
            ======================================== */}
        <motion.div 
          className="text-center mb-12"
          // TITLE SPACING: Change mb-12 to adjust space between title and grid
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 className="text-3xl lg:text-4xl text-white mb-6">
            Technologies &amp; Tools  {/* CHANGE THIS TEXT to modify section title */}
          </motion.h2>
        </motion.div>

        {/* ========================================
            TECHNOLOGIES GRID - Logos and cards
            ======================================== */}
        <motion.div 
          className="max-w-5xl mx-auto"
          variants={containerVariants}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-6">
            {/* GRID SPACING: Change gap-4 lg:gap-6 to adjust spacing between cards */}
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                // ========================================
                // SHADOW BOX STYLING - Enhanced visibility
                // ========================================
                className="bg-slate-800/70 backdrop-blur-sm rounded-xl border border-slate-600/60 p-4 flex flex-col items-center space-y-3 group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300"
                // SHADOW BOX COLORS: 
                // - bg-slate-800/70 = background color/opacity
                // - border-slate-600/60 = border color/opacity
                // - shadow-xl = shadow size
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  borderColor: "rgba(139, 92, 246, 0.7)",
                  boxShadow: "0 25px 50px rgba(139, 92, 246, 0.2)"
                  // HOVER EFFECTS: Edit colors and shadow intensity here
                }}
                // ========================================
                // ENHANCED SHADOW ANIMATION - Always visible shadow
                // ========================================
                animate={{
                  boxShadow: [
                    "0 8px 25px rgba(0, 0, 0, 0.3)",
                    "0 12px 35px rgba(0, 0, 0, 0.4)", 
                    "0 8px 25px rgba(0, 0, 0, 0.3)"
                  ]
                }}
                transition={{
                  boxShadow: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                {/* ========================================
                    TECHNOLOGY LOGO SIZE - Edit logo dimensions here
                    ======================================== */}
                <motion.div 
                  className="w-7 h-7 lg:w-9 lg:h-9 flex items-center justify-center"
                  // LOGO SIZE OPTIONS:
                  // w-6 h-6 lg:w-8 lg:h-8 = very small
                  // w-8 h-8 lg:w-10 lg:h-10 = small (current - matches your reference)
                  // w-10 h-10 lg:w-12 lg:h-12 = medium
                  // w-12 h-12 lg:w-16 lg:h-16 = large (original size)
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  <ImageWithFallback
                    src={tech.logoUrl}
                    alt={`${tech.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                {/* ========================================
                    TECHNOLOGY NAME - Edit text styling here
                    ======================================== */}
                <motion.span 
                  className="text-gray-300 text-xs lg:text-sm text-center group-hover:text-white transition-colors duration-300"
                  // TEXT SIZE: text-xs lg:text-sm for smaller text to match reference
                  // TEXT COLOR: text-gray-300 = normal, group-hover:text-white = on hover
                >
                  {tech.name}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* ========================================
          CUSTOMIZATION GUIDE:
          
          TO CHANGE TECHNOLOGY LOGOS:
          1. Edit the logoUrl in the technologies array above
          2. Use DevIcons CDN URLs or any reliable image hosting service
          3. All logos will automatically resize and maintain aspect ratio
          
          TO ADJUST LOGO SIZE:
          - Edit the "w-7 h-7 lg:w-9 lg:h-9" classes in the motion.div
          - Current size is optimized to match your reference design
          
          TO CHANGE SHADOW BOX APPEARANCE:
          - bg-slate-800/70 = background color and opacity
          - border-slate-600/60 = border color and opacity
          - shadow-xl = shadow intensity
          
          TO MODIFY SPACING:
          CONNECTED TO SKILLS: pt-0 (zero top padding for seamless connection)
          PROJECTS SPACING: pb-32 (large bottom padding preserved)
          
          TO CHANGE GRID LAYOUT:
          - grid-cols-2 md:grid-cols-4 lg:grid-cols-8 = responsive columns
          - gap-4 lg:gap-6 = spacing between cards
          
          TO EDIT SECTION TITLE:
          - Change "Technologies & Tools" text in the h2 element
          
          RESPONSIVE BEHAVIOR:
          - Mobile: 2 columns, smaller logos
          - Tablet: 4 columns, medium logos  
          - Desktop: 8 columns, optimized logos
          
          PERFECT CONNECTION ACHIEVED:
          ✅ Skills → Technologies: Seamless connection (pt-0)
          ✅ Technologies → Projects: Large spacing preserved (pb-32)
          ✅ Visual flow: Skills flows directly into Technologies
          ======================================== */}
    </section>
  );
}