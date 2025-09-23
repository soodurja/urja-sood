import { Heart, Calendar, Users, Award } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import volunteeringData from '@/data/volunteering.json';

const Volunteering = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-gradient">Community Impact</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Giving back to the community through volunteering and leadership
            </p>
          </div>

          {/* Volunteering Experience */}
          <div className="space-y-8 mb-12">
            {volunteeringData.map((volunteer, index) => (
              <Card key={volunteer.id} className="bg-card/50 backdrop-blur-sm border-border/50 shadow-glow hover:shadow-pink transition-smooth">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                        {index === 0 ? <Heart className="text-primary-foreground" size={20} /> :
                         index === 1 ? <Users className="text-primary-foreground" size={20} /> :
                         <Award className="text-primary-foreground" size={20} />}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1">{volunteer.title}</h3>
                      <h4 className="text-pink font-medium mb-2">{volunteer.organization}</h4>
                      <div className="flex items-center space-x-1 text-muted-foreground">
                        <Calendar size={16} />
                        <span>{volunteer.duration}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{volunteer.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Impact Stats */}
          <Card className="bg-gradient-primary text-primary-foreground shadow-glow">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-8 text-center">Volunteer Impact</h2>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">150+</div>
                  <div className="text-sm opacity-90">Hours of Community Service</div>
                  <div className="text-xs opacity-75 mt-1">Supporting older adults at Elim Village</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">3</div>
                  <div className="text-sm opacity-90">Years of Environmental Work</div>
                  <div className="text-xs opacity-75 mt-1">Tree planting and habitat restoration</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">1</div>
                  <div className="text-sm opacity-90">Leadership Camp Team Led</div>
                  <div className="text-xs opacity-75 mt-1">Rotary Youth Leadership Program</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Values Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="text-gradient">What Drives Me</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Heart className="text-pink" size={24} />
                    <h3 className="text-lg font-semibold text-foreground">Empathy & Care</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Working with older adults has taught me the importance of genuine human connection 
                    and how small acts of kindness can make a meaningful difference in someone's day.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Users className="text-purple" size={24} />
                    <h3 className="text-lg font-semibold text-foreground">Environmental Stewardship</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Through environmental restoration work, I've learned about sustainability, 
                    teamwork, and the importance of taking action to protect our natural habitats.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Award className="text-pink" size={24} />
                    <h3 className="text-lg font-semibold text-foreground">Leadership Development</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Leading teams and mentoring peers has shaped my understanding of service-oriented 
                    leadership and the power of collaborative problem-solving.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Heart className="text-purple" size={24} />
                    <h3 className="text-lg font-semibold text-foreground">Personal Growth</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Every volunteer experience has contributed to my personal development, 
                    building resilience, communication skills, and a broader perspective on community needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteering;