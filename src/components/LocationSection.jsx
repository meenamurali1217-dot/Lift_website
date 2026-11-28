import React from 'react';
import { MapPin, Navigation, Clock, Building2, ExternalLink, ShieldCheck } from 'lucide-react';
import './LocationSection.css';

export default function LocationSection() {
  const directionsUrl =
    'https://www.google.com/maps/search/?api=1&query=HNO+4-1%2F206+Flat+No+206+MR+PALACE+NARAPALLY+Hyderabad+Telangana+500088+India';
  const embedUrl =
    'https://www.google.com/maps?q=HNO+4-1%2F206+Flat+No+206+MR+PALACE+NARAPALLY+Hyderabad+Telangana+500088+India&output=embed';

  const fullAddress =
    'HNO 4-1/206, Flat No. 206, MR Palace, Narapally, Hyderabad, Medchal Malkajgiri, Telangana – 500088, India.';

  return (
    <section className="location-section-container py-20 bg-gradient-to-b from-white via-[#F5F8FC] to-white relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#0799E8]/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#061B32]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FD] border border-[#0799E8]/30 text-[#0799E8] text-xs font-bold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Company Headquarters</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#061B32] tracking-tight">
            Visit Our <span className="text-[#0799E8]">Location</span>
          </h2>
          <p className="mt-3 text-base text-[#50667a] font-normal leading-relaxed">
            Find BlueStar Lifts and connect with our team.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Company Information */}
          <div className="lg:col-span-5 flex flex-col justify-between location-card-left p-6 sm:p-8">
            <div className="space-y-6">
              
              {/* Header Title with Verified Badge */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-black text-[#061B32] tracking-tight">
                    Blue<span className="text-[#0799E8]">Star</span> Lifts
                  </h3>
                  <p className="text-xs font-semibold text-[#0799E8] tracking-widest uppercase mt-0.5">
                    Registered Office & Operations
                  </p>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-600" /> GST Verified
                </span>
              </div>

              <div className="w-full h-px bg-slate-100"></div>

              {/* Complete Registered Address */}
              <div className="flex items-start space-x-4">
                <div className="w-11 h-11 rounded-xl bg-[#EAF6FD] text-[#0799E8] flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Official Complete Address
                  </span>
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm sm:text-base font-semibold text-[#15283B] hover:text-[#0799E8] transition-colors leading-relaxed mt-1 group"
                  >
                    {fullAddress}
                    <ExternalLink className="inline-block w-3.5 h-3.5 ml-1 text-[#0799E8] opacity-70 group-hover:opacity-100" />
                  </a>
                </div>
              </div>

              {/* Location Highlights & PIN */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-xl bg-[#F5F8FC] border border-slate-200/80">
                  <span className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                    Region
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#061B32] mt-0.5 block">
                    Narapally, Hyderabad
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F5F8FC] border border-slate-200/80">
                  <span className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                    PIN Code
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#0799E8] mt-0.5 block">
                    500088, Telangana
                  </span>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start space-x-4 pt-1">
                <div className="w-11 h-11 rounded-xl bg-[#F5F8FC] text-slate-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#0799E8]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Business Hours
                  </span>
                  <p className="text-xs sm:text-sm text-[#15283B] font-medium mt-0.5">
                    Monday – Saturday: 9:00 AM – 7:00 PM
                  </p>
                  <p className="text-[11px] text-emerald-600 font-semibold mt-0.5">
                    24/7 Breakdown & Emergency Helpline Active
                  </p>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-8 mt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0799E8] to-[#0284c7] text-white font-bold text-sm shadow-lg shadow-[#0799E8]/25 hover:shadow-xl hover:shadow-[#0799E8]/35 hover:-translate-y-0.5 transition-all group"
              >
                <Navigation className="w-4 h-4 transition-transform group-hover:rotate-45" />
                <span>Get Directions</span>
              </a>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-1.5 px-5 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:text-[#0799E8] hover:border-[#0799E8]/40 font-semibold text-sm transition-all"
              >
                <span>View Full Map</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7">
            <div className="location-map-wrapper">
              <iframe
                title="BlueStar Lifts - Narapally Hyderabad Google Map"
                src={embedUrl}
                className="location-map-iframe"
                loading="lazy"
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
