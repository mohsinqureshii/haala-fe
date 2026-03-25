import { useState } from "react";
import {
  Pencil,
  Inbox,
  Star,
  Send,
  FileText,
  AlertOctagon,
  Trash2,
  Tag,
  ChevronDown,
  Search,
  RefreshCw,
  MoreHorizontal,
  CheckSquare,
  ArrowLeft,
  Reply,
  Forward,
  X,
  Paperclip,
  Smile,
  Minimize2,
  Sparkles,
} from "lucide-react";

interface Email {
  id: number;
  from: string;
  initials: string;
  avatarColor: string;
  subject: string;
  snippet: string;
  time: string;
  read: boolean;
  starred: boolean;
  body: string;
}

const EMAILS: Email[] = [
  {
    id: 1,
    from: "Ahmed Al-Rashid",
    initials: "AA",
    avatarColor: "#1A73E8",
    subject: "Q4 Board Meeting Agenda",
    snippet: "Please review the attached agenda for our upcoming Q4 board meeting. We will be covering financial results, strategic initiatives...",
    time: "10:24 AM",
    read: false,
    starred: false,
    body: `Hi team,

Please review the attached agenda for our upcoming Q4 board meeting scheduled for Thursday, March 28th at 2:00 PM GST.

We will be covering the following topics:
1. Q4 Financial Results & Year-End Summary
2. Strategic Initiatives for 2026
3. Product Roadmap Review — Haala Platform
4. Budget Allocation for Q1 2026
5. Any Other Business

Please come prepared with your departmental updates. Let me know if you have any items to add to the agenda by EOD Wednesday.

Best regards,
Ahmed Al-Rashid
Chief Executive Officer, TechBanq`,
  },
  {
    id: 2,
    from: "Fatima Malik",
    initials: "FM",
    avatarColor: "#0F9D58",
    subject: "Re: Design Review",
    snippet: "Thanks for sharing the mockups! I've gone through them and have a few comments. The color palette looks great but I think we should...",
    time: "9:51 AM",
    read: true,
    starred: true,
    body: `Hi,

Thanks for sharing the mockups! I've gone through them and have a few comments.

The color palette looks great but I think we should reconsider the font size for mobile views — currently at 14px it might be too small for our Arabic-speaking users who prefer slightly larger text.

Also, the sidebar collapse animation feels a bit slow. Can we reduce it to 150ms?

Other than that, everything looks polished. Great work on the dashboard layout!

Fatima`,
  },
  {
    id: 3,
    from: "TechBanq Team",
    initials: "TB",
    avatarColor: "#F4B400",
    subject: "Your monthly summary — February 2026",
    snippet: "Here's your activity summary for February. You sent 142 emails, attended 18 meetings, and completed 34 tasks this month...",
    time: "8:30 AM",
    read: false,
    starred: false,
    body: `Your February 2026 Summary

Here's what you accomplished this month:

Emails: 142 sent, 287 received
Meetings: 18 attended, 4h 20m average per week
Tasks: 34 completed, 7 pending
Chat Messages: 1,204 sent across 12 channels

Top collaborators this month:
• Fatima Malik — 47 interactions
• Omar Farooq — 31 interactions
• Sara Khan — 28 interactions

Storage used: 4.2 GB of 50 GB

Keep up the great work!
The TechBanq Team`,
  },
  {
    id: 4,
    from: "Sara Khan",
    initials: "SK",
    avatarColor: "#DB4437",
    subject: "Partnership Proposal — NEOM Project",
    snippet: "I wanted to follow up on our conversation from last week regarding the NEOM smart city integration. We have a compelling proposal...",
    time: "Yesterday",
    read: false,
    starred: true,
    body: `Dear team,

I wanted to follow up on our conversation from last week regarding the NEOM smart city integration project.

We have a compelling proposal ready that outlines how Haala's suite of tools can be integrated into NEOM's enterprise communication infrastructure. The key highlights are:

• Deployment of Haala Email & Chat for 12,000+ employees
• Arabic-first UI with RTL support across all modules
• On-premise deployment option for data sovereignty compliance
• Custom Murshid AI training on industry-specific Arabic corpus

The total contract value is estimated at SAR 8.4M over 3 years.

I'd like to schedule a call this week to walk you through the full proposal. Please let me know your availability.

Best,
Sara Khan
Enterprise Partnerships`,
  },
  {
    id: 5,
    from: "Haala Team",
    initials: "HT",
    avatarColor: "#1A73E8",
    subject: "New feature: Murshid AI suggestions",
    snippet: "We've just shipped Murshid AI email suggestions. As you type, Murshid will suggest completions, detect tone, and flag potential issues...",
    time: "Yesterday",
    read: true,
    starred: false,
    body: `Hi there,

We've just shipped a major update to your Haala inbox: Murshid AI email suggestions.

What's new:
- Smart Compose — Murshid completes your sentences as you type
- Tone Detector — flags emails that might come across as too blunt
- Auto-translate — writes in Arabic, sends in English (or vice versa)
- Priority Tagging — Murshid marks emails that need urgent replies

To enable: go to Settings > Murshid AI > Email Suggestions.

As always, your data never leaves your workspace. Murshid runs entirely within your TechBanq environment.

The Haala Team`,
  },
  {
    id: 6,
    from: "Omar Farooq",
    initials: "OF",
    avatarColor: "#9C27B0",
    subject: "Invoice #2041 for services rendered",
    snippet: "Please find attached Invoice #2041 for UI/UX consulting services rendered during February 2026. Total amount due: SAR 18,500...",
    time: "Mar 23",
    read: false,
    starred: false,
    body: `Hi,

Please find attached Invoice #2041 for UI/UX consulting services rendered during February 2026.

Invoice Details:
• Invoice #: 2041
• Date: March 23, 2026
• Due Date: April 6, 2026
• Services: UI/UX Consulting — Haala Dashboard Redesign
• Hours: 37 hours @ SAR 500/hr
• Total: SAR 18,500

Payment can be made via bank transfer to the account details on the invoice. Please confirm receipt and expected payment date.

Thank you for the continued partnership.

Omar Farooq
Freelance UI/UX Designer`,
  },
  {
    id: 7,
    from: "Layla Hassan",
    initials: "LH",
    avatarColor: "#00ACC1",
    subject: "Team lunch Thursday?",
    snippet: "Hey everyone! Thinking of organizing a team lunch this Thursday at Nobu in DIFC. Let me know if you're in — trying to get a headcount by...",
    time: "Mar 22",
    read: true,
    starred: false,
    body: `Hey everyone!

Thinking of organizing a team lunch this Thursday at Nobu in DIFC. Let me know if you're in — trying to get a headcount by Tuesday so I can make a reservation.

We'd do 1:00 PM — 2:30 PM. The engineering sprint wraps up Thursday morning so it feels like a good way to celebrate!

RSVP in the thread below:
✓ I'm in
✗ Can't make it

Current count: Layla, Fatima, Omar

Hope to see you all there!
Layla`,
  },
  {
    id: 8,
    from: "Murshid AI",
    initials: "MA",
    avatarColor: "#1A73E8",
    subject: "3 tasks need your attention",
    snippet: "Good morning! I've identified 3 items in your workspace that need your attention today: 1) The NEOM proposal review is overdue...",
    time: "Mar 22",
    read: false,
    starred: false,
    body: `Good morning!

I've identified 3 items in your workspace that need your attention today:

Overdue (1):
• NEOM Partnership Proposal review — due Mar 22 (2 days overdue)

Due Today (1):
• Q4 Board Meeting slide deck — due Mar 25 at 5:00 PM

Coming Up (1):
• Invoice #2041 payment approval — due Apr 6

I also noticed you haven't replied to Sara Khan's email from March 21st. Would you like me to draft a response?

Have a productive day,
Murshid AI
Your Haala Assistant`,
  },
];

