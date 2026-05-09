# Multi-Page Business Website

## Overview
A modern, responsive multi-page business website built with ReactJS, featuring bold vibrant design, mobile-first approach, and email integration.

## Pages
- **Home** - Hero, stats, services preview, featured projects, testimonials, CTA
- **About** - Company story, values, leadership team
- **Services** - All services with detailed descriptions and process workflow
- **Projects** - Portfolio grid with category filters
- **Project Detail** - Individual project case studies with results
- **Contact** - Contact form with email submission and company info
- **404** - Not Found page

## Design Features
- **Bold Modern Vibrant Design** - High contrast Swiss-inspired aesthetic
- **Typography** - Outfit for headings, Plus Jakarta Sans for body text
- **Colors** - Vibrant blue (#2563EB), acid yellow (#FACC15), bold accents
- **Animations** - Framer Motion scroll reveals and transitions
- **Mobile-First** - Fully responsive across all devices
- **Glassmorphism Header** - Fixed navigation with backdrop blur
- **Dark Footer** - Massive typography with strong visual impact

## Tech Stack
- **Frontend**: ReactJS 19, React Router 7, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Notifications**: Sonner (toast notifications)
- **Backend**: FastAPI with Gmail SMTP integration
- **Database**: MongoDB (stores contact form submissions)

## Email Integration Setup
The contact form uses Gmail SMTP to send emails. To enable:

1. Go to https://myaccount.google.com/apppasswords
2. Sign in and create an App Password for "Mail"
3. Update `/app/backend/.env` with:
   ```
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-16-char-app-password
   SMTP_FROM_EMAIL=your-email@gmail.com
   ```
4. Restart backend: `sudo supervisorctl restart backend`

## Project Structure
```
src/
├── components/
│   ├── common/          # Header, Footer, SectionTitle
│   └── sections/        # Hero, ServicesPreview, CTA, Testimonials, ProjectCard
├── pages/               # Home, About, Services, Projects, ProjectDetail, Contact, NotFound
├── data/                # servicesData, projectsData, testimonialsData
├── helpers/             # constants, seo
└── App.js              # Main routing
```

## SEO Features
- Unique title and meta description per page
- Semantic HTML structure
- Proper heading hierarchy (H1-H6)
- Descriptive alt text for images
- Clean URL structure
- Internal linking

## Key Features
✅ Fully responsive mobile-first design
✅ SEO-optimized page structure
✅ Contact form with email delivery
✅ Smooth animations and transitions
✅ Project portfolio with detail pages
✅ Category filtering on projects
✅ Reusable component architecture
✅ Clean, maintainable code structure
✅ Professional demo content
✅ Fast loading performance

## Running the Application
The app is already running at:
- Frontend: https://business-frontend.preview.emergentagent.com
- Backend API: https://business-frontend.preview.emergentagent.com/api

## Customization
To customize the website:

1. **Branding**: Edit `/app/frontend/src/helpers/constants.js`
2. **Services**: Modify `/app/frontend/src/data/servicesData.js`
3. **Projects**: Update `/app/frontend/src/data/projectsData.js`
4. **Colors**: Adjust Tailwind classes or design guidelines
5. **Content**: Replace demo text in page components

## Notes
- All data is currently placeholder/demo content
- Email functionality requires valid Gmail SMTP credentials
- Contact submissions are stored in MongoDB
- Design follows bold modern vibrant aesthetic
- Mobile menu works perfectly on small screens
