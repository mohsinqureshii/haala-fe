import { useState } from "react";
import {
  Hash,
  Plus,
  ChevronDown,
  ChevronRight,
  Send,
  Smile,
  Paperclip,
  Search,
  Bell,
  Settings,
  MessageSquare,
  Sparkles,
  AtSign,
} from "lucide-react";

interface Message {
  id: number;
  author: string;
  initials: string;
  avatarColor: string;
  time: string;
  text: string;
  reactions: { emoji: string; count: number }[];
  isBot?: boolean;
}

interface Channel {
  name: string;
  description: string;
  unread?: number;
}

interface DM {
  name: string;
  initials: string;
  avatarColor: string;
  online: boolean;
  lastMessage: string;
}

const CHANNELS: Channel[] = [
  { name: "general", description: "Company-wide announcements and discussions", unread: 5 },
  { name: "engineering", description: "Technical discussions and code reviews" },
  { name: "design", description: "Design reviews, assets, and feedback", unread: 2 },
  { name: "random", description: "Non-work banter and water cooler chat" },
  { name: "announcements", description: "Important company announcements" },
];

const DMS: DM[] = [
  { name: "Fatima Malik", initials: "FM", avatarColor: "#0F9D58", online: true, lastMessage: "Looks great, will review tomorrow" },
  { name: "Omar Farooq", initials: "OF", avatarColor: "#9C27B0", online: true, lastMessage: "Invoice sent, thanks!" },
  { name: "Sara Khan", initials: "SK", avatarColor: "#DB4437", online: false, lastMessage: "Call scheduled for Friday" },
];

