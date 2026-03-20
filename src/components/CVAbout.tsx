import { Card } from "@/components/ui/card";

const CVAbout = () => {
  return (
    <section className="py-20 px-4 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
          About Me
        </h2>
        
        <Card className="p-8 shadow-card">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              I'm a passionate software engineer with over 8 years of experience building 
              scalable web applications and leading development teams. My journey began with 
              a Computer Science degree from Stanford University, where I discovered my love 
              for problem-solving through code.
            </p>
            
            <p>
              Throughout my career, I've had the opportunity to work with startups and 
              established companies, helping them transform ideas into robust digital products. 
              I specialize in full-stack development with expertise in React, Node.js, Python, 
              and cloud technologies.
            </p>
            
            <p>
              When I'm not coding, you'll find me contributing to open-source projects, 
              mentoring junior developers, or exploring the latest technologies. I believe 
              in continuous learning and staying ahead of industry trends to deliver 
              innovative solutions.
            </p>
            
            <p>
              I'm currently looking for opportunities to lead technical teams and architect 
              solutions that make a meaningful impact on users' lives. I thrive in 
              collaborative environments where I can combine technical expertise with 
              strategic thinking.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CVAbout;