"use client"
import Link from 'next/link'
import ScrollReveal from './ScrollReveal'
import styles from './CTA.module.css'

const CTA = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <ScrollReveal>
                    <div className={styles.box}>
                        {/* Aurora background */}
                        <div className={styles.aurora}>
                            <div className={styles.auroraOrb1} />
                            <div className={styles.auroraOrb2} />
                            <div className={styles.auroraOrb3} />
                        </div>

                        <div className={styles.content}>
                            <h2 className={styles.title}>
                                Ready to Transform Your Business?
                            </h2>
                            <p className={styles.text}>
                                Let's discuss how Infovex Technologies can help you achieve your
                                digital goals with innovative solutions tailored to your needs.
                            </p>
                            <div className={styles.actions}>
                                <Link href="/contact" className={styles.primaryBtn}>
                                    <span>Contact Us</span>
                                    <span className={styles.arrow}>→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}

export default CTA
