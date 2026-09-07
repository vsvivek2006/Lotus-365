const fs = require('fs');
const path = require('path');

const srcPages = path.join(__dirname, '..', 'src', 'pages');

// 1. AndarBaharPage in IndianCardGamePages.tsx
{
  let content = fs.readFileSync(path.join(srcPages, 'IndianCardGamePages.tsx'), 'utf8');
  if (!content.includes('Live Dealer Shoe Integrity & Optical Barcode Verification')) {
    const target = '<span>Andar Bahar Frequently Asked Questions</span>';
    const addition = `<span>Andar Bahar Frequently Asked Questions</span>
            </h2>
            <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-3 mb-6">
              <h3 className="text-xl font-extrabold text-[#F0C419]">
                Live Dealer Shoe Integrity & Optical Barcode Scanner Verification
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Every live Andar Bahar table streamed on Lotus365 features advanced optical barcode scanners integrated directly into the physical dealing shoe. The moment a card is extracted by the live dealer, its numerical rank and suit are electronically decoded and flashed on screen, eliminating any human error in determining the winning card match. Whether you bet on Andar with its 51.5% natural probability or back longshot multiplier side bets, all payouts settle instantaneously into your wallet with 2-minute UPI cashout availability.
              </p>
            </div>
            <h2 className="hidden">`;
    content = content.replace(target, addition);
    fs.writeFileSync(path.join(srcPages, 'IndianCardGamePages.tsx'), content, 'utf8');
    console.log('Updated AndarBaharPage in IndianCardGamePages.tsx');
  }
}

// 2. SitemapPage.tsx
{
  let content = fs.readFileSync(path.join(srcPages, 'SitemapPage.tsx'), 'utf8');
  if (!content.includes('Comprehensive Platform Navigation & Security Protocols')) {
    const target = '{/* FAQs */}';
    const addition = `{/* Navigation Protocols */}
          <div className="p-6 rounded-2xl bg-[#0b3b2d]/40 border border-white/10 space-y-3">
            <h2 className="text-xl font-extrabold text-[#F0C419]">
              Comprehensive Platform Navigation & Security Verification Protocols
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Navigating across Lotus365 is designed to be seamless across both mobile devices and desktop computers. Every link cataloged in this directory connects directly to our high-performance Progressive Web App (PWA) infrastructure hosted under the verified domain lotus365officialid.com. Players never need to download suspicious third-party APK files or sideload unsigned software packages.
            </p>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              All financial deposits and cashouts are channeled through authorized WhatsApp verification desks with end-to-end encryption. Bookmark this sitemap as your permanent navigational compass for real-time cricket odds, live dealer tables, VIP reward tiers, and 2-minute UPI settlement guides.
            </p>
          </div>

          {/* FAQs */}`;
    content = content.replace(target, addition);
    fs.writeFileSync(path.join(srcPages, 'SitemapPage.tsx'), content, 'utf8');
    console.log('Updated SitemapPage.tsx');
  }
}

// 3. HomePage.tsx - Add rich SEO encyclopedia section directly to HomePage.tsx
{
  let content = fs.readFileSync(path.join(srcPages, 'HomePage.tsx'), 'utf8');
  if (!content.includes('India’s Most Trusted Sports Betting Exchange & Live Casino Ecosystem')) {
    const target = '<SeoContentSection onOpenAuth={handleOpenAuth} />';
    const addition = `<SeoContentSection onOpenAuth={handleOpenAuth} />
          <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#0d4a3a]/60 border-t border-white/10 text-white/85 text-xs sm:text-sm leading-relaxed">
            <div className="max-w-7xl mx-auto space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419]">
                India’s Most Trusted Sports Betting Exchange & Live Casino Ecosystem
              </h2>
              <p>
                Welcome to <strong className="text-white">Lotus365</strong> (<a href="/" className="text-[#F0C419] font-bold hover:underline">lotus365officialid.com</a>), the gold standard in Indian online sports betting and real-money live casino entertainment. Founded on principles of complete financial transparency, lightning-fast payouts, and peer-to-peer exchange freedom, Lotus365 empowers over 1,000,000 active Indian bettors with an unbeatable wagering experience.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="p-5 rounded-2xl bg-black/25 border border-white/10 space-y-2">
                  <h3 className="text-base font-bold text-[#F0C419]">Peer-to-Peer Cricket Exchange</h3>
                  <p className="text-xs text-white/75">
                    Unlike traditional corporate bookmakers with heavy house vig, our cricket exchange allows you to back and lay outcomes directly against fellow players. Bet on IPL, T20 World Cups, Test series, and international bilateral tours with the tightest spreads and highest market liquidity in South Asia.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-black/25 border border-white/10 space-y-2">
                  <h3 className="text-base font-bold text-[#F0C419]">Authentic Live Dealer Casino</h3>
                  <p className="text-xs text-white/75">
                    Immerse yourself in authentic Indian card gaming with real human dealers streamed in crystal-clear HD. Play Teen Patti Cash, Andar Bahar, Speed Baccarat, Lightning Roulette, and high-payout Aviator crash games with verified cryptographic fairness and instant round settlements.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-black/25 border border-white/10 space-y-2">
                  <h3 className="text-base font-bold text-[#F0C419]">2-Minute UPI Cashouts (Zero APK)</h3>
                  <p className="text-xs text-white/75">
                    Experience unmatched banking velocity. Deposit in 30 seconds via PhonePe, Google Pay, or Paytm and withdraw your winnings in under two minutes straight into your bank account. No risky APK downloads required—our Progressive Web App runs smoothly on any smartphone browser.
                  </p>
                </div>
              </div>
              <p className="text-xs text-white/70">
                Join India\'s premier gaming community today. Connect with our official 24/7 human WhatsApp desk at <strong className="text-emerald-400">https://wa.link/880088</strong> to generate your secure betting ID in under 60 seconds with zero paperwork and instant welcome bonuses.
              </p>
            </div>
          </section>`;
    content = content.replace(target, addition);
    fs.writeFileSync(path.join(srcPages, 'HomePage.tsx'), content, 'utf8');
    console.log('Updated HomePage.tsx');
  }
}

console.log('Finished updating Sitemap, AndarBahar, and HomePage!');
