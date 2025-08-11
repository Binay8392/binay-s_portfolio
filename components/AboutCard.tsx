import { Download, Eye, Mail, Phone, Github, Linkedin, Facebook, Instagram } from 'lucide-react'
import { Button } from './ui/button'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// LeetCode icon component
const LeetCodeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382H10.617z"/>
  </svg>
)

export default function AboutCard() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.5 })

  const cardVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (index: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.6 + index * 0.1,
        duration: 0.5
      }
    })
  }

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
    <section id="contact" className="py-20" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          className="bg-slate-800/50 border border-gray-700 rounded-2xl p-8 text-center relative overflow-hidden"
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileHover={{ 
            scale: 1.02,
            borderColor: "rgb(168 85 247)",
            transition: { duration: 0.3 }
          }}
        >
          {/* Background glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 1 }}
          />
          
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative z-10"
          >
            <motion.h3 
              className="text-3xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
              variants={itemVariants}
            >
              Let's Connect & Collaborate
            </motion.h3>
            
            <motion.p 
              className="text-gray-300 leading-relaxed mb-6 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              I'm passionate about building innovative solutions that make a difference. Whether you're interested in 
              <strong className="text-purple-300"> MERN stack development</strong>, 
              <strong className="text-pink-300"> AI/ML projects</strong>, or 
              <strong className="text-blue-300"> IoT innovations</strong> — let's create something amazing together!
            </motion.p>

            <motion.div 
              className="bg-slate-700/30 rounded-xl p-4 mb-8 max-w-md mx-auto"
              variants={itemVariants}
            >
              <h4 className="text-purple-300 mb-2">🤝 Currently seeking collaboration on:</h4>
              <p className="text-gray-300 text-sm">
                <strong className="text-pink-300">AI Mental Health Therapist Chatbot</strong><br/>
                <span className="text-gray-400">Using Gen AI + NLP for mental health support</span>
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
              variants={itemVariants}
            >
              <motion.a
                href="mailto:binayparamanik3@gmail.com"
                className="flex items-center justify-center gap-3 p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-5 h-5 text-purple-300" />
                <div className="text-left">
                  <div className="text-white text-sm">Email</div>
                  <div className="text-gray-400 text-xs">binayparamanik3@gmail.com</div>
                </div>
              </motion.a>
              
              <motion.a
                href="tel:8392042619"
                className="flex items-center justify-center gap-3 p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-5 h-5 text-pink-300" />
                <div className="text-left">
                  <div className="text-white text-sm">Phone</div>
                  <div className="text-gray-400 text-xs">8392042619</div>
                </div>
              </motion.a>
            </motion.div>

            {/* Social Media Links */}
            <motion.div 
              className="flex justify-center gap-4 mb-8"
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
                    className={`w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center cursor-pointer transition-colors ${social.color}`}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { 
                      scale: 1, 
                      rotate: 0,
                      transition: { delay: 0.8 + index * 0.1, duration: 0.5 }
                    } : {}}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </motion.a>
                )
              })}
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <motion.div
                custom={0}
                variants={buttonVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full"
                  onClick={() => window.open('mailto:binayparamanik3@gmail.com')}
                >
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                  </motion.div>
                  Send Message
                </Button>
              </motion.div>
              
              <motion.div
                custom={1}
                variants={buttonVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-full"
                  onClick={() => window.open('https://linkedin.com/in/binay-paramanik', '_blank')}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                  </motion.div>
                  LinkedIn Profile
                </Button>
              </motion.div>
            </motion.div>

            {/* Fun Footer */}
            <motion.div
              variants={itemVariants}
              className="mt-8 pt-6 border-t border-gray-700/50"
            >
              <p className="text-gray-400 text-sm">
                ⚡ <em>"I debug my code better at 2 AM than at 2 PM — powered by coffee and curiosity!"</em> ☕💡
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}