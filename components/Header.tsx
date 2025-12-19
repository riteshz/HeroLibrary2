import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Plus, Menu, X, Layout } from 'lucide-react';
import Button from './Button';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-zinc-200">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white shadow-sm">
                <Layout size={18} strokeWidth={2.5} />
              </div>
              <span className="font-bold text-lg tracking-tight text-zinc-900">HeroGrids</span>
            </Link>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-zinc-400 group-focus-within:text-zinc-600 transition-colors" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-zinc-200 rounded-full leading-5 bg-zinc-50 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:bg-white focus:border-zinc-300 focus:ring-2 focus:ring-zinc-100 sm:text-sm transition-all"
                placeholder="Search styles, brands, or stacks..."
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-zinc-400 text-[10px] font-medium border border-zinc-200 bg-white rounded px-1.5 py-0.5 shadow-sm">⌘K</span>
              </div>
            </div>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-3">
             {/* Only show "Submit" button if not on submit page */}
            {location.pathname !== '/submit' && (
              <Link to="/submit">
                <Button variant="outline" size="sm" className="rounded-full px-4 border-zinc-200 hover:bg-zinc-50">
                   Submit
                </Button>
              </Link>
            )}
            <Button size="sm" className="rounded-full px-5 shadow-sm hover:shadow-md transition-all">Subscribe</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-zinc-500 hover:text-zinc-700 focus:outline-none p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 bg-white pb-4 animate-in slide-in-from-top-2">
          <div className="px-4 py-3 space-y-3">
             <div className="relative w-full mb-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-zinc-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-zinc-200 rounded-lg leading-5 bg-zinc-50 text-zinc-900 placeholder-zinc-500 focus:outline-none focus:bg-white focus:border-zinc-300 focus:ring-0 sm:text-sm"
                placeholder="Search..."
              />
            </div>
            <Link 
              to="/submit" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full"
            >
              <Button variant="outline" className="w-full justify-center rounded-lg">Submit a Hero</Button>
            </Link>
            <Button className="w-full justify-center rounded-lg">Subscribe for Updates</Button>
            
            <div className="pt-4 border-t border-zinc-100">
               <p className="px-1 text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Categories</p>
               <div className="grid grid-cols-2 gap-2">
                 <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-zinc-600 py-1">All Heroes</Link>
                 <Link to="/?category=SaaS" onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-zinc-600 py-1">SaaS</Link>
                 <Link to="/?category=AI" onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-zinc-600 py-1">AI</Link>
                 <Link to="/?category=Fintech" onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-zinc-600 py-1">Fintech</Link>
               </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;