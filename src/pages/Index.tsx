import CVHero from "@/components/CVHero";
import CVAbout from "@/components/CVAbout";
import CVExperience from "@/components/CVExperience";
import CVSkills from "@/components/CVSkills";
import CVEducation from "@/components/CVEducation";
import CVFooter from "@/components/CVFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <CVHero />
      <CVAbout />
      <CVExperience />
      <CVSkills />
      <CVEducation />
      <CVFooter />
    </div>
  );
};

export default Index;
