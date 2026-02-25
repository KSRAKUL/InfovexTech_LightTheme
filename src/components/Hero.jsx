"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from './Hero.module.css'
import GradientText from './GradientText'

const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '30+', label: 'Happy Clients' },
    { number: '99%', label: 'Uptime Guaranteed' },
    { number: '5.0', label: 'Client Rating' },
]

const Hero = () => {
    return (
        <section className={styles.hero}>




            <div className={`${styles.container} container`}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className={styles.badge}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className={styles.badgeDot} />
                        Information. Intelligence. Accuracy.
                    </motion.div>

                    <h1 className={styles.title}>
                        Building Digital Excellence <br />
                        with <GradientText
                            colors={["#295eff", "#513ee0", "#cd32c0", "#295eff"]}
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
                            <span className={styles.btnArrow}>→</span>
                        </Link>
                        <Link href="/services" className={styles.secondaryBtn}>
                            View Services
                        </Link>
                    </div>

                    {/* Stats bar */}
                    <motion.div
                        className={styles.statsBar}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 1 }}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className={styles.statItem}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 + index * 0.1 }}
                            >
                                <span className={styles.statNumber}>{stat.number}</span>
                                <span className={styles.statLabel}>{stat.label}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
