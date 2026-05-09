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
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Years Experience' }
  ];

  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <Hero 
        label="Welcome to Innovation"
        title="Transforming Ideas Into Impact"
        description="We partner with forward-thinking businesses to create digital solutions that drive growth, inspire customers, and deliver measurable results."
        primaryCTA={{ text: 'Start Your Project', link: '/contact' }}
        secondaryCTA={{ text: 'View Our Work', link: '/projects' }}
        imageUrl="https://images.unsplash.com/photo-1776926092765-cd3b30c3b8f4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwzfHxhYnN0cmFjdCUyMHZpYnJhbnQlMjBnZW9tZXRyaWMlMjBncmFkaWVudHxlbnwwfHx8fDE3NzgzMjczNDh8MA&ixlib=rb-4.1.0&q=85"
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
            label="What We Do"
            title="Services That Drive Results"
            description="From strategy to execution, we provide comprehensive solutions tailored to your business needs."
          />
          <ServicesPreview services={servicesData} />
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-[#F4F4F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle 
            label="Our Work"
            title="Featured Projects"
            description="Explore some of our recent work and see how we've helped businesses achieve their goals."
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
                description="We combine strategic thinking, creative excellence, and technical expertise to deliver solutions that exceed expectations."
              />
              
              <ul className="space-y-4">
                {[
                  'Data-driven approach to every decision',
                  'Agile methodology for faster delivery',
                  'Dedicated team of industry experts',
                  'End-to-end project management',
                  'Ongoing support and optimization',
                  'Transparent communication'
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
                src="https://images.unsplash.com/photo-1641060272821-df59e2c0b5ed?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzc4MzI3MzI5fDA&ixlib=rb-4.1.0&q=85"
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
        title="Ready to Transform Your Business?"
        description="Let's discuss how we can help you achieve your goals and drive measurable results."
        buttonText="Start Your Project"
        buttonLink="/contact"
        variant="dark"
      />
    </div>
  );
};