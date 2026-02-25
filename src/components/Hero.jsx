"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from './Hero.module.css'
import GradientText from './GradientText'
import { ArrowRight } from 'lucide-react'

const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '30+', label: 'Happy Clients' },
    { number: '99%', label: 'Uptime Guaranteed' },
    { number: '5.0', label: 'Client Rating' },
]

/* ── Tech nodes for the neural network ── */
const techNodes = [
    { id: 'react', x: 18, y: 22, size: 38, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { id: 'nextjs', x: 50, y: 12, size: 36, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
    { id: 'typescript', x: 82, y: 20, size: 34, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { id: 'nodejs', x: 12, y: 52, size: 36, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { id: 'python', x: 40, y: 45, size: 34, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { id: 'mongodb', x: 70, y: 48, size: 34, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    { id: 'postgresql', x: 88, y: 55, size: 32, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { id: 'docker', x: 25, y: 78, size: 36, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
    { id: 'aws', x: 55, y: 75, size: 34, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
    { id: 'figma', x: 80, y: 80, size: 32, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
    { id: 'redis', x: 50, y: 90, size: 30, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
    { id: 'firebase', x: 30, y: 38, size: 30, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg' },
]

/* ── Neural connections between nodes ── */
const connections = [
    ['react', 'nextjs'], ['react', 'nodejs'], ['react', 'firebase'],
    ['nextjs', 'typescript'], ['nextjs', 'python'],
    ['typescript', 'mongodb'],
    ['nodejs', 'python'], ['nodejs', 'docker'], ['nodejs', 'mongodb'],
    ['python', 'mongodb'], ['python', 'aws'],
    ['mongodb', 'postgresql'], ['mongodb', 'redis'],
    ['docker', 'aws'], ['docker', 'redis'],
    ['aws', 'figma'],
    ['postgresql', 'aws'],
    ['firebase', 'python'],
]

const Hero = () => {
    const getNode = (id) => techNodes.find(n => n.id === id)

    return (
        <section className={styles.hero}>
            <div className={`${styles.container} container`}>
                {/* Left — 3D Laptop Visual */}
                <motion.div
                    className={styles.visual}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <div className={styles.laptopWrapper}>
                        {/* Laptop Screen */}
                        <div className={styles.laptopScreen}>
                            <div className={styles.screenBezel}>
                                <div className={styles.camera} />
                            </div>
                            <div className={styles.screenContent}>
                                {/* Neural Network SVG */}
                                <svg className={styles.networkSvg} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                                    <defs>
                                        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
                                            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.4" />
                                            <stop offset="100%" stopColor="#A855F7" stopOpacity="0.15" />
                                        </linearGradient>
                                        <filter id="glow">
                                            <feGaussianBlur stdDeviation="1" result="blur" />
                                            <feMerge>
                                                <feMergeNode in="blur" />
                                                <feMergeNode in="SourceGraphic" />
                                            </feMerge>
                                        </filter>
                                    </defs>

                                    {/* Connection lines */}
                                    {connections.map(([fromId, toId], i) => {
                                        const from = getNode(fromId)
                                        const to = getNode(toId)
                                        return (
                                            <line
                                                key={i}
                                                x1={from.x} y1={from.y}
                                                x2={to.x} y2={to.y}
                                                stroke="url(#lineGrad)"
                                                strokeWidth="0.3"
                                                className={styles.connectionLine}
                                                style={{ animationDelay: `${i * 0.15}s` }}
                                            />
                                        )
                                    })}

                                    {/* Animated pulses along connections */}
                                    {connections.slice(0, 8).map(([fromId, toId], i) => {
                                        const from = getNode(fromId)
                                        const to = getNode(toId)
                                        return (
                                            <circle
                                                key={`pulse-${i}`}
                                                r="0.6"
                                                fill="#6366F1"
                                                filter="url(#glow)"
                                                opacity="0.8"
                                            >
                                                <animateMotion
                                                    dur={`${3 + i * 0.5}s`}
                                                    repeatCount="indefinite"
                                                    path={`M${from.x},${from.y} L${to.x},${to.y}`}
                                                />
                                            </circle>
                                        )
                                    })}
                                </svg>

                                {/* Tech logo nodes */}
                                {techNodes.map((node, i) => (
                                    <motion.div
                                        key={node.id}
                                        className={styles.techNode}
                                        style={{
                                            left: `${node.x}%`,
                                            top: `${node.y}%`,
                                            width: `${node.size}px`,
                                            height: `${node.size}px`,
                                        }}
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.5 + i * 0.08, duration: 0.5, type: "spring" }}
                                        whileHover={{ scale: 1.3, zIndex: 10 }}
                                    >
                                        <img
                                            src={node.icon}
                                            alt={node.id}
                                            className={styles.techIcon}
                                            draggable={false}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Laptop Base */}
                        <div className={styles.laptopBase}>
                            <div className={styles.laptopNotch} />
                        </div>
                        <div className={styles.laptopBottom} />
                    </div>

                    {/* Ambient glow behind laptop */}
                    <div className={styles.laptopGlow} />
                </motion.div>

                {/* Right — Text Content */}
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                >
                    <motion.div
                        className={styles.badge}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <span className={styles.badgeDot} />
                        Information. Intelligence. Accuracy.
                    </motion.div>

                    <h1 className={styles.title}>
                        Building Digital
                        <br />
                        Excellence with{' '}
                        <GradientText
                            colors={["#6366F1", "#A855F7", "#06B6D4", "#6366F1"]}
                            animationSpeed={3.5}
                            showBorder={false}
                        >
                            Precision
                        </GradientText>
                    </h1>

                    <p className={styles.subtitle}>
                        We craft innovative software solutions that transform businesses.
                        From web development to automation, we deliver technology that
                        drives growth and ensures lasting success.
                    </p>

                    <div className={styles.actions}>
                        <Link href="/contact" className={styles.primaryBtn}>
                            <span>Start Your Project</span>
                            <ArrowRight size={18} className={styles.btnArrow} />
                        </Link>
                        <Link href="/services" className={styles.secondaryBtn}>
                            View Services
                        </Link>
                    </div>

                    <motion.div
                        className={styles.statsBar}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                    >
                        {stats.map((stat, index) => (
                            <div key={index} className={styles.statItem}>
                                <span className={styles.statNumber}>{stat.number}</span>
                                <span className={styles.statLabel}>{stat.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
