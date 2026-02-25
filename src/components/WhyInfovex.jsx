"use client"
import { Shield, Zap, Target, Clock, Lightbulb, HeartHandshake } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import styles from './WhyInfovex.module.css'

const WhyInfovex = () => {
    const features = [
        {
            icon: <Shield size={28} />,
            title: 'Trust & Reliability',
            text: 'We build lasting partnerships through transparent communication and consistent delivery.',
        },
        {
            icon: <Zap size={28} />,
            title: 'Speed & Efficiency',
            text: 'Rapid development cycles without compromising on quality or attention to detail.',
        },
        {
            icon: <Target size={28} />,
            title: 'Accuracy & Precision',
            text: 'Every solution is crafted to meet exact specifications with meticulous testing.',
        },
        {
            icon: <Clock size={28} />,
            title: 'On-Time Delivery',
            text: 'We respect deadlines and deliver projects on schedule, every single time.',
        },
        {
            icon: <Lightbulb size={28} />,
            title: 'Innovation First',
            text: 'We leverage the latest technologies to give you a competitive edge in the market.',
        },
        {
            icon: <HeartHandshake size={28} />,
            title: 'Dedicated Support',
            text: 'Personalized support from a team that treats your project like their own.',
        },
    ]

    const comparison = [
        { feature: 'Transparent Pricing', us: true, others: false },
        { feature: 'Dedicated Project Manager', us: true, others: false },
        { feature: 'Post-Launch Support', us: true, others: false },
        { feature: 'Modern Tech Stack', us: true, others: true },
        { feature: 'Agile Methodology', us: true, others: true },
        { feature: 'Custom Solutions', us: true, others: false },
        { feature: 'Performance Optimization', us: true, others: false },
        { feature: 'Code Documentation', us: true, others: false },
    ]

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <ScrollReveal>
                        <span className="sectionLabel">Why Choose Us</span>
                        <h2 className={styles.title}>Your Trusted Technology Partner</h2>
                        <p className={styles.subtitle}>
                            We believe in building long-term relationships through excellence,
                            transparency, and unwavering commitment to your success.
                        </p>
                    </ScrollReveal>
                </div>

                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <ScrollReveal key={index} delay={index * 0.08}>
                            <div className={styles.card}>
                                <div className={styles.iconWrapper}>{feature.icon}</div>
                                <h3 className={styles.cardTitle}>{feature.title}</h3>
                                <p className={styles.cardText}>{feature.text}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Comparison Table */}
                <ScrollReveal delay={0.3}>
                    <div className={styles.comparisonWrapper}>
                        <h3 className={styles.compTitle}>Infovex vs Other Agencies</h3>
                        <div className={styles.compTable}>
                            <div className={`${styles.compRow} ${styles.compHeader}`}>
                                <span>Feature</span>
                                <span>Infovex</span>
                                <span>Others</span>
                            </div>
                            {comparison.map((item, i) => (
                                <div key={i} className={styles.compRow}>
                                    <span className={styles.compFeature}>{item.feature}</span>
                                    <span className={item.us ? styles.check : styles.cross}>
                                        {item.us ? '✓' : '✗'}
                                    </span>
                                    <span className={item.others ? styles.check : styles.cross}>
                                        {item.others ? '✓' : '✗'}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}

export default WhyInfovex
