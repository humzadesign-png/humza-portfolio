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
  const mauveGlow = 'rgba(191,164,206,0.15)';

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>
      <Nav variant="case-study" />

      {/* ── 1. HERO ─────────────────────────────────────── */}
      <section className="cs-hero" style={{ background: 'linear-gradient(135deg, #120d0a 0%, #1c1020 60%, #0e0a14 100%)' }}>
        <div className="cs-hero-left">
          <div className="cs-pill" style={{ borderColor: 'rgba(191,164,206,0.4)', color: mauve }}>
            Client work · Web Design &amp; UX · 2026
          </div>
          <h1>
            Nails by Mona &mdash;<br />
            <em>From Instagram DMs</em><br />
            to a full digital service
          </h1>
          <p className="cs-hero-desc">
            Designing and building the complete e-commerce experience for a one-woman press-on nail studio
            in Mirpur, Pakistan — from early UX research through to a live production website with a
            custom admin dashboard.
          </p>
          <div className="meta-chips">
            <span className="chip highlight">UX Research</span>
            <span className="chip highlight">UI Design</span>
            <span className="chip highlight">Full-Stack Build</span>
            <span className="chip">Laravel</span>
            <span className="chip">Filament</span>
            <span className="chip">Tailwind CSS</span>
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
              alt="Nails by Mona homepage"
              width={1400}
              height={875}
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
            <div className="ov-card"><div className="ov-label">Duration</div><div className="ov-val">2 wks research · 11-day build</div></div>
            <div className="ov-card"><div className="ov-label">Stack</div><div className="ov-val">Laravel · Filament · Tailwind</div></div>
            <div className="ov-card"><div className="ov-label">Live</div><div className="ov-val"><a href="https://nailsbymona.pk" target="_blank" rel="noopener noreferrer" style={{ color: mauve, textDecoration: 'none' }}>nailsbymona.pk ↗</a></div></div>
          </div>

          <div className="inner" style={{ marginTop: '3rem' }}>
            <div className="section-tag reveal">The Brief</div>
            <h2 className="cs-h2 reveal">A business run entirely<br /><em>inside Instagram DMs</em></h2>
            <p className="cs-body reveal">
              Mona is a Fine Arts graduate running a handmade press-on nail studio out of her home in
              Mirpur, Azad Kashmir. With 1,000 followers, two years of word-of-mouth, and ~30 monthly
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

      {/* ── 3. RESEARCH ─────────────────────────────────── */}
      <div className="cs-section">
        <div className="inner">
          <div className="section-tag reveal">Research</div>
          <h2 className="cs-h2 reveal">Three women. Three completely<br /><em>different clocks.</em></h2>
          <p className="cs-body reveal">
            I synthesized three personas from competitor IG reviews, Mona&apos;s DM records, and market data
            on Pakistani working women. I picked personas with the most distinct <strong>trigger moments</strong>
            — not the most distinct demographics — because the trigger shapes the whole journey.
          </p>

          {/* Persona cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem', marginTop: '2.5rem' }} className="reveal">
            {[
              {
                name: 'Sana', age: '28 · Lahore', role: 'Marketing manager at a tech startup',
                trigger: 'Acrylic damage',
                quote: '"I love acrylics but my real nails are destroyed. I want something that looks salon-finished without the 3-hour trip."',
                job: 'Volume buyer — reorders every 4–6 weeks.',
                color: '#2a1f35',
              },
              {
                name: 'Hira', age: '26 · Karachi', role: 'Bride-to-be, wedding in 6 weeks',
                trigger: 'Wedding date',
                quote: '"I need three coordinated looks — Mehendi, Baraat, Valima — that I can trust completely."',
                job: 'Bridal buyer — single high-stakes purchase, high emotional investment.',
                color: '#1f2535',
              },
              {
                name: 'Ayesha', age: '31 · Rawalpindi', role: 'Teacher, practicing Muslim',
                trigger: 'Wudu conflict',
                quote: '"I can\'t wear regular polish — water can\'t reach my nail bed during ablution. Press-ons solve this exactly."',
                job: 'Values buyer — buys on fit with religious practice.',
                color: '#1f2e25',
              },
            ].map((p) => (
              <div key={p.name} style={{ background: p.color, borderRadius: '16px', border: '1px solid var(--border2)', padding: '1.75rem' }}>
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

          {/* Competitor context */}
          <div style={{ marginTop: '3rem', background: 'var(--bg2)', borderRadius: '16px', border: '1px solid var(--border2)', padding: '2rem' }} className="reveal">
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.25rem' }}>Competitive landscape</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
              {[
                { stat: '8', label: 'Pakistani competitors already running' },
                { stat: '4', label: 'brands at 20–43k followers (20–40× Mona\'s reach)' },
                { stat: '0', label: 'competitors demonstrating real custom fit' },
              ].map((s) => (
                <div key={s.stat} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 700, color: mauve, lineHeight: 1 }}>{s.stat}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--muted)', marginTop: '0.5rem' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── 4. KEY INSIGHTS ─────────────────────────────── */}
      <div className="cs-section alt">
        <div className="inner">
          <div className="section-tag reveal">5 Insights that shaped the design</div>
          <h2 className="cs-h2 reveal"><em>What we found</em> that nobody<br />else was saying</h2>

          {[
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
              body: 'A bride 4 weeks before her mehendi is a fundamentally different user from a working professional browsing on her commute. The Bridal Trio gets its own page, distinct photography style, a 4-week lead-time rule surfaced early, and a WhatsApp handoff for orders placed too close to the date.',
            },
            {
              n: '05',
              title: 'Pakistan-mobile is the design constraint, not a responsive afterthought.',
              body: 'A 3-year-old Android on patchy 4G, in landscape, in a salon waiting room. Lighthouse mobile ≥ 90 isn\'t a polish goal — it\'s a market-fit requirement. Every flow has a graceful degradation path. The live camera itself falls back to file upload, which falls back to "send via WhatsApp."',
            },
          ].map((ins) => (
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

      {/* ── 5. DESIGN DECISIONS ─────────────────────────── */}
      <div className="cs-section">
        <div className="inner">
          <div className="section-tag reveal">Three high-stakes design decisions</div>
          <h2 className="cs-h2 reveal">Deliberate choices — and what<br /><em>we rejected</em></h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginTop: '2.5rem' }}>

            {/* Decision 1 */}
            <div className="reveal" style={{ background: 'var(--bg2)', borderRadius: '16px', border: '1px solid var(--border2)', padding: '2rem', gridColumn: '1 / -1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: mauveGlow, border: `1px solid ${mauveDark}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', color: mauve, fontWeight: 600, flexShrink: 0 }}>01</div>
                <div style={{ fontSize: '1rem', fontWeight: 600 }}>Live camera over file upload</div>
              </div>
              <p className="cs-body" style={{ marginBottom: '1.25rem' }}>
                Built a guided live-camera capture as a 2-photo state machine (fingers row → thumb in a
                single permission session) with per-state SVG overlays, a green/red alignment heuristic, and
                an upload fallback — even though it cost 5–6 extra build days. Sizing is the most common DM
                question Mona gets. A guided camera turns the most error-prone moment into the most
                differentiated one.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <div style={{ background: 'rgba(191,164,206,0.08)', border: `1px solid ${mauveDark}`, borderRadius: '8px', padding: '0.5rem 0.9rem', fontSize: '0.78rem' }}>
                  <span style={{ color: mauve, marginRight: '0.4rem' }}>Target</span> ≥ 60% live-camera adoption by month 3
                </div>
                <div style={{ background: 'rgba(191,164,206,0.08)', border: `1px solid ${mauveDark}`, borderRadius: '8px', padding: '0.5rem 0.9rem', fontSize: '0.78rem' }}>
                  <span style={{ color: mauve, marginRight: '0.4rem' }}>Target</span> Refit rate ≤ 6% (industry avg ~15%)
                </div>
              </div>
            </div>

            {/* Decision 2 */}
            <div className="reveal" style={{ background: 'var(--bg2)', borderRadius: '16px', border: '1px solid var(--border2)', padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: mauveGlow, border: `1px solid ${mauveDark}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', color: mauve, fontWeight: 600, flexShrink: 0 }}>02</div>
                <div style={{ fontSize: '1rem', fontWeight: 600 }}>No founder face — anywhere</div>
              </div>
              <p className="cs-body">
                Mona is named publicly (About page, blog byline, packaging signature), but her face never
                appears on the website. Three reasons: DM spam from Pakistani micro-influencers with public
                faces; brand transferability if the business ever scales; and paradoxically, hand-only
                photography reads <em>more</em> premium than founder selfies.
              </p>
            </div>

            {/* Decision 3 */}
            <div className="reveal" style={{ background: 'var(--bg2)', borderRadius: '16px', border: '1px solid var(--border2)', padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: mauveGlow, border: `1px solid ${mauveDark}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', color: mauve, fontWeight: 600, flexShrink: 0 }}>03</div>
                <div style={{ fontSize: '1rem', fontWeight: 600 }}>Bag, not "Order Now"</div>
              </div>
              <p className="cs-body">
                The PDP CTA is "Add to bag." There is no "Order Now" button anywhere on the site. A bag
                drawer slides from the right, persists in localStorage, and feeds the multi-step checkout.
                This lets customers browse and accumulate without premature commitment — crucial for the
                Bridal Trio multi-item flow.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── 6. INFORMATION ARCHITECTURE ─────────────────── */}
      <div className="cs-section alt">
        <div className="inner">
          <div className="section-tag reveal">Information Architecture</div>
          <h2 className="cs-h2 reveal">13 pages. One nav.<br /><em>Every user served.</em></h2>
          <p className="cs-body reveal">
            The navigation was locked early: Shop · Bridal · About · Journal · Help. Five links, no mega-menu,
            no dropdowns. Every other page is reachable within two taps from the homepage.
          </p>

          {/* Public storefront */}
          <div style={{ marginTop: '2.5rem' }} className="reveal">
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: mauve, marginBottom: '1rem' }}>Public storefront</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
              {['Home', 'Shop', 'Product Detail', 'Bridal', 'About', 'Journal / Blog', 'Size Guide', 'Contact'].map((page) => (
                <div key={page} style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '10px', padding: '0.75rem 1rem', fontSize: '0.83rem', fontWeight: 500 }}>{page}</div>
              ))}
            </div>
          </div>

          {/* Order flow */}
          <div style={{ marginTop: '2rem' }} className="reveal">
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: mauve, marginBottom: '1rem' }}>Order flow (guest checkout, no accounts)</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['Sizing Capture', '→', 'Order Form', '→', 'Payment', '→', 'Confirmation', '→', 'Order Tracking'].map((step, i) => (
                step === '→'
                  ? <div key={i} style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>→</div>
                  : <div key={step} style={{ background: mauveGlow, border: `1px solid ${mauveDark}`, borderRadius: '10px', padding: '0.65rem 1rem', fontSize: '0.83rem', fontWeight: 500, color: mauve }}>{step}</div>
              ))}
            </div>
            <p className="cs-body" style={{ marginTop: '1rem' }}>
              No customer accounts at MVP. Returning customers are recognised by phone + email lookup,
              with saved sizing pre-filled and a 10% reorder discount surfaced immediately in the bag drawer.
            </p>
          </div>
        </div>
      </div>

      {/* ── 7. FINAL DESIGN ─────────────────────────────── */}
      <div className="cs-section">
        <div className="inner">
          <div className="section-tag reveal">Final Design</div>
          <h2 className="cs-h2 reveal">Live at <a href="https://nailsbymona.pk" target="_blank" rel="noopener noreferrer" style={{ color: mauve, textDecoration: 'none' }}>nailsbymona.pk</a></h2>
          <p className="cs-body reveal">
            The design system — "Artisanal Minimalist Editorial" — anchors everything in warm bone neutrals
            with lavender accents. Noto Serif for display headlines, Plus Jakarta Sans for body and UI.
            Hand-only photography as the sole imagery rule. Every page achieves Lighthouse mobile ≥ 90.
          </p>
        </div>

        {/* Hero mockup full width */}
        <div className="inner-wide" style={{ marginTop: '2.5rem' }}>
          <div className="reveal">
            <Image
              src="/nbm-hero.jpg"
              alt="Nails by Mona homepage design"
              width={1400}
              height={875}
              loading="lazy"
              style={{ width: '100%', height: 'auto', borderRadius: '16px', border: '1px solid var(--border2)', display: 'block' }}
            />
          </div>
        </div>

        {/* Page highlights */}
        <div className="inner" style={{ marginTop: '3rem' }}>
          {[
            {
              n: '01', title: 'Homepage',
              desc: 'Hero immediately names the two differentiators: custom-fit and wudu-friendly. The 4-step process section demystifies the order flow — critical for a new product category. Featured collection below the fold surfaces products without pushing purchase prematurely.',
            },
            {
              n: '02', title: 'Shop — tiered pricing, real filters',
              desc: 'Filter bar visible by default (not hidden behind a toggle). Four tiers: Everyday Rs. 1,800+, Signature Rs. 2,500+, Glamour Rs. 3,800+, Bridal Rs. 11,000+. Every product card shows the custom-sizing and free-refit trust badges.',
            },
            {
              n: '03', title: 'Bridal — its own emotional world',
              desc: 'Three coordinated sets for Mehendi, Baraat, and Valima. The "Order 4 weeks before mehendi" rule is in the hero copy. A comparison table shows press-ons vs. salon acrylics across cost, damage, custom fit, and stress. Orders placed with < 4 weeks lead time deflect to WhatsApp.',
            },
            {
              n: '04', title: 'Size Guide — the live camera flow',
              desc: 'Two close-up photos: fingers row + thumb, each with a coin for scale. The in-app camera shows real-time green/red alignment borders. A quality checklist runs per-photo. Graceful fallback to file upload if camera permission is denied. Third option: "send via WhatsApp later" — no dead ends.',
            },
            {
              n: '05', title: 'About — craft over founder',
              desc: 'The hero image is hands at work, not a face. Mona\'s Fine Arts background and faith story are present — her wudu origin story is told directly. Studio photos of tools and materials serve as non-fakeable trust signals.',
            },
          ].map((s) => (
            <div key={s.n} className="reveal" style={{ display: 'flex', gap: '1.75rem', padding: '2rem 0', borderBottom: '1px solid var(--border)' }}>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.12em', color: mauve, fontWeight: 600, paddingTop: '0.25rem', flexShrink: 0 }}>{s.n}</div>
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{s.title}</div>
                <p className="cs-body" style={{ marginBottom: 0 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Product photo */}
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
                Gel base, color layers, and topcoat applied by hand. Custom measurements read from coin-scale
                photos. A free first refit guarantee backs every order. The photography brief: hands only,
                never faces — disciplined brand identity disguised as aesthetic choice.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── 8. ADMIN DASHBOARD ──────────────────────────── */}
      <div className="cs-section alt">
        <div className="inner">
          <div className="section-tag reveal">Admin Dashboard</div>
          <h2 className="cs-h2 reveal">Mona runs the whole business<br /><em>from one screen.</em></h2>
          <p className="cs-body reveal">
            Built on Filament — a Laravel admin panel framework — the dashboard gives Mona complete control
            without needing technical knowledge. Designed to be usable on the first day, with no training required.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.25rem', marginTop: '2.5rem' }}>
            {[
              {
                icon: '📦',
                title: 'Order management',
                desc: 'Kanban view: New → Confirmed → In Production → Shipped → Delivered. One-click status updates trigger automated customer emails at each stage.',
              },
              {
                icon: '💅',
                title: 'Product & gallery',
                desc: 'Create and manage nail designs with tier pricing, stock status, and UGC photo moderation. Face photos in customer submissions are flagged for review before publishing.',
              },
              {
                icon: '📐',
                title: 'Sizing profile CRM',
                desc: 'Every customer\'s finger measurements saved by phone + email. Returning customers get pre-filled sizing and their -10% reorder discount automatically.',
              },
              {
                icon: '✍️',
                title: 'Blog & SEO content',
                desc: 'Full blog editor for Mona\'s content strategy — targeting wudu-friendly nail queries, bridal trends, and Pakistani beauty searches. Cornerstone posts built in from day one.',
              },
              {
                icon: '⚙️',
                title: 'Settings & brand',
                desc: 'WhatsApp number, payment account details, email templates, shipping rates, and branding all editable without touching code.',
              },
              {
                icon: '📊',
                title: 'Analytics snapshot',
                desc: 'Order volume by status, top products, sizing capture method breakdown (live camera vs. upload vs. WhatsApp), and monthly revenue — all on the home screen.',
              },
            ].map((f) => (
              <div key={f.title} className="reveal" style={{ background: 'var(--bg)', borderRadius: '14px', border: '1px solid var(--border2)', padding: '1.5rem' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{f.icon}</div>
                <div style={{ fontSize: '0.93rem', fontWeight: 600, marginBottom: '0.5rem' }}>{f.title}</div>
                <p style={{ fontSize: '0.83rem', color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 9. UX PRINCIPLES ────────────────────────────── */}
      <div className="cs-section">
        <div className="inner">
          <div className="section-tag reveal">10 UX Principles</div>
          <h2 className="cs-h2 reveal">Opinionated rules that<br /><em>resolve real trade-offs</em></h2>
          <p className="cs-body reveal">
            The project has 10 product-specific UX principles — each one names what we deliberately
            <em> don&apos;t</em> do. Generic principles (&ldquo;be consistent&rdquo;) are useless when a real decision splits
            a team. These are decision tools.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '0.75rem', marginTop: '2rem' }}>
            {[
              'Show the craft, never the maker\'s face.',
              'Bag, not "Order Now."',
              'The camera is the differentiator — make it feel safe, not scary.',
              'WhatsApp is help, not checkout.',
              'Bridal time-pressure is real — surface the 4-week rule everywhere.',
              'Returning customers get rewarded, not re-onboarded.',
              'Trust is earned with proof, not promises.',
              'Pakistan-mobile first, desktop second.',
              'Brand voice is warm, not chatty.',
              'When in doubt, route to a human.',
            ].map((p, i) => (
              <div key={i} className="reveal" style={{ display: 'flex', gap: '0.75rem', padding: '1rem 1.25rem', background: 'var(--bg2)', borderRadius: '10px', border: '1px solid var(--border)', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '0.62rem', color: mauve, fontWeight: 600, paddingTop: '0.15rem', flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ fontSize: '0.85rem', lineHeight: 1.5 }}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 10. OUTCOMES ────────────────────────────────── */}
      <div className="cs-section alt">
        <div className="inner">
          <div className="section-tag reveal">Outcomes to measure</div>
          <h2 className="cs-h2 reveal">The numbers that tell us<br /><em>whether the design landed</em></h2>
          <p className="cs-body reveal">
            The site launched recently. These are the 12-month targets — not Dribbble likes or Lighthouse
            scores, but the business metrics that the design decisions were built to move.
          </p>

          <div style={{ marginTop: '2.5rem', borderRadius: '16px', border: '1px solid var(--border2)', overflow: 'hidden' }} className="reveal">
            {[
              { metric: 'Organic search visitors / month', baseline: '0', target: '5,000–15,000' },
              { metric: 'Live-camera adoption (first-time orders)', baseline: 'n/a', target: '≥ 60%' },
              { metric: 'Refit-request rate', baseline: 'n/a (DM era)', target: '≤ 6%' },
              { metric: 'Repeat-customer rate', baseline: '~10% qualitative', target: '≥ 25%' },
              { metric: 'Bridal Trio share of revenue', baseline: '~0%', target: '25–35%' },
              { metric: 'Average order value', baseline: 'PKR ~2,200', target: 'PKR 2,800–3,500' },
            ].map((row, i) => (
              <div key={row.metric} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '1rem 1.5rem', background: i % 2 === 0 ? 'var(--bg2)' : 'transparent', borderBottom: '1px solid var(--border)', fontSize: '0.85rem' }}>
                <div style={{ color: 'var(--fg)' }}>{row.metric}</div>
                <div style={{ color: 'var(--muted)' }}>{row.baseline}</div>
                <div style={{ color: mauve, fontWeight: 500 }}>{row.target}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 11. REFLECTION ──────────────────────────────── */}
      <div className="cs-section">
        <div className="inner" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div className="section-tag reveal" style={{ textAlign: 'center' }}>Reflection</div>
          <h2 className="cs-h2 reveal" style={{ textAlign: 'center' }}>The thing I&apos;m most<br /><em>proud of isn&apos;t a screen.</em></h2>
          <p className="cs-body reveal" style={{ textAlign: 'center' }}>
            It&apos;s the discipline of what we deliberately did not build. No &ldquo;Order Now&rdquo; buttons, no AI chatbot,
            no founder face, no payment gateway at launch. Each &ldquo;no&rdquo; was a decision, not an oversight.
            Premature features are the enemy of a one-woman studio that needs to ship and survive.
          </p>
          <p className="cs-body reveal" style={{ textAlign: 'center' }}>
            The thing I&apos;m least certain about is live-camera adoption. The whole sizing differentiation
            rests on it. If only 20% of customers grant camera permission and the rest fall back to upload,
            we still ship a working product — but the wedge gets smaller. That&apos;s why
            <code style={{ background: 'var(--bg2)', padding: '0.1rem 0.4rem', borderRadius: '4px', fontSize: '0.8rem' }}>sizing_capture_method</code> is
            tracked in the schema from day one, and the first usability test is timed for the week before launch.
          </p>

          {/* CTA */}
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
