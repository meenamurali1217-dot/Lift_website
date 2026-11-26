import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Filter, Building2, Layers, ArrowUpRight, Search } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import ProjectDetailModal from '../components/ProjectDetailModal';
import CTASection from '../components/CTASection';
import { projects, projectCategories, projectCities } from '../data/projects';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = 
      selectedCategory === 'All' || 
      project.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesCity = 
      selectedCity === 'All Cities' || 
      project.city.toLowerCase() === selectedCity.toLowerCase();

    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.elevatorType.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesCity && matchesSearch;
  });

  return (
    <div>
      {/* Projects Hero Banner */}
      <section className="relative py-24 bg-[#061B32] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#0799E8_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#0799E8]/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#0799E8]/20 text-[#0799E8] border border-[#0799E8]/30 mb-4">
            Proven Execution Track Record
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Our Landmark Projects
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            A portfolio of our successful elevator engineering installations across India&apos;s leading residential towers, corporate tech parks, super-specialty hospitals, and luxury malls.
          </p>
        </div>
      </section>

      {/* Filter and Search Toolbar */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-[73px] z-30 shadow-sm backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex items-center space-x-2 overflow-x-auto w-full lg:w-auto pb-1 scrollbar-none">
              {projectCategories.map((cat) => (
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

            {/* City Dropdown & Search */}
            <div className="flex items-center space-x-3 w-full lg:w-auto">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 border border-slate-200 text-slate-700 focus:outline-none focus:border-[#0799E8]"
              >
                {projectCities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>

              <div className="relative flex-1 lg:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search project or city..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-slate-100 border border-slate-200 focus:outline-none focus:border-[#0799E8] text-[#15283B]"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Results Info */}
        <div className="flex items-center justify-between mb-8 text-xs text-slate-500">
          <span>Showing <strong className="text-slate-800">{filteredProjects.length}</strong> completed landmark installations</span>
          {(selectedCategory !== 'All' || selectedCity !== 'All Cities') && (
            <button
              onClick={() => { setSelectedCategory('All'); setSelectedCity('All Cities'); setSearchQuery(''); }}
              className="text-[#0799E8] font-bold hover:underline"
            >
              Reset All Filters
            </button>
          )}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-3xl border border-slate-200 p-8">
            <p className="text-lg font-bold text-slate-700">No projects match the selected criteria</p>
            <p className="text-xs text-slate-500 mt-1">Try switching to &quot;All Cities&quot; or clearing your search term.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSelectedCity('All Cities'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#0799E8]"
            >
              Show All Projects
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={setActiveModalProject}
              />
            ))}
          </div>
        )}

      </section>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={activeModalProject}
        isOpen={Boolean(activeModalProject)}
        onClose={() => setActiveModalProject(null)}
      />

      {/* CTA */}
      <CTASection 
        title="Planning an Upcoming Commercial or Residential Development?"
        description="Connect with our project engineering team for hoistway sizing, traffic simulations, and custom architectural finishes."
        buttonText="Discuss Your Project"
      />
    </div>
  );
}
