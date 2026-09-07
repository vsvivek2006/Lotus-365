const fs = require('fs');
let code = fs.readFileSync('src/pages/AccountPages.tsx', 'utf-8');

// RegisterPage bump
code = code.replace(
  'Each customer is permitted one primary betting account linked to their mobile identifier to maintain exchange fairness and prevent bonus abuse.',
  'Each customer is permitted one primary betting account linked to their mobile identifier to maintain exchange fairness and prevent bonus abuse. Our compliance system automatically monitors account integrity to ensure genuine Indian sports fans enjoy clean peer-to-peer liquidity without syndicate manipulation or unauthorized bot interference.'
);

code = code.replace(
  'Lotus365 staff will never ask you to reveal your secret password or bank OTP.',
  'Lotus365 staff will never ask you to reveal your secret password or bank OTP. Keep your login credentials strictly private and avoid using public shared devices without logging out at the end of your gaming session.'
);

code = code.replace(
  'Lotus365 operates as a native Progressive Web App without app store downloads.',
  'Lotus365 operates as a native Progressive Web App without app store downloads. Simply bookmark lotus365officialid.com or tap "Add to Home Screen" on your iPhone or iPad for instant one-tap access directly from your mobile home screen.'
);

// LoginPage bump
code = code.replace(
  'Our team will terminate all active sessions and change your login credentials within 30 seconds.',
  'Our team will terminate all active sessions and change your login credentials within 30 seconds. Your account will undergo thorough security verification before being re-enabled with fresh credentials to ensure 100% wallet balance protection.'
);

// Add a quick section to RegisterPage
const regAnchor = `{/* Password Security Best Practices */}`;
const regExtra = `{/* Account Recovery Guarantee */}
            <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-[#F0C419]">
                Zero Risk Account Recovery & Re-Issuance Policy
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                If you ever misplace your smartphone, change your WhatsApp number, or delete your chat history, your balance and account progress are never lost. Simply reach out to our senior verification desk via our official domain lotus365officialid.com, verify your transaction history or registered banking details, and our compliance leads will re-link your verified ID with a new encrypted credential token in under two minutes.
              </p>
            </div>

`;
code = code.replace(regAnchor, regExtra + regAnchor);

// Add a quick section to LoginPage
const loginAnchor = `{/* Session Security Policies */}`;
const loginExtra = `{/* Cross-Browser Syncing */}
            <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-[#F0C419]">
                Seamless Cross-Device Synchronization
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Whether you place early-morning cricket exchange wagers on your MacBook or trade live IPL overs on your Android smartphone on the commute home, your open bets, matched positions, and wallet balances synchronize across all browser tabs in real time. Our low-latency WebSocket infrastructure ensures that any odds movement or cashout event reflects instantaneously regardless of which screen you are actively viewing.
              </p>
            </div>

`;
code = code.replace(loginAnchor, loginExtra + loginAnchor);

fs.writeFileSync('src/pages/AccountPages.tsx', code, 'utf-8');
console.log('Bumped AccountPages cleanly!');
