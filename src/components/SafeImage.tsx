import React, { useState } from 'react';
import { Compass } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-teal-950 via-teal-900 to-stone-900 text-stone-100 p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Compass className="w-8 h-8 text-teal-300 mb-2 opacity-80" />
        <span className="font-display text-sm font-medium tracking-tight text-stone-100">
          {fallbackTitle || alt}
        </span>
        <span className="text-xs text-teal-200/80 mt-1">
          Surigao del Sur · Philippines
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      loading="lazy"
    />
  );
};
