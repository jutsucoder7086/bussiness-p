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
    description: 'Transform education with premium interactive flat panels and cameras. Sitash offers cutting-edge technology solutions for modern classrooms.',
    keywords: 'interactive flat panel, education camera, smart classroom, digital education, teaching technology'
  },
  about: {
    title: 'About Us',
    description: 'Learn about Sitash - your trusted partner for education technology solutions, interactive displays, and classroom innovation.',
    keywords: 'about sitash, education technology company, interactive panel supplier'
  },
  services: {
    title: 'Our Solutions',
    description: 'Complete education technology solutions including interactive panels, cameras, smart classroom setup, and collaboration tools.',
    keywords: 'education solutions, interactive panels, classroom cameras, smart classroom, collaboration software'
  },
  projects: {
    title: 'Our Products',
    description: 'Explore our range of interactive flat panels (65\" to 110\"), education cameras, and complete smart classroom packages.',
    keywords: 'interactive panel, education camera, smart classroom, Google EDLA, 4K UHD display'
  },
  contact: {
    title: 'Contact Us',
    description: 'Get in touch with Sitash for a free demo of our interactive panels and education cameras. Transform your classroom today.',
    keywords: 'contact sitash, schedule demo, education technology, interactive panel inquiry'
  }
};