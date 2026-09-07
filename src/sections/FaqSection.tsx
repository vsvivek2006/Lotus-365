import React, { useState } from 'react';
import { FAQ_DATA, OFFICIAL_WHATSAPP_URL } from '../data/landingData';
import { ChevronDown, Search, MessageCircle, HelpCircle } from 'lucide-react';

interface FaqProps {
  onOpenAuth?: (mode: 'login' | 'register') => void;
}

export const FaqSection: React.FC<FaqProps> = ({ onOpenAuth }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const handleWhatsApp = () => {
    if (onOpenAuth) {
      onOpenAuth('register');
    } else {
      window.open(OFFICIAL_WHATSAPP_URL, '_blank', 'noopener,noreferrer');
    }
  };

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="lotus365-faq-section py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header matching https://lottuss365.co/ */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-black/25 border border-white/20 text-xs font-bold text-[#F0C419] uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F0C419] tracking-tight mb-3 text-center">
            Lotus365 FAQ
          </h2>

          <p className="text-white/85 text-sm sm:text-base max-w-xl mx-auto">
            Everything you need to know about logging in, creating an instant ID, withdrawal speeds, and the Lotus365 VIP program.
          </p>
        </div>

        {/* Search Bar & Category Filter */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <Search className="w-4 h-4 text-white/60 absolute left-4 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. withdrawal, VIP, login, deposit, WhatsApp)..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-black/30 border border-white/20 text-white text-xs sm:text-sm focus:border-[#F0C419] focus:ring-1 focus:ring-[#F0C419] outline-none placeholder:text-white/50"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
            {[
              { id: 'all', label: 'All Topics' },
              { id: 'account', label: 'Account & Login' },
              { id: 'deposit', label: 'Deposit & Cashouts' },
              { id: 'vip', label: 'VIP Club' },
              { id: 'app', label: 'Mobile & Web App' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer font-semibold ${
                  activeCategory === tab.id
                    ? 'bg-[#F0C419] text-[#14614C]'
                    : 'bg-black/25 hover:bg-black/40 text-white/90 border border-white/15'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List with reference styles */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`lotus365-faq-item rounded-xl transition-all border ${
                    isOpen
                      ? 'bg-black/30 border-[#F0C419]/50 shadow-lg'
                      : 'bg-black/20 border-white/15 hover:border-white/30'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <h3 className="font-bold text-sm sm:text-base text-white leading-snug">
                      {faq.question}
                    </h3>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-[#F0C419] text-[#14614C]' : 'bg-white/10 text-white'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-white/85 leading-relaxed border-t border-white/10 pt-3">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center bg-black/20 rounded-2xl border border-white/10 text-white/70 text-sm">
              No matching questions found for "{searchQuery}". Contact our 24/7 WhatsApp desk for immediate assistance!
            </div>
          )}
        </div>

        {/* Quick Help Prompt */}
        <div className="mt-10 p-5 rounded-2xl bg-black/25 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-sm text-white">Still have questions?</h4>
            <p className="text-xs text-white/75">
              Our 24/7 WhatsApp helpdesk agents are active right now to assist you in seconds.
            </p>
          </div>
          <button
            onClick={handleWhatsApp}
            className="cta-button py-2.5 px-5 text-xs font-black shrink-0"
          >
            <MessageCircle className="w-4 h-4 mr-1.5" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};
