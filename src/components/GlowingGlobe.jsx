"use client"
import React from 'react'
import { motion } from 'framer-motion'
import styles from './GlowingGlobe.module.css'

const GlowingGlobe = () => {
    return (
        <div className={styles.globeWrapper}>
            <motion.div
                className={styles.globe}
                animate={{
                    rotateY: 360,
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                <div className={styles.sphere}>
                    <div className={styles.grid}></div>
                    <div className={styles.dots}></div>
                </div>
            </motion.div>
            <div className={styles.glow}></div>
        </div>
    )
}

export default GlowingGlobe
