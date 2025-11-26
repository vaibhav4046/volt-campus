import React from 'react';
import { MapPin, Shield, AlertCircle, Award, Navigation } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Safety: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <ScrollReveal className="order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 border border-emerald-200 rounded-full px-4 py-1.5 mb-8">
              <Shield className="h-4 w-4 text-emerald-600" />
              <span className="text-emerald-800 text-xs font-bold uppercase tracking-wide">Safety First</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
              Safety Built Into <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">Every Ride.</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We've engineered our system to prioritize rider safety and campus regulations. 
              Our smart IoT fleet ensures a secure experience for everyone.
            </p>

            <div className="space-y-8">
              <SafetyItem 
                icon={<AlertCircle className="h-6 w-6" />}
                title="Speed Limiting"
                desc="GPS-controlled speed cap at 25km/h ensures safe maneuvering around pedestrians."
                color="blue"
              />
              <SafetyItem 
                icon={<MapPin className="h-6 w-6" />}
                title="Geo-Fencing Technology"
                desc="Rides can only end in designated Dock Zones. No clutter, no obstruction."
                color="emerald"
              />
              <SafetyItem 
                icon={<Award className="h-6 w-6" />}
                title="Christ Incubation Partner"
                desc="Officially incubated and verified for campus operations."
                color="purple"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal className="order-1 lg:order-2 relative perspective-1000" delay="animate-delay-200">
             {/* Abstract Background Shapes */}
             <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
             <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
             
             {/* 3D Map Card */}
             <div className="relative bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-slate-800 transform rotate-y-12 rotate-x-6 hover:rotate-0 transition-all duration-700 ease-out group h-[500px]">
                
                {/* Map Interface */}
                <div className="absolute inset-0 bg-[#0f172a]">
                  {/* Grid Pattern */}
                  <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)',
                      backgroundSize: '40px 40px'
                  }}></div>
                  
                  {/* Mock Route Path */}
                  <svg className="absolute inset-0 w-full h-full" style={{ filter: 'drop-shadow(0 0 10px rgba(16,185,129,0.5))' }}>
                    <path d="M100 400 Q 150 300 250 250 T 400 150" fill="none" stroke="#10b981" strokeWidth="4" strokeDasharray="10,5" className="animate-[dash_20s_linear_infinite]" />
                    <circle cx="100" cy="400" r="8" fill="#10b981" />
                    <circle cx="400" cy="150" r="8" fill="#ef4444" />
                  </svg>

                  {/* Zones */}
                  <div className="absolute top-[30%] left-[20%] w-40 h-40 border-2 border-emerald-500/50 rounded-full bg-emerald-500/10 flex items-center justify-center animate-pulse">
                     <div className="text-emerald-400 text-xs font-bold bg-slate-900/80 px-2 py-1 rounded backdrop-blur">Geo-Fence Active</div>
                  </div>
                  
                  {/* Scooter Marker */}
                  <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10 animate-bounce">
                    <Navigation className="text-emerald-600 h-6 w-6 fill-emerald-600" />
                  </div>
                </div>

                {/* Floating UI Elements */}
                <div className="absolute bottom-6 left-6 right-6 bg-slate-800/90 backdrop-blur-xl p-4 rounded-2xl border border-slate-700">
                   <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse"></div>
                        <span className="text-slate-300 font-mono text-sm">SYSTEM STATUS</span>
                      </div>
                      <span className="text-emerald-400 font-bold text-sm">ONLINE</span>
                   </div>
                   <div className="mt-3 flex justify-between text-xs text-slate-500">
                      <span>Zone: <span className="text-white">Campus Main</span></span>
                      <span>Speed: <span className="text-white">0 km/h</span></span>
                   </div>
                </div>
             </div>
          </ScrollReveal>
        </div>
      </div>
      
      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -1000; }
        }
        .perspective-1000 { perspective: 1000px; }
        .rotate-y-12 { transform: rotateY(-12deg) rotateX(5deg); }
      `}</style>
    </section>
  );
};

const SafetyItem: React.FC<{ icon: React.ReactNode; title: string; desc: string; color: string }> = ({ icon, title, desc, color }) => {
  const colorClasses: Record<string, string> = {
    blue: 'bg-blue-100 text-blue-600',
    emerald: 'bg-emerald-100 text-emerald-600',
    purple: 'bg-purple-100 text-purple-600'
  };

  return (
    <div className="flex group">
      <div className="flex-shrink-0">
        <div className={`flex items-center justify-center h-14 w-14 rounded-2xl ${colorClasses[color]} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
          {icon}
        </div>
      </div>
      <div className="ml-6">
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">{title}</h3>
        <p className="mt-2 text-slate-600 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Safety;