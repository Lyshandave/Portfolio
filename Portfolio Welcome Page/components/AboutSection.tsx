import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // ========================================
  // PROFILE IMAGE - Edit image URL here
  // ========================================
  const aboutProfileImageUrl = "https://i.imgur.com/8RnDh00.jpg"; 
  // TO CHANGE IMAGE: Simply replace the URL above with your new image URL
  // TIPS: 
  // - Use image hosting services like imgur.com, postimg.cc, or imgbb.com
  // - Make sure the image is square (1:1 ratio) for best circular appearance
  // - Recommended size: 400x400 pixels or larger

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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

  const titleVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="min-h-screen bg-slate-900 py-20 flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

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
          variants={titleVariants}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-500 mb-4"
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
            About Me
          </motion.h2>
        </motion.div>

        {/* Main Content Card */}
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={cardVariants}
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              
              {/* Left Side - Profile */}
              <motion.div 
                className="flex flex-col items-center text-center"
                initial={{ x: -50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {/* Profile Picture Container */}
                <motion.div 
                  className="relative mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated Border */}
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 rounded-full opacity-75"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Profile Picture Circle - CHANGE IMAGE URL ABOVE */}
                  <motion.div 
                    className="relative w-36 h-36 lg:w-48 lg:h-48 rounded-full border-4 border-slate-800 overflow-hidden"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(139, 92, 246, 0.3)",
                        "0 0 40px rgba(139, 92, 246, 0.5)",
                        "0 0 20px rgba(139, 92, 246, 0.3)"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <ImageWithFallback
                      src={aboutProfileImageUrl}
                      alt="Lyshan Dave B. Tomo Profile"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Verification Badge */}
                  <motion.div 
                    className="absolute -bottom-2 -right-2 bg-blue-500 rounded-full p-2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <CheckCircle className="w-6 h-6 text-white" />
                  </motion.div>
                </motion.div>

                {/* Name and Title */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <h3 className="text-xl lg:text-2xl text-white mb-2">Lyshan Dave B. Tomo</h3>
                  <motion.p 
                    className="text-purple-400"
                    animate={{
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    Computer Technician
                  </motion.p>
                </motion.div>
              </motion.div>

              {/* Right Side - Description */}
              <motion.div 
                className="lg:col-span-2 space-y-6"
                initial={{ x: 50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <motion.p 
                  className="text-gray-300 text-base lg:text-lg leading-relaxed"
                  animate={{
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  I’m a Computer Technician passionate about software development and cybersecurity. With hands-on experience in web development, system administration, hardware troubleshooting, and IT security, I continuously improve my skills through real-world projects and online learning. I’ve completed NC II in Computer Systems Servicing, and my goal is to become a Software Engineer and Cybersecurity Specialist—building secure, efficient, and impactful tech solutions.
                </motion.p>

                {/* Animated Accent Line */}
                <motion.div 
                  className="w-full h-0.5 bg-gradient-to-r from-purple-500 via-indigo-500 to-transparent rounded"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}