"use client"
import styles from './Legal.module.css'

export default function PrivacyPolicy() {
    return (
        <div className={styles.page}>
            <div className="container">
                <h1 className={styles.title}>Privacy Policy</h1>
                <p className={styles.updated}>Last updated: March 2026</p>

                <section className={styles.section}>
                    <h2>1. Information We Collect</h2>
                    <p>
                        At Infovex Technologies, we collect information you provide directly to us, such as
                        when you fill out a contact form, request a quote, or communicate with us via email.
                        This may include your name, email address, phone number, company name, and project details.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>2. How We Use Your Information</h2>
                    <p>We use the information we collect to:</p>
                    <ul>
                        <li>Respond to your inquiries and provide requested services</li>
                        <li>Communicate with you about projects, updates, and support</li>
                        <li>Improve our website, services, and user experience</li>
                        <li>Send relevant information about our services (with your consent)</li>
                        <li>Comply with legal obligations</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>3. Information Sharing</h2>
                    <p>
                        We do not sell, trade, or rent your personal information to third parties. We may share
                        information with trusted service providers who assist us in operating our business,
                        provided they agree to keep your information confidential.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>4. Data Security</h2>
                    <p>
                        We implement appropriate technical and organizational measures to protect your personal
                        data against unauthorized access, alteration, disclosure, or destruction. However, no
                        method of transmission over the Internet is 100% secure.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>5. Cookies</h2>
                    <p>
                        Our website may use cookies and similar tracking technologies to enhance your browsing
                        experience. You can control cookie settings through your browser preferences.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>6. Third-Party Links</h2>
                    <p>
                        Our website may contain links to third-party sites. We are not responsible for the
                        privacy practices or content of these external sites.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>7. Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul>
                        <li>Access the personal data we hold about you</li>
                        <li>Request correction of inaccurate data</li>
                        <li>Request deletion of your personal data</li>
                        <li>Withdraw consent for data processing</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>8. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at{' '}
                        <a href="mailto:contact@infovextech.com">contact@infovextech.com</a>.
                    </p>
                </section>
            </div>
        </div>
    )
}
