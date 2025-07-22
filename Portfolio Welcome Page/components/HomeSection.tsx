import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HomeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // ========================================
  // PROFILE IMAGE - Edit image URL here
  // ========================================
  const profileImageUrl = " https://i.imgur.com/mP92PtG.gif";
  // TO CHANGE IMAGE: Simply replace the URL above with your image URL

  // ========================================
  // CONTACT INFORMATION - Edit your contact details here
  // ========================================
  const contactInfo = {
    address: "701 Commonwealth, Quezon City", // CHANGE THIS to your address
    phone: "0967 388 5926", // CHANGE THIS to your phone number
    email: "lyshandave@gmail.com" // CHANGE THIS to your email address
  };

  // ========================================
  // NAVIGATION FUNCTIONS - Button click handlers
  // ========================================
  const handleViewProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetInTouch = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ========================================
  // CONTACT ACTIONS - Click handlers for contact info
  // ========================================
  const handleLocationClick = () => {
    // Open Google Maps with the address
    const encodedAddress = encodeURIComponent(contactInfo.address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  const handlePhoneClick = () => {
    // Open phone dialer (works on mobile devices)
    window.open(`tel:${contactInfo.phone.replace(/\s/g, '')}`);
  };

  const handleEmailClick = () => {
    // Open email client with pre-filled email
    window.open(`mailto:${contactInfo.email}?subject=Hello&body=Hi there, I found your portfolio and would like to get in touch.`);
  };

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

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { x: 100, opacity: 0, scale: 0.8 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen bg-slate-900 py-20 flex items-center justify-center relative overflow-hidden">
      {/* Advanced Background Tech Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Circuit Lines */}
        <motion.div 
          className="absolute top-1/4 left-10 w-32 h-0.5 bg-gradient-to-r from-purple-500/30 to-transparent"
          animate={{ 
            scaleX: [0, 1, 0.5, 1],
            opacity: [0.3, 0.7, 0.4, 0.7]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating Code Symbols */}
        <motion.div 
          className="absolute top-32 right-20 text-cyan-400/20 text-2xl"
          animate={{ 
            y: [0, -20, 0],
            rotateZ: [0, 10, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          &lt;/&gt;
        </motion.div>

        {/* Geometric Shapes */}
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-8 h-8 border border-indigo-400/30"
          style={{
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
          }}
          animate={{ 
            rotateZ: [0, 360],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Data Flow Particles */}
        <motion.div 
          className="absolute top-3/4 right-1/3 w-20 h-0.5 bg-gradient-to-r from-transparent via-pink-400/40 to-transparent"
          animate={{ 
            x: [0, 30, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
      </div>

      <motion.div 
        ref={ref}
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            {/* ========================================
                MAIN TITLE - Edit your job title here
                ======================================== */}
            <motion.h1 
              className="text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-500"
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
              Computer Technician
            </motion.h1>

            {/* ========================================
                PERSONAL QUOTE - Edit your quote here
                ======================================== */}
            <motion.p 
              className="text-gray-300 text-lg italic leading-relaxed"
              variants={itemVariants}
            >
              "I'm motivated by a strong passion for technology and a constant drive to learn and improve."
            </motion.p>

            {/* ========================================
                CLICKABLE CONTACT INFORMATION - Now functional!
                ======================================== */}
            <motion.div 
              className="space-y-4"
              variants={itemVariants}
            >
              {/* CLICKABLE LOCATION - Opens Google Maps */}
              <motion.div 
                className="flex items-center space-x-3 text-gray-300 cursor-pointer group"
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                onClick={handleLocationClick}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    color: ['rgb(139, 92, 246)', 'rgb(79, 70, 229)', 'rgb(139, 92, 246)']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <MapPin className="w-5 h-5" />
                </motion.div>
                <span className="group-hover:text-purple-300 transition-colors duration-300">
                  {contactInfo.address}
                </span>
              </motion.div>

              {/* CLICKABLE PHONE - Opens phone dialer */}
              <motion.div 
                className="flex items-center space-x-3 text-gray-300 cursor-pointer group"
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                onClick={handlePhoneClick}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    color: ['rgb(139, 92, 246)', 'rgb(79, 70, 229)', 'rgb(139, 92, 246)']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <Phone className="w-5 h-5" />
                </motion.div>
                <span className="group-hover:text-purple-300 transition-colors duration-300">
                  {contactInfo.phone}
                </span>
              </motion.div>

              {/* CLICKABLE EMAIL - Opens email client */}
              <motion.div 
                className="flex items-center space-x-3 text-gray-300 cursor-pointer group"
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                onClick={handleEmailClick}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    color: ['rgb(139, 92, 246)', 'rgb(79, 70, 229)', 'rgb(139, 92, 246)']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <Mail className="w-5 h-5" />
                </motion.div>
                <span className="group-hover:text-purple-300 transition-colors duration-300">
                  {contactInfo.email}
                </span>
              </motion.div>
            </motion.div>

            {/* ========================================
                FUNCTIONAL ACTION BUTTONS - Now working!
                ======================================== */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              {/* VIEW PROJECTS BUTTON - Scrolls to projects section */}
              <motion.button
                className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-3 rounded-lg transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
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
                onClick={handleViewProjects}
              >
                View Projects
              </motion.button>

              {/* GET IN TOUCH BUTTON - Scrolls to contact section */}
              <motion.button
                className="bg-slate-800 text-gray-300 px-8 py-3 rounded-lg border border-slate-700 hover:border-purple-500 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  color: "white"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGetInTouch}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            variants={imageVariants}
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.div
                className="w-[280px] h-[280px] object-cover"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <ImageWithFallback
                  src={profileImageUrl}
                  alt="Computer Technician Profile"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </motion.div>
              
              {/* Floating Elements Around Image */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full opacity-60"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* ========================================
          CUSTOMIZATION GUIDE:
          
          TO CHANGE CONTACT INFORMATION:
          - Edit the contactInfo object at the top of the component
          - Replace address, phone, and email with your details
          
          TO MODIFY BUTTON ACTIONS:
          - handleViewProjects: Currently scrolls to #projects section
          - handleGetInTouch: Currently scrolls to #contact section
          - You can change these to navigate to different pages/sections
          
          TO CUSTOMIZE CONTACT ACTIONS:
          - handleLocationClick: Opens Google Maps with your address
          - handlePhoneClick: Opens phone dialer (works on mobile)
          - handleEmailClick: Opens email client with pre-filled message
          
          TO CHANGE JOB TITLE:
          - Edit "Computer Technician" in the h1 element
          
          TO CHANGE PERSONAL QUOTE:
          - Edit the text in the p element with italic styling
          
          TO CHANGE PROFILE IMAGE:
          - Replace the profileImageUrl at the top of the component
          ======================================== */}
    </section>
  );
}