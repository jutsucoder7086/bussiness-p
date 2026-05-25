import { Link } from 'react-router-dom';
import { SITE_NAME, SOCIAL_LINKS, CONTACT_EMAIL, CONTACT_PHONE } from '../../helpers/constants';
import { Linkedin, Twitter, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const socialIcons = {
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  facebook: Facebook
};

export const Footer = () => {
  return (
    <footer data-testid="main-footer" className="bg-[#0A0A0A] text-white">
      {/* Massive CTA Section */}
      <div className="border-b border-white/10 py-7 lg:py-11">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 
            data-testid="footer-cta-heading"
            className="text-[6vw] sm:text-[5vw] lg:text-[4vw] font-black leading-none tracking-tighter mb-8"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            LET'S BUILD
            <br />
            SOMETHING
            <br />
            <span className="text-[#FACC15]">AMAZING</span>
          </h2>
          <Link
            to="/contact"
            data-testid="footer-cta-button"
            className="inline-block bg-white text-[#0A0A0A] hover:bg-[#2563EB] hover:text-white hover:-translate-y-1 transition-all duration-300 px-8 py-3 font-bold tracking-wide text-sm"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            START YOUR PROJECT
          </Link>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/assets/sitash-logo-footer.png" 
                alt="Sitash" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming ideas into impact through innovative digital solutions and strategic consulting.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-bold text-gray-500 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" data-testid="footer-link-about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" data-testid="footer-link-services" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" data-testid="footer-link-projects" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" data-testid="footer-link-contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-bold text-gray-500 mb-6">
              Get In Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-300 text-sm">
                <Mail size={16} className="text-[#2563EB]" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300 text-sm">
                <Phone size={16} className="text-[#2563EB]" />
                <a href={`tel:${CONTACT_PHONE}`} className="hover:text-white transition-colors">
                  {CONTACT_PHONE}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-bold text-gray-500 mb-6">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {Object.entries(SOCIAL_LINKS).map(([platform, url]) => {
                const Icon = socialIcons[platform];
                return (
                  <a
                    key={platform}
                    href={url}
                    data-testid={`social-link-${platform}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-[#2563EB] flex items-center justify-center transition-colors"
                    aria-label={platform}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Sitash. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};