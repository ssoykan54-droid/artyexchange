import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'minimal';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  className = '',
  fullWidth = false
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] touch-manipulation';
  
  const variantClasses = {
    primary: 'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-500 shadow-elegant hover:shadow-elegant-lg',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400 shadow-sm hover:shadow-md',
    outline: 'border-2 border-gray-600 text-gray-300 hover:border-gray-400 hover:bg-gray-700 focus:ring-gray-400',
    ghost: 'text-gray-300 hover:text-white hover:bg-gray-700 focus:ring-gray-400',
    minimal: 'text-gray-400 hover:text-gray-200 focus:ring-gray-300'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm rounded-md min-h-[2rem]',
    md: 'px-4 py-2.5 text-base rounded-lg min-h-[2.5rem]',
    lg: 'px-6 py-3 text-lg rounded-lg min-h-[3rem]',
    xl: 'px-8 py-4 text-xl rounded-xl min-h-[3.5rem]'
  };
  
  const iconSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7'
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
    >
      {loading ? (
        <div className="animate-spin rounded-full h-5 w-5 border-2 border-current border-t-transparent mr-2" />
      ) : (
        Icon && iconPosition === 'left' && (
          <Icon className={`${iconSizeClasses[size]} ${children ? 'mr-2' : ''}`} />
        )
      )}
      {children}
      {!loading && Icon && iconPosition === 'right' && (
        <Icon className={`${iconSizeClasses[size]} ${children ? 'ml-2' : ''}`} />
      )}
    </button>
  );
};