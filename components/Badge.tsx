import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'neutral' | 'dark';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ variant = 'default', children, className = '' }) => {
  const baseStyles = "inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium transition-colors tracking-wide";
  
  const variants = {
    default: "bg-zinc-900 text-white border border-zinc-900",
    dark: "bg-zinc-800 text-zinc-100 border border-zinc-800",
    outline: "border border-zinc-200 text-zinc-600 bg-transparent hover:border-zinc-300",
    neutral: "bg-zinc-100 text-zinc-700 border border-zinc-100",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;