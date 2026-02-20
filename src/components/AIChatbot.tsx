import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence, useSpring, useMotionValue } from 'framer-motion'
import { X, Send, Bot, Sparkles, ChevronDown } from 'lucide-react'

/* ─── Types ──────────────────────────────────────────── */
interface Message {
    id: string
    role: 'user' | 'assistant'
    content: string
    timestamp: Date
}

/* ─── Binay's knowledge-base for the AI ─────────────── */
/* ─── Simple keyword-based AI engine (no API key needed) ─ */
const LOCAL_RESPONSES: Record<string, string> = {
    hello:
        "Hey there! 👋 I'm Binay's AI assistant. Ask me anything about Binay's skills, projects, or how to get in touch!",
    hi: "Hi! 👋 Nice to meet you! I'm here to tell you all about Binay Paramanik. What would you like to know?",
    skills:
        "Binay is skilled in **React, TypeScript, Tailwind CSS & Framer Motion** for front-end, plus **Generative AI, IoT** and tools like Firebase & Node.js. A true full-stack explorer! 🚀",
    project:
        "Binay has built several exciting projects including portfolio websites, AI-integrated apps, and IoT prototypes. Check out his GitHub at **github.com/Binay8392** for the latest work! 💻",
    contact:
        "You can reach Binay at **binayparamanik3@gmail.com** or connect on **LinkedIn** (linkedin.com/in/binay-paramanik). He loves meeting new people! 📩",
    email:
        "Binay's email is **binayparamanik3@gmail.com** — feel free to drop him a message! 📧",
    linkedin:
        "Find Binay on LinkedIn at **linkedin.com/in/binay-paramanik**. He's always open to connecting with fellow tech enthusiasts! 🔗",
    github:
        "Binay's GitHub is **github.com/Binay8392** — packed with cool projects ranging from React apps to AI experiments! ⭐",
    ai: "Binay is deeply passionate about **Generative AI** and prompt engineering. He's always exploring new AI tools and building AI-powered applications. 🤖",
    iot: "Binay loves **IoT (Internet of Things)** — from hardware prototyping to embedded systems, he bridges the physical and digital world! 🔌",
    react:
        "React is one of Binay's core strengths! He builds beautiful, performant UIs with React, TypeScript, and Framer Motion for smooth animations. ⚛️",
    framer:
        "Binay uses **Framer Motion** to create premium animations — including the very floating effect I'm using right now! ✨",
    about:
        'Binay Paramanik is a passionate developer, lifelong learner, and innovator who thrives at the intersection of **AI, Web, and IoT**. He\'s known for "debugging at 2 AM powered by coffee!" ☕',
    hobby:
        "Binay's biggest hobby is coding — especially late at night when ideas flow freely! He's powered by coffee and genuine curiosity. ☕💡",
    coffee:
        "☕ Binay runs on coffee! He famously debugs better at 2 AM than 2 PM. Perhaps the caffeine unlocks a special coding mode!",
    typescript:
        "Binay codes primarily in **TypeScript** for type-safe, scalable applications. It keeps bugs at bay and code maintainable! 💪",
    tailwind:
        "Tailwind CSS is Binay's go-to styling framework. He combines it with custom animations for stunning UI designs like this portfolio! 🎨",
}

function getAIResponse(query: string): string {
    const lower = query.toLowerCase()
    for (const [key, response] of Object.entries(LOCAL_RESPONSES)) {
        if (lower.includes(key)) return response
    }
    if (lower.includes('work') || lower.includes('job') || lower.includes('hire'))
        return "Binay is open to exciting opportunities! Reach him at **binayparamanik3@gmail.com** to discuss collaborations, internships, or full-time roles. 🎯"
    if (lower.includes('learn') || lower.includes('study') || lower.includes('student'))
        return "Binay is a dedicated lifelong learner — always leveling up his skills in AI, web dev, and IoT. He believes learning never stops! 📚"
    if (lower.includes('location') || lower.includes('where') || lower.includes('city'))
        return "Binay is based in India 🇮🇳, building cool tech and making an impact from his corner of the world!"
    if (lower.includes('name'))
        return "His name is **Binay Paramanik** — a passionate developer dedicated to pushing the boundaries of technology! 🚀"
    return "Great question! I'm Binay's AI assistant. I can tell you about his **skills, projects, contact info, AI work, or IoT projects**. What would you like to know? 🤖"
}

