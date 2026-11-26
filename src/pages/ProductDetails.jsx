import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Gauge, 
  Users, Zap, Building, ChevronRight, Download, Send, Check 
} from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { asset } from '../utils/asset';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find product by id (or fallback to first)
  const product = products.find(p => p.id === id) || products[0];
  const [activeImage, setActiveImage] = useState(product.heroImage);
  const [activeTab, setActiveTab] = useState('specs'); // 'specs' | 'features' | 'safety' | 'finishes'

  // Fast inquiry state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryFloors, setInquiryFloors] = useState('');

  // Related products
  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.category === product.category || p.id === 'passenger-elevators'))
    .slice(0, 3);

  const handleFastInquiry = (e) => {
    e.preventDefault();
    if (!inquiryName || !inquiryPhone) return;
    
    // Redirect to request-quote with prefilled data
    navigate(`/request-quote?product=${product.id}&name=${encodeURIComponent(inquiryName)}&phone=${encodeURIComponent(inquiryPhone)}&floors=${encodeURIComponent(inquiryFloors)}`);
  };

  return (
    <div>
      {/* Breadcrumb Bar */}
      <div className="bg-[#031426] text-xs text-slate-400 py-3 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-2">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link to="/products" className="hover:text-white transition-colors">Products</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-[#0799E8] font-medium">{product.name}</span>
        </div>
      </div>

      {/* Product Hero Section */}
      <section className="py-12 lg:py-16 bg-[#061B32] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Gallery Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-3xl overflow-hidden border border-[#0799E8]/30 shadow-2xl h-[380px] sm:h-[460px] bg-slate-900">
                <img
                  src={asset(activeImage)}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#0799E8] text-white shadow-lg">
                    {product.category} Series
                  </span>
                </div>
              </div>

              {/* Thumbnails */}
              {product.gallery && product.gallery.length > 1 && (
                <div className="flex space-x-3 overflow-x-auto pb-2">
                  {product.gallery.map((imgUrl, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(imgUrl)}
                      className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                        activeImage === imgUrl ? 'border-[#0799E8] scale-105 shadow-md' : 'border-slate-700 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={asset(imgUrl)} alt={`Thumbnail ${i+1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Overview & Quick Inquiry Column */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#0799E8] mb-2">
                  {product.badge || 'Certified Solution'}
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {product.name}
                </h1>
                <p className="text-base sm:text-lg text-[#0799E8] mt-2 font-medium">
                  {product.tagline}
                </p>
                <p className="text-sm text-slate-300 mt-4 leading-relaxed font-light">
                  {product.fullDescription}
                </p>
              </div>

              {/* Key Specs Pill Matrix */}
              <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-[#031426] border border-slate-700/60 text-xs">
                <div>
                  <span className="text-slate-400 block text-[11px]">Rated Capacity</span>
                  <span className="font-bold text-white text-sm">{product.capacity}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Rated Speed</span>
                  <span className="font-bold text-[#0799E8] text-sm">{product.speed}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Drive System</span>
                  <span className="font-bold text-white line-clamp-1">{product.driveSystem}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Door Mechanism</span>
                  <span className="font-bold text-white line-clamp-1">{product.doorType}</span>
                </div>
              </div>

              {/* Instant Quote Shortcut Form */}
              <div className="p-6 rounded-2xl bg-[#031426] border border-[#0799E8]/40 shadow-xl">
                <h4 className="text-sm font-bold text-white mb-1 flex items-center">
                  <Send className="w-4 h-4 mr-2 text-[#0799E8]" /> Quick Quote Inquiry for {product.name}
                </h4>
                <p className="text-xs text-slate-400 mb-4">
                  Enter your details to receive engineering drawings and preliminary cost breakdown.
                </p>
                <form onSubmit={handleFastInquiry} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      required
                      className="px-3 py-2 rounded-xl text-xs bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-[#0799E8]"
                    />
                    <input
                      type="tel"
                      placeholder="Indian Mobile (e.g. 98201 54321)"
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      required
                      className="px-3 py-2 rounded-xl text-xs bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-[#0799E8]"
                    />
                    <input
                      type="number"
                      placeholder="No. of Floors"
                      value={inquiryFloors}
                      onChange={(e) => setInquiryFloors(e.target.value)}
                      className="px-3 py-2 rounded-xl text-xs bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-[#0799E8]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl font-bold text-xs text-white bg-[#0799E8] hover:bg-[#0585cb] transition-all flex items-center justify-center shadow-lg shadow-[#0799E8]/25"
                  >
                    <span>Proceed to Full Quotation Wizard</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </button>
                </form>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Detailed Technical Tabs Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 space-x-6 overflow-x-auto scrollbar-none mb-10">
          {[
            { id: 'specs', label: 'Technical Specifications' },
            { id: 'features', label: 'Key Innovations' },
            { id: 'safety', label: 'Safety & Protection' },
            { id: 'finishes', label: 'Finishes & Aesthetics' },
            { id: 'applications', label: 'Ideal Applications' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 text-sm font-bold transition-all border-b-2 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-[#0799E8] text-[#0799E8]'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content: Specs */}
        {activeTab === 'specs' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm animate-fadeIn">
            <h3 className="text-xl font-bold text-[#15283B] mb-6">
              Engineering Specification Matrix
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specs).map(([key, val], idx) => (
                <div key={idx} className="flex justify-between items-center p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-xs font-semibold text-slate-500 uppercase">{key}</span>
                  <span className="text-sm font-bold text-[#15283B] text-right ml-4">{val}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content: Features */}
        {activeTab === 'features' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm animate-fadeIn">
            <h3 className="text-xl font-bold text-[#15283B] mb-6">
              Key Engineering Features & Innovations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.features.map((feat, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-4 rounded-xl bg-[#F5F8FC] border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-[#0799E8] shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 leading-relaxed font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content: Safety */}
        {activeTab === 'safety' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm animate-fadeIn">
            <h3 className="text-xl font-bold text-[#15283B] mb-6">
              Standard Safety Architecture (IS 14665 & NBC 2016)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.safetyFeatures.map((saf, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-4 rounded-xl bg-emerald-50/60 border border-emerald-100">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-800 leading-relaxed font-medium">{saf}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content: Finishes */}
        {activeTab === 'finishes' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm animate-fadeIn">
            <h3 className="text-xl font-bold text-[#15283B] mb-6">
              Available Cabin Finishes & Customization Options
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.cabinFinishes.map((fin, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-xs font-bold text-[#0799E8] block mb-1">Option 0{idx + 1}</span>
                  <h4 className="text-sm font-semibold text-slate-800">{fin}</h4>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content: Applications */}
        {activeTab === 'applications' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm animate-fadeIn">
            <h3 className="text-xl font-bold text-[#15283B] mb-6">
              Recommended Building Applications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.applications.map((app, idx) => (
                <div key={idx} className="flex items-center space-x-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <Building className="w-5 h-5 text-[#0799E8] shrink-0" />
                  <span className="text-sm font-bold text-slate-800">{app}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-slate-100 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h3 className="text-2xl font-bold text-[#15283B]">
                  Related Elevator Solutions
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Explore other elevator configurations engineered for similar building architectures.
                </p>
              </div>
              <Link to="/products" className="text-xs font-bold text-[#0799E8] hover:underline flex items-center">
                All Products <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <div className="bg-[#061B32] py-16 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Need a Detailed Engineering Proposal for {product.name}?
          </h2>
          <p className="text-sm text-slate-300 mb-8 font-light">
            Our elevator engineering team will calculate your shaft hoistway layout, pit depth, and overhead clearance based on your architectural drawings.
          </p>
          <Link
            to={`/request-quote?product=${product.id}`}
            className="inline-flex items-center px-8 py-4 rounded-2xl font-bold text-base text-white bg-[#0799E8] hover:bg-[#0585cb] shadow-xl shadow-[#0799E8]/30 transition-all"
          >
            <span>Request Full Quote for {product.name}</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>

    </div>
  );
}
