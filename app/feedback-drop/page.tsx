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

  const fdPurple = '#6D28D9';
  const fdPurpleLight = '#8B5CF6';
  const sectionAlt = { background: 'var(--bg2)' };

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>
      <Nav variant="case-study" />

      {/* ── 1. HERO ─────────────────────────────────────── */}
      <section className="cs-hero" style={{ background: 'linear-gradient(135deg, #0e0e0e 0%, #130e24 100%)' }}>
        <div className="cs-hero-left">
          <div className="cs-pill" style={{ borderColor: 'rgba(109,40,217,0.4)', color: '#a78bfa' }}>
            Self-initiated · UX &amp; UI · 2026
          </div>
          <h1>
            FeedbackDrop &mdash;<br />
            <em>Customer feedback,</em><br />
            prioritized
          </h1>
          <p className="cs-hero-desc">
            Designing a focused feedback board for SaaS teams — from competitive research and user
            personas through to a complete high-fidelity UI system, grounded in real PM workflows.
          </p>
          <div className="meta-chips">
            <span className="chip highlight">UX Research</span>
            <span className="chip highlight">UI Design</span>
            <span className="chip">Web App</span>
            <span className="chip">Figma</span>
            <span className="chip">2026</span>
          </div>
        </div>
        <div className="cs-hero-right">
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '-40px', background: 'radial-gradient(circle, rgba(109,40,217,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/fd-dashboard.png" alt="FeedbackDrop dashboard" style={{ width: '100%', maxWidth: '560px', borderRadius: '12px', border: '1px solid rgba(109,40,217,0.3)', boxShadow: '0 32px 80px rgba(0,0,0,0.55)', position: 'relative', zIndex: 1 }} />
          </div>
        </div>
      </section>

      {/* ── 2. OVERVIEW ─────────────────────────────────── */}
      <div className="cs-section alt">
        <div className="inner-wide">
          <div className="ov-grid reveal">
            <div className="ov-card"><div className="ov-label">My Role</div><div className="ov-val">Solo UX &amp; UI Designer</div></div>
            <div className="ov-card"><div className="ov-label">Duration</div><div className="ov-val">Full design process · 2026</div></div>
            <div className="ov-card"><div className="ov-label">Tools</div><div className="ov-val">Figma · FigJam · Pencil</div></div>
            <div className="ov-card"><div className="ov-label">Platform</div><div className="ov-val">Web App · Desktop 1440px</div></div>
          </div>
          <div className="inner" style={{ marginTop: '3rem' }}>
            <div className="section-tag reveal">The Problem</div>
            <h2 className="cs-h2 reveal">Feedback is <em>everywhere</em> — and nowhere</h2>
            <p className="cs-body reveal">
              Product managers and founders at early-stage SaaS companies (5–30 people) track customer
              feedback across Slack threads, spreadsheets, emails, and sticky notes. Feature requests get
              lost, duplicates pile up, and there&apos;s no way to see which requests have the most demand.
              By the time they build something, they&apos;ve often built the wrong thing.
            </p>
            <p className="cs-body reveal">
              Enterprise tools like Canny ($399/mo for useful features) and UserVoice ($1,333/mo) are
              overkill and overpriced. Simple tools like Nolt and Fider have outdated UIs, no analytics
              dashboard, and no way to close the feedback loop. There&apos;s a clear gap in the $15–50/mo range
              for a modern, focused tool that&apos;s powerful enough to prioritise but simple enough to set up
              in 5 minutes.
            </p>
          </div>
        </div>
      </div>

      {/* ── 3. RESEARCH ─────────────────────────────────── */}
      <div className="cs-section">
        <div className="inner-wide">
          <div className="section-tag reveal">Research</div>
          <h2 className="cs-h2 reveal">Understanding the <em>market</em></h2>
          <p className="cs-body reveal" style={{ maxWidth: '680px' }}>
            Before opening Figma I audited four direct and indirect competitors to find specific UX
            failures and pricing gaps the product could exploit.
          </p>

          {/* Market data */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem', marginTop: '2.5rem', marginBottom: '3rem' }} className="reveal">
            {[
              { num: '22%', label: 'Higher retention for companies that invest in customer experience (Zendesk 2025)' },
              { num: '81%', label: 'Of workers prioritise employers who support feedback-driven development' },
              { num: '$399', label: 'Monthly cost before Canny unlocks "real" features — the pricing gap FeedbackDrop fills' },
            ].map((s) => (
              <div key={s.num} style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '2rem', color: '#a78bfa', lineHeight: 1, marginBottom: '0.6rem' }}>{s.num}</div>
                <div style={{ fontSize: '0.74rem', color: 'var(--muted)', lineHeight: 1.7 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Competitive audit */}
          <h3 style={{ fontSize: '0.9rem', fontWeight: 500, marginBottom: '1.25rem', marginTop: '0.5rem' }} className="reveal">Competitive audit</h3>
          <div className="comp-grid reveal">
            {[
              { name: 'Canny', type: 'Enterprise · San Francisco', strengths: ['AI duplicate detection, revenue impact scoring', 'Roadmap + changelog features'], weaknesses: ['Massive price jump $79→$399/mo', 'Complex onboarding, not intuitive'] },
              { name: 'Featurebase', type: 'All-in-one · Estonia', strengths: ['Best free tier, modern UI', 'AI search + deduplication'], weaknesses: ['Tries to do too much (support + feedback)', 'Per-seat pricing adds up fast'] },
              { name: 'Nolt', type: 'Lightweight board', strengths: ['Clean minimal design, 5.0 G2 rating', 'SSO included on first plan'], weaknesses: ['No analytics dashboard at all', 'Outdated UI, barely any updates shipped'] },
              { name: 'Fider', type: 'Open-source · self-hosted', strengths: ['Full data ownership, simple voting', 'Free self-host option'], weaknesses: ['No roadmap, changelog, or analytics', 'No email notifications to close the loop'] },
            ].map((c) => (
              <div key={c.name} className="comp-card">
                <div className="comp-name">{c.name}</div>
                <div className="comp-type">{c.type}</div>
                <div className="comp-sec comp-good">Strengths</div>
                {c.strengths.map((s) => <div key={s} className="comp-item">{s}</div>)}
                <div className="comp-sec comp-bad">Weaknesses</div>
                {c.weaknesses.map((w) => <div key={w} className="comp-item">{w}</div>)}
              </div>
            ))}
          </div>

          {/* Design gaps */}
          <div className="gaps-row reveal" style={{ marginTop: '2rem' }}>
            <div className="gap-box">
              <div className="gap-title gap-t">Design gaps identified</div>
              <div className="gap-item">No competitor has a real admin dashboard — Nolt and Fider have none, Canny&apos;s is cluttered</div>
              <div className="gap-item">Feedback-to-action loop is broken — collecting is easy, knowing what to build next is the hard part</div>
              <div className="gap-item">Onboarding is always too slow — none can get a PM from signup to first feedback in under 5 min</div>
              <div className="gap-item">Public boards look generic — no tool lets you make it feel like part of your own product</div>
            </div>
            <div className="opp-box">
              <div className="gap-title opp-t">Opportunities for FeedbackDrop</div>
              <div className="gap-item">Own the &quot;best admin dashboard&quot; position — make data-driven prioritisation fast</div>
              <div className="gap-item">Close the loop automatically — status changes notify voters, no manual follow-up</div>
              <div className="gap-item">5-minute onboarding as a core feature, not an afterthought</div>
              <div className="gap-item">White-label board — customer&apos;s brand first, &quot;Powered by FeedbackDrop&quot; footer only</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 4. PERSONAS ─────────────────────────────────── */}
      <div className="cs-section alt">
        <div className="inner">
          <div className="section-tag reveal">User Personas</div>
          <h2 className="cs-h2 reveal">Two users, <em>one product</em></h2>
          <p className="cs-body reveal">
            FeedbackDrop serves two completely different people simultaneously — the admin managing
            the product, and the end user submitting ideas. I created a primary and secondary persona
            to keep both in view throughout every design decision.
          </p>

          {/* Lisa */}
          <div className="persona-card reveal">
            <div className="persona-head">
              <div className="persona-avatar" style={{ background: 'linear-gradient(135deg, #6D28D9 0%, #4c1d95 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', fontFamily: 'var(--serif)', color: '#ede9fe' }}>L</div>
              <div>
                <div className="persona-name">Lisa Richter</div>
                <div className="persona-sub">Primary persona — Admin / Product Manager</div>
                <div>
                  <span className="persona-tag">32 years old</span>
                  <span className="persona-tag">Product Manager</span>
                  <span className="persona-tag">B2B SaaS startup</span>
                  <span className="persona-tag">Berlin, DE</span>
                  <span className="persona-tag">Team of 18</span>
                </div>
              </div>
            </div>
            <div className="persona-body">
              <div className="p-col">
                <div className="p-col-title p-goal">Goals</div>
                <div className="p-item"><div className="dot-g"></div><span>See all feedback in one place, not scattered across tools</span></div>
                <div className="p-item"><div className="dot-g"></div><span>Know which requests have the most business impact</span></div>
                <div className="p-item"><div className="dot-g"></div><span>Close the loop — tell users when their request ships</span></div>
                <div className="p-item"><div className="dot-g"></div><span>Justify roadmap decisions to stakeholders with data</span></div>
              </div>
              <div className="p-col">
                <div className="p-col-title p-frust">Frustrations</div>
                <div className="p-item"><div className="dot-r"></div><span>Duplicate requests from different channels look like separate items</span></div>
                <div className="p-item"><div className="dot-r"></div><span>No way to see which paying customers want what</span></div>
                <div className="p-item"><div className="dot-r"></div><span>Enterprise tools are too expensive and too complex</span></div>
                <div className="p-item"><div className="dot-r"></div><span>Users never know the status of their requests</span></div>
              </div>
            </div>
            <div className="persona-quote">
              <p>&ldquo;I have feedback scattered across 4 tools and my own memory. Every quarter I spend a full week just trying to figure out what to build next — and I&apos;m still not confident I picked right.&rdquo;</p>
              <span>— Lisa, user persona</span>
            </div>
          </div>

          {/* Jake */}
          <div className="persona-card reveal" style={{ marginTop: '2rem' }}>
            <div className="persona-head">
              <div className="persona-avatar" style={{ background: 'linear-gradient(135deg, #0e7490 0%, #164e63 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', fontFamily: 'var(--serif)', color: '#cffafe' }}>J</div>
              <div>
                <div className="persona-name">Jake Torres</div>
                <div className="persona-sub">Secondary persona — Solo Founder / End User</div>
                <div>
                  <span className="persona-tag">27 years old</span>
                  <span className="persona-tag">Solo Founder</span>
                  <span className="persona-tag">Indie SaaS</span>
                  <span className="persona-tag">Lisbon, PT</span>
                  <span className="persona-tag">~200 users</span>
                </div>
              </div>
            </div>
            <div className="persona-body">
              <div className="p-col">
                <div className="p-col-title p-goal">Goals</div>
                <div className="p-item"><div className="dot-g"></div><span>Give users a public place to suggest and vote on ideas</span></div>
                <div className="p-item"><div className="dot-g"></div><span>See what rises to the top without manual sorting</span></div>
                <div className="p-item"><div className="dot-g"></div><span>Set up in 5 minutes, not 5 days</span></div>
                <div className="p-item"><div className="dot-g"></div><span>Stay under $30/month</span></div>
              </div>
              <div className="p-col">
                <div className="p-col-title p-frust">Frustrations</div>
                <div className="p-item"><div className="dot-r"></div><span>Every tool wants him to be an enterprise</span></div>
                <div className="p-item"><div className="dot-r"></div><span>Too many features he&apos;ll never use</span></div>
                <div className="p-item"><div className="dot-r"></div><span>Existing boards look ugly and off-brand</span></div>
                <div className="p-item"><div className="dot-r"></div><span>No time to learn a complex dashboard</span></div>
              </div>
            </div>
            <div className="persona-quote">
              <p>&ldquo;My users DM me on Twitter with feature requests. I &apos;heart&apos; them and then forget. I need something so simple that I&apos;ll actually use it — not another tool I sign up for and abandon.&rdquo;</p>
              <span>— Jake, user persona</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── 5. EMPATHY MAPS ─────────────────────────────── */}
      <div className="cs-section">
        <div className="inner">
          <div className="section-tag reveal">Empathy Maps</div>
          <h2 className="cs-h2 reveal">Getting inside <em>their heads</em></h2>
          <p className="cs-body reveal">
            I mapped what each persona thinks, feels, says, and does to surface the emotional drivers
            behind their behaviour — not just the surface-level task list.
          </p>

          {/* Lisa empathy map */}
          <div style={{ marginTop: '2.5rem' }} className="reveal">
            <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#a78bfa', marginBottom: '1rem' }}>Lisa Richter — Product Manager</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}>
              {[
                { label: 'Thinks 💭', items: ['"Am I building the right thing?"', '"I need data to back my roadmap decisions"', '"There has to be a faster way to collect this"', '"Our competitors ship features users actually want"'] },
                { label: 'Feels 💡', items: ['Anxious about making the wrong product bet', 'Overwhelmed by feedback volume from 5+ channels', 'Frustrated that spreadsheets don\'t scale', 'Pressure from leadership to ship faster'] },
                { label: 'Says 🗣', items: ['"Let me check the spreadsheet"', '"I think someone already asked for that"', '"We don\'t have budget for Canny Growth"', '"I\'ll circle back on that feature request"'] },
                { label: 'Does ⚡', items: ['Copies Intercom messages into a Google Sheet', 'Runs quarterly surveys manually via Typeform', 'Ctrl+F through Slack to find feature requests', 'Manually emails users when their request ships'] },
              ].map((q) => (
                <div key={q.label} style={{ background: 'var(--bg)', padding: '1.5rem' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 500, color: 'var(--text)', marginBottom: '0.9rem', letterSpacing: '0.04em' }}>{q.label}</div>
                  {q.items.map((item) => (
                    <div key={item} style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '0.45rem', paddingLeft: '0.75rem', borderLeft: '1.5px solid var(--border2)' }}>{item}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Jake empathy map */}
          <div style={{ marginTop: '2.5rem' }} className="reveal">
            <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#67e8f9', marginBottom: '1rem' }}>Jake Torres — Solo Founder</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}>
              {[
                { label: 'Thinks 💭', items: ['"I should listen to users more systematically"', '"I can\'t afford enterprise pricing"', '"If it takes more than 10 minutes I\'ll abandon it"', '"My board should feel like part of my app"'] },
                { label: 'Feels 💡', items: ['Guilty about losing track of user requests', 'Excited when users care enough to give feedback', 'Sceptical that feedback tools are worth paying for', 'Stretched thin wearing every hat'] },
                { label: 'Says 🗣', items: ['"Just DM me the feature request"', '"I\'ll add it to my list" (the list doesn\'t exist)', '"That\'s on the roadmap" (there is no roadmap)', '"I should set up a proper feedback system"'] },
                { label: 'Does ⚡', items: ['Screenshots Twitter DMs into Apple Notes', 'Stars emails with feature requests', 'Builds whatever he personally finds interesting', 'Announces updates on Twitter, forgets who asked'] },
              ].map((q) => (
                <div key={q.label} style={{ background: 'var(--bg)', padding: '1.5rem' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 500, color: 'var(--text)', marginBottom: '0.9rem', letterSpacing: '0.04em' }}>{q.label}</div>
                  {q.items.map((item) => (
                    <div key={item} style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '0.45rem', paddingLeft: '0.75rem', borderLeft: '1.5px solid var(--border2)' }}>{item}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── 6. USER JOURNEY MAP ─────────────────────────── */}
      <div className="cs-section alt">
        <div className="inner-wide">
          <div className="section-tag reveal">User Journey Map</div>
          <h2 className="cs-h2 reveal">Lisa&apos;s <em>current state</em></h2>
          <p className="cs-body reveal" style={{ maxWidth: '680px' }}>
            I mapped Lisa&apos;s end-to-end feedback workflow to find exactly where the pain is worst.
            Every pain point became a direct design opportunity.
          </p>
          <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
            <table className="journey-table">
              <thead>
                <tr>
                  <th>Stage</th>
                  <th>1. Receive feedback</th>
                  <th>2. Log &amp; organise</th>
                  <th>3. Prioritise</th>
                  <th>4. Decide &amp; plan</th>
                  <th>5. Close the loop</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tasks</td>
                  <td>Check Intercom, Slack, email, sales notes</td>
                  <td>Copy into spreadsheet, tag, check duplicates</td>
                  <td>Count votes, weigh business goals, compare effort</td>
                  <td>Pick features for sprint, justify to stakeholders</td>
                  <td>Email users, update changelog</td>
                </tr>
                <tr>
                  <td>Emotion</td>
                  <td><span className="em-bad">😫 Overwhelmed</span><br /><span style={{ fontSize: '0.7rem' }}>Feedback everywhere</span></td>
                  <td><span className="em-bad">😤 Tedious</span><br /><span style={{ fontSize: '0.7rem' }}>Manual copy-paste</span></td>
                  <td><span className="em-mid">😟 Uncertain</span><br /><span style={{ fontSize: '0.7rem' }}>No confidence in data</span></td>
                  <td><span className="em-bad">😰 Anxious</span><br /><span style={{ fontSize: '0.7rem' }}>Gut feel, not data</span></td>
                  <td><span className="em-mid">😔 Guilty</span><br /><span style={{ fontSize: '0.7rem' }}>Forgets to follow up</span></td>
                </tr>
                <tr>
                  <td>Pain point</td>
                  <td>5+ channels to check daily</td>
                  <td>Duplicates pile up unseen</td>
                  <td>Votes ≠ business value</td>
                  <td>No data to show leadership</td>
                  <td>Users feel ignored</td>
                </tr>
                <tr>
                  <td>Opportunity</td>
                  <td><span className="opp-pill">Widget + integrations</span></td>
                  <td><span className="opp-pill">Auto-dedup + tagging</span></td>
                  <td><span className="opp-pill">Impact scoring</span></td>
                  <td><span className="opp-pill">Visual priority dashboard</span></td>
                  <td><span className="opp-pill">Auto-notify on status change</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── 7. HOW MIGHT WE ─────────────────────────────── */}
      <div className="cs-section">
        <div className="inner">
          <div className="section-tag reveal">How Might We</div>
          <h2 className="cs-h2 reveal">Framing the <em>design problems</em></h2>
          <p className="cs-body reveal">
            I converted the journey map pain points into HMW questions to reframe them as
            design opportunities before moving into ideation.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2.5rem' }} className="reveal">
            {[
              { n: '01', q: 'HMW help PMs see which feedback actually matters — not just which has the most votes?' },
              { n: '02', q: 'HMW make the feedback board feel like part of the customer\'s own product, not a third-party tool?' },
              { n: '03', q: 'HMW close the loop — so users who gave feedback know their voice was heard?' },
              { n: '04', q: 'HMW get a new user from signup to their first collected feedback in under 5 minutes?' },
            ].map((h) => (
              <div key={h.n} style={{ background: 'var(--bg2)', border: '1px solid var(--border2)', borderRadius: '12px', padding: '1.5rem', borderLeft: `3px solid ${fdPurple}` }}>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.14em', color: '#a78bfa', textTransform: 'uppercase', marginBottom: '0.6rem' }}>{h.n}</div>
                <p style={{ fontSize: '0.86rem', color: 'var(--text)', lineHeight: 1.75 }}>{h.q}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 8. MOSCOW ───────────────────────────────────── */}
      <div className="cs-section alt">
        <div className="inner">
          <div className="section-tag reveal">Feature Prioritization</div>
          <h2 className="cs-h2 reveal">MoSCoW — <em>scoping v1</em></h2>
          <p className="cs-body reveal">
            I used MoSCoW to decide what to design now versus defer. A focused scope
            demonstrates better product thinking than designing every edge case.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2.5rem' }} className="reveal">
            {[
              {
                label: 'Must have', color: '#a78bfa', bg: 'rgba(109,40,217,0.1)', items: [
                  'Feedback board with voting — public board where users submit and upvote ideas',
                  'Admin dashboard — trends, top requests, new submissions, feedback volume',
                  'Status workflow — Under review → Planned → In progress → Shipped → Closed',
                  'Category tags & filters — tag by type, filter and sort'
                ]
              },
              {
                label: 'Should have', color: '#6ee7b7', bg: 'rgba(16,185,129,0.08)', items: [
                  'Auto email notifications — notify voters when status changes',
                  'Embeddable widget — lightweight widget for customer products',
                  'Board customisation — custom colors, logo, domain'
                ]
              },
              {
                label: 'Could have', color: '#fbbf24', bg: 'rgba(245,158,11,0.08)', items: [
                  'Slack integration — notifications when new feedback arrives',
                  'Impact scoring — weight feedback by user plan or revenue, not just votes'
                ]
              },
              {
                label: "Won't have (v1)", color: 'var(--muted)', bg: 'var(--bg3)', items: [
                  'Public roadmap view — show planned features publicly (deferred to v2)'
                ]
              },
            ].map((m) => (
              <div key={m.label} style={{ background: m.bg, border: `1px solid ${m.color}33`, borderRadius: '12px', padding: '1.5rem' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: m.color, marginBottom: '1rem' }}>{m.label}</div>
                {m.items.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '0.6rem', marginBottom: '0.6rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: m.color, marginTop: '0.45rem', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.7 }}>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 9. INFORMATION ARCHITECTURE ─────────────────── */}
      <div className="cs-section">
        <div className="inner-wide">
          <div className="section-tag reveal">Information Architecture</div>
          <h2 className="cs-h2 reveal">Mapping the <em>structure</em></h2>
          <p className="cs-body reveal" style={{ maxWidth: '680px' }}>
            FeedbackDrop has two entry points — the authenticated admin panel (4 screens) and the
            unauthenticated public board (1 screen). I structured the IA before wireframing to
            make sure no screen was designed in isolation.
          </p>
          <div style={{ marginTop: '3rem' }} className="reveal">
            {/* IA diagram */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              {/* Admin panel */}
              <div style={{ flex: '1', minWidth: '280px' }}>
                <div style={{ background: `${fdPurple}22`, border: `1px solid ${fdPurple}44`, borderRadius: '10px', padding: '0.75rem 1rem', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#a78bfa', marginBottom: '0.75rem', textAlign: 'center' }}>Admin Panel (authenticated)</div>
                {[
                  { n: '01', name: 'Dashboard', items: ['Feedback volume + KPIs', 'Top requests by votes', 'Status breakdown chart', 'Feedback trend (12 months)', 'Recent activity feed'] },
                  { n: '02', name: 'Feedback Board', items: ['All items in list view', 'Filter by status / category', 'Sort: votes, date, comments', 'Search bar', 'Each item: vote, status, meta'] },
                  { n: '03', name: 'Detail View', items: ['Full title + description', 'Vote count + voter avatars', 'Comment thread + admin badges', 'Admin sidebar: status / category', 'Notification count'] },
                  { n: '04', name: 'Settings', items: ['Branding (name, color, domain)', 'Categories management', 'Widget embed code', 'Integrations (Slack, Linear)', 'Team management'] },
                ].map((screen) => (
                  <div key={screen.n} style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '10px', padding: '1rem', marginBottom: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                      <span style={{ fontSize: '0.6rem', color: '#a78bfa', fontWeight: 600, letterSpacing: '0.1em' }}>{screen.n}</span>
                      <span style={{ fontSize: '0.82rem', fontWeight: 500 }}>{screen.name}</span>
                    </div>
                    {screen.items.map((item) => (
                      <div key={item} style={{ fontSize: '0.7rem', color: 'var(--muted)', marginBottom: '0.25rem', paddingLeft: '0.75rem', borderLeft: '1.5px solid var(--border2)' }}>{item}</div>
                    ))}
                  </div>
                ))}
              </div>
              {/* Public board */}
              <div style={{ flex: '0 0 240px', minWidth: '220px' }}>
                <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.25)', borderRadius: '10px', padding: '0.75rem 1rem', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6ee7b7', marginBottom: '0.75rem', textAlign: 'center' }}>Public Board (unauthenticated)</div>
                <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '10px', padding: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                    <span style={{ fontSize: '0.6rem', color: '#6ee7b7', fontWeight: 600, letterSpacing: '0.1em' }}>05</span>
                    <span style={{ fontSize: '0.82rem', fontWeight: 500 }}>Public Feedback Board</span>
                  </div>
                  {['Branded header (customer logo + domain)', 'Hero title + description', 'Search bar', 'Sort tabs: Trending / New / Top', '"New Idea" CTA button', 'Feedback list with votes + status', '"Powered by FeedbackDrop" footer'].map((item) => (
                    <div key={item} style={{ fontSize: '0.7rem', color: 'var(--muted)', marginBottom: '0.25rem', paddingLeft: '0.75rem', borderLeft: '1.5px solid rgba(16,185,129,0.3)' }}>{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 10. USER FLOWS ──────────────────────────────── */}
      <div className="cs-section alt">
        <div className="inner">
          <div className="section-tag reveal">User Flows</div>
          <h2 className="cs-h2 reveal">How users <em>move</em> through the product</h2>
          <p className="cs-body reveal">I mapped three core flows to validate the IA and spot friction before building any UI.</p>
          <div className="decision-list reveal" style={{ marginTop: '2.5rem' }}>
            {[
              {
                n: '1', title: 'Lisa reviews and prioritises feedback (admin flow)',
                steps: ['Open app', 'Dashboard', 'Scan top requests', 'Feedback Board', 'Filter by category', 'Click request', 'Detail view', 'Review votes & comments', 'Change status → "Planned"', '42 voters auto-notified ✓']
              },
              {
                n: '2', title: 'End user submits feedback & votes (public flow)',
                steps: ['Visit board URL', 'Public board', 'Browse / search ideas', 'Idea exists? → Upvote', 'No match → "New Idea"', 'Submit form', 'Idea posted on board ✓']
              },
              {
                n: '3', title: 'Jake onboards FeedbackDrop (setup flow)',
                steps: ['Sign up', 'Onboarding', 'Name board + set brand colour', 'Add categories', 'Dashboard', 'Copy embed code', 'Live in under 5 minutes ✓']
              },
            ].map((flow) => (
              <div key={flow.n} className="decision">
                <div className="d-num">{flow.n}</div>
                <div style={{ flex: 1 }}>
                  <div className="d-title" style={{ marginBottom: '0.75rem' }}>{flow.title}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', alignItems: 'center' }}>
                    {flow.steps.map((step, i) => (
                      <span key={step} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <span style={{ background: 'var(--bg2)', border: '1px solid var(--border2)', borderRadius: '6px', padding: '0.2rem 0.55rem', fontSize: '0.72rem', color: step.includes('✓') ? '#6ee7b7' : 'var(--muted)', borderColor: step.includes('✓') ? 'rgba(110,231,183,0.3)' : undefined }}>{step}</span>
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

      {/* ── 11. DESIGN SYSTEM ───────────────────────────── */}
      <div className="cs-section">
        <div className="inner-wide">
          <div className="section-tag reveal">Design System</div>
          <h2 className="cs-h2 reveal">Building the <em>visual language</em></h2>
          <p className="cs-body reveal" style={{ maxWidth: '680px' }}>
            I built the design system before touching any screens so components could be created once
            and reused everywhere — ensuring visual consistency across all 5 views.
          </p>

          {/* Colors */}
          <div style={{ marginTop: '2.5rem' }} className="reveal">
            <h3 style={{ fontSize: '0.82rem', fontWeight: 500, marginBottom: '1.25rem' }}>Colour palette</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {[
                { name: 'Primary', hex: '#6D28D9', label: 'Buttons · active states · voted' },
                { name: 'Primary Light', hex: '#8B5CF6', label: 'Hover states · logo bg' },
                { name: 'Primary BG', hex: '#EDE9FE', label: 'Admin badges · light bg', dark: true },
                { name: 'Sidebar', hex: '#111827', label: 'Sidebar background' },
                { name: 'Surface', hex: '#F9FAFB', label: 'Page background', dark: true },
                { name: 'Text Primary', hex: '#111827', label: 'Headings · titles' },
                { name: 'Text Secondary', hex: '#6B7280', label: 'Descriptions · labels' },
                { name: 'Border', hex: '#E5E7EB', label: 'Card & input borders', dark: true },
              ].map((c) => (
                <div key={c.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', minWidth: '100px' }}>
                  <div style={{ width: '100%', height: '52px', background: c.hex, borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }} />
                  <div style={{ fontSize: '0.7rem', fontWeight: 500 }}>{c.name}</div>
                  <div style={{ fontSize: '0.62rem', color: 'var(--muted)', fontFamily: 'monospace' }}>{c.hex}</div>
                  <div style={{ fontSize: '0.62rem', color: 'var(--muted)' }}>{c.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Status pills */}
          <div style={{ marginTop: '2.5rem' }} className="reveal">
            <h3 style={{ fontSize: '0.82rem', fontWeight: 500, marginBottom: '1.25rem' }}>Status pills</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {[
                { label: 'Under review', bg: '#FEF3C7', color: '#92400E' },
                { label: 'Planned', bg: '#EDE9FE', color: '#6D28D9' },
                { label: 'In progress', bg: '#DBEAFE', color: '#1E40AF' },
                { label: 'Shipped', bg: '#D1FAE5', color: '#065F46' },
                { label: 'Closed', bg: '#F3F4F6', color: '#6B7280' },
              ].map((s) => (
                <div key={s.label} style={{ background: s.bg, color: s.color, fontSize: '0.68rem', fontWeight: 600, padding: '0.25rem 0.75rem', borderRadius: '100px', letterSpacing: '0.04em' }}>{s.label}</div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div style={{ marginTop: '2.5rem' }} className="reveal">
            <h3 style={{ fontSize: '0.82rem', fontWeight: 500, marginBottom: '1.25rem' }}>Typography scale <span style={{ color: 'var(--muted)', fontWeight: 400 }}>— Inter / Satoshi</span></h3>
            <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}>
              {[
                { style: 'Page title', size: '20px', weight: '500' },
                { style: 'Section heading', size: '18px', weight: '500' },
                { style: 'Card title', size: '15px', weight: '500' },
                { style: 'Item title', size: '14px', weight: '500' },
                { style: 'Body', size: '14px', weight: '400' },
                { style: 'Description', size: '13px', weight: '400' },
                { style: 'Meta', size: '12px', weight: '400' },
                { style: 'Pill / badge', size: '11px', weight: '500' },
              ].map((t, i) => (
                <div key={t.style} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.7rem 1.25rem', borderBottom: i < 7 ? '1px solid var(--border)' : 'none' }}>
                  <div style={{ fontSize: `${t.size}`, fontWeight: t.weight as 'normal' | 'bold', color: 'var(--text)' }}>{t.style}</div>
                  <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <span style={{ fontSize: '0.65rem', color: 'var(--muted)', fontFamily: 'monospace' }}>{t.size}</span>
                    <span style={{ fontSize: '0.65rem', color: 'var(--muted)', fontFamily: 'monospace' }}>w{t.weight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── 12. FINAL SCREENS ───────────────────────────── */}
      <div className="cs-section alt">
        <div className="inner-wide">
          <div className="section-tag reveal">Final Screens</div>
          <h2 className="cs-h2 reveal">Five views, <em>one product</em></h2>
          <p className="cs-body reveal" style={{ maxWidth: '680px' }}>
            All 5 screens built at 1440×900px. Each one maps directly to a section of the IA and
            solves a specific job from the user journey.
          </p>
          {[
            { n: '01', title: 'Dashboard', src: '/fd-dashboard.png', alt: 'FeedbackDrop dashboard', desc: "Lisa's home base. Four KPI metrics (total feedback, new this month, shipped, avg votes), top requests by votes with status pills, status breakdown bar chart, 12-month feedback trend, and a live activity feed — all on a single screen." },
            { n: '02', title: 'Feedback Board', src: '/fd-feedback.png', alt: 'FeedbackDrop feedback board', desc: 'Full list of all feedback. Status filter pills at top (Under review · 64, Planned · 36, In progress · 18, Shipped · 12), search bar, sort control. Vote-first layout — every item leads with the upvote count on the left.' },
            { n: '03', title: 'Detail View', src: '/fd-detail.png', alt: 'FeedbackDrop detail view', desc: 'Deep dive into a single request. Full description, 42 voter avatars, comment thread with admin badges. Right sidebar: status dropdown (with notification count "42 voters will be notified"), category, and metadata card.' },
            { n: '04', title: 'Public Board', src: '/fd-public.png', alt: 'FeedbackDrop public board', desc: "The customer-facing page. White-labelled with Acme App's brand identity — logo, name, custom subdomain feedback.acme.com. Purple hero header, search + sort tabs, 'New Idea' CTA, ranked feedback list. 'Powered by FeedbackDrop' footer is the only FD brand mark." },
            { n: '05', title: 'Settings', src: '/fd-settings.png', alt: 'FeedbackDrop settings', desc: "Admin configuration in a tabbed layout: Branding (name, description, brand color #6D28D9, custom domain with CNAME helper), Categories (chip management with + Add), Widget (embed <script> with copy button, toggle controls), Integrations (Slack connected, Linear + Intercom with Connect buttons)." },
          ].map((s) => (
            <div key={s.n} style={{ marginTop: '4rem' }} className="reveal">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
                <span style={{ fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '100px', padding: '0.2rem 0.75rem' }}>{s.n}</span>
                <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>{s.title}</span>
              </div>
              <p className="cs-body" style={{ marginBottom: '1.25rem', maxWidth: '680px' }}>{s.desc}</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.src} alt={s.alt} style={{ width: '100%', borderRadius: '12px', border: '1px solid var(--border2)', display: 'block' }} />
            </div>
          ))}
        </div>
      </div>

      {/* ── 13. DESIGN DECISIONS ────────────────────────── */}
      <div className="cs-section">
        <div className="inner">
          <div className="section-tag reveal">Design Decisions</div>
          <h2 className="cs-h2 reveal">Eight decisions with <em>rationale</em></h2>
          <p className="cs-body reveal">Every choice traces back to a research finding or a competitive gap.</p>
          <div className="decision-list reveal">
            {[
              { n: '1', title: 'Purple as primary colour', desc: 'Purple (#6D28D9) was chosen to differentiate from the blue-heavy SaaS landscape. Competitors Canny, Nolt, and Featurebase all use blue. Purple feels modern, premium, and stands out in product screenshots and case studies.' },
              { n: '2', title: 'Dark sidebar navigation', desc: 'A dark sidebar (#111827) creates clear visual separation between navigation and content. It mirrors patterns users are familiar with from Linear, Notion, and Slack — the exact tools our target users already live in daily.' },
              { n: '3', title: 'Vote-first layout on every feedback item', desc: "Every feedback item leads with the vote count on the left. This is intentional — the most important signal for prioritisation should be the first thing Lisa sees when scanning the list. The hierarchy Vote → Title → Status → Category → Meta was derived directly from the user journey pain point: 'I need to see what matters, fast.'" },
              { n: '4', title: 'Status pills with semantic colours', desc: 'Each status gets a distinct bg/text colour pair: amber for Under review (needs attention), purple for Planned (committed), blue for In progress (active work), green for Shipped (done), grey for Closed. These match intuitive associations so Lisa never has to read the text to understand status at a glance.' },
              { n: '5', title: 'Admin controls in a right sidebar (detail view)', desc: "On the detail view, admin controls (status and category dropdowns) sit in a right sidebar rather than inline. This keeps the feedback content clean and readable. The notification card 'X voters will be notified' reinforces the consequence — every status change closes the loop." },
              { n: '6', title: 'Public board as a branded experience', desc: "The public board uses the customer's brand colour in the header, not FeedbackDrop's purple. This directly addresses the competitive gap: 'no tool lets you make the board feel like part of your own product.' The 'Powered by FeedbackDrop' footer is subtle — it's the customer's space, not ours." },
              { n: '7', title: 'Settings with a ready-to-copy embed code', desc: "The settings page shows a ready-to-copy script tag because Jake needs to go from signup to live feedback in 5 minutes. Showing the exact code with a copy button removes friction — he doesn't need to read docs or find an API key." },
              { n: '8', title: 'Five screens, not fifteen', desc: 'We deliberately scoped to 5 screens instead of designing every edge case. This shows product thinking — knowing what to include in v1 and what to defer. The MoSCoW table backs every inclusion and exclusion decision.' },
            ].map((d) => (
              <div key={d.n} className="decision">
                <div className="d-num">{d.n}</div>
                <div>
                  <div className="d-title">{d.title}</div>
                  <div className="d-desc">{d.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 14. REFLECTION ──────────────────────────────── */}
      <div className="cs-section alt">
        <div className="inner">
          <div className="section-tag reveal">Reflection</div>
          <h2 className="cs-h2 reveal">What I <em>took away</em></h2>
          <div className="reflect-grid reveal" style={{ marginTop: '2.5rem' }}>
            <div className="reflect-card">
              <div className="d-title" style={{ marginBottom: '0.75rem', color: '#a78bfa' }}>✓ What went well</div>
              <div className="d-desc" style={{ lineHeight: 1.85 }}>
                Research-first approach shaped every decision — competitive gaps directly became our features. Keeping scope tight made the project focused and credible. The design system ensured consistency across all 5 screens — components were built once and reused everywhere.
              </div>
            </div>
            <div className="reflect-card">
              <div className="d-title" style={{ marginBottom: '0.75rem', color: '#6ee7b7' }}>★ What I learned</div>
              <div className="d-desc" style={{ lineHeight: 1.85 }}>
                Designing for B2B SaaS requires thinking about two users simultaneously — the public board and admin dashboard serve completely different needs. Competitive auditing revealed specific UX failures that became design opportunities. Scoping matters — a focused product demonstrates better thinking than an overscoped platform.
              </div>
            </div>
            <div className="reflect-card">
              <div className="d-title" style={{ marginBottom: '0.75rem', color: '#fbbf24' }}>↻ What I&apos;d do differently</div>
              <div className="d-desc" style={{ lineHeight: 1.85 }}>
                Run usability testing on the feedback submission flow — it&apos;s the highest-friction step for end users. Design the empty states — the first-time experience is critical for onboarding. Explore a mobile responsive version since PMs often check dashboards on their phones.
              </div>
            </div>
            <div className="reflect-card">
              <div className="d-title" style={{ marginBottom: '0.75rem', color: 'var(--muted)' }}>→ Next steps if continued</div>
              <div className="d-desc" style={{ lineHeight: 1.85 }}>
                Onboarding flow &amp; empty states · &quot;New idea&quot; submission modal · Mobile responsive layouts · Dark mode for admin panel · Notification preferences screen · Public roadmap view (v2)
              </div>
            </div>
          </div>

          {/* Key insight */}
          <div style={{ background: 'var(--bg)', border: '1px solid var(--border2)', borderLeft: `2.5px solid ${fdPurpleLight}`, borderRadius: '0 12px 12px 0', padding: '1.25rem 1.5rem', marginTop: '2.5rem' }} className="reveal">
            <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#a78bfa', marginBottom: '8px' }}>Key takeaway</div>
            <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--muted)', lineHeight: 1.75 }}>
              &ldquo;In B2B design, the best UX is often <strong style={{ color: 'var(--text)', fontWeight: 400 }}>invisible density</strong> — surfacing exactly the right information at the right moment, without the user feeling overwhelmed. The hardest part isn&apos;t adding features. It&apos;s deciding which 5 screens to build and which 15 to leave for v2.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* ── 15. NEXT CTA ────────────────────────────────── */}
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
