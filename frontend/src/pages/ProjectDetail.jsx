import { useParams, Link, Navigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { CTA } from '../components/sections/CTA';
import { useSEO } from '../helpers/seo';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);

  useSEO(
    project?.title || 'Project',
    project?.longDescription || project?.description || '',
    `project, case study, ${project?.category || ''}`
  );

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const images = project.images || [project.image];

  return (
    <div data-testid="project-detail-page">
      {/* Back Button */}
      <div className="bg-white pt-32 pb-8 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link 
            to="/projects"
            data-testid="back-to-projects-button"
            className="inline-flex items-center gap-2 text-[#52525B] hover:text-[#0A0A0A] transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-semibold">Back to Projects</span>
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 pb-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <span className="inline-block text-xs tracking-[0.2em] uppercase font-bold text-white/80 mb-4 px-4 py-2 bg-[#2563EB]">
              {project.category}
            </span>
            <h1 
              data-testid="project-title"
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-none text-white"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 
                  className="text-4xl font-bold text-[#0A0A0A] mb-6"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  Project Overview
                </h2>
                <p className="text-lg text-[#52525B] leading-relaxed mb-8">
                  {project.longDescription}
                </p>

                {/* Results */}
                {project.results && (
                  <div className="mt-12">
                    <h3 
                      className="text-2xl font-bold text-[#0A0A0A] mb-6"
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      Key Results
                    </h3>
                    <ul className="space-y-4">
                      {project.results.map((result, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 size={24} className="text-[#2563EB] flex-shrink-0 mt-0.5" />
                          <span className="text-[#52525B] text-lg">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {project.technologies && (
                  <div className="mt-12">
                    <h3 
                      className="text-2xl font-bold text-[#0A0A0A] mb-6"
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-4 py-2 bg-[#F4F4F5] text-[#0A0A0A] font-semibold text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Image Gallery for products with multiple images */}
                {images.length > 1 && (
                  <div className="mt-12">
                    <h3 
                      className="text-2xl font-bold text-[#0A0A0A] mb-6"
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      Product Gallery
                    </h3>
                    {/* Main Image */}
                    <div className="mb-4 bg-[#F4F4F5] aspect-square flex items-center justify-center overflow-hidden">
                      <img 
                        src={images[selectedImage]}
                        alt={`${project.title} - View ${selectedImage + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Thumbnail Grid */}
                    <div className="grid grid-cols-4 gap-3">
                      {images.map((img, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImage(index)}
                          className={`aspect-square bg-[#F4F4F5] overflow-hidden border-2 transition-all ${
                            selectedImage === index 
                              ? 'border-[#2563EB]' 
                              : 'border-transparent hover:border-[#52525B]'
                          }`}
                        >
                          <img 
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-contain"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technical Specifications */}
                {project.specifications && (
                  <div className="mt-12">
                    <h3 
                      className="text-2xl font-bold text-[#0A0A0A] mb-6"
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      Technical Specifications
                    </h3>
                    <div className="bg-[#F4F4F5] p-6 space-y-4">
                      {Object.entries(project.specifications).map(([key, value]) => (
                        <div key={key} className="border-b border-black/10 pb-3 last:border-0">
                          <p className="text-xs tracking-wider uppercase text-[#52525B] mb-1">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </p>
                          <p className="text-[#0A0A0A] font-semibold text-sm">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                className="bg-[#F4F4F5] p-8 sticky top-32"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 
                  className="text-xs tracking-[0.2em] uppercase font-bold text-[#52525B] mb-6"
                >
                  Project Info
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-[#52525B] mb-1">Client</p>
                    <p className="text-lg font-bold text-[#0A0A0A]">{project.client}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-[#52525B] mb-1">Year</p>
                    <p className="text-lg font-bold text-[#0A0A0A]">{project.year}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-[#52525B] mb-1">Services</p>
                    <ul className="space-y-1">
                      {project.services.map((service, index) => (
                        <li key={index} className="text-[#0A0A0A] font-semibold">
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to="/contact"
                  data-testid="start-project-button"
                  className="w-full mt-8 bg-[#0A0A0A] text-white hover:bg-[#2563EB] hover:-translate-y-1 transition-all duration-300 px-6 py-4 font-bold tracking-wide inline-flex items-center justify-center gap-2"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  Start Your Project
                  <ExternalLink size={18} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects CTA */}
      <CTA 
        title="See More Projects"
        description="Explore our portfolio to see how we've helped other businesses achieve their goals."
        buttonText="View All Projects"
        buttonLink="/projects"
        variant="dark"
      />
    </div>
  );
};