const FOLDERS = [
  { icon: Inbox, name: "Inbox", count: 12 },
  { icon: Star, name: "Starred", count: 0 },
  { icon: Send, name: "Sent", count: 0 },
  { icon: FileText, name: "Drafts", count: 3 },
  { icon: AlertOctagon, name: "Spam", count: 0 },
  { icon: Trash2, name: "Trash", count: 0 },
];

const LABELS = ["Work", "Finance", "Personal", "NEOM Project"];
const AI_FILTERS = ["Needs Reply", "Important", "Follow Up"];

export default function EmailPage() {
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);
  const [activeFolder, setActiveFolder] = useState("Inbox");
  const [emailList, setEmailList] = useState<Email[]>(EMAILS);
  const [composeOpen, setComposeOpen] = useState(false);
  const [composeTo, setComposeTo] = useState("");
  const [composeSubject, setComposeSubject] = useState("");
  const [composeBody, setComposeBody] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleStar = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setEmailList((prev) =>
      prev.map((em) => (em.id === id ? { ...em, starred: !em.starred } : em))
    );
  };

  const openEmail = (email: Email) => {
    setSelectedEmail(email);
    setEmailList((prev) =>
      prev.map((em) => (em.id === email.id ? { ...em, read: true } : em))
    );
  };

  const filteredEmails = emailList.filter(
    (em) =>
      em.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      em.from.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className="flex bg-white overflow-hidden"
      style={{ fontFamily: "'Google Sans', sans-serif", height: "calc(100vh - 64px)" }}
    >
      {/* Sidebar */}
      <aside className="w-60 flex-shrink-0 flex flex-col py-2" style={{ backgroundColor: "#F6F8FC" }}>
        <div className="px-3 mb-2">
          <button
            onClick={() => setComposeOpen(true)}
            className="flex items-center gap-3 bg-white hover:shadow-md transition-shadow px-5 py-3 rounded-2xl shadow-sm text-sm font-medium text-gray-700 w-full"
          >
            <Pencil size={18} className="text-gray-600" />
            Compose
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto">
          {FOLDERS.map((f) => {
            const Icon = f.icon;
            return (
              <button
                key={f.name}
                onClick={() => { setActiveFolder(f.name); setSelectedEmail(null); }}
                className={`flex items-center justify-between w-full px-4 py-1.5 text-sm rounded-r-full mr-3 transition-colors ${
                  activeFolder === f.name
                    ? "bg-blue-100 text-blue-800 font-semibold"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="flex items-center gap-3">
                  <Icon size={16} className={activeFolder === f.name ? "text-blue-700" : "text-gray-500"} />
                  {f.name}
                </span>
                {f.count > 0 && (
                  <span className="text-xs font-bold text-gray-700">{f.count}</span>
                )}
              </button>
            );
          })}

          <div className="px-4 mt-4 mb-1">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Labels</span>
          </div>
          {LABELS.map((label) => (
            <button
              key={label}
              className="flex items-center gap-3 w-full px-4 py-1.5 text-sm text-gray-700 hover:bg-gray-200 rounded-r-full transition-colors"
            >
              <Tag size={14} className="text-gray-400" />
              {label}
            </button>
          ))}

          <div className="px-4 mt-4 mb-1">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Murshid AI</span>
          </div>
          {AI_FILTERS.map((filter) => (
            <button
              key={filter}
              className="flex items-center gap-3 w-full px-4 py-1.5 text-sm text-gray-700 hover:bg-gray-200 rounded-r-full transition-colors"
            >
              <Sparkles size={14} className="text-blue-400" />
              {filter}
            </button>
          ))}
        </nav>

        <div className="px-4 py-3 border-t border-gray-200">
          <div className="text-xs text-gray-500 mb-1">4.2 GB of 50 GB used</div>
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div className="h-1 rounded-full" style={{ width: "8.4%", backgroundColor: "#1A73E8" }} />
          </div>
        </div>
      </aside>

      {/* Main Panel */}
      <main className="flex-1 flex flex-col overflow-hidden border-l border-gray-200">
        {/* Toolbar */}
        <div className="px-4 py-2 border-b border-gray-200 flex items-center gap-3 bg-white flex-shrink-0">
          <div className="flex-1 flex items-center bg-gray-100 hover:bg-gray-200 transition-colors rounded-full px-4 py-2 gap-2">
            <Search size={16} className="text-gray-500" />
            <input
              className="bg-transparent flex-1 text-sm text-gray-700 outline-none placeholder-gray-500"
              placeholder="Search mail"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <RefreshCw size={16} className="text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <MoreHorizontal size={16} className="text-gray-600" />
          </button>
          <button className="flex items-center gap-1 p-2 hover:bg-gray-100 rounded-full transition-colors text-sm text-gray-600">
            <CheckSquare size={16} />
            <ChevronDown size={14} />
          </button>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Email List */}
          <div
            className={`flex flex-col overflow-y-auto border-r border-gray-200 ${
              selectedEmail ? "w-80 flex-shrink-0" : "flex-1"
            }`}
          >
            {filteredEmails.map((email) => (
              <div
                key={email.id}
                onClick={() => openEmail(email)}
                className={`flex items-center gap-3 px-4 py-3 cursor-pointer border-b border-gray-100 transition-colors ${
                  selectedEmail?.id === email.id ? "bg-blue-50" : "bg-white hover:bg-gray-50"
                }`}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: email.avatarColor }}
                >
                  {email.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className={`text-sm truncate ${email.read ? "text-gray-600 font-normal" : "text-gray-900 font-semibold"}`}>
                      {email.from}
                    </span>
                    <span className="text-xs text-gray-400 flex-shrink-0 ml-2">{email.time}</span>
                  </div>
                  <div className={`text-sm truncate ${email.read ? "text-gray-500 font-normal" : "text-gray-800 font-medium"}`}>
                    {email.subject}
                  </div>
                  <div className="text-xs text-gray-400 truncate">{email.snippet}</div>
                </div>
                <button
                  onClick={(e) => toggleStar(email.id, e)}
                  className="flex-shrink-0 p-1 hover:bg-gray-100 rounded transition-colors"
                >
                  <Star
                    size={14}
                    className={email.starred ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                  />
                </button>
                {!email.read && (
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#1A73E8" }} />
                )}
              </div>
            ))}

            {filteredEmails.length === 0 && (
              <div className="flex-1 flex items-center justify-center text-gray-400 py-20">
                <div className="text-center">
                  <Inbox size={48} className="mx-auto mb-3 opacity-30" />
                  <p className="text-base">No emails found</p>
                </div>
              </div>
            )}
          </div>

          {/* Read Panel */}
          {selectedEmail && (
            <div className="flex-1 overflow-y-auto bg-white">
              <div className="px-8 py-6 max-w-3xl">
                <button
                  onClick={() => setSelectedEmail(null)}
                  className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 mb-4 transition-colors"
                >
                  <ArrowLeft size={16} />
                  Back
                </button>
                <h2 className="text-2xl font-normal text-gray-900 mb-4">{selectedEmail.subject}</h2>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ backgroundColor: selectedEmail.avatarColor }}
                  >
                    {selectedEmail.initials}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{selectedEmail.from}</div>
                    <div className="text-xs text-gray-500">to me · {selectedEmail.time}</div>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Star size={18} className={selectedEmail.starred ? "text-yellow-400 fill-yellow-400" : "text-gray-400"} />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <MoreHorizontal size={18} className="text-gray-400" />
                    </button>
                  </div>
                </div>
                <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line mb-8">
                  {selectedEmail.body}
                </div>
                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  <button className="flex items-center gap-2 px-5 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                    <Reply size={15} />
                    Reply
                  </button>
                  <button className="flex items-center gap-2 px-5 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                    <Forward size={15} />
                    Forward
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Compose Drawer */}
      {composeOpen && (
        <div className="fixed bottom-4 right-6 w-96 bg-white rounded-t-xl shadow-2xl border border-gray-200 z-50 flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 rounded-t-xl" style={{ backgroundColor: "#1f2937" }}>
            <span className="text-white text-sm font-medium">New Message</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setComposeOpen(false)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Minimize2 size={16} />
              </button>
              <button
                onClick={() => setComposeOpen(false)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <input
              className="px-4 py-2 text-sm border-b border-gray-200 outline-none placeholder-gray-400"
              placeholder="To"
              value={composeTo}
              onChange={(e) => setComposeTo(e.target.value)}
            />
            <input
              className="px-4 py-2 text-sm border-b border-gray-200 outline-none placeholder-gray-400"
              placeholder="Subject"
              value={composeSubject}
              onChange={(e) => setComposeSubject(e.target.value)}
            />
            <textarea
              className="px-4 py-3 text-sm outline-none resize-none placeholder-gray-400"
              placeholder="Compose email"
              rows={8}
              value={composeBody}
              onChange={(e) => setComposeBody(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
            <button
              className="px-5 py-2 rounded-full text-white text-sm font-medium"
              style={{ backgroundColor: "#1A73E8" }}
            >
              Send
            </button>
            <div className="flex items-center gap-3">
              <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
                <Smile size={18} className="text-gray-500" />
              </button>
              <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
                <Paperclip size={18} className="text-gray-500" />
              </button>
              <button
                onClick={() => setComposeOpen(false)}
                className="p-1.5 hover:bg-gray-100 rounded transition-colors"
              >
                <Trash2 size={18} className="text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
