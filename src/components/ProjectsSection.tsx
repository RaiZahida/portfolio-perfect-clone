import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "MERN Stack Web App",
    description:
      "Full-stack application deployed on AWS EC2, containerized with Docker, with CI/CD pipeline using GitHub Actions for automated deployments.",
    tags: ["React", "Node.js", "MongoDB", "Docker", "AWS EC2", "GitHub Actions"],
    featured: true,
  },
  {
    title: "University Info Desk",
    description:
      "AI-powered information desk using React frontend with Supabase as RAG backend and Hugging Face API for intelligent query responses.",
    tags: ["React", "Supabase", "Hugging Face API", "RAG", "AI"],
    featured: true,
  },
  {
    title: "Ride Booking App",
    description:
      "Cross-platform mobile ride booking application built with Expo and Appwrite for real-time booking, authentication, and ride tracking.",
    tags: ["React Native (Expo)", "Appwrite", "Mobile", "Real-time"],
    featured: false,
  },
  {
    title: "Event Management Website",
    description:
      "Full-stack event management platform with user registration, event creation, and booking system using PHP and MySQL backend.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    featured: false,
  },
  {
    title: "Lambda Image Resizing Service",
    description:
      "AWS Lambda function integrated with S3 for automatic image resizing. Serverless architecture for scalable image processing.",
    tags: ["AWS Lambda", "S3", "Node.js", "Serverless"],
    featured: false,
  },
  {
    title: "Doctor Appointment App",
    description:
      "Cross-platform mobile application built using Expo and Appwrite for booking doctor appointments with authentication and scheduling features.",
    tags: ["React Native (Expo)", "Appwrite", "Mobile"],
    featured: false,
  },
  {
    title: "Event & News Apps",
    description:
      "Built Event Registration and News Article websites using React & Firebase, with live hosting and real-time data updates.",
    tags: ["React", "Firebase", "Responsive UI"],
    featured: false,
  },
  {
    title: "Portfolio Websites",
    description:
      "Movie browser and Weather forecast apps built with HTML, CSS, and JavaScript. Fully responsive and interactive user interfaces.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    featured: false,
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
              className={`project-card group ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="p-6 h-full flex flex-col">
                {project.featured && (
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-3 w-fit"
                  >
                    Featured
                  </motion.span>
                )}
                <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
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
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="group/btn">
                    <Github size={16} className="group-hover/btn:scale-110 transition-transform" />
                    GitHub
                  </Button>
                  <Button variant="ghost" size="sm" className="group/btn">
                    <ExternalLink size={16} className="group-hover/btn:scale-110 transition-transform" />
                    Live
                  </Button>
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