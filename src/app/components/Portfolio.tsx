'use client';

import { useEffect, useRef } from 'react';

const projects = [
    {
        category: 'Mobile App',
        name: 'HealthTrack Pro',
        info: 'A wellness app concept taken from sketch to interactive prototype in 3 weeks.',
        color: '#D4762C',
    },
    {
        category: 'SaaS Dashboard',
        name: 'AnalyticsPulse',
        info: 'Data analytics dashboard prototype for a Series A startup.',
        color: '#4A3520',
    },
    {
        category: 'IoT Device',
        name: 'SmartGrow',
        info: 'Smart gardening device — from concept to 3D-printed prototype.',
        color: '#8B7355',
    },
];

export default function Portfolio() {
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

        const cards = sectionRef.current?.querySelectorAll('.portfolio-card');
        cards?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="portfolio" id="portfolio" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Our Work</span>
                    <h2 className="section-title">
                        Featured <span className="highlight">Projects</span>
                    </h2>
                    <p className="section-desc">
                        A glimpse of the ideas we&apos;ve transformed into working prototypes.
                    </p>
                </div>
                <div className="portfolio-grid">
                    {projects.map((p, i) => (
                        <div className={`portfolio-card ${i === 0 ? 'large' : ''}`} key={p.name}>
                            <div
                                className="portfolio-img"
                                style={{ background: `linear-gradient(135deg, ${p.color}22, ${p.color}44)` }}
                            >
                                <div className="portfolio-placeholder">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth="1">
                                        <rect x="3" y="3" width="18" height="18" rx="2" />
                                        <circle cx="8.5" cy="8.5" r="1.5" />
                                        <polyline points="21 15 16 10 5 21" />
                                    </svg>
                                </div>
                            </div>
                            <div className="portfolio-overlay">
                                <span className="portfolio-category">{p.category}</span>
                                <h3 className="portfolio-name">{p.name}</h3>
                                <p className="portfolio-info">{p.info}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
