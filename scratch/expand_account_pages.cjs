const fs = require('fs');
const file = 'src/pages/AccountPages.tsx';
let code = fs.readFileSync(file, 'utf-8');

// 1. RegisterPage expansion: insert before FAQs in RegisterPage
const regFaqAnchor = `            {/* FAQs */}`;
const regAddition = `            {/* Comparison Table */}
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
                <li>Lotus365 staff will never ask you to reveal your secret password or bank OTP.</li>
              </ul>
            </div>

`;

code = code.replace(regFaqAnchor, regAddition + regFaqAnchor);

// Add 2 FAQs to RegisterPage
const regFaqItemsAnchor = `                  {
                    q: 'Can I register multiple accounts on Lotus365?',
                    a: 'Each customer is permitted one primary betting account linked to their mobile identifier to maintain exchange fairness and prevent bonus abuse.'
                  },`;
const regFaqItemsExtra = `                  {
                    q: 'Can I register multiple accounts on Lotus365?',
                    a: 'Each customer is permitted one primary betting account linked to their mobile identifier to maintain exchange fairness and prevent bonus abuse.'
                  },
                  {
                    q: 'Is there any registration fee or hidden charge to open an ID?',
                    a: 'Zero! Registering an account on Lotus365 is 100% free. 100% of the funds you deposit via UPI are credited directly to your playable betting balance without deductions.'
                  },
                  {
                    q: 'Can I register if I only have an iPhone or iPad?',
                    a: 'Yes! Simply open lotus365officialid.com in Mobile Safari, tap the WhatsApp button, and receive your credentials. Our platform operates as a native Progressive Web App without app store downloads.'
                  },`;
code = code.replace(regFaqItemsAnchor, regFaqItemsExtra);

// 2. LoginPage expansion: insert before FAQs in LoginPage
const loginFaqIdx = code.indexOf(`{/* FAQs */}`, code.indexOf('export const LoginPage'));
const loginAddition = `            {/* Troubleshooting Matrix */}
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

            {/* Session Security Policies */}
            <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-3">
              <h3 className="text-base font-bold text-[#F0C419]">
                Single-Session Concurrency & Automated Security Timeouts
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                To protect your funds against unauthorized remote access, Lotus365 enforces automated single-session concurrent locks. If your account is logged in on a mobile phone and someone attempts to log in from an unknown desktop IP, the existing session is prompted for confirmation. Furthermore, sessions with zero activity automatically time out after 30 minutes of inactivity to safeguard against public device snooping.
              </p>
            </div>

`;

code = code.substring(0, loginFaqIdx) + loginAddition + code.substring(loginFaqIdx);

// Add 2 FAQs to LoginPage
const loginFaqItemsAnchor = `                  {
                    q: 'Can I change my registered mobile number after creating an ID?',
                    a: 'Yes, but for financial security you must verify your identity through your existing registered WhatsApp connection before our compliance team migrates your account.'
                  },`;
const loginFaqItemsExtra = `                  {
                    q: 'Can I change my registered mobile number after creating an ID?',
                    a: 'Yes, but for financial security you must verify your identity through your existing registered WhatsApp connection before our compliance team migrates your account.'
                  },
                  {
                    q: 'Can I stay permanently logged in on my personal phone?',
                    a: 'Yes, by tapping "Remember Me" on trusted personal devices, your secure authentication token remains stored locally in your browser so you do not need to re-enter credentials every time.'
                  },
                  {
                    q: 'What should I do if I suspect someone else has accessed my account?',
                    a: 'Message our emergency WhatsApp helpline (wa.link/880088) immediately stating "Emergency Account Freeze". Our team will terminate all active sessions and change your login credentials within 30 seconds.'
                  },`;
code = code.replace(loginFaqItemsAnchor, loginFaqItemsExtra);

fs.writeFileSync(file, code, 'utf-8');
console.log('Successfully expanded AccountPages.tsx!');
