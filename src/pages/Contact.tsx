import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import personalData from '@/data/personal.json';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [emailCopied, setEmailCopied] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact');
    const body = encodeURIComponent(
      `Hi Urja,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
    );
    
    window.location.href = `mailto:${personalData.email}?subject=${subject}&body=${body}`;
    
    toast({
      title: "Email client opened",
      description: "Your message has been prepared in your default email client.",
    });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalData.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
      toast({
        title: "Email copied!",
        description: "Email address has been copied to your clipboard.",
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please copy the email address manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-gradient">Get In Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on exciting projects? Let's connect and discuss opportunities!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-glow">
                <CardHeader>
                  <CardTitle className="text-2xl text-gradient">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                      <Mail className="text-primary-foreground" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">Email</p>
                      <div className="flex items-center space-x-2">
                        <p className="font-medium text-foreground">{personalData.email}</p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={copyEmail}
                          className="hover:text-purple"
                        >
                          {emailCopied ? <Check size={16} /> : <Copy size={16} />}
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                      <Phone className="text-primary-foreground" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium text-foreground">{personalData.phone}</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                      <MapPin className="text-primary-foreground" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium text-foreground">{personalData.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-glow">
                <CardHeader>
                  <CardTitle className="text-xl text-gradient">Connect Online</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="lg" asChild className="flex-1 hover:bg-purple hover:text-primary-foreground">
                      <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2" size={20} />
                        LinkedIn
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild className="flex-1 hover:bg-pink hover:text-primary-foreground">
                      <a href={personalData.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2" size={20} />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="bg-gradient-primary text-primary-foreground shadow-glow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Available for Opportunities</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Currently seeking co-op internship roles for 2026. Open to discussing software development, 
                    AI/ML, and cloud infrastructure opportunities.
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Available for new projects</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-glow">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-primary hover:bg-gradient-dark text-primary-foreground shadow-purple transition-bounce"
                  >
                    <Send className="mr-2" size={18} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;