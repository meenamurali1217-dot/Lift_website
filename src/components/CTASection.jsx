import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Phone, CheckCircle2 } from 'lucide-react';

export default function CTASection({ 
  title = "Have a Building Project in Mind?", 
  description = "Talk to our elevator engineering team about your hoistway dimensions, traffic flow modeling, and custom cabin requirements.",
  buttonText = "Request a Quote"
}) {
  return (
    <section className="relative overflow-hidden py-20 bg-[#061B32]">
      {/* Architectural Background with Deep Navy Gradient */}
      <img
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
        alt="Architectural High-Rise"
        className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#031426] via-[#061B32]/95 to-[#0799E8]/20"></div>

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#0799E8_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#031426]/70 backdrop-blur-xl border border-[#0799E8]/30 rounded-3xl p-8 sm:p-14 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="max-w-2xl text-center lg:text-left">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#0799E8]/20 text-[#0799E8] border border-[#0799E8]/30 mb-4">
              Consultation & Feasibility
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              {title}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 font-light">
              {description}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center">
                <CheckCircle2 className="w-4 h-4 mr-1.5 text-[#0799E8]" /> Free Shaft Feasibility Audit
              </span>
              <span className="flex items-center">
                <CheckCircle2 className="w-4 h-4 mr-1.5 text-[#0799E8]" /> 24-Hour Custom Proposal Turnaround
              </span>
              <span className="flex items-center">
                <CheckCircle2 className="w-4 h-4 mr-1.5 text-[#0799E8]" /> IS 14665 Compliance Assured
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto shrink-0">
            <Link
              to="/request-quote"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold text-base text-white bg-[#0799E8] hover:bg-[#0585cb] transition-all shadow-xl shadow-[#0799E8]/30 hover:shadow-2xl hover:shadow-[#0799E8]/50 hover:-translate-y-0.5"
            >
              <span>{buttonText}</span>
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </Link>

            <a
              href="tel:18002095438"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-2xl font-semibold text-sm text-slate-200 bg-white/5 border border-slate-700 hover:bg-white/10 hover:text-white transition-all"
            >
              <Phone className="w-4 h-4 mr-2 text-[#0799E8]" />
              <span>Call 1800-209-LIFT</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
