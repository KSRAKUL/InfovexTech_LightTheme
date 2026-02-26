"use client"
import ScrollReveal from './ScrollReveal'
import styles from './TechStackShowcase.module.css'
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFlutter, SiFramer,
    SiNodedotjs, SiPython, SiExpress, SiGraphql,
    SiPostgresql, SiMongodb, SiRedis, SiFirebase, SiSupabase,
    SiDocker, SiAmazon, SiKubernetes, SiGithubactions, SiVercel,
    SiFigma, SiAdobexd, SiAdobephotoshop, SiAdobeillustrator, SiBlender,
} from 'react-icons/si'
import { Link2 } from 'lucide-react'

const TechStackShowcase = () => {
    const categories = [
        {
            name: 'Frontend',
            color: '#6366F1',
            techs: [
                { name: 'React', icon: <SiReact color="#61DAFB" /> },
                { name: 'Next.js', icon: <SiNextdotjs color="#000000" /> },
                { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
                { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> },
                { name: 'Flutter', icon: <SiFlutter color="#02569B" /> },
                { name: 'Framer Motion', icon: <SiFramer color="#0055FF" /> },
            ],
        },
        {
            name: 'Backend',
            color: '#A855F7',
            techs: [
                { name: 'Node.js', icon: <SiNodedotjs color="#339933" /> },
                { name: 'Python', icon: <SiPython color="#3776AB" /> },
                { name: 'Express', icon: <SiExpress color="#000000" /> },
                { name: 'GraphQL', icon: <SiGraphql color="#E10098" /> },
                { name: 'REST APIs', icon: <Link2 size={16} color="#6366F1" /> },
            ],
        },
        {
            name: 'Database',
            color: '#06B6D4',
            techs: [
                { name: 'PostgreSQL', icon: <SiPostgresql color="#4169E1" /> },
                { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
                { name: 'Redis', icon: <SiRedis color="#DC382D" /> },
                { name: 'Firebase', icon: <SiFirebase color="#FFCA28" /> },
                { name: 'Supabase', icon: <SiSupabase color="#3ECF8E" /> },
            ],
        },
        {
            name: 'DevOps',
            color: '#F59E0B',
            techs: [
                { name: 'Docker', icon: <SiDocker color="#2496ED" /> },
                { name: 'AWS', icon: <SiAmazon color="#FF9900" /> },
                { name: 'Kubernetes', icon: <SiKubernetes color="#326CE5" /> },
                { name: 'CI/CD', icon: <SiGithubactions color="#2088FF" /> },
                { name: 'Vercel', icon: <SiVercel color="#000000" /> },
            ],
        },
        {
            name: 'Design',
            color: '#EC4899',
            techs: [
                { name: 'Figma', icon: <SiFigma color="#F24E1E" /> },
                { name: 'Adobe XD', icon: <SiAdobexd color="#FF61F6" /> },
                { name: 'Photoshop', icon: <SiAdobephotoshop color="#31A8FF" /> },
                { name: 'Illustrator', icon: <SiAdobeillustrator color="#FF9A00" /> },
                { name: 'Blender', icon: <SiBlender color="#F5792A" /> },
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
