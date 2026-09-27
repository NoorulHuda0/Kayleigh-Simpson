import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto' : 'text-left'} ${className}`}>
      {eyebrow && (
        <span className="eyebrow block mb-3 font-semibold">
          {eyebrow}
        </span>
      )}
      <h2 className="text-[#111817] font-bold tracking-tight text-balance leading-tight">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-[#4B5552] text-base md:text-lg leading-relaxed ${isCenter ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
