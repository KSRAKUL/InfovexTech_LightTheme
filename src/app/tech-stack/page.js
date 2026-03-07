"use client"
import ScrollReveal from '@/components/ScrollReveal'
import styles from './TechStack.module.css'
import { Code2, Database, Rocket, ShieldCheck, Cloud, Palette } from 'lucide-react'
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer,
    SiNodedotjs, SiDjango, SiExpress, SiSpringboot, SiFastapi,
    SiMongodb, SiPostgresql, SiRedis, SiFirebase, SiSupabase,
    SiAmazonwebservices, SiDocker, SiKubernetes, SiVercel,
    SiFigma, SiAdobexd, SiAdobephotoshop, SiAdobeillustrator, SiBlender,
    SiJest, SiCypress, SiTestinglibrary
} from 'react-icons/si'
import { Activity, GitBranch } from 'lucide-react'

export default function TechStackPage() {
    const sections = [
        {
            title: 'Frontend Development',
            subtitle: 'Beautiful, responsive interfaces that users love',
            icon: <Code2 />,
            techs: [
                { name: 'React', desc: 'Building interactive user interfaces with component-based architecture.', icon: <SiReact color="#61DAFB" /> },
                { name: 'Next.js', desc: 'Server-side rendering and static generation for optimal performance.', icon: <SiNextdotjs /> },
                { name: 'TypeScript', desc: 'Type-safe code that scales and maintains clarity across teams.', icon: <SiTypescript color="#3178C6" /> },
                { name: 'Tailwind CSS', desc: 'Rapid styling with utility-first CSS for consistent design systems.', icon: <SiTailwindcss color="#06B6D4" /> },
                { name: 'Framer Motion', desc: 'Smooth, performant animations for engaging user experiences.', icon: <SiFramer /> },
            ]
        },
        {
            title: 'Backend & APIs',
            subtitle: 'Robust server-side solutions for complex business logic',
            icon: <Database />,
            techs: [
                { name: 'Node.js', desc: 'Scalable server-side JavaScript for high-performance applications.', icon: <SiNodedotjs color="#339933" /> },
                { name: 'Django', desc: 'Versatile language for automation, data processing, and AI integrations.', icon: <SiDjango color="#092E20" /> },
                { name: 'Express', desc: 'Fast, minimal web framework for building RESTful APIs efficiently.', icon: <SiExpress /> },
                { name: 'Spring Boot', desc: 'Powerful backend framework enabling, secure authentication, and high-performance applications.', icon: <SiSpringboot color="#6DB33F" /> },
                { name: 'REST APIs', desc: 'Clean, well-documented APIs following industry best practices.', icon: <GitBranch /> },
                { name: 'FastAPI', desc: 'Fast, modern web framework for building APIs with Python.', icon: <SiFastapi color="#009688" /> },
            ]
        },
        {
            title: 'Database & Storage',
            subtitle: 'Reliable data management for any scale',
            icon: <Database />,
            techs: [
                { name: 'MongoDB', desc: 'Flexible NoSQL database for document-based data models and rapid development.', icon: <SiMongodb color="#47A248" /> },
                { name: 'PostgreSQL', desc: 'Robust relational database for complex data relationships and transactions.', icon: <SiPostgresql color="#4169E1" /> },
                { name: 'Redis', desc: 'In-memory data store for caching, sessions, and real-time features.', icon: <SiRedis color="#DC382D" /> },
                { name: 'Firebase', desc: 'Real-time database and authentication for rapid prototyping and MVPs.', icon: <SiFirebase color="#FFCA28" /> },
                { name: 'Supabase', desc: 'Open-source Firebase alternative with PostgreSQL backend.', icon: <SiSupabase color="#3FCF8E" /> },
            ]
        },
        {
            title: 'DevOps & Cloud',
            subtitle: 'Reliable deployment, scaling, and cloud infrastructure',
            icon: <Cloud />,
            techs: [
                { name: 'AWS', desc: 'Scalable cloud infrastructure with auto-scaling, S3, Lambda, and EC2.', icon: <SiAmazonwebservices color="#FF9900" /> },
                { name: 'Docker', desc: 'Containerized deployments for consistent environments across stages.', icon: <SiDocker color="#2496ED" /> },
                { name: 'Kubernetes', desc: 'Container orchestration for managing complex microservice architectures.', icon: <SiKubernetes color="#326CE5" /> },
                { name: 'CI/CD', desc: 'Automated testing and deployment pipelines for rapid, reliable releases.', icon: <GitBranch /> },
                { name: 'Vercel', desc: 'Zero-config deployment platform optimized for Next.js and frontend apps.', icon: <SiVercel /> },
            ]
        },
        {
            title: 'Design Tools',
            subtitle: 'Pixel-perfect designs with industry-leading tools',
            icon: <Palette />,
            techs: [
                { name: 'Figma', desc: 'Collaborative design tool for wireframes, prototypes, and design systems.', icon: <SiFigma color="#F24E1E" /> },
                { name: 'Adobe XD', desc: 'Professional UI/UX design with interactive prototyping capabilities.', icon: <SiAdobexd color="#FF61F6" /> },
                { name: 'Photoshop', desc: 'Advanced image editing and asset creation for web and mobile.', icon: <SiAdobephotoshop color="#31A8FF" /> },
                { name: 'Illustrator', desc: 'Vector graphics and branding assets for scalable visual identity.', icon: <SiAdobeillustrator color="#FF9A00" /> },
                { name: 'Blender', desc: '3D modeling and rendering for immersive visual experiences.', icon: <SiBlender color="#F5792A" /> },
            ]
        },
        {
            title: 'Testing & Quality Assurance',
            subtitle: 'Comprehensive testing for bulletproof applications',
            icon: <ShieldCheck />,
            techs: [
                { name: 'Jest', desc: 'Unit testing framework for reliable, bug-free code.', icon: <SiJest color="#C21325" /> },
                { name: 'Cypress', desc: 'End-to-end testing for complete user journey validation.', icon: <SiCypress color="#17202C" /> },
                { name: 'Playwright', desc: 'Cross-browser testing automation for consistent experiences.', icon: <SiTestinglibrary color="#E33332" /> },
                { name: 'Monitoring', desc: 'Real-time performance tracking and error alerting.', icon: <Activity /> },
            ]
        }
    ]

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className="container">
                    <ScrollReveal>
                        <span className={styles.topBadge}>Technology Stack</span>
                        <h1 className={styles.title}>Modern Tools for Modern Solutions</h1>
                        <p className={styles.subtitle}>
                            We leverage cutting-edge technologies to build fast, scalable,
                            and maintainable solutions that grow with your business.
                        </p>
                    </ScrollReveal>
                </div>
            </header>

            <div className="container">
                <div className={styles.sections}>
                    {sections.map((section, i) => (
                        <div key={i} className={styles.section}>
                            <ScrollReveal>
                                <div className={styles.sectionHeader}>
                                    <div className={styles.sectionIcon}>{section.icon}</div>
                                    <div>
                                        <h2 className={styles.sectionTitle}>{section.title}</h2>
                                        <p className={styles.sectionSubtitle}>{section.subtitle}</p>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <div className={styles.grid}>
                                {section.techs.map((tech, j) => (
                                    <ScrollReveal key={j} delay={j * 0.1}>
                                        <div className={styles.card}>
                                            <div className={styles.cardHeader}>
                                                <div className={styles.techIcon}>{tech.icon}</div>
                                                <h3 className={styles.techName}>{tech.name}</h3>
                                            </div>
                                            <p className={styles.techDesc}>{tech.desc}</p>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
