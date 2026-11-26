import React from 'react';
import { MapPin, ArrowUpRight, Building2, Layers } from 'lucide-react';

export default function ProjectCard({ project, onSelect }) {
  return (
    <div 
      onClick={() => onSelect(project)}
      className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg shadow-slate-900/5 hover:shadow-2xl hover:shadow-[#0799E8]/15 transition-all duration-300 flex flex-col hover:-translate-y-1.5"
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-slate-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#061B32]/80 backdrop-blur-md text-white border border-white/10 shadow-sm">
            {project.category}
          </span>
        </div>

        {/* Location Overlay */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/90">
          <span className="flex items-center text-slate-200">
            <MapPin className="w-3.5 h-3.5 mr-1 text-[#0799E8]" />
            {project.location}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-[#15283B] group-hover:text-[#0799E8] transition-colors mb-2 line-clamp-1">
            {project.title}
          </h3>
          <p className="text-xs text-[#667789] mb-4 flex items-center">
            <Building2 className="w-3.5 h-3.5 mr-1 text-slate-400" /> Client: {project.client}
          </p>
          
          <div className="flex items-center space-x-4 text-xs font-medium text-slate-600 bg-[#F5F8FC] p-3 rounded-2xl mb-4">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Elevators</span>
              <span className="font-bold text-[#15283B]">{project.units} Units</span>
            </div>
            <div className="w-px h-6 bg-slate-200"></div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Height</span>
              <span className="font-bold text-[#15283B]">{project.floors} Floors</span>
            </div>
            <div className="w-px h-6 bg-slate-200"></div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Speed</span>
              <span className="font-bold text-[#0799E8]">{project.speed}</span>
            </div>
          </div>
        </div>

        {/* Trigger */}
        <div className="pt-2 flex items-center justify-between text-sm font-bold text-[#0799E8] group-hover:text-[#0585cb]">
          <span>View Project Details</span>
          <div className="w-8 h-8 rounded-full bg-[#EAF6FD] flex items-center justify-center group-hover:bg-[#0799E8] group-hover:text-white transition-colors">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
