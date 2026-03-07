"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import styles from './Navbar.module.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Tech Stack', path: '/tech-stack' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ]

    const isActive = (path) => {
        if (path === '/') return pathname === '/'
        return pathname.startsWith(path)
    }

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`${styles.container} container`}>
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
            {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)} />}
            <div className={`${styles.mobileMenu} ${isOpen ? styles.active : ''}`}>
                <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                    <X size={24} />
                </button>
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
