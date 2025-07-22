import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  url?: string;
  image?: string;
  type?: string;
}

// ========================================
// 📊 SIMPLIFIED SEO COMPONENT - No external dependencies
// ========================================
export function SEOOptimization({
  title = "LYSHANDAVE - Computer Technician Portfolio | Professional IT Services",
  description = "Professional computer technician portfolio showcasing expert IT services, programming skills, and technology solutions. Specializing in system repair, network setup, and custom software development.",
  keywords = "computer technician, IT services, computer repair, network setup, programming, web development, system maintenance, technical support, LYSHANDAVE, computer specialist, technology solutions",
  author = "LYSHANDAVE",
  url = "https://lyshandave.com",
  image = "https://lyshandave.com/og-image.jpg",
  type = "website"
}: SEOProps) {
  
  // ========================================
  // 📊 STRUCTURED DATA FOR SEO
  // ========================================
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "LYSHANDAVE",
    "jobTitle": "Computer Technician",
    "url": url,
    "image": image,
    "description": description,
    "knowsAbout": [
      "Computer Repair",
      "Network Administration", 
      "Programming",
      "Web Development",
      "System Maintenance",
      "Technical Support"
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "Technical Education"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1234567890",
      "contactType": "customer service",
      "email": "lyshan.projects@gmail.com"
    },
    "sameAs": [
      "https://github.com/lyshandave",
      "https://discord.gg/lyshandave"
    ]
  };

  // ========================================
  // 🎯 INJECT SEO META TAGS DIRECTLY
  // ========================================
  React.useEffect(() => {
    // Set document title
    document.title = title;
    
    // Create or update meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (isProperty) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // ========================================
    // 🔍 BASIC SEO META TAGS
    // ========================================
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    setMetaTag('author', author);
    setMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('googlebot', 'index, follow');
    
    // ========================================
    // 🌐 LANGUAGE & LOCATION
    // ========================================
    setMetaTag('language', 'English');
    setMetaTag('geo.region', 'US');
    setMetaTag('geo.placename', 'United States');
    
    // ========================================
    // 📱 MOBILE & VIEWPORT OPTIMIZATION
    // ========================================
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0');
    setMetaTag('mobile-web-app-capable', 'yes');
    setMetaTag('apple-mobile-web-app-capable', 'yes');
    setMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');
    setMetaTag('apple-mobile-web-app-title', 'LYSHANDAVE Portfolio');
    
    // ========================================
    // 🔗 OPEN GRAPH (Facebook, LinkedIn)
    // ========================================
    setMetaTag('og:type', type, true);
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:url', url, true);
    setMetaTag('og:image', image, true);
    setMetaTag('og:image:width', '1200', true);
    setMetaTag('og:image:height', '630', true);
    setMetaTag('og:image:alt', 'LYSHANDAVE Computer Technician Portfolio', true);
    setMetaTag('og:site_name', 'LYSHANDAVE Portfolio', true);
    setMetaTag('og:locale', 'en_US', true);
    
    // ========================================
    // 🐦 TWITTER CARD OPTIMIZATION
    // ========================================
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', image);
    setMetaTag('twitter:image:alt', 'LYSHANDAVE Computer Technician Portfolio');
    setMetaTag('twitter:creator', '@lyshandave');
    setMetaTag('twitter:site', '@lyshandave');
    
    // ========================================
    // 🎨 THEME & BRANDING
    // ========================================
    setMetaTag('theme-color', '#8b5cf6');
    setMetaTag('msapplication-TileColor', '#1e293b');
    setMetaTag('msapplication-navbutton-color', '#8b5cf6');
    
    // ========================================
    // 🔍 STRUCTURED DATA (JSON-LD)
    // ========================================
    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);
    
  }, [title, description, keywords, author, url, image, type]);

  // This component doesn't render anything visible
  return null;
}

// ========================================
// 📊 SEO CUSTOMIZATION GUIDE:
// 
// TO CUSTOMIZE SEO SETTINGS:
// 1. Edit the default props above for your website
// 2. Update structured data with your actual information
// 3. Replace social media handles with your own
// 
// FEATURES INCLUDED:
// ✅ Complete meta tags optimization
// ✅ Open Graph (Facebook, LinkedIn sharing)
// ✅ Twitter Card optimization
// ✅ Structured data (JSON-LD) for search engines
// ✅ Mobile optimization
// ✅ PWA preparation
// 
// NO EXTERNAL DEPENDENCIES:
// ✅ Uses vanilla DOM manipulation
// ✅ No react-helmet required
// ✅ Works with any React setup
// ✅ Compatible with SSR and static builds
// 
// READY FOR:
// 🔗 Google Analytics (add your script)
// 🔍 Google Search Console (add verification)
// 🌐 Cloudflare deployment
// 📱 PWA conversion
// ========================================