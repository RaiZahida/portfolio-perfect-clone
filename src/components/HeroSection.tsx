import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import profileImage from "@/assets/zahida-profile.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center grid-pattern pt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 animate-slide-up">
            <div className="inline-block px-4 py-2 rounded-full border border-primary/50 bg-primary/10 mb-6">
              <span className="text-primary text-sm font-medium">
                Full-Stack Developer & DevOps Enthusiast
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
              Zahida Parveen
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              I am a Software Engineering student with hands-on experience in MERN stack development, 
              cloud computing with AWS, and DevOps practices. Passionate about building scalable 
              web applications and continuous learning.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                <Download size={20} />
                Download CV
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact">
                  <Mail size={20} />
                  Contact Now
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="frame-accent">
                <img
                  src={profileImage}
                  alt="Zahida Parveen"
                  className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-lg"
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
