import { motion } from "framer-motion";

const projects = [
  {
    title: "Mini Web Projects",
    subtitle: "Weather App • Movie Search • Quiz Website",
    description:
      "Interactive web apps showcasing core frontend skills — fetching live weather data, searching movies via API, and testing knowledge with quizzes.",
    tags: ["HTML", "CSS", "JavaScript", "API Integration"],
    highlight: "Built to master fundamentals with real-world functionality",
    icon: "🌐",
  },
  {
    title: "Event Management Platform",
    subtitle: "Full-Stack Web Application",
    description:
      "Complete event management system with user registration, event creation, and seamless booking — powered by a robust PHP & MySQL backend.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    highlight: "End-to-end solution handling complex database operations",
    icon: "📅",
  },
  {
    title: "University Info Desk",
    subtitle: "AI-Powered Assistant",
    description:
      "Intelligent information assistant that answers university-related queries using RAG architecture and Hugging Face models for smart responses.",
    tags: ["React", "Supabase", "Hugging Face API", "RAG", "AI"],
    highlight: "Combines AI with modern web tech for smart assistance",
    icon: "🎓",
  },
  {
    title: "Live Chat Room",
    subtitle: "Mini WhatsApp Clone",
    description:
      "Real-time messaging app with emoji support, file sharing, and image uploads — built with WebSocket technology for instant communication.",
    tags: ["Node.js", "Socket.io", "JavaScript", "Real-time"],
    highlight: "Mastered real-time communication and WebSocket protocols",
    icon: "💬",
  },
  {
    title: "Mobile Applications",
    subtitle: "Doctor Appointment App • Ride Booking App",
    description:
      "Cross-platform mobile apps featuring authentication, real-time updates, booking systems, and smooth user experience.",
    tags: ["React Native", "Expo", "Appwrite", "Mobile"],
    highlight: "Expanding into mobile development with production-ready apps",
    icon: "📱",
  },
  {
    title: "Cloud & DevOps Projects",
    subtitle: "AWS EC2 • Lambda • Firebase Apps",
    description:
      "Enterprise-grade deployments: MERN stack on AWS EC2 with CI/CD pipelines, Docker containers, Lambda image resizing, and Firebase-powered Event & News websites.",
    tags: ["AWS", "Docker", "CI/CD", "Firebase", "Lambda", "React"],
    highlight: "Full cloud infrastructure with automated deployments",
    icon: "☁️",
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
            A collection of my work, from full-stack applications to cloud-native solutions.
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
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * tagIndex }}
                      className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded hover:bg-primary/20 hover:text-primary transition-colors"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;