"use client"
import ScrollReveal from '@/components/ScrollReveal'
import styles from './About.module.css'
import { Shield, Target, Users, Award, Lightbulb, HeartHandshake, CheckCircle2 } from 'lucide-react'

export default function AboutPage() {
    const values = [
        {
            title: 'Trust & Transparency',
            desc: 'We build relationships on honest communication and deliver what we promise.',
            icon: <Shield />
        },
        {
            title: 'Precision & Quality',
            desc: 'Every line of code is crafted with attention to detail and best practices.',
            icon: <Target />
        },
        {
            title: 'Partnership Mindset',
            desc: 'We see ourselves as an extension of your team, invested in your success.',
            icon: <Users />
        },
        {
            title: 'Continuous Excellence',
            desc: 'We constantly improve our skills and processes to deliver better results.',
            icon: <Award />
        },
        {
            title: 'Innovation-Driven Approach',
            desc: 'We stay ahead of the curve by embracing emerging technologies and creative problem-solving.',
            icon: <Lightbulb />
        },
        {
            title: 'Client-Centric Delivery',
            desc: 'Every solution is shaped around your goals, timelines, and long-term business vision.',
            icon: <HeartHandshake />
        }
    ]

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className="container">
                    <ScrollReveal>
                        <span className={styles.badge}>Our Culture</span>
                        <h1 className={styles.title}>Built on Strong Values</h1>
                        <p className={styles.subtitle}>
                            Our culture is defined by the principles that guide every decision
                            we make and every solution we deliver.
                        </p>
                    </ScrollReveal>
                </div>
            </header>

            <section className={styles.values}>
                <div className="container">
                    <div className={styles.valueGrid}>
                        {values.map((val, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className={styles.valueCard}>
                                    <div className={styles.iconBox}>{val.icon}</div>
                                    <h3 className={styles.valueTitle}>{val.title}</h3>
                                    <p className={styles.valueDesc}>{val.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.partnership}>
                <div className="container">
                    <div className={styles.partnerFlex}>
                        <div className={styles.partnerContent}>
                            <ScrollReveal>
                                <span className={styles.smallBadge}>Why Trust Us</span>
                                <h2 className={styles.partnerTitle}>Partnerships Built on Excellence</h2>
                                <p className={styles.partnerText}>
                                    Organizations choose Infovex Technologies because we deliver
                                    more than just code — we deliver reliability, expertise, and
                                    genuine care for your business outcomes.
                                </p>
                                <ul className={styles.benefitList}>
                                    <li>
                                        <CheckCircle2 size={20} />
                                        <div>
                                            <strong>Proven Track Record</strong>
                                            <p>Consistent delivery of high-quality solutions across diverse industries.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <CheckCircle2 size={20} />
                                        <div>
                                            <strong>Long-term Support</strong>
                                            <p>We stand by our work with ongoing maintenance and dedicated support.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <CheckCircle2 size={20} />
                                        <div>
                                            <strong>Transparent Communication</strong>
                                            <p>Clear, honest updates throughout every stage of your project.</p>
                                        </div>
                                    </li>
                                </ul>
                            </ScrollReveal>
                        </div>

                        <div className={styles.statBox}>
                            <ScrollReveal direction="right">
                                <div className={styles.bigStat}>
                                    <span className={styles.number}>100%</span>
                                    <p className={styles.statLabel}>Commitment to Quality</p>
                                    <p className={styles.statDesc}>
                                        Every project receives our full attention, expertise, and
                                        dedication to excellence. No shortcuts, no compromises.
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
