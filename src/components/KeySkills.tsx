import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Laptop, 
  Users, 
  Brain,
  Trophy
} from "lucide-react";

const skillsData = [
  {
    category: "Technical & Analytics",
    icon: Laptop,
    skills: ["Python", "SQL", "Power BI", "Tableau", "Power Automate", "Jira"]
  },
  {
    category: "Core Competencies",
    icon: Users,
    skills: ["Leadership", "Analytical Thinking", "Strategy", "Stakeholder Management", "Communication"]
  },
  {
    category: "Domain Expertise",
    icon: Brain,
    skills: ["Sports Business", "IT Transformation", "Digital Automation", "B2B SaaS", "Aviation"]
  }
];

import hkuBusinessLogo from "@/assets/hku-business-logo.jpg";
import cathayLogo from "@/assets/cathay-logo.png";
import hkuLogo from "@/assets/original.png";
import unnamedJpg from "@/assets/unnamed.jpg";

const achievements = [
  {
    logo: hkuLogo,
    title: "External Vice-President, Information Systems Association HKU",
    year: "2022-23",
    description: "Led partnerships with 20+ external organizations (F&B, Accounting) and organized career-oriented events, demonstrating strong leadership and relationship-building skills."
  },
  {
    logo: cathayLogo,
    title: "Finalist, Cathay Hackathon",
    year: "2023",
    description: "Competed against 280 students (selected from 1,500). Developed and pitched a prototype solution for a Virtual Assistant to industry experts."
  },
  {
    logo: unnamedJpg,
    title: "HKU-Accenture Business Consulting Programme",
    year: "2024",
    description: "Developed practical skills in problem-solving, strategic thinking, and teamwork through a challenging case competition."
  }
];

const KeySkills = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
          Skills & Expertise
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A blend of technical proficiency, business acumen, and leadership capabilities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {skillsData.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg mr-3 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.category}
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

        {/* Achievements Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
            Leadership & Extracurriculars
          </h3>
          
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 border-l-4 border-l-primary">
                <div className="flex items-start gap-4">
                  <img 
                    src={achievement.logo} 
                    alt={`${achievement.title} logo`}
                    className="w-16 h-16 object-contain flex-shrink-0 rounded"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-3 mb-2">
                      <h4 className="text-lg font-bold text-foreground leading-tight flex-1">{achievement.title}</h4>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">{achievement.year}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeySkills;