/* ─── Floating Particle ────────────────────────────── */
function Particle({ index }: { index: number }) {
    const angle = (index / 6) * Math.PI * 2
    const radius = 42 + (index % 2) * 8
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius
    const size = index % 3 === 0 ? 3 : index % 3 === 1 ? 2 : 1.5
    const colors = ['#00f0ff', '#8b5cf6', '#a855f7', '#06b6d4', '#7c3aed', '#00d4aa']
    const color = colors[index % colors.length]

    return (
        <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
                width: size,
                height: size,
                background: color,
                boxShadow: `0 0 ${size * 3}px ${color}`,
                left: '50%',
                top: '50%',
                marginLeft: -size / 2,
                marginTop: -size / 2,
            }}
            animate={{
                x: [x * 0.6, x, x * 0.8, x * 0.6],
                y: [y * 0.6, y * 0.8, y, y * 0.6],
                opacity: [0.3, 0.9, 0.6, 0.3],
                scale: [0.8, 1.3, 1, 0.8],
            }}
            transition={{
                duration: 3 + index * 0.4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.25,
            }}
        />
    )
}

/* ─── Typing Indicator ─────────────────────────────── */
function TypingDots() {
    return (
        <div className="flex items-center gap-1 px-4 py-3">
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full"
                    style={{ background: '#00f0ff' }}
                    animate={{ y: [0, -6, 0], opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
                />
            ))}
        </div>
    )
}

/* ─── Message Bubble ───────────────────────────────── */
function MessageBubble({ msg }: { msg: Message }) {
    const isUser = msg.role === 'user'

    // Simple bold markdown parsing
    const renderContent = (text: string) => {
        const parts = text.split(/(\*\*[^*]+\*\*)/)
        return parts.map((part, i) =>
            part.startsWith('**') && part.endsWith('**') ? (
                <strong key={i} style={{ color: '#00f0ff' }}>
                    {part.slice(2, -2)}
                </strong>
            ) : (
                <span key={i}>{part}</span>
            )
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}
        >
            {!isUser && (
                <div
                    className="w-7 h-7 rounded-full flex items-center justify-center mr-2 mt-1 flex-shrink-0"
                    style={{
                        background: 'linear-gradient(135deg, #00f0ff, #8b5cf6)',
                        boxShadow: '0 0 10px rgba(0,240,255,0.4)',
                    }}
                >
                    <Bot size={14} color="#fff" />
                </div>
            )}
            <div
                className="max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed"
                style={
                    isUser
                        ? {
                            background: 'linear-gradient(135deg, rgba(0,240,255,0.2), rgba(139,92,246,0.25))',
                            border: '1px solid rgba(0,240,255,0.3)',
                            color: '#e2e8f0',
                            borderRadius: '18px 18px 4px 18px',
                        }
                        : {
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: '#cbd5e1',
                            borderRadius: '4px 18px 18px 18px',
                        }
                }
            >
                {renderContent(msg.content)}
            </div>
        </motion.div>
    )
}

