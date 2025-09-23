import { ExternalLink, Github, Calendar, Building } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import projectsData from '@/data/projects.json';

const Projects = () => {
  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'AI/ML': 'bg-purple/10 text-purple border-purple/20',
      'CLI Application': 'bg-pink/10 text-pink border-pink/20',
      'Systems Programming': 'bg-blue/10 text-blue border-blue/20',
      'IoT': 'bg-green/10 text-green border-green/20',
      'GUI Application': 'bg-yellow/10 text-yellow border-yellow/20',
      'Game Development': 'bg-red/10 text-red border-red/20',
      'Assembly Programming': 'bg-indigo/10 text-indigo border-indigo/20',
      'Software Development': 'bg-cyan/10 text-cyan border-cyan/20',
      'Data Visualization': 'bg-orange/10 text-orange border-orange/20',
    };
    return colors[type] || 'bg-muted/50';
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical projects, from AI systems to low-level programming
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((project) => (
              <Card key={project.id} className="bg-card/50 backdrop-blur-sm border-border/50 shadow-glow hover:shadow-purple transition-smooth group">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className={getTypeColor(project.type)}>
                      {project.type}
                    </Badge>
                    <div className="flex space-x-2">
                      {project.github && (
                        <Button variant="ghost" size="sm" asChild className="opacity-0 group-hover:opacity-100 transition-smooth hover:text-purple">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github size={16} />
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button variant="ghost" size="sm" asChild className="opacity-0 group-hover:opacity-100 transition-smooth hover:text-pink">
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-gradient transition-smooth">
                    {project.title}
                  </h3>
                  
                  <div className="flex flex-col space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{project.date}</span>
                    </div>
                    {project.organization && (
                      <div className="flex items-center space-x-1">
                        <Building size={14} />
                        <span>{project.organization}</span>
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-4">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-xs font-medium mb-2 text-foreground">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.skills.slice(0, 4).map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {project.skills.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.skills.length - 4}
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    {(project.github || project.demo) && (
                      <div className="flex space-x-2 pt-2">
                        {project.github && (
                          <Button variant="outline" size="sm" asChild className="text-xs flex-1 hover:bg-purple hover:text-primary-foreground">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github size={14} className="mr-1" />
                              Code
                            </a>
                          </Button>
                        )}
                        {project.demo && (
                          <Button variant="outline" size="sm" asChild className="text-xs flex-1 hover:bg-pink hover:text-primary-foreground">
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink size={14} className="mr-1" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-16">
            <Card className="bg-gradient-primary p-8 text-primary-foreground shadow-glow">
              <h2 className="text-2xl font-bold mb-4">Want to see more?</h2>
              <p className="mb-6 opacity-90">Check out my GitHub for additional projects and contributions</p>
              <Button variant="secondary" size="lg" asChild className="bg-background text-foreground hover:bg-background/90">
                <a href="https://github.com/soodurja" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2" size={20} />
                  Visit GitHub
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;