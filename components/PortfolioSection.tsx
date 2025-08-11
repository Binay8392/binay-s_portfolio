import { useState } from 'react'
import { Button } from './ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Award, Calendar, BookOpen } from 'lucide-react'

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState('projects')

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const projects = [
    {
      title: "Online Election System",
      description: "A comprehensive voting platform with secure authentication, real-time results, and administrative dashboard.",
      tech: ["React.js", "Node.js", "MongoDB", "JWT"],
      status: "In Development",
      features: ["Secure Voting", "Real-time Results", "Admin Panel", "User Authentication"]
    },
    {
      title: "Smart Library Management System",
      description: "IoT-enabled library system with automated book tracking, user management, and analytics dashboard.",
      tech: ["IoT", "Python", "Flask", "SQLite"],
      status: "Active",
      features: ["IoT Integration", "Book Tracking", "User Management", "Analytics"]
    },
    {
      title: "AI Mental Health Therapist Chatbot",
      description: "Gen AI + NLP powered chatbot providing mental health support through intelligent conversations.",
      tech: ["Python", "NLP", "TensorFlow", "Flask API"],
      status: "Collaboration Seeking",
      features: ["NLP Processing", "Emotional Analysis", "24/7 Support", "Privacy Focused"]
    },
    {
      title: "Fake News Detection System",
      description: "AI-powered system to identify and classify fake news articles using machine learning algorithms and natural language processing.",
      tech: ["Python", "Machine Learning", "NLP", "Scikit-learn", "BERT"],
      status: "In Development",
      features: ["Text Analysis", "ML Classification", "Real-time Detection", "Accuracy Metrics"]
    },
    {
      title: "Automatic Accident Detection & Hospital Connect",
      description: "AI system that automatically detects vehicle accidents and connects victims with nearest hospitals using IoT sensors and emergency response.",
      tech: ["AI/ML", "IoT", "Python", "GPS", "Emergency APIs"],
      status: "In Development", 
      features: ["Accident Detection", "GPS Tracking", "Hospital Integration", "Emergency Response"]
    }
  ]

  const certifications = [
    {
      title: "Machine Learning Fundamentals",
      issuer: "Coursera",
      date: "2024",
      description: "Comprehensive course covering supervised and unsupervised learning, neural networks, and practical ML applications.",
      skills: ["Python", "Scikit-learn", "Neural Networks", "Data Analysis"],
      verifyLink: "https://www.coursera.org/account/accomplishments/verify/SE3GC4P0XI2Q",
      certificateId: "SE3GC4P0XI2Q"
    },
    {
      title: "Deep Learning Specialization",
      issuer: "Coursera",
      date: "2024",
      description: "Advanced deep learning concepts including CNNs, RNNs, and transformer models for real-world applications.",
      skills: ["TensorFlow", "Keras", "Deep Learning", "Neural Networks"],
      verifyLink: "https://www.coursera.org/account/accomplishments/verify/Y3OAKHM7WUHM",
      certificateId: "Y3OAKHM7WUHM"
    },
    {
      title: "Python for Data Science",
      issuer: "Coursera",
      date: "2024",
      description: "Data science fundamentals using Python, covering pandas, numpy, matplotlib, and statistical analysis.",
      skills: ["Python", "Pandas", "NumPy", "Data Visualization"],
      verifyLink: "https://www.coursera.org/account/accomplishments/verify/F9EX9NBR8WCN",
      certificateId: "F9EX9NBR8WCN"
    },
    {
      title: "Decode C++ with DSA Course",
      issuer: "PW Skills",
      date: "2024",
      description: "Comprehensive C++ programming course with Data Structures and Algorithms, covering advanced problem-solving techniques.",
      skills: ["C++", "Data Structures", "Algorithms", "Problem Solving"],
      verifyLink: "https://pwskills.com/learn/certificate/223fa91c-9480-45f4-8b31-ff96742f83cb/",
      certificateId: "223fa91c-9480-45f4-8b31-ff96742f83cb"
    }
  ]

  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: "React.js", level: 85, color: "bg-blue-500" },
        { name: "JavaScript", level: 90, color: "bg-yellow-500" },
        { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
        { name: "Tailwind CSS", level: 80, color: "bg-cyan-500" }
      ]
    },
    {
      category: "Backend Development",
      items: [
        { name: "Node.js", level: 80, color: "bg-green-500" },
        { name: "Python", level: 85, color: "bg-blue-600" },
        { name: "Django", level: 75, color: "bg-green-600" },
        { name: "Flask", level: 80, color: "bg-gray-600" }
      ]
    },
    {
      category: "Database & Tools",
      items: [
        { name: "MongoDB", level: 85, color: "bg-green-500" },
        { name: "MySQL", level: 80, color: "bg-blue-500" },
        { name: "Git/GitHub", level: 90, color: "bg-gray-700" },
        { name: "Docker", level: 70, color: "bg-blue-400" }
      ]
    },
    {
      category: "Programming & DSA",
      items: [
        { name: "C++", level: 85, color: "bg-blue-600" },
        { name: "Data Structures", level: 85, color: "bg-green-600" },
        { name: "Algorithms", level: 80, color: "bg-purple-600" },
        { name: "Problem Solving", level: 88, color: "bg-orange-600" }
      ]
    },
    {
      category: "AI/ML & IoT",
      items: [
        { name: "Machine Learning", level: 80, color: "bg-purple-500" },
        { name: "TensorFlow", level: 75, color: "bg-orange-600" },
        { name: "Arduino/IoT", level: 80, color: "bg-teal-500" },
        { name: "NLP", level: 75, color: "bg-pink-500" }
      ]
    }
  ]

  const tabs = [
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'certifications', label: 'Certifications', icon: '🏆' },
    { id: 'skills', label: 'My Skills', icon: '⚡' }
  ]

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Portfolio Showcase
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my journey through projects, certifications, and technical expertise
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {tabs.map((tab) => (
            <motion.div
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={activeTab === tab.id ? "default" : "outline"}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none'
                    : 'border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-purple-400'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {activeTab === 'projects' && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-slate-800/50 border border-gray-700 rounded-2xl p-6 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-white text-lg">{project.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          project.status === 'Active' ? 'bg-green-500/20 text-green-300' :
                          project.status === 'In Development' ? 'bg-blue-500/20 text-blue-300' :
                          'bg-purple-500/20 text-purple-300'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                      <div className="space-y-3">
                        <div>
                          <p className="text-gray-400 text-xs mb-2">Tech Stack:</p>
                          <div className="flex flex-wrap gap-1">
                            {project.tech.map((tech) => (
                              <span key={tech} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs mb-2">Key Features:</p>
                          <div className="space-y-1">
                            {project.features.map((feature) => (
                              <div key={feature} className="flex items-center gap-2">
                                <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                                <span className="text-gray-300 text-xs">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'certifications' && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 gap-6"
              >
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.certificateId}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-slate-800/50 border border-gray-700 rounded-2xl p-6 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xl">
                            <Award className="w-6 h-6" />
                          </span>
                          <div>
                            <h3 className="text-white text-lg leading-tight">{cert.title}</h3>
                            <p className="text-purple-300 text-sm">{cert.issuer}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-gray-400 text-sm mb-2">
                            <Calendar className="w-4 h-4" />
                            <span>{cert.date}</span>
                          </div>
                          <motion.a
                            href={cert.verifyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink className="w-3 h-3" />
                            Verify
                          </motion.a>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{cert.description}</p>
                      
                      <div className="space-y-3">
                        <div>
                          <p className="text-gray-400 text-xs mb-2 flex items-center gap-1">
                            <BookOpen className="w-3 h-3" />
                            Skills Gained:
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {cert.skills.map((skill) => (
                              <span key={skill} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs font-medium">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="pt-2 border-t border-gray-700/50">
                          <p className="text-gray-400 text-xs">
                            Certificate ID: <span className="text-gray-300 font-mono">{cert.certificateId}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'skills' && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 gap-8"
              >
                {skills.map((category, index) => (
                  <motion.div
                    key={category.category}
                    variants={itemVariants}
                    className="bg-slate-800/50 border border-gray-700 rounded-2xl p-6"
                  >
                    <h3 className="text-white text-xl mb-6">{category.category}</h3>
                    <div className="space-y-4">
                      {category.items.map((skill, skillIndex) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">{skill.name}</span>
                            <span className="text-gray-400 text-sm">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <motion.div
                              className={`h-2 rounded-full ${skill.color}`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ 
                                duration: 1, 
                                delay: skillIndex * 0.1,
                                ease: "easeOut"
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}