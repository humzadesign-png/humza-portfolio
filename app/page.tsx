'use client';

import { useEffect, useRef } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
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

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>

      <Nav variant="home" />

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <div className="avail-badge">Available for working student roles</div>
          <h1>
            I&apos;m <span className="ac">Humza</span>,<br />
            a UX &amp; UI<br />
            <em>Designer.</em>
          </h1>
          <p className="hero-desc">
            I design digital experiences that feel effortless to use —{' '}
            backed by real research and grounded in what users actually need.
          </p>
          <div className="hero-actions">
            <a href="#works" className="btn-primary">View my work</a>
            <a href="mailto:humzadesign@gmail.com" className="btn-ghost">
              Get in touch <span className="arr">&rarr;</span>
            </a>
          </div>
          <div className="hero-meta">
            <div className="meta-stat">
              <div className="meta-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="meta-num">8<span>+</span></div>
              <div className="meta-label">Years of design</div>
            </div>
            <div className="meta-div"></div>
            <div className="meta-stat">
              <div className="meta-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </div>
              <div className="meta-num" style={{ fontSize: '1rem', fontFamily: 'var(--sans)', fontWeight: 400 }}>Magdeburg</div>
              <div className="meta-label">Germany</div>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-img-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/hero-photo.jpg" alt="Humza Saeed" />
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section id="works">
        <div className="works-header reveal">
          <div>
            <div className="section-tag">Selected work</div>
            <h2 className="section-title">Projects that<br /><em>shipped</em></h2>
          </div>
          <a href="#" className="btn-ghost" style={{ color: 'var(--muted)' }}>
            All projects <span className="arr">→</span>
          </a>
        </div>
        <div className="works-grid">
          {/* 1 — Smokin Grill */}
          <a href="/smokin-grill" className="work-card reveal">
            <div className="work-thumb">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/work-smokin-grill.jpg" alt="Smokin Grill" />
            </div>
            <div className="work-overlay"></div>
            <div className="work-year">2023</div>
            <div className="work-content">
              <span className="work-pill client">Client project &middot; Mobile App</span>
              <div className="work-title">Smokin Grill &mdash; Food ordering experience</div>
              <p className="work-desc">
                End-to-end mobile ordering for a real restaurant client. Research, competitive audit,
                persona &amp; user journey through to final UI.
              </p>
              <div className="work-arrow">↗</div>
            </div>
          </a>

          {/* 2 — FeedbackDrop */}
          <a href="/feedback-drop" className="work-card reveal">
            <div className="work-thumb">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/work-feedback-drop.png" alt="FeedbackDrop" style={{ objectPosition: 'center 22%' }} />
            </div>
            <div className="work-overlay"></div>
            <div className="work-year">2026</div>
            <div className="work-content">
              <span className="work-pill">Self-initiated &middot; SaaS</span>
              <div className="work-title">FeedbackDrop &mdash; SaaS product design</div>
              <p className="work-desc">
                End-to-end product design for a customer feedback management platform —
                public voting board, admin dashboard, and embeddable widget.
              </p>
              <div className="work-arrow">↗</div>
            </div>
          </a>

          {/* 3 — Flaura */}
          <a href="/flaura" className="work-card reveal">
            <div className="work-thumb">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/work-flaura.jpg" alt="Flaura" />
            </div>
            <div className="work-overlay"></div>
            <div className="work-year">2024</div>
            <div className="work-content">
              <span className="work-pill">Self-initiated &middot; Brand Identity</span>
              <div className="work-title">Flaura &mdash; Brand identity redesign</div>
              <p className="work-desc">
                A complete brand refresh to sharpen market positioning and stand out
                from competitors in the floral space.
              </p>
              <div className="work-arrow">↗</div>
            </div>
          </a>

          {/* 4 — Coming soon placeholder */}
          <div className="work-card reveal" style={{ cursor: 'default', background: 'var(--bg2)' }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(200,255,110,0.04) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(200,255,110,0.03) 0%, transparent 50%)',
            }} />
            {/* Animated dots grid */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', opacity: 0.18 }}>
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} style={{
                  position: 'absolute',
                  width: '3px', height: '3px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  left: `${(i % 8) * 14 + 4}%`,
                  top: `${Math.floor(i / 8) * 18 + 6}%`,
                  opacity: Math.random() > 0.5 ? 1 : 0.3,
                }} />
              ))}
            </div>
            <div className="work-content" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', alignItems: 'flex-start', padding: '2.5rem' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                border: '1px solid rgba(200,255,110,0.2)', borderRadius: '100px',
                padding: '0.28rem 0.75rem', marginBottom: '1.75rem',
              }}>
                <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--accent)', animation: 'pulse 2s infinite' }} />
                <span style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)' }}>In progress</span>
              </div>
              <div className="work-title" style={{ fontSize: '1.5rem', color: 'var(--muted)', marginBottom: '0.75rem' }}>Next project<br />coming soon</div>
              <p className="work-desc" style={{ maxWidth: '240px' }}>
                Something new is in the works. Check back soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="reveal">
          <div className="section-tag">What I do</div>
          <h2 className="section-title">Services</h2>
        </div>
        <div className="services-grid">
          <div className="service-card reveal">
            <span className="service-num">01</span>
            <div className="svc-icon">
              <svg viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="19" r="10" stroke="#c8ff6e" strokeWidth="1.8" />
                <circle cx="24" cy="19" r="3.5" fill="#c8ff6e" />
                <path d="M14 38c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#c8ff6e" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M8 19h4M36 19h4M24 5v4M24 29v4" stroke="#c8ff6e" strokeWidth="1.8" strokeLinecap="round" opacity="0.35" />
              </svg>
            </div>
            <div className="service-name">UX Design &amp; Research</div>
            <p className="service-desc">
              From discovery through testing &mdash; experiences grounded in how people actually behave,
              not how we assume they do.
            </p>
          </div>
          <div className="service-card reveal">
            <span className="service-num">02</span>
            <div className="svc-icon">
              <svg viewBox="0 0 48 48" fill="none">
                <rect x="6" y="8" width="36" height="26" rx="4" stroke="#c8ff6e" strokeWidth="1.8" />
                <rect x="12" y="14" width="10" height="8" rx="2" fill="#c8ff6e" opacity="0.28" />
                <rect x="26" y="14" width="10" height="3" rx="1.5" fill="#c8ff6e" />
                <rect x="26" y="20" width="7" height="2" rx="1" fill="#c8ff6e" opacity="0.4" />
                <rect x="12" y="26" width="24" height="2" rx="1" fill="#c8ff6e" opacity="0.25" />
                <path d="M18 38h12M24 34v4" stroke="#c8ff6e" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
            <div className="service-name">UI &amp; Interaction Design</div>
            <p className="service-desc">
              Interfaces that feel obvious. Clean layouts, consistent components,
              interactions that guide without friction.
            </p>
          </div>
          <div className="service-card reveal">
            <span className="service-num">03</span>
            <div className="svc-icon">
              <svg viewBox="0 0 48 48" fill="none">
                <path d="M24 6l4 11h12l-9.5 7 3.5 11L24 28.5 14 35l3.5-11L8 17h12L24 6z" stroke="#c8ff6e" strokeWidth="1.8" strokeLinejoin="round" />
                <circle cx="24" cy="23" r="4.5" fill="#c8ff6e" opacity="0.2" />
                <circle cx="24" cy="23" r="2" fill="#c8ff6e" />
              </svg>
            </div>
            <div className="service-name">Brand Identity</div>
            <p className="service-desc">
              Visual identities that hold up across screens, formats, and first impressions.
              Strong brands make stronger products.
            </p>
          </div>
          <div className="service-card reveal">
            <span className="service-num">04</span>
            <div className="svc-icon">
              <svg viewBox="0 0 48 48" fill="none">
                <rect x="7" y="7" width="14" height="14" rx="3" stroke="#c8ff6e" strokeWidth="1.8" />
                <rect x="27" y="7" width="14" height="14" rx="3" fill="#c8ff6e" opacity="0.22" stroke="#c8ff6e" strokeWidth="1.8" />
                <rect x="7" y="27" width="14" height="14" rx="3" stroke="#c8ff6e" strokeWidth="1.8" strokeDasharray="3 2" />
                <rect x="27" y="27" width="14" height="14" rx="3" stroke="#c8ff6e" strokeWidth="1.8" />
                <path d="M34 31v8M30 35h8" stroke="#c8ff6e" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
            <div className="service-name">Graphic &amp; Visual Design</div>
            <p className="service-desc">
              Supporting teams with visuals that communicate clearly &mdash; from marketing assets
              to product illustrations.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="about-grid">
          <div className="about-img-wrap reveal">
            <div className="about-img-inner">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/about-photo.jpg" alt="Humza Saeed" />
            </div>
            <div className="about-img-label">
              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 500 }}>Humza Saeed</div>
                <div style={{ fontSize: '0.67rem', color: 'var(--muted)' }}>Magdeburg, Germany</div>
              </div>
              <a href="https://www.linkedin.com/in/humza-saeed-7b3761158" target="_blank" rel="noopener noreferrer"
                style={{ fontSize: '0.67rem', color: 'var(--accent)', textDecoration: 'none' }}>
                LinkedIn ↗
              </a>
            </div>
          </div>
          <div className="reveal">
            <div className="section-tag">About me</div>
            <h2 className="section-title">Designer.<br /><em>Researcher.</em><br />Problem solver.</h2>
            <p className="about-bio">
              I&apos;m a UX &amp; UI Designer with roots in graphic design going back to <strong>2016</strong>.
              That background taught me visual craft — UX taught me that great design only works when it works
              for <strong>real people</strong>.<br /><br />
              I approach every project with research first — understanding who uses it, where they get stuck,
              and what they actually need. Then I translate that into wireframes, prototypes, and polished
              interfaces that are <strong>clear, consistent, and pleasant to use</strong>.<br /><br />
              Currently open to <strong>working student roles</strong> in UX/UI where I can contribute to
              a product team while continuing to grow.
            </p>
            <div className="timeline">
              <div className="tl-item">
                <div className="tl-role">UX / UI Designer &mdash; Freelance</div>
                <div className="tl-meta">Project-based &middot; 2023 &ndash; Present</div>
              </div>
              <div className="tl-item">
                <div className="tl-role">Graphic Designer &mdash; Fiverr</div>
                <div className="tl-meta">2016 &ndash; Present</div>
              </div>
            </div>
            <div className="tools-row">
              <span className="tool-pill">Figma</span>
              <span className="tool-pill">FigJam</span>
              <span className="tool-pill">Framer</span>
              <span className="tool-pill">Adobe Illustrator</span>
              <span className="tool-pill">Photoshop</span>
              <span className="tool-pill">Prototyping</span>
              <span className="tool-pill">User Research</span>
              <span className="tool-pill">Claude Code</span>
              <span className="tool-pill">Cursor</span>
              <span className="tool-pill">Pencil</span>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <div className="reveal">
          <div className="section-tag">Social proof</div>
          <h2 className="section-title">What clients <em>say</em></h2>
        </div>
        <div className="reviews-grid">
          <div className="review-card reveal">
            <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="review-text">&ldquo;Great working with Humza &mdash; very flexible and capable in what he is doing!&rdquo;</p>
            <div className="review-author">
              <div className="review-avatar">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/review-1.png" alt="alexisdelap" />
              </div>
              <div>
                <div className="review-name">alexisdelap</div>
                <div className="review-loc">Switzerland</div>
              </div>
            </div>
          </div>
          <div className="review-card reveal">
            <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="review-text">&ldquo;Very quick to respond, understood my concept, and delivered quickly. Highly recommend!&rdquo;</p>
            <div className="review-author">
              <div className="review-avatar">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/review-2.png" alt="lucymeggeson" />
              </div>
              <div>
                <div className="review-name">lucymeggeson</div>
                <div className="review-loc">United Kingdom</div>
              </div>
            </div>
          </div>
          <div className="review-card reveal">
            <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="review-text">&ldquo;Very creative &mdash; a true pleasure to work with. Accommodating with revisions and super patient.&rdquo;</p>
            <div className="review-author">
              <div className="review-avatar">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/review-3.png" alt="heyraeven" />
              </div>
              <div>
                <div className="review-name">heyraeven</div>
                <div className="review-loc">United States</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-glow"></div>
        <div className="reveal" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>Let&apos;s connect</div>
          <h2>Got a project<br />in <em>mind?</em></h2>
          <p style={{ color: 'var(--muted)', fontSize: '0.91rem', marginTop: '1rem', lineHeight: 1.85 }}>
            Whether it&apos;s a working student role, a freelance project,<br />
            or just a conversation about design &mdash; I&apos;d love to hear from you.
          </p>
          <a href="mailto:humzadesign@gmail.com" className="cta-email">
            humzadesign@gmail.com ↗
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
