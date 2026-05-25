import { useEffect } from 'react';

export const useSEO = (title, description, keywords) => {
  useEffect(() => {
    document.title = title ? `${title} | Sitash` : 'Sitash | Transforming Ideas Into Impact';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || 'Sitash delivers cutting-edge digital solutions, strategic consulting, and transformative brand experiences.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description || 'Sitash delivers cutting-edge digital solutions, strategic consulting, and transformative brand experiences.';
      document.head.appendChild(meta);
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (keywords) {
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = keywords;
        document.head.appendChild(meta);
      }
    }
  }, [title, description, keywords]);
};

export const generatePageTitle = (pageName) => {
  return `${pageName} | Sitash`;
};

export const SEO_DEFAULTS = {
  home: {
    title: 'Home',
    description: 'Transform your business with cutting-edge digital solutions, strategic consulting, and award-winning design.',
    keywords: 'digital solutions, business consulting, web development, brand design'
  },
  about: {
    title: 'About Us',
    description: 'Learn about our mission, values, and the team behind Innovate Solutions. We are passionate about driving innovation.',
    keywords: 'about us, company profile, team, mission, values'
  },
  services: {
    title: 'Our Services',
    description: 'Explore our comprehensive range of services including strategy, development, design, analytics, and marketing.',
    keywords: 'services, consulting, development, design, analytics, marketing'
  },
  projects: {
    title: 'Our Projects',
    description: 'Discover our portfolio of successful projects across industries. See how we deliver measurable results.',
    keywords: 'portfolio, projects, case studies, work, results'
  },
  contact: {
    title: 'Contact Us',
    description: 'Get in touch with our team to discuss your project. Let\'s build something amazing together.',
    keywords: 'contact, get in touch, reach out, inquiry'
  }
};