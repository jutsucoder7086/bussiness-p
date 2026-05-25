import { useState } from 'react';
import { Hero } from '../components/sections/Hero';
import { SectionTitle } from '../components/common/SectionTitle';
import { useSEO, SEO_DEFAULTS } from '../helpers/seo';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const Contact = () => {
  useSEO(SEO_DEFAULTS.contact.title, SEO_DEFAULTS.contact.description, SEO_DEFAULTS.contact.keywords);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${API}/contact`, formData);
      
      if (response.data.status === 'success') {
        toast.success(response.data.message);
        setFormData({ name: '', email: '', company: '', message: '' });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div data-testid="contact-page">
      {/* Hero Section */}
      <Hero 
        label="Get In Touch"
        title="Let's Start A Conversation"
        description="Have a project in mind? Want to learn more about our services? We'd love to hear from you."
        imageUrl="https://images.unsplash.com/photo-1776926092765-cd3b30c3b8f4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwzfHxhYnN0cmFjdCUyMHZpYnJhbnQlMjBnZW9tZXRyaWMlMjBncmFkaWVudHxlbnwwfHx8fDE3NzgzMjczNDh8MA&ixlib=rb-4.1.0&q=85"
      />

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle 
                label="Contact Info"
                title="Let's Connect"
                description="Reach out through any of these channels, and we'll get back to you within 24 hours."
              />
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#2563EB] flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 
                      className="text-xl font-bold text-[#0A0A0A] mb-2"
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      Email Us
                    </h3>
                    <a 
                      href="mailto:hello@sitash.com"
                      className="text-[#52525B] hover:text-[#2563EB] transition-colors"
                    >
                      hello@sitash.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#2563EB] flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 
                      className="text-xl font-bold text-[#0A0A0A] mb-2"
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      Call Us
                    </h3>
                    <a 
                      href="tel:+15551234567"
                      className="text-[#52525B] hover:text-[#2563EB] transition-colors"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#2563EB] flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 
                      className="text-xl font-bold text-[#0A0A0A] mb-2"
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      Visit Us
                    </h3>
                    <p className="text-[#52525B]">
                      123 Innovation Street<br />
                      Tech City, TC 12345
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-12 p-8 bg-[#F4F4F5]">
                <h3 
                  className="text-xl font-bold text-[#0A0A0A] mb-4"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  Office Hours
                </h3>
                <div className="space-y-2 text-[#52525B]">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white border border-black/10 p-8 lg:p-12">
                <h3 
                  className="text-3xl font-bold text-[#0A0A0A] mb-6"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  Send Us A Message
                </h3>
                
                <form onSubmit={handleSubmit} data-testid="contact-form" className="space-y-6">
                  <div>
                    <label 
                      htmlFor="name"
                      className="block text-sm font-bold text-[#0A0A0A] mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      data-testid="input-name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-black/10 focus:border-[#2563EB] focus:outline-none transition-colors text-[#0A0A0A]"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="email"
                      className="block text-sm font-bold text-[#0A0A0A] mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      data-testid="input-email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-black/10 focus:border-[#2563EB] focus:outline-none transition-colors text-[#0A0A0A]"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="company"
                      className="block text-sm font-bold text-[#0A0A0A] mb-2"
                    >
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      data-testid="input-company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-black/10 focus:border-[#2563EB] focus:outline-none transition-colors text-[#0A0A0A]"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="message"
                      className="block text-sm font-bold text-[#0A0A0A] mb-2"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      data-testid="input-message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-black/10 focus:border-[#2563EB] focus:outline-none transition-colors text-[#0A0A0A] resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    data-testid="submit-button"
                    disabled={isSubmitting}
                    className="w-full bg-[#0A0A0A] text-white hover:bg-[#2563EB] hover:-translate-y-1 transition-all duration-300 px-8 py-4 font-bold tracking-wide inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <Send size={20} />}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};