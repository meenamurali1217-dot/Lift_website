import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Camera, Sparkles } from 'lucide-react';
import { companyGallery } from '../data/companyGallery';
import './CompanyGallery.css';

export default function CompanyGallery() {
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

  const totalItems = companyGallery.length;
  const maxIndex = Math.max(0, totalItems - itemsPerPage);

  // Autoplay functionality (every 3.5 seconds)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  // Adjust currentIndex if itemsPerPage changes
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

  // Mobile Touch handlers
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
      handleNext(); // Swiped left -> Next
    } else if (distance < -50) {
      handlePrev(); // Swiped right -> Prev
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  // Calculate sliding percentage per step
  const stepPercent = 100 / itemsPerPage;

  return (
    <section
      className="company-gallery-container py-20 bg-[#F5F8FC] relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Inside BlueStar Lifts Company Gallery"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Title, Subtitle, and Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FD] border border-[#0799E8]/30 text-[#0799E8] text-xs font-bold uppercase tracking-wider mb-4">
              <Camera className="w-3.5 h-3.5" />
              <span>Company Photography</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#061B32] tracking-tight">
              Inside <span className="text-[#0799E8]">BlueStar Lifts</span>
            </h2>
            <p className="mt-2 text-base text-[#50667a] font-normal leading-relaxed">
              A closer look at our work, projects and elevator solutions.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center space-x-3 self-end md:self-auto">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-white border border-slate-200 text-[#061B32] hover:bg-[#0799E8] hover:text-white hover:border-[#0799E8] shadow-sm flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#0799E8]"
              aria-label="Previous gallery images"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-white border border-slate-200 text-[#061B32] hover:bg-[#0799E8] hover:text-white hover:border-[#0799E8] shadow-sm flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#0799E8]"
              aria-label="Next gallery images"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div
          className="gallery-carousel-viewport"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="gallery-track"
            style={{
              transform: `translateX(-${currentIndex * stepPercent}%)`
            }}
          >
            {companyGallery.map((item) => (
              <div key={item.id} className="gallery-slide-card group">
                <div className="gallery-image-wrapper">
                  <span className="gallery-category-badge">
                    {item.category}
                  </span>
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="gallery-image"
                    loading="lazy"
                  />
                </div>
                <div className="gallery-card-content">
                  <h3 className="text-base font-bold text-[#061B32] group-hover:text-[#0799E8] transition-colors tracking-tight line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Indicator Dots */}
        <div className="flex items-center justify-center space-x-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                dotIdx === currentIndex
                  ? 'w-7 bg-[#0799E8]'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
