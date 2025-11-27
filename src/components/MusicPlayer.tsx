import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

const MusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    const iframe = document.querySelector('iframe') as HTMLIFrameElement;
    if (iframe && iframe.contentWindow) {
      if (isMuted) {
        iframe.contentWindow.postMessage('{"event":"command","func":"unMute","args":""}', '*');
      } else {
        iframe.contentWindow.postMessage('{"event":"command","func":"mute","args":""}', '*');
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
      <Button
        onClick={toggleMute}
        variant="secondary"
        size="icon"
        className="rounded-full shadow-lg bg-card/80 backdrop-blur-sm border-2 border-secondary hover:scale-110 transition-transform"
      >
        {isMuted ? (
          <VolumeX className="h-5 w-5 text-primary" />
        ) : (
          <Volume2 className="h-5 w-5 text-primary" />
        )}
      </Button>
      <iframe
        className="hidden"
        width="0"
        height="0"
        src="https://www.youtube.com/embed/TzFOk6aNmQk?autoplay=1&loop=1&playlist=TzFOk6aNmQk&enablejsapi=1&volume=20"
        title="Background Music"
        allow="autoplay; encrypted-media"
      />
    </div>
  );
};

export default MusicPlayer;
