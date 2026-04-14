'use client';

import { useEffect, useRef } from 'react';
import Nav from '@/components/Nav';

export default function SmokinGrill() {
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
      <section className="cs-hero">
        <div className="cs-hero-left">
          <div className="cs-pill">Client project · 2023</div>
          <h1>
            Smokin Grill &mdash;<br />
            <em>Food ordering</em><br />
            app design
          </h1>
          <p className="cs-hero-desc">
            Designing a frictionless mobile ordering experience for a real local restaurant —
            from UX research through to final UI, grounded in what users actually need.
          </p>
          <div className="meta-chips">
            <span className="chip highlight">UX Research</span>
            <span className="chip highlight">UI Design</span>
            <span className="chip">Mobile App</span>
            <span className="chip">Figma</span>
            <span className="chip">Jul 2023</span>
          </div>
        </div>
        <div className="cs-hero-right">
          <div className="phone-glow"></div>
          <div className="phone-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/sg-hero.jpg" alt="Smokin Grill splash screen" />
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <div className="cs-section alt">
        <div className="inner-wide">
          <div className="ov-grid reveal">
            <div className="ov-card"><div className="ov-label">My Role</div><div className="ov-val">Solo UX &amp; UI Designer</div></div>
            <div className="ov-card"><div className="ov-label">Duration</div><div className="ov-val">6 weeks · 2023</div></div>
            <div className="ov-card"><div className="ov-label">Tools</div><div className="ov-val">Figma · FigJam</div></div>
            <div className="ov-card"><div className="ov-label">Platform</div><div className="ov-val">iOS Mobile App</div></div>
          </div>
          <div className="inner" style={{ marginTop: '3rem' }}>
            <div className="section-tag reveal">Overview</div>
            <h2 className="cs-h2 reveal">The <em>problem</em></h2>
            <p className="cs-body reveal">
              Smokin Grill is a local restaurant run by a friend. Customers were placing orders entirely by
              phone — a process plagued by miscommunication, forgotten delivery instructions, and no way to
              track where your food was. The restaurant was losing customers to competitors who had apps.
            </p>
            <p className="cs-body reveal">
              My challenge was to design a mobile ordering experience that gets a hungry user from opening
              the app to a confirmed order — with their exact preferences — in as few steps as possible,
              while addressing the core frustrations users had with the existing phone-based system.
            </p>
          </div>
        </div>
      </div>

      {/* RESEARCH */}
      <div className="cs-section">
        <div className="inner">
          <div className="section-tag reveal">Research</div>
          <h2 className="cs-h2 reveal">Understanding the <em>users</em></h2>
          <p className="cs-body reveal">
            I started by defining what I needed to learn, then conducted user interviews with regular
            Smokin Grill customers aged 20–35 in Mirpur. The goal was to understand their frustrations
            with the current ordering process and what features they valued most in food ordering apps.
          </p>
          <h3 style={{ fontSize: '0.9rem', fontWeight: 500, marginBottom: '0.5rem', marginTop: '2rem' }} className="reveal">
            Research goals
          </h3>
          <ul className="goal-list reveal">
            <li><span className="goal-num">01</span>Understand the feelings and behaviour of users placing orders from Smokin Grill today</li>
            <li><span className="goal-num">02</span>Identify their frustrations with the existing phone ordering process</li>
            <li><span className="goal-num">03</span>Understand their priorities and preferences when using food ordering apps</li>
          </ul>
          <h3 style={{ fontSize: '0.9rem', fontWeight: 500, marginBottom: '0.75rem', marginTop: '2.5rem' }} className="reveal">
            Key interview questions
          </h3>
          <p className="cs-body reveal">
            I asked participants: how they currently place orders, where they&apos;ve encountered problems,
            how they compare this experience to other restaurants, whether an app would solve their problems,
            and what features they love most in apps they already use.
          </p>
          <div style={{ background: 'var(--bg2)', border: '1px solid var(--border2)', borderLeft: '2.5px solid var(--accent)', borderRadius: '0 12px 12px 0', padding: '1.25rem 1.5rem', marginTop: '2rem' }} className="reveal">
            <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '8px' }}>Key insight</div>
            <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--muted)', lineHeight: 1.75 }}>
              &ldquo;Users didn&apos;t just want speed — they wanted{' '}
              <strong style={{ color: 'var(--text)', fontWeight: 400 }}>control and confirmation</strong>.
              The biggest pain point wasn&apos;t the wait; it was the uncertainty of not knowing if their
              order was received correctly.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* PERSONA */}
      <div className="cs-section alt">
        <div className="inner">
          <div className="section-tag reveal">User Persona</div>
          <h2 className="cs-h2 reveal">Meet <em>Aaraiz</em></h2>
          <p className="cs-body reveal">
            Based on my research interviews, I created a primary persona to keep design decisions
            grounded in real user needs throughout the project.
          </p>
          <div className="persona-card reveal">
            <div className="persona-head">
              <div className="persona-avatar" style={{ padding: 0, overflow: 'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/aaraiz-avatar.svg" alt="Aaraiz" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div className="persona-name">Aaraiz</div>
                <div className="persona-sub">Primary user persona — Smokin Grill app</div>
                <div>
                  <span className="persona-tag">23 years old</span>
                  <span className="persona-tag">BS Finance</span>
                  <span className="persona-tag">Student &amp; Freelancer</span>
                  <span className="persona-tag">Mirpur, AJK</span>
                </div>
              </div>
            </div>
            <div className="persona-body">
              <div className="p-col">
                <div className="p-col-title p-goal">Goals</div>
                <div className="p-item"><div className="dot-g"></div><span>Order food quickly without calling the restaurant</span></div>
                <div className="p-item"><div className="dot-g"></div><span>Customise orders effortlessly from a clear menu</span></div>
                <div className="p-item"><div className="dot-g"></div><span>Receive meals on time and fresh after a busy day</span></div>
              </div>
              <div className="p-col">
                <div className="p-col-title p-frust">Frustrations</div>
                <div className="p-item"><div className="dot-r"></div><span>Delivery instructions get forgotten when ordering by phone</span></div>
                <div className="p-item"><div className="dot-r"></div><span>Orders often arrive late and food goes cold</span></div>
                <div className="p-item"><div className="dot-r"></div><span>No way to track where his order is after placing it</span></div>
              </div>
            </div>
            <div className="persona-quote">
              <p>&ldquo;I don&apos;t want to call someone and explain every item when placing my order.&rdquo;</p>
              <span>— Aaraiz, research interview</span>
            </div>
          </div>
        </div>
      </div>

      {/* JOURNEY MAP */}
      <div className="cs-section">
        <div className="inner-wide">
          <div className="section-tag reveal">User Journey Map</div>
          <h2 className="cs-h2 reveal">Mapping <em>Aaraiz&apos;s</em> experience</h2>
          <p className="cs-body reveal" style={{ maxWidth: '700px' }}>
            I mapped Aaraiz&apos;s journey across five key stages to identify exactly where emotions dipped
            and where design could intervene. This map directly shaped my feature priority list.
          </p>
          <div style={{ overflowX: 'auto' }} className="reveal">
            <table className="journey-table">
              <thead>
                <tr>
                  <th>Stage</th>
                  <th>Get &amp; open app</th>
                  <th>Browse menu</th>
                  <th>Order process</th>
                  <th>Track order</th>
                  <th>Delivery</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tasks</td>
                  <td>Search, download,<br />set up account</td>
                  <td>Open app, browse<br />menu, select items</td>
                  <td>Checkout, add<br />instructions, pay</td>
                  <td>Check status,<br />get notifications</td>
                  <td>Receive order,<br />pay / review</td>
                </tr>
                <tr>
                  <td>Emotion</td>
                  <td><span className="em-good">😊 Happy</span><br /><span style={{ fontSize: '0.7rem' }}>Won&apos;t queue or call</span></td>
                  <td><span className="em-mid">😤 Annoyed</span><br /><span style={{ fontSize: '0.7rem' }}>No search bar</span></td>
                  <td><span className="em-bad">😞 Frustrated</span><br /><span style={{ fontSize: '0.7rem' }}>Can&apos;t save card</span></td>
                  <td><span className="em-bad">😠 Anxious</span><br /><span style={{ fontSize: '0.7rem' }}>No rider tracking</span></td>
                  <td><span className="em-good">😄 Relieved</span><br /><span style={{ fontSize: '0.7rem' }}>Finally eating!</span></td>
                </tr>
                <tr>
                  <td>Opportunities</td>
                  <td><span className="opp-pill">Google/Apple sign-in</span></td>
                  <td><span className="opp-pill">Search bar</span><span className="opp-pill">Category tabs</span></td>
                  <td><span className="opp-pill">One-page checkout</span><span className="opp-pill">Saved payment</span></td>
                  <td><span className="opp-pill">Real-time tracking</span><span className="opp-pill">Notifications</span></td>
                  <td><span className="opp-pill">ETA display</span><span className="opp-pill">Review system</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* COMPETITIVE AUDIT */}
      <div className="cs-section alt">
        <div className="inner-wide">
          <div className="section-tag reveal">Competitive Audit</div>
          <h2 className="cs-h2 reveal">What the <em>competition</em> gets wrong</h2>
          <p className="cs-body reveal" style={{ maxWidth: '700px' }}>
            I audited three local competitors to understand the existing landscape and find where
            Smokin Grill could win.
          </p>
          <div className="comp-grid reveal">
            <div className="comp-card">
              <div className="comp-name">Ranchers</div>
              <div className="comp-type">Direct competitor · Islamabad</div>
              <div className="comp-sec comp-good">Strengths</div>
              <div className="comp-item">Outstanding navigation, familiar patterns</div>
              <div className="comp-item">Strong, consistent brand identity</div>
              <div className="comp-sec comp-bad">Weaknesses</div>
              <div className="comp-item">No search bar, no sign-up option</div>
              <div className="comp-item">Menu limited to burgers &amp; fries only</div>
            </div>
            <div className="comp-card">
              <div className="comp-name">Nafees Restaurant</div>
              <div className="comp-type">Indirect competitor · Mirpur AJK</div>
              <div className="comp-sec comp-good">Strengths</div>
              <div className="comp-item">Fresh, homemade ingredients</div>
              <div className="comp-item">Family-friendly tone and positioning</div>
              <div className="comp-sec comp-bad">Weaknesses</div>
              <div className="comp-item">Glitchy, unreliable mobile experience</div>
              <div className="comp-item">No online payment, no accessibility</div>
            </div>
            <div className="comp-card">
              <div className="comp-name">Chicken Cottage</div>
              <div className="comp-type">Direct competitor · Mirpur AJK</div>
              <div className="comp-sec comp-good">Strengths</div>
              <div className="comp-item">Diverse halal-certified menu</div>
              <div className="comp-item">Clean layout with good food imagery</div>
              <div className="comp-sec comp-bad">Weaknesses</div>
              <div className="comp-item">Average visual design, weak typography</div>
              <div className="comp-item">Broken interactions, no accessibility</div>
            </div>
          </div>
          <div className="gaps-row reveal">
            <div className="gap-box">
              <div className="gap-title gap-t">Gaps identified</div>
              <div className="gap-item">No competitor has a smooth end-to-end mobile ordering flow</div>
              <div className="gap-item">Real-time order tracking absent across all three</div>
              <div className="gap-item">Loyalty and repeat-customer features missing everywhere</div>
              <div className="gap-item">Accessibility ignored — no screen reader support</div>
            </div>
            <div className="opp-box">
              <div className="gap-title opp-t">Opportunities for Smokin Grill</div>
              <div className="gap-item">Own the &ldquo;best mobile ordering&rdquo; position locally</div>
              <div className="gap-item">Real-time tracking as a key differentiator</div>
              <div className="gap-item">Loyalty/rewards system to drive repeat orders</div>
              <div className="gap-item">Build for accessibility from the start</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── INFORMATION ARCHITECTURE ── */}
