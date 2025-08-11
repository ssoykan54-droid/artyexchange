import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
  elevated?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'md',
  hover = false,
  elevated = false,
  onClick
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-3 md:p-4',
    md: 'p-4 md:p-6',
    lg: 'p-6 md:p-8',
    xl: 'p-8 md:p-10'
  };

  const shadowClass = elevated ? 'shadow-elegant' : 'shadow-sm';
  const hoverClasses = hover 
    ? 'hover:shadow-elegant-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer touch-manipulation' 
    : '';

  const clickableClasses = onClick ? 'cursor-pointer' : '';

  return (
    <div 
      className={`bg-gray-800 border border-gray-700 rounded-xl ${shadowClass} ${paddingClasses[padding]} ${hoverClasses} ${clickableClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};