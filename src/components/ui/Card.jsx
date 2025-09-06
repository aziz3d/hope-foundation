import React from 'react';

const Card = ({ 
  children, 
  variant = 'default', 
  className = '', 
  hover = true,
  ...props 
}) => {
  const baseClasses = 'rounded-2xl transition-all duration-300';
  
  const variants = {
    default: 'bg-white shadow-lg border border-gray-100',
    glass: 'glass-card',
    gradient: 'bg-gradient-to-br from-blue-50 to-green-50 border border-blue-100',
    dark: 'bg-gray-900 text-white border border-gray-800'
  };
  
  const hoverClasses = hover ? 'hover:shadow-xl hover:-translate-y-1' : '';
  
  const classes = `${baseClasses} ${variants[variant]} ${hoverClasses} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;