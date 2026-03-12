import React from "react";

export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Visgraat patroon - elegant en simpel */}
      <g opacity="0.9">
        {/* Eerste rij */}
        <rect x="20" y="25" width="15" height="4" fill="#92400e" transform="rotate(45 27.5 27)" />
        <rect x="35" y="25" width="15" height="4" fill="#b45309" transform="rotate(-45 42.5 27)" />
        
        {/* Tweede rij */}
        <rect x="20" y="35" width="15" height="4" fill="#b45309" transform="rotate(45 27.5 37)" />
        <rect x="35" y="35" width="15" height="4" fill="#92400e" transform="rotate(-45 42.5 37)" />
        
        {/* Derde rij */}
        <rect x="20" y="45" width="15" height="4" fill="#92400e" transform="rotate(45 27.5 47)" />
        <rect x="35" y="45" width="15" height="4" fill="#b45309" transform="rotate(-45 42.5 47)" />
        
        {/* Vierde rij */}
        <rect x="55" y="25" width="15" height="4" fill="#b45309" transform="rotate(45 62.5 27)" />
        <rect x="70" y="25" width="15" height="4" fill="#92400e" transform="rotate(-45 77.5 27)" />
        
        {/* Vijfde rij */}
        <rect x="55" y="35" width="15" height="4" fill="#92400e" transform="rotate(45 62.5 37)" />
        <rect x="70" y="35" width="15" height="4" fill="#b45309" transform="rotate(-45 77.5 37)" />
        
        {/* Zesde rij */}
        <rect x="55" y="45" width="15" height="4" fill="#b45309" transform="rotate(45 62.5 47)" />
        <rect x="70" y="45" width="15" height="4" fill="#92400e" transform="rotate(-45 77.5 47)" />
        
        {/* Onderste rijen */}
        <rect x="20" y="55" width="15" height="4" fill="#b45309" transform="rotate(45 27.5 57)" />
        <rect x="35" y="55" width="15" height="4" fill="#92400e" transform="rotate(-45 42.5 57)" />
        <rect x="55" y="55" width="15" height="4" fill="#92400e" transform="rotate(45 62.5 57)" />
        <rect x="70" y="55" width="15" height="4" fill="#b45309" transform="rotate(-45 77.5 57)" />
        
        <rect x="20" y="65" width="15" height="4" fill="#92400e" transform="rotate(45 27.5 67)" />
        <rect x="35" y="65" width="15" height="4" fill="#b45309" transform="rotate(-45 42.5 67)" />
        <rect x="55" y="65" width="15" height="4" fill="#b45309" transform="rotate(45 62.5 67)" />
        <rect x="70" y="65" width="15" height="4" fill="#92400e" transform="rotate(-45 77.5 67)" />
      </g>
    </svg>
  );
}
