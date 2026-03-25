import ProductPage from "@/components/ProductPage";
import { Video, Monitor, Mic, Users, Subtitles, Cloud } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.png";

const VideoPage = () => (
  <ProductPage
    badge="Video Meetings"
    title="Face-to-face,"
    highlight="from anywhere"
    description="Crystal-clear HD video conferencing with screen sharing, recording, live captions, and up to 500 participants. No downloads needed."
    image={heroImage}
    features={[
      { icon: <Video className="h-5 w-5" />, title: "HD Video & Audio", description: "Adaptive quality up to 1080p. AI noise cancellation and background blur for professional calls." },
      { icon: <Monitor className="h-5 w-5" />, title: "Screen Sharing", description: "Share your screen, a window, or a specific tab. Annotate in real time during presentations." },
      { icon: <Cloud className="h-5 w-5" />, title: "Cloud Recording", description: "Record meetings with one click. Auto-generated transcripts and AI meeting summaries." },
      { icon: <Subtitles className="h-5 w-5" />, title: "Live Captions", description: "Real-time captions in 20+ languages. Make every meeting accessible and inclusive." },
      { icon: <Users className="h-5 w-5" />, title: "Up to 500 Participants", description: "Host large meetings, webinars, and all-hands. Breakout rooms and Q&A built in." },
      { icon: <Mic className="h-5 w-5" />, title: "Integrated Chat", description: "In-meeting chat syncs to Messenger. Share files, links, and reactions without leaving the call." },
    ]}
  />
);

export default VideoPage;
