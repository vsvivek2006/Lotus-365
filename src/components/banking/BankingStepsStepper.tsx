"use client";
import React, { useState } from 'react';
import { Clock, ShieldCheck, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { OFFICIAL_WHATSAPP_URL } from '@/data/landingData';

export const BankingStepsStepper: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'deposit' | 'withdraw'>('deposit');

  const depositSteps = [
    {
      num: '01',
      title: 'Message WhatsApp Concierge',
      desc: 'Send "Deposit" to our verified 24/7 business desk. Agent instantly provides verified UPI QR and payment VPA.',
      time: '⏱ Under 15 Seconds',
    },
    {
      num: '02',
      title: 'Pay via PhonePe, GPay, or Paytm',
      desc: 'Complete payment using any Indian banking app or UPI. Minimum deposit is just ₹100 with strict 0% processing fee.',
      time: '⏱ Under 30 Seconds',
    },
    {
      num: '03',
      title: 'Share 12-Digit UTR Number',
      desc: 'Paste screenshot or 12-digit UTR in chat. Automated financial gateway instantly credits your betting ID balance.',
      time: '⏱ Under 45 Seconds',
    },
  ];

  const withdrawSteps = [
    {
      num: '01',
      title: 'Request 2-Minute Cashout',
      desc: 'Message "Withdraw" with your Lotus365 username and desired cashout amount (minimum ₹500, no maximum cap).',
      time: '⏱ Under 20 Seconds',
    },
    {
      num: '02',
      title: 'Provide UPI ID or Bank Details',
      desc: 'Submit your preferred payout destination: PhonePe VPA, Google Pay number, Paytm UPI, or direct IMPS IFSC.',
      time: '⏱ Under 30 Seconds',
    },
    {
      num: '03',
      title: 'Funds Hit Your Bank Account',
      desc: 'Direct automated banking API disburses 100% of your funds. Bank SMS confirmation received on your phone.',
      time: '⏱ Guaranteed Under 120 Seconds',
    },
  ];

  const steps = activeTab === 'deposit' ? depositSteps : withdrawSteps;

  return (
    <div className="w-full rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xl text-slate-800">
      {/* Top Selector Strip */}
      <div className="p-5 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 block mb-0.5">
            Express Banking Infrastructure
          </span>
          <h3 className="text-xl font-black text-slate-900">Instant UPI &amp; IMPS Banking Blueprint</h3>
        </div>

        <div className="flex items-center p-1 rounded-xl bg-slate-200/70 border border-slate-300">
          <button
            onClick={() => setActiveTab('deposit')}
            className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
              activeTab === 'deposit'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-700 hover:text-slate-950'
            }`}
          >
            How to Deposit
          </button>
          <button
            onClick={() => setActiveTab('withdraw')}
            className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
              activeTab === 'withdraw'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-700 hover:text-slate-950'
            }`}
          >
            How to Withdraw
          </button>
        </div>
      </div>

      {/* 3 Steps Timeline */}
      <div className="p-6 sm:p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative hover:border-emerald-500/50 hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-slate-300 group-hover:text-emerald-700 transition-colors">
                    {step.num}
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-white border border-slate-200 text-emerald-800 font-mono shadow-xs">
                    {step.time}
                  </span>
                </div>
                <h4 className="text-base font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-2 border-t border-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero Documentation Required</span>
              </div>
            </div>
          ))}
        </div>

        {/* Speed Comparison Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#064e3b] via-[#047857] to-[#065f46] border border-emerald-600/30 flex flex-col md:flex-row items-center justify-between gap-6 text-white shadow-lg">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Clock className="w-4 h-4 text-amber-300" />
              <span className="text-xs font-bold text-emerald-100 uppercase tracking-wider">
                Audited Performance SLA
              </span>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white">
              Average Cashout: <span className="text-amber-300">114 Seconds</span>
            </div>
            <p className="text-xs text-emerald-50/90">
              Compared to 48–72 hours on traditional foreign bookmakers with invasive KYC delays.
            </p>
          </div>

          <a
            href={OFFICIAL_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto py-3 px-8 rounded-full bg-gradient-to-r from-[#F0C419] to-[#E5B510] text-slate-950 font-black text-sm hover:brightness-105 shadow-xl transition-all text-center shrink-0 flex items-center justify-center gap-2"
          >
            <Zap className="w-4 h-4 fill-current" />
            <span>Start Fast Banking on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

