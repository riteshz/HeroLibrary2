import React, { useMemo } from 'react';
import { useLocation, useSearchParams, Link } from 'react-router-dom';
import { XCircle, Filter } from 'lucide-react';
import HeroCard from '../components/HeroCard';
import Button from '../components/Button';
import { MOCK_HEROES } from '../constants';
import { Category } from '../types';

const Home: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Parse query params
  const categoryParam = searchParams.get('category');
  const styleParam = searchParams.get('style');
  const themeParam = searchParams.get('theme');
  const layoutParam = searchParams.get('layout');
  const toolParam = searchParams.get('tool');
  
  const filteredHeroes = useMemo(() => {
    return MOCK_HEROES.filter(hero => {
      // 1. Category Filter
      if (categoryParam && categoryParam !== Category.All && hero.category !== categoryParam) {
        return false;
      }

      // 2. Style Filter
      if (styleParam && !hero.style.some(s => s.toLowerCase() === styleParam.toLowerCase())) {
        return false;
      }

      // 3. Color Theme Filter
      if (themeParam && !hero.style.some(s => s.toLowerCase() === themeParam.toLowerCase())) {
        return false;
      }

      // 4. Layout Filter
      if (layoutParam && !hero.features.layout.toLowerCase().includes(layoutParam.toLowerCase())) {
        return false;
      }

      // 5. Tool Filter
      if (toolParam && !hero.techStack.some(t => t.toLowerCase() === toolParam.toLowerCase())) {
        return false;
      }

      return true;
    });
  }, [categoryParam, styleParam, themeParam, layoutParam, toolParam]);

  // Check if any filter is active (excluding category which is more of a nav item, but we can clear it too if desired)
  // Let's consider category as a primary nav, and others as filters.
  const filtersActive = styleParam || themeParam || layoutParam || toolParam;

  const clearFilters = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('style');
    newParams.delete('theme');
    newParams.delete('layout');
    newParams.delete('tool');
    // We keep category
    setSearchParams(newParams);
  };

  let displayTitle = categoryParam ? `${categoryParam} Hero Sections` : 'The best hero section inspiration';
  
  if (filtersActive) {
     displayTitle = 'Filtered Results';
  }

  const displaySubtitle = categoryParam 
    ? `Curated selection of the best ${categoryParam} landing pages.` 
    : 'Hand-picked hero designs from the best websites on the web.';

  return (
    <div className="w-full pb-24">
      {/* Page Header */}
      <div className="mb-10 pt-6 border-b border-transparent">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 tracking-tight mb-2">
              {displayTitle}
            </h1>
            <p className="text-zinc-500 max-w-2xl text-base leading-relaxed">
              {displaySubtitle}
            </p>
          </div>
          
          {filtersActive && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={clearFilters}
              className="self-start md:self-auto text-zinc-600 border-zinc-200 hover:bg-zinc-50 gap-2"
            >
              <XCircle size={14} /> Clear Filters
            </Button>
          )}
        </div>
        
        {/* Active Filters Display (Optional visual confirmation) */}
        {filtersActive && (
          <div className="flex flex-wrap gap-2 mt-4">
            {styleParam && (
              <span className="inline-flex items-center px-2 py-1 rounded-md bg-zinc-100 text-xs font-medium text-zinc-700 border border-zinc-200">
                Style: {styleParam}
              </span>
            )}
             {themeParam && (
              <span className="inline-flex items-center px-2 py-1 rounded-md bg-zinc-100 text-xs font-medium text-zinc-700 border border-zinc-200">
                Theme: {themeParam}
              </span>
            )}
             {layoutParam && (
              <span className="inline-flex items-center px-2 py-1 rounded-md bg-zinc-100 text-xs font-medium text-zinc-700 border border-zinc-200">
                Layout: {layoutParam}
              </span>
            )}
             {toolParam && (
              <span className="inline-flex items-center px-2 py-1 rounded-md bg-zinc-100 text-xs font-medium text-zinc-700 border border-zinc-200">
                Tool: {toolParam}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Grid */}
      {filteredHeroes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10">
          {filteredHeroes.map(hero => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      ) : (
        <div className="py-24 text-center bg-white rounded-xl border border-dashed border-zinc-200">
          <div className="mx-auto w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center mb-4">
             <Filter className="text-zinc-400" size={20} />
          </div>
          <p className="text-zinc-900 font-medium text-lg">No matches found</p>
          <p className="text-zinc-500 mt-2 max-w-xs mx-auto">We couldn't find any hero sections matching those specific filters.</p>
          <Button variant="outline" className="mt-6" onClick={clearFilters}>
             Clear all filters
          </Button>
        </div>
      )}
      
      {/* SEO Content Block (Simulated pSEO) */}
      {!filtersActive && filteredHeroes.length > 0 && (
        <div className="mt-32 pt-12 border-t border-zinc-100">
          <h2 className="text-lg font-bold text-zinc-900 mb-6">
            Why {categoryParam || 'Great'} Hero Sections Matter
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm text-zinc-600 leading-relaxed">
            <div>
              <p className="mb-4">
                The hero section is the first thing a visitor sees when they land on your website. 
                It needs to communicate your value proposition clearly and concise within seconds. 
                For {categoryParam || 'modern'} companies, this means balancing aesthetics with conversion optimization.
              </p>
              <p>
                A strong hero section establishes trust immediately. It uses a combination of headline, 
                subheadline, and visual assets to guide the user's eye towards the primary call-to-action (CTA).
              </p>
            </div>
            <div>
              <p className="mb-4">
                Whether you are building a SaaS platform, an AI tool, or a portfolio, 
                studying high-converting examples is the best way to improve your own design.
                HeroGrids curates these examples so you don't have to hunt for them.
              </p>
              <p>
                We look for innovative layouts, compelling typography, and subtle interactions that 
                delight users without overwhelming them.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;