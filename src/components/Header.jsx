import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, Phone, ArrowRight, ArrowUpRight, Shield, 
  Layers, Building2, Wrench, Clock, FileText, CheckCircle2
} from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const productLinks = [
    { name: 'Passenger Elevators', path: '/products/passenger-elevators', desc: 'Smooth, whisper-quiet transit for towers' },
    { name: 'Goods & Freight Elevators', path: '/products/goods-elevators', desc: 'Heavy-duty payload up to 10 tons' },
    { name: 'Hospital Bed Elevators', path: '/products/hospital-elevators', desc: 'Code Blue trauma priority & zero-jerk' },
    { name: 'Panoramic Glass Elevators', path: '/products/panoramic-elevators', desc: '360° architectural glass observation lifts' },
    { name: 'Home & Villa Elevators', path: '/products/home-elevators', desc: 'Single-phase 230V luxury compact lifts' },
    { name: 'Industrial Elevators', path: '/products/industrial-elevators', desc: 'Explosion-proof & harsh environment certified' },
  ];

  const serviceLinks = [
    { name: 'Turnkey Installation', path: '/services#elevator-installation', desc: 'Laser-guided alignment & statutory licensing' },
    { name: 'Preventive Maintenance', path: '/services#elevator-maintenance', desc: 'Proactive 38-point monthly inspections' },
    { name: '24/7 Breakdown Repair', path: '/services#elevator-repair', desc: '30-minute passenger entrapment rescue SLA' },
    { name: 'Modernization Upgrades', path: '/services#elevator-modernization', desc: 'Save up to 45% power with PMSM drives' },
    { name: 'Annual Maintenance (AMC)', path: '/services#amc-contracts', desc: 'Silver, Gold & Platinum care tiers' },
    { name: 'Safety Audits & Testing', path: '/services#technical-support-audits', desc: '125% dynamic load tests & IS 14665' },
  ];

  return (
    <>
      {/* Main Sticky Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#031426]/95 backdrop-blur-md shadow-xl py-3 border-b border-[#0799E8]/20' 
            : 'bg-[#031426] py-3.5 border-b border-slate-800/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo matching Reference Design */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                {/* Stylized Cyan Winged Bird Icon from reference */}
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

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link 
                to="/" 
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive('/') 
                    ? 'text-white bg-[#0799E8]/15 border-b-2 border-[#0799E8]' 
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Home
              </Link>

              <Link 
                to="/about" 
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive('/about') 
                    ? 'text-white bg-[#0799E8]/15 border-b-2 border-[#0799E8]' 
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                About Us
              </Link>

              {/* Products Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setProductsDropdownOpen(true)}
                onMouseLeave={() => setProductsDropdownOpen(false)}
              >
                <Link
                  to="/products"
                  className={`px-3 py-2 rounded-lg text-sm font-medium inline-flex items-center transition-all ${
                    isActive('/products') 
                      ? 'text-white bg-[#0799E8]/15 border-b-2 border-[#0799E8]' 
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180 text-[#0799E8]' : ''}`} />
                </Link>

                {productsDropdownOpen && (
                  <div className="absolute top-full left-0 w-80 pt-2 animate-fadeIn">
                    <div className="glass-dropdown rounded-2xl p-3 border border-[#0799E8]/30 shadow-2xl">
                      <div className="p-2 border-b border-slate-700/60 mb-2 flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#0799E8]">Elevator Systems</span>
                        <Link to="/products" className="text-xs text-slate-400 hover:text-white flex items-center">
                          View All <ArrowUpRight className="w-3 h-3 ml-0.5" />
                        </Link>
                      </div>
                      <div className="space-y-1">
                        {productLinks.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.path}
                            className="flex flex-col p-2.5 rounded-xl hover:bg-white/10 transition-colors group/item"
                          >
                            <span className="text-sm font-medium text-white group-hover/item:text-[#0799E8] transition-colors">
                              {item.name}
                            </span>
                            <span className="text-xs text-slate-400">
                              {item.desc}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link 
                to="/industries" 
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive('/industries') 
                    ? 'text-white bg-[#0799E8]/15 border-b-2 border-[#0799E8]' 
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Industries
              </Link>

              <Link 
                to="/projects" 
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive('/projects') 
                    ? 'text-white bg-[#0799E8]/15 border-b-2 border-[#0799E8]' 
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Our Projects
              </Link>

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <Link
                  to="/services"
                  className={`px-3 py-2 rounded-lg text-sm font-medium inline-flex items-center transition-all ${
                    isActive('/services') 
                      ? 'text-white bg-[#0799E8]/15 border-b-2 border-[#0799E8]' 
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#0799E8]' : ''}`} />
                </Link>

                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 w-80 pt-2 animate-fadeIn">
                    <div className="glass-dropdown rounded-2xl p-3 border border-[#0799E8]/30 shadow-2xl">
                      <div className="p-2 border-b border-slate-700/60 mb-2 flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#0799E8]">Lifecycle Services</span>
                        <Link to="/services" className="text-xs text-slate-400 hover:text-white flex items-center">
                          AMC & Rates <ArrowUpRight className="w-3 h-3 ml-0.5" />
                        </Link>
                      </div>
                      <div className="space-y-1">
                        {serviceLinks.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.path}
                            className="flex flex-col p-2.5 rounded-xl hover:bg-white/10 transition-colors group/item"
                          >
                            <span className="text-sm font-medium text-white group-hover/item:text-[#0799E8] transition-colors">
                              {item.name}
                            </span>
                            <span className="text-xs text-slate-400">
                              {item.desc}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link 
                to="/safety-quality" 
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive('/safety-quality') 
                    ? 'text-white bg-[#0799E8]/15 border-b-2 border-[#0799E8]' 
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Safety & Quality
              </Link>

              <Link 
                to="/contact" 
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive('/contact') 
                    ? 'text-white bg-[#0799E8]/15 border-b-2 border-[#0799E8]' 
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Action Button matching reference pill */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/request-quote"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm text-white bg-[#0799E8] hover:bg-[#0585cb] transition-all shadow-lg shadow-[#0799E8]/35 hover:shadow-xl hover:shadow-[#0799E8]/50 hover:-translate-y-0.5 group"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center space-x-3">
              <Link
                to="/request-quote"
                className="px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-[#0799E8] hover:bg-[#0585cb]"
              >
                Quote
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#031426] border-b border-slate-800 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto">
            <div className="space-y-1">
              <Link
                to="/"
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-white hover:bg-white/10"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-white/10"
              >
                About Us
              </Link>
              
              {/* Products Mobile Section */}
              <div className="py-2 border-t border-slate-800">
                <div className="px-3 py-1 text-xs font-bold text-[#0799E8] uppercase tracking-wider">
                  Elevator Solutions
                </div>
                {productLinks.map((p, idx) => (
                  <Link
                    key={idx}
                    to={p.path}
                    className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5"
                  >
                    • {p.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/industries"
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-white/10"
              >
                Industries
              </Link>
              <Link
                to="/projects"
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-white/10"
              >
                Our Projects
              </Link>

              {/* Services Mobile Section */}
              <div className="py-2 border-t border-slate-800">
                <div className="px-3 py-1 text-xs font-bold text-[#0799E8] uppercase tracking-wider">
                  Services & AMC
                </div>
                {serviceLinks.map((s, idx) => (
                  <Link
                    key={idx}
                    to={s.path}
                    className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5"
                  >
                    • {s.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/safety-quality"
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-white/10"
              >
                Safety & Quality Standards
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-white/10"
              >
                Contact Us
              </Link>

              <div className="pt-4 mt-2 border-t border-slate-800 flex flex-col space-y-3">
                <Link
                  to="/request-quote"
                  className="w-full text-center py-3 rounded-xl font-bold text-white bg-[#0799E8] hover:bg-[#0585cb] shadow-lg shadow-[#0799E8]/30"
                >
                  Request a Formal Quote
                </Link>
                <a
                  href="tel:+919820154321"
                  className="w-full text-center py-2.5 rounded-xl text-xs font-medium text-slate-300 bg-white/5 border border-slate-700 hover:bg-white/10"
                >
                  Emergency Hotline: +91 98201 54321
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
