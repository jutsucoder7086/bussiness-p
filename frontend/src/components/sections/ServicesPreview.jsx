import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Zap, Sparkles, BarChart3 } from 'lucide-react';

const iconMap = {
  Target,
  Zap,
  Sparkles,
  BarChart3
};

export const ServicesPreview = ({ services, showAll = false }) => {
  const displayedServices = showAll ? services : services.slice(0, 3);

  return (
    <section data-testid="services-preview" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-black/10">
          {displayedServices.map((service, index) => {
            const Icon = iconMap[service.icon] || Target;
            
            return (
              <motion.div
                key={service.id}
                data-testid={`service-card-${service.id}`}
                className="grid-border p-8 lg:p-12 hover:bg-[#F4F4F5] transition-colors group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-[#0A0A0A] group-hover:bg-[#2563EB] transition-colors flex items-center justify-center">
                    <Icon size={28} className="text-white" />
                  </div>
                </div>
                
                <h3 
                  className="text-2xl font-bold text-[#0A0A0A] mb-4"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {service.title}
                </h3>
                
                <p className="text-[#52525B] leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {service.features && (
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-sm text-[#52525B] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            );
          })}
        </div>
        
        {!showAll && (
          <div className="text-center mt-12">
            <Link
              to="/services"
              data-testid="view-all-services-button"
              className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white hover:bg-[#2563EB] hover:-translate-y-1 transition-all duration-300 px-8 py-4 font-bold tracking-wide"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              View All Services
              <ArrowRight size={20} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};