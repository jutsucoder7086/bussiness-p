import { Hero } from '../components/sections/Hero';
import { ServicesPreview } from '../components/sections/ServicesPreview';
import { CTA } from '../components/sections/CTA';
import { SectionTitle } from '../components/common/SectionTitle';
import { servicesData } from '../data/servicesData';
import { useSEO, SEO_DEFAULTS } from '../helpers/seo';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const Services = () => {
  useSEO(SEO_DEFAULTS.services.title, SEO_DEFAULTS.services.description, SEO_DEFAULTS.services.keywords);

  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We start by understanding your business, goals, and challenges. Through research and analysis, we develop a strategic roadmap.'
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Our team creates detailed designs, prototypes, and project plans that align with your vision and objectives.'
    },
    {
      step: '03',
      title: 'Development & Build',
      description: 'Using agile methodologies, we build and iterate quickly, ensuring quality and flexibility throughout the process.'
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Rigorous testing ensures everything works flawlessly before we launch your solution to the world.'
    },
    {
      step: '05',
      title: 'Optimize & Scale',
      description: 'Post-launch, we monitor performance, gather insights, and continuously optimize for better results.'
    }
  ];

  return (
    <div data-testid="services-page">
      {/* Hero Section */}
      <Hero 
        label="Our Services"
        title="Comprehensive Solutions For Modern Businesses"
        description="From strategy to execution, we deliver end-to-end services that drive growth and create lasting impact."
        primaryCTA={{ text: 'Get Started', link: '/contact' }}
        secondaryCTA={{ text: 'View Projects', link: '/projects' }}
        imageUrl="https://images.unsplash.com/photo-1674981208693-de5a9c4c4f44?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBvZmZpY2UlMjBhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzc4MzI3MzI5fDA&ixlib=rb-4.1.0&q=85"
      />

      {/* All Services */}
      <ServicesPreview services={servicesData} showAll={true} />

      {/* Our Process */}
      <section className="py-24 bg-[#F4F4F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle 
            label="How We Work"
            title="Our Process"
            description="A proven methodology that delivers results consistently."
            centered
          />
          
          <div className="space-y-0 border-l-2 border-[#2563EB]">
            {process.map((item, index) => (
              <motion.div
                key={index}
                data-testid={`process-step-${index}`}
                className="relative pl-12 pb-16 last:pb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Step Number */}
                <div className="absolute -left-6 top-0 w-12 h-12 bg-[#2563EB] flex items-center justify-center">
                  <span 
                    className="text-white font-black text-lg"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {item.step}
                  </span>
                </div>
                
                <h3 
                  className="text-2xl font-bold text-[#0A0A0A] mb-3"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {item.title}
                </h3>
                <p className="text-[#52525B] leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1758873268631-fa944fc5cad2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY3JlYXRpdmUlMjBidXNpbmVzcyUyMHRlYW18ZW58MHx8fHwxNzc4MzI3MzI5fDA&ixlib=rb-4.1.0&q=85"
                alt="Team collaboration"
                className="w-full h-[600px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle 
                label="The Advantage"
                title="Why Businesses Choose Us"
                description="We deliver more than just services—we deliver results, partnerships, and peace of mind."
              />
              
              <ul className="space-y-4">
                {[
                  'Industry-leading expertise across all services',
                  'Proven track record with 500+ successful projects',
                  'Flexible engagement models to fit your needs',
                  'Transparent pricing with no hidden costs',
                  'Dedicated account management',
                  'Fast turnaround without compromising quality',
                  'Scalable solutions that grow with you',
                  'Ongoing support and maintenance'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
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
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA 
        title="Ready To Get Started?"
        description="Let's discuss your project and explore how our services can help you achieve your goals."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
        variant="dark"
      />
    </div>
  );
};