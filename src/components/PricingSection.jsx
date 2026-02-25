"use client"
import Link from 'next/link'
import { Check } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import styles from './PricingSection.module.css'

const PricingSection = () => {
    const plans = [
        {
            name: 'Starter',
            price: '₹4,999',
            period: '/project',
            description: 'Perfect for small businesses and startups getting started online.',
            features: [
                'Single Page Website',
                'Mobile Responsive Design',
                'Contact Form Integration',
                'Basic SEO Setup',
                '1 Month Support',
                'Social Media Links',
            ],
            highlighted: false,
        },
        {
            name: 'Professional',
            price: '₹19,999',
            period: '/project',
            description: 'Ideal for growing businesses that need a strong digital presence.',
            features: [
                'Multi-Page Website (up to 8)',
                'Custom UI/UX Design',
                'CMS Integration',
                'Advanced SEO & Analytics',
                'Performance Optimization',
                '3 Months Support',
                'Blog / News Section',
                'API Integrations',
            ],
            highlighted: true,
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            period: 'pricing',
            description: 'For large-scale projects requiring bespoke solutions and ongoing support.',
            features: [
                'Full Custom Web Application',
                'Scalable Architecture',
                'Dedicated Project Manager',
                'CI/CD Pipeline Setup',
                'Database Design & Management',
                '12 Months Priority Support',
                'Custom Integrations',
                'SLA Guarantee',
            ],
            highlighted: false,
        },
    ]

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <ScrollReveal>
                        <span className="sectionLabel">Pricing</span>
                        <h2 className={styles.title}>Transparent Pricing, No Surprises</h2>
                        <p className={styles.subtitle}>
                            Choose the plan that fits your needs. Every plan includes our commitment
                            to quality and on-time delivery.
                        </p>
                    </ScrollReveal>
                </div>

                <div className={styles.grid}>
                    {plans.map((plan, index) => (
                        <ScrollReveal key={index} delay={index * 0.12}>
                            <div className={`${styles.card} ${plan.highlighted ? styles.highlighted : ''}`}>
                                {plan.highlighted && (
                                    <div className={styles.popularBadge}>Most Popular</div>
                                )}
                                <div className={styles.cardTop}>
                                    <h3 className={styles.planName}>{plan.name}</h3>
                                    <div className={styles.priceRow}>
                                        <span className={styles.price}>{plan.price}</span>
                                        <span className={styles.period}>{plan.period}</span>
                                    </div>
                                    <p className={styles.planDesc}>{plan.description}</p>
                                </div>
                                <div className={styles.featureList}>
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className={styles.featureItem}>
                                            <Check size={16} className={styles.checkIcon} />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link
                                    href="/contact"
                                    className={`${styles.planBtn} ${plan.highlighted ? styles.planBtnPrimary : ''}`}
                                >
                                    Get Started →
                                </Link>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <div className={styles.footer}>
                    <ScrollReveal delay={0.4}>
                        <p className={styles.note}>
                            Need a custom quote? <Link href="/contact" className={styles.contactLink}>Contact us</Link> for a personalized proposal.
                        </p>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}

export default PricingSection
