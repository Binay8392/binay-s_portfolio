import { useState } from 'react'
import { Palette } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/button'
import { useTheme } from './ThemeContext'

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const themes = [
    { name: 'dark', icon: '🌙', colors: ['#8b5cf6', '#ec4899'] },
    { name: 'blue', icon: '💙', colors: ['#3b82f6', '#06b6d4'] },
    { name: 'green', icon: '💚', colors: ['#10b981', '#059669'] },
    { name: 'orange', icon: '🧡', colors: ['#f97316', '#dc2626'] },
    { name: 'purple', icon: '💜', colors: ['#8b5cf6', '#a855f7'] },
    { name: 'red', icon: '❤️', colors: ['#ef4444', '#ec4899'] }
  ]

  return (
    <div className="relative">
      <motion.div whileTap={{ scale: 0.95 }}>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-purple-400"
        >
          <Palette className="w-4 h-4" />
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 p-3 bg-gray-800/90 backdrop-blur-md rounded-lg border border-gray-700 shadow-2xl min-w-[200px] z-50"
          >
            <p className="text-gray-300 text-sm mb-3">Choose Theme</p>
            <div className="grid grid-cols-2 gap-2">
              {themes.map((themeOption) => (
                <motion.button
                  key={themeOption.name}
                  onClick={() => {
                    setTheme(themeOption.name as any)
                    setIsOpen(false)
                  }}
                  className={`p-2 rounded-lg border transition-all duration-200 ${
                    theme === themeOption.name
                      ? 'border-purple-400 bg-gray-700/50'
                      : 'border-gray-600 hover:border-gray-500 hover:bg-gray-700/30'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{themeOption.icon}</span>
                    <div className="flex space-x-1">
                      {themeOption.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 text-xs mt-1 capitalize">
                    {themeOption.name}
                  </p>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}