import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import PortfolioSection from './components/PortfolioSection'
import AboutSection from './components/AboutSection'
import AboutCard from './components/AboutCard'
import { ThemeProvider, useTheme } from './components/ThemeContext'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import './styles/globals.css'

function AppContent() {
  const { theme } = useTheme()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const getThemeColors = () => {
    switch (theme) {
      case 'blue':
        return {
          primary: isMobile ? 'rgba(59, 130, 246, 0.4)' : 'rgba(59, 130, 246, 0.3)',
          secondary: isMobile ? 'rgba(6, 182, 212, 0.4)' : 'rgba(6, 182, 212, 0.3)',
          accent: isMobile ? 'rgba(29, 78, 216, 0.3)' : 'rgba(29, 78, 216, 0.2)',
          solid: '#3b82f6'
        }
      case 'green':
        return {
          primary: isMobile ? 'rgba(16, 185, 129, 0.4)' : 'rgba(16, 185, 129, 0.3)',
          secondary: isMobile ? 'rgba(5, 150, 105, 0.4)' : 'rgba(5, 150, 105, 0.3)',
          accent: isMobile ? 'rgba(4, 120, 87, 0.3)' : 'rgba(4, 120, 87, 0.2)',
          solid: '#10b981'
        }
      case 'orange':
        return {
          primary: isMobile ? 'rgba(249, 115, 22, 0.4)' : 'rgba(249, 115, 22, 0.3)',
          secondary: isMobile ? 'rgba(220, 38, 38, 0.4)' : 'rgba(220, 38, 38, 0.3)',
          accent: isMobile ? 'rgba(234, 88, 12, 0.3)' : 'rgba(234, 88, 12, 0.2)',
          solid: '#f97316'
        }
      case 'purple':
        return {
          primary: isMobile ? 'rgba(139, 92, 246, 0.4)' : 'rgba(139, 92, 246, 0.3)',
          secondary: isMobile ? 'rgba(168, 85, 247, 0.4)' : 'rgba(168, 85, 247, 0.3)',
          accent: isMobile ? 'rgba(124, 58, 237, 0.3)' : 'rgba(124, 58, 237, 0.2)',
          solid: '#8b5cf6'
        }
      case 'red':
        return {
          primary: isMobile ? 'rgba(239, 68, 68, 0.4)' : 'rgba(239, 68, 68, 0.3)',
          secondary: isMobile ? 'rgba(236, 72, 153, 0.4)' : 'rgba(236, 72, 153, 0.3)',
          accent: isMobile ? 'rgba(220, 38, 38, 0.3)' : 'rgba(220, 38, 38, 0.2)',
          solid: '#ef4444'
        }
      default: // dark
        return {
          primary: isMobile ? 'rgba(139, 92, 246, 0.4)' : 'rgba(120, 119, 198, 0.3)',
          secondary: isMobile ? 'rgba(236, 72, 153, 0.4)' : 'rgba(255, 119, 198, 0.3)',
          accent: isMobile ? 'rgba(168, 85, 247, 0.3)' : 'rgba(120, 119, 255, 0.2)',
          solid: '#8b5cf6'
        }
    }
  }

  const themeColors = getThemeColors()

  return (
    <div className="min-h-screen bg-gray-900 overflow-x-hidden relative">
      {/* Enhanced contrast background for mobile */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900" />
      
      {/* Simplified animated background for better mobile performance */}
      <motion.div
        className={`fixed inset-0 ${isMobile ? 'opacity-60' : 'opacity-80'}`}
        style={{
          background: isMobile ? 
            `linear-gradient(135deg, rgba(15, 15, 35, 0.9) 0%, rgba(25, 15, 45, 0.95) 50%, rgba(15, 15, 35, 0.9) 100%)` :
            `
              radial-gradient(circle at 20% 80%, ${themeColors.primary} 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, ${themeColors.secondary} 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, ${themeColors.accent} 0%, transparent 50%),
              linear-gradient(135deg, rgba(15, 15, 35, 0.8) 0%, rgba(25, 15, 45, 0.9) 50%, rgba(15, 15, 35, 0.8) 100%)
            `
        }}
        {...(!isMobile && {
          animate: {
            background: [
              `radial-gradient(circle at 20% 80%, ${themeColors.primary} 0%, transparent 50%),
               radial-gradient(circle at 80% 20%, ${themeColors.secondary} 0%, transparent 50%),
               radial-gradient(circle at 40% 40%, ${themeColors.accent} 0%, transparent 50%),
               linear-gradient(135deg, rgba(15, 15, 35, 0.8) 0%, rgba(25, 15, 45, 0.9) 50%, rgba(15, 15, 35, 0.8) 100%)`,
              `radial-gradient(circle at 60% 20%, ${themeColors.primary} 0%, transparent 50%),
               radial-gradient(circle at 20% 80%, ${themeColors.secondary} 0%, transparent 50%),
               radial-gradient(circle at 80% 60%, ${themeColors.accent} 0%, transparent 50%),
               radial-gradient(135deg, rgba(15, 15, 35, 0.8) 0%, rgba(35, 15, 55, 0.9) 50%, rgba(15, 15, 35, 0.8) 100%)`
            ]
          },
          transition: {
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }
        })}
      />

      {/* Mobile-optimized accent gradient */}
      {isMobile && (
        <div className="fixed inset-0 opacity-30" style={{
          background: `radial-gradient(circle at 50% 50%, ${themeColors.primary} 0%, transparent 70%)`
        }} />
      )}

      {/* Simplified geometric pattern for mobile */}
      {!isMobile && (
        <div className="fixed inset-0 opacity-10" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, ${themeColors.solid} 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, ${themeColors.solid} 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px, 80px 80px'
        }} />
      )}

      {/* Navigation */}
      <Navigation />
      
      {/* Main Content with better contrast */}
      <main className="relative">
        <HeroSection />
        <PortfolioSection />
        <AboutSection />
        <AboutCard />
      </main>
      
      {/* Simplified floating effects - only on desktop */}
      {!isMobile && (
        <>
          <motion.div 
            className="fixed top-1/4 right-10 w-32 h-32 rounded-full pointer-events-none"
            style={{
              background: `radial-gradient(circle, ${themeColors.primary.replace('0.3', '0.3')} 0%, transparent 70%)`,
              filter: "blur(30px)"
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, 20, 0],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="fixed bottom-1/4 left-10 w-40 h-40 rounded-full pointer-events-none"
            style={{
              background: `radial-gradient(circle, ${themeColors.secondary.replace('0.3', '0.3')} 0%, transparent 70%)`,
              filter: "blur(40px)"
            }}
            animate={{
              scale: [1, 0.8, 1.3, 1],
              opacity: [0.2, 0.4, 0.1, 0.2],
              x: [0, -30, 20, 0],
              y: [0, 20, -15, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </>
      )}

      {/* Mobile-specific minimal particles */}
      {isMobile && (
        <>
          <motion.div
            className="fixed top-1/4 right-1/4 w-1 h-1 rounded-full pointer-events-none"
            style={{ backgroundColor: themeColors.solid, opacity: 0.6 }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="fixed bottom-1/3 left-1/4 w-1.5 h-1.5 rounded-full pointer-events-none"
            style={{ backgroundColor: themeColors.solid, opacity: 0.5 }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </>
      )}
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}