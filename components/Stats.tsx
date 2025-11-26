import React from 'react';
import { Clock, Leaf, Zap, ShieldCheck } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Stats: React.FC = () => {
  const stats = [
    {
      icon: <Clock className="h-8 w-8 text-white" />,
      value: "Save 45m",
      label: "Daily Commute",
      desc: "Get to class faster. No more rushing across campus.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Leaf className="h-8 w-8 text-white" />,
      value: "100%",
      label: "Zero Emissions",
      desc: "Pure electric power for a cleaner, greener campus air.",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      value: "₹3/min",
      label: "Student Pricing",
      desc: "Affordable rates designed specifically for student budgets.",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-white" />,
      value: "25 km/h",
      label: "Speed Capped",
      desc: "IoT-enabled speed limiting for maximum campus safety.",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section className="relative bg-slate-50 py-20 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Built for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">Future of Campus</span>
            </h2>
            <p className="text-lg text-slate-600">
              Smart, connected, and sustainable. VoltCampus redefines how you move.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index === 0 ? '' : index === 1 ? 'animate-delay-100' : index === 2 ? 'animate-delay-200' : 'animate-delay-300'}>
              <div 
                className="group relative bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10 overflow-hidden h-full"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-10 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-150`}></div>
                
                <div className={`inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br ${stat.color} shadow-lg shadow-emerald-500/20 mb-6 transform transition-transform duration-500 group-hover:rotate-6`}>
                  {stat.icon}
                </div>
                
                <h3 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">{stat.value}</h3>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">{stat.label}</p>
                <p className="text-slate-600 leading-relaxed text-sm font-medium opacity-80">{stat.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;