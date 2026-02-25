"use client"
import ScrollReveal from '@/components/ScrollReveal'
import styles from './Pricing.module.css'
import { Check, Info } from 'lucide-react'
import Link from 'next/link'

export default function PricingPage() {
    const plans = [
        {
            name: 'Starter',
            price: '₹4,999',
            period: '/project',
            desc: 'Perfect for small businesses and startups getting started online.',
            features: [
                'Single Page Website',
                'Mobile Responsive Design',
                'Contact Form Integration',
                'Basic SEO Setup',
                '1 Month Support',
                'Social Media Links',
            ]
        },
        {
            name: 'Professional',
            price: '₹19,999',
            period: '/project',
            popular: true,
            desc: 'Ideal for growing businesses that need a strong digital presence.',
            features: [
                'Multi-Page Website (up to 8)',
                'Custom UI/UX Design',
                'CMS Integration',
                'Advanced SEO & Analytics',
                'Performance Optimization',
                '3 Months Support',
                'Blog / News Section',
                'API Integrations',
            ]
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            period: 'pricing',
            desc: 'For large-scale projects requiring bespoke solutions and ongoing support.',
            features: [
                'Full Custom Web Application',
                'Scalable Architecture',
                'Dedicated Project Manager',
                'CI/CD Pipeline Setup',
                'Database Design & Management',
                '12 Months Priority Support',
                'Custom Integrations',
                'SLA Guarantee',
            ]
        }
    ]

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className="container">
                    <ScrollReveal>
                        <span className={styles.badge}>Pricing & Packages</span>
                        <h1 className={styles.title}>Transparent Pricing, No Surprises</h1>
                        <p className={styles.subtitle}>
                            Choose the plan that fits your needs. Every plan includes our commitment
                            to quality and on-time delivery.
                        </p>
                        <p className={styles.note}>Note: Hosting and domain charges are billed separately.</p>
                    </ScrollReveal>
                </div>
            </header>

            <div className="container">
                <div className={styles.grid}>
                    {plans.map((plan, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <div className={`${styles.card} ${plan.popular ? styles.popular : ''}`}>
                                {plan.popular && <div className={styles.popularBadge}>★ Most Popular</div>}
                                <div className={styles.cardHero}>
                                    <h2 className={styles.planName}>{plan.name}</h2>
                                    <div className={styles.pricing}>
                                        <span className={styles.mainPrice}>{plan.price}</span>
                                        <span className={styles.altPrice}>{plan.period}</span>
                                    </div>
                                    <p className={styles.planDesc}>{plan.desc}</p>
                                </div>

                                <Link href="/contact" className={styles.cta}>
                                    {plan.price === 'Custom' ? 'Contact Us' : 'Get Started'} <span>→</span>
                                </Link>

                                <ul className={styles.features}>
                                    {plan.features.map((feat, j) => (
                                        <li key={j}><Check size={18} /> {feat}</li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <section className={styles.infoSection}>
                    <div className={styles.infoHeader}>
                        <Info size={32} />
                        <h2>Important Information</h2>
                    </div>
                    <div className={styles.infoGrid}>
                        <div className={styles.infoCard}>
                            <h3>Hosting & Domain</h3>
                            <p>Hosting and domain registration are charged separately based on your specific requirements and preferred providers.</p>
                        </div>
                        <div className={styles.infoCard}>
                            <h3>Custom Requirements</h3>
                            <p>Have unique needs? Our Enterprise Plan is fully customizable. Contact us to discuss your specific requirements.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
