import type { Metadata } from "next";
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";
import {
  Home,
  MessageCircle,
  HelpCircle,
  Trophy,
  Flame,
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingUp,
} from "lucide-react";
import { OFFICIAL_WHATSAPP_URL } from "@/data/landingData";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Lotus365 Official",
  description:
    "The page you are looking for does not exist on Lotus365 Official. Navigate back to live cricket exchange, casino tables, or connect with our 24/7 WhatsApp desk.",
  robots: {
    index: false,
    follow: true,
  },
};

const popularDestinations = [
  {
    title: "Cricket Exchange",
    desc: "Back & Lay odds on international cricket and IPL with 0% commission.",
    href: "/cricket-exchange",
    badge: "0% Commission",
    badgeColor: "bg-emerald-100 text-emerald-800",
    icon: Trophy,
  },
  {
    title: "Live Cricket Betting",
    desc: "Ball-by-ball micro-markets, session runs, and match winner odds.",
    href: "/cricket-betting",
    badge: "Live Feeds",
    badgeColor: "bg-blue-100 text-blue-800",
    icon: Flame,
  },
  {
    title: "Live Casino Lobby",
    desc: "1,000+ real dealer tables: Teen Patti, Andar Bahar & Roulette.",
    href: "/live-casino",
    badge: "1,000+ Tables",
    badgeColor: "bg-purple-100 text-purple-800",
    icon: Zap,
  },
  {
    title: "Spribe Aviator Pro",
    desc: "India's favorite crash game with 98.50% certified RTP & dual bets.",
    href: "/aviator-game",
    badge: "98.5% RTP",
    badgeColor: "bg-amber-100 text-amber-800",
    icon: TrendingUp,
  },
  {
    title: "Instant UPI Deposit",
    desc: "Fast 30-second top-up guide via PhonePe, Google Pay, and Paytm.",
    href: "/how-to-deposit",
    badge: "Zero Fee",
    badgeColor: "bg-emerald-100 text-emerald-800",
    icon: ShieldCheck,
  },
  {
    title: "2-Minute Cashouts",
    desc: "Guaranteed 120-second withdrawals directly to your Indian bank account.",
    href: "/how-to-withdraw",
    badge: "Guaranteed",
    badgeColor: "bg-emerald-100 text-emerald-800",
    icon: Zap,
  },
];

export default function NotFound() {
  return (
    <Layout>
      {/* 404 Hero Section with Emerald Gradient */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#064e3b] via-[#043d2c] to-[#022319] text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 border-b border-emerald-500/20">
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 text-yellow-300 border border-amber-400/40 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-yellow-300" />
            <span>HTTP 404 • Page Not Found</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            Lost Your Way on <span className="text-[#F0C419]">Lotus365</span>?
          </h1>

          <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
            The page you requested may have been renamed, moved, or consolidated into one of our flagship sports and gaming hubs. Everything you need is easily accessible below.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold bg-[#F0C419] hover:bg-[#e0b410] text-slate-900 shadow-lg hover:shadow-xl transition-all"
            >
              <Home className="w-4 h-4" />
              <span>Back to Official Homepage</span>
            </Link>

            <a
              href={OFFICIAL_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold bg-[#25D366] hover:bg-[#1faa4b] text-white shadow-lg hover:shadow-xl transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>24/7 WhatsApp Support Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* Flagship Directory Navigation on Crisp Light Slate */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Popular Lotus365 Destinations
            </h2>
            <p className="text-sm text-slate-600 max-w-xl mx-auto">
              Jump straight to the action with zero downtime. Select any of our core gaming or banking hubs:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {popularDestinations.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between group shadow-xs"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-900 text-base group-hover:text-emerald-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
                    <span>Explore Section</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Quick Support Assistance Callout */}
          <div className="p-6 rounded-2xl bg-emerald-900/10 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-extrabold text-slate-900 text-base">
                Looking for a Specific Cricket Match or Casino Table?
              </h4>
              <p className="text-xs text-slate-600">
                Our WhatsApp executive desk is active 24/7. Send us a message and we'll instantly generate your ID and share direct links.
              </p>
            </div>
            <a
              href={OFFICIAL_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold bg-[#25D366] hover:bg-[#1faa4b] text-white text-xs shrink-0 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat with Support (30s)</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
