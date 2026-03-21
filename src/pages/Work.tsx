import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Users, Target, Lightbulb, Presentation } from "lucide-react";
import { useState } from "react";
import sidewlkSite1 from "@/assets/sidewlk-site-1.jpg";
import sidewlkSite2 from "@/assets/sidewlk-site-2.jpg";
import sidewlkSite3 from "@/assets/sidewlk-site-3.jpg";
import sidewlkFloorplan from "@/assets/sidewlk-floorplan.png";
import sidewlkTeam from "@/assets/sidewlk-team-new.jpg";
import sidePresentsLogo from "@/assets/side-presents-logo.png";
import hkuCrest from "@/assets/hku-logo.jpg";
import web3Alibaba from "@/assets/web3-alibaba.jpg";
import web3Temple from "@/assets/web3-temple.jpg";
import web3Hangzhou from "@/assets/web3-hangzhou.jpg";
import sidewlkSubmark from "@/assets/submark+neon_1.webp";

const Work = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-hero">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Project Portfolio
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            A showcase of my strategic marketing, digital innovation, and community-driven projects.
          </p>
        </div>
      </section>

      {/* Project Portfolio Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Tech for Social Good Project */}
          <Card className="p-8 shadow-elegant">
            <div className="flex items-start gap-4 mb-6">
              <img 
                src={hkuCrest} 
                alt="HKU logo" 
                className="w-16 h-16 object-contain flex-shrink-0"
              />
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Tech for Social Good
                </h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Web3.0</Badge>
                  <Badge variant="outline">Social Impact</Badge>
                  <Badge variant="outline">Community Platform</Badge>
                  <Badge variant="outline">Tech Ethics</Badge>
                  <Badge variant="outline">Research</Badge>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Image Collage */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                <img 
                  src={web3Alibaba} 
                  alt="Web3 course at Alibaba" 
                  className="w-full h-40 object-cover object-center rounded"
                />
                <img 
                  src={web3Temple} 
                  alt="Web3 course field trip" 
                  className="w-full h-40 object-cover object-center rounded"
                />
                <img 
                  src={web3Hangzhou} 
                  alt="Web3 course at Hangzhou" 
                  className="w-full h-40 object-cover object-center rounded"
                />
              </div>

              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Course & University</p>
                  <p className="text-foreground font-medium">
                    Web3.0 for Social Impact • The University of Hong Kong
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Timeline</p>
                  <p className="text-foreground font-medium">Fall 2025 - Spring 2026</p>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <p className="text-muted-foreground">Team</p>
                    <p className="text-foreground font-medium">Team of 5</p>
                  </div>
                  <a
                    href="/Trip_Reflection.pdf"
                    download
                    className="text-primary text-sm underline decoration-primary/30 hover:decoration-primary transition-colors ml-4"
                  >
                    Field Trip Reflection
                  </a>
                </div>
              </div>

              {/* Project Description */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Project Overview
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  This project was the core component of my interdisciplinary Web3.0 for Social Impact course. Our mission was to develop a digital platform that addressed the critical social issue of weak local support networks. The platform empowered residents to initiate help requests, organize community initiatives, and foster trust and collaboration within their neighborhoods. Throughout the project, we synthesized key learnings from guest lectures and an immersive field trip to Shanghai and Hangzhou visiting companies like Alibaba, Ant Finance and Sense Time.
                </p>
              </div>

              {/* Expandable Details */}
              <Collapsible>
                <CollapsibleTrigger className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium w-full justify-start">
                  <ChevronDown className="w-5 h-5 transition-transform" />
                  View Full Project Details
                </CollapsibleTrigger>
                
                <CollapsibleContent className="space-y-6 mt-6">
                  {/* Key Experience & Learning */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-primary" />
                      Key Experience & Learning
                    </h3>
                    <ul className="space-y-3 text-muted-foreground pl-5 list-disc">
                      <li>
                        Gained firsthand exposure to a different tech model in China, focused on massive-scale application and integration with public governance
                      </li>
                      <li>
                        Understood the key trade-off between achieving high societal efficiency and maintaining digital autonomy and privacy
                      </li>
                      <li>
                        These insights guided our project, pushing us to build a community platform that leveraged tech for good while prioritizing user control, transparency, and consent
                      </li>
                    </ul>
                  </div>

                  {/* My Role & Contributions */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      My Role & Contributions
                    </h3>
                    <ul className="space-y-3 text-muted-foreground pl-5 list-disc">
                      <li>
                        <span className="font-medium text-foreground">Research & Problem Definition:</span> Conducted research to address the lack of immediate support networks for residents in local neighbourhoods
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Insight Synthesis:</span> Synthesized insights from our field trip to China on tech ethics and AI governance to shape our platform's design principles
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Platform Ideation:</span> Collaborated in the ideation and conceptualization of a Web3.0-inspired platform designed to facilitate community help and collaboration
                      </li>
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </Card>

          {/* SIDEWLK Project */}
          <Card className="p-8 shadow-elegant">
            <div className="flex items-start gap-4 mb-6">
              <img 
                src={sidewlkSubmark} 
                alt="SIDE Presents logo" 
                className="w-16 h-16 object-contain flex-shrink-0"
              />
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  SIDEWLK Brand Launch Strategy
                </h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Strategic Marketing</Badge>
                  <Badge variant="outline">Brand Strategy</Badge>
                  <Badge variant="outline">Community Engagement</Badge>
                  <Badge variant="outline">Market Research</Badge>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Image Collage */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                <img 
                  src={sidewlkTeam} 
                  alt="SIDEWLK project team" 
                  className="w-full h-40 object-cover object-top rounded"
                />
                <img 
                  src={sidewlkSite2} 
                  alt="SIDEWLK venue entrance" 
                  className="w-full h-40 object-cover object-center rounded"
                />
                <img 
                  src={sidewlkSite3} 
                  alt="SIDEWLK neighborhood" 
                  className="w-full h-40 object-cover object-center rounded"
                />
              </div>

              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Course & University</p>
                  <p className="text-foreground font-medium">Strategic Marketing Management Capstone</p>
                  <p className="text-foreground font-medium">Northeastern University</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Timeline</p>
                  <p className="text-foreground font-medium">January - May 2025</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Team</p>
                  <p className="text-foreground font-medium">Team of 4</p>
                </div>
              </div>

              {/* Project Description */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Project Overview
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Partnered with <a 
                    href="https://www.sidepresents.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary underline decoration-primary/30 hover:decoration-primary transition-colors font-medium"
                  >
                    SIDE Presents
                  </a>, a community-focused event management company in Dorchester, Boston, to develop a comprehensive brand launch strategy for their new event space, SIDEWLK. The mission was to establish a distinct brand identity separate from the parent company and position SIDEWLK as Boston's next major creative hub.
                </p>
              </div>

              {/* Expandable Details */}
              <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                <CollapsibleTrigger className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium w-full justify-start">
                  <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  {isOpen ? 'Hide Details' : 'View Full Project Details'}
                </CollapsibleTrigger>
                
                <CollapsibleContent className="space-y-6 mt-6">
                  {/* Key Objectives */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      Key Objectives
                    </h3>
                    <ul className="space-y-2 text-muted-foreground pl-5 list-disc">
                      <li>Develop a distinct brand identity for SIDEWLK, setting it apart from its parent company, SIDE Presents</li>
                      <li>Position SIDEWLK as Boston's premier creative hub and event destination</li>
                      <li>Create a strategic and actionable launch plan to introduce SIDEWLK to the Boston community</li>
                    </ul>
                  </div>

                  {/* My Contributions */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      My Contributions & Deliverables
                    </h3>
                    <ul className="space-y-3 text-muted-foreground pl-5 list-disc">
                      <li>
                        <span className="font-medium text-foreground">Community Analysis:</span> Conducted in-person site visits and community analysis in Dorchester to understand the local landscape, identify competitors, and pinpoint potential community partners
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Funding Strategy:</span> Researched funding opportunities and grants within the Boston area to develop a sustainable funding model for the new venue
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Engagement Planning:</span> Developed a strategic plan for events and community engagement to ensure local involvement and long-term success
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Brand Identity:</span> Created visual brand mockups, including a website and Instagram profile, to define and present the new SIDEWLK identity
                      </li>
                    </ul>
                  </div>

                  {/* Impact Section */}
                  <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Presentation className="w-5 h-5 text-primary" />
                      Project Impact
                    </h3>
                    <p className="text-muted-foreground">
                      Delivered a comprehensive brand strategy that provided SIDE Presents with a clear roadmap for launching SIDEWLK as an independent creative hub. The project demonstrated the ability to balance strategic thinking with hands-on research, community engagement, and creative execution—bridging business objectives with cultural impact, skills highly transferable to fan engagement and brand building in the sports and entertainment sector.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Work;