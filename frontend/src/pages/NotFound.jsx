import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export const NotFound = () => {
  return (
    <div data-testid="not-found-page" className="min-h-screen flex items-center justify-center bg-[#F4F4F5] px-6">
      <motion.div
        className="text-center max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* 404 */}
        <h1 
          className="text-[15vw] sm:text-[12vw] lg:text-[10vw] font-black tracking-tighter leading-none text-[#0A0A0A] mb-8"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          404
        </h1>
        
        {/* Message */}
        <h2 
          className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] mb-6"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          Page Not Found
        </h2>
        
        <p className="text-lg text-[#52525B] leading-relaxed mb-10">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        
        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            data-testid="home-button"
            className="bg-[#0A0A0A] text-white hover:bg-[#2563EB] hover:-translate-y-1 transition-all duration-300 px-8 py-4 font-bold tracking-wide inline-flex items-center justify-center gap-2"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            <Home size={20} />
            Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            data-testid="back-button"
            className="bg-transparent border-2 border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-all duration-300 px-8 py-4 font-bold tracking-wide inline-flex items-center justify-center gap-2"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
};