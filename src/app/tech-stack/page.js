"use client"
import ScrollReveal from '@/components/ScrollReveal'
import styles from './TechStack.module.css'
import { Code2, Database, Rocket, ShieldCheck, Cloud, Palette } from 'lucide-react'

export default function TechStackPage() {
    const sections = [
        {
            title: 'Frontend Development',
            subtitle: 'Beautiful, responsive interfaces that users love',
            icon: <Code2 />,
            techs: [
                { name: 'React', desc: 'Building interactive user interfaces with component-based architecture.' },
                { name: 'Next.js', desc: 'Server-side rendering and static generation for optimal performance.' },
                { name: 'TypeScript', desc: 'Type-safe code that scales and maintains clarity across teams.' },
                { name: 'Tailwind CSS', desc: 'Rapid styling with utility-first CSS for consistent design systems.' },
                { name: 'Framer Motion', desc: 'Smooth, performant animations for engaging user experiences.' },
            ]
        },
        {
            title: 'Backend & APIs',
            subtitle: 'Robust server-side solutions for complex business logic',
            icon: <Database />,
            techs: [
                { name: 'Node.js', desc: 'Scalable server-side JavaScript for high-performance applications.' },
                { name: 'Django', desc: 'Versatile language for automation, data processing, and AI integrations.' },
                { name: 'Express', desc: 'Fast, minimal web framework for building RESTful APIs efficiently.' },
                { name: 'Spring Boot', desc: 'Powerful backend framework enabling, secure authentication, and high-performance applications.' },
                { name: 'REST APIs', desc: 'Clean, well-documented APIs following industry best practices.' },
                { name: 'FastAPI', desc: 'Fast, modern web framework for building APIs with Python.' },
            ]
        },
        {
            title: 'Database & Storage',
            subtitle: 'Reliable data management for any scale',
            icon: <Database />,
            techs: [
                { name: 'MongoDB', desc: 'Flexible NoSQL database for document-based data models and rapid development.' },
                { name: 'PostgreSQL', desc: 'Robust relational database for complex data relationships and transactions.' },
                { name: 'Redis', desc: 'In-memory data store for caching, sessions, and real-time features.' },
                { name: 'Firebase', desc: 'Real-time database and authentication for rapid prototyping and MVPs.' },
                { name: 'Supabase', desc: 'Open-source Firebase alternative with PostgreSQL backend.' },
            ]
        },
        {
            title: 'DevOps & Cloud',
            subtitle: 'Reliable deployment, scaling, and cloud infrastructure',
            icon: <Cloud />,
            techs: [
                { name: 'AWS', desc: 'Scalable cloud infrastructure with auto-scaling, S3, Lambda, and EC2.' },
                { name: 'Docker', desc: 'Containerized deployments for consistent environments across stages.' },
                { name: 'Kubernetes', desc: 'Container orchestration for managing complex microservice architectures.' },
                { name: 'CI/CD', desc: 'Automated testing and deployment pipelines for rapid, reliable releases.' },
                { name: 'Vercel', desc: 'Zero-config deployment platform optimized for Next.js and frontend apps.' },
            ]
        },
        {
            title: 'Design Tools',
            subtitle: 'Pixel-perfect designs with industry-leading tools',
            icon: <Palette />,
            techs: [
                { name: 'Figma', desc: 'Collaborative design tool for wireframes, prototypes, and design systems.' },
                { name: 'Adobe XD', desc: 'Professional UI/UX design with interactive prototyping capabilities.' },
                { name: 'Photoshop', desc: 'Advanced image editing and asset creation for web and mobile.' },
                { name: 'Illustrator', desc: 'Vector graphics and branding assets for scalable visual identity.' },
                { name: 'Blender', desc: '3D modeling and rendering for immersive visual experiences.' },
            ]
        },
        {
            title: 'Testing & Quality Assurance',
            subtitle: 'Comprehensive testing for bulletproof applications',
            icon: <ShieldCheck />,
            techs: [
                { name: 'Jest', desc: 'Unit testing framework for reliable, bug-free code.' },
                { name: 'Cypress', desc: 'End-to-end testing for complete user journey validation.' },
                { name: 'Playwright', desc: 'Cross-browser testing automation for consistent experiences.' },
                { name: 'Monitoring', desc: 'Real-time performance tracking and error alerting.' },
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
                                            <h3 className={styles.techName}>{tech.name}</h3>
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
