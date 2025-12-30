import { GraduationCap, Award, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12 text-center">
          About Me
        </h2>

        <div className="max-w-4xl mx-auto">
          <p className="text-muted-foreground text-lg leading-relaxed mb-12 text-center">
            I am currently pursuing my Bachelor of Science in Software Engineering at Government College 
            University, Faisalabad with a CGPA of 3.86/4.00. My journey in technology has been fueled by 
            curiosity and a desire to solve real-world problems through code.
          </p>

          {/* Education & Certifications */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Education Card */}
            <div className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground">Education</h3>
              </div>
              <div className="space-y-2">
                <p className="text-foreground font-medium">BS Software Engineering</p>
                <p className="text-muted-foreground">Government College University, Faisalabad</p>
                <p className="text-primary font-semibold">CGPA: 3.86 / 4.00</p>
                <p className="text-muted-foreground text-sm">5th Semester • 2023-2027</p>
              </div>
            </div>

            {/* Training Card */}
            <div className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground">Training</h3>
              </div>
              <div className="space-y-2">
                <p className="text-foreground font-medium">Web and Mobile Development</p>
                <p className="text-muted-foreground">Saylani Mass IT Training (S.M.I.T)</p>
                <p className="text-muted-foreground text-sm">MERN Stack & React Native with Expo</p>
                <p className="text-muted-foreground text-sm">Jan 2024 - Dec 2025</p>
              </div>
            </div>
          </div>

          {/* AWS Certification */}
          <div className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Award className="text-primary" size={24} />
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
          </div>

          {/* Activities & Volunteer */}
          <div className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Heart className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground">Activities & Volunteer Work</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Volunteer at SMIT during entry test</li>
              <li>• Volunteer at Alkhidmat Foundation for child welfare programs</li>
              <li>• Member of Tech Tribe, university community for technology enthusiasts</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
