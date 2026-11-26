import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const current = testimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div 
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative Glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[#0799E8]/20 via-[#0799E8]/5 to-transparent rounded-3xl blur-2xl -z-10"></div>

      {/* Main Glass Card */}
      <div className="bg-[#061B32]/80 backdrop-blur-xl border border-[#0799E8]/30 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        {/* Background Big Quote Icon */}
        <Quote className="absolute top-6 right-8 w-24 h-24 text-[#0799E8]/10 rotate-180 pointer-events-none" />

        <div className="relative z-10 flex flex-col justify-between min-h-[260px]">
          <div>
            {/* Star Rating */}
            <div className="flex items-center space-x-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-3 text-xs font-semibold text-[#0799E8] uppercase tracking-wider">
                Verified Client Review
              </span>
            </div>

            {/* Quote Title & Text */}
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-4">
              &ldquo;{current.title}&rdquo;
            </h4>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed italic mb-8 font-light">
              &ldquo;{current.quote}&rdquo;
            </p>
          </div>

          {/* Reviewer Profile & Navigation */}
          <div className="pt-6 border-t border-slate-700/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#0799E8] shadow-md shadow-[#0799E8]/20"
              />
              <div>
                <h5 className="text-base font-bold text-white">
                  {current.name}
                </h5>
                <p className="text-xs text-[#0799E8] font-medium">
                  {current.role} • {current.company}
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {current.location}
                </p>
              </div>
            </div>

            {/* Slider Navigation Controls */}
            <div className="flex items-center space-x-3 self-end sm:self-center">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-xl bg-white/5 border border-slate-700 hover:bg-[#0799E8] hover:border-[#0799E8] text-white flex items-center justify-center transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex space-x-1.5 px-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? 'w-7 bg-[#0799E8]' : 'w-2.5 bg-slate-600 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-xl bg-white/5 border border-slate-700 hover:bg-[#0799E8] hover:border-[#0799E8] text-white flex items-center justify-center transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
