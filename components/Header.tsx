import React from 'react';
import { Menu, X } from 'lucide-react';
import { TabView } from '../types';
import { Logo } from './Logo';

interface HeaderProps {
  activeTab: TabView;
  setActiveTab: (tab: TabView) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinkClass = (tab: TabView) =>
    `cursor-pointer px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
      activeTab === tab
        ? 'bg-emerald-50 text-emerald-600'
        : 'text-slate-500 hover:text-emerald-600 hover:bg-slate-50'
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/50 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center cursor-pointer group" onClick={() => setActiveTab(TabView.MARKETING)}>
            <div className="flex items-center justify-center w-10 h-10 mr-3 transform group-hover:scale-110 transition-transform duration-300">
              <Logo className="w-full h-full" />
            </div>
            <span className="font-bold text-2xl tracking-tighter text-slate-900">
              Volt<span className="text-emerald-500">Campus</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-2 items-center">
            <button
              onClick={() => setActiveTab(TabView.MARKETING)}
              className={navLinkClass(TabView.MARKETING)}
            >
              Home
            </button>
            <button
              onClick={() => setActiveTab(TabView.DASHBOARD)}
              className={navLinkClass(TabView.DASHBOARD)}
            >
              Live Operations
            </button>
            <a
              href="#download"
              className="ml-4 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Download App
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-500 hover:text-emerald-600 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 absolute w-full animate-in slide-in-from-top-5">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <button
              onClick={() => {
                setActiveTab(TabView.MARKETING);
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:text-emerald-600 hover:bg-slate-50"
            >
              Home
            </button>
            <button
              onClick={() => {
                setActiveTab(TabView.DASHBOARD);
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:text-emerald-600 hover:bg-slate-50"
            >
              Live Operations
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;