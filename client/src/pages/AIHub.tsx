import { useState, useRef, useEffect } from "react";
import {
  Send,
  Plus,
  Sparkles,
  Copy,
  ThumbsUp,
  ThumbsDown,
  MoreHorizontal,
  ChevronDown,
  Mail,
  FileText,
  Calculator,
  Languages,
  CalendarDays,
  Loader2,
  User,
  Bot,
  Trash2,
  Clock,
  Zap,
} from "lucide-react";
import ArabicText from "@/components/ArabicText";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

interface Conversation {
  id: number;
  title: string;
  preview: string;
  time: string;
}

const PAST_CONVERSATIONS: Conversation[] = [
  { id: 1, title: "NEOM Proposal Draft", preview: "Help me write a proposal for NEOM...", time: "Just now" },
  { id: 2, title: "Q1 Sales Email", preview: "Write a follow-up email to Aramco...", time: "2h ago" },
  { id: 3, title: "Pricing Analysis", preview: "Compare our pricing to Google...", time: "Yesterday" },
  { id: 4, title: "Arabic Translation — TOS", preview: "Translate our terms of service...", time: "Mar 24" },
  { id: 5, title: "Sprint 12 Agenda", preview: "Generate a meeting agenda for...", time: "Mar 23" },
];

const INITIAL_MESSAGES: Message[] = [
  {
    id: 1,
    role: "user",
    content: "Help me write a proposal for NEOM. We want to pitch Haala as their enterprise productivity suite.",
    timestamp: "10:14 AM",
  },
  {
    id: 2,
    role: "assistant",
    content: `# Haala Enterprise Proposal — NEOM

## Executive Summary

NEOM represents one of the most ambitious urban development projects in human history — a city designed from the ground up with technology, sustainability, and human potential at its core. Haala is uniquely positioned to serve as NEOM's primary productivity and collaboration platform, offering a suite of tools built specifically for the Arab world and its digital future.

---

## Why Haala for NEOM?

### 1. Arabic-First by Design
Unlike Google Workspace or Microsoft 365, Haala was engineered from day one with Arabic as a first-class language. Every interface, every notification, every AI-generated suggestion is optimized for right-to-left typography, Gulf Arabic dialect processing, and Hijri calendar support — features that matter deeply to NEOM's workforce.

### 2. Data Sovereignty & Compliance
Haala operates data centers within the Kingdom of Saudi Arabia, ensuring full compliance with:
- **PDPL** (Personal Data Protection Law)
- **NCA** Essential Cybersecurity Controls
- **NDMO** data classification requirements

All NEOM data remains within Saudi borders, under Saudi jurisdiction — a critical requirement for a national giga-project.

### 3. Murshid AI — The Arab World's Productivity AI
Our proprietary AI model, Murshid, is fine-tuned on Gulf Arabic and trained on professional business contexts. It can:
- Draft proposals, reports, and contracts in Arabic and English
- Summarize meeting recordings with action items
- Generate complex Sheets formulas in natural language
- Translate documents between Arabic, English, and Urdu instantly

---

## Proposed Package: NEOM Enterprise Tier

| Feature | Included |
|---------|----------|
| Haala Docs, Sheets, Slides | ✅ Unlimited |
| Haala Meet (video, 500 participants) | ✅ |
| Murshid AI Pro | ✅ All users |
| 5 TB Drive storage per user | ✅ |
| PDPL-compliant data residency (KSA) | ✅ |
| 24/7 Arabic support SLA | ✅ |
| Custom SSO & SCIM provisioning | ✅ |
| Dedicated Customer Success Manager | ✅ |

**Investment:** Contact our enterprise team for volume pricing tailored to NEOM's headcount.

---

## Implementation Timeline

- **Week 1–2:** SSO integration, user provisioning, data migration from current tools
- **Week 3–4:** Arabic training sessions for all teams; Murshid AI onboarding
- **Week 5:** Full go-live with 24/7 support coverage

---

## Next Steps

We recommend scheduling a live demonstration at our Riyadh office, where our team can walk NEOM leadership through the full platform experience in Arabic. We are ready to sign an NDA and provide a 90-day pilot at no cost.

*Prepared by Murshid AI · مرشد — Haala's AI assistant*`,
    timestamp: "10:14 AM",
  },
];

type Model = "Murshid Lite" | "Murshid Pro";

const QUICK_ACTIONS = [
  { label: "Write email", icon: <Mail className="w-3.5 h-3.5" />, prompt: "Write a professional email to " },
  { label: "Summarize doc", icon: <FileText className="w-3.5 h-3.5" />, prompt: "Summarize the following document: " },
  { label: "Generate formula", icon: <Calculator className="w-3.5 h-3.5" />, prompt: "Generate a Sheets formula that " },
  { label: "Translate to Arabic", icon: <Languages className="w-3.5 h-3.5" />, prompt: "Translate the following to Arabic: " },
  { label: "Meeting agenda", icon: <CalendarDays className="w-3.5 h-3.5" />, prompt: "Create a meeting agenda for " },
];

