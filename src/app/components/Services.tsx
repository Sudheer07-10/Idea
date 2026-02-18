'use client';

import { useEffect, useRef } from 'react';

const services = [
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        ),
        title: 'Concept Design',
        desc: 'We take your raw ideas and transform them into structured, visual concepts with wireframes and mood boards.',
        num: '01',
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
        title: 'UI/UX Prototyping',
        desc: 'Interactive, high-fidelity prototypes that look and feel like the real product — ready for testing and feedback.',
        num: '02',
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
                <line x1="14" y1="4" x2="10" y2="20" />
            </svg>
        ),
        title: 'MVP Development',
        desc: 'We build the first working version of your product — just enough to test your idea with real users and learn fast.',
        num: '03',
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0022 16z" />
                <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                <polyline points="7.5 19.79 7.5 14.6 3 12" />
                <polyline points="21 12 16.5 14.6 16.5 19.79" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
        ),
        title: '3D Prototyping',
        desc: 'Physical product ideas get the 3D treatment — detailed renders and printable models to bring your concept to life.',
        num: '04',
    },
];

export default function Services() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            { threshold: 0.15 }
        );

        const cards = sectionRef.current?.querySelectorAll('.service-card');
        cards?.forEach((card) => observer.observe(card));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="services" id="services" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">What We Do</span>
                    <h2 className="section-title">
                        Our <span className="highlight">Services</span>
                    </h2>
                    <p className="section-desc">
                        From napkin sketches to functional prototypes — we cover every stage of the product journey.
                    </p>
                </div>
                <div className="services-grid">
                    {services.map((s) => (
                        <div className="service-card" key={s.num}>
                            <div className="service-icon">{s.icon}</div>
                            <h3 className="service-title">{s.title}</h3>
                            <p className="service-desc">{s.desc}</p>
                            <span className="service-number">{s.num}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
