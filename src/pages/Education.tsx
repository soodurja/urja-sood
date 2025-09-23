import { Calendar, GraduationCap, Award, Users } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import educationData from '@/data/education.json';

const Education = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-gradient">Education</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My academic journey and achievements in Computer Science and beyond
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <Card key={edu.id} className="bg-card/50 backdrop-blur-sm border-border/50 shadow-glow hover:shadow-purple transition-smooth">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between space-y-4 md:space-y-0">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <GraduationCap className="text-purple" size={24} />
                        <h2 className="text-2xl font-bold text-foreground">{edu.institution}</h2>
                      </div>
                      
                      {edu.degree && (
                        <h3 className="text-lg text-pink font-medium mb-2">{edu.degree}</h3>
                      )}
                      
                      <div className="flex items-center space-x-1 text-muted-foreground mb-2">
                        <Calendar size={16} />
                        <span>{edu.duration}</span>
                      </div>
                      
                      {edu.gpa && (
                        <div className="flex items-center space-x-1 text-muted-foreground">
                          <Award size={16} />
                          <span>Grade: {edu.gpa}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  {edu.activities && (
                    <div className="mb-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <Users className="text-purple" size={16} />
                        <h4 className="font-medium text-foreground">Activities & Achievements</h4>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{edu.activities}</p>
                    </div>
                  )}
                  
                  {edu.skills && edu.skills.length > 0 && (
                    <div>
                      <h4 className="font-medium mb-3 text-foreground">Skills & Coursework</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs bg-muted/50">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Academic Highlights */}
          <Card className="mt-12 bg-gradient-primary text-primary-foreground shadow-glow">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Academic Highlights</h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">3.75</div>
                  <div className="text-sm opacity-90">CGPA at University of Toronto</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">3</div>
                  <div className="text-sm opacity-90">Years on A Honour's Roll</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">1st</div>
                  <div className="text-sm opacity-90">Place in Poetry Competition</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Education;