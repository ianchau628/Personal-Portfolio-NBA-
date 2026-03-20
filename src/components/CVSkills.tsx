import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Palette, Users, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: ["React", "Vue.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Next.js", "Angular"]
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: ["Node.js", "Python", "Django", "Express.js", "PHP", "Laravel", "RESTful APIs", "GraphQL"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Jenkins", "Terraform", "Linux", "Nginx"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase", "DynamoDB", "Elasticsearch"]
  },
  {
    title: "Design & UX",
    icon: Palette,
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "Responsive Design", "Accessibility"]
  },
  {
    title: "Leadership",
    icon: Users,
    skills: ["Team Management", "Agile/Scrum", "Mentoring", "Project Planning", "Code Review", "Technical Writing"]
  }
];

const CVSkills = () => {
  return (
    <section className="py-20 px-4 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg mr-3 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge 
                      key={i} 
                      variant="outline" 
                      className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <Card className="p-8 bg-primary text-primary-foreground shadow-elegant">
            <div className="flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-bold">Always Learning</h3>
            </div>
            <p className="text-lg opacity-90">
              Currently exploring AI/ML, Web3 technologies, and advanced cloud architecture patterns
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CVSkills;