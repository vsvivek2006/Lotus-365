import React from 'react';
import { TopBar } from '../../sections/TopBar';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { MobileBottomNav } from '../MobileBottomNav';
import { FloatingActions } from '../FloatingActions';
import { OFFICIAL_WHATSAPP_URL } from '../../data/landingData';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const handleOpenAuth = () => {
    window.open(OFFICIAL_WHATSAPP_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 flex flex-col selection:bg-brand-gold selection:text-black">
      <TopBar />
      <Header onOpenAuth={handleOpenAuth} />
      <main className="flex-1 pb-16 md:pb-0">
        {children}
      </main>
      <Footer onOpenAuth={handleOpenAuth} />
      <MobileBottomNav onOpenAuth={handleOpenAuth} />
      <FloatingActions />
    </div>
  );
};
