import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  size?: 'large' | 'small';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  tags, 
  size = 'small' 
}) => {
  return (
    <div className={`bg-gray-100 rounded-2xl p-6 group hover:bg-gray-50 transition-colors duration-300 ${
      size === 'large' ? 'lg:col-span-2 lg:row-span-2' : ''
    }`}>
      {/* Image placeholder */}
      <div className={`bg-gray-200 rounded-xl mb-6 ${
        size === 'large' ? 'h-64 lg:h-80' : 'h-48'
      }`}></div>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span 
            key={index}
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-space-grotesk"
          >
            {tag}
          </span>
        ))}
      </div>
      
      {/* Content */}
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-space-grotesk font-semibold text-lg lg:text-xl text-gray-900 mb-2 leading-tight">
            {title}
          </h3>
          <p className="text-gray-600 font-space-grotesk text-sm mb-4">
            {description}
          </p>
          <button className="text-gray-900 font-space-grotesk text-sm font-medium hover:text-gray-600 transition-colors duration-200">
            View Project
          </button>
        </div>
        
        {size === 'large' && (
          <button className="bg-black text-white px-6 py-3 rounded-full font-space-grotesk text-sm font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2 ml-4">
            View Project
            <ArrowUpRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;