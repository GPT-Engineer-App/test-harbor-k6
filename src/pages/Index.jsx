import { useState } from "react";
import { Paw, Heart, Info, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Index = () => {
  const [likeCount, setLikeCount] = useState(0);
  const popularBreeds = [
    { name: "Labrador Retriever", description: "Friendly and outgoing" },
    { name: "German Shepherd", description: "Intelligent and versatile" },
    { name: "Golden Retriever", description: "Devoted and obedient" },
    { name: "French Bulldog", description: "Adaptable and playful" },
    { name: "Bulldog", description: "Calm and courageous" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 text-blue-800 flex items-center justify-center">
            <Paw className="mr-4 h-16 w-16" /> Pawsome Pals
          </h1>
          <p className="text-xl text-gray-600 mb-8">Discover the wonderful world of dogs!</p>
          <Button size="lg" onClick={() => setLikeCount(likeCount + 1)}>
            <Heart className="mr-2 h-4 w-4" /> Show Some Love ({likeCount})
          </Button>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-blue-700">Man's Best Friend</h2>
            <p className="text-lg text-gray-700 mb-6">
              Dogs have been our loyal companions for thousands of years, offering unconditional love,
              protection, and friendship. From working dogs to lap dogs, there's a perfect furry friend
              for every lifestyle and preference.
            </p>
            <img
              src="https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Happy dog with owner"
              className="mx-auto object-cover w-full h-64 rounded-lg shadow-lg mb-6"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-blue-700">Popular Dog Breeds</h2>
            <div className="grid gap-4">
              {popularBreeds.map((breed) => (
                <Card key={breed.name}>
                  <CardHeader>
                    <CardTitle>{breed.name}</CardTitle>
                    <CardDescription>{breed.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="icon">
                            <Info className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Learn more about {breed.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <p className="text-lg text-gray-600 flex items-center justify-center">
            <Award className="mr-2" /> Owning a dog is a rewarding responsibility. Provide love, care, and proper attention for a happy, healthy pup!
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
