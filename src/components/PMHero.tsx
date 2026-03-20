import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";

const PMHero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 py-20 pt-32">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <div className="relative inline-block mb-6">
            <img
              src={profilePhoto}
              alt="Ian Chau - Product Manager"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover object-top mx-auto shadow-hero border-4 border-primary-foreground/20"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Ian Chau
          </h1>

          <p className="text-2xl md:text-3xl text-primary-foreground/90 mb-6 font-light">
            Aspiring Sports Business Leader
          </p>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            Passionate about the intersection of business analytics, digital innovation, and the global sports industry.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-6 h-6 text-primary-foreground mr-2" />
              <span className="text-3xl font-bold text-primary-foreground">Analytics</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">Data-Driven Decisions</p>
          </div>

          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
            <div className="flex items-center justify-center mb-2">
              <Briefcase className="w-6 h-6 text-primary-foreground mr-2" />
              <span className="text-3xl font-bold text-primary-foreground">Innovation</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">Agile & Tech Strategy</p>
          </div>

          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
            <div className="flex items-center justify-center mb-2">
              <Award className="w-6 h-6 text-primary-foreground mr-2" />
              <span className="text-3xl font-bold text-primary-foreground">Leadership</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">Cross-Functional Teams</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/work">
            <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              View My Work
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <Link to="/about#personal-interest">
            <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Personal Life
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PMHero;
