import React from 'react';

export default function CitySkylineArt({ className = "w-full h-28 text-[#0799E8]" }) {
  return (
    <svg 
      viewBox="0 0 600 160" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMax meet"
    >
      <defs>
        <linearGradient id="skylineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.25" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.03" />
        </linearGradient>
      </defs>

      {/* Background Subtle Silhouette Blocks */}
      <rect x="40" y="55" width="45" height="105" fill="url(#skylineGrad)" />
      <rect x="110" y="30" width="55" height="130" fill="url(#skylineGrad)" />
      <rect x="190" y="45" width="50" height="115" fill="url(#skylineGrad)" />
      <rect x="270" y="20" width="60" height="140" fill="url(#skylineGrad)" />
      <rect x="355" y="60" width="45" height="100" fill="url(#skylineGrad)" />
      <rect x="420" y="35" width="55" height="125" fill="url(#skylineGrad)" />
      <rect x="500" y="50" width="60" height="110" fill="url(#skylineGrad)" />

      {/* Tower 1 (Left low-rise) */}
      <rect x="15" y="90" width="35" height="70" stroke="currentColor" strokeWidth="1.5" />
      <line x1="22" y1="100" x2="43" y2="100" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="22" y1="115" x2="43" y2="115" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="22" y1="130" x2="43" y2="130" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="22" y1="145" x2="43" y2="145" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />

      {/* Tower 2 (Slanted roof with antenna) */}
      <polygon points="55,160 55,75 90,55 90,160" stroke="currentColor" strokeWidth="1.5" />
      <line x1="72" y1="55" x2="72" y2="30" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="72" cy="27" r="2.5" fill="currentColor" />
      <line x1="63" y1="80" x2="82" y2="80" stroke="currentColor" strokeWidth="1" />
      <line x1="63" y1="95" x2="82" y2="95" stroke="currentColor" strokeWidth="1" />
      <line x1="63" y1="110" x2="82" y2="110" stroke="currentColor" strokeWidth="1" />
      <line x1="63" y1="125" x2="82" y2="125" stroke="currentColor" strokeWidth="1" />
      <line x1="63" y1="140" x2="82" y2="140" stroke="currentColor" strokeWidth="1" />

      {/* Tower 3 (Stepped High-Rise) */}
      <path d="M100 160 L100 65 L110 65 L110 35 L145 35 L145 65 L155 65 L155 160" stroke="currentColor" strokeWidth="1.5" />
      <line x1="127" y1="35" x2="127" y2="12" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="127" cy="10" r="2" fill="currentColor" />
      {/* Grid Windows */}
      <line x1="116" y1="50" x2="139" y2="50" stroke="currentColor" strokeWidth="1" />
      <line x1="116" y1="62" x2="139" y2="62" stroke="currentColor" strokeWidth="1" />
      <line x1="106" y1="80" x2="149" y2="80" stroke="currentColor" strokeWidth="1" />
      <line x1="106" y1="95" x2="149" y2="95" stroke="currentColor" strokeWidth="1" />
      <line x1="106" y1="110" x2="149" y2="110" stroke="currentColor" strokeWidth="1" />
      <line x1="106" y1="125" x2="149" y2="125" stroke="currentColor" strokeWidth="1" />
      <line x1="106" y1="140" x2="149" y2="140" stroke="currentColor" strokeWidth="1" />

      {/* Tower 4 (Triangular Spire) */}
      <polygon points="165,160 165,80 185,40 205,80 205,160" stroke="currentColor" strokeWidth="1.5" />
      <line x1="185" y1="40" x2="185" y2="20" stroke="currentColor" strokeWidth="1.5" />
      <line x1="175" y1="90" x2="195" y2="90" stroke="currentColor" strokeWidth="1" />
      <line x1="175" y1="105" x2="195" y2="105" stroke="currentColor" strokeWidth="1" />
      <line x1="175" y1="120" x2="195" y2="120" stroke="currentColor" strokeWidth="1" />
      <line x1="175" y1="135" x2="195" y2="135" stroke="currentColor" strokeWidth="1" />
      <line x1="175" y1="150" x2="195" y2="150" stroke="currentColor" strokeWidth="1" />

      {/* Tower 5 (Modern Corporate High-Rise with Arch) */}
      <rect x="215" y="50" width="50" height="110" stroke="currentColor" strokeWidth="1.5" />
      <path d="M225 50 Q240 38 255 50" stroke="currentColor" strokeWidth="1.5" />
      <line x1="225" y1="70" x2="255" y2="70" stroke="currentColor" strokeWidth="1" />
      <line x1="225" y1="88" x2="255" y2="88" stroke="currentColor" strokeWidth="1" />
      <line x1="225" y1="106" x2="255" y2="106" stroke="currentColor" strokeWidth="1" />
      <line x1="225" y1="124" x2="255" y2="124" stroke="currentColor" strokeWidth="1" />
      <line x1="225" y1="142" x2="255" y2="142" stroke="currentColor" strokeWidth="1" />

      {/* Central Skyscraper (Tallest with needle) */}
      <path d="M275 160 L275 40 L285 25 L295 10 L305 25 L315 40 L315 160" stroke="currentColor" strokeWidth="1.8" />
      <line x1="295" y1="10" x2="295" y2="0" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="295" cy="0" r="1.5" fill="currentColor" />
      <line x1="285" y1="55" x2="305" y2="55" stroke="currentColor" strokeWidth="1" />
      <line x1="285" y1="70" x2="305" y2="70" stroke="currentColor" strokeWidth="1" />
      <line x1="285" y1="85" x2="305" y2="85" stroke="currentColor" strokeWidth="1" />
      <line x1="285" y1="100" x2="305" y2="100" stroke="currentColor" strokeWidth="1" />
      <line x1="285" y1="115" x2="305" y2="115" stroke="currentColor" strokeWidth="1" />
      <line x1="285" y1="130" x2="305" y2="130" stroke="currentColor" strokeWidth="1" />
      <line x1="285" y1="145" x2="305" y2="145" stroke="currentColor" strokeWidth="1" />

      {/* Tower 7 (Curved crown) */}
      <rect x="325" y="60" width="42" height="100" stroke="currentColor" strokeWidth="1.5" />
      <path d="M325 60 C335 48, 357 48, 367 60" stroke="currentColor" strokeWidth="1.5" />
      <line x1="333" y1="80" x2="359" y2="80" stroke="currentColor" strokeWidth="1" />
      <line x1="333" y1="98" x2="359" y2="98" stroke="currentColor" strokeWidth="1" />
      <line x1="333" y1="116" x2="359" y2="116" stroke="currentColor" strokeWidth="1" />
      <line x1="333" y1="134" x2="359" y2="134" stroke="currentColor" strokeWidth="1" />

      {/* Tower 8 (Multi-tiered glass skyscraper) */}
      <path d="M375 160 L375 55 L382 55 L382 35 L415 35 L415 55 L422 55 L422 160" stroke="currentColor" strokeWidth="1.5" />
      <line x1="398" y1="35" x2="398" y2="18" stroke="currentColor" strokeWidth="1.5" />
      <line x1="385" y1="75" x2="412" y2="75" stroke="currentColor" strokeWidth="1" />
      <line x1="385" y1="95" x2="412" y2="95" stroke="currentColor" strokeWidth="1" />
      <line x1="385" y1="115" x2="412" y2="115" stroke="currentColor" strokeWidth="1" />
      <line x1="385" y1="135" x2="412" y2="135" stroke="currentColor" strokeWidth="1" />

      {/* Tower 9 (Diagonal crown tower) */}
      <polygon points="430,160 430,70 465,45 465,160" stroke="currentColor" strokeWidth="1.5" />
      <line x1="438" y1="85" x2="457" y2="85" stroke="currentColor" strokeWidth="1" />
      <line x1="438" y1="105" x2="457" y2="105" stroke="currentColor" strokeWidth="1" />
      <line x1="438" y1="125" x2="457" y2="125" stroke="currentColor" strokeWidth="1" />
      <line x1="438" y1="145" x2="457" y2="145" stroke="currentColor" strokeWidth="1" />

      {/* Tower 10 (Right residential block) */}
      <rect x="475" y="75" width="45" height="85" stroke="currentColor" strokeWidth="1.5" />
      <line x1="483" y1="92" x2="512" y2="92" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="483" y1="110" x2="512" y2="110" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="483" y1="128" x2="512" y2="128" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="483" y1="146" x2="512" y2="146" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />

      {/* Far Right Low Rise */}
      <rect x="528" y="95" width="45" height="65" stroke="currentColor" strokeWidth="1.5" />
      <line x1="535" y1="112" x2="565" y2="112" stroke="currentColor" strokeWidth="1" />
      <line x1="535" y1="130" x2="565" y2="130" stroke="currentColor" strokeWidth="1" />
      <line x1="535" y1="148" x2="565" y2="148" stroke="currentColor" strokeWidth="1" />

      {/* Baseline */}
      <line x1="0" y1="160" x2="600" y2="160" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
