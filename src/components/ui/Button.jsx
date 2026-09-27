import React from 'react';

/**
 * Reusable Button component respecting design tokens:
 * - 8px radius
 * - Single-line controls (whitespace-nowrap)
 * - Restrained palette & smooth transition
 */
export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  external = false,
  type = 'button',
  icon: Icon,
  ...props
}) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-medium text-sm md:text-base px-5 py-2.5 rounded-[8px] transition-all duration-200 ease-out whitespace-nowrap cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2';

  const variants = {
    primary: 'bg-[#0F392B] text-white hover:bg-[#164E3B] shadow-[0_2px_8px_rgba(15,57,43,0.15)] hover:shadow-[0_4px_14px_rgba(15,57,43,0.25)] focus-visible:outline-[#059669]',
    secondary: 'bg-white text-[#0F392B] border border-[#E3E8E5] hover:bg-[#F2F5F3] hover:border-[#CAD4CE] shadow-[0_1px_3px_rgba(0,0,0,0.04)] focus-visible:outline-[#0F392B]',
    accent: 'bg-[#059669] text-white hover:bg-[#047857] shadow-[0_2px_8px_rgba(5,150,105,0.2)] hover:shadow-[0_4px_14px_rgba(5,150,105,0.3)] focus-visible:outline-[#047857]',
    outline: 'bg-transparent text-[#0F392B] border border-[#0F392B] hover:bg-[#0F392B] hover:text-white focus-visible:outline-[#0F392B]',
    ghost: 'bg-transparent text-[#4B5552] hover:text-[#0F392B] hover:bg-[#F2F5F3] focus-visible:outline-[#059669]',
  };

  const combinedClasses = `${baseClasses} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
        {Icon && <Icon className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      {...props}
    >
      {children}
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
    </button>
  );
}
