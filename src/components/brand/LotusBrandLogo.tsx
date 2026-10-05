"use client";

import Image from "next/image";
import Link from "next/link";

interface LotusBrandLogoProps {
  size?: "sm" | "md" | "lg";
  showSubtitle?: boolean;
  subtitle?: string;
  badge?: string;
  href?: string;
}

export function LotusBrandLogo({
  size = "md",
  showSubtitle = true,
  subtitle = "Official Admin Portal",
  badge = "OFFICIAL",
  href,
}: LotusBrandLogoProps) {
  const sizeMap = {
    sm: {
      imgSize: 32,
      textSize: "text-lg",
      badgeSize: "text-[8px] px-1.5 py-0.5",
      subSize: "text-[9px]",
    },
    md: {
      imgSize: 42,
      textSize: "text-xl sm:text-2xl",
      badgeSize: "text-[9px] px-1.5 py-0.5",
      subSize: "text-[10px]",
    },
    lg: {
      imgSize: 56,
      textSize: "text-2xl sm:text-3xl",
      badgeSize: "text-[10px] px-2 py-0.5",
      subSize: "text-xs",
    },
  }[size];

  const content = (
    <div className="flex items-center gap-3 group">
      {/* Brand Emblem Frame */}
      <div className="relative rounded-2xl bg-gradient-to-br from-[#14614C] to-[#093628] p-1.5 border border-[#F0C419]/40 shadow-[0_0_20px_-3px_rgba(240,196,25,0.4)] flex items-center justify-center group-hover:border-[#F0C419] transition-all shrink-0">
        <Image
          src="/lotus-logo.png"
          alt="Lotus365 Official Logo"
          width={sizeMap.imgSize}
          height={sizeMap.imgSize}
          className="object-contain drop-shadow"
          priority
        />
        <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-gray-950 flex items-center justify-center">
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
        </div>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-extrabold tracking-wider text-white ${sizeMap.textSize}`}>
            LOTUS<span className="text-[#F0C419]">365</span>
          </span>
          {badge && (
            <span
              className={`font-bold uppercase tracking-wider rounded bg-[#F0C419]/20 text-[#F0C419] border border-[#F0C419]/50 ${sizeMap.badgeSize}`}
            >
              {badge}
            </span>
          )}
        </div>
        {showSubtitle && (
          <span className={`text-slate-300 font-medium tracking-wide ${sizeMap.subSize}`}>
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} title="Lotus365 Admin Portal" className="inline-block">
        {content}
      </Link>
    );
  }

  return content;
}
