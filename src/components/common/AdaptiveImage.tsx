"use client";
import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface AdaptiveImageProps extends Omit<ImageProps, 'onError'> {
  aspectRatio?: '16/9' | '4/3' | '1/1' | 'auto' | '21/9' | '3/2' | '16/10';
  containerClassName?: string;
  fallbackSrc?: string;
  overlayBadge?: string;
}

const aspectClasses = {
  '16/9': 'aspect-[16/9]',
  '4/3': 'aspect-[4/3]',
  '1/1': 'aspect-square',
  '21/9': 'aspect-[21/9]',
  '3/2': 'aspect-[3/2]',
  '16/10': 'aspect-[16/10]',
  'auto': '',
};

export const AdaptiveImage: React.FC<AdaptiveImageProps> = ({
  src,
  alt,
  aspectRatio = '16/9',
  containerClassName = '',
  className = '',
  fallbackSrc = '/images/banners/hero-cricket-stadium.svg',
  overlayBadge,
  priority = false,
  fill = true,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && fallbackSrc) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  const aspectClass = aspectClasses[aspectRatio] || '';

  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-[#07241c] ${aspectClass} ${containerClassName}`}
    >
      <Image
        src={imgSrc}
        alt={alt || 'Lotus365 Gaming visual'}
        fill={fill}
        priority={priority}
        sizes={sizes}
        className={`object-cover object-center transition-transform duration-300 group-hover:scale-105 ${className}`}
        onError={handleError}
        {...props}
      />
      {overlayBadge && (
        <div className="absolute top-3 left-3 z-10 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#F0C419] font-black text-[10px] tracking-wider uppercase">
          {overlayBadge}
        </div>
      )}
    </div>
  );
};