<div className="cs-section alt">
  <div className="inner-wide">
    <div className="section-tag reveal">Information Architecture</div>
    <h2 className="cs-h2 reveal">Structuring <em>the app</em></h2>
    <p className="cs-body reveal" style={{ maxWidth: '680px' }}>
      Before drawing a single screen, I mapped every route and decision point — making sure the
      structure matched how users naturally think about ordering food. The app has two entry states:
      unauthenticated (onboarding) and authenticated (the main experience).
    </p>
    <div style={{ marginTop: '3rem' }} className="reveal">
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        {/* Auth flow */}
        <div style={{ flex: '0 0 auto', minWidth: '200px' }}>
          <div style={{ background: 'rgba(245,166,35,0.1)', border: '1px solid rgba(245,166,35,0.3)', borderRadius: '10px', padding: '0.6rem 1rem', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '0.75rem', textAlign: 'center' }}>Unauthenticated</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[{ n: '01', name: 'Welcome Screen' }, { n: '02', name: 'Sign In' }, { n: '03', name: 'Sign Up' }].map(s => (
              <div key={s.n} style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '10px', padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '0.58rem', color: 'var(--orange)', fontWeight: 600, letterSpacing: '0.1em' }}>{s.n}</span>
                <span style={{ fontSize: '0.78rem', fontWeight: 500 }}>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Arrow */}
        <div style={{ display: 'flex', alignItems: 'center', paddingTop: '2.5rem', color: 'var(--border2)', fontSize: '1.2rem', flexShrink: 0 }}>→</div>
        {/* Main app */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <div style={{ background: 'rgba(245,166,35,0.1)', border: '1px solid rgba(245,166,35,0.3)', borderRadius: '10px', padding: '0.6rem 1rem', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '0.75rem', textAlign: 'center' }}>Main App — 4 tab navigation</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
            {[
              { n: '04', name: 'Home', sub: 'Search · Categories · Most Popular' },
              { n: '05', name: 'Menu / Category', sub: 'List view · Filtered by category' },
              { n: '06', name: 'Item Detail', sub: 'Image · Size · Add to Cart' },
              { n: '07', name: 'Favourites', sub: 'Saved items for quick reorder' },
              { n: '08', name: 'Cart', sub: 'Items · Qty · Promo · Total' },
              { n: '09', name: 'Checkout', sub: 'Address · Payment · Place Order' },
              { n: '10', name: 'Order Confirmed', sub: 'Success state · Track CTA' },
              { n: '11', name: 'Profile', sub: 'Addresses · Payment · Orders' },
            ].map(s => (
              <div key={s.n} style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '10px', padding: '0.75rem 1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <span style={{ fontSize: '0.58rem', color: 'var(--orange)', fontWeight: 600, letterSpacing: '0.1em' }}>{s.n}</span>
                  <span style={{ fontSize: '0.78rem', fontWeight: 500 }}>{s.name}</span>
                </div>
                <div style={{ fontSize: '0.65rem', color: 'var(--muted)', lineHeight: 1.4 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <p className="cs-body reveal" style={{ marginTop: '2rem', maxWidth: '680px' }}>
      The auth gate is a one-time barrier — once past it, the bottom tab bar keeps every core action
      one tap away. The ordering flow (Home → Category → Item → Cart → Checkout) is linear by design
      to reduce decision fatigue.
    </p>
  </div>
</div>

{/* ── WIREFRAMES ── */}
<div className="cs-section">
  <div className="inner-wide">
    <div className="section-tag reveal">Wireframes</div>
    <h2 className="cs-h2 reveal">Low-fidelity <em>wireframes</em></h2>
    <p className="cs-body reveal" style={{ maxWidth: '680px' }}>
      I wireframed all 10 screens before opening the visual design file. Low-fidelity first meant
      I could validate the layout and flow with the client without getting distracted by colour or
      typography — and catch structural problems cheaply.
    </p>

    <div style={{ marginTop: '3rem' }} className="reveal">
      {/* Row 1: Onboarding */}
      <div style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: 12, height: 1, background: 'var(--border2)' }} />Onboarding flow
      </div>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
        {/* Welcome */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: 110, height: 190, background: '#fafafa', border: '1.5px solid #555', borderRadius: '14px', overflow: 'hidden', padding: '10px 10px 20px', display: 'flex', flexDirection: 'column', gap: '6px', position: 'relative', flexShrink: 0 }}>
            <div style={{ width: '60%', height: 60, background: '#e0e0e0', border: '1px solid #ccc', margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', flexShrink: 0 }}><div style={{ width: '80%', height: '80%', borderTop: '1px solid #aaa', borderBottom: '1px solid #aaa', position: 'relative' }}><div style={{ position: 'absolute', inset: 0, borderLeft: '1px solid #aaa', borderRight: '1px solid #aaa', background: 'linear-gradient(135deg, transparent 48%, #ccc 48%, #ccc 52%, transparent 52%), linear-gradient(225deg, transparent 48%, #ccc 48%, #ccc 52%, transparent 52%)' }} /></div></div>
            <div style={{ border: '1px solid #888', borderRadius: '20px', padding: '3px 0', textAlign: 'center', fontSize: '6px', color: '#333', fontFamily: 'sans-serif', flexShrink: 0 }}>Sign In</div>
            <div style={{ border: '1px solid #888', borderRadius: '20px', padding: '3px 0', textAlign: 'center', fontSize: '6px', color: '#333', fontFamily: 'sans-serif', flexShrink: 0 }}>Sign Up</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', margin: '2px 0', flexShrink: 0 }}><div style={{ flex: 1, height: 1, background: '#ccc' }} /><span style={{ fontSize: '5px', color: '#999', fontFamily: 'sans-serif' }}>Or</span><div style={{ flex: 1, height: 1, background: '#ccc' }} /></div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexShrink: 0 }}><div style={{ width: 14, height: 14, border: '1px solid #ccc', borderRadius: '50%' }} /><div style={{ width: 14, height: 14, border: '1px solid #ccc', borderRadius: '50%' }} /></div>
          </div>
          <span style={{ fontSize: '0.62rem', color: 'var(--muted)', textAlign: 'center', maxWidth: 110 }}>Welcome</span>
        </div>
        {/* Sign In */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: 110, height: 190, background: '#fafafa', border: '1.5px solid #555', borderRadius: '14px', overflow: 'hidden', padding: '10px 10px 20px', display: 'flex', flexDirection: 'column', gap: '5px', position: 'relative', flexShrink: 0 }}>
            <div style={{ fontSize: '7px', color: '#333', fontFamily: 'sans-serif', fontWeight: 700, margin: '4px 0 6px', flexShrink: 0 }}>Sign In</div>
            <div style={{ border: '1px solid #ccc', borderRadius: '20px', padding: '3px 6px', fontSize: '6px', color: '#aaa', fontFamily: 'sans-serif', flexShrink: 0 }}>Username</div>
            <div style={{ border: '1px solid #ccc', borderRadius: '20px', padding: '3px 6px', fontSize: '6px', color: '#aaa', fontFamily: 'sans-serif', flexShrink: 0 }}>Password</div>
            <div style={{ background: '#555', borderRadius: '20px', padding: '3px 0', textAlign: 'center', fontSize: '6px', color: '#fff', fontFamily: 'sans-serif', flexShrink: 0 }}>Sign In</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', margin: '2px 0', flexShrink: 0 }}><div style={{ flex: 1, height: 1, background: '#ccc' }} /><span style={{ fontSize: '5px', color: '#999', fontFamily: 'sans-serif' }}>Or</span><div style={{ flex: 1, height: 1, background: '#ccc' }} /></div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexShrink: 0 }}><div style={{ width: 14, height: 14, border: '1px solid #ccc', borderRadius: '50%' }} /><div style={{ width: 14, height: 14, border: '1px solid #ccc', borderRadius: '50%' }} /></div>
          </div>
          <span style={{ fontSize: '0.62rem', color: 'var(--muted)', textAlign: 'center', maxWidth: 110 }}>Sign In</span>
        </div>
        {/* Sign Up */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: 110, height: 190, background: '#fafafa', border: '1.5px solid #555', borderRadius: '14px', overflow: 'hidden', padding: '10px 10px 20px', display: 'flex', flexDirection: 'column', gap: '5px', position: 'relative', flexShrink: 0 }}>
            <div style={{ fontSize: '7px', color: '#333', fontFamily: 'sans-serif', fontWeight: 700, margin: '4px 0 4px', flexShrink: 0 }}>Sign Up</div>
            <div style={{ border: '1px solid #ccc', borderRadius: '20px', padding: '3px 6px', fontSize: '6px', color: '#aaa', fontFamily: 'sans-serif', flexShrink: 0 }}>Enter Username</div>
            <div style={{ border: '1px solid #ccc', borderRadius: '20px', padding: '3px 6px', fontSize: '6px', color: '#aaa', fontFamily: 'sans-serif', flexShrink: 0 }}>Enter Password</div>
            <div style={{ border: '1px solid #ccc', borderRadius: '20px', padding: '3px 6px', fontSize: '6px', color: '#aaa', fontFamily: 'sans-serif', flexShrink: 0 }}>Re-Enter Password</div>
            <div style={{ background: '#555', borderRadius: '20px', padding: '3px 0', textAlign: 'center', fontSize: '6px', color: '#fff', fontFamily: 'sans-serif', flexShrink: 0 }}>Sign Up</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', margin: '1px 0', flexShrink: 0 }}><div style={{ flex: 1, height: 1, background: '#ccc' }} /><span style={{ fontSize: '5px', color: '#999', fontFamily: 'sans-serif' }}>Or</span><div style={{ flex: 1, height: 1, background: '#ccc' }} /></div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexShrink: 0 }}><div style={{ width: 12, height: 12, border: '1px solid #ccc', borderRadius: '50%' }} /><div style={{ width: 12, height: 12, border: '1px solid #ccc', borderRadius: '50%' }} /></div>
          </div>
          <span style={{ fontSize: '0.62rem', color: 'var(--muted)', textAlign: 'center', maxWidth: 110 }}>Sign Up</span>
        </div>
      </div>

      {/* Row 2: Browsing */}
      <div style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: 12, height: 1, background: 'var(--border2)' }} />Browsing &amp; ordering flow
      </div>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
        {/* Home */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: 110, height: 190, background: '#fafafa', border: '1.5px solid #555', borderRadius: '14px', overflow: 'hidden', padding: '8px 8px 0', display: 'flex', flexDirection: 'column', gap: '4px', position: 'relative', flexShrink: 0 }}>
            <div style={{ fontSize: '7px', color: '#333', fontFamily: 'sans-serif', fontWeight: 600, flexShrink: 0 }}>Hi (User)!</div>
            <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '2px 6px', fontSize: '5px', color: '#aaa', fontFamily: 'sans-serif', flexShrink: 0 }}>🔍 Search</div>
            <div style={{ fontSize: '5.5px', color: '#555', fontFamily: 'sans-serif', fontWeight: 600, flexShrink: 0 }}>Categories</div>
            <div style={{ display: 'flex', gap: '3px', flexShrink: 0 }}>{[0,1,2,3].map(i => <div key={i} style={{ width: 20, height: 20, background: '#e0e0e0', border: '1px solid #ccc', borderRadius: '4px' }} />)}</div>
            <div style={{ fontSize: '5.5px', color: '#555', fontFamily: 'sans-serif', fontWeight: 600, flexShrink: 0 }}>Most Popular</div>
            {[0,1].map(i => <div key={i} style={{ display: 'flex', gap: '4px', flexShrink: 0 }}><div style={{ width: 18, height: 18, background: '#e0e0e0', border: '1px solid #ccc', borderRadius: '2px', flexShrink: 0 }} /><div style={{ flex: 1 }}><div style={{ height: 3, background: '#d4d4d4', borderRadius: 1, marginBottom: 2 }} /><div style={{ height: 2, background: '#e8e8e8', borderRadius: 1, width: '70%' }} /></div></div>)}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 18, background: '#fff', borderTop: '0.5px solid #ddd', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              {['▲','☆','⊡','○'].map((ic, i) => <span key={i} style={{ fontSize: '6px', color: i===0?'#333':'#bbb' }}>{ic}</span>)}
            </div>
          </div>
          <span style={{ fontSize: '0.62rem', color: 'var(--muted)', textAlign: 'center', maxWidth: 110 }}>Home</span>
        </div>
        {/* Menu */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: 110, height: 190, background: '#fafafa', border: '1.5px solid #555', borderRadius: '14px', overflow: 'hidden', padding: '8px 8px 0', display: 'flex', flexDirection: 'column', gap: '4px', position: 'relative', flexShrink: 0 }}>
            <div style={{ fontSize: '7px', color: '#333', fontFamily: 'sans-serif', fontWeight: 600, flexShrink: 0 }}>Pizza</div>
            {[0,1,2,3].map(i => <div key={i} style={{ display: 'flex', gap: '4px', padding: '2px 0', borderBottom: '0.5px solid #eee', flexShrink: 0 }}><div style={{ width: 22, height: 22, background: '#e0e0e0', border: '1px solid #ccc', borderRadius: '2px', flexShrink: 0 }} /><div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2px', justifyContent: 'center' }}><div style={{ height: 3, background: '#d4d4d4', borderRadius: 1 }} /><div style={{ height: 2, background: '#e8e8e8', borderRadius: 1, width: '70%' }} /></div></div>)}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 18, background: '#fff', borderTop: '0.5px solid #ddd', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              {['▲','☆','⊡','○'].map((ic, i) => <span key={i} style={{ fontSize: '6px', color: i===0?'#333':'#bbb' }}>{ic}</span>)}
            </div>
          </div>
          <span style={{ fontSize: '0.62rem', color: 'var(--muted)', textAlign: 'center', maxWidth: 110 }}>Menu</span>
        </div>
        {/* Item */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: 110, height: 190, background: '#fafafa', border: '1.5px solid #555', borderRadius: '14px', overflow: 'hidden', padding: '8px 8px 0', display: 'flex', flexDirection: 'column', gap: '4px', position: 'relative', flexShrink: 0 }}>
            <div style={{ width: '100%', height: 55, background: '#e0e0e0', border: '1px solid #ccc', borderRadius: '4px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ width: '70%', height: '70%', position: 'relative' }}><div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, transparent 48%, #ccc 48%, #ccc 52%, transparent 52%), linear-gradient(225deg, transparent 48%, #ccc 48%, #ccc 52%, transparent 52%)', border: '0.5px solid #bbb' }} /></div></div>
            <div style={{ height: 3, background: '#d4d4d4', borderRadius: 1, width: '80%', flexShrink: 0 }} />
            <div style={{ height: 2, background: '#e8e8e8', borderRadius: 1, flexShrink: 0 }} />
            <div style={{ height: 2, background: '#e8e8e8', borderRadius: 1, width: '90%', flexShrink: 0 }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', flexShrink: 0 }}>
              <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}><div style={{ width: 10, height: 10, border: '1px solid #999', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '6px', color: '#555' }}>−</div><span style={{ fontSize: '6px', fontFamily: 'sans-serif', color: '#333' }}>1</span><div style={{ width: 10, height: 10, border: '1px solid #999', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '6px', color: '#555' }}>+</div></div>
              <div style={{ fontSize: '5.5px', color: '#555', fontFamily: 'sans-serif' }}>$$$</div>
            </div>
            <div style={{ background: '#555', borderRadius: '20px', padding: '3px 0', textAlign: 'center', fontSize: '5.5px', color: '#fff', fontFamily: 'sans-serif', flexShrink: 0 }}>Add to Cart</div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 18, background: '#fff', borderTop: '0.5px solid #ddd', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              {['▲','☆','⊡','○'].map((ic, i) => <span key={i} style={{ fontSize: '6px', color: i===0?'#333':'#bbb' }}>{ic}</span>)}
            </div>
          </div>
          <span style={{ fontSize: '0.62rem', color: 'var(--muted)', textAlign: 'center', maxWidth: 110 }}>Item Detail</span>
        </div>
        {/* Favourites */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: 110, height: 190, background: '#fafafa', border: '1.5px solid #555', borderRadius: '14px', overflow: 'hidden', padding: '8px 8px 0', display: 'flex', flexDirection: 'column', gap: '4px', position: 'relative', flexShrink: 0 }}>
            <div style={{ fontSize: '7px', color: '#333', fontFamily: 'sans-serif', fontWeight: 600, textAlign: 'center', flexShrink: 0 }}>My Favourite</div>
            {[0,1,2].map(i => <div key={i} style={{ display: 'flex', gap: '4px', padding: '3px 0', borderBottom: '0.5px solid #eee', flexShrink: 0 }}><div style={{ width: 22, height: 22, background: '#e0e0e0', border: '1px solid #ccc', borderRadius: '2px', flexShrink: 0 }} /><div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2px', justifyContent: 'center' }}><div style={{ height: 3, background: '#d4d4d4', borderRadius: 1 }} /><div style={{ height: 2, background: '#e8e8e8', borderRadius: 1, width: '60%' }} /></div></div>)}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 18, background: '#fff', borderTop: '0.5px solid #ddd', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              {['▲','★','⊡','○'].map((ic, i) => <span key={i} style={{ fontSize: '6px', color: i===1?'#333':'#bbb', fontWeight: i===1?'bold':'normal' }}>{ic}</span>)}
            </div>
          </div>
          <span style={{ fontSize: '0.62rem', color: 'var(--muted)', textAlign: 'center', maxWidth: 110 }}>Favourites</span>
        </div>
      </div>

      {/* Row 3: Checkout */}
      <div style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: 12, height: 1, background: 'var(--border2)' }} />Checkout &amp; confirmation flow
      </div>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {/* Cart */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: 110, height: 190, background: '#fafafa', border: '1.5px solid #555', borderRadius: '14px', overflow: 'hidden', padding: '8px 8px 0', display: 'flex', flexDirection: 'column', gap: '4px', position: 'relative', flexShrink: 0 }}>
            <div style={{ fontSize: '7px', color: '#333', fontFamily: 'sans-serif', fontWeight: 600, textAlign: 'center', flexShrink: 0 }}>My Cart</div>
            {[0,1].map(i => <div key={i} style={{ display: 'flex', gap: '3px', padding: '3px 0', borderBottom: '0.5px solid #eee', flexShrink: 0, alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginRight: 1 }}><div style={{ width: 8, height: 8, border: '0.5px solid #999', borderRadius: '1px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5px', color: '#555' }}>+</div><span style={{ fontSize: '5px', color: '#333', fontFamily: 'sans-serif', textAlign: 'center' }}>1</span><div style={{ width: 8, height: 8, border: '0.5px solid #999', borderRadius: '1px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5px', color: '#555' }}>-</div></div>
              <div style={{ width: 18, height: 18, background: '#e0e0e0', border: '1px solid #ccc', borderRadius: '2px', flexShrink: 0 }} />
              <div style={{ flex: 1 }}><div style={{ height: 3, background: '#d4d4d4', borderRadius: 1, marginBottom: 2 }} /><div style={{ height: 2, background: '#e8e8e8', borderRadius: 1, width: '70%' }} /></div>
            </div>)}
            <div style={{ marginTop: 'auto', flexShrink: 0 }}>
              <div style={{ background: '#555', borderRadius: '20px', padding: '3px 0', textAlign: 'center', fontSize: '5.5px', color: '#fff', fontFamily: 'sans-serif' }}>Proceed to Checkout</div>
            </div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 18, background: '#fff', borderTop: '0.5px solid #ddd', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              {['▲','☆','⊡','○'].map((ic, i) => <span key={i} style={{ fontSize: '6px', color: i===2?'#333':'#bbb', fontWeight: i===2?'bold':'normal' }}>{ic}</span>)}
            </div>
          </div>
          <span style={{ fontSize: '0.62rem', color: 'var(--muted)', textAlign: 'center', maxWidth: 110 }}>Cart</span>
        </div>
        {/* Checkout */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: 110, height: 190, background: '#fafafa', border: '1.5px solid #555', borderRadius: '14px', overflow: 'hidden', padding: '8px 8px 0', display: 'flex', flexDirection: 'column', gap: '4px', position: 'relative', flexShrink: 0 }}>
            <div style={{ fontSize: '7px', color: '#333', fontFamily: 'sans-serif', fontWeight: 600, textAlign: 'center', flexShrink: 0 }}>Checkout</div>
            <div style={{ fontSize: '5.5px', color: '#555', fontFamily: 'sans-serif', fontWeight: 600, flexShrink: 0 }}>Address</div>
            <div style={{ border: '1px solid #ccc', borderRadius: '6px', padding: '4px 5px', flexShrink: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{ width: 10, height: 10, border: '1px solid #555', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ width: 5, height: 5, background: '#555', borderRadius: '50%' }} /></div><div style={{ flex: 1, height: 2, background: '#d4d4d4', borderRadius: 1 }} /></div>
            </div>
            <div style={{ border: '1px solid #ccc', borderRadius: '6px', padding: '4px 5px', flexShrink: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{ width: 10, height: 10, border: '1px solid #ccc', borderRadius: '50%' }} /><div style={{ flex: 1, height: 2, background: '#d4d4d4', borderRadius: 1 }} /></div>
            </div>
            <div style={{ fontSize: '5.5px', color: '#555', fontFamily: 'sans-serif', fontWeight: 600, flexShrink: 0 }}>Payment</div>
            <div style={{ border: '1px solid #ccc', borderRadius: '6px', padding: '4px 5px', flexShrink: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{ width: 10, height: 10, border: '1px solid #555', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ width: 5, height: 5, background: '#555', borderRadius: '50%' }} /></div><div style={{ flex: 1, height: 2, background: '#d4d4d4', borderRadius: 1 }} /></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', flexShrink: 0 }}>
              <div><div style={{ fontSize: '5px', color: '#888', fontFamily: 'sans-serif' }}>Total</div><div style={{ fontSize: '6px', color: '#333', fontFamily: 'sans-serif', fontWeight: 700 }}>$$$</div></div>
              <div style={{ background: '#555', borderRadius: '10px', padding: '3px 7px', fontSize: '5.5px', color: '#fff', fontFamily: 'sans-serif' }}>Place Order</div>
            </div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 18, background: '#fff', borderTop: '0.5px solid #ddd', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              {['▲','☆','⊡','○'].map((ic, i) => <span key={i} style={{ fontSize: '6px', color: '#bbb' }}>{ic}</span>)}
            </div>
          </div>
          <span style={{ fontSize: '0.62rem', color: 'var(--muted)', textAlign: 'center', maxWidth: 110 }}>Checkout</span>
        </div>
        {/* Order placed */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: 110, height: 190, background: '#fafafa', border: '1.5px solid #555', borderRadius: '14px', overflow: 'hidden', padding: '8px 8px 0', display: 'flex', flexDirection: 'column', gap: '6px', position: 'relative', flexShrink: 0, alignItems: 'center' }}>
            <div style={{ width: '70%', height: 65, background: '#e0e0e0', border: '1px solid #ccc', borderRadius: '4px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ width: '80%', height: '80%', position: 'relative' }}><div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, transparent 48%, #ccc 48%, #ccc 52%, transparent 52%), linear-gradient(225deg, transparent 48%, #ccc 48%, #ccc 52%, transparent 52%)', border: '0.5px solid #bbb' }} /></div></div>
            <div style={{ fontSize: '6.5px', color: '#333', fontFamily: 'sans-serif', fontWeight: 600, textAlign: 'center', lineHeight: 1.4, flexShrink: 0 }}>Your order<br />is placed!</div>
            <div style={{ height: 2, background: '#e8e8e8', borderRadius: 1, width: '80%', flexShrink: 0 }} />
            <div style={{ height: 2, background: '#e8e8e8', borderRadius: 1, width: '60%', flexShrink: 0 }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 18, background: '#fff', borderTop: '0.5px solid #ddd', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              {['▲','☆','⊡','○'].map((ic, i) => <span key={i} style={{ fontSize: '6px', color: '#bbb' }}>{ic}</span>)}
            </div>
          </div>
          <span style={{ fontSize: '0.62rem', color: 'var(--muted)', textAlign: 'center', maxWidth: 110 }}>Order Placed</span>
        </div>
      </div>
    </div>

    <div style={{ background: 'var(--bg2)', border: '1px solid var(--border2)', borderLeft: '2.5px solid var(--orange)', borderRadius: '0 12px 12px 0', padding: '1.25rem 1.5rem', marginTop: '2.5rem' }} className="reveal">
      <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--orange)', marginBottom: '8px' }}>Why wireframe first</div>
      <p style={{ fontSize: '0.88rem', fontStyle: 'italic', color: 'var(--muted)', lineHeight: 1.75, margin: 0 }}>
        &ldquo;Wireframing before visual design let me test the structure with the client without either of us getting
        distracted by colour or imagery. Two structural changes — moving search above categories and adding a
        confirmation state — were caught here, not in the final UI.&rdquo;
      </p>
    </div>
  </div>
</div>

      {/* DESIGN DECISIONS */}
      <div className="cs-section">
        <div className="inner">
          <div className="section-tag reveal">Design Decisions</div>
          <h2 className="cs-h2 reveal">Principles that <em>guided</em> the design</h2>
          <p className="cs-body reveal">
            Every decision was traced back to a specific research finding. Here are the five principles
            I committed to before touching Figma.
          </p>
          <div className="decision-list reveal">
            <div className="decision">
              <div className="d-num">1</div>
              <div>
                <div className="d-title">Shallow navigation — 2 taps maximum</div>
                <div className="d-desc">Research showed users dropped off when menus felt deep. Category tabs at the top with a persistent search bar keep any item reachable within two taps from home.</div>
              </div>
            </div>
            <div className="decision">
              <div className="d-num">2</div>
              <div>
                <div className="d-title">Full item image before customisation</div>
                <div className="d-desc">The item detail screen leads with a large hero image on the brand&apos;s amber colour, building confidence before the user commits to adding to cart.</div>
              </div>
            </div>
            <div className="decision">
              <div className="d-num">3</div>
              <div>
                <div className="d-title">One-page checkout with saved payment</div>
                <div className="d-desc">Delivery address, promo code, payment method, and order total consolidated onto a single screen. Saved card support eliminates the biggest friction point at checkout.</div>
              </div>
            </div>
            <div className="decision">
              <div className="d-num">4</div>
              <div>
                <div className="d-title">Real-time tracking with stage notifications</div>
                <div className="d-desc">A stage progress indicator (Received → Preparing → Out for Delivery → Delivered) with push notifications at each step eliminates post-order anxiety.</div>
              </div>
            </div>
            <div className="decision">
              <div className="d-num">5</div>
              <div>
                <div className="d-title">Favourites tab for repeat ordering</div>
                <div className="d-desc">Zero competitors offered this. A Favourites tab lets frequent users reorder in seconds without browsing the full menu again — directly addressing Aaraiz&apos;s daily ordering habit.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FINAL SCREENS */}
      <div className="cs-section alt">
        <div className="inner-wide">
          <div className="section-tag reveal">Final Design</div>
          <h2 className="cs-h2 reveal">The <em>screens</em></h2>
          <p className="cs-body reveal" style={{ maxWidth: '700px' }}>
            19 screens designed end-to-end in Figma — from splash screen through to order confirmation.
            Here are the key flows.
          </p>

          <div className="screens-flow reveal">
            <div className="flow-label">Onboarding flow</div>
            <div className="screens-row">
              <div className="screen-item">
                <div className="phone-sm">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/sg-splash.jpg" alt="Splash" /></div>
                <div className="screen-caption">Splash — logo, Sign In &amp; Sign Up with social login</div>
              </div>
              <div className="screen-item">
                <div className="phone-sm">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/sg-signin.jpg" alt="Sign In" /></div>
                <div className="screen-caption">Sign In — username + password, social options</div>
              </div>
              <div className="screen-item">
                <div className="phone-sm">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/sg-signup.jpg" alt="Sign Up" /></div>
                <div className="screen-caption">Sign Up — username, password, confirm</div>
              </div>
            </div>
          </div>

          <div className="screens-flow reveal">
            <div className="flow-label">Browsing &amp; ordering flow</div>
            <div className="screens-row">
              <div className="screen-item">
                <div className="phone-sm">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/sg-home.jpg" alt="Home" /></div>
                <div className="screen-caption">Home — greeting, search, categories, most popular</div>
              </div>
              <div className="screen-item">
                <div className="phone-sm">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/sg-pizza.jpg" alt="Pizza" /></div>
                <div className="screen-caption">Category — Pizza with full menu listing</div>
              </div>
              <div className="screen-item">
                <div className="phone-sm">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/sg-burgers.jpg" alt="Burgers" /></div>
                <div className="screen-caption">Category — Burgers with full menu listing</div>
              </div>
              <div className="screen-item">
                <div className="phone-sm">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/sg-item.jpg" alt="Item detail" /></div>
                <div className="screen-caption">Item detail — image, description, sizes, Add to Cart</div>
              </div>
            </div>
          </div>

          <div className="screens-flow reveal">
            <div className="flow-label">Checkout &amp; confirmation flow</div>
            <div className="screens-row">
              <div className="screen-item">
                <div className="phone-sm">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/sg-cart.jpg" alt="Cart" /></div>
                <div className="screen-caption">Cart — items, quantity, promo code, order total</div>
              </div>
              <div className="screen-item">
                <div className="phone-sm">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/sg-checkout.jpg" alt="Checkout" /></div>
                <div className="screen-caption">Checkout — saved addresses, payment, Place Order</div>
              </div>
              <div className="screen-item">
                <div className="phone-sm">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/sg-confirmed.jpg" alt="Confirmed" /></div>
                <div className="screen-caption">Order confirmed — celebration, track order CTA</div>
              </div>
            </div>
          </div>

          <div className="screens-flow reveal">
            <div className="flow-label">Additional screens</div>
            <div className="screens-row">
              <div className="screen-item">
                <div className="phone-sm">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/sg-favourites.jpg" alt="Favourites" /></div>
                <div className="screen-caption">Favourites — saved items for quick repeat ordering</div>
              </div>
              <div className="screen-item">
                <div className="phone-sm">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/sg-profile.jpg" alt="Profile" /></div>
                <div className="screen-caption">Profile — payment, addresses, settings, orders</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* REFLECTION */}
      <div className="cs-section">
        <div className="inner">
          <div className="section-tag reveal">Reflection</div>
          <h2 className="cs-h2 reveal">What I <em>learned</em></h2>
          <div className="reflect-grid reveal">
            <div className="reflect-card">
              <div className="reflect-icon">✓</div>
              <div className="reflect-title">Research shapes everything</div>
              <div className="reflect-text">The user journey map alone told me exactly which three features to prioritise: search, saved payment, and order tracking. Without research, I would have spent time on the wrong things.</div>
            </div>
            <div className="reflect-card">
              <div className="reflect-icon">✓</div>
              <div className="reflect-title">Real clients change how you design</div>
              <div className="reflect-text">Working for a real friend&apos;s restaurant pushed me beyond aesthetics. Every decision had a real person on the other end — that accountability made me a more intentional designer.</div>
            </div>
            <div className="reflect-card">
              <div className="reflect-icon">↻</div>
              <div className="reflect-title">What I&apos;d do differently</div>
              <div className="reflect-text">I&apos;d run usability testing on the item customisation screen — the most complex step and most likely to cause drop-off. I&apos;d also build for accessibility from day one, not as an afterthought.</div>
            </div>
            <div className="reflect-card">
              <div className="reflect-icon">→</div>
              <div className="reflect-title">Next steps</div>
              <div className="reflect-text">A loyalty and rewards system was an opportunity no competitor had taken. If this project continued, that would be the next feature — it could meaningfully increase repeat orders.</div>
            </div>
          </div>
        </div>
      </div>

      {/* NEXT PROJECT */}
      <div className="next-cta">
        <div>
          <div className="next-label">Next project</div>
          <div className="next-title">Flaura — Brand identity redesign</div>
        </div>
        <a href="/flaura" className="btn-primary">View case study →</a>
      </div>

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
