import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Scene3D } from "@/components/3d/Scene3D";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 -z-10 opacity-50">
        <Scene3D cameraPosition={[0, 0, 8]} />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial -z-5" />
      
      <div className="text-center relative z-10 max-w-2xl mx-auto px-6">
        <h1 className="text-8xl md:text-9xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
          Page Not Found
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          Oops! The page you're looking for seems to have drifted into another dimension.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" asChild>
            <a href="/">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </a>
          </Button>
          <Button variant="glass" size="lg" onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
