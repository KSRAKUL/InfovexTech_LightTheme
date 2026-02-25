"use client"
import React from 'react'
import { motion } from 'framer-motion'
import styles from './IntelligenceShowcase.module.css'
import Image from 'next/image'

const IntelligenceShowcase = () => {
    return (
        <section className={styles.intelligence}>
            <div className="container">
                <div className={styles.grid}>
                    <motion.div
                        className={styles.content}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className={styles.badge}>Intelligence Defined</div>
                        <h2 className={styles.title}>Turning Data into <br /><span>Digital Power</span></h2>
                        <p className={styles.description}>
                            At Infovex, we don't just build software; we architect intelligence.
                            Our solutions are designed to process complex information and
                            provide clear, actionable insights for your business growth.
                        </p>
                        <ul className={styles.list}>
                            <li>Advanced Cloud Architectures</li>
                            <li>Real-time Data Visualization</li>
                            <li>Automated Decision Systems</li>
                            <li>Secure Information Flow</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className={styles.visual}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className={styles.imageCard}>
                            {/* We'll use a placeholder or generated image later */}
                            <div className={styles.imagePlaceholder}>
                                <div className={styles.dataNodes}>
                                    {[...Array(6)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className={styles.node}
                                            animate={{
                                                scale: [1, 1.2, 1],
                                                opacity: [0.5, 1, 0.5]
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                delay: i * 0.5
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default IntelligenceShowcase