/* ─── Main Chatbot Component ───────────────────────── */
export default function AIChatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([])
    const [input, setInput] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const [showTooltip, setShowTooltip] = useState(false)
    const [hasMounted, setHasMounted] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    const messagesEndRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const botRef = useRef<HTMLDivElement>(null)

    /* ── Spring values for magnetic effect ── */
    const mx = useMotionValue(0)
    const my = useMotionValue(0)
    const springX = useSpring(mx, { stiffness: 180, damping: 22 })
    const springY = useSpring(my, { stiffness: 180, damping: 22 })
    const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 25 })
    const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 25 })

    /* ── Mobile detection ── */
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 768)
        check()
        window.addEventListener('resize', check)
        return () => window.removeEventListener('resize', check)
    }, [])

    /* ── Mount + tooltip delay ── */
    useEffect(() => {
        setHasMounted(true)
        const tooltipTimer = setTimeout(() => setShowTooltip(true), 2000)
        const hideTimer = setTimeout(() => setShowTooltip(false), 6000)
        return () => {
            clearTimeout(tooltipTimer)
            clearTimeout(hideTimer)
        }
    }, [])

    /* ── Greet on open ── */
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            const greeting: Message = {
                id: 'greet-1',
                role: 'assistant',
                content:
                    "Hey! 👋 I'm Binay's AI assistant. Ask me about his skills, projects, or how to contact him!",
                timestamp: new Date(),
            }
            setMessages([greeting])
        }
        if (isOpen) setTimeout(() => inputRef.current?.focus(), 300)
    }, [isOpen])

    /* ── Auto scroll ── */
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages, isTyping])

    /* ── Global mouse move for magnetic attraction ── */
    const handleGlobalMouseMove = useCallback(
        (e: MouseEvent) => {
            if (!botRef.current || isOpen) return
            const rect = botRef.current.getBoundingClientRect()
            const btnCx = rect.left + rect.width / 2
            const btnCy = rect.top + rect.height / 2
            const dx = e.clientX - btnCx
            const dy = e.clientY - btnCy
            const dist = Math.sqrt(dx * dx + dy * dy)
            const threshold = 160

            if (dist < threshold) {
                const strength = (1 - dist / threshold) * 18
                mx.set((dx / dist) * strength)
                my.set((dy / dist) * strength)
                rotateX.set((-dy / dist) * strength * 0.5)
                rotateY.set((dx / dist) * strength * 0.5)
            } else {
                mx.set(0)
                my.set(0)
                rotateX.set(0)
                rotateY.set(0)
            }
        },
        [isOpen, mx, my, rotateX, rotateY]
    )

    useEffect(() => {
        window.addEventListener('mousemove', handleGlobalMouseMove)
        return () => window.removeEventListener('mousemove', handleGlobalMouseMove)
    }, [handleGlobalMouseMove])

    /* ── Send message ── */
    const sendMessage = async () => {
        const text = input.trim()
        if (!text) return

        const userMsg: Message = {
            id: `u-${Date.now()}`,
            role: 'user',
            content: text,
            timestamp: new Date(),
        }
        setMessages((prev) => [...prev, userMsg])
        setInput('')
        setIsTyping(true)

        // Simulate AI "thinking" time
        const thinkTime = 900 + Math.random() * 700
        setTimeout(() => {
            const reply = getAIResponse(text)
            const aiMsg: Message = {
                id: `a-${Date.now()}`,
                role: 'assistant',
                content: reply,
                timestamp: new Date(),
            }
            setMessages((prev) => [...prev, aiMsg])
            setIsTyping(false)
        }, thinkTime)
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            sendMessage()
        }
    }

    /* ── Position: above WhatsApp button ── */
    const bottomPos = isMobile ? '88px' : '96px'
    const rightPos = isMobile ? '16px' : '24px'

    /* ── Chat window position ── */
    const windowBottom = isMobile ? '0' : '160px'
    const windowRight = isMobile ? '0' : '24px'
    const windowWidth = isMobile ? '100vw' : '380px'
    const windowHeight = isMobile ? '90dvh' : '520px'
    const windowBorderRadius = isMobile ? '20px 20px 0 0' : '20px'

    if (!hasMounted) return null

    return (
        <>
            {/* ── Floating Chat Window ── */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="chat-window"
                        initial={{ opacity: 0, scale: 0.85, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.85, y: 30 }}
                        transition={{ type: 'spring', stiffness: 280, damping: 28 }}
                        style={{
                            position: 'fixed',
                            bottom: windowBottom,
                            right: windowRight,
                            width: windowWidth,
                            height: windowHeight,
                            zIndex: 1001,
                            borderRadius: windowBorderRadius,
                            background: 'rgba(10, 10, 25, 0.88)',
                            backdropFilter: 'blur(24px)',
                            WebkitBackdropFilter: 'blur(24px)',
                            border: '1px solid rgba(0, 240, 255, 0.25)',
                            boxShadow:
                                '0 0 0 1px rgba(0,240,255,0.1), 0 8px 60px rgba(0,0,0,0.7), 0 0 40px rgba(0,240,255,0.08), inset 0 1px 0 rgba(255,255,255,0.06)',
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden',
                        }}
                    >
                        {/* Header */}
                        <div
                            style={{
                                padding: '16px 18px',
                                borderBottom: '1px solid rgba(0,240,255,0.12)',
                                background: 'linear-gradient(135deg, rgba(0,240,255,0.08), rgba(139,92,246,0.08))',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                flexShrink: 0,
                            }}
                        >
                            {/* Animated AI orb */}
                            <motion.div
                                className="relative"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                                style={{ flexShrink: 0 }}
                            >
                                <div
                                    style={{
                                        width: 36,
                                        height: 36,
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, #00f0ff, #8b5cf6)',
                                        boxShadow: '0 0 16px rgba(0,240,255,0.5)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Bot size={18} color="#fff" />
                                </div>
                                {/* Orbit ring */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        inset: -3,
                                        borderRadius: '50%',
                                        border: '1px dashed rgba(0,240,255,0.4)',
                                        pointerEvents: 'none',
                                    }}
                                />
                            </motion.div>

                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ color: '#00f0ff', fontWeight: 700, fontSize: '14px', lineHeight: 1.2 }}>
                                    Binay's AI Assistant
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 3 }}>
                                    <motion.div
                                        style={{ width: 7, height: 7, borderRadius: '50%', background: '#00ff88' }}
                                        animate={{ opacity: [1, 0.4, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                    <span style={{ color: '#94a3b8', fontSize: '11px' }}>Online · AI Powered</span>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
                                <motion.button
                                    onClick={() => setIsOpen(false)}
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    style={{
                                        width: 30,
                                        height: 30,
                                        borderRadius: '50%',
                                        background: 'rgba(255,255,255,0.08)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        color: '#94a3b8',
                                        transition: 'color 0.2s',
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = '#00f0ff')}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                                >
                                    <X size={15} />
                                </motion.button>
                            </div>
                        </div>

                        {/* Quick Prompts */}
                        {messages.length <= 1 && (
                            <div
                                style={{
                                    padding: '10px 14px 6px',
                                    display: 'flex',
                                    gap: 6,
                                    flexWrap: 'wrap',
                                    flexShrink: 0,
                                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                                }}
                            >
                                {['Skills', 'Projects', 'Contact', 'About Binay'].map((q) => (
                                    <motion.button
                                        key={q}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => {
                                            setInput(q)
                                            setTimeout(() => sendMessage(), 50)
                                            const userMsg: Message = {
                                                id: `u-q-${Date.now()}`,
                                                role: 'user',
                                                content: q,
                                                timestamp: new Date(),
                                            }
                                            setMessages((prev) => [...prev, userMsg])
                                            setIsTyping(true)
                                            setTimeout(() => {
                                                const reply = getAIResponse(q)
                                                setMessages((prev) => [
                                                    ...prev,
                                                    { id: `a-q-${Date.now()}`, role: 'assistant', content: reply, timestamp: new Date() },
                                                ])
                                                setIsTyping(false)
                                            }, 900)
                                        }}
                                        style={{
                                            padding: '5px 12px',
                                            borderRadius: 20,
                                            fontSize: '11px',
                                            background: 'rgba(0,240,255,0.08)',
                                            border: '1px solid rgba(0,240,255,0.2)',
                                            color: '#7dd3fc',
                                            cursor: 'pointer',
                                            fontWeight: 500,
                                            transition: 'all 0.2s',
                                        }}
                                    >
                                        {q}
                                    </motion.button>
                                ))}
                            </div>
                        )}

                        {/* Messages */}
                        <div
                            style={{
                                flex: 1,
                                overflowY: 'auto',
                                padding: '14px 14px 4px',
                                scrollbarWidth: 'thin',
                                scrollbarColor: 'rgba(0,240,255,0.2) transparent',
                            }}
                        >
                            <AnimatePresence>
                                {messages.map((msg) => (
                                    <MessageBubble key={msg.id} msg={msg} />
                                ))}
                            </AnimatePresence>
                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 8 }}
                                    className="flex items-center gap-2 mb-3"
                                >
                                    <div
                                        style={{
                                            width: 28,
                                            height: 28,
                                            borderRadius: '50%',
                                            background: 'linear-gradient(135deg, #00f0ff, #8b5cf6)',
                                            boxShadow: '0 0 10px rgba(0,240,255,0.4)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Bot size={13} color="#fff" />
                                    </div>
                                    <div
                                        style={{
                                            background: 'rgba(255,255,255,0.05)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: '4px 18px 18px 18px',
                                        }}
                                    >
                                        <TypingDots />
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input bar */}
                        <div
                            style={{
                                padding: '12px 14px',
                                borderTop: '1px solid rgba(0,240,255,0.12)',
                                background: 'rgba(0,0,0,0.2)',
                                display: 'flex',
                                gap: 8,
                                alignItems: 'center',
                                flexShrink: 0,
                            }}
                        >
                            <div style={{ flex: 1, position: 'relative' }}>
                                <input
                                    ref={inputRef}
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Ask about Binay..."
                                    maxLength={200}
                                    style={{
                                        width: '100%',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(0,240,255,0.2)',
                                        borderRadius: 26,
                                        padding: '10px 16px',
                                        color: '#e2e8f0',
                                        fontSize: '13px',
                                        outline: 'none',
                                        transition: 'border-color 0.2s, box-shadow 0.2s',
                                        boxSizing: 'border-box',
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = 'rgba(0,240,255,0.5)'
                                        e.target.style.boxShadow = '0 0 0 3px rgba(0,240,255,0.08), 0 0 14px rgba(0,240,255,0.1)'
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = 'rgba(0,240,255,0.2)'
                                        e.target.style.boxShadow = 'none'
                                    }}
                                />
                            </div>
                            <motion.button
                                onClick={sendMessage}
                                disabled={!input.trim()}
                                whileHover={input.trim() ? { scale: 1.1 } : {}}
                                whileTap={input.trim() ? { scale: 0.9 } : {}}
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: '50%',
                                    background: input.trim()
                                        ? 'linear-gradient(135deg, #00f0ff, #8b5cf6)'
                                        : 'rgba(255,255,255,0.06)',
                                    border: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: input.trim() ? 'pointer' : 'not-allowed',
                                    flexShrink: 0,
                                    boxShadow: input.trim() ? '0 0 14px rgba(0,240,255,0.35)' : 'none',
                                    transition: 'all 0.2s',
                                }}
                            >
                                <Send size={15} color={input.trim() ? '#fff' : '#475569'} />
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── Floating Bot Icon ── */}
            <motion.div
                ref={botRef}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1, type: 'spring', stiffness: 90, damping: 18 }}
                style={{
                    position: 'fixed',
                    bottom: bottomPos,
                    right: rightPos,
                    zIndex: 1000,
                    x: springX,
                    y: springY,
                    rotateX,
                    rotateY,
                    transformStyle: 'preserve-3d',
                    perspective: 600,
                }}
            >
                {/* Tooltip */}
                <AnimatePresence>
                    {showTooltip && !isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: 10, scale: 0.85 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 10, scale: 0.85 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                            style={{
                                position: 'absolute',
                                right: '110%',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                background: 'rgba(10,10,25,0.92)',
                                backdropFilter: 'blur(16px)',
                                border: '1px solid rgba(0,240,255,0.3)',
                                borderRadius: 12,
                                padding: '8px 14px',
                                whiteSpace: 'nowrap',
                                color: '#e2e8f0',
                                fontSize: '13px',
                                fontWeight: 500,
                                boxShadow: '0 0 20px rgba(0,240,255,0.15), 0 4px 20px rgba(0,0,0,0.5)',
                                pointerEvents: 'none',
                            }}
                        >
                            Ask me about Binay 🤖
                            {/* Arrow */}
                            <div
                                style={{
                                    position: 'absolute',
                                    right: -6,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    width: 0,
                                    height: 0,
                                    borderTop: '6px solid transparent',
                                    borderBottom: '6px solid transparent',
                                    borderLeft: '6px solid rgba(0,240,255,0.3)',
                                }}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Outer glow ring */}
                <motion.div
                    animate={{
                        scale: [1, 1.18, 1],
                        opacity: [0.35, 0.6, 0.35],
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                        position: 'absolute',
                        inset: -10,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(0,240,255,0.18) 0%, transparent 70%)',
                        pointerEvents: 'none',
                    }}
                />

                {/* Secondary glow ring */}
                <motion.div
                    animate={{
                        scale: [1, 1.25, 1],
                        opacity: [0.2, 0.45, 0.2],
                    }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                    style={{
                        position: 'absolute',
                        inset: -18,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
                        pointerEvents: 'none',
                    }}
                />

                {/* Float wrapper */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                    {/* Particle ring */}
                    <div style={{ position: 'relative', width: 64, height: 64 }}>
                        {Array.from({ length: 6 }).map((_, i) => (
                            <Particle key={i} index={i} />
                        ))}

                        {/* Main button */}
                        <motion.button
                            onClick={() => {
                                setIsOpen((prev) => !prev)
                                setShowTooltip(false)
                            }}
                            whileHover={{ scale: 1.12 }}
                            whileTap={{ scale: 0.92 }}
                            aria-label="Open AI chatbot"
                            style={{
                                width: 64,
                                height: 64,
                                borderRadius: '50%',
                                background: isOpen
                                    ? 'linear-gradient(135deg, #8b5cf6, #00f0ff)'
                                    : 'linear-gradient(135deg, #00c8ff, #8b5cf6, #a855f7)',
                                backgroundSize: '200% 200%',
                                border: 'none',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                boxShadow:
                                    '0 0 0 2px rgba(0,240,255,0.35), 0 0 28px rgba(0,240,255,0.45), 0 0 55px rgba(139,92,246,0.25), 0 8px 30px rgba(0,0,0,0.5)',
                                transition: 'box-shadow 0.3s',
                                zIndex: 2,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow =
                                    '0 0 0 3px rgba(0,240,255,0.55), 0 0 40px rgba(0,240,255,0.6), 0 0 70px rgba(139,92,246,0.35), 0 8px 30px rgba(0,0,0,0.5)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow =
                                    '0 0 0 2px rgba(0,240,255,0.35), 0 0 28px rgba(0,240,255,0.45), 0 0 55px rgba(139,92,246,0.25), 0 8px 30px rgba(0,0,0,0.5)'
                            }}
                        >
                            {/* Inner gradient shine */}
                            <div
                                style={{
                                    position: 'absolute',
                                    top: 4,
                                    left: 8,
                                    right: 8,
                                    height: '40%',
                                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.25), transparent)',
                                    borderRadius: '50%',
                                    pointerEvents: 'none',
                                }}
                            />
                            <AnimatePresence mode="wait">
                                {isOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <ChevronDown size={26} color="#fff" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="bot"
                                        initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                        exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                        transition={{ duration: 0.25 }}
                                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                    >
                                        {/* Custom futuristic AI icon */}
                                        <Sparkles size={26} color="#fff" style={{ filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.8))' }} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>
        </>
    )
}
