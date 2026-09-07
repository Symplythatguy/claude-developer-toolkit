import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Eye } from "lucide-react";
import heroImage from "@/assets/hero-entertainment.jpg";

export const HeroSection = () => {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl space-y-6">
          <div className="flex items-center space-x-3">
            <Badge className="bg-entertainment-purple text-foreground">
              Breaking News
            </Badge>
            <div className="flex items-center text-muted-foreground text-sm">
              <Clock className="h-4 w-4 mr-1" />
              2 hours ago
            </div>
          </div>

          <h1 className="text-5xl font-bold leading-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              AI Revolutionizes
            </span>
            <br />
            <span className="text-foreground">Entertainment Industry</span>
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed">
            Artificial Intelligence is transforming how we create, consume, and experience entertainment. 
            From AI-generated scripts to personalized content recommendations, the future is here.
          </p>

          <div className="flex items-center space-x-4">
            <Button variant="hero" size="lg">
              Read Full Story
            </Button>
            <Button variant="outline" size="lg">
              Watch Video
            </Button>
          </div>

          <div className="flex items-center text-muted-foreground text-sm">
            <Eye className="h-4 w-4 mr-1" />
            15.2K views
          </div>
        </div>
      </div>
    </section>
  );
};