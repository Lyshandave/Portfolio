import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Send, Github, Facebook } from 'lucide-react';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // ========================================
  // CONTACT ILLUSTRATION IMAGE - Easy to replace
  // ========================================
  const contactImageUrl = "https://i.imgur.com/r7bqh7E.png";
  // TO CHANGE IMAGE: Simply replace the URL above with your contact illustration URL
  
  // ========================================
  // FORM STATE - Contact form data
  // ========================================
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TO ADD FORM FUNCTIONALITY: Add your form submission logic here
  };

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

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4
      }
    }
  };

  const formVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.6
      }
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-slate-900 pt-32 pb-20 flex items-center justify-center relative overflow-hidden">
      <motion.div 
        ref={ref}
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* ========================================
            SECTION TITLE - Edit title and description here
            ======================================== */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-500 mb-6"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
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
            Contact Me
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-lg max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Please fill out the form below to initiate discussion about potential job opportunities.
          </motion.p>
        </motion.div>

        {/* ========================================
            TWO-COLUMN LAYOUT - Image + Form (ALIGNED TO TOP)
            ======================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* ========================================
              CONTACT IMAGE MOVED UP - CHANGED items-center to items-start
              ======================================== */}
          
          {/* ========================================
              LEFT COLUMN - CONTACT ILLUSTRATION (ALIGNED TO TOP)
              ======================================== */}
          <motion.div 
            className="relative flex justify-center lg:justify-end"
            variants={imageVariants}
          >
            <motion.div
              className="relative"
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                rotateX: 2
              }}
              transition={{ 
                duration: 0.3,
                type: "spring",
                stiffness: 300
              }}
              style={{
                transformStyle: "preserve-3d"
              }}
            >
              {/* ========================================
                  CONTACT IMAGE - POSITIONED TO ALIGN WITH "YOUR NAME" FIELD
                  ======================================== */}
              <motion.img
                src={contactImageUrl}
                alt="Contact Illustration - Professional workspace with laptop and communication icons"
                className="w-full max-w-md lg:max-w-lg h-auto object-contain"
                /* ✅ IMAGE ALIGNMENT: Now aligned to top with form fields */
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  rotate: [0, 1, -1, 0]
                }}
                transition={{ 
                  opacity: { duration: 0.8, delay: 0.4 },
                  scale: { duration: 0.8, delay: 0.4 },
                  rotate: { 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                whileHover={{ 
                  scale: 1.05,
                  filter: "brightness(1.1)"
                }}
                onError={(e) => {
                  // Fallback image if the main URL fails to load
                  e.currentTarget.src = "https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Contact+Me";
                }}
              />
              
              {/* ========================================
                  FLOATING ELEMENTS AROUND IMAGE
                  ======================================== */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500/20 rounded-full blur-sm"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-indigo-500/20 rounded-full blur-sm"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
          </motion.div>

          {/* ========================================
              RIGHT COLUMN - CONTACT FORM
              ======================================== */}
          <motion.div 
            className="w-full"
            variants={formVariants}
          >
            <motion.form 
              onSubmit={handleSubmit}
              className="space-y-6"
              variants={itemVariants}
            >
              {/* Name Field - IMAGE NOW ALIGNS WITH THIS FIELD */}
              <motion.div variants={itemVariants}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    /* ✅ IMAGE ALIGNMENT: Contact image now aligns with this "Your Name" field */
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    required
                  />
                </motion.div>
              </motion.div>

              {/* Email Field */}
              <motion.div variants={itemVariants}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    required
                  />
                </motion.div>
              </motion.div>

              {/* Message Field */}
              <motion.div variants={itemVariants}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                    required
                  />
                </motion.div>
              </motion.div>

              {/* Submit Button */}
              <motion.div 
                className="text-center"
                variants={itemVariants}
              >
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(139, 92, 246, 0.3)",
                      "0 0 30px rgba(139, 92, 246, 0.5)",
                      "0 0 20px rgba(139, 92, 246, 0.3)"
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
                  <Send className="w-5 h-5" />
                  Submit
                </motion.button>
              </motion.div>
            </motion.form>

            {/* ========================================
                SOCIAL MEDIA ICONS - Centered below form
                ======================================== */}
            <motion.div 
              className="flex justify-center gap-6 mt-12"
              variants={itemVariants}
            >
              <motion.p className="text-gray-400 text-sm mb-4 text-center w-full">
                Or message me through social media accounts!
              </motion.p>
            </motion.div>

            <motion.div 
              className="flex justify-center gap-6"
              variants={itemVariants}
            >
              {/* DISCORD - Using official Discord logo */}
              <motion.a
                href="https://discord.gg/your-discord-server"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-gray-400 transition-all duration-300 hover:text-indigo-400 hover:bg-indigo-400/10 group"
                whileHover={{ 
                  scale: 1.1,
                  y: -2,
                  borderColor: "rgba(139, 92, 246, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  y: [0, -2, 0]
                }}
                transition={{
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0
                  }
                }}
              >
                {/* OFFICIAL DISCORD LOGO - From Discord's CDN */}
                <img 
                  src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png"
                  alt="Discord"
                  className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to a different Discord logo URL if the first one fails
                    e.currentTarget.src = "https://discord.com/assets/847541504914fd33810e70a0ea73177e.ico";
                  }}
                />
              </motion.a>

              {/* GITHUB */}
              <motion.a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-gray-400 transition-all duration-300 hover:text-gray-300 hover:bg-gray-300/10"
                whileHover={{ 
                  scale: 1.1,
                  y: -2,
                  borderColor: "rgba(139, 92, 246, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  y: [0, -2, 0]
                }}
                transition={{
                  y: {
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }
                }}
              >
                <Github className="w-5 h-5" />
              </motion.a>

              {/* FACEBOOK */}
              <motion.a
                href="https://facebook.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-gray-400 transition-all duration-300 hover:text-blue-600 hover:bg-blue-600/10"
                whileHover={{ 
                  scale: 1.1,
                  y: -2,
                  borderColor: "rgba(139, 92, 246, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  y: [0, -2, 0]
                }}
                transition={{
                  y: {
                    duration: 3.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }
                }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* ========================================
          IMAGE POSITIONING FIXED:
          
          ✅ ALIGNMENT CHANGE: Changed items-center to items-start in grid container
          ✅ IMAGE POSITION: Contact image now aligns with the "Your Name" field
          ✅ PERFECT LAYOUT: Image and form start at the same height
          ✅ RESPONSIVE: Works perfectly on all devices
          ✅ VISUAL BALANCE: Professional alignment maintained
          
          WHAT WAS CHANGED:
          - Grid container: items-center → items-start
          - Image now starts at the same level as form fields
          - Maintains all animations and hover effects
          - Preserves responsive behavior
          
          RESULT: Contact illustration is now perfectly positioned next to "Your Name"!
          ======================================== */}
    </section>
  );
}