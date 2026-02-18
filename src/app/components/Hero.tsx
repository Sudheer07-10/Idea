import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="hero" id="home">
            {/* Blueprint grid background */}
            <div className="hero-grid-bg" />

            {/* Decorative arc */}
            <div className="hero-arc">
                <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 0 C0 331.37 268.63 600 600 600"
                        stroke="#C9BDA8"
                        strokeWidth="1"
                        strokeDasharray="8 6"
                    />
                </svg>
            </div>

            <div className="hero-content">
                <h1 className="hero-title">
                    <span className="hero-title-light">From </span>
                    <span className="hero-title-bold">Idea</span>
                    <br />
                    <span className="hero-title-light">to </span>
                    <span className="hero-title-bold">Prototype</span>
                </h1>
                <p className="hero-subtitle">
                    Thoughtfully crafted prototypes that make turning
                    <br />
                    your vision into reality simple and stress-free
                </p>
                <Link href="#contact" className="btn-primary">
                    Start Your Project <span className="btn-arrow">→</span>
                </Link>
            </div>

            {/* Hero image */}
            <div className="hero-image-wrapper">
                <Image
                    src="/hero-image.svg"
                    alt="From idea sketch to working prototype"
                    width={2000}
                    height={1000}
                    className="hero-image"
                    priority
                />
            </div>
        </section>
    );
}
