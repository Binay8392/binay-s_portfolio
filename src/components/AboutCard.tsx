import { motion } from 'framer-motion'
import { MapPin, Coffee, Code, Heart } from 'lucide-react'

export default function AboutCard() {
  const stats = [
    { icon: Code, label: "Projects Built", value: "15+" },
    { icon: Coffee, label: "Coffee Cups", value: "200+" },
    { icon: Heart, label: "Happy Clients", value: "10+" },
  ]

  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-slate-800/50 backdrop-blur-md rounded-3xl p-8 border border-gray-700/50 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  More About Me
                </h3>
                <div className="flex items-center gap-2 text-gray-300 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>Based in India</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                  or learning about the latest trends in AI and machine learning. I believe in continuous learning 
                  and sharing knowledge with the developer community.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-purple-400">Current Focus</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span className="text-gray-300 text-sm">Building scalable web applications</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                    <span className="text-gray-300 text-sm">Exploring AI/ML applications</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className="text-gray-300 text-sm">Contributing to open-source</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Stats */}
            <motion.div
              className="grid grid-cols-1 gap-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-600/30"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}