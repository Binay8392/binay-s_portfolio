import { useState } from 'react'
import { Palette, Check } from 'lucide-react'
import { Button } from './ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from './ThemeContext'

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme, themes } = useTheme()

  const getThemeGradient = (themeId: string) => {
    switch (themeId) {
      case 'dark':
        return 'from-purple-500 to-pink-500'
      case 'blue':
        return 'from-blue-500 to-cyan-500'
      case 'green':
        return 'from-green-500 to-emerald-500'
      case 'orange':
        return 'from-orange-500 to-red-500'
      case 'purple':
        return 'from-violet-500 to-purple-500'
      case 'red':
        return 'from-red-500 to-pink-500'
      default:
        return 'from-purple-500 to-pink-500'
    }
  }

  return (
    <div className="relative">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          variant="outline"
          size="sm"
          className="border-gray-600 text-gray-300 hover:bg-gray-800 rounded-full w-10 h-10 p-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Palette className="w-4 h-4" />
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-12 right-0 bg-slate-800/95 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 z-50 min-w-[200px]"
          >
            <div className="text-white text-sm mb-3">Choose Theme</div>
            <div className="space-y-2">
              {themes.map((themeOption) => (
                <motion.button
                  key={themeOption.id}
                  onClick={() => {
                    setTheme(themeOption.id)
                    setIsOpen(false)
                  }}
                  className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-700/50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${getThemeGradient(themeOption.id)}`} />
                  <span className="text-gray-300 text-sm flex-1 text-left">
                    {themeOption.name}
                  </span>
                  {theme === themeOption.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Check className="w-4 h-4 text-green-400" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}