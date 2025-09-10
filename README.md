# 3D Portfolio Website

A stunning, interactive portfolio website featuring 3D animations, immersive transitions, and fully editable content.

## 🚀 Features

- **3D Animations**: Interactive 3D elements powered by React Three Fiber
- **Immersive Design**: Glass morphism effects with vibrant gradients
- **Fully Editable**: Easy content management through JSON configuration
- **Responsive**: Beautiful design across all devices
- **Modern Stack**: React, TypeScript, Three.js, Framer Motion, Tailwind CSS

## 🎨 Design System

The portfolio uses a carefully crafted design system with:
- **Dark Theme**: Professional dark interface with neon accents
- **3D Elements**: Floating geometric shapes and interactive components
- **Gradients**: Purple to blue primary gradients with cyan neon accents
- **Glass Effects**: Subtle transparency and backdrop blur
- **Smooth Animations**: Framer Motion powered transitions

## ✏️ Editing Your Portfolio

All content is easily editable through the configuration file:

### Personal Information
Edit `src/data/portfolio-config.json` to update:
- Name, title, and tagline
- Contact information and social links
- Location and professional details

### About Section
Customize:
- Personal description
- Technical skills with proficiency levels
- Work experience and timeline

### Projects
Add/edit projects with:
- Project titles and descriptions
- Technology stacks
- Live demo and GitHub links
- Featured project status

### Services
Update the services you offer:
- Service titles and descriptions
- Custom icons and styling

## 🛠️ Quick Edits

1. **Personal Info**: Update the `personal` section in `portfolio-config.json`
2. **Skills**: Modify the `skills` array with your technologies
3. **Projects**: Add new projects to the `projects` array
4. **Experience**: Update your work history in the `experience` section

## 🎯 3D Customization

The 3D elements can be customized in:
- `src/components/3d/FloatingGeometry.tsx` - Geometric shapes
- `src/components/3d/Scene3D.tsx` - 3D scene configuration
- Individual section components for specific 3D effects

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Edit `src/data/portfolio-config.json` with your information
4. Run development server: `npm run dev`
5. Build for production: `npm run build`

## 📱 Sections

- **Hero**: Animated introduction with 3D background
- **About**: Skills, experience, and personal information
- **Projects**: Featured work with interactive cards
- **Contact**: Contact form with social links

## 🎨 Color Scheme

- **Primary**: Purple gradient (#8B5CF6 to lighter variant)
- **Neon**: Cyan accent (#00D4FF)
- **Background**: Dark theme with subtle gradients
- **Glass**: Semi-transparent elements with blur effects

## 📦 Technologies

- React 18
- TypeScript
- Three.js & React Three Fiber
- Framer Motion
- Tailwind CSS
- Vite
- Shadcn/ui Components

---

Built with ❤️ using modern web technologies and creative design principles.