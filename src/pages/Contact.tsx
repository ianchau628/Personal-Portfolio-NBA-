import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone, MapPin, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Let's Connect
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about product management and technology
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Direct Contact */}
            <Card className="p-8 shadow-card hover:shadow-elegant transition-all duration-300">
              <h2 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <a 
                  href="mailto:ianchau00628@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Email</p>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors">
                      ianchau00628@gmail.com
                    </p>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/ian-chau628"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">LinkedIn</p>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors">
                      linkedin.com/in/ian-chau628
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Phone</p>
                    <p className="text-muted-foreground">
                      +852 6818 9406
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Location</p>
                    <p className="text-muted-foreground">
                      Hong Kong
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Availability & CTA */}
            <Card className="p-8 shadow-card">
              <h2 className="text-2xl font-bold text-foreground mb-6">Current Status</h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="font-medium text-foreground">Available for Opportunities</p>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Actively seeking roles in Business Analysis, Project Management, and Strategy—particularly in the sports and entertainment industry.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Graduation</p>
                    <p className="text-muted-foreground">
                      Expected: 2026
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <h3 className="font-medium text-foreground mb-3">Quick Links</h3>
                  <div className="space-y-2">
                    <a 
                      href="mailto:ianchau00628@gmail.com"
                      className="block"
                    >
                      <Button className="w-full" size="lg">
                        <Mail className="w-4 h-4 mr-2" />
                        Send Email
                      </Button>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/ian-chau628"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button variant="outline" className="w-full" size="lg">
                        <Linkedin className="w-4 h-4 mr-2" />
                        Connect on LinkedIn
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* What to Expect */}
          <Card className="p-8 bg-gradient-subtle">
            <h2 className="text-2xl font-bold text-foreground mb-4 text-center">
              What to Expect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-medium text-foreground mb-2">Quick Response</h3>
                <p className="text-sm text-muted-foreground">
                  I typically respond within 24 hours
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="font-medium text-foreground mb-2">Professional Approach</h3>
                <p className="text-sm text-muted-foreground">
                  Clear communication and detailed follow-up
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="font-medium text-foreground mb-2">Collaborative Spirit</h3>
                <p className="text-sm text-muted-foreground">
                  Open to discuss ideas and opportunities
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
