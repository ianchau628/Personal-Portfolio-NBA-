import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "2021 - Present",
    description: "Lead a team of 6 developers building scalable web applications serving 1M+ users. Architected microservices infrastructure that improved system performance by 40%.",
    achievements: [
      "Increased team productivity by 35% through implementation of agile methodologies",
      "Designed and built real-time analytics dashboard used by C-level executives",
      "Mentored 4 junior developers, with 2 receiving promotions"
    ],
    technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"]
  },
  {
    title: "Full-Stack Developer",
    company: "Startup Innovations",
    location: "San Francisco, CA",
    period: "2019 - 2021",
    description: "Built the core platform from ground up for a fintech startup that grew from 0 to 100K users. Handled both frontend and backend development.",
    achievements: [
      "Developed MVP that secured $2M in Series A funding",
      "Implemented secure payment processing system handling $10M+ annually",
      "Reduced application load time by 60% through optimization"
    ],
    technologies: ["Vue.js", "Python", "Django", "Redis", "Stripe API"]
  },
  {
    title: "Software Developer",
    company: "Digital Agency Pro",
    location: "San Francisco, CA",
    period: "2017 - 2019",
    description: "Developed custom web solutions for Fortune 500 clients. Collaborated with design teams to create engaging user experiences.",
    achievements: [
      "Delivered 15+ client projects on time and within budget",
      "Improved client satisfaction scores by 25%",
      "Built reusable component library used across 20+ projects"
    ],
    technologies: ["JavaScript", "PHP", "Laravel", "MySQL", "WordPress"]
  }
];

const CVExperience = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
          Professional Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 shadow-card hover:shadow-elegant transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-primary font-medium mb-2">
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-col md:items-end text-sm text-muted-foreground">
                  <div className="flex items-center gap-1 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {exp.description}
              </p>
              
              <div className="mb-4">
                <h4 className="font-medium text-foreground mb-2">Key Achievements:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary" className="bg-primary/10 text-primary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CVExperience;