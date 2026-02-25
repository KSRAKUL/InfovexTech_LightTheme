"use client"
import { Star, Quote } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import styles from './Testimonials.module.css'

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Infovex delivered our platform 2 weeks ahead of schedule with exceptional quality. Their team's expertise in React and Node.js is truly outstanding.",
            name: 'Arjun Mehta',
            role: 'CTO',
            company: 'FinFlow Solutions',
            rating: 5,
        },
        {
            quote: "Working with Infovex was a game-changer for our business. They transformed our outdated system into a modern, scalable platform that our users love.",
            name: 'Priya Sharma',
            role: 'Founder',
            company: 'MediTrack Health',
            rating: 5,
        },
        {
            quote: "The attention to detail and communication throughout the project was incredible. Infovex isn't just a vendor — they're a true technology partner.",
            name: 'Rahul Patel',
            role: 'Product Manager',
            company: 'ShopSphere',
            rating: 5,
        },
    ]

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <ScrollReveal>
                        <span className="sectionLabel">Testimonials</span>
                        <h2 className={styles.title}>What Our Clients Say</h2>
                        <p className={styles.subtitle}>
                            Don't just take our word for it — hear from the businesses
                            we've helped transform.
                        </p>
                    </ScrollReveal>
                </div>

                <div className={styles.grid}>
                    {testimonials.map((testimonial, index) => (
                        <ScrollReveal key={index} delay={index * 0.12}>
                            <div className={styles.card}>
                                <div className={styles.quoteIcon}>
                                    <Quote size={24} />
                                </div>

                                <div className={styles.stars}>
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <Star key={i} size={16} className={styles.star} />
                                    ))}
                                </div>

                                <p className={styles.quote}>{testimonial.quote}</p>

                                <div className={styles.author}>
                                    <div className={styles.avatar}>
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div className={styles.authorInfo}>
                                        <span className={styles.name}>{testimonial.name}</span>
                                        <span className={styles.role}>
                                            {testimonial.role}, {testimonial.company}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
