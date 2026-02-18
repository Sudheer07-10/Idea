'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const plans = [
    {
        name: 'Starter',
        price: '$1,500',
        duration: '1–2 weeks',
        desc: 'Perfect for validating a single idea quickly.',
        features: [
            'Discovery call & brief',
            'Wireframes & user flow',
            'Clickable prototype (up to 5 screens)',
            '1 round of revisions',
        ],
        highlighted: false,
    },
    {
        name: 'Growth',
        price: '$3,500',
        duration: '2–3 weeks',
        desc: 'For founders ready to impress investors or test with users.',
        features: [
            'Everything in Starter',
            'High-fidelity UI design',
            'Interactive prototype (up to 15 screens)',
            'User testing setup',
            '3 rounds of revisions',
        ],
        highlighted: true,
    },
    {
        name: 'Scale',
        price: '$7,000+',
        duration: '3–5 weeks',
        desc: 'A full prototype experience — design, test, and build-ready.',
        features: [
            'Everything in Growth',
            'MVP-ready code handoff',
            'Design system & components',
            'Developer documentation',
            'Unlimited revisions',
            'Priority support',
        ],
        highlighted: false,
    },
];

export default function Pricing() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add('animate-in');
                });
            },
            { threshold: 0.1 }
        );

        const cards = sectionRef.current?.querySelectorAll('.pricing-card');
        cards?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="pricing" id="pricing" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Pricing</span>
                    <h2 className="section-title">
                        Simple, <span className="highlight">transparent</span> pricing
                    </h2>
                    <p className="section-desc">
                        No hidden fees. No surprises. Pick a plan that fits your stage — or book a call and we&apos;ll recommend one.
                    </p>
                </div>
                <div className="pricing-grid">
                    {plans.map((plan) => (
                        <div
                            className={`pricing-card ${plan.highlighted ? 'pricing-highlighted' : ''}`}
                            key={plan.name}
                        >
                            {plan.highlighted && <span className="pricing-badge">Most Popular</span>}
                            <h3 className="pricing-name">{plan.name}</h3>
                            <div className="pricing-price">
                                <span className="pricing-amount">{plan.price}</span>
                                <span className="pricing-duration">{plan.duration}</span>
                            </div>
                            <p className="pricing-desc">{plan.desc}</p>
                            <ul className="pricing-features">
                                {plan.features.map((f) => (
                                    <li key={f}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="#contact"
                                className={plan.highlighted ? 'btn-primary btn-pricing-filled' : 'btn-primary btn-pricing'}
                            >
                                Get Started <span className="btn-arrow">→</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
