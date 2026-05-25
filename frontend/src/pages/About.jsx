import { Hero } from '../components/sections/Hero';
import { SectionTitle } from '../components/common/SectionTitle';
import { CTA } from '../components/sections/CTA';
import { useSEO, SEO_DEFAULTS } from '../helpers/seo';
import { motion } from 'framer-motion';
import { Users, Target, Award, Lightbulb } from 'lucide-react';

export const About = () => {
  useSEO(SEO_DEFAULTS.about.title, SEO_DEFAULTS.about.description, SEO_DEFAULTS.about.keywords);

  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We exist to help businesses unlock their full potential through innovative digital solutions.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We constantly push boundaries, exploring new technologies and approaches to solve complex challenges.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We build lasting partnerships based on trust and transparency.'
    },
    {
      icon: Award,
      title: 'Excellence Always',
      description: 'We hold ourselves to the highest standards, delivering quality that exceeds expectations.'
    }
  ];

  const team = [
    { name: 'Alex Thompson', role: 'CEO & Founder', specialty: 'Strategic Vision' },
    { name: 'Sarah Chen', role: 'Chief Technology Officer', specialty: 'Technical Architecture' },
    { name: 'Marcus Rodriguez', role: 'Creative Director', specialty: 'Brand & Design' },
    { name: 'Emily Watson', role: 'Head of Operations', specialty: 'Project Management' },
    { name: 'David Kim', role: 'Lead Developer', specialty: 'Full Stack Development' },
    { name: 'Lisa Anderson', role: 'UX Director', specialty: 'User Experience' }
  ];

  return (
    <div data-testid="about-page">
      {/* Hero Section */}
      <Hero 
        label="About Us"
        title="Innovators, Problem Solvers, Your Partners"
        description="We're a team of passionate professionals dedicated to transforming businesses through technology, strategy, and creativity."
        primaryCTA={{ text: 'Work With Us', link: '/contact' }}
        secondaryCTA={{ text: 'See Our Work', link: '/projects' }}
        imageUrl="https://images.unsplash.com/photo-1641060272821-df59e2c0b5ed?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzc4MzI3MzI5fDA&ixlib=rb-4.1.0&q=85"
      />

      {/* Our Story */}
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
                label="Our Story"
                title="15 Years of Innovation"
                description="Founded in 2009, we started with a simple mission: help businesses leverage technology to achieve their goals. Today, Sitash is a full-service digital agency trusted by companies worldwide."
              />
              
              <div className="space-y-6 text-[#52525B] leading-relaxed">
                <p>
                  What began as a small team of developers has grown into a diverse group of strategists, designers, developers, and marketers—all united by a passion for creating exceptional digital experiences.
                </p>
                <p>
                  We've delivered over 500 successful projects across industries, from startups finding their footing to enterprises scaling globally. Our approach combines deep technical expertise with strategic thinking and creative excellence.
                </p>
                <p>
                  We're not just service providers—we're partners invested in your success. Every project is an opportunity to push boundaries, solve complex problems, and deliver results that matter.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1758873269317-51888e824b28?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHw0fHxkaXZlcnNlJTIwY3JlYXRpdmUlMjBidXNpbmVzcyUyMHRlYW18ZW58MHx8fHwxNzc4MzI3MzI5fDA&ixlib=rb-4.1.0&q=85"
                alt="Our team"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#2563EB]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-[#F4F4F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle 
            label="Our Values"
            title="What Drives Us"
            description="Our core principles guide every decision we make and every project we deliver."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  data-testid={`value-card-${index}`}
                  className="bg-white p-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2563EB] mb-6">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 
                    className="text-xl font-bold text-[#0A0A0A] mb-4"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-[#52525B] leading-relaxed text-sm">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle 
            label="Leadership"
            title="Meet The Team"
            description="A diverse group of experts passionate about innovation and excellence."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                data-testid={`team-member-${index}`}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-full aspect-square bg-[#E4E4E7] mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB] to-[#0A0A0A] opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span 
                      className="text-6xl font-black text-white"
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <h3 
                  className="text-xl font-bold text-[#0A0A0A] mb-2"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {member.name}
                </h3>
                <p className="text-sm text-[#2563EB] font-semibold mb-1">{member.role}</p>
                <p className="text-sm text-[#52525B]">{member.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA 
        title="Let's Build Something Great Together"
        description="Join the hundreds of businesses that trust Sitash to bring their vision to life."
        buttonText="Start Your Project"
        buttonLink="/contact"
        variant="dark"
      />
    </div>
  );
};