import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: "/icons/html.svg", color: "#E34F26" },
  { name: "CSS", icon: "/icons/css.svg", color: "#1572B6" },
  { name: "JavaScript", icon: "/icons/javascript.svg", color: "#F7DF1E" },
  { name: "React", icon: "/icons/react.svg", color: "#61DAFB" },
  { name: "React Native", icon: "/icons/react.svg", color: "#61DAFB" },
  { name: "Node.js", icon: "/icons/nodejs.svg", color: "#339933" },
  { name: "Express", icon: "/icons/express.svg", color: "#ffffff" },
  { name: "MongoDB", icon: "/icons/mongodb.svg", color: "#47A248" },
  { name: "Firebase", icon: "/icons/firebase.svg", color: "#FFCA28" },
  { name: "Docker", icon: "/icons/docker.svg", color: "#2496ED" },
  { name: "AWS", icon: "/icons/aws.svg", color: "#FF9900" },
  { name: "GitHub", icon: "/icons/github.svg", color: "#ffffff" },
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

const SkillCard = ({ name, color }: { name: string; color: string }) => (
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
    <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:border-primary/50 transition-all duration-300 min-h-[120px]">
      <div 
        className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl font-bold transition-transform duration-300 group-hover:scale-110"
        style={{ 
          backgroundColor: `${color}20`,
          color: color 
        }}
      >
        {name.charAt(0)}
      </div>
      <span className="text-sm font-medium text-foreground text-center">{name}</span>
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
          className="max-w-5xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((skill) => (
            <SkillCard 
              key={skill.name} 
              name={skill.name} 
              color={skill.color}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;