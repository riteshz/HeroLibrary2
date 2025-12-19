import React from 'react';
import { NavLink, useSearchParams, Link, useLocation } from 'react-router-dom';
import { 
  LayoutGrid, 
  Monitor, 
  Cpu, 
  Bitcoin, 
  Wallet, 
  ShoppingBag, 
  Briefcase, 
  User, 
  Terminal, 
  Megaphone,
  Sparkles
} from 'lucide-react';
import { Category } from '../types';
import { FILTER_OPTIONS } from '../constants';

interface SidebarProps {
  className?: string;
}

const CATEGORY_ICONS: Record<Category, React.ElementType> = {
  [Category.All]: LayoutGrid,
  [Category.SaaS]: Monitor,
  [Category.AI]: Sparkles,
  [Category.Web3]: Bitcoin,
  [Category.Fintech]: Wallet,
  [Category.Ecommerce]: ShoppingBag,
  [Category.Agency]: Briefcase,
  [Category.Portfolio]: User,
  [Category.DevTools]: Terminal,
  [Category.Marketing]: Megaphone,
};

const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  const categories = Object.values(Category);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  // Helper to generate filter URLs
  const getFilterUrl = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    const currentValue = newParams.get(key);
    
    // Toggle logic: if already selected, remove it
    if (currentValue === value) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    
    return `/?${newParams.toString()}`;
  };

  const isFilterActive = (key: string, value: string) => {
    return searchParams.get(key) === value;
  };

  return (
    <aside className={`w-64 flex-shrink-0 bg-white min-h-[calc(100vh-64px)] hidden lg:block sticky top-16 border-r border-zinc-100 ${className}`}>
      <div className="p-4 py-6 overflow-y-auto h-[calc(100vh-64px)] custom-scrollbar">
        
        {/* Categories Section */}
        <div className="mb-8">
          <h3 className="px-3 text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-3">
            Discover
          </h3>
          <nav className="space-y-0.5">
            {categories.map((category) => {
              const Icon = CATEGORY_ICONS[category];
              // Reset other filters when changing category to avoid confusion
              const path = category === Category.All ? '/' : `/?category=${encodeURIComponent(category)}`;
              
              return (
                <NavLink
                  key={category}
                  to={path}
                  className={({ isActive }) => {
                    const search = new URLSearchParams(location.search);
                    const currentCat = search.get('category');
                    const isActuallyActive = category === Category.All 
                      ? (!currentCat) 
                      : (currentCat === category);

                    return `group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                      isActuallyActive
                        ? 'bg-zinc-100 text-zinc-900'
                        : 'text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900'
                    }`;
                  }}
                >
                  <Icon className={`mr-3 h-4 w-4 transition-colors ${
                     // Icon color logic handled by parent class normally, but strict here
                     'text-current'
                  }`} />
                  {category}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Dynamic Filters Sections */}
        {Object.entries(FILTER_OPTIONS).map(([key, section]) => (
          <div key={key} className="mb-8">
            <h3 className="px-3 text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-3">
              {section.label}
            </h3>
            <div className="space-y-0.5">
              {section.options.map((option) => {
                const active = isFilterActive(key, option);
                return (
                  <Link
                    key={option}
                    to={getFilterUrl(key, option)}
                    className={`group flex items-center px-3 py-1.5 text-sm rounded-lg transition-colors ${
                      active
                        ? 'text-zinc-900 bg-zinc-100 font-medium'
                        : 'text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900'
                    }`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full mr-3 transition-all ${active ? 'bg-zinc-900 scale-110' : 'bg-zinc-300 group-hover:bg-zinc-400'}`} />
                    {option}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}

        {/* Resources Section */}
        <div className="pt-6 border-t border-zinc-100 mt-6">
           <nav className="space-y-0.5">
            <NavLink to="/submit" className="group flex items-center px-3 py-2 text-sm font-medium rounded-lg text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900">
               <span className="truncate">Submit a Hero</span>
            </NavLink>
             <NavLink to="#" className="group flex items-center px-3 py-2 text-sm font-medium rounded-lg text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900">
               <span className="truncate">Newsletter</span>
            </NavLink>
             <NavLink to="#" className="group flex items-center px-3 py-2 text-sm font-medium rounded-lg text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900">
               <span className="truncate">About Us</span>
            </NavLink>
           </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;