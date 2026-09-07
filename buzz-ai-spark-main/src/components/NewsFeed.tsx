import { NewsCard } from "./NewsCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import movieImage from "@/assets/movie-premiere.jpg";
import musicImage from "@/assets/music-concert.jpg";
import tvImage from "@/assets/tv-studio.jpg";

// AI-generated mock news data
const newsData = [
  {
    id: 1,
    title: "Marvel Studios Announces AI-Assisted CGI Revolution",
    excerpt: "The studio reveals groundbreaking AI technology that will reduce production costs by 40% while enhancing visual effects quality. This innovation promises to transform superhero filmmaking forever.",
    category: "Movies",
    imageUrl: movieImage,
    timeAgo: "3 hours ago",
    views: "24.5K",
    comments: 127,
    likes: 892
  },
  {
    id: 2,
    title: "Spotify's AI DJ Feature Gains 10M Users in First Month",
    excerpt: "The streaming giant's artificial intelligence-powered DJ has revolutionized music discovery, creating personalized playlists that adapt to user mood and activity in real-time.",
    category: "Music",
    imageUrl: musicImage,
    timeAgo: "5 hours ago",
    views: "18.3K",
    comments: 94,
    likes: 654
  },
  {
    id: 3,
    title: "Netflix Develops AI Script Writing Tool for Original Series",
    excerpt: "The platform's new AI assistant helps writers overcome creative blocks and generates plot suggestions based on successful show patterns and audience preferences.",
    category: "TV",
    imageUrl: tvImage,
    timeAgo: "1 day ago",
    views: "31.2K",
    comments: 203,
    likes: 1247
  },
  {
    id: 4,
    title: "Warner Bros. Experiments with AI Voice Dubbing",
    excerpt: "The studio tests cutting-edge AI technology that can recreate actor voices in multiple languages, potentially revolutionizing international film distribution.",
    category: "Movies",
    imageUrl: movieImage,
    timeAgo: "2 days ago",
    views: "42.1K",
    comments: 318,
    likes: 1876
  },
  {
    id: 5,
    title: "Grammy Awards Introduces AI-Generated Music Category",
    excerpt: "The Recording Academy announces a new category recognizing outstanding achievements in AI-assisted music production and composition.",
    category: "Music",
    imageUrl: musicImage,
    timeAgo: "3 days ago",
    views: "67.8K",
    comments: 445,
    likes: 2341
  },
  {
    id: 6,
    title: "HBO Max Launches AI-Powered Content Recommendations",
    excerpt: "The streaming service unveils an advanced recommendation engine that analyzes viewing patterns, mood indicators, and social trends to suggest perfect content matches.",
    category: "TV",
    imageUrl: tvImage,
    timeAgo: "4 days ago",
    views: "29.4K",
    comments: 167,
    likes: 923
  }
];

export const NewsFeed = () => {
  const filterByCategory = (category: string) => {
    if (category === "all") return newsData;
    return newsData.filter(item => item.category.toLowerCase() === category.toLowerCase());
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Latest <span className="bg-gradient-accent bg-clip-text text-transparent">AI Entertainment</span> News
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Stay updated with the latest developments in AI-powered entertainment technology and industry innovations.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto mb-8">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="movies">Movies</TabsTrigger>
          <TabsTrigger value="music">Music</TabsTrigger>
          <TabsTrigger value="tv">TV</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsData.map((item) => (
              <NewsCard key={item.id} {...item} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="movies" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterByCategory("movies").map((item) => (
              <NewsCard key={item.id} {...item} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="music" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterByCategory("music").map((item) => (
              <NewsCard key={item.id} {...item} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tv" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterByCategory("tv").map((item) => (
              <NewsCard key={item.id} {...item} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="text-center mt-12">
        <Button variant="entertainment" size="lg">
          Load More Stories
        </Button>
      </div>
    </section>
  );
};