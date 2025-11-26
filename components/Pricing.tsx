import React from 'react';
import { Check, Star, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="pricing">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="inline-block bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">Pricing Plans</div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Mobility for Every Budget
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              Transparent pricing. No hidden fees. Just ride.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
          {/* Pay Per Use */}
          <ScrollReveal delay="animate-delay-100">
            <div className="bg-white rounded-[2rem] p-8 lg:p-12 border border-slate-200 shadow-xl shadow-slate-200/40 hover:border-emerald-400 transition-all duration-300">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Pay-Per-Use</h3>
                  <p className="text-slate-500 mt-1">For the occasional rider</p>
                </div>
                <div className="bg-slate-100 p-3 rounded-xl">
                  <Zap className="text-slate-600" size={24} />
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-5xl font-black text-slate-900 tracking-tight">₹20</span>
                  <span className="text-slate-500 font-medium ml-2">unlock</span>
                </div>
                <div className="text-2xl font-bold text-emerald-600 mt-2">+ ₹3 <span className="text-slate-400 text-base font-normal">/ min</span></div>
              </div>
              
              <div className="space-y-4 mb-10">
                <PricingFeature text="No monthly commitment" />
                <PricingFeature text="Pay only for what you use" />
                <PricingFeature text="Access to all campus zones" />
              </div>

              <button className="w-full py-4 px-6 border-2 border-slate-900 text-slate-900 font-bold rounded-xl hover:bg-slate-900 hover:text-white transition-all duration-300">
                Start Riding
              </button>
            </div>
          </ScrollReveal>

          {/* Subscription - Highlighted */}
          <ScrollReveal delay="animate-delay-200">
            <div className="relative bg-slate-900 rounded-[2rem] p-8 lg:p-12 shadow-2xl shadow-emerald-500/20 transform lg:-translate-y-6 lg:scale-105 border border-slate-800">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl rounded-tr-2xl uppercase tracking-wider">
                Most Popular
              </div>
              
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white">Go Unlimited</h3>
                  <p className="text-slate-400 mt-1">The Monthly Pass</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-500 to-cyan-500 p-3 rounded-xl shadow-lg shadow-emerald-500/30">
                  <Star className="text-white" size={24} fill="currentColor" />
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-6xl font-black text-white tracking-tight">₹999</span>
                  <span className="text-slate-400 font-medium ml-2">/ month</span>
                </div>
                <p className="text-emerald-400 text-sm mt-2 font-medium">Save over ₹500 monthly*</p>
              </div>
              
              <div className="space-y-4 mb-10">
                <PricingFeature text="Unlimited Unlocks (Free)" light />
                <PricingFeature text="First 30 mins free per ride" light />
                <PricingFeature text="Priority Customer Support" light />
                <PricingFeature text="Reserve scooters in advance" light />
              </div>

              <button className="w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300 transform hover:-translate-y-1">
                Get Monthly Pass
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

const PricingFeature: React.FC<{ text: string; light?: boolean }> = ({ text, light }) => (
  <div className="flex items-center">
    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 ${light ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-600'}`}>
      <Check size={14} strokeWidth={3} />
    </div>
    <span className={`font-medium ${light ? 'text-slate-300' : 'text-slate-700'}`}>{text}</span>
  </div>
);

export default Pricing;