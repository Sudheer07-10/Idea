import Link from 'next/link';

export default function CTA() {
    return (
        <section className="cta-section" id="contact">
            <div className="container">
                <div className="cta-content">
                    <h2 className="cta-title">
                        Ready to bring your
                        <br />
                        <span className="highlight">idea to life?</span>
                    </h2>
                    <p className="cta-desc">
                        Book a free discovery call and let&apos;s map out your prototype together.
                    </p>
                    <div className="cta-urgency">
                        <span className="urgency-dot" />
                        Currently accepting 3 new projects this month
                    </div>
                    <div className="cta-actions">
                        <Link href="mailto:hello@proto.studio" className="btn-primary btn-lg">
                            Book a Free Call <span className="btn-arrow">→</span>
                        </Link>
                        <Link href="#portfolio" className="btn-outline">
                            View Our Work
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
