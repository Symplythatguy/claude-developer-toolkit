import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MessageCircle, Heart, Share } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NewsCardProps {
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  timeAgo: string;
  views: string;
  comments: number;
  likes: number;
}

export const NewsCard = ({ 
  title, 
  excerpt, 
  category, 
  imageUrl, 
  timeAgo, 
  views, 
  comments, 
  likes 
}: NewsCardProps) => {
  const getCategoryColor = (cat: string) => {
    switch (cat.toLowerCase()) {
      case 'movies': return 'bg-entertainment-purple';
      case 'music': return 'bg-entertainment-gold text-entertainment-dark';
      case 'tv': return 'bg-entertainment-blue';
      default: return 'bg-secondary';
    }
  };

  return (
    <Card className="group overflow-hidden bg-gradient-card shadow-card hover:shadow-hero transition-all duration-300 hover:scale-[1.02] cursor-pointer">
      <div className="relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <Badge className={getCategoryColor(category)}>
            {category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6 space-y-4">
        <h3 className="text-xl font-bold line-clamp-2 group-hover:text-entertainment-purple transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {timeAgo}
            </div>
            <span>{views} views</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-entertainment-purple">
              <Heart className="h-4 w-4 mr-1" />
              {likes}
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-entertainment-blue">
              <MessageCircle className="h-4 w-4 mr-1" />
              {comments}
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-entertainment-gold">
            <Share className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};