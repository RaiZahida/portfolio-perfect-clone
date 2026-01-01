import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-center"
        >
          Get in Touch
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
        >
          Feel free to reach out for collaborations, opportunities, or just to say hello!
        </motion.p>

        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Email */}
            <motion.a
              href="mailto:raizahida947@gmail.com"
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground font-medium">raizahida947@gmail.com</p>
              </div>
            </motion.a>


            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/zahida-parveen-73a446347/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Linkedin className="text-primary" size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <p className="text-foreground font-medium">zahida-parveen</p>
              </div>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/RaiZahida"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Github className="text-primary" size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">GitHub</p>
                <p className="text-foreground font-medium">RaiZahida</p>
              </div>
            </motion.a>
          </motion.div>


          {/* Languages */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-muted-foreground mb-3">Languages</p>
            <div className="flex justify-center gap-4">
              <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm">
                Urdu
              </span>
              <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm">
                English
              </span>
              <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm">
                Punjabi
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;