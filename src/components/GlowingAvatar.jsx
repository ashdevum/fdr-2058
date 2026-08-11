import React from 'react';

export const GlowingAvatar = () => {
  return (
    <div className="relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center select-none">
      {/* Ambient Quantum Backdrop Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/35 via-blue-500/25 to-purple-600/30 blur-2xl animate-pulse"></div>

      {/* SVG 3D Quantum Orb Graphic - 100% Transparent */}
      <svg className="w-full h-full relative z-10 overflow-visible" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Cyber Glow Filters */}
          <filter id="cyan-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur1" />
            <feGaussianBlur stdDeviation="16" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="badge-cyan-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gradients */}
          <linearGradient id="cyan-ring-1" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#06B6D4" />
            <stop offset="0.5" stopColor="#3B82F6" />
            <stop offset="1" stopColor="#8B5CF6" />
          </linearGradient>

          <linearGradient id="cyan-ring-2" x1="200" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#34D399" />
            <stop offset="0.6" stopColor="#38BDF8" />
            <stop offset="1" stopColor="#6366F1" />
          </linearGradient>

          <radialGradient id="quantum-glass-orb" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#38BDF8" stopOpacity="0.75" />
            <stop offset="70%" stopColor="#0284C7" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#075985" stopOpacity="0.98" />
          </radialGradient>

          <radialGradient id="cyber-core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#34D399" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0369A1" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="cyan-badge-grad" x1="0" y1="0" x2="42" y2="42" gradientUnits="userSpaceOnUse">
            <stop stopColor="#06B6D4" />
            <stop offset="1" stopColor="#3B82F6" />
          </linearGradient>
        </defs>

        {/* Orbiting Ring 1 (Outer Cyan Light Ring) */}
        <circle 
          cx="100" 
          cy="100" 
          r="84" 
          stroke="url(#cyan-ring-1)" 
          strokeWidth="3.5" 
          strokeDasharray="14 6"
          filter="url(#cyan-glow)"
        />

        {/* Orbiting Ring 2 (Inner Emerald/Blue Light Ring) */}
        <circle 
          cx="100" 
          cy="100" 
          r="72" 
          stroke="url(#cyan-ring-2)" 
          strokeWidth="4" 
          filter="url(#cyan-glow)"
        />

        {/* Sparkles / Light Specks */}
        <circle cx="30" cy="75" r="3" fill="#34D399" filter="url(#badge-cyan-glow)" />
        <circle cx="165" cy="145" r="3.5" fill="#38BDF8" filter="url(#badge-cyan-glow)" />
        <circle cx="145" cy="45" r="2.5" fill="#A7F3D0" filter="url(#badge-cyan-glow)" />
        <circle cx="45" cy="155" r="2.5" fill="#06B6D4" filter="url(#badge-cyan-glow)" />

        {/* Central 3D Quantum Glass Sphere Head */}
        <g>
          {/* Core Glow */}
          <circle cx="100" cy="100" r="48" fill="url(#cyber-core-glow)" />
          
          {/* Main 3D Sphere */}
          <circle 
            cx="100" 
            cy="100" 
            r="48" 
            fill="url(#quantum-glass-orb)" 
            stroke="rgba(186, 230, 253, 0.6)" 
            strokeWidth="1.8"
            style={{ filter: 'drop-shadow(0px 10px 25px rgba(2, 132, 199, 0.7))' }}
          />

          {/* Top Glass Highlight Reflection */}
          <ellipse cx="86" cy="70" rx="22" ry="11" fill="white" fillOpacity="0.55" transform="rotate(-28 86 70)" />
          <ellipse cx="118" cy="122" rx="9" ry="4.5" fill="white" fillOpacity="0.3" transform="rotate(32 118 122)" />

          {/* Glowing Eyes */}
          <circle cx="86" cy="95" r="5" fill="#FFFFFF" filter="url(#badge-cyan-glow)" />
          <circle cx="114" cy="95" r="5" fill="#FFFFFF" filter="url(#badge-cyan-glow)" />

          {/* Glowing Smile Arc */}
          <path 
            d="M 92 108 Q 100 115 108 108" 
            stroke="#FFFFFF" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
            fill="none"
            filter="url(#badge-cyan-glow)" 
          />
        </g>

        {/* Floating Cyan Badge with White Plus Sign on Top Right */}
        <g transform="translate(130, 32)" filter="url(#badge-cyan-glow)">
          <rect 
            x="0" 
            y="0" 
            width="36" 
            height="36" 
            rx="12" 
            fill="url(#cyan-badge-grad)" 
            stroke="#BAE6FD" 
            strokeWidth="1.8"
          />
          <rect x="3" y="3" width="30" height="13" rx="6" fill="white" fillOpacity="0.35" />
          
          {/* Plus Icon */}
          <path 
            d="M 18 9 V 27 M 9 18 H 27" 
            stroke="white" 
            strokeWidth="4" 
            strokeLinecap="round" 
          />
        </g>
      </svg>
    </div>
  );
};

export default GlowingAvatar;
