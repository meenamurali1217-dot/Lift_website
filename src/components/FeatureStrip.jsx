import React from 'react';
import { Shield, Cog, Gem, Headphones } from 'lucide-react';

export default function FeatureStrip() {
  const features = [
    {
      icon: Shield,
      line1: 'Safety',
      line2: 'First'
    },
    {
      icon: Cog,
      line1: 'Innovative',
      line2: 'Design'
    },
    {
      icon: Gem,
      line1: 'Customer',
      line2: 'Focused'
    },
    {
      icon: Headphones,
      line1: 'Premium',
      line2: 'Quality'
    }
  ];

  return (
    <div className="relative z-20 max-w-4xl mx-auto px-4 -mt-8 sm:-mt-10">
      <div className="bg-white rounded-full py-3.5 px-6 sm:px-10 shadow-2xl shadow-slate-900/15 border border-slate-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div 
                key={index} 
                className={`flex items-center space-x-3.5 justify-center py-2 md:py-0 ${
                  index !== 0 ? 'md:pl-6' : ''
                } ${index !== features.length - 1 ? 'md:pr-6' : ''} group cursor-pointer transition-transform duration-200 hover:scale-105`}
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0799E8] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#0799E8]/25 group-hover:bg-[#0585cb] transition-colors">
                  <Icon className="w-5 h-5 fill-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-extrabold text-[#15283B] leading-tight group-hover:text-[#0799E8] transition-colors">
                    {feat.line1}
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-[#15283B] leading-tight group-hover:text-[#0799E8] transition-colors">
                    {feat.line2}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
