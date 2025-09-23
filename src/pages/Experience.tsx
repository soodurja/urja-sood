import { Calendar, MapPin, Building } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import experienceData from '@/data/experience.json';

const Experience = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-gradient">Professional Experience</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My journey through various roles, building skills and making impact
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary transform md:-translate-x-1/2"></div>

            {experienceData.map((job, index) => (
              <div key={job.id} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gradient-primary rounded-full transform -translate-x-1/2 md:translate-x-0 shadow-glow"></div>
                
                {/* Content */}
                <Card className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} bg-card/50 backdrop-blur-sm border-border/50 shadow-glow hover:shadow-purple transition-smooth`}>
                  <CardHeader>
                    <div className="flex flex-col space-y-2">
                      <h3 className="text-xl font-bold text-purple">{job.title}</h3>
                      <div className="flex items-center space-x-2 text-pink">
                        <Building size={16} />
                        <span className="font-medium">{job.company}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{job.duration}</span>
                        </div>
                        {job.location && (
                          <div className="flex items-center space-x-1">
                            <MapPin size={14} />
                            <span>{job.location}</span>
                          </div>
                        )}
                        {job.type && (
                          <Badge variant="outline" className="text-xs">
                            {job.type}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {job.description.map((point, pointIndex) => (
                        <li key={pointIndex} className="text-muted-foreground leading-relaxed">
                          • {point}
                        </li>
                      ))}
                    </ul>
                    
                    {job.skills && job.skills.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium mb-3 text-foreground">Skills & Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.slice(0, 8).map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="text-xs bg-muted/50">
                              {skill}
                            </Badge>
                          ))}
                          {job.skills.length > 8 && (
                            <Badge variant="secondary" className="text-xs bg-muted/50">
                              +{job.skills.length - 8} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;