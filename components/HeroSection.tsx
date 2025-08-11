import { Code, Github, Palette, Brain, Zap, Rocket, Linkedin } from 'lucide-react'
import { Button } from './ui/button'
import { motion } from 'framer-motion'

export default function HeroSection() {
  const iconVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: index * 0.2,
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    })
  }

  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1.4,
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6">
      <div className="text-center space-y-6 sm:space-y-8 max-w-4xl mx-auto">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-purple-300 text-lg sm:text-xl"
        >
          👋 Hi there, I'm
        </motion.div>

        {/* Tech Icons */}
        <div className="flex justify-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
          {[Code, Brain, Rocket].map((Icon, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ 
                scale: 1.1, 
                rotate: 5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center cursor-pointer shadow-lg"
            >
              <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </motion.div>
          ))}
        </div>

        {/* Name and Title */}
        <motion.div 
          className="space-y-4 sm:space-y-6"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            style={{
              textShadow: '0 0 30px rgba(139, 92, 246, 0.3)'
            }}
          >
            Binay Paramanik
          </motion.h1>
          <motion.div 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white space-y-3 sm:space-y-4"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl">
              <span className="text-purple-300 font-semibold">🎯 Passionate Coder</span>
              <span className="text-gray-400 hidden sm:inline">|</span>
              <span className="text-pink-300 font-semibold">🧠 Lifelong Learner</span>
              <span className="text-gray-400 hidden sm:inline">|</span>
              <span className="text-blue-300 font-semibold">💡 Innovator</span>
            </div>
            <div className="text-gray-200 text-sm sm:text-base md:text-lg font-medium bg-gray-800/30 backdrop-blur-sm rounded-full px-4 py-2 inline-block border border-gray-600/30">
              🚀 Exploring Gen AI, Web & IoT
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div whileHover="hover" className="w-full sm:w-auto">
            <Button 
              className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-xl border-2 border-purple-400/20 font-semibold"
              onClick={() => window.open('mailto:binayparamanik3@gmail.com')}
            >
              💬 Let's Connect
            </Button>
          </motion.div>
          <motion.div whileHover="hover" className="w-full sm:w-auto">
            <Button 
              variant="outline" 
              className="w-full sm:w-auto border-2 border-gray-500 text-gray-200 hover:bg-gray-700/50 hover:text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-xl backdrop-blur-sm bg-gray-800/20 font-semibold"
              onClick={() => window.open('https://linkedin.com/in/binay-paramanik', '_blank')}
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              LinkedIn
            </Button>
          </motion.div>
        </motion.div>

        {/* Fun Fact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="text-gray-300 text-sm sm:text-base max-w-md mx-auto bg-gray-800/20 backdrop-blur-sm rounded-xl p-4 border border-gray-600/30"
        >
          ⚡ <em>"I debug my code better at 2 AM than at 2 PM — powered by coffee and curiosity!"</em> ☕💡
        </motion.div>
      </div>

      {/* Simplified floating particles for mobile */}
      <motion.div
        className="absolute top-16 sm:top-20 left-4 sm:left-20 w-2 h-2 bg-purple-400 rounded-full opacity-60"
        animate={{
          y: [0, -20, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 sm:bottom-32 right-4 sm:right-32 w-3 h-3 bg-pink-400 rounded-full opacity-60"
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </section>
  )
}