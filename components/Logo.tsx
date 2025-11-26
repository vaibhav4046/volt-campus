import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    viewBox="0 0 50 50" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    aria-label="VoltCampus Logo"
  >
    <path 
      d="M28.5 4L12 26H25L21 46L40 20H26L28.5 4Z" 
      fill="url(#volt_gradient)" 
      stroke="white" 
      strokeWidth="2" 
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="volt_gradient" x1="12" y1="4" x2="40" y2="46" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0ea5e9" /> {/* Sky Blue */}
        <stop offset="1" stopColor="#10b981" /> {/* Emerald */}
      </linearGradient>
    </defs>
  </svg>
);

export default Logo;