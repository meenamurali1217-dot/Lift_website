import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench, ShieldCheck, Clock, Zap, FileCheck, Award, 
  CheckCircle2, ArrowRight, Phone, Shield, Sparkles 
} from 'lucide-react';
import { services, amcPlans } from '../data/services';
import AmcCalculator from '../components/AmcCalculator';
import CTASection from '../components/CTASection';

export default function Services() {
  const iconMap = {
    Wrench,
    ShieldCheck,
    Clock,
    Zap,
    FileCheck,
    Award
  };

  return (
    <div>
      {/* Services Hero Banner */}
      <section className="relative py-24 bg-[#061B32] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#0799E8_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#0799E8]/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#0799E8]/20 text-[#0799E8] border border-[#0799E8]/30 mb-4">
            Complete Lifecycle Services
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Elevator Engineering & Support Services
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            From precision turnkey installation to 24/7 rapid emergency dispatch and comprehensive AMC contracts, we keep India&apos;s vertical transport running safely without interruption.
          </p>
        </div>
      </section>

      {/* 6 Comprehensive Service Modules */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {services.map((service, index) => {
          const Icon = iconMap[service.iconName] || Wrench;
          const isEven = index % 2 === 0;

          return (
            <div 
              key={service.id} 
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
            >
              {/* Image Column */}
              <div className={`lg:col-span-6 ${isEven ? '' : 'lg:order-2'}`}>
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl h-80 sm:h-96 group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-[#0799E8] flex items-center justify-center text-white">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-bold">{service.title}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description & Process Column */}
              <div className={`lg:col-span-6 space-y-5 ${isEven ? '' : 'lg:order-1'}`}>
                <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#0799E8]">
                  <span className="w-1.5 h-3.5 bg-[#0799E8] rounded-full"></span>
                  <span>Service 0{index + 1}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#15283B] tracking-tight">
                  {service.title}
                </h2>

                <p className="text-sm sm:text-base text-[#667789] leading-relaxed">
                  {service.overview}
                </p>

                {/* Key Benefits */}
                <div className="space-y-2 py-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Core Benefits & Capabilities:
                  </span>
                  {service.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#0799E8] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Process Steps */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Execution Workflow:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.process.slice(0, 4).map((pStep, sIdx) => (
                      <div key={sIdx} className="flex items-start space-x-2.5">
                        <span className="text-xs font-extrabold text-[#0799E8] bg-[#EAF6FD] px-2 py-0.5 rounded-md">
                          {pStep.step}
                        </span>
                        <div>
                          <h4 className="text-xs font-bold text-slate-800">{pStep.title}</h4>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{pStep.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/request-quote"
                    className="inline-flex items-center px-6 py-3 rounded-xl text-xs font-bold text-white bg-[#0799E8] hover:bg-[#0585cb] transition-all shadow-md shadow-[#0799E8]/20"
                  >
                    <span>Request {service.title} Consultation</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* AMC Comparison Matrix */}
      <section className="py-24 bg-[#031426] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#0799E8]/20 text-[#0799E8] border border-[#0799E8]/30 mb-3">
              Transparent Care Plans
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Annual Maintenance Contracts (AMC)
            </h2>
            <p className="text-base text-slate-300 mt-2 font-light">
              Choose the ideal service tier designed to protect your building&apos;s vertical transportation investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {amcPlans.map((plan) => (
              <div 
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.isPopular 
                    ? 'bg-[#061B32] border-2 border-[#0799E8] shadow-2xl shadow-[#0799E8]/20 scale-102' 
                    : 'bg-[#061B32]/60 border border-slate-700/60 hover:border-slate-500'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold bg-[#0799E8] text-white shadow-lg flex items-center">
                    <Sparkles className="w-3.5 h-3.5 mr-1" /> Most Recommended
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    <span className="text-xs text-[#0799E8] font-semibold">{plan.tier}</span>
                  </div>

                  <p className="text-xs text-slate-400 mb-6 min-h-[32px]">
                    {plan.idealFor}
                  </p>

                  <div className="mb-6 p-4 rounded-2xl bg-[#031426] border border-slate-800">
                    <div className="text-2xl font-extrabold text-white">
                      {plan.pricePerLiftMonth}
                      <span className="text-xs text-slate-400 font-normal"> / lift / month</span>
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      Billed annually at {plan.pricePerLiftYear}
                    </div>
                  </div>

                  {/* SLA Badge */}
                  <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-400 mb-6 bg-emerald-950/40 p-2.5 rounded-xl border border-emerald-900/40">
                    <Clock className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>Emergency SLA: {plan.slaResponse}</span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#0799E8] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/request-quote?tier=${plan.id}&service=amc`}
                  className={`w-full py-3 rounded-xl text-center text-xs font-bold transition-all ${
                    plan.isPopular
                      ? 'bg-[#0799E8] hover:bg-[#0585cb] text-white shadow-lg shadow-[#0799E8]/30'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-slate-700'
                  }`}
                >
                  Choose {plan.name}
                </Link>
              </div>
            ))}
          </div>

          {/* Interactive Calculator Component */}
          <div className="mt-20">
            <AmcCalculator />
          </div>

        </div>
      </section>

      {/* 24/7 Emergency Support Banner */}
      <section className="py-16 bg-red-950/30 border-y border-red-900/40 text-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0">
              <Phone className="w-7 h-7 animate-pulse" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                Experiencing an Elevator Breakdown or Passenger Entrapment?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Our 24/7 central dispatch squad guarantees a 30-minute arrival in major Indian metros.
              </p>
            </div>
          </div>
          <a
            href="tel:+919820154321"
            className="px-6 py-3.5 rounded-2xl font-bold text-sm text-white bg-red-600 hover:bg-red-700 transition-all shadow-xl shadow-red-600/30 shrink-0"
          >
            Emergency Hotline: +91 98201 54321
          </a>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title="Need an On-Site Health Check for Your Existing Elevators?"
        description="Our senior maintenance inspectors can conduct a comprehensive 38-point mechanical and electrical audit of your elevators at no cost."
        buttonText="Book Free Elevator Health Check"
      />
    </div>
  );
}
