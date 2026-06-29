import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "DevOps Engineer",
    company: "LEAPS Dev",
    duration: "2026 - Present",
    location: "Remote",
    type: "Full-time",
    description: [
      "Building and maintaining CI/CD pipelines using GitHub Actions and GitLab CI, reducing manual deployment effort",
      "Containerizing applications using Docker, ensuring environment parity between development and production",
      "Managing AWS infrastructure including EC2, S3, and IAM; configuring VPC networking and Security Groups",
      "Troubleshooting pipeline failures and improving team delivery velocity",
    ],
    highlights: ["CI/CD", "Docker", "AWS", "GitHub Actions", "GitLab CI"],
    icon: "🚀",
  },
  {
    title: "DevOps Intern",
    company: "LEAPS Dev",
    duration: "2026 (3 Months)",
    location: "Remote",
    type: "Internship",
    description: [
      "Built and maintained CI/CD pipelines using GitHub Actions and GitLab CI",
      "Containerized applications with Docker for environment consistency across development and production",
      "Managed AWS infrastructure including EC2, S3, and IAM with VPC networking configuration",
      "Supported deployment workflows and troubleshot pipeline failures",
    ],
    highlights: ["CI/CD", "Docker", "AWS", "Infrastructure"],
    icon: "⚙️",
  },
  {
    title: "Web & Mobile App Developer",
    company: "Saylani Mass IT Training (SMIT)",
    duration: "2025 - 2026 (1 Year)",
    location: "On-site",
    type: "Full-time",
    description: [
      "Deployed web applications with production-grade server setup using Nginx as reverse proxy and PM2 for Node.js process management",
      "Gained practical experience integrating cloud-hosted backends (Firebase, Supabase, Appwrite) into full-stack applications",
      "Served as JavaScript mentor in the 'Let's Learn JavaScript Together' online workshop, guiding beginner developers",
      "Developed MERN stack and React Native applications with real-time features",
    ],
    highlights: ["MERN Stack", "React Native", "Nginx", "PM2", "Firebase"],
    icon: "💻",
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
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-card/30 relative overflow-hidden">
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
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey from web development to DevOps engineering, with hands-on experience 
            across full-stack development and infrastructure automation.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ x: 8 }}
              className="relative mb-8 last:mb-0"
            >
              {/* Timeline dot and line */}
              <div className="absolute left-0 top-0 w-12 h-full flex flex-col items-center">
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center text-xl">
                    {experience.icon}
                  </div>
                </div>
                {index !== experiences.length - 1 && (
                  <div className="w-1 h-24 bg-gradient-to-b from-primary/50 to-transparent mt-2" />
                )}
              </div>

              {/* Card content */}
              <div className="ml-24 bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                        {experience.title}
                      </h3>
                      <p className="text-primary font-medium">{experience.company}</p>
                    </div>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full whitespace-nowrap ml-4">
                      {experience.type}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-3">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-primary" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-primary" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-4">
                  {experience.description.map((point, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-2 text-muted-foreground text-sm"
                    >
                      <span className="text-primary mt-1">▸</span>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2">
                  {experience.highlights.map((skill, idx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full hover:bg-primary/20 hover:text-primary transition-colors"
                    >
                      {skill}
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

export default ExperienceSection;
