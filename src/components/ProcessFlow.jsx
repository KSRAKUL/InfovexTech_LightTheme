"use client"
import { Search, Palette, Code2, Rocket } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import styles from './ProcessFlow.module.css'

const ProcessFlow = () => {
    const steps = [
        {
            number: '01',
            icon: <Search size={24} />,
            title: 'Discovery & Strategy',
            description: 'We dive deep into your business goals, target audience, and competitive landscape to craft a winning strategy.',
        },
        {
            number: '02',
            icon: <Palette size={24} />,
            title: 'Design & Prototype',
            description: 'Our designers create stunning, user-centric interfaces with interactive prototypes for your review.',
        },
        {
            number: '03',
            icon: <Code2 size={24} />,
            title: 'Develop & Build',
            description: 'Clean, scalable code brought to life with modern technologies, rigorous testing, and agile sprints.',
        },
        {
            number: '04',
            icon: <Rocket size={24} />,
            title: 'Launch & Support',
            description: 'Seamless deployment with ongoing monitoring, maintenance, and continuous improvement post-launch.',
        },
    ]

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <ScrollReveal>
                        <span className="sectionLabel">How We Work</span>
                        <h2 className={styles.title}>From Idea to Execution</h2>
                        <p className={styles.subtitle}>
                            Our proven 4-phase process ensures every project is delivered with
                            excellence, on time, and within budget.
                        </p>
                    </ScrollReveal>
                </div>

                <div className={styles.timeline}>
                    {steps.map((step, index) => (
                        <ScrollReveal key={index} delay={index * 0.15} direction={index % 2 === 0 ? 'left' : 'right'}>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>{step.number}</div>
                                <div className={styles.connector}>
                                    <div className={styles.dot} />
                                    {index < steps.length - 1 && <div className={styles.line} />}
                                </div>
                                <div className={styles.stepContent}>
                                    <div className={styles.stepIcon}>{step.icon}</div>
                                    <h3 className={styles.stepTitle}>{step.title}</h3>
                                    <p className={styles.stepDesc}>{step.description}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProcessFlow
