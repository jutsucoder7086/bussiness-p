import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CTA = ({ 
  title, 
  description, 
  buttonText = 'Get Started', 
  buttonLink = '/contact',
  variant = 'default'
}) => {
  const bgClass = variant === 'dark' ? 'bg-[#0A0A0A] text-white' : 'bg-[#F4F4F5] text-[#0A0A0A]';
  const buttonClass = variant === 'dark' 
    ? 'bg-white text-[#0A0A0A] hover:bg-[#FACC15]'
    : 'bg-[#0A0A0A] text-white hover:bg-[#2563EB]';

  return (
    <section data-testid="cta-section" className={`py-24 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            data-testid="cta-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-tight mb-6"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            {title}
          </h2>
          
          {description && (
            <p 
              data-testid="cta-description"
              className={`text-lg leading-relaxed mb-10 ${
                variant === 'dark' ? 'text-gray-300' : 'text-[#52525B]'
              }`}
            >
              {description}
            </p>
          )}
          
          <Link
            to={buttonLink}
            data-testid="cta-button"
            className={`inline-flex items-center gap-2 ${buttonClass} hover:-translate-y-1 transition-all duration-300 px-10 py-5 font-bold tracking-wide text-lg`}
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            {buttonText}
            <ArrowRight size={22} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};