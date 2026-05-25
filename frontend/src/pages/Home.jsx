import { Hero } from '../components/sections/Hero';
import { ServicesPreview } from '../components/sections/ServicesPreview';
import { CTA } from '../components/sections/CTA';
import { Testimonials } from '../components/sections/Testimonials';
import { SectionTitle } from '../components/common/SectionTitle';
import { ProjectCard } from '../components/sections/ProjectCard';
import { servicesData } from '../data/servicesData';
import { projectsData } from '../data/projectsData';
import { testimonialsData } from '../data/testimonialsData';
import { useSEO, SEO_DEFAULTS } from '../helpers/seo';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const Home = () => {
  useSEO(SEO_DEFAULTS.home.title, SEO_DEFAULTS.home.description, SEO_DEFAULTS.home.keywords);

  const stats = [
    { number: '500+', label: 'Classrooms Equipped' },
    { number: '98%', label: 'Teacher Satisfaction' },
    { number: '50+', label: 'Educational Institutions' },
    { number: '10+', label: 'Years Experience' }
  ];

  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <Hero 
        label="Education Technology Solutions"
        title="Transforming Education Through Innovation"
        description="Premium interactive flat panels and education cameras designed to revolutionize learning. Bring your classroom to life with cutting-edge technology."
        primaryCTA={{ text: 'Explore Products', link: '/projects' }}
        secondaryCTA={{ text: 'Schedule Demo', link: '/contact' }}
        imageUrl="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200"
      />

      {/* Stats Section */}
      <section className="py-20 bg-[#0A0A0A] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                data-testid={`stat-${index}`}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p 
                  className="text-4xl lg:text-5xl font-black tracking-tighter text-[#FACC15] mb-2"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {stat.number}
                </p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle 
            label="Our Solutions"
            title="Complete Education Technology Ecosystem"
            description="From interactive flat panels to professional cameras, we provide everything you need for modern, engaging classrooms."
          />
          <ServicesPreview services={servicesData} />
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-[#F4F4F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle 
            label="Our Products"
            title="Premium Interactive Solutions"
            description="Explore our range of interactive flat panels and education cameras designed for excellence."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {projectsData.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle 
                label="Why Choose Us"
                title="Built on Excellence"
                description="We combine cutting-edge technology, industry expertise, and dedicated support to deliver exceptional education solutions."
              />
              
              <ul className="space-y-4">
                {[
                  'Premium quality interactive displays',
                  'Google EDLA certified products',
                  'Professional installation & training',
                  'Comprehensive warranty coverage',
                  '24/7 technical support',
                  'Custom classroom solutions'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <CheckCircle2 size={24} className="text-[#2563EB] flex-shrink-0 mt-0.5" />
                    <span className="text-[#52525B]">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800"
                alt="Why choose us"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#FACC15]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials testimonials={testimonialsData} />

      {/* CTA */}
      <CTA 
        title="Ready to Transform Your Classroom?"
        description="Schedule a free demo and discover how our interactive solutions can enhance learning experiences."
        buttonText="Schedule Free Demo"
        buttonLink="/contact"
        variant="dark"
      />
    </div>
  );
};