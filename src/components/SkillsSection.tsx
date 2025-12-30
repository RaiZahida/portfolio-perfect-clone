import { motion } from "framer-motion";
import { Code, Smartphone, Cloud, Wrench } from "lucide-react";

const skills = {
  webDev: [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express", icon: "🚂" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Firebase", icon: "🔥" },
    { name: "Responsive UI", icon: "💻" },
  ],
  appDev: [
    { name: "React Native", icon: "📱" },
    { name: "Expo", icon: "📲" },
    { name: "Appwrite", icon: "📝" },
    { name: "Cross-Platform", icon: "🔄" },
  ],
  devops: [
    { name: "Docker", icon: "🐳" },
    { name: "GitHub Actions", icon: "⚙️" },
    { name: "AWS EC2", icon: "☁️" },
    { name: "AWS Lambda", icon: "λ" },
    { name: "AWS S3", icon: "🗄️" },
    { name: "VPC", icon: "🔒" },
    { name: "IAM", icon: "🔑" },
    { name: "CI/CD", icon: "🔄" },
  ],
  tools: [
    { name: "Git", icon: "📚" },
    { name: "GitHub", icon: "🐙" },
    { name: "VS Code", icon: "💻" },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

const SkillCategory = ({ 
  title, 
  icon: Icon, 
  skills, 
  color,
  delay = 0 
}: { 
  title: string; 
  icon: React.ElementType; 
  skills: { name: string; icon: string }[];
  color: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-500"
  >
    <div className="flex items-center gap-3 mb-6">
      <div className={`p-3 rounded-xl ${color}`}>
        <Icon className="text-primary-foreground" size={24} />
      </div>
      <h3 className="text-xl font-display font-semibold text-foreground">{title}</h3>
    </div>
    <motion.div 
      className="grid grid-cols-3 sm:grid-cols-3 gap-3"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {skills.map((skill) => (
        <motion.div 
          key={skill.name} 
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -3 }}
          className="skill-card text-center group cursor-pointer"
        >
          <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
          <span className="text-xs text-foreground font-medium">{skill.name}</span>
        </motion.div>
      ))}
    </motion.div>
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

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <SkillCategory 
            title="Web Development" 
            icon={Code} 
            skills={skills.webDev}
            color="bg-gradient-to-br from-primary to-emerald-600"
            delay={0}
          />
          
          <SkillCategory 
            title="App Development" 
            icon={Smartphone} 
            skills={skills.appDev}
            color="bg-gradient-to-br from-blue-500 to-cyan-500"
            delay={0.1}
          />
          
          <SkillCategory 
            title="DevOps & Cloud (AWS)" 
            icon={Cloud} 
            skills={skills.devops}
            color="bg-gradient-to-br from-orange-500 to-amber-500"
            delay={0.2}
          />
          
          <SkillCategory 
            title="Development Tools" 
            icon={Wrench} 
            skills={skills.tools}
            color="bg-gradient-to-br from-purple-500 to-pink-500"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;