import { Link } from 'react-router-dom';
import { Download, Github, Linkedin, MapPin, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import heroBackground from '@/assets/hero-bg.jpg';
import personalData from '@/data/personal.json';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Open to Work Badge */}
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-gradient-primary text-primary-foreground shadow-glow">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Open to work
            </Badge>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient">{personalData.name}</span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground font-normal">
                {personalData.title}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto">
              {personalData.subtitle}
            </p>

            {/* Location */}
            <div className="flex items-center justify-center mb-8 text-muted-foreground">
              <MapPin size={18} className="mr-2" />
              <span>{personalData.location}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button asChild size="lg" className="bg-gradient-primary hover:bg-gradient-dark text-primary-foreground shadow-purple transition-bounce px-8 py-3">
                <Link to="/projects">
                  View Projects
                  <ExternalLink className="ml-2" size={18} />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="border-2 border-purple hover:bg-purple hover:text-primary-foreground transition-bounce px-8 py-3">
                <a href="/assets/resume.pdf" download>
                  Download Resume
                  <Download className="ml-2" size={18} />
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <Button variant="ghost" size="sm" asChild className="hover:text-purple hover:scale-110 transition-bounce">
                <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin size={24} />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              
              <Button variant="ghost" size="sm" asChild className="hover:text-pink hover:scale-110 transition-bounce">
                <a href={personalData.github} target="_blank" rel="noopener noreferrer">
                  <Github size={24} />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              
              <Button variant="ghost" size="sm" asChild className="hover:text-purple hover:scale-110 transition-bounce">
                <a href={`mailto:${personalData.email}`}>
                  <Mail size={24} />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Quick Skills Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-gradient">Core Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and skills I work with to build innovative solutions
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {personalData.skills.slice(0, 8).map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm bg-card hover:bg-gradient-primary hover:text-primary-foreground transition-smooth cursor-default shadow-sm"
              >
                {skill}
              </Badge>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-purple hover:bg-purple hover:text-primary-foreground">
              <Link to="/about">
                View All Skills
                <ExternalLink className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;