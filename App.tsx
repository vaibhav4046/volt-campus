import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import Safety from './components/Safety';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import { TabView } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabView>(TabView.MARKETING);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-grow">
        {activeTab === TabView.MARKETING ? (
          <div className="animate-in fade-in duration-500">
            <Hero />
            <Stats />
            <Pricing />
            <Safety />
          </div>
        ) : (
          <div className="animate-in fade-in duration-500">
            <Dashboard />
          </div>
        )}
      </main>

      {/* Persistent Components */}
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;