import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ArrowRight, ShieldCheck, Gauge, Users, Sparkles } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import CTASection from '../components/CTASection';
import { products, productCategories } from '../data/products';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesCategory = 
      selectedCategory === 'All' || 
      product.category.toLowerCase() === selectedCategory.toLowerCase();
    
    const matchesSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tagline.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Products Hero */}
      <section className="relative py-24 bg-[#061B32] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#0799E8_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#0799E8]/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#0799E8]/20 text-[#0799E8] border border-[#0799E8]/30 mb-4">
            Complete Elevator Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Explore Our Elevator Solutions
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            Discover innovative lift systems designed for safety, comfort and performance. From luxury high-rise towers to heavy-payload industrial manufacturing.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-[73px] z-30 shadow-sm backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {productCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#0799E8] text-white shadow-md shadow-[#0799E8]/25'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search elevator types, specs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-slate-100 border border-slate-200 focus:outline-none focus:border-[#0799E8] focus:bg-white transition-all text-[#15283B]"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Results Counter */}
        <div className="flex items-center justify-between mb-8 text-xs text-slate-500">
          <span>Showing <strong className="text-slate-800">{filteredProducts.length}</strong> elevator systems</span>
          {selectedCategory !== 'All' && (
            <span>Filtered by category: <strong className="text-[#0799E8]">{selectedCategory}</strong></span>
          )}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-3xl border border-slate-200 p-8">
            <p className="text-lg font-bold text-slate-700">No matching elevator solutions found</p>
            <p className="text-xs text-slate-500 mt-1">Try adjusting your search query or switching categories.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#0799E8]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* Engineering Standards Strip */}
      <section className="py-12 bg-[#061B32] text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left items-center">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <ShieldCheck className="w-8 h-8 text-[#0799E8] shrink-0" />
              <div>
                <h4 className="text-sm font-bold">Automatic Rescue Device (ARD)</h4>
                <p className="text-xs text-slate-400">Standard equipment on every single passenger lift</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Gauge className="w-8 h-8 text-[#0799E8] shrink-0" />
              <div>
                <h4 className="text-sm font-bold">PMSM Gearless Motors</h4>
                <p className="text-xs text-slate-400">Save up to 45% power compared to conventional geared lifts</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Users className="w-8 h-8 text-[#0799E8] shrink-0" />
              <div>
                <h4 className="text-sm font-bold">Complete Statutory Licensing</h4>
                <p className="text-xs text-slate-400">Turnkey PWD and State Lift Inspectorate approvals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title="Need Technical Hoistway Drawings or Custom Dimensions?"
        description="Our elevator architects can provide BIM / CAD layout drawings tailored to your building shaft dimensions within 24 hours."
        buttonText="Request Architectural Drawings"
      />
    </div>
  );
}
