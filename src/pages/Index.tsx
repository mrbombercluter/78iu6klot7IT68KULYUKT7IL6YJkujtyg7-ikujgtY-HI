import { useEffect, useState } from "react";
import romanticRose from "@/assets/romantic-rose.png";
import girl2 from "@/assets/girl2.jpg";
import girl3 from "@/assets/girl3.jpg";
import girl4 from "@/assets/girl4.jpg";
import girl5 from "@/assets/girl5.jpg";
import girl6 from "@/assets/girl6.jpg";
import guy5 from "@/assets/guy5.jpg";
import guy7 from "@/assets/guy7.jpg";
import guy8 from "@/assets/guy8.jpg";
import guy9 from "@/assets/guy9.webp";
import guy10 from "@/assets/guy10.webp";
import MusicPlayer from "@/components/MusicPlayer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  const girlPhotos = [girl2, girl3, girl4, girl5, girl6];
  const guyPhotos = [guy5, guy7, guy8, guy9, guy10];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden">
      <MusicPlayer />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-secondary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-accent/20 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative w-full">
        {/* Her Photos Gallery - Top */}
        <div 
          className={`mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="text-center font-script text-4xl md:text-6xl text-primary mb-6">
            My gorgeus darling ♥
          </h2>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {girlPhotos.map((photo, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="relative overflow-hidden rounded-2xl border-4 border-secondary shadow-xl aspect-[3/4] group">
                      <img
                        src={photo}
                        alt={`Beautiful memory ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        {/* Main Title */}
        <h1 
          className={`text-center font-script text-6xl md:text-8xl text-primary mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          Merry Christmas, My Love
        </h1>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-center">
          {/* Left Message */}
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border-2 border-secondary">
              <p className="font-serif text-xl md:text-2xl leading-relaxed text-romantic-dark italic">
                I just got done with building this (currently 12/03/25) I wanted to make you something that comes straight from my heart, something that can remind you how much I love you and the fact I can't live without you (lol). I love you more than words can even describe it
              </p>
              <div className="mt-6 flex justify-end">
                <span className="text-primary font-script text-2xl">♥</span>
              </div>
            </div>
          </div>

          {/* Center Rose */}
          <div 
            className={`flex justify-center transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <div className="relative">
              <img 
                src={romanticRose} 
                alt="A beautiful red rose for you" 
                className="w-64 h-64 md:w-80 md:h-80 object-contain animate-gentle-glow"
              />
              {/* Sparkle effects */}
              <div className="absolute -top-4 -right-4 text-accent text-3xl animate-pulse">✨</div>
              <div className="absolute -bottom-4 -left-4 text-accent text-2xl animate-pulse" style={{ animationDelay: "0.5s" }}>✨</div>
            </div>
          </div>

          {/* Right Message */}
          <div 
            className={`transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border-2 border-secondary">
              <p className="font-serif text-xl md:text-2xl leading-relaxed text-romantic-dark italic">
                I know this isn't much, but it's all I can give. I hope you enjoy this little something I made for you. Merry Christmas, my gorgeous darling. I love you so much and I'm sorry I couldn't give you the gift of being there with you, celebrating Christmas together like we should.
              </p>
              <div className="mt-6 flex justify-start">
                <span className="text-primary font-script text-2xl">♥</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div 
          className={`text-center mt-12 md:mt-16 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-script text-4xl md:text-5xl text-primary">
            Forever yours ♥
          </p>
        </div>

        {/* His Photos Gallery - Bottom */}
        <div 
          className={`mt-8 transition-all duration-1000 delay-1200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-center font-script text-4xl md:text-6xl text-primary mb-6">
            Your Handsome idiot ♥
          </h2>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {guyPhotos.map((photo, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="relative overflow-hidden rounded-2xl border-4 border-secondary shadow-xl aspect-[3/4] group">
                      <img
                        src={photo}
                        alt={`Our memory ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Index;
