import React from 'react';

interface CardProps {
  children: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
  rotation: string;
  animation: string;
}

const Card: React.FC<CardProps> = ({ children, gradientFrom, gradientTo, rotation, animation }) => {
  return (
    <div className={`relative ${rotation} ${animation} group cursor-pointer transition-all duration-300 hover:scale-105`}>
      {/* Gradient border */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300`}></div>
      
      {/* Card content */}
      <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 m-1 h-40 flex items-end shadow-xl border border-white/20">
        <div className="text-black font-jakarta text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;