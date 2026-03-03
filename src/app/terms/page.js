"use client"
import styles from './Legal.module.css'

export default function TermsOfService() {
    return (
        <div className={styles.page}>
            <div className="container">
                <h1 className={styles.title}>Terms of Service</h1>
                <p className={styles.updated}>Last updated: March 2026</p>

                <section className={styles.section}>
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using the services provided by Infovex Technologies ("Company", "we", "us"),
                        you agree to be bound by these Terms of Service. If you do not agree to these terms,
                        please do not use our services.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>2. Services</h2>
                    <p>
                        Infovex Technologies provides web development, software solutions, UI/UX design,
                        mobile app development, automation, and maintenance services. The specific scope,
                        deliverables, and timelines for each project will be outlined in a separate agreement
                        or proposal.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>3. Client Responsibilities</h2>
                    <p>As a client, you agree to:</p>
                    <ul>
                        <li>Provide accurate and complete information required for project execution</li>
                        <li>Respond to communications and feedback requests in a timely manner</li>
                        <li>Make payments according to the agreed schedule</li>
                        <li>Ensure that any content or materials provided do not infringe upon third-party rights</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>4. Intellectual Property</h2>
                    <p>
                        Upon full payment, all custom-developed code, designs, and deliverables created
                        specifically for the client will be transferred to the client. Pre-existing tools,
                        libraries, and frameworks used in development remain the property of their respective owners.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>5. Payment Terms</h2>
                    <p>
                        Payment terms will be specified in the project proposal or agreement. Late payments
                        may result in project delays or suspension of services. All fees are non-refundable
                        unless otherwise stated in writing.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>6. Confidentiality</h2>
                    <p>
                        Both parties agree to keep confidential any proprietary information, trade secrets,
                        or business information shared during the course of the project. This obligation
                        survives the termination of the agreement.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>7. Limitation of Liability</h2>
                    <p>
                        Infovex Technologies shall not be liable for any indirect, incidental, or
                        consequential damages arising from the use of our services. Our total liability
                        shall not exceed the amount paid by the client for the specific service in question.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>8. Termination</h2>
                    <p>
                        Either party may terminate the agreement with written notice. Upon termination,
                        the client shall pay for all work completed up to the termination date.
                        Any deliverables completed and paid for will be transferred to the client.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>9. Governing Law</h2>
                    <p>
                        These terms shall be governed by and construed in accordance with the laws of India.
                        Any disputes arising under these terms shall be subject to the exclusive jurisdiction
                        of the courts in India.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>10. Contact</h2>
                    <p>
                        For questions about these Terms of Service, contact us at{' '}
                        <a href="mailto:contact@infovextech.com">contact@infovextech.com</a>.
                    </p>
                </section>
            </div>
        </div>
    )
}
