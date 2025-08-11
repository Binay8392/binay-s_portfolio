import { Github, Linkedin, Mail, Phone, ExternalLink, MapPin, Facebook, Instagram } from 'lucide-react'
import { Button } from './ui/button'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// LeetCode icon component (since it's not in lucide-react)
const LeetCodeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382H10.617z"/>
  </svg>
)

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const imageVariants = {
    hidden: { x: 30, opacity: 0, scale: 0.9 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const skillVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.6 + index * 0.1,
        duration: 0.4
      }
    })
  }

  const expertiseAreas = [
    "MERN Stack Development",
    "AI/ML Projects", 
    "IoT & Smart Devices",
    "C++ & Data Structures",
    "Problem Solving & DSA",
    "Open Source Contributions"
  ]

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/binayparamanik", 
      label: "GitHub",
      color: "hover:text-gray-300"
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/in/binay-paramanik", 
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    { 
      icon: Mail, 
      href: "mailto:binayparamanik3@gmail.com", 
      label: "Email",
      color: "hover:text-red-400"
    },
    { 
      icon: LeetCodeIcon, 
      href: "https://leetcode.com/u/cody_binay/", 
      label: "LeetCode",
      color: "hover:text-yellow-400"
    },
    { 
      icon: Facebook, 
      href: "https://www.facebook.com/binay.paramanik.1", 
      label: "Facebook",
      color: "hover:text-blue-500"
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/bi_n_a_y_/", 
      label: "Instagram",
      color: "hover:text-pink-400"
    }
  ]

  return (
    <section id="about" className="min-h-screen flex items-center py-16 sm:py-20 px-4 sm:px-6" ref={ref}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          className="space-y-6 sm:space-y-8 order-2 lg:order-1"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Social Icons */}
          <motion.div 
            className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
            variants={itemVariants}
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center cursor-pointer transition-colors shadow-lg ${social.color}`}
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: 360,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { 
                    scale: 1, 
                    rotate: 0,
                    transition: { delay: 0.3 + index * 0.1, duration: 0.5 }
                  } : {}}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.a>
              )
            })}
          </motion.div>

          <motion.div className="space-y-4 sm:space-y-6 text-center lg:text-left" variants={itemVariants}>
            <motion.div variants={itemVariants}>
              <motion.p 
                className="text-gray-300 mb-2 text-sm sm:text-base"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                Hello It's Me
              </motion.p>
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 leading-tight"
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                style={{
                  textShadow: '0 0 30px rgba(139, 92, 246, 0.3)'
                }}
              >
                Binay Paramanik
              </motion.h2>
              <motion.p 
                className="text-white text-lg sm:text-xl md:text-2xl mb-4 font-semibold"
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                Passionate Coder & Innovator
              </motion.p>
              <motion.div
                className="text-purple-300 text-sm sm:text-base space-y-2 bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-600/30"
                initial={{ y: 15, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span className="font-medium">8392042619</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="font-medium break-all">binayparamanik3@gmail.com</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.p 
              className="text-gray-200 leading-relaxed text-sm sm:text-base bg-gray-800/20 backdrop-blur-sm rounded-xl p-4 border border-gray-600/20"
              variants={itemVariants}
            >
              Currently working on multiple exciting projects: <strong className="text-purple-300">Online Election System</strong>, <strong className="text-pink-300">Smart Library Management System</strong>, <strong className="text-blue-300">Fake News Detection System</strong>, and an <strong className="text-green-300">Automatic Accident Detection & Hospital Connect</strong> system using AI. 
              I'm exploring the fascinating world of Gen AI, Web Development, and IoT while continuously learning React.js, Django, and Flask API development.
            </motion.p>

            <motion.div variants={itemVariants}>
              <p className="text-gray-300 text-sm sm:text-base mb-3 font-medium">Ask me about:</p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {expertiseAreas.map((skill, index) => (
                  <motion.span
                    key={skill}
                    custom={index}
                    variants={skillVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgb(139 92 246)",
                      transition: { duration: 0.2 }
                    }}
                    className="px-3 py-2 bg-gray-700/50 text-gray-200 rounded-full text-xs sm:text-sm cursor-pointer transition-colors border border-gray-600/30 backdrop-blur-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Current Focus */}
            <motion.div variants={itemVariants} className="bg-slate-700/40 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-600/30">
              <h4 className="text-purple-300 mb-3 text-sm sm:text-base font-semibold">🎯 Looking for collaboration on:</h4>
              <p className="text-gray-200 text-sm sm:text-base">
                <strong className="text-pink-300">AI Mental Health Therapist Chatbot</strong> - A Gen AI + NLP project focused on providing mental health support through intelligent conversation.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button 
                  className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-xl border-2 border-purple-400/20 font-semibold text-base"
                  onClick={() => window.open('mailto:binayparamanik3@gmail.com')}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Let's Collaborate
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto border-2 border-gray-500 text-gray-200 hover:bg-gray-700/50 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-xl backdrop-blur-sm bg-gray-800/20 font-semibold text-base"
                  onClick={() => window.open('https://linkedin.com/in/binay-paramanik', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View LinkedIn
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Content - Binay's Profile Image */}
        <motion.div 
          className="flex justify-center order-1 lg:order-2"
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1 shadow-2xl"
              animate={{
                rotate: [0, 3, -3, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                {/* 🔥 THIS IS WHERE YOU ADD YOUR IMAGE CODE! */}
                <img 
                  src="/binay.jpg" 
                  alt="Binay Paramanik - Passionate Coder & Developer" 
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    // Fallback if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                
                {/* Fallback placeholder (hidden by default) */}
                <div 
                  className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center" 
                  style={{ display: 'none' }}
                >
                  <div className="text-white text-6xl sm:text-7xl md:text-8xl font-bold">
                    B
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Floating ring animation */}
            <motion.div
              className="absolute -inset-3 sm:-inset-4 rounded-full border-2 border-purple-400/40"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Status indicator - Active/Available */}
            <motion.div
              className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 bg-green-400 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-4 border-slate-900 shadow-lg"
              animate={{
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              title="Available for collaboration"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}