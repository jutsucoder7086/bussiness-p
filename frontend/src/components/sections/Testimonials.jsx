import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export const Testimonials = ({ testimonials }) => {
  return (
    <section data-testid="testimonials-section" className="py-24 bg-[#F4F4F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              data-testid={`testimonial-card-${testimonial.id}`}
              className="bg-white p-8 border-l-4 border-[#2563EB]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#FACC15] text-[#FACC15]" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-[#52525B] leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#0A0A0A] rounded-full overflow-hidden flex-shrink-0">
                  {testimonial.image && (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div>
                  <p 
                    className="font-bold text-[#0A0A0A]"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[#52525B]">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};