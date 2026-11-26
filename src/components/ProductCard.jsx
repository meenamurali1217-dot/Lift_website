import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Gauge, Users } from 'lucide-react';
import { asset } from '../utils/asset';

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg shadow-slate-900/5 hover:shadow-2xl hover:shadow-[#0799E8]/10 transition-all duration-300 flex flex-col hover:-translate-y-1.5">
      {/* Product Image with Hover Zoom */}
      <div className="relative h-64 overflow-hidden bg-slate-900">
        <img
          src={asset(product.heroImage)}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Category / Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-[#061B32] shadow-sm">
            {product.category}
          </span>
        </div>

        {product.badge && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#0799E8] text-white shadow-sm">
              {product.badge}
            </span>
          </div>
        )}

        {/* Capacity / Speed Quick Overlay */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/90">
          <span className="flex items-center">
            <Users className="w-3.5 h-3.5 mr-1 text-[#0799E8]" />
            {product.capacity}
          </span>
          <span className="flex items-center">
            <Gauge className="w-3.5 h-3.5 mr-1 text-[#0799E8]" />
            {product.speed}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-[#15283B] group-hover:text-[#0799E8] transition-colors mb-2">
            {product.name}
          </h3>
          <p className="text-sm text-[#667789] line-clamp-2 leading-relaxed mb-4">
            {product.shortDescription}
          </p>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <Link
            to={`/products/${product.id}`}
            className="inline-flex items-center text-sm font-bold text-[#0799E8] hover:text-[#0585cb] group/link"
          >
            <span>Explore Details</span>
            <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>

          <Link
            to={`/request-quote?product=${product.id}`}
            className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-[#0799E8] hover:text-white transition-all"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
