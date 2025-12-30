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
    title: "Lambda Image Resizing Service",
    description:
      "AWS Lambda function integrated with S3 for automatic image resizing. Serverless architecture for scalable image processing.",
    tags: ["AWS Lambda", "S3", "Node.js", "Serverless"],
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
    title: "Doctor Appointment App",
    description:
      "Cross-platform mobile application built using Expo and Appwrite for booking doctor appointments with authentication and scheduling features.",
    tags: ["React Native", "Expo", "Appwrite", "Mobile"],
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

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-center">
          My Projects
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A collection of my work, from full-stack applications to cloud-native solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="p-6">
                {project.featured && (
                  <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-3">
                    Featured
                  </span>
                )}
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    <Github size={16} />
                    GitHub
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ExternalLink size={16} />
                    Live
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
