import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-center">
          Get in Touch
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Feel free to reach out for collaborations, opportunities, or just to say hello!
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Email */}
            <a
              href="mailto:raizahida947@gmail.com"
              className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground font-medium">raizahida947@gmail.com</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+923247375453"
              className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Phone className="text-primary" size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-foreground font-medium">+92 324 7375453</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/zahida-parveen"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Linkedin className="text-primary" size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <p className="text-foreground font-medium">zahida-parveen</p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/RaiZahida"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Github className="text-primary" size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">GitHub</p>
                <p className="text-foreground font-medium">RaiZahida</p>
              </div>
            </a>
          </div>

          {/* Location */}
          <div className="mt-6 bg-card border border-border/50 rounded-xl p-6 flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <MapPin className="text-primary" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="text-foreground font-medium">
                Khushal Town, Satyana Road, Faisalabad, Pakistan
              </p>
            </div>
          </div>

          {/* Languages */}
          <div className="mt-8 text-center">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
