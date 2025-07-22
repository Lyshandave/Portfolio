import { useState, useEffect } from 'react'

// ========================================
// MOBILE DETECTION HOOK - TypeScript safe
// ========================================

/**
 * Hook to detect if the current device is mobile
 * Returns boolean indicating mobile state
 */
export function useMobile(): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    // Function to check if device is mobile
    const checkIsMobile = (): boolean => {
      if (typeof window === 'undefined') return false
      return window.innerWidth < 768
    }

    // Set initial state
    setIsMobile(checkIsMobile())

    // Create resize handler
    const handleResize = (): void => {
      setIsMobile(checkIsMobile())
    }

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return isMobile
}

/**
 * Hook to detect device type
 * Returns object with device type flags
 */
export function useDeviceType(): {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
} {
  const [deviceType, setDeviceType] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false
  })

  useEffect(() => {
    const getDeviceType = () => {
      if (typeof window === 'undefined') {
        return { isMobile: false, isTablet: false, isDesktop: false }
      }

      const width = window.innerWidth
      return {
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024
      }
    }

    setDeviceType(getDeviceType())

    const handleResize = () => {
      setDeviceType(getDeviceType())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return deviceType
}

/**
 * Hook to get window dimensions
 * Returns current window width and height
 */
export function useWindowSize(): {
  width: number
  height: number
} {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    // Set initial size
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

// Default export for backward compatibility
export default useMobile