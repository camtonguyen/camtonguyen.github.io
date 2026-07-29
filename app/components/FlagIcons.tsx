import React from "react";

export function FlagEN({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      className={className}
      role="img"
      aria-label="English"
    >
      <clipPath id="uk-clip">
        <rect width="60" height="40" rx="4" />
      </clipPath>
      <g clipPath="url(#uk-clip)">
        <rect width="60" height="40" fill="#00247d" />
        <path d="M0 0 60 40M60 0 0 40" stroke="#fff" strokeWidth="8" />
        <path d="M0 0 60 40M60 0 0 40" stroke="#cf142b" strokeWidth="3" />
        <path d="M30 0V40M0 20H60" stroke="#fff" strokeWidth="12" />
        <path d="M30 0V40M0 20H60" stroke="#cf142b" strokeWidth="6" />
      </g>
    </svg>
  );
}

export function FlagVN({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      className={className}
      role="img"
      aria-label="Vietnamese"
    >
      <clipPath id="vn-clip">
        <rect width="60" height="40" rx="4" />
      </clipPath>
      <g clipPath="url(#vn-clip)">
        <rect width="60" height="40" fill="#da251d" />
        <polygon
          points="30,8 34,19 46,19 36,26 40,37 30,30 20,37 24,26 14,19 26,19"
          fill="#ff0"
        />
      </g>
    </svg>
  );
}
