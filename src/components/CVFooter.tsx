import { Mail, Linkedin, Github, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CVFooter = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Let's Work Together
        </h2>
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
          I'm always interested in new opportunities and exciting projects. 
          Feel free to reach out if you'd like to discuss how we can collaborate.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button variant="secondary" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Mail className="w-4 h-4 mr-2" />
            john.smith@email.com
          </Button>
          <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            <Phone className="w-4 h-4 mr-2" />
            +1 (555) 123-4567
          </Button>
        </div>
        
        <div className="flex justify-center gap-4 mb-8">
          <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
            <Linkedin className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
            <Github className="w-5 h-5" />
          </Button>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-sm opacity-70">
            © 2024 John Smith. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default CVFooter;