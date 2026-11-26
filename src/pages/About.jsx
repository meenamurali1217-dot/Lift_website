import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Award, Users, Target, Eye, HeartHandshake, 
  Cpu, Wrench, CheckCircle2, ArrowRight, Building, Sparkles 
} from 'lucide-react';
import { team, companyStats } from '../data/team';
import CTASection from '../components/CTASection';

export default function About() {
  const coreValues = [
    {
      title: 'Safety Without Compromise',
      desc: 'We treat elevator engineering as life-critical infrastructure. Every mechanical cable, brake pad, and safety relay is over-engineered beyond standard regulatory requirements.',
      icon: ShieldCheck
    },
    {
      title: 'Engineering Innovation',
      desc: 'Pioneering energy-regenerative gearless drives, predictive IoT cloud diagnostics, and whisper-quiet acoustic dampening systems.',
      icon: Cpu
    },
    {
      title: 'Unwavering Reliability',
      desc: 'Delivering an audited 99.8% fleet uptime across thousands of installations through rigorous monthly 38-point proactive care.',
      icon: Award
    },
    {
      title: 'Customer Partnership',
      desc: 'We support architects, developers, and facility managers from preliminary shaft blueprints through 20+ years of dedicated lifecycle maintenance.',
      icon: HeartHandshake
    }
  ];

  const engineeringCapabilities = [
    {
      title: 'Permanent Magnet Synchronous Motors (PMSM)',
      desc: 'Gearless traction machines running at high electrical efficiency, slashing building power consumption by up to 45% compared to conventional geared units.'
    },
    {
      title: '32-Bit Microprocessor Multi-Car Group Dispatch',
      desc: 'Intelligent traffic flow algorithms that reduce passenger waiting intervals by up to 50% during peak corporate morning and evening hours.'
    },
    {
      title: '128-Beam Infrared Safety Light Curtains',
      desc: 'Full-height optical door safety barriers extending from floor to 1800 mm, ensuring zero door contact with children, wheelchairs, or stretchers.'
    },
    {
      title: 'Automatic Rescue Devices (ARD)',
      desc: 'Independent gel-battery power systems that immediately bring the elevator car to the nearest floor and open doors smoothly during municipal grid outages.'
    }
  ];

  return (
    <div>
      {/* 1. About Us Hero Banner */}
      <section className="relative py-24 bg-[#061B32] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#0799E8_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#0799E8]/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#0799E8]/20 text-[#0799E8] border border-[#0799E8]/30 mb-4">
            About BlueStar Lifts
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Pioneering Safety & Precision in{' '}
            <span className="text-[#0799E8]">Vertical Mobility</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            For over 18 years, BlueStar Lifts has engineered, installed, and maintained world-class elevator systems across India&apos;s most prominent residential skyscrapers, corporate IT campuses, hospitals, and infrastructure projects.
          </p>
        </div>
      </section>

      {/* 2 & 3. Company Overview & Our Story */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="relative group">
              <img
                src="/about/about-collage.jpg"
                alt="BlueStar Elevator Engineering, Manufacturing & Installation"
                className="w-full h-auto rounded-3xl shadow-2xl border border-slate-100 hover:shadow-[#0799E8]/20 transition-all duration-300"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#0799E8]">
              <span className="w-1.5 h-3.5 bg-[#0799E8] rounded-full"></span>
              <span>Our Story & Foundation</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#15283B] tracking-tight">
              Elevating India&apos;s Urban Landscape Since 2008
            </h2>
            
            <p className="text-base text-[#667789] leading-relaxed">
              BlueStar Lifts was founded with a singular conviction: that vertical transit should be smooth, whisper-quiet, impeccably safe, and energy efficient. As Indian cities expanded vertically, our team of veteran elevator engineers set out to engineer lift systems tailored specifically to the rigorous electrical, climatic, and traffic demands of Indian urban developments.
            </p>
            
            <p className="text-base text-[#667789] leading-relaxed">
              Today, with over 1,500 active installations spanning Mumbai, Bengaluru, Delhi NCR, Hyderabad, and Pune, BlueStar Lifts has earned the trust of India&apos;s foremost real estate developers, healthcare institutions, and industrial corporations.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#0799E8] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">100% In-House Structural & Field Teams</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#0799E8] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">Fully Compliant with IS 14665 & NBC 2016</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Mission and Vision */}
      <section className="py-20 bg-[#031426] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="p-8 sm:p-10 rounded-3xl bg-[#061B32]/90 border border-[#0799E8]/30 shadow-xl relative overflow-hidden group hover:border-[#0799E8] transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[#0799E8]/10 text-[#0799E8] border border-[#0799E8]/20 flex items-center justify-center mb-6 group-hover:bg-[#0799E8] group-hover:text-white transition-all">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-base text-slate-300 leading-relaxed font-light">
                To engineer and deliver the safest, most reliable, and technologically advanced vertical transportation solutions that empower modern architecture, enhance passenger comfort, and minimize environmental impact across India.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-[#061B32]/90 border border-[#0799E8]/30 shadow-xl relative overflow-hidden group hover:border-[#0799E8] transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[#0799E8]/10 text-[#0799E8] border border-[#0799E8]/20 flex items-center justify-center mb-6 group-hover:bg-[#0799E8] group-hover:text-white transition-all">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-base text-slate-300 leading-relaxed font-light">
                To be India&apos;s undisputed benchmark in elevator engineering and passenger safety, recognized for engineering innovation, aesthetic craftsmanship, and responsive lifecycle maintenance services.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Our Core Values */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#EAF6FD] text-[#0799E8] mb-3">
            What Drives Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#15283B] tracking-tight">
            Our Core Values
          </h2>
          <p className="text-base text-[#667789] mt-2">
            The foundational principles that guide every blueprint we draft and every bolt we tighten.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg shadow-slate-900/5 hover:shadow-2xl hover:shadow-[#0799E8]/10 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF6FD] text-[#0799E8] flex items-center justify-center mb-6 group-hover:bg-[#0799E8] group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#15283B] group-hover:text-[#0799E8] transition-colors mb-3">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#667789] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6 & 7. Our Engineering Expertise */}
      <section className="py-24 bg-[#061B32] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#0799E8]/20 text-[#0799E8] border border-[#0799E8]/30 mb-3">
              Technical Rigor
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Engineering Expertise
            </h2>
            <p className="text-base text-slate-300 mt-2 font-light">
              State-of-the-art vertical mobility technologies engineered to outperform in harsh urban operating environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {engineeringCapabilities.map((cap, idx) => (
              <div 
                key={idx} 
                className="p-8 rounded-3xl bg-[#031426]/70 border border-slate-700/60 hover:border-[#0799E8]/60 transition-all flex items-start space-x-5"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0799E8]/10 border border-[#0799E8]/30 text-[#0799E8] flex items-center justify-center shrink-0 font-bold text-sm">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Company Statistics */}
      <section className="py-20 bg-gradient-to-r from-[#031426] via-[#061B32] to-[#031426] text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 lg:divide-x divide-slate-800">
            {companyStats.map((st, i) => (
              <div key={i} className={`pt-6 sm:pt-0 ${i !== 0 ? 'lg:pl-8' : ''}`}>
                <span className="block text-4xl sm:text-5xl font-extrabold text-[#0799E8] mb-2 tracking-tight">
                  {st.value}
                </span>
                <span className="block text-base font-bold text-white mb-1">
                  {st.label}
                </span>
                <span className="text-xs text-slate-400">
                  {st.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Our Leadership & Engineering Team */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#EAF6FD] text-[#0799E8] mb-3">
            Leadership & Vision
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#15283B] tracking-tight">
            Meet Our Leadership Team
          </h2>
          <p className="text-base text-[#667789] mt-2">
            Led by veterans with over 80 collective years in high-rise elevator engineering and safety assurance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div 
              key={member.id} 
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg shadow-slate-900/5 hover:shadow-2xl hover:shadow-[#0799E8]/10 transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
            >
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061B32]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-xs font-medium text-[#0799E8] bg-[#031426]/80 px-2.5 py-1 rounded-md backdrop-blur-sm">
                    {member.experience}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#15283B] group-hover:text-[#0799E8] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mb-3">
                    {member.role}
                  </p>
                  <p className="text-xs text-[#667789] leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. CTA – Let's Work Together */}
      <CTASection 
        title="Ready to Partner with BlueStar Lifts?"
        description="Whether you're developing a 50-story commercial tower, a multi-specialty hospital, or a private residence, our engineering team is ready to assist."
        buttonText="Schedule Technical Consultation"
      />
    </div>
  );
}
