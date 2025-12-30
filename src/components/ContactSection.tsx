import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "raizahida947@gmail.com",
    href: "mailto:raizahida947@gmail.com",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 324 7375453",
    href: "tel:+923247375453",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "RaiZahida",
    href: "https://github.com/RaiZahida",
    color: "from-gray-600 to-gray-800",
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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
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
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* LinkedIn Featured Card */}
          <motion.a
            href="https://www.linkedin.com/in/zahida-parveen-73a446347/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="block mb-8 bg-gradient-to-r from-[#0077B5] to-[#00a0dc] rounded-2xl p-8 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
              <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                <Linkedin className="text-white" size={40} />
              </div>
              <div className="text-center md:text-left flex-1">
                <p className="text-white/80 text-sm mb-1">Connect with me on</p>
                <h3 className="text-2xl font-display font-bold text-white mb-2">LinkedIn</h3>
                <p className="text-white/90 font-medium">Zahida Parveen</p>
              </div>
              <div className="flex items-center gap-2 text-white font-medium">
                <span>View Profile</span>
                <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.a>

          {/* Contact Cards Grid */}
          <motion.div 
            className="grid md:grid-cols-3 gap-4 mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className={`inline-flex p-3 bg-gradient-to-br ${item.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="text-white" size={24} />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                <p className="text-foreground font-medium truncate">{item.value}</p>
              </motion.a>
            ))}
          </motion.div>

          {/* Location */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card border border-border/50 rounded-xl p-6 flex items-center gap-4 mb-8"
          >
            <div className="p-3 bg-gradient-to-br from-primary to-emerald-600 rounded-xl">
              <MapPin className="text-primary-foreground" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="text-foreground font-medium">
                Khushal Town, Satyana Road, Faisalabad, Pakistan
              </p>
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-4">Languages I Speak</p>
            <div className="flex justify-center gap-3 flex-wrap">
              {["Urdu", "English", "Punjabi"].map((lang, i) => (
                <motion.span 
                  key={lang}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-5 py-2 bg-gradient-to-r from-primary/20 to-emerald-500/20 text-primary border border-primary/30 rounded-full text-sm font-medium cursor-default"
                >
                  {lang}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;