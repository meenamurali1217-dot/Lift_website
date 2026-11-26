import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, Hospital, ShoppingBag, Hotel, Factory, 
  GraduationCap, Home, ArrowRight, CheckCircle2 
} from 'lucide-react';
import CTASection from '../components/CTASection';

export default function Industries() {
  const industries = [
    {
      id: 'residential',
      title: 'Residential High-Rises & Gated Communities',
      subtitle: 'Whisper-quiet transit, energy efficiency, and child-safe access control.',
      icon: Home,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80',
      description: 'Modern apartment towers demand continuous reliability, quiet living spaces, and low energy costs. BlueStar Lifts provides permanent magnet gearless passenger lifts and private villa elevators with automatic power cut rescue (ARD) as standard.',
      recommended: [
        'Gearless PMSM Passenger Lifts',
        'Machine Room-Less (MRL) Elevators',
        'Duplex/Triplex Group Controllers'
      ],
      link: '/products/passenger-elevators'
    },
    {
      id: 'commercial',
      title: 'Commercial IT Parks & Corporate Towers',
      subtitle: 'High-speed dispatching engineered for zero morning rush bottlenecks.',
      icon: Building,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
      description: 'In Grade-A commercial office buildings, elevator waiting times define tenant satisfaction. Our destination dispatch supervisory systems and 4.0 m/s high-speed passenger elevators move thousands of professionals smoothly during peak morning hours.',
      recommended: [
        'High-Speed Gearless Passenger Elevators (Up to 4.0 m/s)',
        'Destination Group Supervisory Dispatch Kiosks',
        'Regenerative Drives with 35% Grid Power Recovery'
      ],
      link: '/products/passenger-elevators'
    },
    {
      id: 'hospitals',
      title: 'Hospitals & Super-Specialty Medical Centers',
      subtitle: 'Surgical precision, zero vibration, and Code Blue trauma priority.',
      icon: Hospital,
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80',
      description: 'Vertical mobility in healthcare facilities directly impacts patient survival. Our hospital bed elevators feature deep cabin dimensions, micro-level landing precision within ±2 mm to eliminate stretcher wheel shocks, and antimicrobial surgical finishes.',
      recommended: [
        'Hospital Bed & Stretcher Elevators',
        'Code Blue Trauma Priority Key Override',
        'Antimicrobial Non-Porous Stainless Steel 316 Cabins'
      ],
      link: '/products/hospital-elevators'
    },
    {
      id: 'shopping-malls',
      title: 'Shopping Malls & Retail Atriums',
      subtitle: 'Iconic observation capsules that turn vertical transit into a visual spectacle.',
      icon: ShoppingBag,
      image: 'https://images.unsplash.com/photo-1567449303078-57ad995bd302?auto=format&fit=crop&w=1000&q=80',
      description: 'Retail complexes thrive on open visual connection. BlueStar Lifts panoramic glass capsule elevators provide shoppers with breathtaking 360-degree vistas across shopping atriums, elevating footfall to upper dining and entertainment levels.',
      recommended: [
        'Semi-Circular & Capsule Panoramic Elevators',
        'Full Frameless Laminated Glass Hoistways',
        'High-Throughput Goods Elevators for Mall Loading Docks'
      ],
      link: '/products/panoramic-elevators'
    },
    {
      id: 'hotels',
      title: 'Luxury Hotels & Five-Star Resorts',
      subtitle: 'Silent luxury, bespoke etched finishes, and VIP keycard access.',
      icon: Hotel,
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80',
      description: 'Hotel elevators must reflect five-star hospitality. We fabricate custom cabins with titanium gold trims, Italian marble floors, and concealed indirect lighting, backed by whisper-quiet ride mechanics that never disturb resting guests.',
      recommended: [
        'Luxury Bespoke Interior Passenger Lifts',
        'Scenic Atrium Observation Elevators',
        'Back-of-House Service & Room-Service Trolley Lifts'
      ],
      link: '/products/panoramic-elevators'
    },
    {
      id: 'industrial',
      title: 'Industrial Facilities & Logistics Hubs',
      subtitle: 'Forklift-rated floor reinforcement and explosive environment resilience.',
      icon: Factory,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
      description: 'Heavy manufacturing plants, chemical refineries, and e-commerce distribution warehouses require elevators that can withstand brutal forklift impact and corrosive environments. We manufacture 1 to 10-ton freight elevators with explosion-proof options.',
      recommended: [
        'Heavy-Duty 1-10 Ton Goods & Freight Elevators',
        'Explosion-Proof / ATEX Certified Industrial Lifts',
        'Hydraulic Automobile Showroom Ramp Lifts'
      ],
      link: '/products/goods-elevators'
    },
    {
      id: 'educational',
      title: 'Educational Campuses & Universities',
      subtitle: 'High durability, universal barrier-free accessibility, and low maintenance.',
      icon: GraduationCap,
      image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1000&q=80',
      description: 'University campus buildings require robust, high-traffic elevator systems that withstand heavy student movement between classes while providing barrier-free universal accessibility for differently-abled students and faculty.',
      recommended: [
        'High-Durability Vandal-Resistant Passenger Lifts',
        'Braille & Audio Voice Annunciator Guidance Systems',
        'Heavy Traffic Full-Collective Group Controllers'
      ],
      link: '/products/passenger-elevators'
    }
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative py-24 bg-[#061B32] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#0799E8_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#0799E8]/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#0799E8]/20 text-[#0799E8] border border-[#0799E8]/30 mb-4">
            Vertical Solutions Across Sectors
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Industries We Empower
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            Engineered elevator solutions customized for the specialized passenger flows, structural challenges, and regulatory mandates of diverse industry verticals.
          </p>
        </div>
      </section>

      {/* Industries Showcase Sections */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {industries.map((ind, idx) => {
          const Icon = ind.icon;
          const isEven = idx % 2 === 0;

          return (
            <div 
              key={ind.id} 
              id={ind.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
            >
              {/* Image Column */}
              <div className={`lg:col-span-6 ${isEven ? '' : 'lg:order-2'}`}>
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl h-80 sm:h-96 group">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-[#0799E8] flex items-center justify-center text-white">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-bold">{ind.title}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className={`lg:col-span-6 space-y-5 ${isEven ? '' : 'lg:order-1'}`}>
                <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#0799E8]">
                  <span className="w-1.5 h-3.5 bg-[#0799E8] rounded-full"></span>
                  <span>Sector Focus</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#15283B] tracking-tight">
                  {ind.title}
                </h2>

                <p className="text-sm text-[#0799E8] font-semibold">
                  {ind.subtitle}
                </p>

                <p className="text-sm text-[#667789] leading-relaxed">
                  {ind.description}
                </p>

                {/* Recommended solutions */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                  <span className="text-xs font-bold uppercase text-slate-500 tracking-wider block">
                    Recommended Configurations:
                  </span>
                  {ind.recommended.map((rec, rIdx) => (
                    <div key={rIdx} className="flex items-center space-x-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0799E8] shrink-0" />
                      <span>{rec}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    to={ind.link}
                    className="inline-flex items-center px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0799E8] hover:bg-[#0585cb] transition-all shadow-md shadow-[#0799E8]/20"
                  >
                    <span>Explore {ind.title.split('&')[0]} Solutions</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <CTASection 
        title="Building an Industry-Specific Facility?"
        description="Our elevator application engineers can assist your architectural team with traffic analysis simulations and hoistway load calculations."
        buttonText="Request Industry Consultation"
      />
    </div>
  );
}
