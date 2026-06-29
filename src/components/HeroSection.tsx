import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import profileImage from "@/assets/zahida-profile.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center grid-pattern pt-20 overflow-hidden">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text first on mobile */}
          <div className="order-1 lg:order-1 text-center lg:text-left">
            <div className="inline-block px-4 py-2 rounded-full border border-primary/50 bg-primary/10 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <span className="text-primary text-sm font-medium">
                DevOps Engineer • AWS | Kubernetes | CI/CD
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight animate-slide-up" style={{ animationDelay: '0.3s' }}>
              Zahida Parveen
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              Software Engineering student with hands-on DevOps experience across containerization, 
              Kubernetes orchestration, AWS cloud infrastructure, and CI/CD automation. Passionate about 
              building reliable, scalable systems and automating deployment workflows.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="/Zahida_Parveen_CV.pdf" download>
                  <Download size={20} className="group-hover:animate-bounce" />
                  Download CV
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild className="group">
                <a href="#contact">
                  <Mail size={20} className="group-hover:scale-110 transition-transform" />
                  Contact Now
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image below text on mobile */}
          <div className="order-2 lg:order-2 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-emerald-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="frame-accent animate-float">
                <img
                  src={profileImage}
                  alt="Zahida Parveen"
                  className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover object-top rounded-lg relative z-10 transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
