import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = ({ 
  label, 
  title, 
  description, 
  primaryCTA, 
  secondaryCTA,
  imageUrl,
  overlay = true 
}) => {
  return (
    <section 
      data-testid="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      {imageUrl && (
        <div className="absolute inset-0 z-0">
          <img 
            src={imageUrl} 
            alt="Hero background" 
            className="w-full h-full object-cover"
          />
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent" />
          )}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {label && (
              <span 
                data-testid="hero-label"
                className="inline-block text-xs tracking-[0.2em] uppercase font-bold text-[#52525B] mb-6 px-4 py-2 bg-[#FACC15] text-[#0A0A0A]"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {label}
              </span>
            )}
            
            <h1 
              data-testid="hero-title"
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-none text-[#0A0A0A] mb-8"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              {title}
            </h1>
            
            {description && (
              <p 
                data-testid="hero-description"
                className="text-lg sm:text-xl leading-relaxed text-[#52525B] mb-12 max-w-2xl"
              >
                {description}
              </p>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4">
              {primaryCTA && (
                <Link
                  to={primaryCTA.link}
                  data-testid="hero-primary-cta"
                  className="bg-[#0A0A0A] text-white hover:bg-[#2563EB] hover:-translate-y-1 transition-all duration-300 px-8 py-4 font-bold tracking-wide inline-flex items-center justify-center gap-2"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {primaryCTA.text}
                  <ArrowRight size={20} />
                </Link>
              )}
              
              {secondaryCTA && (
                <Link
                  to={secondaryCTA.link}
                  data-testid="hero-secondary-cta"
                  className="bg-transparent border-2 border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-all duration-300 px-8 py-4 font-bold tracking-wide inline-flex items-center justify-center"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {secondaryCTA.text}
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#2563EB] opacity-10 blur-3xl rounded-full" />
    </section>
  );
};