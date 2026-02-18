'use client';

import { useEffect, useRef } from 'react';

const steps = [
    { num: '1', title: 'Discovery Call', desc: 'We listen to your idea, understand your goals, and define the project scope together.' },
    { num: '2', title: 'Research & Strategy', desc: 'Market analysis, competitor review, and user research to shape the right approach.' },
    { num: '3', title: 'Design & Iterate', desc: 'Wireframes, mockups, and iterative design cycles with your feedback baked in.' },
    { num: '4', title: 'Build & Deliver', desc: 'We develop the prototype, test it thoroughly, and deliver a polished prototype.' },
];

export default function Process() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add('animate-in');
                });
            },
            { threshold: 0.15 }
        );

        const items = sectionRef.current?.querySelectorAll('.process-step');
        items?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="process" id="process" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">How It Works</span>
                    <h2 className="section-title">
                        Our <span className="highlight">Process</span>
                    </h2>
                    <p className="section-desc">
                        A clear, structured path from your first idea to a tangible prototype.
                    </p>
                </div>
                <div className="process-timeline">
                    <div className="process-line" />
                    {steps.map((s) => (
                        <div className="process-step" key={s.num}>
                            <div className="step-marker">
                                <span className="step-number">{s.num}</span>
                            </div>
                            <div className="step-content">
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
