import React from 'react';

interface FadeInUpProps {
  children: React.ReactNode;
  delay?: string;
  className?: string;
}

export const FadeInUp: React.FC<FadeInUpProps> = ({ 
  children, 
  delay = '0s',
  className = '' 
}) => {
  return (
    <div 
      className={`opacity-0 animate-[fadeInUp_0.6s_${delay}_ease-out_forwards] ${className}`}
      style={{
        animationDelay: delay
      }}
    >
      {children}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};