import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, ExternalLink, MessageSquareQuote } from 'lucide-react';
import { googleReviews, GOOGLE_REVIEWS_URL } from '../data/googleReviews';
import './GoogleReviews.css';

export default function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const touchStartXRef = useRef(null);
  const touchEndXRef = useRef(null);

  // Responsive itemsPerPage calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalReviews = googleReviews.length;
  const maxIndex = Math.max(0, totalReviews - itemsPerPage);

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  // Adjust index on resize
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerPage, maxIndex, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Touch swipe support
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartXRef.current || !touchEndXRef.current) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  const stepPercent = 100 / itemsPerPage;

  return (
    <section
      className="google-reviews-container py-20 bg-white relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Google Customer Reviews"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FD] border border-[#0799E8]/30 text-[#0799E8] text-xs font-bold uppercase tracking-wider mb-4">
              <MessageSquareQuote className="w-3.5 h-3.5" />
              <span>Customer Satisfaction</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#061B32] tracking-tight">
              What Our <span className="text-[#0799E8]">Customers Say</span>
            </h2>
            <p className="mt-2 text-base text-[#50667a] font-normal leading-relaxed">
              Experiences and feedback from our customers.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center space-x-3 self-end md:self-auto">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-[#F5F8FC] border border-slate-200 text-[#061B32] hover:bg-[#0799E8] hover:text-white hover:border-[#0799E8] shadow-sm flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#0799E8]"
              aria-label="Previous customer reviews"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-[#F5F8FC] border border-slate-200 text-[#061B32] hover:bg-[#0799E8] hover:text-white hover:border-[#0799E8] shadow-sm flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#0799E8]"
              aria-label="Next customer reviews"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div
          className="reviews-carousel-viewport"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="reviews-track"
            style={{
              transform: `translateX(-${currentIndex * stepPercent}%)`
            }}
          >
            {googleReviews.map((review) => (
              <div key={review.id} className="review-slide-card">
                <div>
                  
                  {/* Card Top: Customer Avatar + Name & Google Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-11 h-11 rounded-full text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-md"
                        style={{ backgroundColor: review.avatarColor }}
                      >
                        {review.initials}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-[#061B32] tracking-tight">
                          {review.name}
                        </h3>
                        <p className="text-[11px] text-slate-500 font-medium">
                          {review.role}
                        </p>
                      </div>
                    </div>

                    {/* Official Multicolor Google G Icon Badge */}
                    <div className="google-review-badge">
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" aria-hidden="true">
                        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                        <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                      </svg>
                      <span>Review</span>
                    </div>
                  </div>

                  {/* Star Rating & Date */}
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center space-x-1 text-amber-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium">
                      • {review.date}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed italic">
                    &ldquo;{review.review}&rdquo;
                  </p>

                </div>

                {/* Card Bottom: Verified Tag */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-semibold text-emerald-600 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span>
                    Verified Customer Feedback
                  </span>
                  <span className="text-slate-400 text-[10px]">
                    (Demo Content)
                  </span>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Carousel Dots & Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-10 pt-4 border-t border-slate-100">
          
          {/* Dots Indicator */}
          <div className="flex items-center space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                  dotIdx === currentIndex
                    ? 'w-7 bg-[#0799E8]'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to review page ${dotIdx + 1}`}
              />
            ))}
          </div>

          {/* View All Google Reviews CTA Button */}
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2.5 px-6 py-3 rounded-xl bg-white border border-slate-200 hover:border-[#0799E8] text-[#061B32] hover:text-[#0799E8] font-bold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all group"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
              <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
            </svg>
            <span>View All Google Reviews</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0799E8] transition-colors" />
          </a>

        </div>

      </div>
    </section>
  );
}
