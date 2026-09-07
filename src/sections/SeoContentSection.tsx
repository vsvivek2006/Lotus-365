import React from 'react';
import { BookOpen, CheckCircle2, ShieldCheck, Zap, ArrowRight, MessageCircle, Lock, Trophy, Smartphone } from 'lucide-react';
import { OFFICIAL_WHATSAPP_URL } from '../data/landingData';

interface SeoContentProps {
  onOpenAuth?: (mode: 'login' | 'register') => void;
  onOpenApk?: () => void;
}

export const SeoContentSection: React.FC<SeoContentProps> = ({ onOpenAuth }) => {
  const handleWhatsApp = () => {
    if (onOpenAuth) {
      onOpenAuth('register');
    } else {
      window.open(OFFICIAL_WHATSAPP_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <article id="seo-guide" className="py-20 bg-[#14614C] border-t border-white/15 relative overflow-hidden text-white/90">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Semantic SEO Article Header */}
        <header className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/25 border border-white/20 text-xs font-bold text-[#F0C419] uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Complete 2026 Platform Authority Guide</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Lotus365 Official Website – <span className="text-[#F0C419]">Complete Guide to Login, ID &amp; Bonuses</span>
          </h2>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            Everything Indian sports enthusiasts need to know about the official <strong>Lotus365</strong> platform, <strong>Lotus365 Blue</strong>, <strong>Cricket ID registration</strong>, instant WhatsApp support, and lightning-fast 2-minute cashouts.
          </p>
        </header>

        {/* Semantic Table of Contents for Google Sitelinks Ranking */}
        <nav aria-label="Table of Contents" className="p-6 rounded-2xl bg-black/25 border border-white/20 shadow-xl mb-12">
          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#F0C419] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#F0C419] animate-ping" />
            <span>Quick Navigation (Table of Contents)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-semibold">
            <a href="#about-lotus365" className="hover:text-brand-gold flex items-center gap-1.5 transition-colors">
              <span className="text-brand-gold font-mono">01.</span> What is Lotus365 & Why is it India's #1 Exchange?
            </a>
            <a href="#how-to-login" className="hover:text-brand-gold flex items-center gap-1.5 transition-colors">
              <span className="text-brand-gold font-mono">02.</span> How to Complete Lotus365 Login & Mobile Setup
            </a>
            <a href="#cricket-id-setup" className="hover:text-brand-gold flex items-center gap-1.5 transition-colors">
              <span className="text-brand-gold font-mono">03.</span> 30-Second WhatsApp Cricket ID Registration
            </a>
            <a href="#lotus365-blue-features" className="hover:text-brand-gold flex items-center gap-1.5 transition-colors">
              <span className="text-brand-gold font-mono">04.</span> Lotus365 Blue: Speed, Latency & 2026 Upgrades
            </a>
            <a href="#vip-privileges" className="hover:text-brand-gold flex items-center gap-1.5 transition-colors">
              <span className="text-brand-gold font-mono">05.</span> Lotus365 VIP Login & Exclusive High-Roller Perks
            </a>
            <a href="#withdrawal-banking" className="hover:text-brand-gold flex items-center gap-1.5 transition-colors">
              <span className="text-brand-gold font-mono">06.</span> Instant Banking: UPI, Paytm, IMPS & Payout Speeds
            </a>
          </div>
        </nav>

        {/* Section 1: What is Lotus365 */}
        <section id="about-lotus365" className="mb-12 scroll-mt-28">
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-4 flex items-center gap-2">
            <Trophy className="w-6 h-6 text-brand-gold" />
            <span>What is Lotus365 and Why is it India's Top Gaming Choice?</span>
          </h3>

          <div className="text-sm leading-relaxed space-y-4 text-slate-300">
            <p>
              When players search for the ultimate online gaming destination in India, they demand three fundamental pillars: <strong>lightning-fast withdrawals</strong>, <strong>genuine peer-to-peer exchange odds</strong>, and <strong>uncompromised bank-grade security</strong>. That is precisely the core foundation upon which the <strong>Lotus365 Official Website</strong> was constructed.
            </p>
            <p>
              Whether you are an enthusiastic cricket bettor following the IPL and ICC World Cup, or a casino lover looking for high-stake rounds of <strong>Aviator Crash</strong>, <strong>Super Teen Patti</strong>, <strong>Andar Bahar</strong>, or <strong>Lightning Roulette</strong>, Lotus365 delivers a seamless 24/7 gaming environment with zero downtime. Unlike traditional bookmakers that enforce high hidden commissions (often 4% to 6%), the <strong>Lotus365 Sports Exchange</strong> connects real players directly, ensuring you get true market liquidity with 0% commission on marquee matches.
            </p>
            <p>
              Under the popular search query <em>लोटस 365 (Lotus 365)</em>, hundreds of thousands of users across Delhi, Mumbai, Bengaluru, Hyderabad, and Kolkata actively utilize Lotus365 daily for fast UPI deposits and instant bank cashouts.
            </p>
          </div>
        </section>

        {/* Section 2: How to Login */}
        <section id="how-to-login" className="mb-12 scroll-mt-28">
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-4 flex items-center gap-2">
            <Lock className="w-6 h-6 text-brand-emerald" />
            <span>Quick Guide: Step-by-Step Lotus365 Login Process</span>
          </h3>

          <div className="text-sm leading-relaxed space-y-4 text-slate-300">
            <p>
              Accessing your official Lotus365 dashboard is quick, direct, and zero-risk. We don't store your sensitive passwords in an unmonitored database; all authentication is handled live by our verified WhatsApp desk:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="p-4 rounded-2xl bg-brand-surface border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-brand-gold/15 text-brand-gold font-bold flex items-center justify-center mb-3">1</div>
                <h4 className="font-bold text-white text-sm mb-1">Click Login or WhatsApp ID</h4>
                <p className="text-xs text-slate-400">Tap any login or sign up button to connect directly with our 24/7 official WhatsApp team.</p>
              </div>

              <div className="p-4 rounded-2xl bg-brand-surface border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-brand-emerald/15 text-brand-emerald font-bold flex items-center justify-center mb-3">2</div>
                <h4 className="font-bold text-white text-sm mb-1">Receive Verified Credentials</h4>
                <p className="text-xs text-slate-400">Our live verification manager generates your private player credentials in under 30 seconds.</p>
              </div>

              <div className="p-4 rounded-2xl bg-brand-surface border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-brand-cyan/15 text-brand-cyan font-bold flex items-center justify-center mb-3">3</div>
                <h4 className="font-bold text-white text-sm mb-1">Instant Web Play (Zero APK)</h4>
                <p className="text-xs text-slate-400">Play seamlessly in your browser with 100% security, 60 FPS speed, and zero app download needed.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-brand-emerald/10 border border-brand-emerald/30 flex items-start gap-3">
              <Zap className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
              <p className="text-xs text-brand-emerald font-medium">
                <strong>Pro Tip:</strong> Always verify you are connecting to our official WhatsApp desk at <em>https://wa.link/880088</em> to protect yourself against unofficial clones and ensure guaranteed 2-minute cashouts.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: WhatsApp Cricket ID */}
        <section id="cricket-id-setup" className="mb-12 scroll-mt-28">
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-4 flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-[#25D366]" />
            <span>How to Get a Verified Cricket ID via WhatsApp in 30 Seconds</span>
          </h3>

          <div className="text-sm leading-relaxed space-y-4 text-slate-300">
            <p>
              In India, speed and convenience are paramount. Lotus365 provides an <strong>Instant WhatsApp ID Generation Flow</strong> that bypasses tedious form-fills and complex KYC hurdles.
            </p>
            <ul className="space-y-2.5 my-4">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>Tap the <strong>'Get Instant WhatsApp ID'</strong> button to open our official verified chat desk.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>Send a pre-filled greeting message specifying your preferred games (e.g. Cricket Exchange, Aviator).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>Receive your verified username, login credentials, and immediate <strong>100% First Deposit Match Bonus</strong> in under 30 seconds.</span>
              </li>
            </ul>

            <button
              onClick={handleWhatsApp}
              className="btn-gold-primary px-7 py-3 rounded-2xl text-xs sm:text-sm font-extrabold inline-flex items-center gap-2 cursor-pointer shadow-gold-glow"
            >
              <MessageCircle className="w-4 h-4 fill-brand-dark" />
              <span>Request Official WhatsApp Cricket ID Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Section 4: Lotus365 Blue */}
        <section id="lotus365-blue-features" className="mb-12 scroll-mt-28">
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-4 flex items-center gap-2">
            <Smartphone className="w-6 h-6 text-brand-cyan" />
            <span>Lotus365 Blue: What Makes the 2026 Edition 3x Faster?</span>
          </h3>

          <div className="text-sm leading-relaxed space-y-4 text-slate-300">
            <p>
              Many players ask: <em>"Why choose Lotus365 Blue over the original platform?"</em> Lotus365 Blue is our major 2026 infrastructure upgrade focused specifically on <strong>low latency live betting</strong>:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-left text-xs sm:text-sm border-collapse rounded-2xl overflow-hidden bg-brand-surface border border-white/10">
                <thead>
                  <tr className="bg-brand-emeraldDark/80 border-b border-white/10 text-white font-bold">
                    <th className="p-3 sm:p-4">Feature / Metric</th>
                    <th className="p-3 sm:p-4 text-brand-gold">Lotus365 Blue (2026)</th>
                    <th className="p-3 sm:p-4 text-slate-400">Legacy Betting Platforms</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-xs">
                  <tr>
                    <td className="p-3.5 font-bold text-white">Odds Latency</td>
                    <td className="p-3.5 text-brand-emerald font-semibold">&lt; 150ms Sub-Second Feeds</td>
                    <td className="p-3.5 text-slate-400">2.5s - 5s Lag (High Slippage)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Cashout Processing</td>
                    <td className="p-3.5 text-brand-emerald font-semibold">1m 45s Automated Direct UPI</td>
                    <td className="p-3.5 text-slate-400">12 - 48 Hours Manual Hold</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Device Installation</td>
                    <td className="p-3.5 text-brand-emerald font-semibold">0 MB (Zero Download Instant Web App)</td>
                    <td className="p-3.5 text-slate-400">60+ MB Risky Third-Party APKs</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Biometric Login</td>
                    <td className="p-3.5 text-brand-emerald font-semibold">Fingerprint / Face ID Enabled</td>
                    <td className="p-3.5 text-slate-400">Manual Password Re-entry</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 5: Lotus365 VIP */}
        <section id="vip-privileges" className="mb-12 scroll-mt-28">
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-4 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-brand-gold" />
            <span>Lotus365 VIP Login & Exclusive Membership Privileges</span>
          </h3>

          <div className="text-sm leading-relaxed space-y-4 text-slate-300">
            <p>
              For high-stakes players and active sports traders, standard limits and generalized queues are unacceptable. The <strong>Lotus365 VIP Program</strong> provides tailored hospitality designed around your specific volume:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              <div className="p-4 rounded-2xl bg-brand-surface border border-white/10 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-brand-gold/15 text-brand-gold shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">Instant Priority Cashouts</h4>
                  <p className="text-xs text-slate-400">VIP withdrawal tickets skip standard checks and are executed via dedicated IMPS channels in under 120 seconds.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-brand-surface border border-white/10 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-brand-emerald/15 text-brand-emerald shrink-0">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">Up to 10% Weekly Loss Cashback</h4>
                  <p className="text-xs text-slate-400">Enjoy automated rebate credits deposited directly into your balance every Monday with zero wagering conditions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Conversion Block */}
        <div className="p-8 rounded-2xl bg-black/30 border border-white/20 text-center shadow-2xl">
          <h3 className="font-extrabold text-2xl sm:text-3xl text-white mb-2">
            Experience India's #1 Rated Gaming Platform Today
          </h3>
          <p className="text-xs sm:text-sm text-white/80 mb-6 max-w-xl mx-auto">
            Get your instant verified Lotus365 ID, unlock 100% first deposit bonus, and enjoy 2-minute instant UPI cashouts 24/7.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={handleWhatsApp}
              className="cta-button py-3 px-7 text-xs font-black"
            >
              <MessageCircle className="w-4 h-4 mr-1.5" />
              <span>Get WhatsApp ID (30s)</span>
            </button>

            <button
              onClick={handleWhatsApp}
              className="cta-button-outline py-3 px-6 text-xs font-bold"
            >
              <Smartphone className="w-4 h-4 mr-1.5 text-[#F0C419]" />
              <span>Instant Web Play (Zero APK)</span>
            </button>
          </div>
        </div>

      </div>
    </article>
  );
};