const AIHub = () => {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState<Model>("Murshid Pro");
  const [showModelDropdown, setShowModelDropdown] = useState(false);
  const [activeConversation, setActiveConversation] = useState(1);
  const [tokenCount] = useState(1847);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim() || isLoading) return;
    const userMsg: Message = {
      id: Date.now(),
      role: "user",
      content: inputValue,
      timestamp: new Date().toLocaleTimeString("en-US", { ho, minute: "2-digit" }),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);
    setTimeout(() => {
      const aiMsg: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content: `I understand you're asking about "${userMsg.content.slice(0, 60)}${userMsg.content.length > 60 ? "..." : ""}". As Murshid, I'm here to help you with professional tasks across the Haala productivity suite.\n\nI can assist with:\n- **Drafting** documents, emails, and proposals in Arabic or English\n- **Analyzing** data from your Haala Sheets\n- **Summarizing** meetings from Haala Meet recordings\n- **Translating** content between Arabic, English, and Urdu\n\nPlease share more context and I'll provide a detailed response tailored to your needs.`,
        timestamp: new Date().toLocaleTimeString("en-US", { ho, minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsLoading(false);
    }, 1400);
  };

  const handleQuickAction = (prompt: string) => {
    setInputValue(prompt);
  };

  const renderMessageContent = (content: string) => {
    const lines = content.split("\n");
    return lines.map((line, i) => {
      if (line.startsWith("# ")) return <h1 key={i} className="text-lg font-bold text-gray-900 mt-3 mb-1.5">{line.slice(2)}</h1>;
      if (line.startsWith("## ")) return <h2 key={i} className="text-base font-semibold text-gray-800 mt-3 mb-1">{line.slice(3)}</h2>;
      if (line.startsWith("### ")) return <h3 key={i} className="text-sm font-semibold text-gray-700 mt-2 mb-0.5">{line.slice(4)}</h3>;
      if (line.startsWith("---")) return <hr key={i} className="border-gray-200 my-3" />;
      if (line.startsWith("- ")) {
        const text = line.slice(2).replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
        return <li key={i} className="text-sm text-gray-700 ml-4 list-disc py-0.5" dangerouslySetInnerHTML={{ __html: text }} />;
      }
      if (line.startsWith("|")) {
        const cells = line.split("|").filter(Boolean).map((c) => c.trim());
        if (line.includes("---")) return null;
        const isHeader = i > 0 && lines[i - 1] === "";
        return (
          <div key={i} className={`flex border-b border-gray-200 ${isHeader ? "bg-gray-50 font-medium" : ""}`}>
            {cells.map((cell, ci) => (
              <div key={ci} className="flex-1 text-xs text-gray-700 px-3 py-2 border-r border-gray-200 last:border-r-0">{cell}</div>
            ))}
          </div>
        );
      }
      if (line.startsWith("**") && line.endsWith("**")) {
        return <p key={i} className="text-sm font-semibold text-gray-800">{line.slice(2, -2)}</p>;
      }
      if (line.trim() === "") return <div key={i} className="h-1.5" />;
      const formatted = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\*(.*?)\*/g, "<em>$1</em>");
      return <p key={i} className="text-sm text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: formatted }} />;
    });
  };

  return (
    <div className="flex h-screen overflow-hidden" style={{ fontFamily: "'Google Sans', sans-serif" }}>
      {/* Left Sidebar */}
      <div className="w-64 bg-[#0D1B2A] flex flex-col overflow-hidden">
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1A73E8] to-purple-500 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Murshid · <ArabicText>مرشد</ArabicText></div>
              <div className="text-xs text-gray-400">Haala AI</div>
            </div>
          </div>
          <button
            onClick={() => { setMessages([]); setActiveConversation(0); }}
            className="w-full flex items-center gap-2 bg-[#1A73E8] text-white rounded-xl px-3 py-2.5 text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            New chat
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          <div className="text-xs text-gray-500 uppercase tracking-wide px-2 py-1 font-semibold">Recent</div>
          {PAST_CONVERSATIONS.map((conv) => (
            <button
              key={conv.id}
              onClick={() => { setActiveConversation(conv.id); if (conv.id === 1) setMessages(INITIAL_MESSAGES); }}
              className={`w-full text-left px-3 py-2.5 rounded-xl transition-colors group
                ${activeConversation === conv.id ? "bg-white/15 text-white" : "text-gray-400 hover:bg-white/10 hover:text-gray-200"}`}
            >
              <div className="text-sm font-medium truncate">{conv.title}</div>
              <div className="text-xs text-gray-500 truncate mt-0.5">{conv.preview}</div>
              <div className="text-xs text-gray-600 mt-0.5 flex items-center gap-1">
                <Clock className="w-3 h-3" />{conv.time}
              </div>
            </button>
          ))}
        </div>

        <div className="p-3 border-t border-white/10">
          <div className="flex items-center gap-2 px-2 py-2">
            <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white">AA</div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-medium text-gray-300 truncate">Ahmed Al-Rashid</div>
              <div className="text-xs text-gray-500">Free plan</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat */}
      <div className="flex-1 flex flex-col bg-white overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 bg-white">
          <div className="flex items-center gap-3">
            {/* Model selector */}
            <div className="relative">
              <button
                onClick={() => setShowModelDropdown(!showModelDropdown)}
                className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-xl text-sm font-medium text-gray-800 hover:bg-gray-200 transition-colors"
              >
                <Sparkles className="w-4 h-4 text-[#1A73E8]" />
                {selectedModel}
                <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
              </button>
              {showModelDropdown && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl border border-gray-200 shadow-xl z-20 overflow-hidden">
                  {(["Murshid Lite", "Murshid Pro"] as Model[]).map((model) => (
                    <button
                      key={model}
                      onClick={() => { setSelectedModel(model); setShowModelDropdown(false); }}
                      className={`w-full flex items-start gap-3 px-4 py-3 hover:bg-gray-50 text-left ${selectedModel === model ? "bg-blue-50" : ""}`}
                    >
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 shrink-0 ${model === "Murshid Pro" ? "bg-gradient-to-br from-[#1A73E8] to-purple-500" : "bg-gray-400"}`}>
                        <Zap className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">{model}</div>
                        <div className="text-xs text-gray-500">{model === "Murshid Pro" ? "Most capable, Arabic-optimized" : "Faster, great for simple tasks"}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <span className="text-sm text-gray-400">|</span>
            <span className="text-sm text-gray-600 font-medium">NEOM Proposal Draft</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">
              <Zap className="w-3 h-3 text-[#1A73E8]" />
              <span className="font-mono font-medium text-gray-700">{tokenCount.toLocaleString()}</span>
              <span className="text-gray-400">/ 8,192 tokens</span>
            </div>
            <button className="p-1.5 rounded-lg hover:bg-gray-100"><Trash2 className="w-4 h-4 text-gray-500" /></button>
            <button className="p-1.5 rounded-lg hover:bg-gray-100"><MoreHorizontal className="w-4 h-4 text-gray-500" /></button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1A73E8] to-purple-500 flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Murshid · <ArabicText>مرشد</ArabicText></h2>
              <p className="text-sm text-gray-500 max-w-sm">Your AI assistant for the Arab world. Ask me anything — proposals, emails, translations, formulas, and more.</p>
            </div>
          )}

          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-3 max-w-4xl mx-auto ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5
                ${msg.role === "user" ? "bg-blue-600" : "bg-gradient-to-br from-[#1A73E8] to-purple-500"}`}>
                {msg.role === "user" ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
              </div>
              <div className={`flex-1 ${msg.role === "user" ? "flex flex-col items-end" : ""}`}>
                <div className={`inline-block max-w-full rounded-2xl px-4 py-3
                  ${msg.role === "user"
                    ? "bg-[#1A73E8] text-white rounded-tr-sm"
                    : "bg-gray-50 border border-gray-200 rounded-tl-sm"
                  }`}>
                  {msg.role === "user" ? (
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                  ) : (
                    <div className="space-y-0.5 max-w-2xl">
                      {renderMessageContent(msg.content)}
                    </div>
                  )}
                </div>
                <div className={`flex items-center gap-2 mt-1.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                  <span className="text-xs text-gray-400">{msg.timestamp}</span>
                  {msg.role === "assistant" && (
                    <div className="flex gap-1">
                      <button className="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-600"><Copy className="w-3.5 h-3.5" /></button>
                      <button className="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-600"><ThumbsUp className="w-3.5 h-3.5" /></button>
                      <button className="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-600"><ThumbsDown className="w-3.5 h-3.5" /></button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3 max-w-4xl mx-auto">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1A73E8] to-purple-500 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-2">
                <Loader2 className="w-4 h-4 text-[#1A73E8] animate-spin" />
                <span className="text-sm text-gray-500">Murshid is thinking...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-200 px-4 py-4 bg-white">
          {/* Quick actions */}
          <div className="flex gap-2 mb-3 overflow-x-auto pb-1">
            {QUICK_ACTIONS.map((action) => (
              <button
                key={action.label}
                onClick={() => handleQuickAction(action.prompt)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-600 bg-gray-100 hover:bg-blue-100 hover:text-[#1A73E8] rounded-full transition-colors whitespace-nowrap font-medium"
              >
                {action.icon}
                {action.label}
              </button>
            ))}
          </div>

          {/* Input box */}
          <div className="flex items-end gap-3 bg-gray-50 border border-gray-300 rounded-2xl px-4 py-3 focus-within:border-[#1A73E8] focus-within:bg-white transition-colors">
            <textarea
              className="flex-1 bg-transparent text-sm text-gray-800 outline-none resize-none placeholder-gray-400 max-h-32"
              placeholder="Message Murshid..."
              rows={1}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
            <button
              onClick={handleSend}
              disabled={!inputValue.trim() || isLoading}
              className={`p-2 rounded-xl transition-colors shrink-0 ${
                inputValue.trim() && !isLoading
                  ? "bg-[#1A73E8] text-white hover:bg-blue-700"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-gray-400 text-center mt-2">
            Murshid can make mistakes. Verify important information. · <span className="text-[#1A73E8]">Haala Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIHub;
