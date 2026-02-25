"use client"
import ScrollReveal from '@/components/ScrollReveal'
import styles from './Contact.module.css'
import Image from 'next/image'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className="container">
                    <ScrollReveal>
                        <span className={styles.badge}>Contact Us</span>
                        <h1 className={styles.title}>Let's Start a Conversation</h1>
                        <p className={styles.subtitle}>
                            Have a project in mind? We'd love to hear from you. Send us a
                            message and we'll respond as soon as possible.
                        </p>
                    </ScrollReveal>
                </div>
            </header>

            <div className="container">
                <div className={styles.grid}>
                    <ScrollReveal direction="left">
                        <div className={styles.formCard}>
                            <h2 className={styles.cardTitle}>Send us a Message</h2>
                            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" placeholder="Your name" />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" placeholder="your@email.com" />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" rows="5" placeholder="Tell us about your project..."></textarea>
                                </div>
                                <button type="submit" className={styles.submitBtn}>
                                    Send Message <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </ScrollReveal>

                    <div className={styles.infoCol}>
                        <ScrollReveal direction="right">
                            <div className={styles.brandCard}>
                                <div className={styles.logo}>
                                    <Image src="/logo.png" alt="Infovex Technologies" width={40} height={40} className={styles.logoImg} />
                                    <h3>Infovex Technologies</h3>
                                </div>
                                <p className={styles.tagline}>Information. Intelligence. Accuracy.</p>
                                <p className={styles.desc}>Building exceptional digital experiences that drive business growth.</p>
                            </div>
                        </ScrollReveal>

                        <div className={styles.contactList}>
                            <ScrollReveal direction="right" delay={0.1}>
                                <div className={styles.contactItem}>
                                    <div className={styles.iconBox}><Mail size={20} /></div>
                                    <div>
                                        <span className={styles.label}>Email</span>
                                        <p className={styles.value}>contact@infovextech.com</p>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal direction="right" delay={0.2}>
                                <div className={styles.contactItem}>
                                    <div className={styles.iconBox}><Phone size={20} /></div>
                                    <div>
                                        <span className={styles.label}>Phone</span>
                                        <p className={styles.value}>+91 8681831689</p>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal direction="right" delay={0.3}>
                                <div className={styles.contactItem}>
                                    <div className={styles.iconBox}><MapPin size={20} /></div>
                                    <div>
                                        <span className={styles.label}>Location</span>
                                        <p className={styles.value}>India</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
