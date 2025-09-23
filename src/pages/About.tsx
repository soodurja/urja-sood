import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import personalData from '@/data/personal.json';

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-gradient">About Me</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get to know more about my journey, skills, and passion for technology
            </p>
          </div>

          {/* Bio Section */}
          <Card className="mb-12 bg-card/50 backdrop-blur-sm border-border/50 shadow-glow">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  {personalData.bio}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Skills Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="text-gradient">Technical Skills</span>
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              {/* Programming Languages */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-purple">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Python (Programming Language)', 'Java', 'C (Programming Language)', 'Go', 'RISC-V Assembly', 'Assembly Language'].map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-purple/10 text-purple border-purple/20">
                        {skill.replace(' (Programming Language)', '')}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Technologies & Frameworks */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-pink">Technologies & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Machine Learning', 'Artificial Intelligence (AI)', 'Azure Cloud Services', 'Git', 'JavaFX', 'Pygame'].map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-pink/10 text-pink border-pink/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Core Concepts */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-purple">Core Concepts</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Data Structures and Analysis', 'Object-Oriented Programming (OOP)', 'Software Development', 'Systems Programming', 'Software Design Patterns'].map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-purple/10 text-purple border-purple/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Methodologies */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-pink">Methodologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Scrum', 'Agile Methodologies', 'Collaborative Problem Solving', 'Debugging Code', 'Academic Writing'].map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-pink/10 text-pink border-pink/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Personal Interests */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-glow">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">
                <span className="text-gradient">Beyond Code</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-purple">Sports</h3>
                  <p className="text-muted-foreground">Member of University of Toronto's Women Cricket Team</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-pink">Leadership</h3>
                  <p className="text-muted-foreground">Student Council member and peer tutor with experience in team leadership</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-purple">Writing</h3>
                  <p className="text-muted-foreground">Award winner in poetry and prose competitions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;