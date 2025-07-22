/// <reference types="vite/client" />

// ========================================
// VITE ENVIRONMENT TYPE DEFINITIONS
// Fixes VS Code TypeScript errors
// ========================================

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // Add more env variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// ========================================
// REACT TYPE AUGMENTATIONS
// ========================================
declare namespace React {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // Allow any data attributes
    [key: `data-${string}`]: any
  }
}

// ========================================
// GLOBAL TYPE DECLARATIONS
// ========================================
declare global {
  interface Window {
    // Performance API
    performance: Performance
    
    // Navigation API
    navigator: Navigator & {
      connection?: {
        effectiveType?: string
        downlink?: number
      }
    }
    
    // Console API
    console: Console
  }
  
  // Performance interface
  interface Performance {
    getEntriesByType(type: string): PerformanceEntry[]
  }
  
  // Performance entry interface
  interface PerformanceEntry {
    readonly name: string
    readonly entryType: string
    readonly startTime: number
    readonly duration: number
    readonly domContentLoadedEventStart?: number
    readonly domContentLoadedEventEnd?: number
    readonly loadEventStart?: number
    readonly loadEventEnd?: number
    readonly fetchStart?: number
  }
}

// ========================================
// MODULE DECLARATIONS
// ========================================

// CSS Modules
declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}

// CSS Files
declare module '*.css' {
  const content: string
  export default content
}

// Image Files
declare module '*.png' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.jpeg' {
  const src: string
  export default src
}

declare module '*.gif' {
  const src: string
  export default src
}

declare module '*.svg' {
  const src: string
  export default src
}

declare module '*.webp' {
  const src: string
  export default src
}

// ========================================
// COMPONENT TYPE FIXES
// ========================================

// Fix for React component props
type ComponentProps<T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>> =
  T extends React.JSXElementConstructor<infer P>
    ? P
    : T extends keyof JSX.IntrinsicElements
    ? JSX.IntrinsicElements[T]
    : {}

// Fix for ref types
type RefType<T> = T extends React.RefObject<infer U> ? U : T

// Export for use in components
export type { ComponentProps, RefType }