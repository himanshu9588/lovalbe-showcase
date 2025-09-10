import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Scene3D } from '@/components/3d/Scene3D';
import { FloatingGeometry } from '@/components/3d/FloatingGeometry';
import { Float } from '@react-three/drei';
import portfolioConfig from '@/data/portfolio-config.json';

export const AboutSection = () => {
  const { about } = portfolioConfig;

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <Scene3D cameraPosition={[0, 0, 8]}>
          <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <FloatingGeometry 
              position={[-4, 0, 0]} 
              geometry="box" 
              color="#8B5CF6" 
              scale={0.8}
            />
          </Float>
          <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
            <FloatingGeometry 
              position={[4, 2, -1]} 
              geometry="octahedron" 
              color="#00D4FF" 
              scale={0.6}
            />
          </Float>
        </Scene3D>
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {about.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-primary">Technical Skills</h3>
            <div className="space-y-6">
              {about.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="bg-gradient-primary h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-primary">Experience</h3>
            <div className="space-y-6">
              {about.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass glass-hover p-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                      <h4 className="font-bold text-lg text-primary">{exp.position}</h4>
                      <span className="text-sm text-neon font-medium">{exp.duration}</span>
                    </div>
                    <p className="font-medium text-muted-foreground mb-2">{exp.company}</p>
                    <p className="text-sm text-muted-foreground/80">{exp.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};