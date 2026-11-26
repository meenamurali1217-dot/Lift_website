import React from 'react';
import { X, Play, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-[#061B32] border border-[#0799E8]/40 rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-4 px-6 border-b border-slate-700/60 bg-[#031426]">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-[#0799E8] flex items-center justify-center text-white">
              <Play className="w-4 h-4 fill-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-base">BlueStar Lifts Engineering Showcase</h3>
              <p className="text-xs text-slate-400">Precision manufacturing, safety systems & smart vertical mobility</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Presentation Area */}
        <div className="relative aspect-video w-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden">
          {/* Architectural Background */}
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80" 
            alt="Elevator Showcase" 
            className="absolute inset-0 w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061B32] via-[#061B32]/40 to-transparent"></div>

          {/* Video Showcase Content */}
          <div className="relative z-10 text-center px-6 max-w-xl">
            <div className="w-20 h-20 rounded-full bg-[#0799E8]/20 border-2 border-[#0799E8] text-[#0799E8] flex items-center justify-center mx-auto mb-6 shadow-xl animate-pulse">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>

            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#0799E8]/20 text-[#0799E8] border border-[#0799E8]/30 mb-3">
              Documentary & Technology Tour
            </span>

            <h4 className="text-2xl font-bold text-white mb-2">
              Engineering the Next Generation of Vertical Transit
            </h4>
            <p className="text-sm text-slate-300 mb-6">
              Watch how our permanent magnet synchronous gearless drives, 128-beam infrared curtain sensors, and predictive IoT monitoring deliver zero-jerk rides across India&apos;s landmarks.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-300">
              <span className="flex items-center">
                <ShieldCheck className="w-4 h-4 mr-1 text-[#0799E8]" /> IS 14665 Certified
              </span>
              <span className="flex items-center">
                <Zap className="w-4 h-4 mr-1 text-emerald-400" /> 45% Energy Reduction
              </span>
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 px-6 bg-[#031426] border-t border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-400">
            Need custom technical drawings or BIM/CAD elevator hoistway layout files?
          </span>
          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white"
            >
              Close
            </button>
            <Link
              to="/request-quote"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#0799E8] hover:bg-[#0585cb] flex items-center"
            >
              <span>Consult an Engineer</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
