import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import VideoModal from './VideoModal';

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight * 0.88,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center overflow-hidden bg-[#031426]">
      {/* Background Hero Image provided in reference */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat bg-[center_right] lg:bg-center"
        style={{ backgroundImage: `url('/hero-bg.png')` }}
      ></div>

      {/* Subtle responsive gradient overlay for mobile/tablet readability while preserving elevator visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#031426] via-[#031426]/85 sm:via-[#031426]/60 lg:via-transparent to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 lg:py-28">
        <div className="max-w-xl lg:max-w-2xl text-left">
          
          {/* Top Label: PREMIUM ELEVATOR SOLUTIONS with horizontal line */}
          <div className="flex items-center space-x-3 mb-4 sm:mb-5">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-slate-300">
              PREMIUM ELEVATOR SOLUTIONS
            </span>
            <span className="h-[1px] w-12 sm:w-20 bg-slate-500/60 inline-block"></span>
          </div>

          {/* Main Heading matching reference */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-5 sm:mb-6">
            Moving You Towards<br />
            a <span className="text-[#0799E8]">Better Future.</span>
          </h1>

          {/* Subtitle matching reference */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-lg mb-8 sm:mb-10 leading-relaxed font-normal">
            Innovative, safe and reliable lift solutions for residential, commercial and industrial spaces.
          </p>

          {/* Action Buttons matching reference pill design */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12 sm:mb-16">
            {/* Explore Our Solutions button */}
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-sm sm:text-base text-white bg-[#0799E8] hover:bg-[#0585cb] transition-all shadow-lg shadow-[#0799E8]/35 hover:shadow-xl hover:shadow-[#0799E8]/50 hover:-translate-y-0.5 group"
            >
              <span>Explore Our Solutions</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Watch Video button */}
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base text-white bg-black/30 backdrop-blur-sm border border-white/70 hover:bg-white/10 hover:border-white transition-all group"
            >
              <div className="w-6 h-6 rounded-full bg-white text-[#061B32] flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                <Play className="w-3 h-3 fill-[#061B32] ml-0.5" />
              </div>
              <span>Watch Video</span>
            </button>
          </div>

          {/* Scroll Down mouse pill indicator */}
          <div>
            <button
              onClick={handleScrollDown}
              className="inline-flex items-center space-x-3 text-slate-300 hover:text-white transition-colors cursor-pointer group"
              aria-label="Scroll down to explore features"
            >
              {/* Mouse Icon */}
              <div className="w-5 h-8 rounded-full border-2 border-slate-400 group-hover:border-[#0799E8] flex items-start justify-center p-1 transition-colors">
                <span className="w-1 h-2 rounded-full bg-slate-300 group-hover:bg-[#0799E8] animate-bounce"></span>
              </div>
              <span className="text-xs font-semibold tracking-wider text-slate-300 group-hover:text-white">
                Scroll Down
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* Video Modal */}
      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  );
}
