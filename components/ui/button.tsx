'use client';

import React from 'react';

interface ButtonProps {
  variant?: 'default' | 'outline';
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}

export const Button = ({ 
  variant = 'default', 
  className = '', 
  children,
  ...props 
}: ButtonProps) => {
  const baseStyles = 'px-4 py-2 rounded font-medium transition-colors';
  
  const variantStyles = {
    default: 'bg-purple-600 text-white hover:bg-purple-700',
    outline: 'border border-gray-300 hover:bg-gray-100 text-gray-700'
  };
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;
  
  return (
    <button 
      style={{
        padding: '0.5rem 1rem',
        borderRadius: '0.375rem',
        fontWeight: '500',
        transition: 'all 0.2s',
        backgroundColor: variant === 'default' ? '#8b5cf6' : 'transparent',
        color: variant === 'default' ? 'white' : '#6b7280',
        border: variant === 'outline' ? '1px solid #d1d5db' : 'none',
        cursor: 'pointer'
      }} 
      {...props}
    >
      {children}
    </button>
  );
};