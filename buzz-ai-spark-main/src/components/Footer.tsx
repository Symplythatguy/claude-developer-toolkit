import { Star, Twitter, Instagram, Youtube, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Star className="h-6 w-6 text-entertainment-purple" />
              <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                EntertainmentAI
              </span>
            </div>
            <p className="text-muted-foreground">
              Your premier source for AI-powered entertainment news and industry insights.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Youtube className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-entertainment-purple transition-colors">Movies</a></li>
              <li><a href="#" className="hover:text-entertainment-purple transition-colors">TV Shows</a></li>
              <li><a href="#" className="hover:text-entertainment-purple transition-colors">Music</a></li>
              <li><a href="#" className="hover:text-entertainment-purple transition-colors">Celebrity News</a></li>
              <li><a href="#" className="hover:text-entertainment-purple transition-colors">Awards</a></li>
            </ul>
          </div>

          {/* AI Features */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">AI Features</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-entertainment-gold transition-colors">AI News Generation</a></li>
              <li><a href="#" className="hover:text-entertainment-gold transition-colors">Smart Recommendations</a></li>
              <li><a href="#" className="hover:text-entertainment-gold transition-colors">Content Analysis</a></li>
              <li><a href="#" className="hover:text-entertainment-gold transition-colors">Trend Prediction</a></li>
              <li><a href="#" className="hover:text-entertainment-gold transition-colors">Voice Search</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-muted-foreground text-sm">
              Get the latest AI entertainment news delivered to your inbox.
            </p>
            <div className="space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-3 py-2 bg-background border border-border rounded-md focus:ring-2 focus:ring-entertainment-purple focus:border-transparent"
              />
              <Button variant="entertainment" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 EntertainmentAI. All rights reserved. Powered by artificial intelligence.</p>
        </div>
      </div>
    </footer>
  );
};