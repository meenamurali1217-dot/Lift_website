import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Gem, Handshake, Wrench, Headphones,
  Box, Sparkles, Quote
} from 'lucide-react';
import Hero from '../components/Hero';
import FeatureStrip from '../components/FeatureStrip';
import CitySkylineArt from '../components/CitySkylineArt';
import ProjectDetailModal from '../components/ProjectDetailModal';
import { projects } from '../data/projects';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  // 4 Elevator Solutions matching reference mockup cards
  const elevatorSolutions = [
    {
      id: 'passenger-elevators',
      title: 'Passenger Lifts',
      subtitle: 'For homes & offices',
      image: '/products/passenger-lift.jpg',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <line x1="12" y1="2" x2="12" y2="22" />
          <polyline points="7 10 9 8 11 10" />
          <polyline points="13 14 15 16 17 14" />
        </svg>
      )
    },
    {
      id: 'goods-elevators',
      title: 'Goods Lifts',
      subtitle: 'For heavy loads',
      image: '/products/goods-lift.jpg',
      icon: <Box className="w-4 h-4" />
    },
    {
      id: 'hospital-elevators',
      title: 'Hospital Lifts',
      subtitle: 'For healthcare',
      image: '/products/hospital-lift.jpg',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M12 6v12M6 12h12" />
        </svg>
      )
    },
    {
      id: 'panoramic-elevators',
      title: 'Panoramic Lifts',
      subtitle: 'For architectural appeal',
      image: '/products/panoramic-lift.jpg',
      icon: <Sparkles className="w-4 h-4" />
    }
  ];

  // 4 Featured Projects with verified local assets
  const homeProjects = [
    {
      ...projects[0],
      thumb: '/projects/project-1.jpg',
      label: 'Commercial Office Tower'
    },
    {
      ...projects[3],
      thumb: '/projects/project-2.jpg',
      label: 'Grand Retail Galleria Atrium'
    },
    {
      ...projects[1],
      thumb: '/projects/project-3.jpg',
      label: 'Grade-A Corporate Headquarters'
    },
    {
      ...projects[2],
      thumb: '/projects/project-4.jpg',
      label: 'Luxury Residential Towers'
    }
  ];

  // Client testimonials with reference primary quote
  const clientQuotes = [
    {
      quote: "BlueStar Lifts delivered a premium elevator solution with excellent service and professional support.",
      attribution: "— Business Partner, India",
      avatar: "/avatar-client.jpg"
    },
    {
      quote: "Whisper-quiet ride quality and flawless laser-guided hoistway alignment. Their 24/7 technical team is outstanding.",
      attribution: "— Chief Project Director, Mumbai",
      avatar: "/avatar-client.jpg"
    },
    {
      quote: "The bespoke glass panoramic elevators elevated our shopping mall atrium into an iconic architectural landmark.",
      attribution: "— Head of Retail Infrastructure, Pune",
      avatar: "/avatar-client.jpg"
    },
    {
      quote: "Zero downtime across our super-specialty hospital. Code Blue trauma override works with millimetric leveling.",
      attribution: "— Hospital Medical Superintendent, Delhi",
      avatar: "/avatar-client.jpg"
    }
  ];

  // Auto-rotate testimonial
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonialIdx((prev) => (prev + 1) % clientQuotes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [clientQuotes.length]);

  return (
    <div className="bg-white">
      {/* Section 1: Hero Section */}
      <Hero />

      {/* Section 2: Floating Feature Capsule */}
      <FeatureStrip />

      {/* Section 3: Our Elevator Solutions */}
      <section className="pt-20 pb-0 bg-gradient-to-b from-white via-slate-50/30 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-16">
            
            {/* Left Column: Title, Subtitle, CTA Button, Skyline Sketch */}
            <div className="lg:col-span-3 lg:pr-2 flex flex-col justify-between self-stretch">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#061B32] tracking-tight leading-[1.15]">
                  Our Elevator<br />
                  <span className="text-[#0799E8]">Solutions</span>
                </h2>
                
                <p className="text-xs sm:text-sm text-slate-500 mt-3 mb-6 font-normal leading-relaxed">
                  Engineered for excellence, designed for you.
                </p>

                <Link
                  to="/products"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#061B32] text-white text-xs font-bold hover:bg-[#0799E8] transition-all shadow-md group"
                >
                  <span>View All Products</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Cyan City Skyline Sketch Illustration matching reference */}
              <div className="mt-8 pt-4 hidden lg:block">
                <CitySkylineArt className="w-full h-28 text-[#0799E8] opacity-60" />
              </div>
            </div>

            {/* Right Column: 4 Solution Cards in a Single Row */}
            <div className="lg:col-span-9">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {elevatorSolutions.map((sol) => (
                  <Link
                    key={sol.id}
                    to={`/products/${sol.id}`}
                    className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  >
                    {/* Top Image using user uploaded photos */}
                    <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-900">
                      <img
                        src={sol.image}
                        alt={sol.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    {/* Bottom Bar matching reference mockup */}
                    <div className="p-3 bg-white flex items-center space-x-2.5">
                      {/* Icon Circle */}
                      <div className="w-7 h-7 rounded-full bg-[#EBF6FD] text-[#0799E8] flex items-center justify-center shrink-0 group-hover:bg-[#0799E8] group-hover:text-white transition-colors duration-200 shadow-sm">
                        {sol.icon}
                      </div>

                      {/* Title & Subtitle */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center text-xs font-bold text-[#061B32] group-hover:text-[#0799E8] transition-colors truncate">
                          <span>{sol.title}</span>
                          <span className="ml-1 text-[11px] group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                        <div className="text-[10px] text-slate-400 truncate">
                          {sol.subtitle}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Smooth Dark Navy Wave Transition into Section 4 */}
        <div className="w-full overflow-hidden leading-none -mb-[1px]">
          <svg viewBox="0 0 1440 70" fill="none" className="w-full h-10 sm:h-14 text-[#031426]">
            <path d="M0,0 C380,65 920,10 1440,65 L1440,70 L0,70 Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Section 4: Why Choose BlueStar Lifts? */}
      <section className="bg-[#031426] text-white relative overflow-hidden py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Area: Heading, Text, and Outlined Pill Button */}
            <div className="lg:col-span-4 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.18]">
                Why Choose<br />
                <span className="text-[#0799E8]">BlueStar Lifts?</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-sm">
                We combine engineering excellence with modern technology to deliver lift solutions that exceed expectations.
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 px-5 py-2 rounded-full border border-white/70 text-white text-xs font-semibold hover:bg-white hover:text-[#031426] transition-all group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Center Area: 4 Icons Columns */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                
                {/* 1. Superior Quality */}
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-12 h-12 flex items-center justify-center text-[#0799E8] mb-2 group-hover:scale-110 transition-transform">
                    <Gem className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <span className="text-xs font-bold text-white leading-tight">
                    Superior<br />Quality
                  </span>
                </div>

                {/* 2. Expert Installation */}
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-12 h-12 flex items-center justify-center text-[#0799E8] mb-2 group-hover:scale-110 transition-transform">
                    <Handshake className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <span className="text-xs font-bold text-white leading-tight">
                    Expert<br />Installation
                  </span>
                </div>

                {/* 3. Reliable Maintenance */}
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-12 h-12 flex items-center justify-center text-[#0799E8] mb-2 group-hover:scale-110 transition-transform">
                    <Wrench className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <span className="text-xs font-bold text-white leading-tight">
                    Reliable<br />Maintenance
                  </span>
                </div>

                {/* 4. Dedicated Support */}
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-12 h-12 flex items-center justify-center text-[#0799E8] mb-2 group-hover:scale-110 transition-transform">
                    <Headphones className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <span className="text-xs font-bold text-white leading-tight">
                    Dedicated<br />Support
                  </span>
                </div>

              </div>
            </div>

            {/* Right Area: Skyscraper architectural visual with curved mask */}
            <div className="lg:col-span-3 relative">
              <div className="h-64 sm:h-72 w-full rounded-2xl rounded-l-[50px] lg:rounded-l-[90px] overflow-hidden border border-[#0799E8]/30 shadow-2xl relative">
                <img
                  src="/skyscraper.jpg"
                  alt="Modern Glass Skyscraper Low Angle"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#031426] via-transparent to-transparent opacity-60"></div>
                
                {/* Decorative badge in bottom corner */}
                <div className="absolute bottom-3 left-4 right-3 p-2 rounded-xl bg-[#031426]/85 backdrop-blur-md border border-slate-700/60 text-center">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#0799E8]">
                    IS 14665 & NBC Certified
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 5: Our Projects */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* Left Area: Heading, Subtitle, Outlined Pill Button */}
            <div className="lg:col-span-3 lg:pr-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#061B32] tracking-tight leading-[1.15]">
                Our <span className="text-[#0799E8]">Projects</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-500 mt-3 mb-6 font-normal leading-relaxed">
                A portfolio of our successful installations across India.
              </p>

              <Link
                to="/projects"
                className="inline-flex items-center space-x-2 px-5 py-2 rounded-full border border-[#0799E8] text-[#0799E8] text-xs font-semibold hover:bg-[#0799E8] hover:text-white transition-all group"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right Area: 4 Project Images in a Single Row */}
            <div className="lg:col-span-9">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {homeProjects.map((proj, idx) => (
                  <div
                    key={proj.id || idx}
                    onClick={() => setSelectedProject(proj)}
                    className="group bg-slate-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer relative h-44 sm:h-48"
                  >
                    <img
                      src={proj.thumb}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* Project Label Overlay */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="text-[10px] font-bold text-[#0799E8] uppercase tracking-wider">
                        {proj.category}
                      </div>
                      <div className="text-xs font-bold text-white truncate group-hover:text-[#0799E8] transition-colors">
                        {proj.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Section 6 & 7: Testimonial & CTA Split Banner matching reference */}
      <section className="pb-20 pt-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row relative bg-[#031426] border border-slate-800">
            
            {/* Left Side: What Our Clients Say (~58% width) */}
            <div className="lg:w-[58%] p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between min-h-[220px]">
              {/* Subtle Night City Skyline Background Image */}
              <img
                src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80"
                alt="City skyline at night"
                className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#031426] via-[#031426]/90 to-transparent"></div>

              <div className="relative z-10 flex items-start space-x-5">
                {/* Executive Avatar with Cyan Border Ring */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#0799E8] p-0.5 shrink-0 shadow-lg shadow-[#0799E8]/20 overflow-hidden bg-slate-800">
                  <img
                    src={clientQuotes[activeTestimonialIdx].avatar}
                    alt="Indian Business Partner"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>

                {/* Quote Content */}
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1.5">
                    <Quote className="w-5 h-5 text-[#0799E8] fill-[#0799E8] rotate-180" />
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      What Our Clients Say
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 italic font-light leading-relaxed">
                    &ldquo;{clientQuotes[activeTestimonialIdx].quote}&rdquo;
                  </p>

                  <p className="text-[11px] text-slate-400 font-medium mt-2">
                    {clientQuotes[activeTestimonialIdx].attribution}
                  </p>
                </div>
              </div>

              {/* 4 Carousel Dots */}
              <div className="relative z-10 flex items-center justify-end space-x-2 mt-4 pt-2">
                {clientQuotes.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setActiveTestimonialIdx(dotIdx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      dotIdx === activeTestimonialIdx
                        ? 'w-6 bg-[#0799E8]'
                        : 'w-2 bg-slate-600 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to testimonial ${dotIdx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Diagonal / Curved Seam Divider */}
            <div className="hidden lg:block w-[2px] bg-gradient-to-b from-[#0799E8] via-[#0799E8]/40 to-transparent self-stretch"></div>

            {/* Right Side: Have a Building Project in Mind? (~42% width) */}
            <div className="lg:w-[42%] bg-gradient-to-br from-[#044275] via-[#05518f] to-[#032d52] p-8 sm:p-10 relative overflow-hidden flex flex-col justify-center">
              
              {/* Cyan Vector City Skyline Illustration in Bottom-Right Corner */}
              <div className="absolute right-0 bottom-0 w-56 h-28 pointer-events-none opacity-45 overflow-hidden">
                <CitySkylineArt className="w-full h-full text-white" />
              </div>

              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug mb-2">
                  Have a Building Project in Mind?
                </h3>
                
                <p className="text-xs sm:text-sm text-sky-100 font-light leading-relaxed mb-6 max-w-sm">
                  Talk to our team about your elevator requirements.
                </p>

                <div>
                  <Link
                    to="/request-quote"
                    className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-white text-[#0799E8] font-bold text-xs sm:text-sm hover:bg-slate-100 shadow-xl shadow-black/25 hover:-translate-y-0.5 transition-all group"
                  >
                    <span>Request a Quote</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectDetailModal 
        project={selectedProject} 
        isOpen={Boolean(selectedProject)} 
        onClose={() => setSelectedProject(null)} 
      />

    </div>
  );
}
