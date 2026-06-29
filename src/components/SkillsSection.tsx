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
  GitBranch,
  FileCode,
  Layers,
  Ship,
  Gauge,
  Lock,
  Cpu
} from "lucide-react";

const skills = [
  // Frontend & Web
  { name: "HTML", icon: Globe, color: "#E34F26" },
  { name: "CSS", icon: Palette, color: "#1572B6" },
  { name: "JavaScript", icon: Zap, color: "#F7DF1E" },
  { name: "React", icon: Atom, color: "#61DAFB" },
  { name: "React Native", icon: Smartphone, color: "#61DAFB" },
  
  // Backend & Databases
  { name: "Node.js", icon: Server, color: "#339933" },
  { name: "Express", icon: Train, color: "#ffffff" },
  { name: "MongoDB", icon: Leaf, color: "#47A248" },
  { name: "MySQL", icon: Database, color: "#4479A1" },
  { name: "Firebase", icon: Flame, color: "#FFCA28" },
  
  // DevOps & Cloud - CONTAINER & ORCHESTRATION
  { name: "Docker", icon: Container, color: "#2496ED" },
  { name: "Kubernetes (K8s)", icon: Cpu, color: "#326CE5" },
  { name: "AWS EKS", icon: Cloud, color: "#FF9900" },
  { name: "HPA", icon: Gauge, color: "#326CE5" },
  { name: "Metrics Server", icon: Gauge, color: "#326CE5" },
  
  // Cloud Services - AWS
  { name: "AWS EC2", icon: Server, color: "#FF9900" },
  { name: "AWS S3", icon: Database, color: "#FF9900" },
  { name: "AWS Lambda", icon: Flame, color: "#FF9900" },
  { name: "AWS ECR", icon: Container, color: "#FF9900" },
  { name: "AWS VPC", icon: Lock, color: "#FF9900" },
  { name: "AWS IAM", icon: Lock, color: "#FF9900" },
  { name: "AWS CodeBuild", icon: Ship, color: "#FF9900" },
  
  // CI/CD & Deployment
  { name: "GitHub Actions", icon: Github, color: "#ffffff" },
  { name: "GitLab CI", icon: GitBranch, color: "#FC6D26" },
  { name: "AWS LoadBalancer", icon: Cloud, color: "#FF9900" },
  
  // Infrastructure & Linux
  { name: "Nginx", icon: Gauge, color: "#009639" },
  { name: "PM2", icon: Terminal, color: "#2B037A" },
  { name: "Linux", icon: Terminal, color: "#FCC624" },
  { name: "Bash", icon: Terminal, color: "#4EAA25" },
  { name: "Systemd", icon: Terminal, color: "#FCC624" },
  
  // Cloud Backends
  { name: "Supabase", icon: Layers, color: "#3ECF8E" },
  { name: "Appwrite", icon: FileCode, color: "#FD366E" },
  { name: "GitHub", icon: Github, color: "#ffffff" },
  { name: "GitLab", icon: GitBranch, color: "#FC6D26" },
  
  // Security & Networking
  { name: "Security Groups", icon: Lock, color: "#FF9900" },
  { name: "Linux Firewall", icon: Lock, color: "#FCC624" },
  { name: "Auto Scaling", icon: Gauge, color: "#FF9900" },
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
            DevOps engineer proficient in containerization, cloud infrastructure, CI/CD automation, 
            and full-stack development.
          </p>
        </motion.div>

        {/* DevOps Skills Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-12 bg-gradient-to-r from-primary/10 to-emerald-500/10 border border-primary/30 rounded-xl p-6 text-center"
        >
          <h3 className="text-lg font-semibold text-foreground mb-3">DevOps Core Expertise</h3>
          <p className="text-muted-foreground text-sm">
            <span className="font-semibold">Container & Orchestration:</span> Docker, Kubernetes (K8s), AWS EKS, HPA, Metrics Server, ECR | 
            <span className="font-semibold ml-2">CI/CD:</span> GitHub Actions, GitLab CI, AWS CodeBuild | 
            <span className="font-semibold ml-2">Cloud:</span> EC2, S3, Lambda, VPC, IAM, Auto Scaling, LoadBalancer | 
            <span className="font-semibold ml-2">Infrastructure:</span> Nginx, PM2, Systemd, Linux, Bash, Security Groups
          </p>
        </motion.div>

        <motion.div 
          className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group relative w-[calc(33.333%-8px)] sm:w-[calc(25%-12px)] md:w-[calc(20%-13px)]"
            >
              <div 
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                style={{ backgroundColor: skill.color }}
              />
              <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:border-primary/50 transition-all duration-300">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ 
                    backgroundColor: `${skill.color}20`,
                  }}
                >
                  <skill.icon size={22} style={{ color: skill.color }} />
                </div>
                <span className="text-xs font-medium text-foreground text-center leading-tight line-clamp-2">{skill.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
