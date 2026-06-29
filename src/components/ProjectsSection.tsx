import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI Voice Agent — EKS Migration & Auto-Scaling",
    subtitle: "Production Kubernetes Deployment",
    description:
      "Migrated production AI voice agent from EC2 Auto Scaling to AWS EKS, reducing pod spin-up time from 5–10 minutes to 15 seconds using Horizontal Pod Autoscaler (HPA). Dockerized the voice agent and built images via AWS CodeBuild, pushed to ECR. Installed Metrics Server for real-time CPU/memory data. Configured HPA with 15-second scale-up and 5-minute scale-down delay. Exposed service via AWS LoadBalancer for external traffic routing.",
    tags: ["AWS EKS", "Kubernetes", "HPA", "Docker", "ECR", "CodeBuild", "Metrics Server"],
    highlight: "95% reduction in pod spin-up time for incoming calls",
    icon: "☁️",
    github: "https://github.com/RaiZahida",
  },
  {
    title: "AWS Cost Optimization & LiveKit OSS Infrastructure",
    subtitle: "Real-time Communication Scaling",
    description:
      "Architected real-time communication infrastructure using LiveKit OSS supporting 2,000+ concurrent users via AWS auto-scaling and containerized services. Restructured cloud resource allocation and service architecture, reducing AWS infrastructure costs by ~80% while maintaining performance under peak load. Managed Redis, egress services, and Docker images with systemd for persistent service management.",
    tags: ["AWS", "Auto Scaling", "Docker", "Redis", "Systemd", "LiveKit", "Cost Optimization"],
    highlight: "80% reduction in AWS infrastructure costs",
    icon: "💰",
    github: "https://github.com/RaiZahida",
  },
  {
    title: "MERN App — Full Production Deployment Pipeline",
    subtitle: "Doctor Appointment System",
    description:
      "Deployed full-stack MERN doctor appointment system on AWS EC2 with Nginx reverse proxy, PM2 process management, and Linux firewall hardening. Implemented end-to-end GitHub Actions CI/CD pipeline automating build, test, and deployment stages with zero-downtime deployments.",
    tags: ["AWS EC2", "Docker", "Nginx", "PM2", "GitHub Actions", "CI/CD"],
    highlight: "Zero-downtime deployments with automated CI/CD",
    icon: "🚀",
    github: "https://github.com/RaiZahida",
  },
  {
    title: "AI Agent & Multi-Project CI/CD Pipelines",
    subtitle: "Next.js & Python Services Automation",
    description:
      "Deployed AI-based services on AWS using systemd for process orchestration, ensuring persistent uptime and automated recovery across server restarts. Designed and implemented separate CI/CD pipelines for Next.js and Python applications, enabling automated testing and deployment workflows across multiple services.",
    tags: ["GitHub Actions", "AWS", "Next.js", "Python", "Systemd", "CI/CD"],
    highlight: "Automated testing and deployment workflows across multiple services",
    icon: "⚙️",
    github: "https://github.com/RaiZahida",
  },
  {
    title: "Full-Stack MERN Applications",
    subtitle: "Doctor Appointment & Real-time Features",
    description:
      "Developed production-grade MERN applications including doctor appointment booking system with real-time updates. Integrated cloud backends with Firebase, Supabase, and Appwrite for scalable cloud solutions.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Firebase", "Supabase"],
    highlight: "Production-ready apps with real-time booking features",
    icon: "📱",
    github: "https://github.com/RaiZahida",
  },
  {
    title: "Cloud & DevOps Infrastructure",
    subtitle: "AWS Multi-Service Deployment",
    description:
      "Comprehensive AWS infrastructure management including EC2 provisioning, security hardening with VPC and Security Groups, IAM policy configuration, S3 bucket management, and Lambda serverless functions. Containerized applications using Docker with secure registry management via ECR.",
    tags: ["AWS", "Docker", "Lambda", "S3", "VPC", "IAM", "ECR"],
    highlight: "Enterprise-grade cloud infrastructure with security hardening",
    icon: "🏗️",
    github: "https://github.com/RaiZahida",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            My Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            DevOps infrastructure projects, cloud migrations, and full-stack applications showcasing 
            expertise in containerization, Kubernetes orchestration, CI/CD automation, and AWS cloud engineering.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="project-card group"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-3xl">{project.icon}</span>
                    <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm text-primary font-medium ml-12">
                    {project.subtitle}
                  </p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3 flex-1">
                  {project.description}
                </p>
                <p className="text-xs text-primary/80 italic mb-4 font-medium">
                  ✨ {project.highlight}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * tagIndex }}
                      className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded hover:bg-primary/20 hover:text-primary transition-colors"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto"
                >
                  <Button variant="outline" size="sm" className="group/btn w-full">
                    <Github size={16} className="group-hover/btn:scale-110 transition-transform" />
                    View on GitHub
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
