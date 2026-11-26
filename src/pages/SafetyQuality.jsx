import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, AlertTriangle, CheckCircle2, Award, Zap, 
  FileCheck, ArrowRight, Download, Activity, Cpu, Lock 
} from 'lucide-react';
import CTASection from '../components/CTASection';

export default function SafetyQuality() {
  const safetySystems = [
    {
      title: 'Automatic Rescue Device (ARD)',
      desc: 'Independent sealed gel-battery backup unit that detects grid supply failure instantly, brings the cabin smoothly to the closest floor, and opens doors safely to prevent passenger entrapment.',
      icon: Zap
    },
    {
      title: 'Bi-Directional Overspeed Governor',
      desc: 'Mechanical centrifugal governor that triggers instantaneous progressive safety clamps if the car speed exceeds 115% of rated speed in either ascent or descent.',
      icon: Activity
    },
    {
      title: '128-Beam Infrared Door Safety Curtain',
      desc: 'Dense multi-beam optical light curtain covering the entire doorway height from 20 mm to 1800 mm. Detects hands, clothing, or wheelchairs without physical contact.',
      icon: ShieldCheck
    },
    {
      title: 'Electromechanical Landing Door Interlocks',
      desc: 'Dual-circuit safety switches and heavy drop-latch mechanical interlocks ensuring hoistway doors can never be opened from the landing unless the cabin is parked level at that exact floor.',
      icon: Lock
    },
    {
      title: 'Seismic & Vibration Sensor Trigger',
      desc: 'Detects earth tremors and seismic P-waves, immediately bringing the car to the nearest safe floor and preventing car derailment or counterweight collision.',
      icon: AlertTriangle
    },
    {
      title: 'Phase Failure & Reversal Protection',
      desc: 'Solid-state electrical monitoring relays that prevent motor start if the 3-phase AC power input experiences phase inversion, single-phasing, or severe voltage drops.',
      icon: Cpu
    },
    {
      title: 'Oil Buffer Springs & Hydraulic Dampeners',
      desc: 'Heavy-duty hydraulic and elastomeric spring buffers anchored in the pit to absorb kinetic impact and provide cushioned deceleration in extreme travel limits.',
      icon: Award
    },
    {
      title: 'IoT Real-Time Health & Remote Diagnostics',
      desc: 'Cloud-connected microprocessor units continuously logging door cycling, brake temperature, vibration harmonics, and contactor wear for predictive failure prevention.',
      icon: FileCheck
    }
  ];

  const qualityStages = [
    {
      step: 'Stage 01',
      title: 'Raw Material Metallurgical Validation',
      desc: 'Spectrographic testing of structural steel, guide rails, and traction ropes to verify tensile strength, hardness, and corrosion resistance.'
    },
    {
      step: 'Stage 02',
      title: 'Factory Assembly & Rig Testing',
      desc: 'Pre-assembly of door headers, PMSM motors, and car slings in our controlled manufacturing environment with dynamic run simulation.'
    },
    {
      step: 'Stage 03',
      title: 'Laser-Guided Hoistway Plumb Alignment',
      desc: 'Guide rails installed on site using optical laser levels to ensure plumb line deviation under 0.5 mm across a 50-story vertical rise.'
    },
    {
      step: 'Stage 04',
      title: '125% Dynamic Overload Arrest Testing',
      desc: 'Full-load testing with 125% rated weights to verify that progressive safety gear arrests the cabin at full rated speed within statutory stopping distance.'
    },
    {
      step: 'Stage 05',
      title: 'Acoustic & Vibration Harmonic Audit',
      desc: 'Multi-axis accelerometers measure cabin lateral jitter and decibel levels to guarantee whisper-quiet operation under 50 dB.'
    },
    {
      step: 'Stage 06',
      title: 'Statutory PWD / Lift Licensing',
      desc: 'Final inspection handover with state lift inspectorate engineers and issuance of the official operating license.'
    }
  ];

  return (
    <div>
      {/* Safety & Quality Hero */}
      <section className="relative py-24 bg-[#061B32] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#0799E8_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#0799E8]/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#0799E8]/20 text-[#0799E8] border border-[#0799E8]/30 mb-4">
            Zero-Compromise Standards
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Safety & Quality Assurance
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            In vertical transportation, passenger safety is non-negotiable. Every BlueStar elevator is engineered, installed, and certified in strict conformance with IS 14665 and the National Building Code (NBC) 2016.
          </p>
        </div>
      </section>

      {/* 1. Safety Commitment Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#031426] rounded-3xl p-8 sm:p-14 border border-[#0799E8]/30 shadow-2xl text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0799E8]">
                The BlueStar Safety Charter
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Our Zero-Accident Engineering Philosophy
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                We believe that human safety cannot be treated as an optional feature. Every elevator manufactured and commissioned by BlueStar Lifts includes independent, multi-layered redundant mechanical and electrical failsafes that guarantee passenger protection even during municipal power cuts, earthquakes, or component anomalies.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-300">
                <span className="flex items-center bg-white/5 border border-slate-700 px-3 py-1.5 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 mr-1.5 text-[#0799E8]" /> 100% Factory Pre-Tested Failsafes
                </span>
                <span className="flex items-center bg-white/5 border border-slate-700 px-3 py-1.5 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 mr-1.5 text-[#0799E8]" /> IS 14665 Certified Components
                </span>
                <span className="flex items-center bg-white/5 border border-slate-700 px-3 py-1.5 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 mr-1.5 text-[#0799E8]" /> Automatic ARD Standard on Every Car
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="w-48 h-48 rounded-full bg-[#0799E8]/10 border-2 border-[#0799E8] flex flex-col items-center justify-center text-center p-4 shadow-xl shadow-[#0799E8]/20">
                <ShieldCheck className="w-16 h-16 text-[#0799E8] mb-2" />
                <span className="text-xl font-extrabold text-white">IS 14665</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">Certified Safety</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. 8-Point Safety Architecture */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#EAF6FD] text-[#0799E8] mb-3">
              Multi-Layered Failsafes
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#15283B] tracking-tight">
              8-Point Comprehensive Safety Architecture
            </h2>
            <p className="text-base text-[#667789] mt-2">
              Integrated mechanical, optical, and electrical safety subsystems working concurrently to protect every passenger ride.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetySystems.map((sys, idx) => {
              const Icon = sys.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#0799E8]/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#EAF6FD] text-[#0799E8] flex items-center justify-center mb-5 group-hover:bg-[#0799E8] group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-[#15283B] group-hover:text-[#0799E8] transition-colors mb-2">
                      {sys.title}
                    </h3>
                    <p className="text-xs text-[#667789] leading-relaxed">
                      {sys.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2 & 5. Quality Assurance & Testing Pipeline */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#EAF6FD] text-[#0799E8] mb-3">
            Manufacturing & Commissioning
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#15283B] tracking-tight">
            6-Stage Quality Assurance Pipeline
          </h2>
          <p className="text-base text-[#667789] mt-2">
            Every elevator passes through rigorous multi-point verification before being handed over for public passenger service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {qualityStages.map((stg, i) => (
            <div key={i} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xs font-extrabold text-[#0799E8] bg-[#EAF6FD] px-3 py-1 rounded-lg inline-block mb-3">
                {stg.step}
              </span>
              <h3 className="text-lg font-bold text-[#15283B] mb-2">
                {stg.title}
              </h3>
              <p className="text-xs text-[#667789] leading-relaxed">
                {stg.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Certifications & Compliance Standard */}
      <section className="py-20 bg-[#061B32] text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0799E8]">
                Regulatory Rigor
              </span>
              <h2 className="text-3xl font-extrabold text-white">
                Statutory Standards & Compliance
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                BlueStar Lifts strictly conforms to Bureau of Indian Standards (BIS) specifications, ensuring your building remains fully compliant with municipal fire safety and structural inspection regulations:
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-2xl bg-[#031426] border border-slate-700/60">
                  <h4 className="text-sm font-bold text-white flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-[#0799E8]" /> IS 14665 (Parts 1 to 5)
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Indian Standard specification for electric passenger and goods lifts: mechanical safety gear, traction machines, ropes, and electrical control systems.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#031426] border border-slate-700/60">
                  <h4 className="text-sm font-bold text-white flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-[#0799E8]" /> National Building Code (NBC) 2016 – Part 4 & Part 8
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Fire evacuation requirements, fireman emergency switch integration, emergency power changeover, and building traffic flow mandates.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#031426] p-8 rounded-3xl border border-[#0799E8]/30 shadow-2xl text-center space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-[#0799E8]/10 text-[#0799E8] border border-[#0799E8]/30 flex items-center justify-center mx-auto">
                <Download className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Download Safety Whitepaper</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Complete technical specification guide on IS 14665 compliance for architects and developers.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full py-3.5 rounded-xl font-bold text-xs text-white bg-[#0799E8] hover:bg-[#0585cb] transition-all shadow-lg shadow-[#0799E8]/30"
              >
                <span>Request Safety Compliance Packet</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title="Need a Safety Audit of Your Existing Elevator Fleet?"
        description="Our certified safety inspectors evaluate emergency brakes, governor tripping speed, and door sensor safety curtains on site."
        buttonText="Schedule Safety Audit"
      />
    </div>
  );
}
