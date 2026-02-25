"use client"
import Link from 'next/link'
import { Code2, Cpu, BarChart3, Headphones, Paintbrush, Smartphone } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import styles from './Services.module.css'

const Services = () => {
    const services = [
        {
            icon: <Code2 size={24} />,
            title: 'Web Development',
            text: 'Custom websites and web applications built with modern technologies for optimal performance.',
        },
        {
            icon: <BarChart3 size={24} />,
            title: 'Software Solutions',
            text: 'Tailored software systems designed to streamline your business operations and boost efficiency.',
        },
        {
            icon: <Cpu size={24} />,
            title: 'Automation',
            text: 'Intelligent automation tools that monitor, optimize, and maintain your digital infrastructure.',
        },
        {
            icon: <Paintbrush size={24} />,
            title: 'UI/UX Design',
            text: 'Beautiful, user-centric interfaces that delight your customers and drive conversions.',
        },
        {
            icon: <Smartphone size={24} />,
            title: 'Mobile App Development',
            text: 'Native and cross-platform mobile apps that deliver seamless experiences on iOS and Android.',
        },
        {
            icon: <Headphones size={24} />,
            title: 'Support & Maintenance',
            text: 'Reliable long-term support ensuring your applications run smoothly around the clock.',
        },
    ]

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <ScrollReveal>
                        <span className="sectionLabel">Our Services</span>
                        <h2 className={styles.title}>Solutions That Drive Growth</h2>
                        <p className={styles.subtitle}>
                            We provide end-to-end software services designed to solve complex
                            business challenges and accelerate your digital transformation.
                        </p>
                    </ScrollReveal>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <ScrollReveal key={index} delay={index * 0.08} direction="up">
                            <div className={styles.card}>
                                <div className={styles.icon}>{service.icon}</div>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardText}>{service.text}</p>
                                <Link href="/services" className={styles.learnMore}>
                                    Learn More <span>→</span>
                                </Link>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <div className={styles.footer}>
                    <ScrollReveal delay={0.5}>
                        <Link href="/services" className={styles.viewAllBtn}>
                            View All Services →
                        </Link>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}

export default Services
