import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Send size={16} className="text-primary" />
            <span className="text-primary text-sm font-medium">Let's Connect</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Email */}
            <motion.a
              href="mailto:raizahida947@gmail.com"
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-gradient-to-br from-card to-card/80 border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 flex flex-col items-center text-center gap-4 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors group-hover:scale-110 transform duration-300">
                <Mail className="text-primary" size={28} />
              </div>
              <div className="relative">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                <p className="text-foreground font-semibold">raizahida947@gmail.com</p>
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/zahida-parveen-73a446347/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-gradient-to-br from-card to-card/80 border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 flex flex-col items-center text-center gap-4 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors group-hover:scale-110 transform duration-300">
                <Linkedin className="text-primary" size={28} />
              </div>
              <div className="relative">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">LinkedIn</p>
                <p className="text-foreground font-semibold">zahida-parveen</p>
              </div>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/RaiZahida"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-gradient-to-br from-card to-card/80 border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 flex flex-col items-center text-center gap-4 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors group-hover:scale-110 transform duration-300">
                <Github className="text-primary" size={28} />
              </div>
              <div className="relative">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">GitHub</p>
                <p className="text-foreground font-semibold">RaiZahida</p>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;