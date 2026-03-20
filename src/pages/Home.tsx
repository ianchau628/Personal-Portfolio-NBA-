import Navigation from "@/components/Navigation";
import PMHero from "@/components/PMHero";
import CareerHighlights from "@/components/CareerHighlights";
import KeySkills from "@/components/KeySkills";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <PMHero />
      <CareerHighlights />
      <KeySkills />
      
    </div>
  );
};

export default Home;
