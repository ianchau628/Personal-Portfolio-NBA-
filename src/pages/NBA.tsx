import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Globe, Activity, Star, MapPin } from "lucide-react";

import basketball1 from "@/assets/basketball-1.jpeg";
import basketball2 from "@/assets/basketball-2.jpeg";
import basketball3 from "@/assets/basketball-3.jpeg";
import basketball4 from "@/assets/basketball-4.jpeg";
import basketball5 from "@/assets/basketball-5.jpeg";
import arena1 from "@/assets/IMG_1759.jpeg";
import arena2 from "@/assets/IMG_1787.jpeg";
import arena3 from "@/assets/IMG_2849.jpeg";
import arena4 from "@/assets/IMG_6716.jpeg";
import arena5 from "@/assets/IMG_6731.jpeg";
import arena6 from "@/assets/IMG_6739.jpeg";
import arena7 from "@/assets/IMG_4179.jpeg";
import arena8 from "@/assets/IMG_4181.jpeg";
import arena9 from "@/assets/IMG_7140.jpeg";

const NBA = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            My NBA Experience
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            A visual journey through my experiences with the game, the culture, and the business of basketball.
          </p>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Block 1: Events */}
          <Card className="p-8 shadow-elegant">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Events
              </h2>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">Events</Badge>
                <Badge variant="outline">Brand Partnerships</Badge>
              </div>
            </div>

            <div className="space-y-6">
              {/* Image Collage - Row format */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <img loading="lazy" decoding="async" 
                  src={basketball2} 
                  alt="NBA Central Market Event" 
                  className="w-full h-48 md:h-64 object-cover object-center rounded"
                />
                <img loading="lazy" decoding="async" 
                  src={basketball3} 
                  alt="Hennessy x NBA Campaign" 
                  className="w-full h-48 md:h-64 object-cover object-center rounded"
                />
              </div>

              {/* Single Description */}
              <div className="text-left">
                <p className="text-muted-foreground leading-relaxed">
                  Attended NBA events at iconic locations like Hong Kong's Central Market and observed global brand collaborations like the Hennessy x NBA campaign. Witnessed firsthand how the league localized its brand and engaged with international communities through immersive pop-ups.
                </p>
              </div>
            </div>
          </Card>

          {/* Block 2: Legends */}
          <Card className="p-8 shadow-elegant">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Legends
              </h2>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">Player Interactions</Badge>
                <Badge variant="outline">Basketball Culture</Badge>
              </div>
            </div>

            <div className="space-y-6">
              {/* Image Collage - Row format */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <img loading="lazy" decoding="async" 
                  src={basketball1} 
                  alt="Meeting Shaquille O'Neal and Mike Miller" 
                  className="w-full h-48 md:h-64 object-cover object-[center_15%] rounded"
                />
                <img loading="lazy" decoding="async" 
                  src={basketball4} 
                  alt="Al Horford signing autographs" 
                  className="w-full h-48 md:h-64 object-cover object-center rounded"
                />
                <img loading="lazy" decoding="async" 
                  src={basketball5} 
                  alt="CM Punk at the game" 
                  className="w-full h-48 md:h-64 object-cover object-center rounded"
                />
              </div>

              {/* Single Description */}
              <div className="text-left">
                <p className="text-muted-foreground leading-relaxed">
                  Connected with NBA legends like Shaquille O'Neal and Mike Miller. These interactions offered a unique perspective on player branding and the immense cultural impact of basketball icons globally.
                </p>
              </div>
            </div>
          </Card>

          {/* Block 3: Arenas */}
          <Card className="p-8 shadow-elegant">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Arenas
              </h2>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">Arena Experience</Badge>
                <Badge variant="outline">Live Games</Badge>
              </div>
            </div>

            <div className="space-y-10">
              {/* TD Garden / Celtics */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <img loading="lazy" decoding="async" 
                    src={arena1} 
                    alt="TD Garden 1" 
                    className="w-full h-48 md:h-64 object-cover object-center rounded"
                  />
                  <img loading="lazy" decoding="async" 
                    src={arena3} 
                    alt="TD Garden 2" 
                    className="w-full h-48 md:h-64 object-cover object-center rounded"
                  />
                  <img loading="lazy" decoding="async" 
                    src={arena2} 
                    alt="TD Garden 3" 
                    className="w-full h-48 md:h-64 object-cover object-center rounded"
                  />
                </div>
                <div className="text-left">
                  <p className="text-muted-foreground leading-relaxed">
                    Experienced the historic TD Garden and the electric atmosphere of a Boston Celtics game. Witnessed firsthand the deep-rooted passion of the fanbase and the rich championship culture that defined the arena.
                  </p>
                </div>
              </div>

              {/* Intuit Dome / Clippers */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <img loading="lazy" decoding="async" 
                    src={arena4} 
                    alt="Intuit Dome 1" 
                    className="w-full h-48 md:h-64 object-cover object-center rounded"
                  />
                  <img loading="lazy" decoding="async" 
                    src={arena5} 
                    alt="Intuit Dome 2" 
                    className="w-full h-48 md:h-64 object-cover object-center rounded"
                  />
                  <img loading="lazy" decoding="async" 
                    src={arena6} 
                    alt="Intuit Dome 3" 
                    className="w-full h-48 md:h-64 object-cover object-center rounded"
                  />
                </div>
                <div className="text-left">
                  <p className="text-muted-foreground leading-relaxed">
                    Explored the state-of-the-art Intuit Dome, the new home of the LA Clippers. Observed the cutting-edge technology, fan-centric design, and innovative features that redefined the modern NBA arena experience.
                  </p>
                </div>
              </div>

              {/* Additional Arena Experience */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <img loading="lazy" decoding="async" 
                    src={arena7} 
                    alt="Arena Experience 1" 
                    className="w-full h-48 md:h-64 object-cover object-center rounded"
                  />
                  <img loading="lazy" decoding="async" 
                    src={arena8} 
                    alt="Arena Experience 2" 
                    className="w-full h-48 md:h-64 object-cover object-center rounded"
                  />
                  <img loading="lazy" decoding="async" 
                    src={arena9} 
                    alt="Arena Experience 3" 
                    className="w-full h-48 md:h-64 object-cover object-center rounded"
                  />
                </div>
                <div className="text-left">
                  <p className="text-muted-foreground leading-relaxed">
                    Continued the journey across different NBA venues, soaking in the unique energy and traditions that each city brought to the game. Every arena told its own story through its fans, architecture, and game-day presentation.
                  </p>
                </div>
              </div>
            </div>
          </Card>

        </div>
      </section>
    </div>
  );
};

export default NBA;
