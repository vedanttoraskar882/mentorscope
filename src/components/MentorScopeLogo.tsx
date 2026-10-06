import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  isLight?: boolean;
}

export const MentorScopeLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  isLight = false,
}) => {
  const textSize = size === 'sm' ? 'text-xl' : size === 'lg' ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-[22px]';

  return (
    <div className={`inline-flex items-center tracking-tight font-bold select-none ${className}`}>
      <span className={`${textSize} font-bold tracking-tight flex items-center`}>
        <span className={isLight ? 'text-white' : 'text-navy-900'}>Mentor</span>
        <span className="text-teal-700">Scope</span>
      </span>
    </div>
  );
};
