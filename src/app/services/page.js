"use client"
import ScrollReveal from '@/components/ScrollReveal'
import styles from './ServicesPage.module.css'
import { CheckCircle2, Code2, BarChart3, Cpu, Paintbrush, Smartphone, Headphones, Database, Cloud, Shield } from 'lucide-react'

export default function ServicesPage() {
    const mainServices = [
        {
            title: 'Web Development',
            icon: <Code2 />,
            desc: 'Custom websites and web applications built from the ground up using modern technologies. We create responsive, fast, and scalable solutions tailored to your business needs.',
            items: ['Single Page Applications', 'Progressive Web Apps', 'E-commerce Solutions', 'Custom Dashboards', 'CMS Integration']
        },
        {
            title: 'Software Solutions',
            icon: <BarChart3 />,
            desc: 'Tailored software systems designed to streamline your business operations and boost efficiency. From CRM tools to custom platforms, we build what your business needs.',
            items: ['Custom CRM Systems', 'ERP Solutions', 'Business Intelligence Tools', 'Workflow Automation', 'SaaS Platforms']
        },
        {
            title: 'Automation',
            icon: <Cpu />,
            desc: 'Intelligent automation tools that monitor, optimize, and maintain your digital infrastructure. Our proprietary Infovex Automation tool keeps your systems healthy 24/7.',
            items: ['Daily Website Health Checks', 'Uptime & Performance Monitoring', 'Error Detection & Reporting', 'Proactive Alerts']
        },
        {
            title: 'UI/UX Design',
            icon: <Paintbrush />,
            desc: 'User-centered design that combines aesthetics with functionality. We craft intuitive interfaces that engage users and drive conversions across all platforms.',
            items: ['User Research & Strategy', 'Wireframing & Prototyping', 'Visual Design & Branding', 'Design Systems', 'Usability Testing']
        },
        {
            title: 'Mobile App Development',
            icon: <Smartphone />,
            desc: 'Native and cross-platform mobile apps that deliver seamless experiences on iOS and Android. From concept to App Store, we handle the complete lifecycle.',
            items: ['React Native Apps', 'Flutter Development', 'Native iOS & Android', 'App Store Deployment', 'Push Notifications']
        },
        {
            title: 'Support & Maintenance',
            icon: <Headphones />,
            desc: 'Reliable long-term support ensuring your applications run smoothly around the clock. We handle updates, security patches, and performance optimization.',
            items: ['24/7 Technical Support', 'Bug Fixes & Patches', 'Performance Optimization', 'Security Updates', 'Regular Backups']
        },
    ]

    const challenges = [
        { title: 'Existing Website Issues', icon: <Shield />, text: 'We diagnose and fix bugs, broken features, and compatibility issues across browsers and devices.' },
        { title: 'Performance Problems', icon: <Cpu />, text: 'Slow websites lose customers. We optimize performance for lightning-fast load times and smooth interactions.' },
        { title: 'Scalability Challenges', icon: <Cloud />, text: 'Prepare your application for growth with cloud architecture that handles any demand surge.' },
        { title: 'Technical Debt', icon: <Database />, text: 'We refactor legacy code and modernize your tech stack for long-term maintainability.' }
    ]

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className="container">
                    <ScrollReveal>
                        <h1 className={styles.title}>End-to-End Digital Solutions</h1>
                        <p className={styles.subtitle}>
                            From concept to deployment and beyond, we provide comprehensive
                            services to bring your vision to life and keep it running smoothly.
                        </p>
                    </ScrollReveal>
                </div>
            </header>

            <section className={styles.mainGrid}>
                <div className="container">
                    <div className={styles.cardGrid}>
                        {mainServices.map((service, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className={styles.mainCard}>
                                    <div className={styles.cardHeader}>
                                        <div className={styles.iconBox}>{service.icon}</div>
                                        <h2 className={styles.cardTitle}>{service.title}</h2>
                                    </div>
                                    <p className={styles.cardDesc}>{service.desc}</p>
                                    <ul className={styles.itemList}>
                                        {service.items.map((item, j) => (
                                            <li key={j}><CheckCircle2 size={18} /> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.challenges}>
                <div className="container">
                    <ScrollReveal>
                        <h2 className={styles.challengeTitle}>We Also Solve Your Toughest Challenges</h2>
                        <p className={styles.challengeSubtitle}>
                            Beyond building new solutions, we specialize in fixing and improving existing systems.
                        </p>
                    </ScrollReveal>
                    <div className={styles.challengeGrid}>
                        {challenges.map((challenge, i) => (
                            <ScrollReveal key={i} delay={i * 0.08}>
                                <div className={styles.challengeCard}>
                                    <div className={styles.challengeIcon}>{challenge.icon}</div>
                                    <h3>{challenge.title}</h3>
                                    <p>{challenge.text}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.automation}>
                <div className="container">
                    <div className={styles.automationBox}>
                        <div className={styles.autoContent}>
                            <span className={styles.tag}>Premium Service</span>
                            <h2 className={styles.autoTitle}>Infovex Automation</h2>
                            <p className={styles.autoText}>
                                Our proprietary automation and monitoring tool that continuously
                                checks your website and application health on a daily basis.
                                Stay worry-free with proactive monitoring and instant alerts.
                            </p>
                            <ul className={styles.autoList}>
                                <li><CheckCircle2 size={18} /> Daily automated website health checks</li>
                                <li><CheckCircle2 size={18} /> Uptime and performance monitoring</li>
                                <li><CheckCircle2 size={18} /> Error detection and instant reporting</li>
                                <li><CheckCircle2 size={18} /> Proactive alerts for downtime or issues</li>
                            </ul>
                        </div>
                        <div className={styles.mockup}>
                            <div className={styles.mockHeader}>
                                <span className={styles.dot}></span> Live Monitoring <span className={styles.status}>Active</span>
                            </div>
                            <div className={styles.mockBody}>
                                <div className={styles.stat}><span>Uptime</span> <strong>99.99%</strong></div>
                                <div className={styles.stat}><span>Response Time</span> <strong>124ms</strong></div>
                                <div className={styles.stat}><span>Health Score</span> <strong>98/100</strong></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
