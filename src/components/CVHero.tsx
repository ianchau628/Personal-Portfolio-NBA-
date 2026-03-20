import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const CVHero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative inline-block mb-8">
          <img
            src={profilePhoto}
            alt="Professional headshot"
            className="w-48 h-48 rounded-full object-cover object-top mx-auto shadow-hero border-4 border-primary-foreground/20"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-10"></div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4">
          John Smith
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-6 font-light">
          Senior Software Engineer & Full-Stack Developer
        </p>
        
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
          Passionate about creating innovative digital solutions with 8+ years of experience 
          in modern web technologies and team leadership.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-primary-foreground/80">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>San Francisco, CA</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>john.smith@email.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+1 (555) 123-4567</span>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="secondary" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Mail className="w-4 h-4 mr-2" />
            Contact Me
          </Button>
          <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </Button>
          <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CVHero;