import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Building2, Layers, Phone, Mail, MapPin, CheckCircle2, 
  AlertCircle, ArrowRight, ShieldCheck, Clock, Sparkles, Send 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitQuoteRequest } from '../utils/api';

export default function RequestQuote() {
  const [searchParams] = useSearchParams();

  // Read URL query params for smart prefilling
  const initialProduct = searchParams.get('product') || '';
  const initialName = searchParams.get('name') || '';
  const initialPhone = searchParams.get('phone') || '';
  const initialFloors = searchParams.get('floors') || '';
  const initialUnits = searchParams.get('units') || '2';
  const initialType = searchParams.get('type') || '';

  const getElevatorTypeFromParam = (val) => {
    if (!val) return 'Passenger Elevators';
    if (val.includes('passenger')) return 'Passenger Elevators';
    if (val.includes('goods')) return 'Goods & Freight Elevators';
    if (val.includes('hospital')) return 'Hospital Bed & Stretcher Elevators';
    if (val.includes('panoramic')) return 'Panoramic Glass Capsule Elevators';
    if (val.includes('home')) return 'Luxury Home & Villa Elevators';
    if (val.includes('industrial')) return 'Industrial & Explosion-Proof Elevators';
    return 'Passenger Elevators';
  };

  const [formData, setFormData] = useState({
    fullName: initialName,
    companyName: '',
    email: '',
    phone: initialPhone,
    projectLocation: '',
    buildingType: 'Commercial Corporate Tower',
    elevatorType: getElevatorTypeFromParam(initialProduct || initialType),
    floors: initialFloors || '8',
    units: initialUnits || '2',
    projectDescription: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (submitError) setSubmitError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    // Validate Indian phone number
    const indianPhoneRegex = /^(\+91|91|0)?[6789]\d{9}$/;
    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!indianPhoneRegex.test(cleanPhone)) {
      setSubmitError('Please enter a valid 10-digit Indian mobile number (e.g. 98201 54321).');
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await submitQuoteRequest(formData);
      setSubmitSuccess(result);
      
      // Trigger festive confetti
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 }
      });

    } catch (err) {
      setSubmitError(err.message || 'Failed to submit quote request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Quote Hero Banner */}
      <section className="relative py-24 bg-[#061B32] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#0799E8_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#0799E8]/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#0799E8]/20 text-[#0799E8] border border-[#0799E8]/30 mb-4">
            Technical Specification & Costing
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Request an Engineering Quote
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            Provide your building and hoistway details below. Our senior vertical transit consultants will provide a formal quotation, hoistway layout drawings, and compliance documentation within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Quote Wizard Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form / Success Card */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
            
            {submitSuccess ? (
              <div className="text-center py-12 space-y-6 animate-fadeIn">
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0799E8] block mb-1">
                    Quotation Request Transmitted
                  </span>
                  <h3 className="text-3xl font-extrabold text-[#15283B]">
                    Thank You, {submitSuccess.data?.fullName || formData.fullName}!
                  </h3>
                  <p className="text-sm text-[#667789] max-w-lg mx-auto mt-2 leading-relaxed">
                    Your quotation request has been securely logged into our project management database. An assigned BlueStar elevator engineer will review your hoistway parameters and contact you within 24 hours.
                  </p>
                </div>

                {/* Reference Ticket Box */}
                <div className="p-6 rounded-2xl bg-[#031426] text-white max-w-md mx-auto text-left border border-slate-800 space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-800 text-xs text-slate-400">
                    <span>Quotation Ticket Number:</span>
                    <span className="font-mono font-bold text-[#0799E8] text-sm">{submitSuccess.data?.ticketId}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Selected Solution:</span>
                    <span className="font-semibold text-white">{submitSuccess.data?.elevatorType}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Total Units:</span>
                    <span className="font-semibold text-white">{submitSuccess.data?.units} Units</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Status:</span>
                    <span className="font-semibold text-emerald-400">Under Engineering Review</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => setSubmitSuccess(null)}
                    className="px-6 py-3 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    Submit Another Quote Request
                  </button>
                  <Link
                    to="/projects"
                    className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-[#0799E8] hover:bg-[#0585cb] transition-colors"
                  >
                    Explore Completed Installations
                  </Link>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-8 pb-6 border-b border-slate-100">
                  <h3 className="text-2xl font-bold text-[#15283B]">
                    Project & Hoistway Specification Form
                  </h3>
                  <p className="text-xs sm:text-sm text-[#667789] mt-1">
                    Please provide accurate parameters to ensure an engineered, compliant proposal.
                  </p>
                </div>

                {submitError && (
                  <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div className="text-xs">{submitError}</div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Step 1: Client Information */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0799E8] mb-4 flex items-center">
                      <span className="w-5 h-5 rounded-full bg-[#EAF6FD] text-[#0799E8] flex items-center justify-center mr-2 text-[10px]">1</span>
                      Client & Contact Details
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Vikramaditya Singhania"
                          required
                          className="w-full px-4 py-3 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0799E8] focus:bg-white transition-all text-[#15283B]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Company / Builder Organization
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="e.g. Apex Realty & Infra"
                          className="w-full px-4 py-3 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0799E8] focus:bg-white transition-all text-[#15283B]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@company.com"
                          required
                          className="w-full px-4 py-3 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0799E8] focus:bg-white transition-all text-[#15283B]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Indian Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. +91 98201 54321"
                          required
                          className="w-full px-4 py-3 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0799E8] focus:bg-white transition-all text-[#15283B]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Building & Project Details */}
                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0799E8] mb-4 flex items-center">
                      <span className="w-5 h-5 rounded-full bg-[#EAF6FD] text-[#0799E8] flex items-center justify-center mr-2 text-[10px]">2</span>
                      Project & Hoistway Requirements
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Project Location (City, State) <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="projectLocation"
                          value={formData.projectLocation}
                          onChange={handleChange}
                          placeholder="e.g. Worli, Mumbai, MH"
                          required
                          className="w-full px-4 py-3 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0799E8] focus:bg-white transition-all text-[#15283B]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Building Type <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="buildingType"
                          value={formData.buildingType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0799E8] focus:bg-white transition-all text-[#15283B]"
                        >
                          <option value="Residential Apartment Tower">Residential Apartment Tower</option>
                          <option value="Commercial Corporate Tower">Commercial Corporate Tower / IT Park</option>
                          <option value="Hospital & Healthcare Facility">Hospital & Healthcare Facility</option>
                          <option value="Shopping Mall & Retail Galleria">Shopping Mall & Retail Galleria</option>
                          <option value="Hotel & Luxury Hospitality">Hotel & Luxury Hospitality</option>
                          <option value="Private Villa / Luxury Bungalow">Private Villa / Luxury Bungalow</option>
                          <option value="Industrial Plant / Logistics Warehouse">Industrial Plant / Logistics Warehouse</option>
                          <option value="Educational / Campus Infrastructure">Educational / Campus Infrastructure</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Elevator Category / Model <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="elevatorType"
                          value={formData.elevatorType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0799E8] focus:bg-white transition-all text-[#15283B]"
                        >
                          <option value="Passenger Elevators">Passenger Elevators (PMSM Gearless)</option>
                          <option value="Goods & Freight Elevators">Goods & Freight Elevators (Heavy Duty)</option>
                          <option value="Hospital Bed & Stretcher Elevators">Hospital Bed & Stretcher Elevators</option>
                          <option value="Panoramic Glass Capsule Elevators">Panoramic Glass Capsule Elevators</option>
                          <option value="Luxury Home & Villa Elevators">Luxury Home & Villa Elevators (Single-Phase)</option>
                          <option value="Industrial & Explosion-Proof Elevators">Industrial & Explosion-Proof Elevators</option>
                          <option value="Machine Room-Less (MRL) Elevators">Machine Room-Less (MRL) Elevators</option>
                          <option value="Precision Hydraulic Elevators">Precision Hydraulic Elevators</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                            Number of Floors <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="number"
                            name="floors"
                            min="1"
                            max="65"
                            value={formData.floors}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0799E8] focus:bg-white transition-all text-[#15283B]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                            Number of Elevators <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="number"
                            name="units"
                            min="1"
                            max="30"
                            value={formData.units}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0799E8] focus:bg-white transition-all text-[#15283B]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Project Description & Specific Requirements
                      </label>
                      <textarea
                        name="projectDescription"
                        rows="3"
                        value={formData.projectDescription}
                        onChange={handleChange}
                        placeholder="Specify hoistway dimensions, pit depth, preferred cabin aesthetic (e.g. titanium gold, glass), desired delivery timeline..."
                        className="w-full px-4 py-3 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0799E8] focus:bg-white transition-all text-[#15283B]"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-xl font-bold text-sm text-white bg-[#0799E8] hover:bg-[#0585cb] transition-all flex items-center justify-center shadow-lg shadow-[#0799E8]/30 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-0.5'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                        Calculating Parameters & Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="w-4 h-4 mr-2" />
                        Submit Formal Quotation Request
                      </span>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    By submitting, you agree to receive technical drawings and consultation calls from BlueStar Lifts India Pvt. Ltd. Your information is held securely.
                  </p>
                </form>
              </div>
            )}

          </div>

          {/* Right Column: Why Request from BlueStar */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-[#061B32] text-white p-6 sm:p-8 rounded-3xl border border-[#0799E8]/30 shadow-xl space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0799E8] block">
                The BlueStar Assurance
              </span>
              <h3 className="text-xl font-bold text-white">
                What Happens After You Submit?
              </h3>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#0799E8] text-white flex items-center justify-center text-xs font-bold shrink-0">1</div>
                  <div>
                    <strong className="text-white block font-semibold">Immediate Ticket Assignment</strong>
                    A unique inquiry ID is generated and assigned directly to a regional technical director.
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#0799E8] text-white flex items-center justify-center text-xs font-bold shrink-0">2</div>
                  <div>
                    <strong className="text-white block font-semibold">Free Hoistway Drawing Review</strong>
                    We verify pit depth, overhead, and landing entrance clearances based on IS 14665 codes.
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#0799E8] text-white flex items-center justify-center text-xs font-bold shrink-0">3</div>
                  <div>
                    <strong className="text-white block font-semibold">Formal Engineering Proposal</strong>
                    Comprehensive itemized quotation including drive specs, cabin finishes, and statutory licensing.
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700/80">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#0799E8] shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400 block">Prefer to speak directly?</span>
                    <a href="tel:18002095438" className="text-sm font-bold text-white hover:text-[#0799E8]">
                      1800-209-LIFT (5438)
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality & Safety Badges */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center space-x-3 text-xs text-slate-700 font-medium">
                <ShieldCheck className="w-5 h-5 text-[#0799E8] shrink-0" />
                <span>Full Bureau of Indian Standards (IS 14665) Conformance</span>
              </div>
              <div className="flex items-center space-x-3 text-xs text-slate-700 font-medium">
                <Clock className="w-5 h-5 text-[#0799E8] shrink-0" />
                <span>24-Hour Custom Proposal Turnaround</span>
              </div>
              <div className="flex items-center space-x-3 text-xs text-slate-700 font-medium">
                <Sparkles className="w-5 h-5 text-[#0799E8] shrink-0" />
                <span>Bespoke Architectural Cabin Finish Options</span>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
