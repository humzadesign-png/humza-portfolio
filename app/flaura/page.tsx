'use client';

import { useEffect, useRef } from 'react';
import Nav from '@/components/Nav';

export default function Flaura() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;
    const onMove = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX - 4.5}px, ${e.clientY - 4.5}px)`;
      ring.style.transform = `translate(${e.clientX - 17}px, ${e.clientY - 17}px)`;
    };
    document.addEventListener('mousemove', onMove);
    return () => document.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>

      <Nav variant="case-study" />

      <section className="cs-hero" style={{ minHeight: '100vh', gridTemplateColumns: '1fr', placeItems: 'center', textAlign: 'center' }}>
        <div className="cs-hero-left" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="cs-pill">Self-initiated · 2024</div>
          <h1>
            Flaura &mdash;<br />
            <em>Brand identity</em><br />
            redesign
          </h1>
          <p className="cs-hero-desc">
            Case study coming soon. A complete brand refresh to sharpen market positioning
            and stand out from competitors in the floral space.
          </p>
          <div className="meta-chips" style={{ justifyContent: 'center' }}>
            <span className="chip highlight">Branding</span>
            <span className="chip highlight">Identity</span>
            <span className="chip">Visual System</span>
            <span className="chip">2024</span>
          </div>
        </div>
      </section>

      <footer>
        <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: '0.95rem', color: 'var(--text)' }}>
          humzadesign<span style={{ color: 'var(--accent)' }}>.</span>
        </span>
        <div>© 2025 Humza Saeed</div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="mailto:humzadesign@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/humza-saeed-7b3761158" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="/">Home</a>
        </div>
      </footer>
    </>
  );
}
