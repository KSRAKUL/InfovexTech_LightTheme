"use client"
import Link from 'next/link'
import ScrollReveal from './ScrollReveal'
import styles from './Projects.module.css'

const Projects = () => {
    const projects = [
        {
            title: 'FinFlow Dashboard',
            category: 'Web App',
            outcome: 'Increased client efficiency by 40% with real-time analytics.',
            gradient: 'linear-gradient(135deg, #6366F1, #A855F7)',
            icon: '📊',
        },
        {
            title: 'MediTrack System',
            category: 'Healthcare',
            outcome: 'Streamlined patient management for 200+ clinics.',
            gradient: 'linear-gradient(135deg, #06B6D4, #6366F1)',
            icon: '🏥',
        },
        {
            title: 'ShopSphere E-Commerce',
            category: 'E-Commerce',
            outcome: 'Boosted online sales by 65% with optimized UX.',
            gradient: 'linear-gradient(135deg, #A855F7, #EC4899)',
            icon: '🛒',
        },
        {
            title: 'AutoPilot CRM',
            category: 'Automation',
            outcome: 'Automated 80% of manual workflows for enterprise clients.',
            gradient: 'linear-gradient(135deg, #F59E0B, #06B6D4)',
            icon: '🤖',
        },
    ]

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <ScrollReveal>
                        <span className="sectionLabel">Portfolio</span>
                        <h2 className={styles.title}>Projects That Deliver Results</h2>
                        <p className={styles.subtitle}>
                            Real solutions for real businesses — see how we've helped our clients achieve
                            measurable success.
                        </p>
                    </ScrollReveal>
                </div>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <ScrollReveal key={index} delay={index * 0.12}>
                            <div className={styles.card}>
                                <div
                                    className={styles.thumbnail}
                                    style={{ background: project.gradient }}
                                >
                                    <span className={styles.thumbIcon}>{project.icon}</span>
                                    <span className={styles.categoryBadge}>{project.category}</span>
                                </div>
                                <div className={styles.cardBody}>
                                    <h3 className={styles.projectName}>{project.title}</h3>
                                    <p className={styles.outcome}>{project.outcome}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <div className={styles.footer}>
                    <ScrollReveal delay={0.5}>
                        <Link href="/contact" className={styles.viewAllBtn}>
                            View All Projects →
                        </Link>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}

export default Projects
