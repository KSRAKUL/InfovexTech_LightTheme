"use client"
import styles from './TechTicker.module.css'
import {
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiPython,
    SiTypescript,
    SiPostgresql,
    SiMongodb,
    SiFlutter,
    SiSpringboot,
    SiAmazon,
    SiDocker,
    SiKubernetes,
    SiFigma,
    SiGraphql,
    SiRedis,
    SiFirebase,
    SiBlender,
    SiAdobexd,
    SiGithubactions,
    SiVercel,
    SiSupabase,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { Paintbrush, Smartphone } from 'lucide-react'

const TechTicker = () => {
    const techs = [
        { name: 'React', icon: <SiReact color="#61DAFB" /> },
        { name: 'Next.js', icon: <SiNextdotjs color="#FFFFFF" /> },
        { name: 'Node.js', icon: <SiNodedotjs color="#339933" /> },
        { name: 'Python', icon: <SiPython color="#3776AB" /> },
        { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql color="#4169E1" /> },
        { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
        { name: 'Flutter', icon: <SiFlutter color="#02569B" /> },
        { name: 'Spring Boot', icon: <SiSpringboot color="#6DB33F" /> },
        { name: 'React Native', icon: <Smartphone size={20} color="#61DAFB" /> },
        { name: 'Java', icon: <FaJava color="#ED8B00" /> },
        { name: 'AWS', icon: <SiAmazon color="#FF9900" /> },
        { name: 'Docker', icon: <SiDocker color="#2496ED" /> },
        { name: 'Kubernetes', icon: <SiKubernetes color="#326CE5" /> },
        { name: 'Figma', icon: <SiFigma color="#F24E1E" /> },
        { name: 'GraphQL', icon: <SiGraphql color="#E10098" /> },
        { name: 'Redis', icon: <SiRedis color="#DC382D" /> },
        { name: 'Firebase', icon: <SiFirebase color="#FFCA28" /> },
        { name: 'Blender', icon: <SiBlender color="#F5792A" /> },
        { name: 'Adobe XD', icon: <SiAdobexd color="#FF61F6" /> },
        { name: 'CI/CD', icon: <SiGithubactions color="#2088FF" /> },
        { name: 'Vercel', icon: <SiVercel color="#FFFFFF" /> },
        { name: 'Supabase', icon: <SiSupabase color="#3ECF8E" /> },
        { name: 'UI/UX Design', icon: <Paintbrush size={20} color="#A855F7" /> },
    ]

    return (
        <section className={styles.section}>
            <div className={styles.fadeLeft} />
            <div className={styles.fadeRight} />

            <div className={styles.track}>
                <div className={styles.marquee}>
                    {[...techs, ...techs].map((tech, index) => (
                        <div key={index} className={styles.item}>
                            <span className={styles.icon}>{tech.icon}</span>
                            <span className={styles.name}>{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TechTicker
