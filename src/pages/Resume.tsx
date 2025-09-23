import { Download, ExternalLink, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Resume = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-gradient">Resume</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Download my latest resume or view my qualifications below
            </p>
            
            {/* Download Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" asChild className="bg-gradient-primary hover:bg-gradient-dark text-primary-foreground shadow-purple transition-bounce">
                <a href="/assets/resume.pdf" download="Urja_Sood_Resume.pdf">
                  <Download className="mr-2" size={20} />
                  Download Resume
                </a>
              </Button>
              
              <Button variant="outline" size="lg" asChild className="border-purple hover:bg-purple hover:text-primary-foreground">
                <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2" size={20} />
                  View in Browser
                </a>
              </Button>
            </div>
          </div>

          {/* Resume Embed */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-glow mb-12">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="text-purple" size={24} />
                <span>Resume Preview</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-[800px] rounded-lg overflow-hidden border border-border">
                <iframe
                  src="/assets/resume.pdf"
                  width="100%"
                  height="100%"
                  className="border-0"
                  title="Urja Sood Resume"
                >
                  <p>
                    Your browser does not support PDFs. 
                    <a href="/assets/resume.pdf" className="text-purple hover:underline ml-1">
                      Download the PDF
                    </a>
                  </p>
                </iframe>
              </div>
            </CardContent>
          </Card>

          {/* Quick Summary */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-glow">
              <CardHeader>
                <CardTitle className="text-gradient">Current Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-purple mb-1">Education</h3>
                  <p className="text-muted-foreground text-sm">
                    3rd year Computer Science Specialist at University of Toronto (3.75 CGPA)
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-pink mb-1">Seeking</h3>
                  <p className="text-muted-foreground text-sm">
                    Co-op internship roles for 2026 in software development, AI/ML, or cloud infrastructure
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-purple mb-1">Availability</h3>
                  <p className="text-muted-foreground text-sm">
                    Available for 4-month internship terms (Summer 2026, Fall 2026)
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-glow">
              <CardHeader>
                <CardTitle className="text-gradient">Key Highlights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-pink mb-1">Recent Experience</h3>
                  <p className="text-muted-foreground text-sm">
                    Cloud Infrastructure and AI Intern at Aptly Technology Corporation
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-purple mb-1">Technical Skills</h3>
                  <p className="text-muted-foreground text-sm">
                    Python, Java, C, Go, RISC-V Assembly, Azure, AI/ML, Git
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-pink mb-1">Leadership</h3>
                  <p className="text-muted-foreground text-sm">
                    150+ volunteer hours, team leadership experience, Dean's List scholar
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact CTA */}
          <Card className="mt-12 bg-gradient-primary text-primary-foreground shadow-glow">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Interested in working together?</h2>
              <p className="mb-6 opacity-90">
                I'm always excited to discuss new opportunities and projects. Let's connect!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild className="bg-background text-foreground hover:bg-background/90">
                  <a href="/contact">
                    Get In Touch
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-background text-background hover:bg-background hover:text-foreground">
                  <a href="mailto:urja.sood@mail.utoronto.ca">
                    Send Email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Resume;