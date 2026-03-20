import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, BookOpen } from "lucide-react";
import hkuLogo from "@/assets/hku-logo.jpg";
import northeasternLogo from "@/assets/northeastern-logo.png";

const education = [
  {
    degree: "Bachelor of Business Administration in Business Analytics and Marketing",
    school: "The University of Hong Kong",
    period: "2022 - 2026",
    location: "Hong Kong",
    logo: hkuLogo,
    description: "Specialized in Business Analytics and Marketing with a focus on digital transformation and strategic management.",
    achievements: ["HKU Business School Future Leader Scholarship Programme Recipient (2024-25)", "Expected Graduation: 2026"],
    coursework: ["Business Analytics", "Strategic Marketing", "Digital Transformation", "Project Management"]
  },
  {
    degree: "Exchange Programme - Strategic Marketing Management",
    school: "Northeastern University",
    period: "Jan 2025 - May 2025",
    location: "Boston, MA",
    logo: northeasternLogo,
    description: "Completed capstone project on brand launch strategy for a Boston-based event management company.",
    achievements: ["Strategic Marketing Management Capstone", "Brand Strategy Development"],
    coursework: ["Strategic Marketing Management", "Brand Management", "Market Research", "Consumer Behavior"]
  }
];

const certifications = [
  {
    name: "AWS Certified Solutions Architect - Professional",
    issuer: "Amazon Web Services",
    date: "2023",
    id: "AWS-SAP-2023"
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "2022",
    id: "CKA-2022"
  },
  {
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2021",
    id: "GCP-PD-2021"
  }
];

const CVEducation = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
          Education & Certifications
        </h2>
        
        <div className="space-y-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-foreground flex items-center">
              <BookOpen className="w-6 h-6 mr-3 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 shadow-card">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4 flex-1">
                      <img 
                        src={edu.logo} 
                        alt={`${edu.school} logo`} 
                        className="w-16 h-16 object-contain flex-shrink-0"
                      />
                      <div>
                        <h4 className="text-xl font-semibold text-foreground mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-lg text-primary font-medium mb-2">
                          {edu.school}
                        </p>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {edu.description}
                  </p>
                  
                  <div className="mb-4">
                    <h5 className="font-medium text-foreground mb-2">Achievements:</h5>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-foreground mb-2">Relevant Coursework:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <Badge key={i} variant="secondary">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-foreground flex items-center">
              <Award className="w-6 h-6 mr-3 text-primary" />
              Professional Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-all duration-300">
                  <h4 className="font-semibold text-foreground mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-primary font-medium mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Issued: {cert.date}
                  </p>
                  <p className="text-xs text-muted-foreground font-mono">
                    ID: {cert.id}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVEducation;