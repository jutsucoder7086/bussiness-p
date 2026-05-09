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
        label="Our Portfolio"
        title="Projects That Make An Impact"
        description="Explore our portfolio of successful projects across industries. Each one tells a story of innovation, collaboration, and results."
        primaryCTA={{ text: 'Start Your Project', link: '/contact' }}
        secondaryCTA={{ text: 'Our Services', link: '/services' }}
        imageUrl="https://images.unsplash.com/photo-1750727548934-0e7fab8cb304?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHZpYnJhbnQlMjBnZW9tZXRyaWMlMjBncmFkaWVudHxlbnwwfHx8fDE3NzgzMjczNDh8MA&ixlib=rb-4.1.0&q=85"
      />

      {/* Projects Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle 
            label="Featured Work"
            title="Browse Our Projects"
            description="Filter by category to see specific types of work."
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
        title="Have A Project In Mind?"
        description="Let's bring your vision to life with our proven expertise and innovative approach."
        buttonText="Let's Talk"
        buttonLink="/contact"
        variant="dark"
      />
    </div>
  );
};