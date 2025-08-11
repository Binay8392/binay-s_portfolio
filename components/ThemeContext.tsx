import React, { createContext, useContext, useState, useEffect } from 'react'

type Theme = 'dark' | 'purple' | 'blue' | 'green' | 'orange' | 'red'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  themes: { id: Theme; name: string; colors: string }[]
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const themes = [
  { 
    id: 'dark' as Theme, 
    name: 'Dark Purple', 
    colors: 'from-purple-500 to-pink-500' 
  },
  { 
    id: 'blue' as Theme, 
    name: 'Ocean Blue', 
    colors: 'from-blue-500 to-cyan-500' 
  },
  { 
    id: 'green' as Theme, 
    name: 'Forest Green', 
    colors: 'from-green-500 to-emerald-500' 
  },
  { 
    id: 'orange' as Theme, 
    name: 'Sunset Orange', 
    colors: 'from-orange-500 to-red-500' 
  },
  { 
    id: 'purple' as Theme, 
    name: 'Royal Purple', 
    colors: 'from-violet-500 to-purple-500' 
  },
  { 
    id: 'red' as Theme, 
    name: 'Ruby Red', 
    colors: 'from-red-500 to-pink-500' 
  }
]

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme
    if (savedTheme && themes.some(t => t.id === savedTheme)) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}