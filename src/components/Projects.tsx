import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search as SearchIcon, Github, ExternalLink, Tag } from 'lucide-react';
import { projects } from '../data';
import { cn } from '../lib/utils';
import { useLanguage } from '../lib/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState(t.projects.all);

  const categories = [t.projects.all, ...new Set(projects.flatMap(p => p.technologies))].slice(0, 8);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            project.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesTab = activeTab === t.projects.all || project.technologies.includes(activeTab);
      
      return matchesSearch && matchesTab;
    });
  }, [searchQuery, activeTab]);

  return (
    <section id="projects" className="py-24 bg-page-bg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {t.projects.featured} <span className="text-accent">{t.projects.projectsSpan}</span>
            </h2>
            <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-bold">
              {t.projects.showing} {filteredProjects.length} {t.projects.of} {projects.length} {t.projects.repositories}
            </span>
          </div>

          <div className="relative w-full md:w-80">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
            <input
              type="text"
              placeholder={t.projects.search}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-6 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={cn(
                "px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all",
                activeTab === category 
                  ? "bg-accent text-white" 
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group frosted-card overflow-hidden flex flex-col h-full hover:border-accent/40 transition-all duration-500 p-10"
              >
                <div className="flex flex-col flex-grow">
                  <h3 className="font-display text-2xl font-bold mb-4 text-accent">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/80 text-sm mb-6 line-clamp-2 leading-relaxed h-[3rem]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-[10px] font-bold uppercase tracking-widest text-[#d1c7ff] py-1.5 px-3 rounded-sm bg-accent/15 border border-accent/30">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-8 border-t border-glass-border flex items-center justify-between">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-accent transition-colors"
                    >
                      {t.projects.viewRepo}
                      <span className="transition-transform group-hover/link:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-white/40 text-lg">{t.projects.noProjects}</p>
          </div>
        )}
      </div>
    </section>
  );
}
