import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, Building2, Calendar } from "lucide-react";
import { useState } from "react";
import aahkLogo from "@/assets/aahk-logo.jpeg";
import axaLogo from "@/assets/axa-logo.png";
import ourskyLogo from "@/assets/oursky-logo.jpeg";
import hkpcLogo from "@/assets/hkpc-logo.jpeg";

const careerData = [
  {
    company: "Airport Authority Hong Kong",
    logo: aahkLogo,
    role: "IT Program and Change Management Intern",
    date: "Jun 2025 - Aug 2025",
    quote: "Gained a strategic perspective on leading IT transformation, from program-level oversight to fostering talent pipelines and innovation through industry-academia collaboration.",
    highlights: [
      "Assisted the Senior Manager under the newly established Program Change Office to drive changes in the IT Operating Model",
      "Tracked 60+ ongoing IT revamp projects to draft comprehensive summary decks and coordinate dependency workshops",
      "Researched on university partnership models to strengthen AAHK's branding and talent engagement; Solely prepared a 30-page deck on the objectives, theme and format of an AI strategy case competition and presented to CIO and senior management",
      "Acted as the team's scrum master to host daily stand-ups, collaborate with stakeholders and manage the product backlog on Jira"
    ],
    skills: ["Program Management", "Stakeholder Management", "Jira", "Agile/Scrum"]
  },
  {
    company: "AXA",
    logo: axaLogo,
    role: "IT Business Analyst Intern",
    date: "Jun 2024 - Aug 2024",
    quote: "Translated business needs into technical action, bridging the gap between stakeholder requirements and agile development teams for seamless product delivery.",
    highlights: [
      "Assisted the Scrum Master of the 'ACE' Agency Quotation Portal to facilitate daily stand-ups and stakeholder meetings",
      "Developed and refined user stories on Jira and Confluence to provide developers with better technical insights",
      "Drafted and prepared change request documents, including signoffs, deployment guides and impact analysis, to ensure the smooth implementation of new features and enhancements",
      "Conducted System Integration Testing and User Acceptance Testing on the Portal for functional performance feedback"
    ],
    skills: ["Business Analysis", "User Stories", "Jira", "Confluence", "UAT"]
  },
  {
    company: "Oursky",
    logo: ourskyLogo,
    role: "Business Development Intern",
    date: "Feb 2024 - May 2024",
    quote: "Mastered the product-led growth cycle, from hands-on feature development to market analysis and targeted customer prospecting in a global B2B tech environment.",
    highlights: [
      "Created 20 Optical Character Recognition (OCR) model extractors in FormX.ai for different document types and use cases",
      "Conducted market research and identified growth opportunities for Oursky's OCR products in the software industry",
      "Utilized sales intelligence platform Apollo.io and LinkedIn Sales Navigator to prospect potential customers from the F&B, insurance and properties sector in 5 different countries"
    ],
    skills: ["Product Development", "Market Research", "Apollo.io", "OCR/AI"]
  },
  {
    company: "Hong Kong Productivity Council",
    logo: hkpcLogo,
    role: "Digitalization Intern",
    date: "Jun 2023 - Aug 2023",
    quote: "Pioneered practical digital solutions by automating complex workflows, demonstrating how technology can be leveraged to drive operational efficiency and accuracy.",
    highlights: [
      "Assisted the IT Manager in the Digitalization and Quality Assurance Task Force of the Funding Schemes Division",
      "Developed 2 Robotic Process Automation solutions integrating OCR and NLP technology with Microsoft Power Automate and Power BI to streamline 1-hour manual data extraction of funding documents with 90% of accuracy",
      "Designed 2 workflow documents and tailor-made a technology demonstration video for internal staffs"
    ],
    skills: ["RPA", "Power Automate", "Power BI", "OCR/NLP"]
  }
];

const CareerHighlights = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-gradient-subtle">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
          Career Highlights
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          From driving IT transformation to leading data-driven digitalization, I've delivered measurable impact and demonstrated cross-functional leadership.
        </p>

        <div className="space-y-4">
          {careerData.map((career, index) => (
            <Card
              key={index}
              className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <img loading="lazy" decoding="async" 
                      src={career.logo} 
                      alt={`${career.company} logo`}
                      className="w-10 h-10 object-contain rounded"
                      referrerPolicy="no-referrer"
                    />
                    <h3 className="text-xl font-semibold text-foreground">
                      {career.company}
                    </h3>
                  </div>
                  <p className="text-lg text-primary font-medium mb-1">
                    {career.role}
                  </p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{career.date}</span>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {expandedIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-primary" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-muted-foreground" />
                  )}
                </div>
              </div>

              <div className="pl-7">
                <p className="text-muted-foreground italic mb-4 border-l-4 border-primary pl-4">
                  "{career.quote}"
                </p>

                {expandedIndex === index && (
                  <div className="space-y-4 animate-in slide-in-from-top-4 duration-300">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-outside space-y-2 pl-5">
                        {career.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-muted-foreground pl-1">
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {career.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="bg-primary/10 text-primary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerHighlights;
