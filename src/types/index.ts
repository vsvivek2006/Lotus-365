export interface LiveMatch {
  id: string;
  tournament: string;
  team1: {
    name: string;
    code: string;
    score?: string;
    flag?: string;
  };
  team2: {
    name: string;
    code: string;
    score?: string;
    flag?: string;
  };
  status: 'LIVE' | 'UPCOMING';
  timeInfo: string;
  backOdds: number;
  layOdds: number;
  market: string;
}

export interface GameItem {
  id: string;
  title: string;
  category: 'exchange' | 'casino' | 'aviator' | 'indian' | 'slots';
  provider: string;
  rtp: string;
  playersOnline: number;
  badge?: 'HOT' | 'NEW' | 'LIVE' | 'JACKPOT';
  gradient: string;
  iconType: 'dice' | 'cards' | 'plane' | 'cricket' | 'wheel' | 'crown';
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  icon: string;
  accent: 'gold' | 'emerald' | 'cyan';
}

export interface VipTier {
  id: string;
  name: string;
  level: string;
  tagline: string;
  cashback: string;
  withdrawalSpeed: string;
  depositBonus: string;
  limits: string;
  perks: string[];
  isPopular?: boolean;
}

export interface StepItem {
  stepNumber: string;
  title: string;
  description: string;
  subtext: string;
  actionText: string;
}

export interface ComparisonRow {
  parameter: string;
  lotus365: string;
  otherPlatforms: string;
  advantage: boolean;
}

export interface GuideArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  slug: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'account' | 'deposit' | 'vip' | 'app';
}
