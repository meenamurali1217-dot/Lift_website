import React from 'react';
import { X, MapPin, Building, ArrowRight, CheckCircle2, Calendar, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectDetailModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#061B32] border border-[#0799E8]/40 rounded-3xl overflow-y-auto shadow-2xl text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-4 px-6 border-b border-slate-700/60 bg-[#031426]/95 backdrop-blur-md">
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#0799E8]/20 text-[#0799E8] border border-[#0799E8]/30">
              {project.category}
            </span>
            <div className="flex items-center text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 mr-1 text-[#0799E8]" />
              {project.location}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Visual */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061B32] via-[#061B32]/30 to-transparent"></div>
          
          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-sm text-slate-300 flex items-center">
              <Building className="w-4 h-4 mr-2 text-[#0799E8]" /> Client: {project.client}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          {/* Key Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-[#031426] border border-slate-800">
            <div>
              <span className="text-xs text-slate-400 block">Total Units</span>
              <span className="text-lg font-bold text-white">{project.units} Elevators</span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block">Building Floors</span>
              <span className="text-lg font-bold text-white">{project.floors} Floors</span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block">Operating Speed</span>
              <span className="text-lg font-bold text-[#0799E8]">{project.speed}</span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block">Commission Year</span>
              <span className="text-lg font-bold text-white">{project.year}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0799E8] mb-2">
              Project Architecture & Brief
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Engineering Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0799E8] mb-3">
                Key Engineering Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-start space-x-2.5 p-3 rounded-xl bg-white/5 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-[#0799E8] shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-200">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Additional Gallery if available */}
          {project.gallery && project.gallery.length > 1 && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0799E8] mb-3">
                Installation Gallery
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.gallery.map((imgUrl, i) => (
                  <div key={i} className="rounded-xl overflow-hidden h-28 border border-slate-700/60">
                    <img src={imgUrl} alt={`Installation ${i+1}`} className="w-full h-full object-cover hover:scale-105 transition-transform" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 p-4 px-6 bg-[#031426] border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-400">
            Looking for a tailored elevator proposal for a similar building?
          </span>
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white"
            >
              Close
            </button>
            <Link
              to="/request-quote"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#0799E8] hover:bg-[#0585cb] flex items-center justify-center grow sm:grow-0"
            >
              <span>Request Quote for Similar Project</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
