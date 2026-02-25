"use client"
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import ScrollReveal from './ScrollReveal'
import styles from './FAQ.module.css'

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
        {
            question: 'How long does a typical project take?',
            answer: 'Project timelines vary based on complexity. A standard website takes 2–4 weeks, while custom web applications can take 6–12 weeks. We provide a detailed timeline during our initial consultation so you always know what to expect.',
        },
        {
            question: 'What technologies do you work with?',
            answer: 'We specialize in modern web technologies including React, Next.js, Node.js, Python, and cloud platforms like AWS. We choose the best stack based on your project requirements to ensure optimal performance and scalability.',
        },
        {
            question: 'Do you provide post-launch support?',
            answer: 'Absolutely! Every project includes a support period based on your plan. We also offer extended maintenance packages for clients who want ongoing monitoring, updates, and feature enhancements after launch.',
        },
        {
            question: 'Can you work with our existing codebase?',
            answer: 'Yes, we are experienced in working with existing codebases. We will perform a thorough code audit first, then propose improvements and integrations that align with your current architecture while enhancing performance.',
        },
        {
            question: 'What is your pricing model?',
            answer: 'We offer both project-based and retainer pricing. Project-based pricing gives you a fixed cost for defined deliverables, while retainer models work well for ongoing development needs. Check our pricing section for detailed plans.',
        },
        {
            question: 'How do you handle communication during a project?',
            answer: 'We use a combination of Slack/Discord for daily communication, weekly video calls for progress updates, and project management tools like Linear or Notion for transparency. You will always have full visibility into our progress.',
        },
    ]

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <ScrollReveal>
                        <span className="sectionLabel">FAQ</span>
                        <h2 className={styles.title}>Frequently Asked Questions</h2>
                        <p className={styles.subtitle}>
                            Got questions? We have got answers. If you do not find what you are
                            looking for, feel free to reach out.
                        </p>
                    </ScrollReveal>
                </div>

                <div className={styles.list}>
                    {faqs.map((faq, index) => (
                        <ScrollReveal key={index} delay={index * 0.06}>
                            <div
                                className={`${styles.item} ${openIndex === index ? styles.open : ''}`}
                            >
                                <button
                                    className={styles.question}
                                    onClick={() => toggle(index)}
                                    aria-expanded={openIndex === index}
                                >
                                    <span>{faq.question}</span>
                                    <ChevronDown
                                        size={20}
                                        className={`${styles.chevron} ${openIndex === index ? styles.rotated : ''}`}
                                    />
                                </button>
                                <div
                                    className={styles.answerWrapper}
                                    style={{
                                        maxHeight: openIndex === index ? '300px' : '0px',
                                        opacity: openIndex === index ? 1 : 0,
                                    }}
                                >
                                    <p className={styles.answer}>{faq.answer}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <div className={styles.footer}>
                    <ScrollReveal delay={0.4}>
                        <p className={styles.note}>
                            Still have questions?{' '}
                            <Link href="/contact" className={styles.contactLink}>
                                Get in touch with us →
                            </Link>
                        </p>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}

export default FAQ
