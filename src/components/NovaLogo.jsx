import React from 'react';

export const NovaLogo = () => {
  return (
    <div className="flex items-center gap-3.5 select-none">
      {/* Quantum Glowing Prism Logo Icon */}
      <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 p-[2px] shadow-[0_0_25px_rgba(6,182,212,0.5)]">
        <div className="w-full h-full bg-[#070b19] rounded-[14px] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 via-blue-500/25 to-purple-500/25 blur-xs"></div>
          
          {/* Cyber Prism Core SVG */}
          <svg className="w-6 h-6 relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M12 2L2 7L12 12L22 7L12 2Z" 
              stroke="url(#quantum-grad-1)" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
            <path 
              d="M2 17L12 22L22 17" 
              stroke="url(#quantum-grad-2)" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
            <path 
              d="M2 12L12 17L22 12" 
              stroke="url(#quantum-grad-3)" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
            <defs>
              <linearGradient id="quantum-grad-1" x1="2" y1="2" x2="22" y2="12" gradientUnits="userSpaceOnUse">
                <stop stopColor="#38BDF8" />
                <stop offset="1" stopColor="#818CF8" />
              </linearGradient>
              <linearGradient id="quantum-grad-2" x1="2" y1="17" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#06B6D4" />
                <stop offset="1" stopColor="#3B82F6" />
              </linearGradient>
              <linearGradient id="quantum-grad-3" x1="2" y1="12" x2="22" y2="17" gradientUnits="userSpaceOnUse">
                <stop stopColor="#34D399" />
                <stop offset="1" stopColor="#38BDF8" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      
      {/* Brand Text */}
      <div className="flex flex-col">
        <span className="text-2xl font-extrabold font-syne tracking-tight text-white drop-shadow-[0_2px_15px_rgba(56,189,248,0.3)] leading-none">
          NOVA<span className="text-cyan-400">.</span>
        </span>
        <span className="text-[10px] font-semibold tracking-[0.25em] text-cyan-400/70 uppercase mt-0.5">
          QUANTUM OS
        </span>
      </div>
    </div>
  );
};

export default NovaLogo;
