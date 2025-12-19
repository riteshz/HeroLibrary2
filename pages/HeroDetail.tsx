import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Share2, Bookmark, Layers, Monitor, Palette, Type, MousePointerClick, Zap } from 'lucide-react';
import { MOCK_HEROES } from '../constants';
import Button from '../components/Button';
import Badge from '../components/Badge';
import HeroCard from '../components/HeroCard';

const HeroDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const hero = MOCK_HEROES.find(h => h.id === id);

  if (!hero) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <h2 className="text-2xl font-bold text-zinc-900">Hero not found</h2>
        <Link to="/" className="mt-4 text-blue-600 hover:underline">Return Home</Link>
      </div>
    );
  }

  const relatedHeroes = MOCK_HEROES
    .filter(h => h.category === hero.category && h.id !== hero.id)
    .slice(0, 3);

  return (
    <div className="pb-20 max-w-7xl mx-auto">
      {/* Breadcrumb / Back */}
      <div className="py-8 flex items-center justify-between">
        <Link to="/" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Back to gallery
        </Link>
        <div className="flex gap-3">
           <Button variant="outline" size="sm" className="gap-2 rounded-full border-zinc-200">
            <Share2 size={14} /> Share
           </Button>
           <Button variant="outline" size="sm" className="gap-2 rounded-full border-zinc-200">
             <Bookmark size={14} /> Save
           </Button>
           <a href={hero.websiteUrl} target="_blank" rel="noopener noreferrer">
             <Button size="sm" className="gap-2 rounded-full bg-zinc-900 hover:bg-zinc-800">
               Visit Live Site <ExternalLink size={14} />
             </Button>
           </a>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Col: Image (Span 8) */}
        <div className="lg:col-span-8 space-y-8">
          <div className="rounded-xl overflow-hidden border border-zinc-200 shadow-sm bg-zinc-50 aspect-video relative group">
            <img 
              src={hero.imageUrl} 
              alt={hero.title} 
              className="w-full h-full object-cover"
            />
             <div className="absolute bottom-4 right-4 bg-black/75 backdrop-blur text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                1920 x 1080
             </div>
          </div>
          
          <div className="bg-white rounded-xl border border-zinc-200 p-8">
             <h3 className="text-base font-bold text-zinc-900 mb-6 flex items-center gap-2">
                <Type size={18} className="text-zinc-400" /> Editorial Breakdown
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Typography</h4>
                  <p className="text-sm text-zinc-600 leading-relaxed">{hero.breakdown.headline}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Hierarchy</h4>
                  <p className="text-sm text-zinc-600 leading-relaxed">{hero.breakdown.hierarchy}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Interaction</h4>
                  <p className="text-sm text-zinc-600 leading-relaxed">{hero.breakdown.motion}</p>
                </div>
             </div>
          </div>
        </div>

        {/* Right Col: Metadata (Span 4) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-xl border border-zinc-200 p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <div className="mb-6 pb-6 border-b border-zinc-100">
              <h1 className="text-2xl font-bold text-zinc-900 mb-2">{hero.title}</h1>
              <p className="text-zinc-500 text-sm leading-relaxed">{hero.description}</p>
            </div>

            <div className="space-y-6">
              
              {/* Category & Industry */}
              <div className="flex justify-between items-center">
                 <span className="text-sm font-medium text-zinc-500">Industry</span>
                 <div className="flex gap-2 text-sm text-zinc-900 font-medium">
                    {hero.industry}
                 </div>
              </div>
              <div className="flex justify-between items-center">
                 <span className="text-sm font-medium text-zinc-500">Category</span>
                 <Badge variant="neutral">{hero.category}</Badge>
              </div>

              {/* Styles */}
              <div>
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-3">Style & Tone</span>
                <div className="flex flex-wrap gap-2">
                  {hero.style.map(s => <Badge key={s} variant="outline" className="bg-zinc-50">{s}</Badge>)}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-3 flex items-center gap-1.5">
                  <Monitor size={12} /> Tech Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {hero.techStack.map(t => (
                    <span key={t} className="text-xs font-medium text-zinc-600 bg-zinc-100/80 px-2.5 py-1 rounded-md border border-zinc-100">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div>
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-3 flex items-center gap-1.5">
                   <Palette size={12} /> Palette
                </span>
                <div className="flex gap-3">
                  {hero.colors.map(color => (
                    <div key={color} className="group relative">
                      <div 
                        className="w-8 h-8 rounded-full border border-zinc-200 shadow-sm cursor-pointer ring-2 ring-transparent hover:ring-zinc-200 transition-all"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 font-mono">
                        {color}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

               {/* Specs */}
               <div className="bg-zinc-50 rounded-lg p-4 space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-zinc-500 flex items-center gap-2"><Layers size={14}/> Layout</span>
                    <span className="font-medium text-zinc-900">{hero.features.layout}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-zinc-500 flex items-center gap-2"><MousePointerClick size={14}/> Primary CTA</span>
                    <span className="font-medium text-zinc-900">{hero.features.cta}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-zinc-500 flex items-center gap-2"><Zap size={14}/> Animation</span>
                    <span className="font-medium text-zinc-900">{hero.features.animation}</span>
                  </div>
              </div>

            </div>
          </div>
          
           {/* Ad / Promo Placeholder */}
          <div className="rounded-xl bg-zinc-900 p-6 text-white text-center shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-20 -mr-10 -mt-10"></div>
            <h4 className="font-bold text-lg mb-2 relative z-10">Building a SaaS?</h4>
            <p className="text-sm text-zinc-400 mb-5 relative z-10">Get the ultimate React landing page boilerplate to ship faster.</p>
            <Button size="sm" className="bg-white text-black hover:bg-zinc-100 w-full relative z-10 border-0">Check it out</Button>
          </div>
        </div>
      </div>

      {/* Related Section */}
      {relatedHeroes.length > 0 && (
        <div className="mt-24 border-t border-zinc-200 pt-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-zinc-900">Related Examples</h2>
            <Link to={`/?category=${hero.category}`} className="text-sm font-medium text-zinc-500 hover:text-zinc-900">View all {hero.category}</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedHeroes.map(h => (
              <HeroCard key={h.id} hero={h} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroDetail;