import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#020d18] text-slate-300 relative overflow-hidden">
      {/* Cyan Wave Graphic Accent in Bottom-Right Corner (from reference mockup) */}
      <div className="absolute right-0 bottom-0 w-[420px] h-[180px] pointer-events-none opacity-90 overflow-hidden">
        <svg viewBox="0 0 420 180" fill="none" className="w-full h-full">
          <path 
            d="M50 180 C 140 130, 220 145, 290 90 C 350 40, 390 45, 420 10 L 420 180 Z" 
            fill="url(#cyanWaveGrad)" 
          />
          <path 
            d="M120 180 C 200 150, 270 160, 340 115 C 380 90, 405 85, 420 60 L 420 180 Z" 
            fill="#0799E8" 
            opacity="0.35" 
          />
          <defs>
            <linearGradient id="cyanWaveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0799E8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main 5-Column Content matching reference */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 items-start">
          
          {/* Column 1: Logo & Tagline */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center space-x-3 group">
              <div className="w-10 h-10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <svg viewBox="0 0 100 80" fill="none" className="w-full h-full text-[#0799E8] drop-shadow-[0_2px_8px_rgba(7,153,232,0.5)]">
                  <path d="M10 44 C 22 36, 42 22, 60 8 C 52 24, 46 40, 38 52 C 50 42, 70 28, 92 16 C 80 34, 68 52, 56 66 C 68 60, 82 52, 94 44 C 82 58, 64 72, 44 76 C 28 78, 14 65, 10 44 Z" fill="currentColor" />
                  <path d="M36 18 C 28 28, 20 40, 14 52 C 22 50, 30 46, 36 40 Z" fill="#38bdf8" opacity="0.8" />
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline leading-none">
                  <span className="text-xl font-black tracking-tight text-white">Blue<span className="text-[#0799E8]">Star</span></span>
                </div>
                <div className="flex items-center space-x-1.5 mt-0.5">
                  <span className="w-2.5 h-[1.5px] bg-[#0799E8]"></span>
                  <span className="text-[10px] tracking-[0.25em] font-extrabold text-white">L I F T S</span>
                  <span className="w-2.5 h-[1.5px] bg-[#0799E8]"></span>
                </div>
                <span className="text-[7.5px] tracking-[0.22em] uppercase text-slate-400 font-semibold mt-0.5">
                  BEYOND EXPECTATION
                </span>
              </div>
            </Link>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Solutions */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide mb-4">
              Our Solutions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/products/passenger-elevators" className="text-slate-400 hover:text-white transition-colors">
                  Passenger Lifts
                </Link>
              </li>
              <li>
                <Link to="/products/goods-elevators" className="text-slate-400 hover:text-white transition-colors">
                  Goods Lifts
                </Link>
              </li>
              <li>
                <Link to="/products/hospital-elevators" className="text-slate-400 hover:text-white transition-colors">
                  Hospital Lifts
                </Link>
              </li>
              <li>
                <Link to="/products/panoramic-elevators" className="text-slate-400 hover:text-white transition-colors">
                  Panoramic Lifts
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-center space-x-2.5 text-slate-400">
                <Phone className="w-4 h-4 text-[#0799E8] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center space-x-2.5 text-slate-400">
                <Mail className="w-4 h-4 text-[#0799E8] shrink-0" />
                <a href="mailto:info@bluestarlifts.in" className="hover:text-white transition-colors">
                  info@bluestarlifts.in
                </a>
              </li>
              <li className="flex items-center space-x-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-[#0799E8] shrink-0" />
                <span>
                  New Delhi, India
                </span>
              </li>
            </ul>
          </div>

          {/* Column 5: Follow Us */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide mb-4">
              Follow Us
            </h4>
            <div className="flex items-center space-x-2.5">
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white text-[#031426] hover:bg-[#0799E8] hover:text-white flex items-center justify-center transition-all duration-200 shadow-md"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m1.4 9.74V9.92H5.06v8.58z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white text-[#031426] hover:bg-[#0799E8] hover:text-white flex items-center justify-center transition-all duration-200 shadow-md"
                aria-label="YouTube"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white text-[#031426] hover:bg-[#0799E8] hover:text-white flex items-center justify-center transition-all duration-200 shadow-md"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white text-[#031426] hover:bg-[#0799E8] hover:text-white flex items-center justify-center transition-all duration-200 shadow-md"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Horizontal Bar matching reference */}
      <div className="relative z-10 border-t border-slate-800/80 py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 space-y-3 sm:space-y-0">
          <div>
            © 2025 BlueStar Lifts. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-slate-600">|</span>
            <Link to="/about" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span className="text-slate-600">|</span>
            <Link to="/contact" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
