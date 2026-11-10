# Roadmap: Lotus365 Complete Platform Modernization

## Phases

### Phase 0: Image Assets & Dummy Placeholders Architecture
- [ ] Create `src/data/images.ts` centralized image registry.
- [ ] Setup complete dummy image set under `public/images/` (games, sports, banners, payments, VIP).
- [ ] Implement `<AdaptiveImage>` component with aspect ratios, blur placeholders, and responsive sizes.

### Phase 1: Luxury Design System & Global Layout Revamp
- [ ] Enhance Tailwind theme & `src/index.css` (luxury dark emerald `#06231a`, sovereign gold `#F5C518`, glass cards, glowing borders).
- [ ] Redesign `Header.tsx` (sticky blur, quick-action button, live ticker, categorized drawer).
- [ ] Redesign `Footer.tsx` (multi-column topic silos, trust indicators, 18+ policy, SSL badges).
- [ ] Redesign `PageHero.tsx` with split text + visual showcase card.
- [ ] Add `Breadcrumbs.tsx` with Google BreadcrumbList schema.

### Phase 2: Homepage (`/`) Complete Revamp
- [ ] Hero Section with high-conversion visuals and dual CTAs.
- [ ] Game Hub Section with real image cards, provider pills, and RTP indicators.
- [ ] Live Ticker with exchange Back (Blue) / Lay (Pink) styling.
- [ ] 3D steps and VIP tier previews.
- [ ] Content optimization via `generate_seo_content`.

### Phase 3: Cricket & Sportsbook Hubs (24 Pages)
- [ ] Cricket Exchange & Tournament hubs (18 pages).
- [ ] Regional Cricket hubs (6 pages).
- [ ] Other Sports (Football, Tennis, Kabaddi, Basketball, Horse Racing, Sportsbook).

### Phase 4: Live Dealer Casino & Crash Multiplier Suite (23 Pages)
- [ ] Indian Classics (Teen Patti, Andar Bahar, Lucky 7, 32 Cards, Super Over).
- [ ] Live Dealer Games (Roulette, Lightning Roulette, Blackjack, Baccarat, Speed Baccarat, Dragon Tiger).
- [ ] Crash & Game Shows (Aviator Crash Pro, JetX, Color Prediction, Crazy Time, Mega Wheel, Slots).

### Phase 5: Banking, Deposits, Cashouts & Account Security (15 Pages)
- [ ] Banking Portals (How to Deposit, How to Withdraw, UPI, IMPS, USDT, Paytm, PhonePe, GPay, NEFT, 2-Min Cashout, Withdrawal Proofs).
- [ ] Account & Security (Register, Login, Security Tips, KYC Guide).
- [ ] Step-by-step visual guides & HowTo schema.

### Phase 6: Bonuses, VIP Club, Strategic Guides & Legal (14 Pages)
- [ ] Bonuses & VIP Club (Welcome, First Deposit, Referral, Cashback, VIP Club, Black Card).
- [ ] Strategy & Knowledge Base (Trading guides, Reviews, Comparisons, Betting Tips).
- [ ] Legal & Trust (About, Contact, Terms, Privacy Policy, Responsible Gaming, Complaints).
- [ ] Complete HTML Sitemap (`/sitemap`) with all 106+ links categorized.

### Phase 7: Dynamic Blog Hub, Schemas & Production Build QA
- [ ] Modernize `/blog` and `/blog/[slug]`.
- [ ] Synchronize `src/app/sitemap.ts` to include all 106+ routes with dynamic posts.
- [ ] Verify full schema markup, Core Web Vitals readiness, and `npm run build` pass.