const MESSAGES_BY_CHANNEL: Record<string, Message[]> = {
  general: [
    {
      id: 1,
      author: "Ahmed Al-Rashid",
      initials: "AA",
      avatarColor: "#1A73E8",
      time: "9:02 AM",
      text: "Good morning team! Just a reminder that the Q4 board presentation is this Thursday at 2 PM. Please have your slides submitted to me by Wednesday EOD.",
      reactions: [{ emoji: "✅", count: 7 }, { emoji: "👍", count: 4 }],
    },
    {
      id: 2,
      author: "Fatima Malik",
      initials: "FM",
      avatarColor: "#0F9D58",
      time: "9:15 AM",
      text: "On it! The design deck is 80% done. Will have it ready by Tuesday evening. Also — the new Murshid AI suggestions feature just went live in staging. Has anyone tested it yet?",
      reactions: [{ emoji: "🚀", count: 5 }],
    },
    {
      id: 3,
      author: "Khalid Nasser",
      initials: "KN",
      avatarColor: "#F4B400",
      time: "9:23 AM",
      text: "I've been playing with Murshid AI suggestions for the last hour — honestly impressive. The Arabic auto-complete is really smooth. A few edge cases with formal Fusha but overall solid. PR is up for review: github.com/techbanq/haala/pull/387",
      reactions: [{ emoji: "👀", count: 3 }, { emoji: "❤️", count: 2 }],
    },
    {
      id: 4,
      author: "Murshid AI",
      initials: "MA",
      avatarColor: "#1A73E8",
      time: "9:24 AM",
      text: "Hi @Khalid — I noticed your PR has 3 open comments from the last review cycle that haven't been addressed. Would you like me to summarize them?",
      reactions: [{ emoji: "😂", count: 6 }],
      isBot: true,
    },
    {
      id: 5,
      author: "Layla Hassan",
      initials: "LH",
      avatarColor: "#00ACC1",
      time: "9:31 AM",
      text: "haha Murshid never lets anything slide! @Khalid those comments are from me — lmk when you've addressed them and I'll re-review right away.",
      reactions: [{ emoji: "😄", count: 4 }],
    },
    {
      id: 6,
      author: "Omar Farooq",
      initials: "OF",
      avatarColor: "#9C27B0",
      time: "10:05 AM",
      text: "Quick update on the NEOM proposal — Sara and I had a call with their procurement team this morning. They want a live demo of the full Haala suite next week. We need to prep a polished environment. Who owns the demo environment setup?",
      reactions: [{ emoji: "🙋", count: 2 }],
    },
    {
      id: 7,
      author: "Sara Khan",
      initials: "SK",
      avatarColor: "#DB4437",
      time: "10:18 AM",
      text: "I can coordinate the demo setup with the DevOps team. @Ahmed Al-Rashid should we have a pre-call on Monday to align on the demo script? The contract value is SAR 8.4M so we want to nail this.",
      reactions: [{ emoji: "💯", count: 8 }, { emoji: "🔥", count: 3 }],
    },
    {
      id: 8,
      author: "Ahmed Al-Rashid",
      initials: "AA",
      avatarColor: "#1A73E8",
      time: "10:22 AM",
      text: "Absolutely. I'll block 10 AM Monday on everyone's calendar. Sara, please add the NEOM deck to the Haala Docs shared folder by Sunday. Let's make sure the demo covers Email, Chat, Docs, Sheets, and of course Murshid AI — that's our differentiator.",
      reactions: [{ emoji: "✅", count: 6 }],
    },
  ],
  engineering: [
    {
      id: 1,
      author: "Khalid Nasser",
      initials: "KN",
      avatarColor: "#F4B400",
      time: "8:45 AM",
      text: "Pushed the Murshid AI autocomplete feature to staging. Build is green. Please review PR #387 when you get a chance.",
      reactions: [{ emoji: "🚀", count: 4 }],
    },
    {
      id: 2,
      author: "Layla Hassan",
      initials: "LH",
      avatarColor: "#00ACC1",
      time: "9:10 AM",
      text: "Will review after standup. Left a few comments on the PR already from last week — mostly around the debouncing logic for the suggestion API calls.",
      reactions: [],
    },
  ],
  design: [
    {
      id: 1,
      author: "Fatima Malik",
      initials: "FM",
      avatarColor: "#0F9D58",
      time: "Yesterday 4:30 PM",
      text: "Updated the Figma file with the new onboarding flow. Link: figma.com/haala-onboarding-v3. Please leave comments directly in Figma by Friday.",
      reactions: [{ emoji: "👀", count: 5 }],
    },
  ],
  random: [
    {
      id: 1,
      author: "Layla Hassan",
      initials: "LH",
      avatarColor: "#00ACC1",
      time: "Yesterday 1:15 PM",
      text: "Team lunch Thursday at Nobu DIFC? I sent an email but figured I'd ping here too. So far: me, Fatima, Omar are in!",
      reactions: [{ emoji: "🍱", count: 7 }, { emoji: "✅", count: 5 }],
    },
  ],
  announcements: [
    {
      id: 1,
      author: "Ahmed Al-Rashid",
      initials: "AA",
      avatarColor: "#1A73E8",
      time: "Mar 20",
      text: "Excited to announce that Haala has officially crossed 500 enterprise customers! Thank you to every member of this team for making this possible. We're just getting started.",
      reactions: [{ emoji: "🎉", count: 24 }, { emoji: "❤️", count: 18 }, { emoji: "🚀", count: 12 }],
    },
  ],
};

