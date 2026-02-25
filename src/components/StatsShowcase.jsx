"use client"
import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './StatsShowcase.module.css'

const Counter = ({ value, suffix = "", duration = 2 }) => {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })

    useEffect(() => {
        if (inView) {
            let start = 0
            const end = parseInt(value)
            const totalFrames = duration * 60
            const increment = end / totalFrames

            let frame = 0
            const timer = setInterval(() => {
                frame++
                start += increment
                if (frame >= totalFrames) {
                    setCount(end)
                    clearInterval(timer)
                } else {
                    setCount(Math.floor(start))
                }
            }, 1000 / 60)

            return () => clearInterval(timer)
        }
    }, [inView, value, duration])

    return <span ref={ref}>{count}{suffix}</span>
}

const StatsShowcase = () => {
    const stats = [
        { label: "Successful Projects", value: "150", suffix: "+" },
        { label: "Client Satisfaction", value: "99", suffix: "%" },
        { label: "Execution Speed", value: "2.5", suffix: "x" },
        { label: "Team Excellence", value: "50", suffix: "+" }
    ]

    return (
        <section className={styles.stats}>
            <div className="container">
                <div className={styles.grid}>
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className={styles.statItem}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className={styles.value}>
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className={styles.label}>{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default StatsShowcase
