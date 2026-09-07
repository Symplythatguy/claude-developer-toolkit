import { Search, Menu, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Star className="h-8 w-8 text-entertainment-purple" />
            <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              EntertainmentAI
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Button variant="ghost" className="font-medium">Movies</Button>
            <Button variant="ghost" className="font-medium">TV Shows</Button>
            <Button variant="ghost" className="font-medium">Music</Button>
            <Button variant="ghost" className="font-medium">Celebrity</Button>
            <Button variant="ghost" className="font-medium">Awards</Button>
          </nav>

          {/* Search */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search entertainment news..." 
                className="pl-10 w-64 bg-secondary/50 border-border focus:bg-secondary"
              />
            </div>
            <Button variant="entertainment" size="sm">
              Subscribe
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};