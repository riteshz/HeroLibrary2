import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Bookmark } from 'lucide-react';
import { Hero } from '../types';
import Badge from './Badge';

interface HeroCardProps {
  hero: Hero;
}

const HeroCard: React.FC<HeroCardProps> = ({ hero }) => {
  return (
    <div className="group flex flex-col gap-3.5">
      {/* Image Container */}
      <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 shadow-sm transition-shadow duration-300 group-hover:shadow-md">
        <Link to={`/hero/${hero.id}`} className="block w-full h-full cursor-zoom-in">
          <img
            src={hero.imageUrl}
            alt={`${hero.title} Hero Section`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.02]"
          />
        </Link>
        
        {/* Overlay Actions */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button 
            className="p-2 bg-white/95 backdrop-blur-sm rounded-md border border-zinc-200 shadow-sm hover:bg-white text-zinc-700 transition-colors"
            title="Save to collection"
          >
            <Bookmark size={15} strokeWidth={2} />
          </button>
          <a 
            href={hero.websiteUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 bg-white/95 backdrop-blur-sm rounded-md border border-zinc-200 shadow-sm hover:bg-white text-zinc-700 transition-colors"
            title="Visit Website"
            onClick={(e) => e.stopPropagation()} 
          >
            <ExternalLink size={15} strokeWidth={2} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-1.5 px-0.5">
        <div className="flex items-center justify-between">
          <Link to={`/hero/${hero.id}`} className="group/title">
             <h3 className="font-semibold text-zinc-900 text-[15px] leading-tight group-hover/title:underline decoration-zinc-300 underline-offset-4">{hero.title}</h3>
          </Link>
          <span className="text-[11px] font-medium text-zinc-400">{hero.savedCount} saves</span>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-0.5">
          <Badge variant="neutral" className="bg-zinc-100 text-zinc-600 border-transparent">{hero.category}</Badge>
          {hero.style.slice(0, 2).map(s => (
             <Badge key={s} variant="outline" className="text-zinc-500">{s}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCard;