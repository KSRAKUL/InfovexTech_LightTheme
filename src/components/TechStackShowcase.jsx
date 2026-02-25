"use client"
import ScrollReveal from './ScrollReveal'
import styles from './TechStackShowcase.module.css'

const TechStackShowcase = () => {
    const categories = [
        {
            name: 'Frontend',
            color: '#6366F1',
            techs: [
                { name: 'React', icon: '⚛️' },
                { name: 'Next.js', icon: '▲' },
                { name: 'TypeScript', icon: '🔷' },
                { name: 'Tailwind CSS', icon: '💨' },
                { name: 'Flutter', icon: '🦋' },
                { name: 'Framer Motion', icon: '🎬' },
            ],
        },
        {
            name: 'Backend',
            color: '#A855F7',
            techs: [
                { name: 'Node.js', icon: '🟢' },
                { name: 'Python', icon: '🐍' },
                { name: 'Express', icon: '⚡' },
                { name: 'GraphQL', icon: '◈' },
                { name: 'REST APIs', icon: '🔗' },
            ],
        },
        {
            name: 'Database',
            color: '#06B6D4',
            techs: [
                { name: 'PostgreSQL', icon: '🐘' },
                { name: 'MongoDB', icon: '🍃' },
                { name: 'Redis', icon: '🔴' },
                { name: 'Firebase', icon: '🔥' },
                { name: 'Supabase', icon: '⚡' },
            ],
        },
        {
            name: 'DevOps',
            color: '#F59E0B',
            techs: [
                { name: 'Docker', icon: '🐳' },
                { name: 'AWS', icon: '☁️' },
                { name: 'Kubernetes', icon: '⎈' },
                { name: 'CI/CD', icon: '🔄' },
                { name: 'Vercel', icon: '▼' },
            ],
        },
        {
            name: 'Design',
            color: '#EC4899',
            techs: [
                { name: 'Figma', icon: '🎨' },
                { name: 'Adobe XD', icon: '✏️' },
                { name: 'Photoshop', icon: '🖼️' },
                { name: 'Illustrator', icon: '🖌️' },
                { name: 'Blender', icon: '🧊' },
            ],
        },
    ]

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <ScrollReveal>
                        <span className="sectionLabel">Tech Stack</span>
                        <h2 className={styles.title}>Technologies We Master</h2>
                        <p className={styles.subtitle}>
                            We leverage cutting-edge tools and frameworks to build robust,
                            scalable solutions tailored to your needs.
                        </p>
                    </ScrollReveal>
                </div>

                <div className={styles.grid}>
                    {categories.map((cat, idx) => (
                        <ScrollReveal key={cat.name} delay={idx * 0.1}>
                            <div className={styles.categoryCard}>
                                <div className={styles.categoryHeader}>
                                    <div
                                        className={styles.categoryDot}
                                        style={{ background: cat.color }}
                                    />
                                    <h3 className={styles.categoryName}>{cat.name}</h3>
                                </div>
                                <div className={styles.techList}>
                                    {cat.techs.map((tech) => (
                                        <div key={tech.name} className={styles.techChip}>
                                            <span className={styles.techIcon}>{tech.icon}</span>
                                            <span className={styles.techName}>{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TechStackShowcase
