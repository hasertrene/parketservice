import React from "react";

export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Visgraat patroon - iets steviger maar nog steeds elegant */}
      <g opacity="0.95">
        {/* Eerste rij */}
        <rect x="20" y="24" width="18" height="6" rx="2" fill="#92400e" transform="rotate(45 29 27)" />
        <rect x="35" y="24" width="18" height="6" rx="2" fill="#b45309" transform="rotate(-45 44 27)" />
        
        {/* Tweede rij */}
        <rect x="20" y="34" width="18" height="6" rx="2" fill="#b45309" transform="rotate(45 29 37)" />
        <rect x="35" y="34" width="18" height="6" rx="2" fill="#92400e" transform="rotate(-45 44 37)" />
        
        {/* Derde rij */}
        <rect x="20" y="44" width="18" height="6" rx="2" fill="#92400e" transform="rotate(45 29 47)" />
        <rect x="35" y="44" width="18" height="6" rx="2" fill="#b45309" transform="rotate(-45 44 47)" />
        
        {/* Vierde rij */}
        <rect x="55" y="24" width="18" height="6" rx="2" fill="#b45309" transform="rotate(45 64 27)" />
        <rect x="70" y="24" width="18" height="6" rx="2" fill="#92400e" transform="rotate(-45 79 27)" />
        
        {/* Vijfde rij */}
        <rect x="55" y="34" width="18" height="6" rx="2" fill="#92400e" transform="rotate(45 64 37)" />
        <rect x="70" y="34" width="18" height="6" rx="2" fill="#b45309" transform="rotate(-45 79 37)" />
        
        {/* Zesde rij */}
        <rect x="55" y="44" width="18" height="6" rx="2" fill="#b45309" transform="rotate(45 64 47)" />
        <rect x="70" y="44" width="18" height="6" rx="2" fill="#92400e" transform="rotate(-45 79 47)" />
        
        {/* Onderste rijen */}
        <rect x="20" y="54" width="18" height="6" rx="2" fill="#b45309" transform="rotate(45 29 57)" />
        <rect x="35" y="54" width="18" height="6" rx="2" fill="#92400e" transform="rotate(-45 44 57)" />
        <rect x="55" y="54" width="18" height="6" rx="2" fill="#92400e" transform="rotate(45 64 57)" />
        <rect x="70" y="54" width="18" height="6" rx="2" fill="#b45309" transform="rotate(-45 79 57)" />
        
        <rect x="20" y="64" width="18" height="6" rx="2" fill="#92400e" transform="rotate(45 29 67)" />
        <rect x="35" y="64" width="18" height="6" rx="2" fill="#b45309" transform="rotate(-45 44 67)" />
        <rect x="55" y="64" width="18" height="6" rx="2" fill="#b45309" transform="rotate(45 64 67)" />
        <rect x="70" y="64" width="18" height="6" rx="2" fill="#92400e" transform="rotate(-45 79 67)" />
      </g>
    </svg>
  );
}
