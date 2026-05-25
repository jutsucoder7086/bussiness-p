import { useState } from 'react';
import { Hero } from '../components/sections/Hero';
import { SectionTitle } from '../components/common/SectionTitle';
import { ProjectCard } from '../components/sections/ProjectCard';
import { CTA } from '../components/sections/CTA';
import { projectsData } from '../data/projectsData';
import { useSEO, SEO_DEFAULTS } from '../helpers/seo';

export const Projects = () => {
  useSEO(SEO_DEFAULTS.projects.title, SEO_DEFAULTS.projects.description, SEO_DEFAULTS.projects.keywords);
  
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', ...new Set(projectsData.map(p => p.category))];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <div data-testid="projects-page">
      {/* Hero Section */}
      <Hero 
        label="Our Products"
        title="Interactive Solutions For Education"
        description="Premium interactive flat panels and education cameras designed to create engaging, collaborative learning environments. Explore our complete range of products."
        primaryCTA={{ text: 'Schedule Demo', link: '/contact' }}
        secondaryCTA={{ text: 'View Solutions', link: '/services' }}
        imageUrl="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200"
      />

      {/* Projects Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle 
            label="Featured Products"
            title="Browse Our Product Range"
            description="Filter by category to explore interactive panels, cameras, and complete classroom solutions."
          />

          {/* Category Filter */}
          <div data-testid="category-filter" className="flex flex-wrap gap-3 mb-16">
            {categories.map(category => (
              <button
                key={category}
                data-testid={`filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 font-bold text-sm tracking-wide transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#0A0A0A] text-white'
                    : 'bg-transparent border-2 border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white'
                }`}
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA 
        title="Need Help Choosing The Right Product?"
        description="Our education technology experts are here to help you find the perfect solution for your institution."
        buttonText="Contact Our Team"
        buttonLink="/contact"
        variant="dark"
      />
    </div>
  );
};