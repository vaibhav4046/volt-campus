
import React from 'react';
import { ChevronRight, Download, Battery, MapPin, Lock, Wifi } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
      {/* Background Layering */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900" />
        
        {/* Primary Background Image with Slow Zoom Animation */}
        <img
          src="https://images.unsplash.com/photo-1571188659763-597055e81be6?q=80&w=2600&auto=format&fit=crop"
          alt="VoltCampus E-Bike Background"
          className="absolute inset-0 w-full h-full object-cover object-[75%] lg:object-right animate-slow-zoom transform-gpu"
        />

        {/* Cinematic Overlays for Readability */}
        {/* Darkens the image overall */}
        <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply"></div>
        
        {/* Stronger gradient on the left to protect text */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent md:to-slate-900/20"></div>
        
        {/* Texture overlay for polish */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center">
        <div className="max-w-3xl md:w-3/5 pt-20 md:pt-0">
          
          {/* Glassmorphism Container for Text */}
          <div className="glass-panel-dark p-8 md:p-12 rounded-[2.5rem] animate-fade-in-up border border-white/10 shadow-2xl backdrop-blur-xl">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md shadow-lg cursor-default">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-300 text-xs font-bold uppercase tracking-widest">Live on Campus</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 leading-[1.05] drop-shadow-2xl">
              <span className="block text-white">
                Volt<span className="text-emerald-400">Campus</span>
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-emerald-400 bg-[length:200%_auto] animate-[gradient_3s_ease_infinite]">
                Go Further.
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-xl leading-relaxed font-light drop-shadow-md">
              The Smart Electric Micro-Mobility Solution.
              <br />
              <span className="font-medium text-emerald-300">Save 45 mins daily</span>. Zero Emissions. 100% Fun.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="group relative flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] transform hover:-translate-y-1 overflow-hidden">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></span>
                <Download className="mr-3 h-6 w-6" />
                Get the App
              </button>
              <button className="flex items-center justify-center bg-white/5 hover:bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all backdrop-blur-md hover:border-white/40 transform hover:-translate-y-1">
                How it Works <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>

        </div>

        {/* HUD / AR Overlay Elements */}
        {/* Kept on the right, floating */}
        <div className="hidden md:flex w-2/5 relative h-[500px] flex-col justify-center items-end gap-6 pointer-events-none">
           {/* Card 1 */}
           <div className="animate-float animate-delay-100">
             <div className="glass-panel-dark p-4 rounded-2xl flex items-center gap-4 border-r-4 border-r-emerald-500 shadow-2xl backdrop-blur-xl bg-slate-900/40 w-64 transition-transform hover:scale-105">
               <div className="bg-emerald-500/20 p-2.5 rounded-xl relative">
                 <Battery className="h-6 w-6 text-emerald-400" />
                 <div className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_#34d399]"></div>
               </div>
               <div>
                 <div className="text-[10px] text-emerald-400/80 uppercase font-bold tracking-wider">Range Estimate</div>
                 <div className="text-white font-bold text-xl tracking-tight">45 km</div>
               </div>
             </div>
           </div>

           {/* Card 2 */}
           <div className="animate-float animate-delay-300">
             <div className="glass-panel-dark p-4 rounded-2xl flex items-center gap-4 border-r-4 border-r-cyan-500 shadow-2xl backdrop-blur-xl bg-slate-900/40 w-64 transition-transform hover:scale-105 translate-x-4">
               <div className="bg-cyan-500/20 p-2.5 rounded-xl">
                 <Wifi className="h-6 w-6 text-cyan-400" />
               </div>
               <div>
                 <div className="text-[10px] text-cyan-400/80 uppercase font-bold tracking-wider">Connectivity</div>
                 <div className="text-white font-bold text-xl tracking-tight">5G IoT</div>
               </div>
             </div>
           </div>

           {/* Card 3 */}
           <div className="animate-float animate-delay-500">
             <div className="glass-panel-dark p-4 rounded-2xl flex items-center gap-4 border-r-4 border-r-purple-500 shadow-2xl backdrop-blur-xl bg-slate-900/40 w-64 transition-transform hover:scale-105">
               <div className="bg-purple-500/20 p-2.5 rounded-xl">
                 <Lock className="h-6 w-6 text-purple-400" />
               </div>
               <div>
                 <div className="text-[10px] text-purple-400/80 uppercase font-bold tracking-wider">Smart Security</div>
                 <div className="text-white font-bold text-xl tracking-tight">Auto-Lock</div>
               </div>
             </div>
           </div>
        </div>
      </div>
      
      {/* CSS for Shimmer and Gradient */}
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
