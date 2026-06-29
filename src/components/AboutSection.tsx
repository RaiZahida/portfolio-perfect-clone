import { motion } from "framer-motion";
import { GraduationCap, Award, Heart, Briefcase } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-center"
        >
          About Me
        </motion.h2>

        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card/50 border border-border/30 rounded-2xl p-6 md:p-8 lg:p-10 mb-12 backdrop-blur-sm"
          >
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 text-muted-foreground text-base lg:text-lg leading-relaxed">
              <div className="space-y-4">
                <p className="first-letter:text-3xl first-letter:font-bold first-letter:text-primary first-letter:mr-1 first-letter:float-left">
                  I'm a Software Engineering student currently working as a DevOps Intern at LEAPS Dev, where I've gained hands-on experience building and maintaining CI/CD pipelines, containerizing applications with Docker, and orchestrating infrastructure on AWS.
                </p>
                <p>
                  My journey started in web development at Saylani, but I discovered my true passion lies in DevOps and infrastructure automation. I've successfully migrated production AI services to Kubernetes, reducing deployment time significantly and architecting scalable cloud solutions.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  I'm proficient with Kubernetes (K8s), AWS EKS, GitHub Actions, and have implemented HPA for intelligent auto-scaling. Beyond DevOps, I maintain full-stack development skills with MERN stack, allowing me to understand both development and infrastructure perspectives.
                </p>
                <p className="text-primary font-medium border-l-2 border-primary pl-4 italic">
                  "Building reliable infrastructure today, so developers can focus on innovation tomorrow."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Current Role */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-gradient-to-br from-primary/10 to-emerald-500/10 border border-primary/30 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-primary to-emerald-600 rounded-lg">
                <Briefcase className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground">Current Role</h3>
            </div>
            <div className="space-y-2">
              <p className="text-foreground font-medium">DevOps Intern • LEAPS Dev</p>
              <p className="text-muted-foreground">2026 (3 Months)</p>
              <ul className="text-muted-foreground text-sm space-y-2 mt-3">
                <li>• Building and maintaining CI/CD pipelines using GitHub Actions and GitLab CI</li>
                <li>• Containerizing applications with Docker for environment consistency</li>
                <li>• Managing AWS infrastructure (EC2, S3, IAM) and VPC networking</li>
                <li>• Troubleshooting pipeline failures and improving deployment velocity</li>
              </ul>
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Education Card */}
            <motion.div 
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-primary to-emerald-600 rounded-lg">
                  <GraduationCap className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground">Education</h3>
              </div>
              <div className="space-y-2">
                <p className="text-foreground font-medium">BS Software Engineering</p>
                <p className="text-muted-foreground">Government College University, Faisalabad</p>
                <p className="text-primary font-semibold">CGPA: 3.86 / 4.00</p>
                <p className="text-muted-foreground text-sm">2023 - 2027 (Expected)</p>
              </div>
            </motion.div>

            {/* AWS Certification Card */}
            <motion.div 
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground">AWS Certification</h3>
              </div>
              <div className="space-y-2">
                <p className="text-foreground font-medium">AWS Cloud Practitioner</p>
                <p className="text-muted-foreground">AWS Skill Builder • 2026</p>
                <p className="text-muted-foreground text-sm">
                  Certified in EC2, Lambda, S3, VPC, and IAM - deploying and managing cloud applications securely
                </p>
              </div>
            </motion.div>
          </div>

          {/* Training & Experience */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground">Training & Experience</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6 text-muted-foreground text-sm">
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-foreground">Web & Mobile App Developer</p>
                  <p className="text-xs">Saylani Mass IT Training • 2025-2026</p>
                  <p className="text-xs mt-1">MERN Stack & React Native with Expo</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">JavaScript Mentor</p>
                  <p className="text-xs">"Let's Learn JavaScript Together" Workshop</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-foreground">Freelance Developer & Infrastructure Engineer</p>
                  <p className="text-xs">Upwork • 2026 - Present</p>
                  <p className="text-xs mt-1">End-to-end deployment on AWS EC2 & DigitalOcean</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Activities & Volunteer */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg">
                <Heart className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground">Activities & Involvement</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-2"
              >
                <span className="text-primary">•</span>
                <span>Member, Tech Tribe — University technology community, GCUF (2023 - Present)</span>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-2"
              >
                <span className="text-primary">•</span>
                <span>Volunteer, Alkhidmat Foundation — Child welfare programs (2024)</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
