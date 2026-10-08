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
      job: 'Volume buyer: reorders every 4–6 weeks.',
      color: '#2a1f35',
    },
    {
      name: 'Hira',
      avatar: '/nbm-persona-hira.svg',
      age: '26 · Karachi',
      role: 'Bride-to-be, wedding in 6 weeks',
      trigger: 'Wedding date',
      quote: '"I need three coordinated looks (Mehendi, Baraat, Valima) that I can trust completely."',
      job: 'Bridal buyer: single high-stakes purchase, high emotional investment.',
      color: '#1f2535',
    },
    {
      name: 'Ayesha',
      avatar: '/nbm-persona-ayesha.svg',
      age: '31 · Rawalpindi',
      role: 'Teacher, practicing Muslim',
      trigger: 'Wudu conflict',
      quote: '"I can\'t wear regular polish. Water can\'t reach my nail bed during ablution. Press-ons solve this exactly."',
      job: 'Values buyer: buys on fit with religious practice.',
      color: '#1f2e25',
    },
  ];

  // ── insights ───────────────────────────────────────────────
  const insights = [
    {
      n: '01',
      title: '"Custom" is meaningless until you show the measurement.',
      body: 'Every competitor uses the word "custom." None demonstrate it. The differentiator isn\'t being custom, it\'s looking custom. That\'s why we invested in a guided live-camera capture with SVG overlays: 2 close-up photos (fingers + thumb), a green/red alignment heuristic, and macro framing that reads each nail width directly off a coin reference.',
    },
    {
      n: '02',
      title: 'The wudu pain point is invisible to non-Muslim designers.',
      body: 'Practicing Muslim women cannot wear traditional polish: water can\'t reach the nail bed during ablution. Press-ons solve this exactly: they remove cleanly. Mona started this business for that reason. Surfacing it as the 4th brand pillar opens a content moat with zero competition on the exact-match search query.',
    },
    {
      n: '03',
      title: 'The brand is "Nails by Mona," not Mona personally.',
      body: 'A face on the website would invite DM spam, conflate the brand with the person, and cap scaling. The discipline is hand-only photography and brand-addressed WhatsApp pre-fills ("Hello Nails by Mona…"). A small detail that compounds: every customer interaction reinforces a brand, not a phone number.',
    },
    {
      n: '04',
      title: 'Bridal time-pressure is the most under-served emotional state.',
      body: 'A bride 4 weeks before her mehendi is a fundamentally different user from a working professional browsing on her commute. The Bridal Trio gets its own page, distinct champagne-and-gold photography style, a 4-week lead-time rule surfaced in the hero, and a WhatsApp handoff for orders placed too close to the date.',
    },
    {
      n: '05',
      title: 'Pakistan-mobile is the design constraint, not a responsive afterthought.',
      body: 'A 3-year-old Android on patchy 4G, in landscape, in a salon waiting room. Speed isn\'t a polish goal here, it\'s a market-fit requirement. Every flow has a graceful degradation path. The live camera itself falls back to file upload, which falls back to "send via WhatsApp."',
    },
  ];

  // ── final-design pages grid ────────────────────────────────
  // Slim list: the 6 pages that earn their place in the case study.
  // Blog-post, contact, and order-form were dropped (low signal vs page weight).
  const pages = [
    { src: '/nbm-page-shop.jpg',       label: 'Shop',           h: 3000, sub: 'Search and filter pills in one sticky toolbar, price and tier on every card.' },
    { src: '/nbm-page-product.jpg',    label: 'Product detail', h: 3400, sub: 'Bridal Trio Classic. Add to bag sits right under the price, with the three sets linked below.' },
    { src: '/nbm-page-bridal.jpg',     label: 'Bridal',         h: 3400, sub: 'Real wedding photos, one flat Rs. 10,000 price, each night linked to its set.' },
    { src: '/nbm-page-size-guide.jpg', label: 'Size guide',     h: 3400, sub: 'Real photos replaced placeholders. Good vs Avoid gallery with corner pills.' },
    { src: '/nbm-page-about.jpg',      label: 'About',          h: 2400, sub: 'Hand-only hero. Founder named in copy, never shown in photography.' },
    { src: '/nbm-page-blog.jpg',       label: 'Journal',        h: 2600, sub: 'Cornerstone posts with cover images. The wudu post is the priority SEO bet.' },
  ];

  // ── 6-step process timeline ────────────────────────────────
  const processSteps = [
    {
      n: '01', when: 'Week 1', title: 'Plan in Claude Code',
      body: 'Started not with a Figma file but a 90-minute planning session with Claude Code as a thinking partner. Output: a 34-section CLAUDE.md project bible covering business context, fixed decisions, brand rules, scope cuts, and explicit non-goals. That document remained the source of truth across every session that followed.',
    },
    {
      n: '02', when: 'Week 1', title: 'Review & revise the plan',
      body: 'Three follow-up sessions stress-tested the plan: competitor research, payment-method trade-offs, photography rules, and what to deliberately NOT build. Locked the Fixed Decisions table: Laravel + Filament, manual payments at MVP (no SafePay until Phase 6), hand-only photography, no AI image generation for products, no founder face anywhere.',
    },
    {
      n: '03', when: 'Week 2', title: 'UX research & strategy',
      body: '3 personas (Sana, Hira, Ayesha), 3 journey maps, a 6-stage service blueprint, IA card-sort plan, pain-points → opportunities matrix, and a UX principles deck. All documented in /docs/ux/ (13 markdown files) before any UI was drawn. Real research, written down, reviewable.',
    },
    {
      n: '04', when: 'Week 2', title: 'Wireframes in Claude Design',
      body: 'Used Claude Design for low-fi sketchy wireframes with annotations, the kind of margin notes that get lost in Figma comments. 18 artboards on one infinite canvas, including 2 hero variants for every key page so layout decisions could be compared side-by-side.',
    },
    {
      n: '05', when: 'Weeks 3–4', title: 'Frontend build',
      body: 'Laravel + Blade + Tailwind v4 + jQuery: server-rendered, no React. 13 public pages and a live-camera state machine in vanilla JS. Six transactional email templates. Bag drawer + localStorage + multi-step checkout with separate URLs for back-button safety on Pakistan-mobile 4G.',
    },
    {
      n: '06', when: 'Weeks 5–6', title: 'Backend admin, SEO & ship',
      body: 'Filament v4 admin panel with 11 resources (orders, products, customers, blog, FAQs, settings, finance, expenses, etc.). 5 cornerstone blog posts seeded. Sitemap + RSS + Schema.org JSON-LD across every page. Deployed to nailsbymona.pk on DigitalOcean with Certbot SSL and a supervised queue worker.',
    },
    {
      n: '07', when: 'After launch', title: 'Measure real usage',
      body: 'Added GA4 funnel events (add to bag, checkout, sizing completed, purchase), Microsoft Clarity session recordings, Search Console and server-log checks. For the first time I could see who actually arrived and where they dropped off, instead of guessing from personas.',
    },
    {
      n: '08', when: 'Sep – Oct 2026', title: 'Iterate with the client',
      body: 'Rebuilt the home page around the data, moved Add to bag up on product pages, added site-wide search, and shipped workflow changes Mona asked for once she was running the business on it every day. Then a speed, SEO and security pass.',
    },
  ];

  // ── admin captures ─────────────────────────────────────────
  const adminShots = [
    { src: '/nbm-admin-dashboard.jpg', label: 'Dashboard',  desc: 'Stat cards + recent orders + "Orders needing attention", designed for Mona\'s morning glance.', h: 2200 },
    { src: '/nbm-admin-orders.jpg',    label: 'Orders',     desc: 'SLA badges (green/amber/red by age). One-tap confirm, WhatsApp row action, bulk confirm for the overnight stack.', h: 2000 },
    { src: '/nbm-admin-products.jpg',  label: 'Products',   desc: 'Every set across 5 tiers. Slug, price, stock status and active toggle, all editable inline. Optional shape, length, finish and colour details feed the product page.', h: 1800 },
    { src: '/nbm-admin-customers.jpg', label: 'Customers',  desc: 'Saved sizing on file. Pakistani phone normalisation: +92 / 92 / 0 all resolve to the same customer.', h: 1600 },
    { src: '/nbm-admin-blog.jpg',      label: 'Blog editor', desc: 'Rich-text editor, category, target keyword, view counter, related-products pivot, scheduled publish.', h: 1600 },
    { src: '/nbm-admin-settings.jpg',  label: 'Settings',   desc: 'Single source of truth: WhatsApp number, payment account details, a show/hide switch per payment method, lead times, reorder discount %.', h: 2600 },
  ];

  // ── design-system palette tokens ───────────────────────────
  const palette = [
    { hex: '#F4EFE8', name: 'bone',   role: 'Page bg' },
    { hex: '#FBF8F2', name: 'paper',  role: 'Cards' },
    { hex: '#EAE3D9', name: 'shell',  role: 'Alt sections' },
    { hex: '#BFA4CE', name: 'lavender', role: 'Accent · CTAs', light: true },
    { hex: '#8A6CA5', name: 'lavender-dark', role: 'All lilac text · icons', light: true },
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
            Nails by Mona:<br />
            <em>From Instagram DMs</em><br />
            to a full digital service
          </h1>
          <p className="cs-hero-desc">
            End-to-end UX and product build for a one-woman press-on nail studio in Mirpur, Pakistan:
            research, wireframes, design system, live storefront, and a Filament admin panel that
            Mona runs herself. Since launch, redesigned and refined using real usage data.
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
              alt="Nails by Mona homepage hero: custom-fit press-on nails, made for your hands"
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
            <div className="ov-card"><div className="ov-label">Duration</div><div className="ov-val">6 wks to launch + ongoing iteration</div></div>
            <div className="ov-card"><div className="ov-label">Stack</div><div className="ov-val">Laravel · Filament · Tailwind</div></div>
            <div className="ov-card"><div className="ov-label">Live</div><div className="ov-val"><a href="https://nailsbymona.pk" target="_blank" rel="noopener noreferrer" style={{ color: mauve, textDecoration: 'none' }}>nailsbymona.pk ↗</a></div></div>
          </div>

          <div className="inner" style={{ marginTop: '3rem' }}>
            <div className="section-tag reveal">The Brief</div>
            <h2 className="cs-h2 reveal">A business run entirely<br /><em>inside Instagram DMs</em></h2>
            <p className="cs-body reveal">
              Mona is a Fine Arts graduate running a handmade press-on nail studio out of her home in
              Mirpur, Azad Kashmir. With ~1,000 followers, two years of word-of-mouth, and ~30 monthly
              orders, all handled via voice notes and back-and-forth WhatsApp photos, the business had
              real craft but no infrastructure. No website, no checkout, no way to be discovered outside
              Instagram.
            </p>
            <p className="cs-body reveal">
              But &ldquo;build a website&rdquo; was the wrong frame. Eight Pakistani competitors already have
              websites: generic Shopify storefronts that haven&apos;t moved the needle. The real challenge was
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
          <h2 className="cs-h2 reveal">Six weeks to launch.<br /><em>Then real usage took over.</em></h2>
          <p className="cs-body reveal" style={{ maxWidth: '720px' }}>
            Before any pixel or template, I spent the first week writing the plan with Claude Code as a
            thinking partner. The plan was reviewed and revised three times before I drew a single
            wireframe. That&apos;s the work that prevents Frankensteining 60% of the way through a build.
            Only then did I move to UX research, then to wireframes in Claude Design, then to the Laravel build.
            After launch, the work shifted from planning to measuring and iterating.
          </p>

          <div className="cs-g2 reveal" style={{ marginTop: '2.5rem', gap: '1rem' }}>
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
            Figma &amp; FigJam (research artefacts), Laravel + Filament (build), DigitalOcean + Cloudflare
            (deploy), GA4, Microsoft Clarity &amp; Search Console (measure).
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
            Three signals jumped out: every brand says <em>&ldquo;custom&rdquo;</em> but none demonstrate it; bridal
            is over-promised and under-served; and not one brand owns the religious-fit angle that Mona
            stumbled into for personal reasons.
          </p>

          {/* Stats strip */}
          <div style={{ marginTop: '2.5rem', background: 'var(--bg2)', borderRadius: '16px', border: '1px solid var(--border2)', padding: '2rem' }} className="reveal">
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.25rem' }}>Competitive landscape</div>
            <div className="cs-g3" style={{ gap: '1.5rem' }}>
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
            on Pakistani working women. I chose the personas with the most distinct <strong>trigger moments</strong>,
            not the most distinct demographics, because the trigger shapes the whole journey. Per the
            brand&apos;s no-face discipline, the avatars are hand-and-symbol illustrations rather than portraits.
          </p>

          <div style={{ gap: '1.25rem', marginTop: '2.5rem' }} className="cs-g3 reveal">
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
            Stage 3 is the moment most Pakistani brands lose her, and it&apos;s also where craft can break through.
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
            <div className="cs-g4" style={{ gap: '0.75rem' }}>
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
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: mauve, marginBottom: '1rem' }}>Order flow (guest checkout, no accounts)</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['Bag drawer', '→', 'Sizing capture', '→', 'Order details', '→', 'Payment', '→', 'Confirmation', '→', 'Tracking'].map((step, i) => (
                step === '→'
                  ? <div key={i} style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>→</div>
                  : <div key={step} style={{ background: mauveGlow, border: `1px solid ${mauveDark}`, borderRadius: '10px', padding: '0.6rem 0.95rem', fontSize: '0.82rem', fontWeight: 500, color: mauve }}>{step}</div>
              ))}
            </div>
            <p className="cs-body" style={{ marginTop: '1rem' }}>
              Each step is its own URL with server-rendered state, so it&apos;s back-button safe on patchy Pakistan
              4G. Returning customers (matched by phone + email, normalised across <code style={{ background: 'var(--bg2)', padding: '0.1rem 0.4rem', borderRadius: '4px', fontSize: '0.8rem' }}>+92</code> /
              <code style={{ background: 'var(--bg2)', padding: '0.1rem 0.4rem', borderRadius: '4px', fontSize: '0.8rem' }}> 0</code> prefixes) skip sizing and get a 5% reorder discount surfaced immediately.
            </p>
          </div>

          {/* Admin tree */}
          <div className="reveal" style={{ marginTop: '2rem' }}>
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: mauve, marginBottom: '1rem' }}>Admin panel (Filament, authenticated)</div>
            <div className="cs-g4" style={{ gap: '0.75rem' }}>
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
            least one graceful-degradation branch. Pakistan-mobile-first means assuming things will fail.
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
                steps: ['Google "bridal press on nails Pakistan"', 'Bridal page', '"Order 4 weeks before mehendi" rule visible', 'Add Trio to bag', 'Sizing: live camera', 'Fingers photo', 'Thumb photo', 'Optional: other hand', 'Submit', 'Details', 'Full advance · Bank transfer', 'Proof upload', 'Admin verifies <24h ✓'],
              },
              {
                n: '3',
                title: 'Ayesha lands on the wudu blog post (organic-first journey)',
                steps: ['Google "press on nails wudu"', 'Cornerstone blog post', 'Reads "Yes: remove before, reapply after"', 'Internal link → Shop', 'Browses', 'Reads care guide', 'Wishlists', 'Returns 2 weeks later', 'Buys everyday set'],
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
            The mid-fi sketchy style kept the focus on layout, hierarchy, and annotated decisions: the
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
                alt="Wireframes on the Claude Design canvas: annotated sketches of every page including Home, Shop, Product, Bridal, and the Order flow"
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
          <h2 className="cs-h2 reveal">A warm-neutral atelier system,<br /><em>lavender used only as accent</em></h2>
          <p className="cs-body reveal" style={{ maxWidth: '720px' }}>
            The discipline that holds the brand together is restraint. The page is bone-coloured; cards
            are paper; alt sections are shell. Lavender (the logo colour, <code style={{ background: 'var(--bg)', padding: '0.1rem 0.4rem', borderRadius: '4px', fontSize: '0.8rem' }}>#BFA4CE</code>) appears in eight specific
            spots only: CTAs, focus rings, prices, active nav, step indicators, accent rules under H2s,
            selected payment tiles, and eyebrow labels. Nowhere else. Saturation is what makes accents work.
          </p>
          <p className="cs-body reveal" style={{ maxWidth: '720px' }}>
            A consistency pass after launch tightened it further. Plain lavender text was only about 1.8:1
            against the shell background, so every lilac word and line icon now uses one darker shade,
            <code style={{ background: 'var(--bg)', padding: '0.1rem 0.4rem', borderRadius: '4px', fontSize: '0.8rem' }}>#8A6CA5</code>,
            and the logo lilac is kept for fills. Every icon was redrawn as an outline at one line weight, with
            one icon per meaning across the whole site.
          </p>

          {/* Palette */}
          <div className="reveal" style={{ marginTop: '2.5rem' }}>
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: mauve, marginBottom: '1rem' }}>Palette tokens</div>
            <div className="cs-g5" style={{ gap: '0.75rem' }}>
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
            <div className="cs-g2" style={{ gap: '1rem' }}>
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
                <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '1rem', letterSpacing: '0.04em' }}>Rs. 2,500 · Made to Order · Ships in 5–7 days</div>
              </div>
            </div>
          </div>

          {/* Brand rules / no-go zone */}
          <div className="reveal" style={{ marginTop: '2.5rem' }}>
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: mauve, marginBottom: '1rem' }}>Non-negotiable brand rules</div>
            <div className="cs-g2" style={{ gap: '0.75rem' }}>
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
            Built in Laravel + Blade + Tailwind v4 + jQuery. No JS framework on the public storefront:
            Pakistan-mobile means smaller JS bundles, faster TTI, fewer hydration costs. Every page is
            server-rendered with Schema.org JSON-LD (Organization, Product, Article, FAQPage,
            BreadcrumbList). The screens below are the current live site, after the post-launch redesign.
          </p>
        </div>

        {/* Homepage hero — full-width */}
        <div className="inner-wide" style={{ marginTop: '2.5rem' }}>
          <figure className="reveal" style={{ margin: 0 }}>
            <Image
              src="/nbm-page-home.jpg"
              alt="Nails by Mona homepage, current design"
              width={1440}
              height={3400}
              loading="lazy"
              style={{ width: '100%', height: 'auto', borderRadius: '16px', border: '1px solid var(--border2)', display: 'block' }}
            />
            <figcaption style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '0.75rem', textAlign: 'center', fontStyle: 'italic' }}>
              Homepage: uncovered hero photo with a starting price, the collection with prices straight after, fit in 3 steps, why press-ons, Bridal Trio banner.
            </figcaption>
          </figure>
        </div>

        {/* 2-col pages grid */}
        <div className="cs-g2 inner-wide" style={{ marginTop: '2rem', gap: '1.25rem' }}>
          {pages.map((p) => (
            <figure key={p.src} className="reveal" style={{ margin: 0, background: 'var(--bg2)', borderRadius: '14px', border: '1px solid var(--border2)', overflow: 'hidden' }}>
              <Image
                src={p.src}
                alt={`${p.label} page, Nails by Mona`}
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
          <div className="cs-g2 reveal" style={{ gap: '1.25rem', alignItems: 'center' }}>
            <Image
              src="/nbm-product.jpg"
              alt="Nails by Mona product: deep burgundy with gold accent"
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
                hands only, never faces. Disciplined brand identity disguised as aesthetic choice.
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
            common DM question Mona gets, so a 90-second guided flow turns the most
            error-prone moment into the most differentiated one.
          </p>

          {/* 4-state phone frames */}
          <div className="cs-g4 reveal" style={{ marginTop: '3rem', gap: '1.25rem' }}>
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
            The state machine lives at a single URL, so camera permission is requested <strong>once</strong>{' '}for
            the whole flow. Brightness sampling runs every 500ms; a Sobel-style edge-contrast heuristic
            paints the overlay green when something looks right, red when it doesn&apos;t. The thumb state
            uses halved thresholds (fewer edges by definition). Desktop users hit a QR-handoff state with
            a wa.me deep-link instead, because laptop webcams face the user, not the nails.
          </p>

          {/* Fallback row */}
          <div className="cs-g3 reveal" style={{ marginTop: '2.5rem', background: 'var(--bg)', borderRadius: '14px', border: '1px solid var(--border2)', padding: '1.5rem', gap: '1.25rem' }}>
            {[
              { title: 'Live camera', body: 'Default for mobile users with permission granted.' },
              { title: 'File upload fallback', body: 'Permission denied or no rear camera: same 2-photo schema.' },
              { title: 'WhatsApp later', body: 'Customer overwhelmed: opt out, send photos to Mona, order continues.' },
            ].map((b, i) => (
              <div key={b.title} style={{ borderLeft: i === 0 ? `2px solid ${mauve}` : '2px solid var(--border)', paddingLeft: '1rem' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>{b.title}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.6 }}>{b.body}</div>
              </div>
            ))}
          </div>

          {/* After launch: adoption + the iPhone upload fix */}
          <div className="reveal nbm-split" style={{ marginTop: '2.5rem' }}>
            <div style={{ background: mauveGlow, border: `1px solid ${mauveDark}`, borderRadius: '14px', padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: mauve, marginBottom: '0.75rem' }}>After launch</div>
              <div style={{ fontSize: '2.6rem', fontWeight: 700, color: mauve, lineHeight: 1 }}>100%</div>
              <div style={{ fontSize: '0.85rem', marginTop: '0.6rem', lineHeight: 1.55 }}>of orders so far were sized with the live camera. Nobody needed the fallbacks.</div>
            </div>
            <div style={{ background: 'var(--bg)', border: '1px solid var(--border2)', borderRadius: '14px', padding: '1.75rem' }}>
              <div style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: mauve, marginBottom: '0.75rem' }}>The bug real users found</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.6rem' }}>&ldquo;Stuck on Submitting&hellip;&rdquo; on iPhone Chrome</div>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>
                Customers on iPhone Chrome waited about a minute after taking their photos. Server logs showed
                the server handled the upload in under half a second, so the delay was on the phone. The cause:
                the page was still holding the camera on the review screen, and iOS slows uploads while capture
                is active. Releasing the camera as soon as the last photo is taken brought the upload from
                <strong style={{ color: 'var(--fg)' }}> ~66 seconds to ~3 seconds</strong>. Errors now show inline
                with an &ldquo;upload from my gallery instead&rdquo; link, rather than a silent spinner.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── 13. ADMIN DASHBOARD ─────────────────────────── */}
      <div className="cs-section">
        <div className="inner-wide">
          <div className="section-tag reveal">Admin Dashboard · for Mona</div>
          <h2 className="cs-h2 reveal">Mona runs the whole business<br /><em>from one screen.</em></h2>
          <p className="cs-body reveal" style={{ maxWidth: '720px' }}>
            Built on Filament v4, a Laravel admin framework. Every resource was scoped to Mona&apos;s actual
            workflow: morning glance at orders needing attention, one-tap WhatsApp prefills, a payment-age
            SLA badge that turns red after 24 hours, bulk-confirm for the overnight stack. No training
            documentation needed.
          </p>

          <div className="cs-g2 reveal" style={{ marginTop: '3rem', gap: '1.25rem' }}>
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
            <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: mauve }}>Production hardening: things that aren&apos;t visible but matter</div>
            <div className="nbm-cards" style={{ padding: '1.5rem', gap: '1.5rem' }}>
              {[
                ['Bag-tampering closed', 'Cart prices re-fetched server-side by slug at order creation. A customer setting localStorage `price_pkr: 1` cannot place a Bridal Trio for Rs. 1.'],
                ['Race-safe order numbers', '`Order::generateOrderNumber()` wraps in `DB::transaction` + `lockForUpdate` + 5-retry on unique-violation. Soft-deletes use `withTrashed()` checks.'],
                ['Private file storage', 'Payment proofs + sizing photos on the `local` disk, never web-accessible. Only readable via an auth-gated admin route with path-traversal guards.'],
                ['Order-page authorisation', 'Confirm/track URLs use UUID, not integer ID. A session allowlist controls access. UUID alone is not enough.'],
                ['Pakistan-phone normalisation', '`+92 300…`, `0300…`, `923…` all resolve to the same customer for returning-customer lookup.'],
                ['Queued notifications', 'All admin notifications `implements ShouldQueue`, so they never block the request thread.'],
                ['Cloudflare in front', 'Static files served from the edge in well under a second instead of 1.5–2 s from Singapore. Real visitor IPs restored so per-route rate limits on checkout and uploads hit the right person.'],
                ['Backups + server lockdown', 'Nightly database dump on the server plus a weekly off-site copy. SSH key-only, firewall, fail2ban and security headers after logs showed thousands of password attempts a day.'],
                ['Automated test suite', 'Feature tests cover every checkout path (tampered prices, returning customers, custom links, photo upload) and every admin page. Run before each deploy.'],
                ['Spam guard on the contact form', 'Honeypot field, timer token, fixed subject list and a duplicate filter. Invisible to real customers, no CAPTCHA.'],
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

      {/* ── 14. AFTER LAUNCH: DATA-DRIVEN REDESIGN ───────── */}
      <div className="cs-section alt">
        <div className="inner-wide">
          <div className="section-tag reveal">After launch · what real usage changed</div>
          <h2 className="cs-h2 reveal">The visitor who arrived<br /><em>wasn&apos;t the one I designed for.</em></h2>
          <p className="cs-body reveal" style={{ maxWidth: '720px' }}>
            The personas assumed someone researching press-ons: reading about fit, comparing brands,
            taking her time. Analytics and Clarity recordings told a different story. Most visitors came
            from Instagram ads, browsing inside Instagram&apos;s in-app browser on a phone, and left the home page
            within seconds having scrolled only a fraction of it.
          </p>

          <div className="reveal nbm-stats" style={{ marginTop: '2rem' }}>
            {[
              { stat: '~60%', label: 'of visitors came from Instagram ads' },
              { stat: '~80%', label: 'browsed in Instagram’s in-app browser' },
              { stat: '~6 s', label: 'spent on the home page' },
              { stat: '~12%', label: 'of the home page scrolled' },
            ].map((s) => (
              <div key={s.label} style={{ background: 'var(--bg)', borderRadius: '14px', border: '1px solid var(--border2)', padding: '1.4rem 1.25rem' }}>
                <div style={{ fontSize: '1.9rem', fontWeight: 700, color: mauve, lineHeight: 1 }}>{s.stat}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '0.5rem', lineHeight: 1.5 }}>{s.label}</div>
              </div>
            ))}
          </div>

          <p className="cs-body reveal" style={{ maxWidth: '720px', marginTop: '2rem' }}>
            On a phone, the first design and its first price sat about four screens down. The average ad
            visitor scrolled about two, so <strong>most people saw no nails and no prices</strong>. She tapped
            a Reel of a design she liked; in the first five seconds she needs to know: is this the thing from
            the ad, how much is it, will it fit, and can I trust this shop? The old page answered those in the
            reverse order.
          </p>

          {/* Before / after: desktop home */}
          <div className="reveal nbm-pair" style={{ marginTop: '2.5rem' }}>
            {[
              { src: '/nbm-home-before.jpg', label: 'Before', sub: 'Frosted card covers the nails. Trust strip and sizing explainer come before any product.' },
              { src: '/nbm-home-after.jpg', label: 'After', sub: 'Photo uncovered, “Sets from Rs. 2,000” in the hero, eight designs with prices straight after.' },
            ].map((f) => (
              <figure key={f.src} style={{ margin: 0, background: 'var(--bg2)', borderRadius: '14px', border: '1px solid var(--border2)', overflow: 'hidden' }}>
                <Image src={f.src} alt={`Nails by Mona home page, ${f.label.toLowerCase()} the redesign`} width={1440} height={2000} loading="lazy" style={{ width: '100%', height: 'auto', display: 'block', borderBottom: '1px solid var(--border)' }} />
                <figcaption style={{ padding: '1rem 1.25rem' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: f.label === 'After' ? mauve : 'var(--fg)' }}>{f.label}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '0.25rem', lineHeight: 1.55 }}>{f.sub}</div>
                </figcaption>
              </figure>
            ))}
          </div>

          <h3 className="reveal" style={{ fontSize: '1.05rem', fontWeight: 600, marginTop: '3rem', marginBottom: '1rem' }}>What changed</h3>
          <div className="reveal nbm-cards">
            {[
              { t: 'Home: product in the first screen', b: 'Compact hero with the photo uncovered and a starting price, then a two-column grid of designs with prices and quick Add to bag. Fit, price-vs-salon and trust each got one short block, in the order the objections come up. Half the length.' },
              { t: 'Product page: buy button up front', b: 'Add to bag moved directly under the price, above the description, with four short buy facts beside it. On phones, a sticky price-and-button bar appears whenever the main button scrolls away.' },
              { t: 'Shop: search + one sticky toolbar', b: 'A search box that understands local spellings (mehndi/mehendi, walima/valima, shaadi → bridal), sort, and every category as visible pills. Hidden categories in a sideways-scrolling row weren’t being discovered.' },
              { t: 'Search on every page', b: 'Full-screen on phones, a dropdown on desktop. Shows matching designs with prices plus relevant guides, and offers a custom set over WhatsApp when nothing matches.' },
            ].map((c) => (
              <div key={c.t} style={{ background: 'var(--bg)', borderRadius: '14px', border: '1px solid var(--border2)', padding: '1.4rem 1.5rem' }}>
                <div style={{ fontSize: '0.92rem', fontWeight: 600, marginBottom: '0.5rem' }}>{c.t}</div>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{c.b}</p>
              </div>
            ))}
          </div>

          {/* Phone first screens */}
          <div className="reveal" style={{ marginTop: '3rem' }}>
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: mauve, marginBottom: '1rem', textAlign: 'center' }}>The first phone screen, after the redesign</div>
            <div className="nbm-phones">
              {[
                { src: '/nbm-phone-home.jpg', label: 'Home' },
                { src: '/nbm-phone-shop.jpg', label: 'Shop' },
                { src: '/nbm-phone-product.jpg', label: 'Product' },
              ].map((p) => (
                <figure key={p.src} style={{ margin: 0, textAlign: 'center' }}>
                  <Image src={p.src} alt={`Nails by Mona ${p.label.toLowerCase()} page on a phone`} width={780} height={1688} loading="lazy" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '18px', border: '1px solid var(--border2)' }} />
                  <figcaption style={{ fontSize: '0.72rem', color: 'var(--muted)', marginTop: '0.6rem', letterSpacing: '0.06em' }}>{p.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── 15. ITERATING WITH THE CLIENT ────────────────── */}
      <div className="cs-section">
        <div className="inner-wide">
          <div className="section-tag reveal">Iterating with Mona</div>
          <h2 className="cs-h2 reveal">Running the business on it<br /><em>showed what the plan missed.</em></h2>
          <p className="cs-body reveal" style={{ maxWidth: '720px' }}>
            Once Mona was handling real orders every day, her feedback became the best usability test.
            Each change below came from something that slowed her down or confused a customer.
          </p>

          <div className="reveal nbm-cards" style={{ marginTop: '2.5rem' }}>
            {[
              { t: 'Custom order links', pain: 'Designs agreed in Instagram DMs were invisible to the system', b: 'Mona creates a private link from the admin with the agreed sets and price. The customer sizes and pays through the normal checkout, so custom orders show up in revenue, tracking and saved sizing like any other order.' },
              { t: 'Full payment up front', pain: 'Chasing a second payment by email', b: 'Every set is made to measure and can’t be resold, and many customers never read the balance-due email. The advance-then-balance flow was replaced with one payment before production. Older orders keep their original terms.' },
              { t: 'Payment methods on/off', pain: 'No way to hide a method without deleting its details', b: 'Each payment method has a “Show on checkout” switch. The checkout, the order rules on the server and every line of payment copy on the site follow whatever is switched on.' },
              { t: 'Fewer manual messages', pain: 'A WhatsApp message for every order stage', b: 'Per-stage WhatsApp prompts were built, then trimmed back at Mona’s request. Emails are the automatic channel; WhatsApp stays as an optional button.' },
              { t: 'Honest bridal offer', pain: 'Claims the business couldn’t back yet', b: 'One flat Rs. 10,000 Trio with real wedding photos, each night linked to its real set. A price comparison that no longer matched the shop and packaging that wasn’t ready yet were removed.' },
              { t: 'Admin that keeps up', pain: 'Missing new payment proofs', b: 'A bell and push notification when a customer uploads a payment proof, whole rows tappable on a phone, and a faster dashboard that no longer refreshes every few seconds.' },
            ].map((c) => (
              <div key={c.t} style={{ background: 'var(--bg2)', borderRadius: '14px', border: '1px solid var(--border2)', padding: '1.4rem 1.5rem' }}>
                <div style={{ fontSize: '0.92rem', fontWeight: 600, marginBottom: '0.35rem' }}>{c.t}</div>
                <div style={{ fontSize: '0.72rem', color: '#e8b4a8', marginBottom: '0.6rem' }}>Pain: {c.pain}</div>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{c.b}</p>
              </div>
            ))}
          </div>

          <p className="cs-body reveal" style={{ maxWidth: '720px', marginTop: '2rem' }}>
            In parallel: a speed pass (photos resized into phone-sized versions, self-hosted fonts, analytics
            loaded after the page), SEO work (unique product titles, product details, Google Merchant Center
            feed, old product links redirected instead of 404ing) and a site-wide consistency pass on copy,
            colour and icons.
          </p>
        </div>
      </div>

      {/* ── 16. RESULTS ─────────────────────────────────── */}
      <div className="cs-section alt">
        <div className="inner">
          <div className="section-tag reveal">Results so far</div>
          <h2 className="cs-h2 reveal">Measured, then improved.<br /><em>Before and after.</em></h2>
          <p className="cs-body reveal">
            Approximate figures from Lighthouse, Search Console, server logs and on-device tests,
            comparing the launch version with today&apos;s site.
          </p>

          <div style={{ marginTop: '2.5rem', borderRadius: '16px', border: '1px solid var(--border2)', overflow: 'hidden' }} className="reveal">
            <div className="nbm-row" style={{ padding: '0.85rem 1.5rem', background: 'var(--bg)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>
              <div>Measure</div><div>At launch</div><div style={{ color: mauve }}>Now</div>
            </div>
            {[
              { m: 'Home page length on a phone', before: '~18 screens', after: '~8 screens' },
              { m: 'First design + price on the phone home page', before: '~4 screens down', after: 'First screen' },
              { m: 'Add to bag on a phone product page', before: '~1.5 screens down', after: 'First screen + sticky bar' },
              { m: 'Mobile PageSpeed score (home)', before: '~67', after: '~80 (desktop ~99)' },
              { m: 'Shop page download on a phone', before: '~20 MB', after: '~1 MB' },
              { m: 'Sizing photo upload, iPhone Chrome', before: '~66 s', after: '~3 s' },
              { m: 'Pages indexed by Google', before: '~20', after: '~40' },
              { m: 'Orders sized with the live camera', before: 'Untested', after: '100%' },
            ].map((row, i) => (
              <div key={row.m} className="nbm-row" style={{ background: i % 2 === 0 ? 'var(--bg2)' : 'transparent', borderTop: '1px solid var(--border)' }}>
                <div style={{ color: 'var(--fg)' }}>{row.m}</div>
                <div style={{ color: 'var(--muted)' }}>{row.before}</div>
                <div style={{ color: mauve, fontWeight: 500 }}>{row.after}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 17. REFLECTION + CTA ────────────────────────── */}
      <div className="cs-section">
        <div className="inner" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div className="section-tag reveal" style={{ textAlign: 'center' }}>Reflection</div>
          <h2 className="cs-h2 reveal" style={{ textAlign: 'center' }}>Launch wasn&apos;t the finish line.<br /><em>It was the first real research.</em></h2>
          <p className="cs-body reveal" style={{ textAlign: 'center' }}>
            I&apos;m still proud of the discipline of what we deliberately did not build. No &ldquo;Order Now&rdquo; buttons,
            no AI chatbot, no founder face, no payment gateway at launch. Each &ldquo;no&rdquo; was a decision, not an
            oversight, and it kept a one-woman studio able to ship.
          </p>
          <p className="cs-body reveal" style={{ textAlign: 'center' }}>
            The risk I worried about most turned out fine: every order so far has used the live camera, so
            the sizing wedge holds. What I got wrong was the visitor. Personas built from research described
            a careful shopper; the data showed someone arriving from an ad with a thumb on the back button.
            The biggest improvements came from watching real behaviour and from listening to the person
            running the business, not from the original plan.
          </p>
          <p className="cs-body reveal" style={{ textAlign: 'center' }}>
            Next: real customer reviews with photos, category landing pages for the designs people search
            for most, and a usability test of the new home page with first-time visitors.
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
