import React from 'react';
import { Layout } from '../components/layout/Layout';
import { SEOHead } from '../components/seo/SEOHead';
import { PageHero } from '../components/layout/PageHero';
import { PageCTA } from '../components/layout/PageCTA';
import { RelatedPages } from '../components/layout/RelatedPages';
import { 
  MessageCircle, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  HelpCircle, 
  Lock, 
  Smartphone, 
  UserCheck, 
  ShieldAlert 
} from 'lucide-react';
import { OFFICIAL_WHATSAPP_URL } from '../data/landingData';

const accountRelated = [
  { href: '/login', label: 'How to Login', description: 'Step-by-step login guide' },
  { href: '/how-to-deposit', label: 'How to Deposit', description: 'UPI and IMPS deposit guide' },
  { href: '/welcome-bonus', label: 'Welcome Bonus', description: 'Claim your registration bonus' },
  { href: '/how-it-works', label: 'How It Works', description: 'Full onboarding walkthrough' },
];

export const RegisterPage: React.FC = () => {
  const handleWA = () => window.open(OFFICIAL_WHATSAPP_URL, '_blank', 'noopener,noreferrer');
  
  return (
    <>
      <SEOHead 
        title="Register on Lotus365 Free — Get Your Official WhatsApp Betting ID" 
        description="Create your official Lotus365 ID in under 60 seconds via WhatsApp. Zero registration fees, no intrusive document KYC forms, instant UPI deposits, and immediate access to cricket betting and live casino." 
        canonical="/register" 
        keywords="lotus365 register, lotus365 sign up, lotus365 new account, lotus365 whatsapp id, lotus365 registration free, create lotus365 id online, lotus365 id provider" 
      />
      <Layout>
        <PageHero 
          badge="Instant WhatsApp Onboarding" 
          title="Get Your " 
          highlight="Lotus365 ID" 
          subtitle="Skip endless document upload forms and invasive verification queues. Message our official 24/7 WhatsApp desk and receive your private login credentials in under 60 seconds — 100% free with zero registration fees." 
          ctaLabel="Register via WhatsApp Now" 
        />

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#14614C]">
          <div className="max-w-4xl mx-auto space-y-10 text-white/85 text-sm leading-relaxed">
            
            {/* Step Cards */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419] mb-4 text-center">
                How to Register on Lotus365: 4-Step Express Guide
              </h2>
              <p className="text-center text-white/80 max-w-2xl mx-auto mb-8 text-xs sm:text-sm">
                Creating an account on India's premier betting exchange takes less than a minute. Follow these simple steps to join over 1.5 million satisfied Indian players:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { step: '01', title: 'Tap the Official WhatsApp Link', desc: 'Click any "Register via WhatsApp" button on this site to launch a direct, encrypted chat with our verified desk (wa.link/880088).' },
                  { step: '02', title: 'Request Your Free Betting ID', desc: 'Simply send a greeting or type "New ID". Our dedicated 24/7 customer concierge will reply in less than 30 seconds.' },
                  { step: '03', title: 'Receive Secure Login Credentials', desc: 'Your agent will provide a unique username and private password assigned directly to your personal WhatsApp account.' },
                  { step: '04', title: 'Log In & Make Your First Deposit', desc: 'Visit lotus365officialid.com, enter your credentials, deposit via PhonePe/GPay/Paytm, and claim your 100% welcome bonus!' },
                ].map((s) => (
                  <div key={s.step} className="p-5 rounded-2xl bg-black/20 border border-white/10 hover:border-[#F0C419]/40 transition-colors">
                    <div className="text-3xl font-black text-[#F0C419] mb-2">{s.step}</div>
                    <h3 className="text-base font-bold text-white mb-1.5">{s.title}</h3>
                    <p className="text-xs text-white/75 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>

              {/* Direct CTA Box */}
              <div className="text-center mt-8 p-6 rounded-2xl bg-black/30 border border-[#F0C419]/30">
                <button onClick={handleWA} className="cta-button py-4 px-10 text-base font-black shadow-gold-glow inline-flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Message WhatsApp to Create Free ID</span>
                </button>
                <p className="mt-3 text-xs text-white/60">
                  Direct WhatsApp concierge • No personal documents required • Instant ID activation 24/7/365
                </p>
              </div>
            </div>

            {/* Why WhatsApp Registration is Better */}
            <div>
              <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
                Why WhatsApp Registration is Superior for Indian Bettors
              </h2>
              <p className="mb-4">
                Conventional international betting portals force Indian customers to endure cumbersome registration flows: submitting passport or Aadhaar scans, waiting 24 to 48 hours for manual KYC approval, and trusting foreign databases with sensitive personal identity files. At <a href="/" className="text-[#F0C419] font-semibold hover:underline">Lotus365</a>, we have completely transformed this model.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-black/20 border border-white/10 text-center">
                  <UserCheck className="w-6 h-6 text-[#F0C419] mx-auto mb-2" />
                  <div className="font-bold text-white text-sm mb-1">Zero Document Hassle</div>
                  <div className="text-xs text-white/70">No Aadhaar or PAN uploads needed to start playing. Your privacy remains 100% protected.</div>
                </div>
                <div className="p-4 rounded-xl bg-black/20 border border-white/10 text-center">
                  <Zap className="w-6 h-6 text-[#F0C419] mx-auto mb-2" />
                  <div className="font-bold text-white text-sm mb-1">Under 60-Second Setup</div>
                  <div className="text-xs text-white/70">From your first WhatsApp greeting to placing your first cricket bet in under two minutes.</div>
                </div>
                <div className="p-4 rounded-xl bg-black/20 border border-white/10 text-center">
                  <ShieldCheck className="w-6 h-6 text-[#F0C419] mx-auto mb-2" />
                  <div className="font-bold text-white text-sm mb-1">Direct Human Concierge</div>
                  <div className="text-xs text-white/70">No chatbots or endless automated phone trees. Chat directly with dedicated VIP managers.</div>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                Comparison: Lotus365 WhatsApp Registration vs. Conventional Sites
              </h3>
              <div className="overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#0b3b2d] text-[#F0C419] font-semibold uppercase tracking-wider">
                    <tr>
                      <th className="p-3.5">Feature</th>
                      <th className="p-3.5">Lotus365 WhatsApp ID</th>
                      <th className="p-3.5">Conventional Offshore Sites</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 bg-black/20">
                    <tr>
                      <td className="p-3.5 font-bold text-white">Registration Time</td>
                      <td className="p-3.5 text-emerald-400 font-semibold">Under 60 Seconds</td>
                      <td className="p-3.5">15–30 minutes + 48hr wait</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-white">KYC Document Uploads</td>
                      <td className="p-3.5 text-emerald-400 font-semibold">None Required</td>
                      <td className="p-3.5">Mandatory Passport / Utility Bill</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-white">Smartphone Play</td>
                      <td className="p-3.5 text-emerald-400 font-semibold">instant mobile play (100% Web Play)</td>
                      <td className="p-3.5">Requires untrusted unverified downloads</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-white">Payment Method</td>
                      <td className="p-3.5 text-emerald-400 font-semibold">Direct Indian UPI (PhonePe, GPay, Paytm)</td>
                      <td className="p-3.5">Complex Crypto or International Cards</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-white">Withdrawal Speed</td>
                      <td className="p-3.5 text-emerald-400 font-semibold">Guaranteed 2-Minute IMPS/UPI</td>
                      <td className="p-3.5">24 to 72 Banking Hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* What You Can Access With One ID */}
            <div>
              <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
                One Unified ID: Full Access to 50+ Gaming Arenas
              </h2>
              <p className="mb-4">
                Your single Lotus365 login unlocks our entire digital entertainment ecosystem with a shared wallet balance:
              </p>
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-white/80">
                <li><strong className="text-white"><a href="/cricket-betting" className="text-[#F0C419] hover:underline">Cricket Betting Hub:</a></strong> Live match odds, over/under session runs, bowler wickets, and player boundaries on IPL, World Cups, BBL, and PSL.</li>
                <li><strong className="text-white"><a href="/cricket-exchange" className="text-[#F0C419] hover:underline">Betting Exchange:</a></strong> Back and Lay selections against other players with industry-best 0% commission on select markets.</li>
                <li><strong className="text-white"><a href="/live-casino" className="text-[#F0C419] hover:underline">Live Casino & Indian Card Games:</a></strong> Real dealers hosting <a href="/teen-patti" className="text-[#F0C419] hover:underline">Teen Patti</a>, <a href="/andar-bahar" className="text-[#F0C419] hover:underline">Andar Bahar</a>, Lightning Roulette, and Speed Baccarat.</li>
                <li><strong className="text-white"><a href="/aviator-game" className="text-[#F0C419] hover:underline">Crash Games & Aviator:</a></strong> Provably fair multiplier curves with up to 98.5% RTP and instant cashouts.</li>
                <li><strong className="text-white"><a href="/color-prediction" className="text-[#F0C419] hover:underline">Color Prediction Arena:</a></strong> 30-second rapid draws with up to 9x single-number payouts.</li>
              </ul>
            </div>

            {/* Security Notice */}
            <div className="p-4 rounded-xl bg-amber-500/15 border border-amber-400/40 flex gap-3 items-start">
              <ShieldAlert className="w-5 h-5 text-[#F0C419] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#F0C419] block text-sm mb-1">Crucial Security Alert: Verify Official WhatsApp Numbers</strong>
                <p className="text-xs text-white/80">
                  Always register exclusively through the verified WhatsApp links on <strong className="text-white">lotus365officialid.com</strong>. Beware of impostor Telegram groups or fraudulent social media pages posing as Lotus365 agents. Our legitimate desk will never ask for your bank PIN, UPI MPIN, or account passwords.
                </p>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#F0C419]">
                Registration Comparison: Lotus365 vs Foreign Bookmakers
              </h2>
              <div className="overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#0b3b2d] text-[#F0C419] font-semibold uppercase tracking-wider">
                    <tr>
                      <th className="p-3">Onboarding Factor</th>
                      <th className="p-3">Lotus365 WhatsApp ID</th>
                      <th className="p-3">Traditional Offshore Sites</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 bg-black/20 text-xs">
                    <tr>
                      <td className="p-3 font-bold text-white">ID Issuance Speed</td>
                      <td className="p-3 text-emerald-400 font-bold">&lt; 60 Seconds Instant</td>
                      <td className="p-3 text-rose-400">24 to 48 Hours Verification</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-white">Identity Document Requirement</td>
                      <td className="p-3 text-emerald-400 font-bold">Zero Documents (100% Private)</td>
                      <td className="p-3 text-rose-400">Mandatory Passport / Aadhaar Scans</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-white">Deposit Activation</td>
                      <td className="p-3 text-emerald-400 font-bold">Instant UPI QR (&lt; 30s)</td>
                      <td className="p-3 text-rose-400">Foreign Forex Cards (Frequently Declined)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-white">Dedicated Support Channel</td>
                      <td className="p-3 text-[#F0C419] font-bold">Private 24/7 Human WhatsApp Concierge</td>
                      <td className="p-3 text-white/60">Impersonal Automated AI Bots</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Account Recovery Guarantee */}
            <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-[#F0C419]">
                Session Security & Multi-Device Login Management
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Lotus365 implements military-grade session isolation across all authenticated sessions. When you log into your betting ID from your primary smartphone, your active session token is locked to your hardware footprint. If you ever switch devices or log in from a tablet or PC, our system alerts our 24/7 security protocol to ensure your bankroll balance and open exchange bets remain 100% safeguarded against unauthorized external access.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-[#F0C419]">
                Zero Risk Account Recovery & Re-Issuance Policy
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                If you ever misplace your smartphone, change your WhatsApp number, or delete your chat history, your balance and account progress are never lost. Simply reach out to our senior verification desk via our official domain lotus365officialid.com, verify your transaction history or registered banking details, and our compliance leads will re-link your verified ID with a new encrypted credential token in under two minutes.
              </p>
            </div>

{/* Password Security Best Practices */}
            <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <h3 className="text-base font-bold text-[#F0C419]">
                Crucial Password Guidelines for New Account Holders
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Upon receiving your temporary credentials from your WhatsApp concierge, we strongly recommend logging in and immediately updating your password to a private string. Follow these golden principles:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-white/70">
                <li>Combine at least 8 characters including uppercase letters, numbers, and special symbols (e.g. #, @, !).</li>
                <li>Never share your password with friends, family, or unverified social media profiles.</li>
                <li>Lotus365 staff will never ask you to reveal your secret password or bank OTP. Keep your login credentials strictly private and avoid using public shared devices without logging out at the end of your gaming session.</li>
              </ul>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-2xl font-extrabold text-[#F0C419] mb-6 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-[#F0C419]" />
                Frequently Asked Questions About Lotus365 Registration
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'Is registration on Lotus365 100% free?',
                    a: 'Yes, creating your Lotus365 ID is completely free. We do not charge any registration fees, activation dues, or recurring maintenance charges. You only deposit the funds you wish to wager.'
                  },
                  {
                    q: 'What details do I need to provide when creating an ID on WhatsApp?',
                    a: 'No paperwork or identity card scans are required. You only need an active WhatsApp number from which to message us. Our team will issue your username and initial password immediately.'
                  },
                  {
                    q: 'How long does it take to receive my ID credentials?',
                    a: 'Under standard operating conditions, our 24/7 WhatsApp concierge delivers your active login details within 30 to 60 seconds of your request.'
                  },
                  {
                    q: 'Can I change my password after logging in for the first time?',
                    a: 'Yes, we strongly recommend updating your initial password upon your first successful login via the account profile tab at lotus365officialid.com.'
                  },
                  {
                    q: 'Can I register multiple accounts on Lotus365?',
                    a: 'No. To maintain fair play, platform integrity, and bonus compliance, each player is permitted only one active Lotus365 account tied to their primary WhatsApp number.'
                  },
                  {
                    q: 'How do I claim my welcome bonus after registering?',
                    a: 'Inform your WhatsApp concierge when making your first deposit. They will instantly credit your 100% matching welcome bonus up to ₹5,000 directly into your game balance.'
                  },
                ].map((faq, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-black/20 border border-white/10">
                    <h4 className="font-bold text-white text-sm mb-2">{faq.q}</h4>
                    <p className="text-xs text-white/70 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        <RelatedPages pages={accountRelated} />
        <PageCTA 
          headline="Ready to Get Started? Claim Your Lotus365 ID Today" 
          subtext="Join 1,500,000+ active players across India. Free registration, 100% welcome bonus, and 2-minute instant UPI cashouts!" 
          ctaLabel="Register Free via WhatsApp" 
        />
      </Layout>
    </>
  );
};

export const LoginPage: React.FC = () => {
  const handleWA = () => window.open(OFFICIAL_WHATSAPP_URL, '_blank', 'noopener,noreferrer');

  return (
    <>
      <SEOHead 
        title="Lotus365 Login — Official Portal & Account Access Guide" 
        description="Official Lotus365 login instructions. Access your account on lotus365officialid.com securely without app downloads. Instant WhatsApp password reset and 24/7 login support." 
        canonical="/login" 
        keywords="lotus365 login, lotus365 log in, lotus365 account login, lotus365 official login, lotus365 id login, lotus365 password reset, lotus365 login link" 
      />
      <Layout>
        <PageHero 
          badge="Official Account Portal" 
          title="Lotus365 " 
          highlight="Login Guide" 
          subtitle="Complete step-by-step instructions for logging into your Lotus365 account on mobile and desktop. Access 50+ betting markets, live casino games, and instant 2-minute UPI cashouts." 
          ctaLabel="Get 24/7 Login Support on WhatsApp" 
        />

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#14614C]">
          <div className="max-w-4xl mx-auto space-y-10 text-white/85 text-sm leading-relaxed">
            
            {/* Step-by-Step Login Procedure */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0C419] mb-4">
                How to Log In to Your Official Lotus365 Account
              </h2>
              <p className="mb-4">
                Accessing your Lotus365 betting and gaming dashboard is swift and secure. Because Lotus365 is architected as an ultra-responsive Progressive Web App (PWA), there is no need to download clunky or suspicious app files to your device. Follow these verified login steps:
              </p>

              <div className="space-y-4">
                {[
                  {
                    step: 'Step 1: Navigate to the Official Domain',
                    desc: 'Open Google Chrome, Safari, or Brave and go directly to https://lotus365officialid.com. Ensure the SSL padlock icon appears in your browser address bar to protect against phishing copies.',
                  },
                  {
                    step: 'Step 2: Click the "Login" Button',
                    desc: 'On mobile, tap the golden "Login" button located in the top navigation header or quick menu. On desktop, find the "Login" button in the upper right quadrant.',
                  },
                  {
                    step: 'Step 3: Enter Your Credentials',
                    desc: 'Type your official Lotus365 Username and Password exactly as provided by your verified WhatsApp concierge desk upon registration.',
                  },
                  {
                    step: 'Step 4: Access Your Unified Dashboard',
                    desc: 'Hit submit. You will be instantly redirected to your unified gaming balance where you can view live cricket odds, launch live casino tables, or request instant withdrawals.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-black/20 border border-white/10 flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[#F0C419]/20 text-[#F0C419] font-black flex items-center justify-center shrink-0 text-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm mb-1">{item.step}</h4>
                      <p className="text-xs text-white/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Need An ID Card */}
            <div className="p-6 rounded-2xl bg-black/30 border border-[#F0C419]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-[#F0C419] mb-1">Don't Have a Lotus365 Login ID Yet?</h3>
                <p className="text-xs text-white/80">
                  Registration takes less than 60 seconds on WhatsApp with zero document uploads. Get your credentials now!
                </p>
              </div>
              <button onClick={handleWA} className="px-6 py-3 rounded-xl bg-[#F0C419] text-[#14614C] text-sm font-black flex items-center gap-2 shrink-0 hover:bg-[#ffe169] transition-colors shadow-gold-glow">
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Create Free ID on WhatsApp</span>
              </button>
            </div>

            {/* Common Login Troubleshooting Matrix */}
            <div>
              <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
                Lotus365 Login Troubleshooting & Error Resolutions
              </h2>
              <p className="mb-4">
                Encountering an issue logging into your account? Use the quick reference resolution table below:
              </p>
              <div className="overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#0b3b2d] text-[#F0C419] font-semibold uppercase tracking-wider">
                    <tr>
                      <th className="p-3.5">Error / Symptom</th>
                      <th className="p-3.5">Probable Cause</th>
                      <th className="p-3.5">Immediate Solution</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 bg-black/20">
                    <tr>
                      <td className="p-3.5 font-bold text-rose-300">Invalid Username or Password</td>
                      <td className="p-3.5 text-white/70">Typo, incorrect capitalization, or leading whitespace</td>
                      <td className="p-3.5 text-emerald-400">Re-copy credentials directly from your WhatsApp chat without trailing spaces.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-rose-300">Account Temporarily Suspended</td>
                      <td className="p-3.5 text-white/70">Multiple consecutive failed login attempts or security audit</td>
                      <td className="p-3.5 text-emerald-400">Message WhatsApp support with your registered phone number for a 60-second unlock.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-rose-300">Blank Screen / Endless Loading</td>
                      <td className="p-3.5 text-white/70">Outdated browser cache or cookie conflicts</td>
                      <td className="p-3.5 text-emerald-400">Clear your browser cache, open an Incognito/Private window, or refresh the page.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-rose-300">Forgotten Password</td>
                      <td className="p-3.5 text-white/70">Lost or forgotten custom password</td>
                      <td className="p-3.5 text-emerald-400">Contact our 24/7 WhatsApp concierge to verify your identity and generate a new password.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Account Recovery Guide */}
            <div>
              <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
                Forgot Your Login Password? 60-Second Recovery Process
              </h2>
              <p className="mb-4">
                Unlike platforms that send unreliably delayed email reset links, Lotus365 offers rapid human-assisted account recovery via WhatsApp:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-black/20 border border-white/10">
                  <div className="text-[#F0C419] font-bold text-sm mb-1 flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4" /> Step 1: Open WhatsApp
                  </div>
                  <p className="text-xs text-white/70">Send a message from your registered phone number saying "Reset My Password".</p>
                </div>
                <div className="p-4 rounded-xl bg-black/20 border border-white/10">
                  <div className="text-[#F0C419] font-bold text-sm mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" /> Step 2: Quick Identity Check
                  </div>
                  <p className="text-xs text-white/70">Confirm your registered username and recent deposit or withdrawal transaction detail.</p>
                </div>
                <div className="p-4 rounded-xl bg-black/20 border border-white/10">
                  <div className="text-[#F0C419] font-bold text-sm mb-1 flex items-center gap-1.5">
                    <Lock className="w-4 h-4" /> Step 3: Instant New Credentials
                  </div>
                  <p className="text-xs text-white/70">Receive a newly generated temporary password to log in and regain full access instantly.</p>
                </div>
              </div>
            </div>

            {/* Emergency Recovery Protocol */}
            <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-[#F0C419]">
                Credential Reset & 2FA Emergency Recovery Protocol
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                If you ever forget your password or lose access to your WhatsApp account, our security desk provides rapid account restoration. Message our official verification channel from your registered mobile number or verify your recent UPI transaction reference. Once verified by our senior shift supervisor, your account password is encrypted and re-issued within two minutes, ensuring your open bets and wallet balance remain completely secure.
              </p>
            </div>

            {/* Security Practices */}
            <div>
              <h2 className="text-2xl font-extrabold text-[#F0C419] mb-4">
                Vital Best Practices for Account Security
              </h2>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-black/20 border border-white/10 flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-sm block mb-0.5">Always Bookmark the Official Domain</strong>
                    <p className="text-xs text-white/70">Bookmark <strong className="text-[#F0C419]">lotus365officialid.com</strong> in your browser. Never click unverified login links sent from unknown Telegram groups or suspicious SMS messages.</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-black/20 border border-white/10 flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-sm block mb-0.5">Never Share Your Credentials</strong>
                    <p className="text-xs text-white/70">Our official representatives will never ask you for your login password or your UPI banking PIN. Keep your password confidential at all times.</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-black/20 border border-white/10 flex gap-3">
                  <Smartphone className="w-5 h-5 text-[#F0C419] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-sm block mb-0.5">Log Out on Shared or Public Devices</strong>
                    <p className="text-xs text-white/70">If accessing Lotus365 on an office computer or friend's device, always remember to tap "Log Out" and avoid saving passwords in the browser password manager.</p>
                  </div>
                </div>
              </div>
            </div>

                        {/* Troubleshooting Matrix */}
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#F0C419]">
                Troubleshooting Common Login Hurdles
              </h2>
              <p className="text-xs sm:text-sm text-white/80">
                If you encounter difficulty accessing your account on lotus365officialid.com, refer to this rapid diagnostic matrix:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-1.5">
                  <span className="font-bold text-[#F0C419] text-sm">Issue: Forgotten Password</span>
                  <p className="text-white/70">Message our WhatsApp support desk stating "Password Reset". A verification ping to your registered number generates a fresh password in 60 seconds.</p>
                </div>
                <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-1.5">
                  <span className="font-bold text-[#F0C419] text-sm">Issue: Browser Cache Loop</span>
                  <p className="text-white/70">Perform a hard refresh (Ctrl + F5 on PC, or clear mobile browser site data for lotus365officialid.com) to load the newest web app bundle.</p>
                </div>
                <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-1.5">
                  <span className="font-bold text-[#F0C419] text-sm">Issue: Account Temporarily Locked</span>
                  <p className="text-white/70">After 5 consecutive incorrect password attempts, automated security locks your session for 15 minutes. Contact WhatsApp support to unlock immediately.</p>
                </div>
              </div>
            </div>

            {/* Cross-Browser Syncing */}
            <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-[#F0C419]">
                Seamless Cross-Device Synchronization
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Whether you place early-morning cricket exchange wagers on your MacBook or trade live IPL overs on your Android smartphone on the commute home, your open bets, matched positions, and wallet balances synchronize across all browser tabs in real time. Our low-latency WebSocket infrastructure ensures that any odds movement or cashout event reflects instantaneously regardless of which screen you are actively viewing.
              </p>
            </div>

{/* Session Security Policies */}
            <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <h3 className="text-base font-bold text-[#F0C419]">
                Single-Session Concurrency & Automated Security Timeouts
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                To protect your funds against unauthorized remote access, Lotus365 enforces automated single-session concurrent locks. If your account is logged in on a mobile phone and someone attempts to log in from an unknown desktop IP, the existing session is prompted for confirmation. Furthermore, sessions with zero activity automatically time out after 30 minutes of inactivity to safeguard against public device snooping.
              </p>
            </div>

{/* FAQs */}
            <div>
              <h2 className="text-2xl font-extrabold text-[#F0C419] mb-6 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-[#F0C419]" />
                Frequently Asked Questions About Lotus365 Login
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'What is the official login URL for Lotus365?',
                    a: 'The only official login destination is https://lotus365officialid.com. Do not attempt logging into secondary unverified domains that mimic our brand styling.'
                  },
                  {
                    q: 'Can I log in using my mobile phone without downloading an app?',
                    a: 'Yes! Lotus365 is optimized as a lightweight, zero-download Progressive Web App. Simply visit lotus365officialid.com on mobile Chrome or Safari for a native app-like experience without app risks.'
                  },
                  {
                    q: 'Is my login connection encrypted and secure?',
                    a: 'Yes. All data transmissions between your browser and our servers are protected by enterprise-grade 256-bit TLS/SSL encryption, guaranteeing complete protection of your sensitive financial and gaming activity.'
                  },
                  {
                    q: 'Can I stay logged into my account permanently?',
                    a: 'Yes, on your personal smartphone you can check "Remember Me" to stay logged in across sessions. However, for security, sessions automatically refresh after extended periods of inactivity.'
                  },
                  {
                    q: 'What should I do if my account is locked due to incorrect password attempts?',
                    a: 'Simply message our WhatsApp support desk at wa.link/880088 with your registered username. Our human support agents will verify your identity and unlock your account in under 60 seconds.'
                  },
                  {
                    q: 'Can I access my balance from both my laptop and mobile phone simultaneously?',
                    a: 'Your account balance is synchronized in real time across the cloud. You can seamlessly switch between desktop and mobile devices without losing your bets, bonuses, or wallet balance.'
                  },
                ].map((faq, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-black/20 border border-white/10">
                    <h4 className="font-bold text-white text-sm mb-2">{faq.q}</h4>
                    <p className="text-xs text-white/70 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        <RelatedPages pages={accountRelated} />
        <PageCTA 
          headline="Need Immediate Assistance Logging In?" 
          subtext="Our 24/7 VIP customer desk on WhatsApp is standing by to resolve any login or credential inquiry in 60 seconds." 
          ctaLabel="Chat with Login Support on WhatsApp" 
        />
      </Layout>
    </>
  );
};
