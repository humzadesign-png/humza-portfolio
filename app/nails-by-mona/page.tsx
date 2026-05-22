'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Nav from '@/components/Nav';

export default function NailsByMona() {
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

  const mauve = '#bfa4ce';
  const mauveDark = '#6d567b';
  const mauveDeep = '#9b7fb4';
  const mauveGlow = 'rgba(191,164,206,0.15)';
  const gold = '#d4a948';
  const goldGlow = 'rgba(212,169,72,0.12)';

  // ── persona cards data ─────────────────────────────────────
  const personas = [
    {
      name: 'Sana',
      avatar: '/nbm-persona-sana.svg',
      age: '28 · Lahore',
      role: 'Marketing manager at a tech startup',
      trigger: 'Acrylic damage',
      quote: '"I love acrylics but my real nails are destroyed. I want something that looks salon-finished without the 3-hour trip."',
      job: 'Volume buyer — reorders every 4–6 weeks.',
      color: '#2a1f35',
    },
    {
      name: 'Hira',
      avatar: '/nbm-persona-hira.svg',
      age: '26 · Karachi',
      role: 'Bride-to-be, wedding in 6 weeks',
      trigger: 'Wedding date',
      quote: '"I need three coordinated looks — Mehendi, Baraat, Valima — that I can trust completely."',
      job: 'Bridal buyer — single high-stakes purchase, high emotional investment.',
      color: '#1f2535',
    },
    {
      name: 'Ayesha',
      avatar: '/nbm-persona-ayesha.svg',
      age: '31 · Rawalpindi',
      role: 'Teacher, practicing Muslim',
      trigger: 'Wudu conflict',
      quote: '"I can\'t wear regular polish — water can\'t reach my nail bed during ablution. Press-ons solve this exactly."',
      job: 'Values buyer — buys on fit with religious practice.',
      color: '#1f2e25',
    },
  ];

  // ── insights ───────────────────────────────────────────────
  const insights = [
    {
      n: '01',
      title: '"Custom" is meaningless until you show the measurement.',
      body: 'Every competitor uses the word "custom." None demonstrate it. The differentiator isn\'t being custom — it\'s looking custom. That\'s why we invested in a guided live-camera capture with SVG overlays: 2 close-up photos (fingers + thumb), a green/red alignment heuristic, and macro framing that reads each nail width directly off a coin reference.',
    },
    {
      n: '02',
      title: 'The wudu pain point is invisible to non-Muslim designers.',
      body: 'Practicing Muslim women cannot wear traditional polish — water can\'t reach the nail bed during ablution. Press-ons solve this exactly: they remove cleanly. Mona started this business for that reason. Surfacing it as the 4th brand pillar opens a content moat with zero competition on the exact-match search query.',
    },
    {
      n: '03',
      title: 'The brand is "Nails by Mona," not Mona personally.',
      body: 'A face on the website would invite DM spam, conflate the brand with the person, and cap scaling. The discipline is hand-only photography and brand-addressed WhatsApp pre-fills ("Hello Nails by Mona…"). A small detail that compounds — every customer interaction reinforces a brand, not a phone number.',
    },
    {
      n: '04',
      title: 'Bridal time-pressure is the most under-served emotional state.',
      body: 'A bride 4 weeks before her mehendi is a fundamentally different user from a working professional browsing on her commute. The Bridal Trio gets its own page, distinct champagne-and-gold photography style, a 4-week lead-time rule surfaced in the hero, and a WhatsApp handoff for orders placed too close to the date.',
    },
    {
      n: '05',
      title: 'Pakistan-mobile is the design constraint, not a responsive afterthought.',
      body: 'A 3-year-old Android on patchy 4G, in landscape, in a salon waiting room. Lighthouse mobile ≥ 90 isn\'t a polish goal — it\'s a market-fit requirement. Every flow has a graceful degradation path. The live camera itself falls back to file upload, which falls back to "send via WhatsApp."',
    },
  ];

  // ── final-design pages grid ────────────────────────────────
  // Slim list — the 6 pages that earn their place in the case study.
  // Blog-post, contact, and order-form were dropped (low signal vs page weight).
  const pages = [
    { src: '/nbm-page-shop.jpg',       label: 'Shop',           h: 3000, sub: 'Filter-by-default, tier badges, trust signals on every card.' },
    { src: '/nbm-page-product.jpg',    label: 'Product detail', h: 3400, sub: 'Bridal Trio Classic — bag CTA, FAQ schema, related sets.' },
    { src: '/nbm-page-bridal.jpg',     label: 'Bridal',         h: 3400, sub: 'Champagne hero. "Order 4 weeks before mehendi" in the H1 paragraph.' },
    { src: '/nbm-page-size-guide.jpg', label: 'Size guide',     h: 3400, sub: 'Real photos replaced placeholders. Good vs Avoid gallery with corner pills.' },
    { src: '/nbm-page-about.jpg',      label: 'About',          h: 3400, sub: 'Hand-only hero. Founder named in copy; never shown in photography.' },
    { src: '/nbm-page-blog.jpg',       label: 'Journal',        h: 2600, sub: '5 cornerstone posts at launch — wudu post is the priority SEO bet.' },
  ];

  // ── 6-step process timeline ────────────────────────────────
  const processSteps = [
    {
      n: '01', when: 'Week 1', title: 'Plan in Claude Code',
      body: 'Started not with a Figma file but a 90-minute planning session with Claude Code as a thinking partner. Output: a 34-section CLAUDE.md project bible covering business context, fixed decisions, brand rules, scope cuts, and explicit non-goals. That document remained the source of truth across every session that followed.',
    },
    {
      n: '02', when: 'Week 1', title: 'Review & revise the plan',
      body: 'Three follow-up sessions stress-tested the plan: competitor research, payment-method trade-offs, photography rules, and what to deliberately NOT build. Locked the Fixed Decisions table — Laravel + Filament, manual payments at MVP (no SafePay until Phase 6), hand-only photography, no AI image generation, no founder face anywhere.',
    },
    {
      n: '03', when: 'Week 2', title: 'UX research & strategy',
      body: '3 personas (Sana, Hira, Ayesha), 3 journey maps, a 6-stage service blueprint, IA card-sort plan, pain-points → opportunities matrix, and a UX principles deck. All documented in /docs/ux/ (13 markdown files) before any UI was drawn. Real research, written down, reviewable.',
    },
    {
      n: '04', when: 'Week 2', title: 'Wireframes in Claude Design',
      body: 'Used Claude Design for low-fi sketchy wireframes with annotations — the kind of margin notes that get lost in Figma comments. 18 artboards on one infinite canvas, including 2 hero variants for every key page so layout decisions could be compared side-by-side.',
    },
    {
      n: '05', when: 'Weeks 3–4', title: 'Frontend build',
      body: 'Laravel 11 + Blade + Tailwind v4 + jQuery — server-rendered, no React. 13 public pages live-camera state machine in vanilla JS. Six transactional email templates. Lighthouse mobile ≥ 90 on every page. Bag drawer + localStorage + multi-step checkout with separate URLs for back-button safety on Pakistan-mobile 4G.',
    },
    {
      n: '06', when: 'Weeks 5–6', title: 'Backend admin, SEO & ship',
      body: 'Filament v4 admin panel with 11 resources (orders, products, customers, blog, FAQs, settings, finance, expenses, etc.). 5 cornerstone blog posts seeded. Sitemap + RSS + Schema.org JSON-LD across every page. Deployed to nailsbymona.pk on DigitalOcean with Certbot SSL and a supervised queue worker.',
    },
  ];

  // ── admin captures ─────────────────────────────────────────
  const adminShots = [
    { src: '/nbm-admin-dashboard.jpg', label: 'Dashboard',  desc: 'Stat cards + recent orders + "Orders needing attention" — designed for Mona\'s morning glance.', h: 2200 },
    { src: '/nbm-admin-orders.jpg',    label: 'Orders',     desc: 'SLA badges (green/amber/red by age). One-tap confirm, WhatsApp row action, bulk confirm for the overnight stack.', h: 2000 },
    { src: '/nbm-admin-products.jpg',  label: 'Products',   desc: '9 active sets across 5 tiers. Slug, price, stock status, active toggle — all editable inline.', h: 1800 },
    { src: '/nbm-admin-customers.jpg', label: 'Customers',  desc: 'Saved sizing on file. Pakistani phone normalisation: +92 / 92 / 0 all resolve to the same customer.', h: 1600 },
    { src: '/nbm-admin-blog.jpg',      label: 'Blog editor', desc: 'Rich-text editor, category, target keyword, view counter, related-products pivot, scheduled publish.', h: 1600 },
    { src: '/nbm-admin-settings.jpg',  label: 'Settings',   desc: 'Single source of truth: WhatsApp number, payment account details, lead times, deposit %, reorder discount %.', h: 2600 },
  ];

  // ── design-system palette tokens ───────────────────────────
  const palette = [
    { hex: '#F4EFE8', name: 'bone',   role: 'Page bg' },
    { hex: '#FBF8F2', name: 'paper',  role: 'Cards' },
    { hex: '#EAE3D9', name: 'shell',  role: 'Alt sections' },
    { hex: '#BFA4CE', name: 'lavender', role: 'Accent · CTAs', light: true },
    { hex: '#9B7FB4', name: 'lavender-dark', role: 'Hover · pressed', light: true },
    { hex: '#EDE2C8', name: 'bridal bg', role: 'Bridal hero' },
    { hex: '#D4A948', name: 'gold', role: 'Bridal accent', light: true },
    { hex: '#2C1F2E', name: 'aubergine', role: 'Footer', light: true },
    { hex: '#1C1727', name: 'ink', role: 'Headings · body', light: true },
    { hex: '#4A4158', name: 'graphite', role: 'Body text', light: true },
  ];

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>
      <Nav variant="case-study" />

      {/* ── 1. HERO ─────────────────────────────────────── */}
      <section className="cs-hero" style={{ background: 'linear-gradient(135deg, #120d0a 0%, #1c1020 60%, #0e0a14 100%)' }}>
        <div className="cs-hero-left">
          <div className="cs-pill" style={{ borderColor: 'rgba(191,164,206,0.4)', color: mauve }}>
            Client work · UX Research, UI Design &amp; Full-Stack Build · 2026
          </div>
          <h1>
            Nails by Mona &mdash;<br />
            <em>From Instagram DMs</em><br />
            to a full digital service
          </h1>
          <p className="cs-hero-desc">
            End-to-end UX and product build for a one-woman press-on nail studio in Mirpur, Pakistan
            — research, wireframes, design system, live storefront, and a Filament admin panel that
            Mona runs herself.
          </p>
          <div className="meta-chips">
            <span className="chip highlight">UX Research</span>
            <span className="chip highlight">UI Design</span>
            <span className="chip highlight">Full-Stack Build</span>
            <span className="chip">Laravel</span>
            <span className="chip">Filament</span>
            <span className="chip">Tailwind CSS</span>
            <span className="chip">Claude Code</span>
            <span className="chip">2026</span>
          </div>
          <a
            href="https://nailsbymona.pk"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              marginTop: '1.5rem', fontSize: '0.82rem', color: mauve,
              textDecoration: 'none', borderBottom: `1px solid ${mauveDark}`,
              paddingBottom: '2px', transition: 'color 0.2s',
            }}
          >
            Visit nailsbymona.pk ↗
          </a>
        </div>
        <div className="cs-hero-right">
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '-40px', background: `radial-gradient(circle, ${mauveGlow} 0%, transparent 70%)`, pointerEvents: 'none' }} />
            <Image
              src="/nbm-hero.jpg"
              alt="Nails by Mona homepage hero — Custom-fit press-on nails, made for your hands"
              width={1440}
              height={1800}
              priority
              style={{ width: '100%', maxWidth: '520px', height: 'auto', borderRadius: '12px', border: '1px solid rgba(191,164,206,0.2)', boxShadow: '0 32px 80px rgba(0,0,0,0.6)', position: 'relative', zIndex: 1 }}
            />
          </div>
        </div>
      </section>

      {/* ── 2. OVERVIEW ─────────────────────────────────── */}
      <div className="cs-section alt">
        <div className="inner-wide">
          <div className="ov-grid reveal">
            <div className="ov-card"><div className="ov-label">My Role</div><div className="ov-val">UX Designer + Developer</div></div>
            <div className="ov-card"><div className="ov-label">Duration</div><div className="ov-val">6 wks · plan → ship</div></div>
            <div className="ov-card"><div className="ov-label">Stack</div><div className="ov-val">Laravel · Filament · Tailwind</div></div>
            <div className="ov-card"><div className="ov-label">Live</div><div className="ov-val"><a href="https://nailsbymona.pk" target="_blank" rel="noopener noreferrer" style={{ color: mauve, textDecoration: 'none' }}>nailsbymona.pk ↗</a></div></div>
          </div>

          <div className="inner" style={{ marginTop: '3rem' }}>
            <div className="section-tag reveal">The Brief</div>
            <h2 className="cs-h2 reveal">A business run entirely<br /><em>inside Instagram DMs</em></h2>
            <p className="cs-body reveal">
              Mona is a Fine Arts graduate running a handmade press-on nail studio out of her home in
              Mirpur, Azad Kashmir. With ~1,000 followers, two years of word-of-mouth, and ~30 monthly
              orders — all handled via voice notes and back-and-forth WhatsApp photos — the business had
              real craft but no infrastructure. No website, no checkout, no way to be discovered outside
              Instagram.
            </p>
            <p className="cs-body reveal">
              But &ldquo;build a website&rdquo; was the wrong frame. Eight Pakistani competitors already have
              websites — generic Shopify storefronts that haven&apos;t moved the needle. The real challenge was
              to design a <strong>digital service that earns trust on the first visit</strong>, makes the artisan
              craft visible, and removes the friction that today only Mona-on-WhatsApp can resolve.
              That meant starting with users, not pages.
            </p>
          </div>
        </div>
      </div>

      {/* ── 3. PROCESS — chronological narrative ────────── */}
      <div className="cs-section">
        <div className="inner-wide">
          <div className="section-tag reveal">Process · how I worked</div>
          <h2 className="cs-h2 reveal">Six weeks. Six phases.<br /><em>Plan first. Then design. Then code.</em></h2>
          <p className="cs-body reveal" style={{ maxWidth: '720px' }}>
            Before any pixel or template, I spent the first week writing the plan with Claude Code as a
            thinking partner. The plan was reviewed and revised three times before I drew a single
            wireframe — that&apos;s the work that prevents Frankensteining 60% of the way through a build.
            Only then did I move to UX research, then to wireframes in Claude Design, then to the Laravel build.
          </p>

          <div className="reveal" style={{ marginTop: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1rem' }}>
            {processSteps.map((step) => (
              <div key={step.n} style={{ background: 'var(--bg2)', borderRadius: '14px', border: '1px solid var(--border2)', padding: '1.6rem 1.75rem', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.85rem' }}>
                  <div style={{ fontSize: '0.62rem', letterSpacing: '0.14em', color: mauve, fontWeight: 700 }}>{step.n}</div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{step.when}</div>
                </div>
                <div style={{ fontSize: '0.98rem', fontWeight: 600, marginBottom: '0.6rem' }}>{step.title}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{step.body}</p>
              </div>
            ))}
          </div>

          <p className="cs-body reveal" style={{ marginTop: '2rem', maxWidth: '720px', fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--muted)' }}>
            Tools across the project: Claude Code (planning, code), Claude Design (wireframes),
            Figma &amp; FigJam (research artefacts), Laravel + Filament (build), DigitalOcean + Certbot
            (deploy).
          </p>
        </div>
      </div>

      {/* ── 4. RESEARCH — competitive landscape ─────────── */}
      <div className="cs-section">
        <div className="inner">
          <div className="section-tag reveal">Research</div>
          <h2 className="cs-h2 reveal">The category was crowded<br /><em>but undifferentiated</em></h2>
          <p className="cs-body reveal">
            I audited 8 Pakistani press-on competitors across Instagram, websites, pricing, and DM reviews.
            Three signals jumped out — every brand says <em>&ldquo;custom&rdquo;</em> but none demonstrate it; bridal
            is over-promised and under-served; and not one brand owns the religious-fit angle that Mona
            stumbled into for personal reasons.
          </p>

          {/* Stats strip */}
          <div style={{ marginTop: '2.5rem', background: 'var(--bg2)', borderRadius: '16px', border: '1px solid var(--border2)', padding: '2rem' }} className="reveal">
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.25rem' }}>Competitive landscape</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
              {[
                { stat: '8', label: 'Pakistani brands already running' },
                { stat: '4', label: 'at 20–43k followers (20–40× Mona\'s reach)' },
                { stat: '0', label: 'demonstrating real custom fit' },
              ].map((s) => (
                <div key={s.stat} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 700, color: mauve, lineHeight: 1 }}>{s.stat}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--muted)', marginTop: '0.5rem' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Gap matrix */}
          <div style={{ marginTop: '2rem', borderRadius: '16px', border: '1px solid var(--border2)', overflow: 'hidden' }} className="reveal">
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', background: 'var(--bg2)', padding: '0.85rem 1.5rem', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>
              <div>Competitor claim</div>
              <div>How they prove it</div>
              <div style={{ color: mauve }}>Our wedge</div>
            </div>
            {[
              ['Custom-fit nails', 'Generic copy on PDP', 'Live-camera with SVG overlay'],
              ['Made for brides', '1-2 bridal product cards', 'Dedicated Trio package + page'],
              ['Handmade in Pakistan', 'Watermark on Reels', 'Hand-only photography rule, signed packaging'],
              ['Reusable / non-damaging', 'One-line product copy', 'Free first refit + saved-sizing reorder'],
            ].map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', padding: '1rem 1.5rem', background: i % 2 === 0 ? 'var(--bg2)' : 'transparent', borderTop: '1px solid var(--border)', fontSize: '0.84rem', alignItems: 'center' }}>
                <div style={{ color: 'var(--fg)' }}>{row[0]}</div>
                <div style={{ color: 'var(--muted)', fontStyle: 'italic' }}>{row[1]}</div>
                <div style={{ color: mauve }}>{row[2]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 4. PERSONAS ─────────────────────────────────── */}
      <div className="cs-section alt">
        <div className="inner">
          <div className="section-tag reveal">User Personas</div>
          <h2 className="cs-h2 reveal">Three women.<br /><em>Three completely different clocks.</em></h2>
          <p className="cs-body reveal">
            I synthesised three personas from competitor IG reviews, Mona&apos;s DM records, and market data
            on Pakistani working women. I chose the personas with the most distinct <strong>trigger moments</strong>
            — not the most distinct demographics — because the trigger shapes the whole journey. Per the
            brand&apos;s no-face discipline, the avatars are hand-and-symbol illustrations rather than portraits.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem', marginTop: '2.5rem' }} className="reveal">
            {personas.map((p) => (
              <div key={p.name} style={{ background: p.color, borderRadius: '16px', border: '1px solid var(--border2)', padding: '1.75rem' }}>
                <Image src={p.avatar} alt={`${p.name} persona avatar`} width={64} height={64} loading="lazy" style={{ width: 64, height: 64, marginBottom: '1.2rem', borderRadius: '50%' }} />
                <div style={{ fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>Persona</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.2rem' }}>{p.name}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginBottom: '0.25rem' }}>{p.age}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginBottom: '1rem' }}>{p.role}</div>
                <div style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: mauve, marginBottom: '0.4rem' }}>Trigger</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 500, marginBottom: '1rem' }}>{p.trigger}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '1rem', borderLeft: `2px solid ${mauveDark}`, paddingLeft: '0.75rem' }}>{p.quote}</p>
                <div style={{ fontSize: '0.78rem', color: 'var(--fg)' }}>{p.job}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 5. JOURNEY MAP (Hira's bridal arc) ──────────── */}
      <div className="cs-section">
        <div className="inner-wide">
          <div className="section-tag reveal">Journey Map · Hira (bride)</div>
          <h2 className="cs-h2 reveal">The bridal arc<br /><em>is six weeks of vulnerability</em></h2>
          <p className="cs-body reveal" style={{ maxWidth: '720px' }}>
            Hira&apos;s journey starts at engagement and ends at her Valima. In between are five distinct
            emotional states. I mapped the friction, the trust-broken moments, and the exact points where
            Mona&apos;s offering replaces what salons currently fail at.
          </p>

          <div className="reveal" style={{ marginTop: '2.5rem', borderRadius: '16px', border: '1px solid var(--border2)', overflow: 'hidden', background: 'var(--bg2)' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', minWidth: '900px', borderCollapse: 'collapse', fontSize: '0.82rem' }}>
                <thead>
                  <tr style={{ background: 'var(--bg)', textAlign: 'left' }}>
                    <th style={{ padding: '0.85rem 1rem', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 500 }}></th>
                    {['1 · Engagement', '2 · Research', '3 · Trust crisis', '4 · Trial order', '5 · Bridal Trio'].map((s) => (
                      <th key={s} style={{ padding: '0.85rem 1rem', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: mauve, fontWeight: 500 }}>{s}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Feeling',  'Euphoric',                'Overwhelmed',                  'Scared, suspicious',           'Cautiously hopeful',           'Confident, proud'],
                    ['Doing',    'Pinterest, IG saves',     'Comparing 8 PK brands',        'Reading scam stories',         'First small order (Rs. 2,200)','Books Mehendi · Baraat · Valima trio'],
                    ['Pain',     'Information overload',    '"Custom" means nothing',       'No accountability on PK IG',   'Sizing fear before unboxing',  'Lead-time anxiety'],
                    ['Need',     'Inspiration that\'s real','A brand that proves the claim','A name + face she can verify', 'Visible, hand-only proof',     'A 4-week timeline she can trust'],
                    ['NBM moment',`Hand-only IG + journal`, `Live-camera sizing demo`,      `Mirpur location + free refit`, `Saved-sizing reorder`,         `Bridal page + WhatsApp handoff if <4 wk`],
                  ].map((row, i) => (
                    <tr key={i} style={{ borderTop: '1px solid var(--border)' }}>
                      <td style={{ padding: '0.85rem 1rem', fontSize: '0.7rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 500, whiteSpace: 'nowrap', background: 'var(--bg)' }}>{row[0]}</td>
                      {row.slice(1).map((cell, j) => (
                        <td key={j} style={{ padding: '0.85rem 1rem', color: i === 4 ? mauve : (i === 2 ? '#e8b4a8' : 'var(--fg)'), fontStyle: i === 4 ? 'italic' : 'normal' }}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="cs-body reveal" style={{ marginTop: '1.5rem', maxWidth: '720px' }}>
            Stage 3 is the moment most Pakistani brands lose her — and it&apos;s also where craft can break through.
            Naming Mirpur, naming Mona, and showing the studio (without showing the person) does more for trust
            than any badge or testimonial.
          </p>
        </div>
      </div>

      {/* ── 6. KEY INSIGHTS ─────────────────────────────── */}
      <div className="cs-section alt">
        <div className="inner">
          <div className="section-tag reveal">5 Insights that shaped the design</div>
          <h2 className="cs-h2 reveal"><em>What we found</em> that nobody<br />else was saying</h2>

          {insights.map((ins) => (
            <div key={ins.n} className="reveal" style={{ display: 'flex', gap: '1.75rem', padding: '2rem 0', borderBottom: '1px solid var(--border)' }}>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.12em', color: mauve, fontWeight: 600, paddingTop: '0.25rem', flexShrink: 0 }}>{ins.n}</div>
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.6rem' }}>{ins.title}</div>
                <p className="cs-body" style={{ marginBottom: 0 }}>{ins.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 7. INFORMATION ARCHITECTURE ─────────────────── */}
      <div className="cs-section">
        <div className="inner-wide">
          <div className="section-tag reveal">Information Architecture</div>
          <h2 className="cs-h2 reveal">13 pages.<br /><em>One five-link nav.</em></h2>
          <p className="cs-body reveal" style={{ maxWidth: '720px' }}>
            Nav locked early: Shop · Bridal · About · Journal · Help. Five links, no mega-menu, no
            dropdowns. Every other page is reachable within two taps from the homepage. The order flow
            is a separate spine (not in the main nav) entered only from the bag drawer.
          </p>

          {/* Public storefront tree */}
          <div className="reveal" style={{ marginTop: '2.5rem' }}>
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: mauve, marginBottom: '1rem' }}>Public storefront</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
              {[
                { p: 'Home', sub: '/' },
                { p: 'Shop', sub: '/shop' },
                { p: 'Product detail', sub: '/shop/{slug}' },
                { p: 'Bridal', sub: '/bridal' },
                { p: 'About', sub: '/about' },
                { p: 'Journal index', sub: '/blog' },
                { p: 'Journal post', sub: '/blog/{slug}' },
                { p: 'Size guide', sub: '/size-guide' },
                { p: 'Help', sub: '/contact' },
                { p: '404 / sitemap.xml / feed.xml', sub: '+ Privacy · Terms · Shipping' },
              ].map((page) => (
                <div key={page.p} style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '10px', padding: '0.75rem 1rem' }}>
                  <div style={{ fontSize: '0.83rem', fontWeight: 500 }}>{page.p}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--muted)', fontFamily: 'var(--mono, monospace)', marginTop: '0.2rem' }}>{page.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Order flow */}
          <div className="reveal" style={{ marginTop: '2rem' }}>
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: mauve, marginBottom: '1rem' }}>Order flow (guest checkout — no accounts)</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['Bag drawer', '→', 'Sizing capture', '→', 'Order details', '→', 'Payment', '→', 'Confirmation', '→', 'Tracking'].map((step, i) => (
                step === '→'
                  ? <div key={i} style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>→</div>
                  : <div key={step} style={{ background: mauveGlow, border: `1px solid ${mauveDark}`, borderRadius: '10px', padding: '0.6rem 0.95rem', fontSize: '0.82rem', fontWeight: 500, color: mauve }}>{step}</div>
              ))}
            </div>
            <p className="cs-body" style={{ marginTop: '1rem' }}>
              Each step is its own URL with server-rendered state — back-button safe on patchy Pakistan
              4G. Returning customers (matched by phone + email, normalised across <code style={{ background: 'var(--bg2)', padding: '0.1rem 0.4rem', borderRadius: '4px', fontSize: '0.8rem' }}>+92</code> /
              <code style={{ background: 'var(--bg2)', padding: '0.1rem 0.4rem', borderRadius: '4px', fontSize: '0.8rem' }}> 0</code> prefixes) skip sizing and get a 5% reorder discount surfaced immediately.
            </p>
          </div>

          {/* Admin tree */}
          <div className="reveal" style={{ marginTop: '2rem' }}>
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: mauve, marginBottom: '1rem' }}>Admin panel (Filament, authenticated)</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
              {['Dashboard', 'Orders + kanban', 'Products + UGC photos', 'Customers + sizing CRM', 'Blog posts', 'FAQs', 'Messages', 'Subscribers', 'Finance overview', 'Expenses', 'Settings'].map((screen) => (
                <div key={screen} style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '10px', padding: '0.7rem 1rem', fontSize: '0.83rem', fontWeight: 500 }}>{screen}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── 8. USER FLOWS ───────────────────────────────── */}
      <div className="cs-section alt">
        <div className="inner">
          <div className="section-tag reveal">User Flows</div>
          <h2 className="cs-h2 reveal">Three flows.<br /><em>Each one a deliberate split-path.</em></h2>
          <p className="cs-body reveal">
            I mapped three end-to-end flows to validate the IA before any UI was built. Each one has at
            least one graceful-degradation branch — Pakistan-mobile-first means assuming things will fail.
          </p>

          <div style={{ marginTop: '2.5rem' }}>
            {[
              {
                n: '1',
                title: 'Sana orders her usual everyday set (returning customer)',
                steps: ['Open IG link', 'Shop', 'Click set', 'Add to bag', 'Bag drawer', 'Checkout', '"Have you ordered before?"', 'Phone + email match', 'Sizing skipped ✓', 'Details prefilled', 'Pay (JazzCash)', 'Upload proof', 'Confirmation'],
              },
              {
                n: '2',
                title: 'Hira buys the Bridal Trio (high-stakes, first-time)',
                steps: ['Google "bridal press on nails Pakistan"', 'Bridal page', '"Order 4 weeks before mehendi" rule visible', 'Add Trio to bag', 'Sizing — live camera', 'Fingers photo', 'Thumb photo', 'Optional: other hand', 'Submit', 'Details', 'Full advance · Bank transfer', 'Proof upload', 'Admin verifies <24h ✓'],
              },
              {
                n: '3',
                title: 'Ayesha lands on the wudu blog post (organic-first journey)',
                steps: ['Google "press on nails wudu"', 'Cornerstone blog post', 'Reads "Yes — remove before, reapply after"', 'Internal link → Shop', 'Browses', 'Reads care guide', 'Wishlists', 'Returns 2 weeks later', 'Buys everyday set'],
              },
            ].map((flow) => (
              <div key={flow.n} className="reveal" style={{ display: 'flex', gap: '1.5rem', padding: '1.5rem 0', borderBottom: '1px solid var(--border)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: mauve, flexShrink: 0, paddingTop: '0.15rem' }}>{flow.n}.</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.85rem' }}>{flow.title}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', alignItems: 'center' }}>
                    {flow.steps.map((step, i) => (
                      <span key={step} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <span style={{ background: 'var(--bg)', border: '1px solid var(--border2)', borderRadius: '6px', padding: '0.22rem 0.6rem', fontSize: '0.72rem', color: step.includes('✓') ? mauve : 'var(--muted)', borderColor: step.includes('✓') ? mauveDark : undefined }}>{step}</span>
                        {i < flow.steps.length - 1 && <span style={{ color: 'var(--border2)', fontSize: '0.7rem' }}>→</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 10. WIREFRAMES IN CLAUDE DESIGN ─────────────── */}
      <div className="cs-section">
        <div className="inner-wide">
          <div className="section-tag reveal">Wireframes · made in Claude Design</div>
          <h2 className="cs-h2 reveal">Eighteen artboards.<br /><em>One infinite canvas.</em></h2>
          <p className="cs-body reveal" style={{ maxWidth: '720px' }}>
            I used <strong>Claude Design</strong> to wireframe the entire product on one infinite canvas.
            The mid-fi sketchy style kept the focus on layout, hierarchy, and annotated decisions — the
            kind of margin notes that get lost in Figma comments. Two hero variants for every key page so
            layout calls could be compared side-by-side before the build began. The board below became
            the brief for the Laravel + Blade port that followed.
          </p>

          <div className="reveal" style={{ marginTop: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '0.85rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: mauve }}>Wireframes · 18 artboards</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>2 hero variants per page · annotated decisions</div>
            </div>
            <figure style={{ margin: 0, background: 'var(--bg2)', borderRadius: '14px', border: '1px solid var(--border2)', overflow: 'hidden' }}>
              <Image
                src="/nbm-wireframes.jpg"
                alt="Wireframes on the Claude Design canvas — annotated sketches of every page including Home, Shop, Product, Bridal, and the Order flow"
                width={2400}
                height={2400}
                loading="lazy"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </figure>
          </div>
        </div>
      </div>

      {/* ── 10. DESIGN SYSTEM ───────────────────────────── */}
      <div className="cs-section alt">
        <div className="inner-wide">
          <div className="section-tag reveal">Design System</div>
          <h2 className="cs-h2 reveal">A warm-neutral atelier system —<br /><em>lavender used only as accent</em></h2>
          <p className="cs-body reveal" style={{ maxWidth: '720px' }}>
            The discipline that holds the brand together is restraint. The page is bone-coloured; cards
            are paper; alt sections are shell. Lavender (the logo colour, <code style={{ background: 'var(--bg)', padding: '0.1rem 0.4rem', borderRadius: '4px', fontSize: '0.8rem' }}>#BFA4CE</code>) appears in eight specific
            spots only — CTAs, focus rings, prices, active nav, step indicators, accent rules under H2s,
            selected payment tiles, and eyebrow labels. Nowhere else. Saturation is what makes accents work.
          </p>

          {/* Palette */}
          <div className="reveal" style={{ marginTop: '2.5rem' }}>
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: mauve, marginBottom: '1rem' }}>Palette tokens</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.75rem' }}>
              {palette.map((c) => (
                <div key={c.hex} style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border2)' }}>
                  <div style={{ background: c.hex, height: 84, color: c.light ? '#fff' : '#1C1727', display: 'flex', alignItems: 'flex-end', padding: '0.6rem 0.75rem', fontSize: '0.7rem', fontFamily: 'monospace', letterSpacing: '0.04em' }}>{c.hex}</div>
                  <div style={{ padding: '0.6rem 0.75rem', background: 'var(--bg2)' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 500 }}>{c.name}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>{c.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div className="reveal" style={{ marginTop: '2.5rem' }}>
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: mauve, marginBottom: '1rem' }}>Typography</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ background: 'var(--bg)', borderRadius: '12px', border: '1px solid var(--border2)', padding: '2rem' }}>
                <div style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.8rem' }}>Display · Fraunces (variable serif)</div>
                <div style={{ fontFamily: '"Fraunces", "Cormorant Garamond", serif', fontSize: '3rem', lineHeight: 1.0, fontWeight: 300, letterSpacing: '-0.02em' }}>Custom-fit, made by hand.</div>
                <div style={{ fontFamily: '"Fraunces", serif', fontSize: '1.5rem', lineHeight: 1.1, fontWeight: 400, marginTop: '1rem', color: 'var(--muted)' }}>Three nights. Three looks.</div>
              </div>
              <div style={{ background: 'var(--bg)', borderRadius: '12px', border: '1px solid var(--border2)', padding: '2rem' }}>
                <div style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.8rem' }}>Body · DM Sans</div>
                <div style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                  Handmade gel sets, sized from two close-up photos of your fingers and thumb. Wudu-friendly. Reusable three to five times. Shipped across Pakistan.
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '1rem', letterSpacing: '0.04em' }}>Rs. 2,500 — Made to Order · Ships in 5–7 days</div>
              </div>
            </div>
          </div>

          {/* Brand rules / no-go zone */}
          <div className="reveal" style={{ marginTop: '2.5rem' }}>
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: mauve, marginBottom: '1rem' }}>Non-negotiable brand rules</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '0.75rem' }}>
              {[
                { do: 'Hand-only photography', dont: 'Founder face anywhere' },
                { do: '"Hello Nails by Mona…" WhatsApp prefills', dont: '"DM Mona" / "Ask Mona" copy' },
                { do: '"Add to bag"', dont: '"Order Now" button' },
                { do: 'Lavender as 8 specific accents', dont: 'Lavender as a background colour' },
                { do: 'Champagne + gold = bridal-only', dont: 'Mixing gold into Everyday/Signature tiers' },
                { do: 'Rule-line under every H2', dont: 'Drop shadows or heavy borders' },
              ].map((r, i) => (
                <div key={i} style={{ background: 'var(--bg)', borderRadius: '12px', border: '1px solid var(--border2)', padding: '1rem 1.25rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <div style={{ fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7ec88a', marginBottom: '0.3rem' }}>Do</div>
                    <div style={{ fontSize: '0.82rem' }}>{r.do}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#e8a4a4', marginBottom: '0.3rem' }}>Don&apos;t</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>{r.dont}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── 11. FINAL DESIGNS — live storefront ─────────── */}
      <div className="cs-section">
        <div className="inner">
          <div className="section-tag reveal">Final Designs</div>
          <h2 className="cs-h2 reveal">Live at <a href="https://nailsbymona.pk" target="_blank" rel="noopener noreferrer" style={{ color: mauve, textDecoration: 'none' }}>nailsbymona.pk</a></h2>
          <p className="cs-body reveal">
            Built in Laravel + Blade + Tailwind v4 + jQuery. No JS framework on the public storefront —
            Pakistan-mobile means smaller JS bundles, faster TTI, fewer hydration costs. Every page is
            server-rendered with Schema.org JSON-LD (Organization, Product, Article, FAQPage,
            BreadcrumbList). Lighthouse mobile targets ≥ 90 across the board.
          </p>
        </div>

        {/* Homepage hero — full-width */}
        <div className="inner-wide" style={{ marginTop: '2.5rem' }}>
          <figure className="reveal" style={{ margin: 0 }}>
            <Image
              src="/nbm-page-home.jpg"
              alt="Nails by Mona homepage — final design"
              width={1440}
              height={3400}
              loading="lazy"
              style={{ width: '100%', height: 'auto', borderRadius: '16px', border: '1px solid var(--border2)', display: 'block' }}
            />
            <figcaption style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '0.75rem', textAlign: 'center', fontStyle: 'italic' }}>
              Homepage — hero, 4-pillar trust strip, fit-difference deep dive, featured sets, bridal callout, blog teaser, dark aubergine footer.
            </figcaption>
          </figure>
        </div>

        {/* 2-col pages grid */}
        <div className="inner-wide" style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
          {pages.map((p) => (
            <figure key={p.src} className="reveal" style={{ margin: 0, background: 'var(--bg2)', borderRadius: '14px', border: '1px solid var(--border2)', overflow: 'hidden' }}>
              <Image
                src={p.src}
                alt={`${p.label} — Nails by Mona final design`}
                width={1440}
                height={p.h}
                loading="lazy"
                style={{ width: '100%', height: 'auto', display: 'block', borderBottom: '1px solid var(--border)' }}
              />
              <figcaption style={{ padding: '1rem 1.25rem' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 600 }}>{p.label}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '0.25rem' }}>{p.sub}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Product photo (kept from original) */}
        <div className="inner" style={{ marginTop: '3rem' }}>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', alignItems: 'center' }}>
            <Image
              src="/nbm-product.jpg"
              alt="Nails by Mona product — deep burgundy with gold accent"
              width={1400}
              height={1400}
              loading="lazy"
              style={{ width: '100%', height: 'auto', borderRadius: '16px', border: '1px solid var(--border2)', display: 'block' }}
            />
            <div style={{ padding: '1rem' }}>
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: mauve, marginBottom: '1rem' }}>The product</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.3, marginBottom: '1rem' }}>Every set is hand-built,<br />individually cured, and<br /><em>custom-fitted.</em></h3>
              <p className="cs-body">
                Gel base, colour layers, and topcoat applied by hand. Custom measurements read from
                coin-scale photos. A free first refit guarantee backs every order. The photography brief:
                hands only, never faces — disciplined brand identity disguised as aesthetic choice.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── 12. LIVE CAMERA SIZING — DEEP DIVE ──────────── */}
      <div className="cs-section alt">
        <div className="inner-wide">
          <div className="section-tag reveal">Live-Camera Sizing · The signature feature</div>
          <h2 className="cs-h2 reveal">The differentiator gets<br /><em>its own state machine.</em></h2>
          <p className="cs-body reveal" style={{ maxWidth: '720px' }}>
            Eight competitors say &ldquo;custom.&rdquo; None show how. So I designed and built a guided
            live-camera capture: two close-up photos (fingers row + thumb) inside a single permission
            session, with per-state SVG overlays and a green/red alignment heuristic. Sizing is the most
            common DM question Mona gets — turning it into a 90-second guided flow turns the most
            error-prone moment into the most differentiated one.
          </p>

          {/* 4-state phone frames */}
          <div className="reveal" style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }}>
            {[
              { state: '01 · Explainer', frame: (
                <div style={frameStyleSoft(mauveGlow)}>
                  <div style={{ fontFamily: '"Fraunces", serif', fontSize: '0.95rem', lineHeight: 1.15, color: '#1C1727' }}>We&apos;ll need 2 close-up photos.</div>
                  <div style={{ fontSize: '0.68rem', color: '#4A4158', marginTop: '0.5rem', lineHeight: 1.5 }}>Fingers, then thumb. About 90 seconds.</div>
                  <div style={{ marginTop: '1rem', background: mauve, color: '#fff', borderRadius: '999px', padding: '0.4rem 0.7rem', fontSize: '0.65rem', textAlign: 'center', fontWeight: 500 }}>Start camera</div>
                </div>
              )},
              { state: '02 · Fingers', frame: (
                <div style={frameStyleCamera('#000')}>
                  <div style={{ position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)', color: '#fff', fontSize: '0.55rem', letterSpacing: '0.06em' }}>Photo 1 of 2 · Fingers</div>
                  <FingersOverlay borderColor="#7ec88a" />
                  <ShutterButton />
                </div>
              )},
              { state: '03 · Thumb', frame: (
                <div style={frameStyleCamera('#000')}>
                  <div style={{ position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)', color: '#fff', fontSize: '0.55rem', letterSpacing: '0.06em' }}>Photo 2 of 2 · Thumb</div>
                  <ThumbOverlay borderColor="#e8b85a" />
                  <ShutterButton />
                </div>
              )},
              { state: '04 · Preview', frame: (
                <div style={frameStyleSoft('#fff')}>
                  <div style={{ fontFamily: '"Fraunces", serif', fontSize: '0.78rem', color: '#1C1727', marginBottom: '0.5rem' }}>Looks good?</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.35rem' }}>
                    <div style={{ aspectRatio: '1', borderRadius: '6px', background: 'linear-gradient(135deg, #d8c4a3 0%, #b89878 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.5rem', color: '#fff' }}>Fingers</div>
                    <div style={{ aspectRatio: '1', borderRadius: '6px', background: 'linear-gradient(135deg, #d8c4a3 0%, #b89878 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.5rem', color: '#fff' }}>Thumb</div>
                  </div>
                  <div style={{ marginTop: '0.6rem', background: mauve, color: '#fff', borderRadius: '999px', padding: '0.3rem 0.6rem', fontSize: '0.6rem', textAlign: 'center' }}>Submit</div>
                  <div style={{ marginTop: '0.4rem', fontSize: '0.55rem', color: '#8B7E9A', textAlign: 'center' }}>+ add other hand →</div>
                </div>
              )},
            ].map((s) => (
              <div key={s.state} style={{ textAlign: 'center' }}>
                <div style={{ background: 'var(--bg)', borderRadius: '22px', border: '1px solid var(--border2)', padding: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', height: 250, overflow: 'hidden' }}>
                  {s.frame}
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--muted)', marginTop: '0.6rem', letterSpacing: '0.06em' }}>{s.state}</div>
              </div>
            ))}
          </div>

          <p className="cs-body reveal" style={{ marginTop: '2.5rem', maxWidth: '720px' }}>
            The state machine lives at a single URL — camera permission is requested <strong>once</strong> for
            the whole flow. Brightness sampling runs every 500ms; a Sobel-style edge-contrast heuristic
            paints the overlay green when something looks right, red when it doesn&apos;t. The thumb state
            uses halved thresholds (fewer edges by definition). Desktop users hit a QR-handoff state with
            a wa.me deep-link instead — laptop webcams face the user, not the nails.
          </p>

          {/* Fallback row */}
          <div className="reveal" style={{ marginTop: '2.5rem', background: 'var(--bg)', borderRadius: '14px', border: '1px solid var(--border2)', padding: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            {[
              { title: 'Live camera', body: 'Default for mobile users with permission granted.' },
              { title: 'File upload fallback', body: 'Permission denied or no rear camera — same 2-photo schema.' },
              { title: 'WhatsApp later', body: 'Customer overwhelmed — opt out, send photos to Mona, order continues.' },
            ].map((b, i) => (
              <div key={b.title} style={{ borderLeft: i === 0 ? `2px solid ${mauve}` : '2px solid var(--border)', paddingLeft: '1rem' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>{b.title}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.6 }}>{b.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 13. ADMIN DASHBOARD ─────────────────────────── */}
      <div className="cs-section">
        <div className="inner-wide">
          <div className="section-tag reveal">Admin Dashboard · for Mona</div>
          <h2 className="cs-h2 reveal">Mona runs the whole business<br /><em>from one screen.</em></h2>
          <p className="cs-body reveal" style={{ maxWidth: '720px' }}>
            Built on Filament v4 — a Laravel admin framework. Every resource was scoped to Mona&apos;s actual
            workflow: morning glance at orders needing attention, one-tap WhatsApp prefills, a payment-age
            SLA badge that turns red after 24 hours, bulk-confirm for the overnight stack. No training
            documentation needed.
          </p>

          <div className="reveal" style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            {adminShots.map((a) => (
              <figure key={a.src} style={{ margin: 0, background: 'var(--bg2)', borderRadius: '14px', border: '1px solid var(--border2)', overflow: 'hidden' }}>
                <Image
                  src={a.src}
                  alt={`Admin · ${a.label}`}
                  width={1440}
                  height={a.h}
                  loading="lazy"
                  style={{ width: '100%', height: 'auto', display: 'block', borderBottom: '1px solid var(--border)' }}
                />
                <figcaption style={{ padding: '1rem 1.25rem' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600 }}>{a.label}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '0.25rem', lineHeight: 1.55 }}>{a.desc}</div>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Engineering callouts */}
          <div className="reveal" style={{ marginTop: '3rem', borderRadius: '16px', border: '1px solid var(--border2)', overflow: 'hidden', background: 'var(--bg2)' }}>
            <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: mauve }}>Production hardening — things that aren&apos;t visible but matter</div>
            <div style={{ padding: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
              {[
                ['Bag-tampering closed', 'Cart prices re-fetched server-side by slug at order creation. A customer setting localStorage `price_pkr: 1` cannot place a Bridal Trio for Rs. 1.'],
                ['Race-safe order numbers', '`Order::generateOrderNumber()` wraps in `DB::transaction` + `lockForUpdate` + 5-retry on unique-violation. Soft-deletes use `withTrashed()` checks.'],
                ['Private file storage', 'Payment proofs + sizing photos on the `local` disk — never web-accessible. Only readable via an auth-gated admin route with path-traversal guards.'],
                ['Order-page authorisation', 'Confirm/track URLs use UUID, not integer ID. A session allowlist controls access. UUID alone is not enough.'],
                ['Pakistan-phone normalisation', '`+92 300…`, `0300…`, `923…` all resolve to the same customer for returning-customer lookup.'],
                ['Queued notifications', 'All admin notifications `implements ShouldQueue` — never block the request thread, never `User::all()`.'],
              ].map(([t, b]) => (
                <div key={t}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>{t}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.65 }}>{b}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── 14. OUTCOMES ────────────────────────────────── */}
      <div className="cs-section">
        <div className="inner">
          <div className="section-tag reveal">Outcomes to measure</div>
          <h2 className="cs-h2 reveal">The numbers that tell us<br /><em>whether the design landed</em></h2>
          <p className="cs-body reveal">
            The site launched recently. These are the 12-month targets — not Dribbble likes or Lighthouse
            scores, but the business metrics the design decisions were built to move.
          </p>

          <div style={{ marginTop: '2.5rem', borderRadius: '16px', border: '1px solid var(--border2)', overflow: 'hidden' }} className="reveal">
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '0.85rem 1.5rem', background: 'var(--bg2)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>
              <div>Metric</div><div>Baseline (DM era)</div><div style={{ color: mauve }}>12-month target</div>
            </div>
            {[
              { metric: 'Organic search visitors / month', baseline: '0', target: '5,000–15,000' },
              { metric: 'Live-camera adoption (first-time orders)', baseline: 'n/a', target: '≥ 60%' },
              { metric: 'Refit-request rate', baseline: 'n/a', target: '≤ 6%' },
              { metric: 'Repeat-customer rate', baseline: '~10% qualitative', target: '≥ 25%' },
              { metric: 'Bridal Trio share of revenue', baseline: '~0%', target: '25–35%' },
              { metric: 'Average order value', baseline: 'PKR ~2,200', target: 'PKR 2,800–3,500' },
              { metric: 'Lighthouse mobile (every page)', baseline: 'n/a', target: '≥ 90' },
            ].map((row, i) => (
              <div key={row.metric} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '1rem 1.5rem', background: i % 2 === 0 ? 'var(--bg2)' : 'transparent', borderTop: '1px solid var(--border)', fontSize: '0.85rem' }}>
                <div style={{ color: 'var(--fg)' }}>{row.metric}</div>
                <div style={{ color: 'var(--muted)' }}>{row.baseline}</div>
                <div style={{ color: mauve, fontWeight: 500 }}>{row.target}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 16. REFLECTION + CTA ────────────────────────── */}
      <div className="cs-section alt">
        <div className="inner" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div className="section-tag reveal" style={{ textAlign: 'center' }}>Reflection</div>
          <h2 className="cs-h2 reveal" style={{ textAlign: 'center' }}>The thing I&apos;m most<br /><em>proud of isn&apos;t a screen.</em></h2>
          <p className="cs-body reveal" style={{ textAlign: 'center' }}>
            It&apos;s the discipline of what we deliberately did not build. No &ldquo;Order Now&rdquo; buttons, no AI chatbot,
            no founder face, no payment gateway at launch. Each &ldquo;no&rdquo; was a decision, not an oversight.
            Premature features are the enemy of a one-woman studio that needs to ship and survive.
          </p>
          <p className="cs-body reveal" style={{ textAlign: 'center' }}>
            What I&apos;m least certain about is live-camera adoption. The whole sizing differentiation rests
            on it. If only 20% of customers grant permission and the rest fall back to upload, we still
            ship a working product — but the wedge gets smaller. That&apos;s why <code style={{ background: 'var(--bg)', padding: '0.1rem 0.4rem', borderRadius: '4px', fontSize: '0.8rem' }}>sizing_capture_method</code> is
            tracked in the schema from day one, and the first round of usability testing is scoped for the
            week the first 20 organic orders land.
          </p>

          <div className="reveal" style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a
              href="https://nailsbymona.pk"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: mauveDark,
                color: '#fff',
                padding: '0.9rem 2.25rem',
                borderRadius: '100px',
                fontWeight: 500,
                fontSize: '0.9rem',
                textDecoration: 'none',
                transition: 'background 0.2s, transform 0.2s',
              }}
            >
              Visit the live site ↗
            </a>
          </div>
        </div>
      </div>

      {/* Footer nav */}
      <div style={{ padding: '3rem', textAlign: 'center', borderTop: '1px solid var(--border)' }}>
        <a href="/" style={{ fontSize: '0.85rem', color: 'var(--muted)', textDecoration: 'none' }}>← Back to portfolio</a>
      </div>
    </>
  );
}

// ───────── helper styles for the 4-state phone-frame illustrations ─────────
function frameStyleSoft(bg: string): React.CSSProperties {
  return {
    width: 130, height: 230, borderRadius: 18, background: bg,
    padding: '1rem 0.85rem', display: 'flex', flexDirection: 'column',
    border: '1px solid #EAE3D9', position: 'relative',
  };
}
function frameStyleCamera(bg: string): React.CSSProperties {
  return {
    width: 130, height: 230, borderRadius: 18, background: bg,
    position: 'relative', overflow: 'hidden', border: '1px solid #1a1a1a',
  };
}

// 4-finger U-shape overlay (matches public/icons/sizing-fingers.svg geometry)
function FingersOverlay({ borderColor }: { borderColor: string }) {
  return (
    <svg viewBox="0 0 130 230" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} aria-hidden>
      <rect x="6" y="6" width="118" height="218" rx="14" fill="none" stroke={borderColor} strokeWidth="2" opacity="0.85"/>
      <g stroke="#BFA4CE" strokeWidth="1.3" strokeDasharray="4 3" fill="none">
        {/* fingers: pinky · ring · middle · index — bottom-up U shapes */}
        <path d="M22 195 L22 165 Q22 158 28 158 Q33 158 33 165 L33 195" />
        <path d="M46 195 L46 145 Q46 138 52 138 Q57 138 57 145 L57 195" />
        <path d="M68 195 L68 132 Q68 125 74 125 Q80 125 80 132 L80 195" />
        <path d="M91 195 L91 152 Q91 145 96 145 Q102 145 102 152 L102 195" />
        {/* coin reference above middle */}
        <circle cx="74" cy="110" r="7" />
      </g>
      <text x="50%" y="100%" textAnchor="middle" dy="-12" fill="#fff" fontSize="6" letterSpacing="0.06em">PHOTO 1 / 2</text>
    </svg>
  );
}

// Thumb U-shape overlay
function ThumbOverlay({ borderColor }: { borderColor: string }) {
  return (
    <svg viewBox="0 0 130 230" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} aria-hidden>
      <rect x="6" y="6" width="118" height="218" rx="14" fill="none" stroke={borderColor} strokeWidth="2" opacity="0.85"/>
      <g stroke="#BFA4CE" strokeWidth="1.3" strokeDasharray="4 3" fill="none">
        {/* single wider thumb U */}
        <path d="M48 200 L48 130 Q48 116 65 116 Q82 116 82 130 L82 200" />
        {/* coin above thumb */}
        <circle cx="65" cy="98" r="8" />
      </g>
      <text x="50%" y="100%" textAnchor="middle" dy="-12" fill="#fff" fontSize="6" letterSpacing="0.06em">PHOTO 2 / 2</text>
    </svg>
  );
}

// Shutter button bottom-centre
function ShutterButton() {
  return (
    <div style={{ position: 'absolute', bottom: 14, left: '50%', transform: 'translateX(-50%)' }}>
      <div style={{ width: 36, height: 36, borderRadius: '50%', border: '2px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#fff' }} />
      </div>
    </div>
  );
}
