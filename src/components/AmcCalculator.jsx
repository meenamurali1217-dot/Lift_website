import React, { useState } from 'react';
import { Calculator, ShieldCheck, Clock, Check, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AmcCalculator() {
  const [elevatorType, setElevatorType] = useState('passenger');
  const [units, setUnits] = useState(2);
  const [floors, setFloors] = useState(10);
  const [age, setAge] = useState('under5');
  const [tier, setTier] = useState('gold');

  // Calculation logic based on standard Indian commercial lift maintenance matrix
  const calculateCost = () => {
    let basePerUnitMonth = 1800; // Silver base
    if (tier === 'gold') basePerUnitMonth = 2900;
    if (tier === 'platinum') basePerUnitMonth = 4500;

    // Multipliers
    let typeMultiplier = 1.0;
    if (elevatorType === 'goods') typeMultiplier = 1.25;
    if (elevatorType === 'hospital') typeMultiplier = 1.35;
    if (elevatorType === 'panoramic') typeMultiplier = 1.2;
    if (elevatorType === 'home') typeMultiplier = 0.85;

    let floorMultiplier = 1.0 + (floors > 10 ? (floors - 10) * 0.025 : 0);
    let ageMultiplier = age === 'over10' ? 1.3 : age === '5to10' ? 1.15 : 1.0;

    const monthlyTotal = Math.round(basePerUnitMonth * units * typeMultiplier * floorMultiplier * ageMultiplier);
    const annualTotal = monthlyTotal * 12;
    // Volume discount if 4+ units
    const discountedAnnual = units >= 4 ? Math.round(annualTotal * 0.9) : annualTotal;

    return {
      monthly: monthlyTotal.toLocaleString('en-IN'),
      annual: discountedAnnual.toLocaleString('en-IN'),
      discountApplied: units >= 4
    };
  };

  const cost = calculateCost();

  return (
    <div className="bg-[#061B32] border border-[#0799E8]/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#0799E8]/10 rounded-full blur-3xl -z-0"></div>

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-700/60">
          <div>
            <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#0799E8] mb-1">
              <Calculator className="w-3.5 h-3.5 mr-1.5" /> Interactive AMC Cost Estimator
            </span>
            <h3 className="text-2xl font-bold text-white">
              Instant Maintenance & Care Calculator
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Configure your elevator fleet specs to generate an estimated Annual Maintenance Contract cost.
            </p>
          </div>
          <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#0799E8]/20 text-[#0799E8] border border-[#0799E8]/30 self-start sm:self-center">
            Standard IS 14665 Compliance
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Elevator Type */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Elevator Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'passenger', name: 'Passenger' },
                  { id: 'goods', name: 'Goods / Freight' },
                  { id: 'hospital', name: 'Hospital Bed' },
                  { id: 'panoramic', name: 'Panoramic Glass' },
                  { id: 'home', name: 'Villa / Home' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setElevatorType(item.id)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-left ${
                      elevatorType === item.id
                        ? 'bg-[#0799E8] border-[#0799E8] text-white shadow-md shadow-[#0799E8]/30'
                        : 'bg-white/5 border-slate-700/70 text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Units & Floors Sliders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#031426] p-4 rounded-2xl border border-slate-800">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-slate-300">Number of Lifts</span>
                  <span className="text-sm font-bold text-[#0799E8]">{units} {units === 1 ? 'Unit' : 'Units'}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={units}
                  onChange={(e) => setUnits(parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#0799E8]"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>1 Unit</span>
                  <span>15 Units</span>
                </div>
              </div>

              <div className="bg-[#031426] p-4 rounded-2xl border border-slate-800">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-slate-300">Total Building Floors</span>
                  <span className="text-sm font-bold text-[#0799E8]">{floors} Floors</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="45"
                  value={floors}
                  onChange={(e) => setFloors(parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#0799E8]"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>2 Floors</span>
                  <span>45 Floors</span>
                </div>
              </div>
            </div>

            {/* Age of Elevators */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                System Age / Operating Life
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'under5', label: '< 5 Years Old' },
                  { id: '5to10', label: '5 – 10 Years Old' },
                  { id: 'over10', label: '10+ Years (Legacy)' }
                ].map((a) => (
                  <button
                    key={a.id}
                    type="button"
                    onClick={() => setAge(a.id)}
                    className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-all ${
                      age === a.id
                        ? 'bg-[#0799E8]/20 border-[#0799E8] text-white font-bold'
                        : 'bg-white/5 border-slate-700/70 text-slate-400 hover:text-white'
                    }`}
                  >
                    {a.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Care Tier Selection */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Choose AMC Care Plan
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'silver', name: 'Silver Care', desc: 'Preventive Routine' },
                  { id: 'gold', name: 'Gold Care', desc: 'Semi-Comprehensive' },
                  { id: 'platinum', name: 'Platinum Care', desc: '100% Spares + IoT' }
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTier(t.id)}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      tier === t.id
                        ? 'bg-[#031426] border-[#0799E8] shadow-lg shadow-[#0799E8]/20 ring-1 ring-[#0799E8]'
                        : 'bg-white/5 border-slate-700 hover:border-slate-500'
                    }`}
                  >
                    <span className="block text-sm font-bold text-white">{t.name}</span>
                    <span className="block text-[11px] text-[#0799E8] mt-0.5">{t.desc}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Result Card Column */}
          <div className="lg:col-span-5 bg-[#031426] border border-[#0799E8]/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">Estimated AMC Value</span>
                {cost.discountApplied && (
                  <span className="flex items-center text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded-full">
                    <Sparkles className="w-3 h-3 mr-1" /> 10% Fleet Discount
                  </span>
                )}
              </div>

              <div className="my-6">
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white">
                    ₹ {cost.annual}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">/ year</span>
                </div>
                <p className="text-xs text-[#0799E8] mt-1">
                  Approx ₹ {cost.monthly} per month for {units} {units === 1 ? 'elevator' : 'elevators'}
                </p>
              </div>

              {/* Inclusions summary */}
              <div className="space-y-2.5 text-xs text-slate-300 py-4 border-t border-slate-800">
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-[#0799E8] mr-2 shrink-0" />
                  <span>12 Proactive 38-Point Monthly Lubrication Audits</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-[#0799E8] mr-2 shrink-0" />
                  <span>
                    {tier === 'platinum' ? 'Guaranteed 30-45 min' : tier === 'gold' ? '2-Hour' : '4-Hour'} Emergency Breakdown Response SLA
                  </span>
                </div>
                <div className="flex items-center">
                  <ShieldCheck className="w-4 h-4 text-[#0799E8] mr-2 shrink-0" />
                  <span>
                    {tier === 'platinum' ? '100% Spares & Drive Electronics Included' : tier === 'gold' ? 'Minor Consumables & Contacts Included' : 'All Spares at Discounted AMC Rate'}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-800">
              <Link
                to={`/request-quote?type=${elevatorType}&units=${units}&floors=${floors}&tier=${tier}`}
                className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-[#0799E8] hover:bg-[#0585cb] transition-all flex items-center justify-center shadow-lg shadow-[#0799E8]/30"
              >
                <span>Request Formal AMC Contract</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <p className="text-[11px] text-center text-slate-400 mt-2">
                *GST applicable as per Indian tax norms. Final quote subject to physical site survey.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
