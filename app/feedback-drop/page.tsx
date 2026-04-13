'use client';

import { useEffect, useRef } from 'react';
import Nav from '@/components/Nav';

export default function FeedbackDrop() {
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

      <Nav variant="case-study" />

      {/* HERO */}
      <section className="cs-hero" style={{ background: 'linear-gradient(135deg, #0e0e0e 0%, #14112a 100%)' }}>
        <div className="cs-hero-left">
          <div className="cs-pill" style={{ borderColor: 'rgba(109,40,217,0.4)', color: '#a78bfa' }}>Self-initiated · 2026</div>
          <h1>
            FeedbackDrop &mdash;<br />
            <em>SaaS product</em><br />
            design
          </h1>
          <p className="cs-hero-desc">
            Designing a customer feedback management platform from scratch — a SaaS tool that lets
            product teams collect, organise, and act on user feedback through a public voting board,
            admin dashboard, and embeddable widget.
          </p>
          <div className="meta-chips">
            <span className="chip highlight">Product Design</span>
            <span className="chip highlight">SaaS</span>
            <span className="chip">UI Design</span>
            <span className="chip">Figma</span>
            <span className="chip">2026</span>
          </div>
        </div>
        <div className="cs-hero-right">
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: '-40px',
              background: 'radial-gradient(circle, rgba(109,40,217,0.18) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/fd-dashboard.png"
              alt="FeedbackDrop dashboard"
              style={{
                width: '100%', maxWidth: '560px', borderRadius: '12px',
                border: '1px solid rgba(109,40,217,0.25)',
                boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
                position: 'relative', zIndex: 1,
              }}
            />
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <div className="cs-section alt">
        <div className="inner-wide">
          <div className="ov-grid reveal">
            <div className="ov-card"><div className="ov-label">My Role</div><div className="ov-val">Solo Product Designer</div></div>
            <div className="ov-card"><div className="ov-label">Type</div><div className="ov-val">Self-initiated · SaaS</div></div>
            <div className="ov-card"><div className="ov-label">Tools</div><div className="ov-val">Figma · Pencil</div></div>
            <div className="ov-card"><div className="ov-label">Platform</div><div className="ov-val">Web App · Desktop</div></div>
          </div>
          <div className="inner" style={{ marginTop: '3rem' }}>
            <div className="section-tag reveal">Overview</div>
            <h2 className="cs-h2 reveal">The <em>product</em></h2>
            <p className="cs-body reveal">
              FeedbackDrop is a lightweight SaaS tool for product teams that want to stop guessing what
              to build next. Companies embed a widget on their product, users submit ideas and vote on
              existing ones, and the team gets a structured dashboard to prioritise and communicate
              their roadmap back to users.
            </p>
            <p className="cs-body reveal">
              The design challenge was building a product that serves two very different audiences
              simultaneously — end users who submit and vote on ideas (public board), and product
              managers who triage, prioritise, and respond (admin dashboard) — without either
              experience feeling like it was designed as an afterthought.
            </p>
          </div>
        </div>
      </div>

      {/* SCREENS */}
      <div className="cs-section">
        <div className="inner-wide">
          <div className="section-tag reveal">Screens</div>
          <h2 className="cs-h2 reveal">Five core <em>views</em></h2>
          <p className="cs-body reveal" style={{ maxWidth: '680px' }}>
            The product is built around five interconnected views. Each one was designed to serve a
            specific job — from high-level analytics to individual feedback threads.
          </p>

          {/* Dashboard */}
          <div style={{ marginTop: '3.5rem' }} className="reveal">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '100px', padding: '0.2rem 0.75rem' }}>01</span>
              <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Dashboard</span>
            </div>
            <p className="cs-body" style={{ marginBottom: '1.5rem', maxWidth: '640px' }}>
              The admin&apos;s home base. At a glance: total feedback count (+12% growth trend), top
              requests by vote count, a live status breakdown across 5 states, a monthly trend chart,
              and a real-time activity feed — all on a single screen.
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/fd-dashboard.png"
              alt="FeedbackDrop dashboard screen"
              style={{ width: '100%', borderRadius: '12px', border: '1px solid var(--border2)', display: 'block' }}
            />
          </div>

          {/* Feedback Board */}
          <div style={{ marginTop: '4rem' }} className="reveal">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '100px', padding: '0.2rem 0.75rem' }}>02</span>
              <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Feedback Board</span>
            </div>
            <p className="cs-body" style={{ marginBottom: '1.5rem', maxWidth: '640px' }}>
              The admin&apos;s triage view. Filter by status (Under review · 64, Planned · 36,
              In progress · 18, Shipped · 12), sort by most votes, and scan all submissions at a
              glance with vote counts, comment counts, categories, and time stamps.
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/fd-feedback.png"
              alt="FeedbackDrop feedback board"
              style={{ width: '100%', borderRadius: '12px', border: '1px solid var(--border2)', display: 'block' }}
            />
          </div>

          {/* Detail View */}
          <div style={{ marginTop: '4rem' }} className="reveal">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '100px', padding: '0.2rem 0.75rem' }}>03</span>
              <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Feedback Detail</span>
            </div>
            <p className="cs-body" style={{ marginBottom: '1.5rem', maxWidth: '640px' }}>
              The full thread for a single item. Voters, comments, admin responses — all in one
              place. The right sidebar gives admins controls to update status and category, with
              a live count showing how many voters will be notified on any status change.
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/fd-detail.png"
              alt="FeedbackDrop detail view"
              style={{ width: '100%', borderRadius: '12px', border: '1px solid var(--border2)', display: 'block' }}
            />
          </div>

          {/* Public Board */}
          <div style={{ marginTop: '4rem' }} className="reveal">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '100px', padding: '0.2rem 0.75rem' }}>04</span>
              <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Public Board</span>
            </div>
            <p className="cs-body" style={{ marginBottom: '1.5rem', maxWidth: '640px' }}>
              The customer-facing page, white-labelled per workspace. Fully customisable — brand
              colour, logo, and custom domain (e.g. feedback.acme.com). Users search, vote, and
              submit new ideas. Sorted by Trending, New, or Top. The board closes the loop
              between product team and customers without any engineering effort.
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/fd-public.png"
              alt="FeedbackDrop public board"
              style={{ width: '100%', borderRadius: '12px', border: '1px solid var(--border2)', display: 'block' }}
            />
          </div>

          {/* Settings */}
          <div style={{ marginTop: '4rem' }} className="reveal">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '100px', padding: '0.2rem 0.75rem' }}>05</span>
              <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Settings</span>
            </div>
            <p className="cs-body" style={{ marginBottom: '1.5rem', maxWidth: '640px' }}>
              Full workspace configuration: branding (name, description, brand colour, custom
              domain), category management, embed widget code, and integrations with Slack,
              Linear, and Intercom — all within a clean tabbed settings panel.
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/fd-settings.png"
              alt="FeedbackDrop settings screen"
              style={{ width: '100%', borderRadius: '12px', border: '1px solid var(--border2)', display: 'block' }}
            />
          </div>
        </div>
      </div>

      {/* DESIGN DECISIONS */}
      <div className="cs-section alt">
        <div className="inner">
          <div className="section-tag reveal">Design Decisions</div>
          <h2 className="cs-h2 reveal">Principles that <em>guided</em> the design</h2>
          <p className="cs-body reveal">
            Every screen came back to the same question: who is this for right now, and what do
            they need to do in the next 30 seconds?
          </p>
          <div className="decision-list reveal">
            <div className="decision">
              <div className="d-num">1</div>
              <div>
                <div className="d-title">Two audiences, two mental models</div>
                <div className="d-desc">The admin dashboard uses a dense, information-rich layout — sidebar nav, data tables, analytics cards. The public board is stripped back to a single column with vote counts front and centre. Same data, opposite densities — because the jobs are completely different.</div>
              </div>
            </div>
            <div className="decision">
              <div className="d-num">2</div>
              <div>
                <div className="d-title">Status as a communication system</div>
                <div className="d-desc">Five statuses (Under review, Planned, In progress, Shipped, Closed) aren&apos;t just admin labels — they&apos;re the product team&apos;s voice back to users. When an admin changes a status, 42 voters get notified automatically. The design makes this consequence visible at the point of action.</div>
              </div>
            </div>
            <div className="decision">
              <div className="d-num">3</div>
              <div>
                <div className="d-title">White-label by default</div>
                <div className="d-desc">The public board was designed to disappear into any brand. Custom domain, brand colour, and logo are first-class settings — not an afterthought. The &quot;Powered by FeedbackDrop&quot; footer is the only constant, kept subtle intentionally.</div>
              </div>
            </div>
            <div className="decision">
              <div className="d-num">4</div>
              <div>
                <div className="d-title">Integrations at the edges</div>
                <div className="d-desc">Slack, Linear, and Intercom connect FeedbackDrop to where teams already work — not to replace those tools, but to push signal into them. A new high-vote item pings Slack. A status change creates a Linear ticket. The design keeps integrations peripheral so the core board stays focused.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="cs-section">
        <div className="inner-wide">
          <div className="section-tag reveal">At a glance</div>
          <h2 className="cs-h2 reveal">What the <em>product tracks</em></h2>
          <div className="reflect-grid reveal" style={{ marginTop: '2.5rem' }}>
            <div className="reflect-card">
              <div className="d-num" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>142</div>
              <div className="d-title">Total feedback items</div>
              <div className="d-desc">Tracked across all status stages with +12% month-on-month growth trend shown on the dashboard.</div>
            </div>
            <div className="reflect-card">
              <div className="d-num" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>5</div>
              <div className="d-title">Status stages</div>
              <div className="d-desc">Under review · Planned · In progress · Shipped · Closed — each triggering automatic voter notifications.</div>
            </div>
            <div className="reflect-card">
              <div className="d-num" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>3</div>
              <div className="d-title">Native integrations</div>
              <div className="d-desc">Slack, Linear, and Intercom — pushing feedback signal directly into the tools product teams already live in.</div>
            </div>
            <div className="reflect-card">
              <div className="d-num" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>42</div>
              <div className="d-title">Votes on top item</div>
              <div className="d-desc">Dark mode support — the most voted feature, already moved to Planned with Q2 ETA communicated back to voters.</div>
            </div>
          </div>
        </div>
      </div>

      {/* REFLECTIONS */}
      <div className="cs-section alt">
        <div className="inner">
          <div className="section-tag reveal">Reflections</div>
          <h2 className="cs-h2 reveal">What I <em>learned</em></h2>
          <p className="cs-body reveal">
            Designing a B2B SaaS product pushed me to think about density differently. Consumer apps
            can afford whitespace because users have one task at a time. Product managers in a dashboard
            need to scan 6 things simultaneously — the design has to earn every pixel.
          </p>
          <p className="cs-body reveal">
            The hardest design problem was the status system. It looks like a simple dropdown, but it
            triggers a chain of communication — notifications to voters, updates to the public board,
            potential Linear tickets. Getting the admin UI to communicate that consequence clearly,
            without making the interaction feel heavy, took several iterations.
          </p>
          <div style={{ background: 'var(--bg2)', border: '1px solid var(--border2)', borderLeft: '2.5px solid #a78bfa', borderRadius: '0 12px 12px 0', padding: '1.25rem 1.5rem', marginTop: '2rem' }} className="reveal">
            <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#a78bfa', marginBottom: '8px' }}>Key takeaway</div>
            <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--muted)', lineHeight: 1.75 }}>
              &ldquo;In B2B design, the best UX is often <strong style={{ color: 'var(--text)', fontWeight: 400 }}>invisible density</strong> —
              surfacing exactly the right information at the right moment, without the user feeling overwhelmed.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* NEXT CTA */}
      <div className="cs-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="inner">
          <div className="next-cta reveal">
            <div>
              <div className="next-label">Next project</div>
              <div className="next-title">Smokin Grill — Food ordering experience</div>
            </div>
            <a href="/smokin-grill" className="btn-primary" style={{ flexShrink: 0 }}>View case study ↗</a>
          </div>
        </div>
      </div>
    </>
  );
}
