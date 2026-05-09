import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const ProjectCard = ({ project, index = 0 }) => {
  return (
    <motion.div
      data-testid={`project-card-${project.id}`}
      className="group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/projects/${project.id}`}>
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3] bg-[#E4E4E7] mb-6">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="bg-white text-[#0A0A0A] px-6 py-3 font-bold flex items-center gap-2">
              View Project
              <ArrowRight size={20} />
            </span>
          </div>
        </div>
        
        {/* Content */}
        <div>
          <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#2563EB] mb-2 block">
            {project.category}
          </span>
          <h3 
            className="text-2xl font-bold text-[#0A0A0A] mb-3 group-hover:text-[#2563EB] transition-colors"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            {project.title}
          </h3>
          <p className="text-[#52525B] leading-relaxed">
            {project.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};