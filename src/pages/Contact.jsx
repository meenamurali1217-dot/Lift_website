import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle2, 
  AlertCircle, Building2, ExternalLink, ShieldCheck 
} from 'lucide-react';
import { submitContactRequest } from '../utils/api';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    subject: 'General Inquiry',
    message: ''
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

    // Simple frontend validation
    const indianPhoneRegex = /^(\+91|91|0)?[6789]\d{9}$/;
    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!indianPhoneRegex.test(cleanPhone)) {
      setSubmitError('Please enter a valid 10-digit Indian mobile number (e.g. 98201 54321).');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await submitContactRequest(formData);
      setSubmitSuccess(response);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        subject: 'General Inquiry',
        message: ''
      });
    } catch (err) {
      setSubmitError(err.message || 'Failed to submit your message. Please try again or call our helpline.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Contact Hero Banner */}
      <section className="relative py-24 bg-[#061B32] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#0799E8_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#0799E8]/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#0799E8]/20 text-[#0799E8] border border-[#0799E8]/30 mb-4">
            Connect With Our Engineers
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Contact BlueStar Lifts
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            Whether you require new elevator installation specifications, modernizing existing elevators, or urgent maintenance support across India, our team is at your disposal.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-[#15283B] flex items-center">
                <span className="w-1.5 h-4 bg-[#0799E8] rounded-full mr-2"></span>
                Official Headquarters
              </h3>

              {/* Address */}
              <div className="flex items-start space-x-3.5 text-sm text-slate-600">
                <div className="w-10 h-10 rounded-xl bg-[#EAF6FD] text-[#0799E8] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#15283B]">BlueStar Lifts Registered Office</h4>
                  <p className="text-xs text-[#667789] mt-0.5 leading-relaxed">
                    HNO 4-1/206, Flat No. 206, MR Palace, Narapally, Hyderabad, Medchal Malkajgiri, Telangana – 500088, India.
                  </p>
                </div>
              </div>

              {/* Phone Lines */}
              <div className="flex items-start space-x-3.5 text-sm text-slate-600">
                <div className="w-10 h-10 rounded-xl bg-[#EAF6FD] text-[#0799E8] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#15283B]">Telephone & Helpline</h4>
                  <p className="text-xs text-[#667789] mt-0.5">
                    Board: <a href="tel:+912268904000" className="text-[#0799E8] font-medium">+91 22 6890 4000</a>
                  </p>
                  <p className="text-xs text-[#667789] mt-0.5">
                    Toll Free: <a href="tel:18002095438" className="text-[#0799E8] font-medium">1800-209-LIFT (5438)</a>
                  </p>
                  <p className="text-xs text-red-600 font-semibold mt-0.5">
                    24/7 Breakdown: <a href="tel:+919820154321">+91 98201 54321</a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3.5 text-sm text-slate-600">
                <div className="w-10 h-10 rounded-xl bg-[#EAF6FD] text-[#0799E8] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#15283B]">Business Email</h4>
                  <p className="text-xs text-[#667789] mt-0.5">
                    General Inquiries: <a href="mailto:contact@bluestarlifts.in" className="text-[#0799E8]">contact@bluestarlifts.in</a>
                  </p>
                  <p className="text-xs text-[#667789] mt-0.5">
                    Service Desk: <a href="mailto:service@bluestarlifts.in" className="text-[#0799E8]">service@bluestarlifts.in</a>
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-3.5 text-sm text-slate-600">
                <div className="w-10 h-10 rounded-xl bg-[#EAF6FD] text-[#0799E8] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#15283B]">Operating Hours</h4>
                  <p className="text-xs text-[#667789] mt-0.5">
                    Corporate Office: Mon – Sat, 9:00 AM – 7:00 PM IST
                  </p>
                  <p className="text-xs text-emerald-600 font-medium mt-0.5">
                    Emergency Squad Dispatch: Active 24 Hours / 365 Days
                  </p>
                </div>
              </div>

            </div>

            {/* Branch Offices Pill Box */}
            <div className="bg-[#031426] text-white p-6 rounded-3xl border border-slate-800">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#0799E8] mb-3">
                Regional Hubs Across India
              </h4>
              <div className="space-y-3 text-xs text-slate-300">
                <div>
                  <strong className="text-white block">Bengaluru:</strong>
                  MG Road, Bengaluru, Karnataka 560001
                </div>
                <div>
                  <strong className="text-white block">Delhi NCR:</strong>
                  DLF Cyber City, Gurugram, Haryana 122002
                </div>
                <div>
                  <strong className="text-white block">Hyderabad:</strong>
                  Hitec City, Madhapur, Hyderabad, Telangana 500081
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#15283B]">
                Send Us an Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-[#667789] mt-1">
                Fill in the form below and our engineering team will respond within 4 business hours.
              </p>
            </div>

            {submitSuccess && (
              <div className="mb-6 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 animate-fadeIn">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base font-bold">Inquiry Received Successfully!</h4>
                    <p className="text-xs text-emerald-800 mt-1">
                      {submitSuccess.message}
                    </p>
                    <p className="text-xs font-mono font-bold text-emerald-900 mt-2">
                      Reference Inquiry ID: {submitSuccess.data?.inquiryId}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {submitError && (
              <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div className="text-xs">{submitError}</div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Ramesh Sharma"
                    required
                    className="w-full px-4 py-3 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0799E8] focus:bg-white transition-all text-[#15283B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Company / Organization Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="e.g. Skyline Realty Ltd."
                    className="w-full px-4 py-3 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0799E8] focus:bg-white transition-all text-[#15283B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Subject / Service Requirement <span className="text-red-500">*</span>
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0799E8] focus:bg-white transition-all text-[#15283B]"
                >
                  <option value="New Elevator Installation">New Elevator Installation Inquiry</option>
                  <option value="Annual Maintenance Contract (AMC)">Annual Maintenance Contract (AMC)</option>
                  <option value="Elevator Modernization & Retrofit">Elevator Modernization & Retrofit</option>
                  <option value="Emergency Breakdown / Repair">Emergency Breakdown / Repair</option>
                  <option value="Safety Audit & Licensing">Safety Audit & Statutory Licensing</option>
                  <option value="Architectural CAD/BIM Layout Request">Architectural CAD/BIM Layout Request</option>
                  <option value="General Inquiry">General Corporate Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Your Message / Project Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please describe your elevator requirements, building type, location, and timeline..."
                  required
                  className="w-full px-4 py-3 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0799E8] focus:bg-white transition-all text-[#15283B]"
                ></textarea>
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
                    Transmitting Inquiry...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="w-4 h-4 mr-2" />
                    Submit Message to BlueStar Lifts
                  </span>
                )}
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Embedded Google Map Section */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100">
          <div className="p-4 bg-white border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-xs font-bold text-slate-700 flex items-center">
              <MapPin className="w-4 h-4 text-[#0799E8] mr-1.5 shrink-0" /> BlueStar Lifts – Narapally, Hyderabad, Telangana (500088)
            </span>
            <a
              href="https://www.google.com/maps/search/?api=1&query=HNO+4-1%2F206+Flat+No+206+MR+PALACE+NARAPALLY+Hyderabad+Telangana+500088+India"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#0799E8] hover:underline flex items-center shrink-0"
            >
              Get Directions & Open Full Map <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>
          <iframe
            title="BlueStar Lifts Narapally Hyderabad Location"
            src="https://www.google.com/maps?q=HNO+4-1%2F206+Flat+No+206+MR+PALACE+NARAPALLY+Hyderabad+Telangana+500088+India&output=embed"
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
