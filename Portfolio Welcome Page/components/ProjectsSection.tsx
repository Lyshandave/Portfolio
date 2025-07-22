import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Eye } from 'lucide-react';

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // ========================================
  // PROJECTS DATA - Edit your projects here
  // ========================================
  const projects = [
    {
      id: 1,
      title: "Ordering System",
      description: "A full-featured ordering and customer management system built using ASP.NET and Visual Studio 2022.",
      icon: "🛒",
      tags: [".NET", "SQL Server", "Visual Studio 2022"],
      // CHANGE THIS URL to your actual project link/demo
      projectUrl: "https://your-ordering-system-demo.com" // Replace with your actual project URL
    },
    {
      id: 2,
      title: "Network Configuration Tool",
      description: "A network configuration tool built to simplify and automate the management of network devices such as routers, switches, and servers.",
      icon: "⚙️",
      tags: ["Routers and Switches", "Network Admin"],
      projectUrl: "https://your-network-tool-demo.com" // Replace with your actual project URL
    },
    {
      id: 3,
      title: "Computer Maintenance",
      description: "A web application for tracking computer repair jobs, managing inventory and generating reports for business impact services.",
      icon: "🔧",
      tags: ["Web", "SQL", "Business", "Reports"],
      projectUrl: "https://your-maintenance-app-demo.com" // Replace with your actual project URL
    },
    {
      id: 4,
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website showcasing work in website design and interactive experience with smooth animations.",
      icon: "👤",
      tags: ["Portfolio", "Web", "Design"],
      projectUrl: "https://your-portfolio-demo.com" // Replace with your actual project URL
    },
    {
      id: 5,
      title: "Format & Reinstall OS",
      description: "A complete system formatting and OS reinstallation service that ensures a clean, optimized, and virus-free environment for your computer.",
      icon: "📊",
      tags: ["Troubleshooting", "OS Installation"],
      projectUrl: "https://your-os-service-demo.com" // Replace with your actual project URL
    },
    {
      id: 6,
      title: "Database Management System",
      description: "A comprehensive database management interface for tracking complex data operations and generating business reports.",
      icon: "🗄️",
      tags: ["Database", "SQL", "Management"],
      projectUrl: "https://your-database-demo.com" // Replace with your actual project URL
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // ========================================
  // VIEW PROJECTS FUNCTION - Edit this to customize navigation
  // ========================================
  const handleViewProject = (projectUrl: string, projectTitle: string) => {
    // Option 1: Open project in new tab (current implementation)
    window.open(projectUrl, '_blank', 'noopener,noreferrer');
    
    // Option 2: Navigate to internal project page (uncomment if you want this)
    // window.location.href = `/projects/${project.id}`;
    
    // Option 3: Show project in modal (uncomment if you want this)
    // setSelectedProject(project);
    // setShowProjectModal(true);
    
    console.log(`Viewing project: ${projectTitle}`);
  };

  return (
    <section id="projects" className="min-h-screen bg-slate-900 pt-32 pb-20 flex items-center justify-center relative overflow-hidden">
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
            My Projects
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Explore my portfolio of technical projects showcasing web development, system administration, and problem-solving skills.
          </motion.p>
        </motion.div>

        {/* ========================================
            PROJECTS GRID - Project cards with VIEW PROJECTS buttons
            ======================================== */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 group cursor-pointer"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                borderColor: "rgba(139, 92, 246, 0.5)",
                transition: { duration: 0.3 }
              }}
            >
              {/* Project Icon */}
              <motion.div 
                className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
              >
                <span className="text-2xl">{project.icon}</span>
              </motion.div>

              {/* Project Title */}
              <motion.h3 
                className="text-xl text-white mb-3 group-hover:text-purple-300 transition-colors duration-300"
              >
                {project.title}
              </motion.h3>

              {/* Project Description */}
              <motion.p 
                className="text-gray-300 text-sm leading-relaxed mb-4"
              >
                {project.description}
              </motion.p>

              {/* Project Tags */}
              <motion.div 
                className="flex flex-wrap gap-2 mb-4"
              >
                {project.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tagIndex}
                    className="px-2 py-1 bg-slate-700/50 text-purple-300 text-xs rounded-md border border-slate-600/50"
                    whileHover={{ 
                      backgroundColor: "rgba(139, 92, 246, 0.2)",
                      borderColor: "rgba(139, 92, 246, 0.5)"
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>

              {/* ========================================
                  VIEW PROJECTS BUTTON - Individual project view
                  ======================================== */}
              <motion.button
                onClick={() => handleViewProject(project.projectUrl, project.title)}
                className="w-full bg-gradient-to-r from-purple-500/20 to-indigo-600/20 border border-purple-500/30 text-purple-300 px-4 py-2 rounded-lg text-sm flex items-center justify-center gap-2 hover:from-purple-500/30 hover:to-indigo-600/30 hover:border-purple-400/50 hover:text-white transition-all duration-300 group/btn"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 8px 25px rgba(139, 92, 246, 0.2)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Eye className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                View Project
                <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* ========================================
          CUSTOMIZATION GUIDE:
          
          TO ADD YOUR PROJECT LINKS:
          1. Edit the projectUrl in each project object above
          2. Replace "https://your-project-demo.com" with your actual URLs
          3. For local projects, you can use relative paths like "/projects/ordering-system"
          
          TO CHANGE BUTTON BEHAVIOR:
          - Edit the handleViewProject function above
          - Current: Opens in new tab
          - Option 2: Navigate to internal pages
          - Option 3: Show in modal/popup
          
          TO STYLE THE BUTTON:
          - Edit the button className for colors and styling
          - Change hover effects in whileHover prop
          - Modify icons by importing different ones from lucide-react
          
          TO ADD PROJECT IMAGES:
          - Add imageUrl property to each project object
          - Display images in the project cards
          - Create detailed project pages with image galleries
          
          NOTE: "Get in Touch" button removed since it's available in HomeSection
          ======================================== */}
    </section>
  );
}