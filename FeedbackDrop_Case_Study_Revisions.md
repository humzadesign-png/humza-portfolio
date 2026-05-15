# FeedbackDrop — Case Study Revisions

These are drop-in replacements for 4 sections. Everything else stays as-is.

---

## REMOVE: Empathy Maps section

Delete the entire "Getting inside their heads" section (both empathy map grids for Lisa and Jake). The personas already communicate everything the empathy maps say — goals, frustrations, and quotes cover the same ground. Removing this section cuts visual repetition and keeps the reader moving toward the journey map faster.

---

## REPLACE: User Journey Map + How Might We (merge into one section)

Replace both the current "Lisa's current state" journey map section AND the separate "Framing the design problems" HMW section with this single combined section:

```
User Journey

## Mapping Lisa's *pain points*

I mapped Lisa's end-to-end feedback workflow to find where the pain is worst — then reframed each pain point as a design opportunity.

[Keep the exact same journey map table you have now — stages, tasks, emotion, pain point, opportunity rows]

These pain points became four design challenges that shaped every screen:

1. HMW help PMs see which feedback actually matters — not just which has the most votes?
2. HMW make the feedback board feel like part of the customer's own product?
3. HMW close the loop — so users who gave feedback know their voice was heard?
4. HMW get a new user from signup to first feedback in under 5 minutes?
```

This keeps the journey map (which is strong) and folds the HMW questions in as a natural conclusion — no separate section header needed.

---

## REPLACE: Feature Prioritization / MoSCoW section

Replace the full MoSCoW table with this shorter version:

```
Scoping v1

## Building *less* on purpose

Not every feature belongs in v1. I used MoSCoW prioritisation to scope FeedbackDrop to four core features — each one mapped to a specific pain point from the user journey.

[Show only the Must Have items as a simple 2×2 grid of cards:]

Feedback board with voting
Public board where users submit and upvote ideas. Solves: feedback is scattered.

Admin dashboard
Trends, top requests, volume at a glance. Solves: no way to see what matters.

Status workflow
Under review → Planned → In progress → Shipped → Closed. Solves: users feel ignored.

Category tags & filters
Tag by type, filter, sort, search. Solves: duplicates pile up unseen.

[Then one line of text below:]

Deferred to v2: email notifications, embeddable widget, board customisation, Slack integration, impact scoring, and public roadmap — each validated by research but not essential for the core feedback loop.
```

This shows the same product thinking in half the space. The "deferred" line proves you made conscious decisions without listing every item.

---

## REPLACE: Information Architecture section

Replace the detailed IA section (with all sub-item bullets) with this shorter version:

```
Information Architecture

## Structuring *the product*

FeedbackDrop has two entry points — the authenticated admin panel (4 screens) and the public board (1 screen). I mapped the full IA before wireframing to make sure no screen was designed in isolation.

[Keep your sitemap diagram/image — this is the valuable visual part]

The admin panel flows left-to-right: Dashboard (overview) → Feedback (all items) → Detail (single item) → Settings (configuration). The public board is a standalone branded page accessible without login.
```

Delete all the numbered sub-item lists (01 Dashboard: Feedback volume + KPIs, Top requests by votes, etc.). The final screens section shows all of this visually — listing it twice makes the reader skim.

---

## Summary of changes

| Section | Action | Words saved (approx) |
|---|---|---|
| Empathy maps | Remove entirely | ~300 words |
| HMW questions | Merge into journey map section | ~100 words |
| MoSCoW / Feature prioritization | Condense to must-haves only + deferred line | ~200 words |
| Information architecture | Remove sub-item lists, keep sitemap + one paragraph | ~250 words |
| **Total** | | **~850 words fewer** |

The case study goes from reading like a research document to reading like a confident, tight portfolio piece. Every remaining section earns its place.

---

## Final section order after changes

1. Hero
2. Overview / The problem
3. Research — competitive audit + market data + design gaps
4. User personas (Lisa + Jake with goals, frustrations, quotes)
5. User journey map + HMW questions (combined)
6. Scoping v1 (condensed MoSCoW — must-haves only)
7. Information architecture (sitemap image + one paragraph)
8. User flows (3 flows — keep as-is)
9. Design system (keep as-is)
10. Final screens (keep as-is)
11. Design decisions (keep as-is — this is the strongest section)
12. Reflection (keep as-is)
13. Next project CTA
