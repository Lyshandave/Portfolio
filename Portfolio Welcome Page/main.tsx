import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'

// ========================================
// LYSHANDAVE Portfolio - Entry Point
// TypeScript errors fixed, structure preserved
// ========================================

// Fix for TypeScript strict mode
const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element not found')
}

const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// ========================================
// GLOBAL ERROR HANDLING
// ========================================
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error)
})

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason)
})

// ========================================
// DEVELOPMENT HELPERS
// ========================================
if (import.meta.env.DEV) {
  console.log('%c🚀 LYSHANDAVE Portfolio - Development Mode', 'color: #8b5cf6; font-weight: bold;')
}