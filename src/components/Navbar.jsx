"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import styles from './Navbar.module.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [hidden, setHidden] = useState(false)
    const lastScrollY = useRef(0)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY
            setScrolled(currentY > 50)

            // Hide on scroll down, show on scroll up
            if (currentY > lastScrollY.current && currentY > 100) {
                setHidden(true)
            } else {
                setHidden(false)
            }
            lastScrollY.current = currentY
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Tech Stack', path: '/tech-stack' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ]

    const isActive = (path) => {
        if (path === '/') return pathname === '/'
        return pathname.startsWith(path)
    }

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${hidden ? styles.hidden : ''}`}>
            <div className={`${styles.container} container`}>
                <motion.div
                    className={styles.logoWrapper}
                    whileHover="hover"
                    initial="initial"
                >
                    <Link href="/" className={styles.logo}>
                        <motion.img
                            src="/logo.png"
                            alt="Infovex Logo"
                            className={styles.logoImg}
                            variants={{
                                initial: { rotate: 0, y: 0 },
                                hover: { scale: 1.1, rotate: 15 }
                            }}
                            animate={{
                                rotate: 360,
                                y: [0, -5, 0]
                            }}
                            transition={{
                                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                                scale: { type: "spring", stiffness: 300 }
                            }}
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

                <div className={styles.desktopLinks}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            className={`${styles.link} ${isActive(link.path) ? styles.activeLink : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/contact" className={styles.cta}>
                        Get Started
                    </Link>
                </div>

                <button className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenu} ${isOpen ? styles.active : ''}`}>
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.path}
                        className={`${styles.mobileLink} ${isActive(link.path) ? styles.activeMobileLink : ''}`}
                        onClick={() => setIsOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}
                <Link
                    href="/contact"
                    className={styles.mobileCta}
                    onClick={() => setIsOpen(false)}
                >
                    Get Started
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
