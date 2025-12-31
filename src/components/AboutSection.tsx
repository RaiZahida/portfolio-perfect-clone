import { motion } from "framer-motion";
import { GraduationCap, Award, Heart } from "lucide-react";

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

        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground text-lg leading-relaxed mb-12 space-y-4"
          >
            <p>
              I began my academic journey as a medical student during my FSC, but I was always curious about how software is evolving and shaping the world. That curiosity slowly turned into direction, and fate led me to software engineering at GCUF.
            </p>
            <p>
              I started with web development at Saylani, but I soon realized I wanted to explore paths that were less familiar. While many around me focused only on standard web projects, I chose to broaden my toolkit to stand out.
            </p>
            <p>
              Along with building web applications, I added AWS, Docker, CI/CD, and Expo, diving into cloud, automation, and mobile app development. I enjoy exploring new ideas, learning by doing, and understanding systems beyond the surface.
            </p>
            <p className="text-primary font-medium">
              I'm still learning — but I'm intentional about the direction I'm heading.
            </p>
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
                <p className="text-muted-foreground text-sm">5th Semester • 2023-2027</p>
              </div>
            </motion.div>

            {/* Training Card */}
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
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground">Training</h3>
              </div>
              <div className="space-y-2">
                <p className="text-foreground font-medium">Web and Mobile Development</p>
                <p className="text-muted-foreground">Saylani Mass IT Training (S.M.I.T)</p>
                <p className="text-muted-foreground text-sm">MERN Stack & React Native with Expo</p>
                <p className="text-muted-foreground text-sm">Jan 2024 - Dec 2025</p>
              </div>
            </motion.div>
          </div>

          {/* AWS Certification */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground">AWS Certification</h3>
            </div>
            <div className="space-y-2">
              <p className="text-foreground font-medium">AWS Cloud Practitioner</p>
              <p className="text-muted-foreground">AWS Skill Builder</p>
              <p className="text-muted-foreground text-sm">
                EC2, Lambda, S3, VPC, IAM – deploying and managing web and serverless applications securely
              </p>
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
              <h3 className="text-xl font-display font-semibold text-foreground">Activities & Volunteer Work</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-2"
              >
                <span className="text-primary">•</span>
                <span>Volunteer at SMIT during entry test</span>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-2"
              >
                <span className="text-primary">•</span>
                <span>Volunteer at Alkhidmat Foundation for child welfare programs</span>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-start gap-2"
              >
                <span className="text-primary">•</span>
                <span>Member of Tech Tribe, university community for technology enthusiasts</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;