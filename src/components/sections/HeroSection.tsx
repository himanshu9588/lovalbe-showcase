import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Scene3D } from '@/components/3d/Scene3D';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import portfolioConfig from '@/data/portfolio-config.json';

export const HeroSection = () => {
  const { personal } = portfolioConfig;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 -z-10">
        <Scene3D cameraPosition={[0, 0, 6]} />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial -z-5" />
      
      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {personal.name}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {personal.title}
          </motion.p>
          
          <motion.p 
            className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {personal.tagline}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Button variant="hero" size="lg" className="min-w-[200px]">
              View My Work
            </Button>
            <Button variant="glass" size="lg" className="min-w-[200px]">
              Get In Touch
            </Button>
          </motion.div>
          
          <motion.div 
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <a 
              href={personal.social.github} 
              className="p-3 glass rounded-full hover:scale-110 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href={personal.social.linkedin} 
              className="p-3 glass rounded-full hover:scale-110 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href={`mailto:${personal.email}`} 
              className="p-3 glass rounded-full hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
      </motion.div>
    </section>
  );
};