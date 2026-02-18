'use client';

import { useEffect, useRef } from 'react';

const testimonials = [
    {
        text: 'They took our messy whiteboard sketches and turned them into a beautiful, functional prototype in just two weeks. Absolutely incredible.',
        name: 'Sarah Kim',
        role: 'Founder, NovaByte',
        initials: 'SK',
    },
    {
        text: 'The prototype was so polished that our investors thought we already had a finished product. That\u2019s the level of quality they deliver.',
        name: 'Marcus Rivera',
        role: 'CTO, GreenPulse',
        initials: 'MR',
    },
    {
        text: 'From ideation to a clickable prototype in 10 days. Their process is seamless and their design instincts are spot-on.',
        name: 'Aisha Liang',
        role: 'Product Lead, UrbanFlow',
        initials: 'AL',
    },
];

export default function Testimonials() {
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

        const cards = sectionRef.current?.querySelectorAll('.testimonial-card');
        cards?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="testimonials" id="testimonials" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Client Stories</span>
                    <h2 className="section-title">
                        What Our <span className="highlight">Clients Say</span>
                    </h2>
                </div>
                <div className="testimonials-grid">
                    {testimonials.map((t) => (
                        <div className="testimonial-card" key={t.name}>
                            <div className="testimonial-quote">&ldquo;</div>
                            <p className="testimonial-text">{t.text}</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{t.initials}</div>
                                <div>
                                    <strong>{t.name}</strong>
                                    <span>{t.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
