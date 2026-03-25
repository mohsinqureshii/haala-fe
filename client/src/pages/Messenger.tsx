import ProductPage from "@/components/ProductPage";
import { MessageCircle, Users, Hash, Search, Bell, Shield } from "lucide-react";
import messengerImage from "@/assets/messenger-product.png";

const MessengerPage = () => (
  <ProductPage
    badge="Messenger"
    title="Team communication,"
    highlight="reimagined"
    description="Real-time messaging with channels, threads, reactions, and rich media. Keep your team connected and productive."
    image={messengerImage}
    features={[
      { icon: <Hash className="h-5 w-5" />, title: "Channels & Groups", description: "Organize conversations by team, project, or topic. Public and private channels with granular permissions." },
      { icon: <MessageCircle className="h-5 w-5" />, title: "Threaded Replies", description: "Keep discussions organized with threaded conversations. Never lose context in busy channels." },
      { icon: <Users className="h-5 w-5" />, title: "Rich Presence", description: "See who's online, in a meeting, or focused. Smart status synced across all ASVAD apps." },
      { icon: <Search className="h-5 w-5" />, title: "Universal Search", description: "Find any message, file, or conversation instantly. AI-powered search across your entire workspace." },
      { icon: <Bell className="h-5 w-5" />, title: "Smart Notifications", description: "Priority inbox, custom notification rules, and DND scheduling. Stay focused on what matters." },
      { icon: <Shield className="h-5 w-5" />, title: "End-to-End Encryption", description: "Enterprise-grade security for all messages. Data retention policies and compliance tools built in." },
    ]}
  />
);

export default MessengerPage;