export default function ChatPage() {
  const [activeChannel, setActiveChannel] = useState("general");
  const [messageInput, setMessageInput] = useState("");
  const [channelsExpanded, setChannelsExpanded] = useState(true);
  const [dmsExpanded, setDmsExpanded] = useState(true);
  const [activeDM, setActiveDM] = useState<string | null>(null);

  const currentChannelInfo = CHANNELS.find((c) => c.name === activeChannel);
  const currentMessages = MESSAGES_BY_CHANNEL[activeChannel] || [];

  const handleSend = () => {
    if (messageInput.trim()) {
      setMessageInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const selectChannel = (name: string) => {
    setActiveChannel(name);
    setActiveDM(null);
  };

  const selectDM = (name: string) => {
    setActiveDM(name);
    setActiveChannel("");
  };

  const activeDMInfo = DMS.find((d) => d.name === activeDM);

  return (
    <div
      className="flex overflow-hidden"
      style={{ fontFamily: "'Google Sans', sans-serif", height: "calc(100vh - 64px)" }}
    >
      {/* Sidebar */}
      <aside
        className="w-64 flex-shrink-0 flex flex-col text-gray-300"
        style={{ backgroundColor: "#0D1B2A" }}
      >
        {/* Workspace header */}
        <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
          <div>
            <div className="font-semibold text-white text-sm">TechBanq</div>
            <div className="text-xs text-green-400 flex items-center gap-1 mt-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Active workspace
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-1.5 hover:bg-white/10 rounded transition-colors">
              <Bell size={15} className="text-gray-400" />
            </button>
            <button className="p-1.5 hover:bg-white/10 rounded transition-colors">
              <Settings size={15} className="text-gray-400" />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="px-3 py-2">
          <div className="flex items-center gap-2 bg-white/10 rounded px-3 py-1.5">
            <Search size={13} className="text-gray-400" />
            <span className="text-xs text-gray-400">Search TechBanq</span>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-1 py-1">
          {/* Channels */}
          <div className="mb-1">
            <button
              className="flex items-center gap-1 w-full px-3 py-1 text-xs font-semibold text-gray-400 hover:text-gray-200 uppercase tracking-wide transition-colors"
              onClick={() => setChannelsExpanded(!channelsExpanded)}
            >
              {channelsExpanded ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
              Channels
              <button className="ml-auto p-0.5 hover:bg-white/10 rounded transition-colors">
                <Plus size={12} />
              </button>
            </button>

            {channelsExpanded && CHANNELS.map((ch) => (
              <button
                key={ch.name}
                onClick={() => selectChannel(ch.name)}
                className={`flex items-center justify-between w-full px-3 py-1 rounded text-sm transition-colors ${
                  activeChannel === ch.name
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:bg-white/10 hover:text-gray-200"
                }`}
              >
                <span className="flex items-center gap-2">
                  <Hash size={14} />
                  {ch.name}
                </span>
                {ch.unread && (
                  <span className="bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 font-bold">
                    {ch.unread}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* DMs */}
          <div className="mt-2">
            <button
              className="flex items-center gap-1 w-full px-3 py-1 text-xs font-semibold text-gray-400 hover:text-gray-200 uppercase tracking-wide transition-colors"
              onClick={() => setDmsExpanded(!dmsExpanded)}
            >
              {dmsExpanded ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
              Direct Messages
            </button>

            {dmsExpanded && DMS.map((dm) => (
              <button
                key={dm.name}
                onClick={() => selectDM(dm.name)}
                className={`flex items-center gap-2 w-full px-3 py-1.5 rounded text-sm transition-colors ${
                  activeDM === dm.name
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:bg-white/10 hover:text-gray-200"
                }`}
              >
                <div className="relative flex-shrink-0">
                  <div
                    className="w-6 h-6 rounded-sm flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: dm.avatarColor }}
                  >
                    {dm.initials}
                  </div>
                  <div
                    className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 ${
                      dm.online ? "bg-green-400" : "bg-gray-500"
                    }`}
                    style={{ borderColor: "#0D1B2A" }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="truncate text-xs font-medium">{dm.name}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Murshid AI */}
          <div className="mt-3 mx-2 p-2 rounded-lg bg-blue-900/40 border border-blue-700/30">
            <div className="flex items-center gap-2 text-blue-300 text-xs font-medium mb-1">
              <Sparkles size={12} />
              Murshid AI
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">AI assistant ready. Ask anything about your workspace.</p>
          </div>
        </nav>

        {/* User */}
        <div className="px-3 py-3 border-t border-white/10 flex items-center gap-2">
          <div className="relative">
            <div
              className="w-8 h-8 rounded-sm flex items-center justify-center text-white text-xs font-bold"
              style={{ backgroundColor: "#1A73E8" }}
            >
              ME
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-400 border-2" style={{ borderColor: "#0D1B2A" }} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-medium text-white truncate">You</div>
            <div className="text-xs text-green-400">Active</div>
          </div>
          <button className="p-1 hover:bg-white/10 rounded transition-colors">
            <Settings size={14} className="text-gray-400" />
          </button>
        </div>
      </aside>

      {/* Main chat area */}
      <main className="flex-1 flex flex-col overflow-hidden bg-white">
        {/* Channel header */}
        <div className="px-6 py-3 border-b border-gray-200 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2">
            {activeChannel ? (
              <>
                <Hash size={18} className="text-gray-500" />
                <span className="font-semibold text-gray-900">{activeChannel}</span>
                {currentChannelInfo && (
                  <span className="text-sm text-gray-400 hidden md:block">
                    — {currentChannelInfo.description}
                  </span>
                )}
              </>
            ) : (
              <>
                <MessageSquare size={18} className="text-gray-500" />
                <span className="font-semibold text-gray-900">{activeDM}</span>
                {activeDMInfo && (
                  <div className={`w-2 h-2 rounded-full ml-1 ${activeDMInfo.online ? "bg-green-400" : "bg-gray-400"}`} />
                )}
              </>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded transition-colors">
              <Search size={16} className="text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded transition-colors">
              <AtSign size={16} className="text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded transition-colors">
              <Bell size={16} className="text-gray-500" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
          {currentMessages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <MessageSquare size={48} className="mb-3 opacity-30" />
              <p className="text-base">No messages yet</p>
              <p className="text-sm mt-1">Be the first to say something!</p>
            </div>
          )}

          {currentMessages.map((msg) => (
            <div key={msg.id} className="flex items-start gap-3 group">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5"
                style={{ backgroundColor: msg.avatarColor }}
              >
                {msg.initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-semibold text-sm text-gray-900">{msg.author}</span>
                  {msg.isBot && (
                    <span className="text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded font-medium">APP</span>
                  )}
                  <span className="text-xs text-gray-400">{msg.time}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{msg.text}</p>
                {msg.reactions.length > 0 && (
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    {msg.reactions.map((r, idx) => (
                      <button
                        key={idx}
                        className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 px-2 py-0.5 rounded-full text-xs transition-colors border border-gray-200"
                      >
                        <span>{r.emoji}</span>
                        <span className="text-gray-600 font-medium">{r.count}</span>
                      </button>
                    ))}
                    <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-100 rounded-full transition-all">
                      <Smile size={14} className="text-gray-400" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Message input */}
        <div className="px-6 py-4 border-t border-gray-200 flex-shrink-0">
          <div className="flex items-end gap-3 border border-gray-300 rounded-xl px-4 py-3 focus-within:border-blue-400 transition-colors bg-white">
            <textarea
              className="flex-1 text-sm text-gray-700 outline-none resize-none placeholder-gray-400 max-h-32"
              placeholder={activeChannel ? `Message #${activeChannel}` : `Message ${activeDM}`}
              rows={1}
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <div className="flex items-center gap-2 flex-shrink-0 pb-0.5">
              <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                <Smile size={18} className="text-gray-400" />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                <Paperclip size={18} className="text-gray-400" />
              </button>
              <button
                onClick={handleSend}
                className="p-1.5 rounded-lg transition-colors"
                style={{ backgroundColor: messageInput.trim() ? "#1A73E8" : "#E8F0FE" }}
              >
                <Send size={15} className={messageInput.trim() ? "text-white" : "text-blue-300"} />
              </button>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-1.5 ml-1">
            <kbd className="bg-gray-100 px-1 rounded text-xs">Enter</kbd> to send &nbsp;·&nbsp;
            <kbd className="bg-gray-100 px-1 rounded text-xs">Shift+Enter</kbd> for new line
          </p>
        </div>
      </main>
    </div>
  );
}
