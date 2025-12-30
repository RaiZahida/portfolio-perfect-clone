const skills = {
  frontend: [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "React Native", icon: "📱" },
    { name: "Expo", icon: "📲" },
    { name: "Responsive UI", icon: "💻" },
  ],
  backend: [
    { name: "Node.js", icon: "🟢" },
    { name: "Express", icon: "🚂" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Firebase", icon: "🔥" },
    { name: "Appwrite", icon: "📝" },
  ],
  devops: [
    { name: "Docker", icon: "🐳" },
    { name: "GitHub Actions", icon: "🔄" },
    { name: "AWS EC2", icon: "☁️" },
    { name: "AWS Lambda", icon: "λ" },
    { name: "AWS S3", icon: "🗄️" },
    { name: "VPC", icon: "🔒" },
    { name: "IAM", icon: "🔑" },
  ],
  tools: [
    { name: "Git", icon: "📚" },
    { name: "GitHub", icon: "🐙" },
  ],
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-center">
          My Toolkit
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          The technologies I use to build modern web and mobile applications.
        </p>

        <div className="max-w-5xl mx-auto space-y-10">
          {/* Frontend */}
          <div>
            <h3 className="text-xl font-display font-semibold text-primary mb-4">
              Frontend & Mobile
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {skills.frontend.map((skill) => (
                <div key={skill.name} className="skill-card text-center">
                  <span className="text-2xl mb-2 block">{skill.icon}</span>
                  <span className="text-sm text-foreground font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-xl font-display font-semibold text-primary mb-4">
              Full-Stack & Backend
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {skills.backend.map((skill) => (
                <div key={skill.name} className="skill-card text-center">
                  <span className="text-2xl mb-2 block">{skill.icon}</span>
                  <span className="text-sm text-foreground font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* DevOps & Cloud */}
          <div>
            <h3 className="text-xl font-display font-semibold text-primary mb-4">
              DevOps & Cloud (AWS)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {skills.devops.map((skill) => (
                <div key={skill.name} className="skill-card text-center">
                  <span className="text-2xl mb-2 block">{skill.icon}</span>
                  <span className="text-sm text-foreground font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xl font-display font-semibold text-primary mb-4">
              Tools
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-xs">
              {skills.tools.map((skill) => (
                <div key={skill.name} className="skill-card text-center">
                  <span className="text-2xl mb-2 block">{skill.icon}</span>
                  <span className="text-sm text-foreground font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
