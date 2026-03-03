"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import styles from './Footer.module.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <div className={styles.gradientLine} />

            <div className={`${styles.container} container`}>
                <div className={styles.top}>
                    {/* Brand Column */}
                    <div className={styles.brand}>
                        <motion.div
                            className={styles.logoWrapper}
                            whileHover="hover"
                            initial="initial"
                        >
                            <Link href="/" className={styles.logo}>
                                <img
                                    src="/logo.png"
                                    alt="Infovex Logo"
                                    className={styles.logoImg}
                                />
                                <div className={styles.logoText}>
                                    <motion.span
                                        className={styles.brandName}
                                        variants={{
                                            hover: { x: 5, color: "#6C63FF" }
                                        }}
                                    >
                                        INFOVEX
                                    </motion.span>
                                    <span className={styles.brandTag}>TECHNOLOGIES</span>
                                </div>
                            </Link>
                        </motion.div>
                        <p className={styles.tagline}>
                            Information. Intelligence. Accuracy. We build exceptional digital
                            experiences that drive business growth and deliver measurable results.
                        </p>
                    </div>

                    {/* Company Column */}
                    <div className={styles.column}>
                        <h4 className={styles.colTitle}>Company</h4>
                        <Link href="/about" className={styles.footerLink}>About Us</Link>
                        <Link href="/services" className={styles.footerLink}>Services</Link>
                        <Link href="/tech-stack" className={styles.footerLink}>Tech Stack</Link>
                        <Link href="/contact" className={styles.footerLink}>Contact</Link>
                    </div>

                    {/* Services Column */}
                    <div className={styles.column}>
                        <h4 className={styles.colTitle}>Services</h4>
                        <Link href="/services" className={styles.footerLink}>Web Development</Link>
                        <Link href="/services" className={styles.footerLink}>UI/UX Design</Link>
                        <Link href="/services" className={styles.footerLink}>Automation</Link>
                        <Link href="/services" className={styles.footerLink}>Maintenance</Link>
                    </div>

                    {/* Get in Touch Column */}
                    <div className={styles.column}>
                        <h4 className={styles.colTitle}>Get in Touch</h4>
                        <a href="mailto:contact@infovextech.com" className={styles.contactItem}>
                            <Mail size={15} />
                            <span>contact@infovextech.com</span>
                        </a>
                        <a href="tel:+918681831689" className={styles.contactItem}>
                            <Phone size={15} />
                            <span>+91 8681831689</span>
                        </a>
                        <div className={styles.contactItem}>
                            <MapPin size={15} />
                            <span>India</span>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {currentYear} Infovex Technologies. All rights reserved.
                    </p>
                    <div className={styles.legal}>
                        <Link href="/contact">Contact Us</Link>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
