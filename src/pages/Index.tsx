import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Portfolio. Built with ❤️ using React, Three.js & Framer Motion
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
