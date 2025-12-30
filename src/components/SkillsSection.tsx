import { motion } from "framer-motion";
import { 
  Globe, 
  Palette, 
  Zap, 
  Atom, 
  Smartphone,
  Server, 
  Train,
  Leaf,
  Flame,
  Container,
  Cloud,
  Github,
  Database,
  Terminal,
  GitBranch
} from "lucide-react";

const skills = [
  { name: "HTML", icon: Globe, color: "#E34F26" },
  { name: "CSS", icon: Palette, color: "#1572B6" },
  { name: "JavaScript", icon: Zap, color: "#F7DF1E" },
  { name: "React", icon: Atom, color: "#61DAFB" },
  { name: "React Native (Expo)", icon: Smartphone, color: "#61DAFB" },
  { name: "Node.js", icon: Server, color: "#339933" },
  { name: "Express", icon: Train, color: "#ffffff" },
  { name: "MongoDB", icon: Leaf, color: "#47A248" },
  { name: "MySQL", icon: Database, color: "#4479A1" },
  { name: "Firebase", icon: Flame, color: "#FFCA28" },
  { name: "Docker", icon: Container, color: "#2496ED" },
  { name: "AWS", icon: Cloud, color: "#FF9900" },
  { name: "GitHub", icon: Github, color: "#ffffff" },
  { name: "GitLab", icon: GitBranch, color: "#FC6D26" },
  { name: "Linux", icon: Terminal, color: "#FCC624" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.5,
    },
  },
};

const SkillCard = ({ name, Icon, color }: { name: string; Icon: React.ElementType; color: string }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ 
      y: -8, 
      scale: 1.05,
      transition: { duration: 0.2 }
    }}
    className="group relative"
  >
    <div 
      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
      style={{ backgroundColor: color }}
    />
    <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 md:p-6 flex flex-col items-center justify-center gap-3 hover:border-primary/50 transition-all duration-300 min-h-[100px] md:min-h-[120px]">
      <div 
        className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{ 
          backgroundColor: `${color}20`,
        }}
      >
        <Icon size={24} style={{ color }} className="md:w-7 md:h-7" />
      </div>
      <span className="text-xs md:text-sm font-medium text-foreground text-center leading-tight">{name}</span>
    </div>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            My Toolkit
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The technologies I use to build modern web and mobile applications.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-5xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((skill) => (
            <SkillCard 
              key={skill.name} 
              name={skill.name} 
              Icon={skill.icon}
              color={skill.color}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;