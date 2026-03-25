import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail, FileText, Table2, Calendar, Video, MessageSquare,
  StickyNote, CheckSquare, Sparkles, Bell, Search, ArrowRight,
  Home, Settings, User, Clock, Users, Zap, TrendingUp,
  MoreHorizontal, Plus, BookOpen, ChevronRight,
} from "lucide-react";
import ArabicText from "@/components/ArabicText";

const sidebarItems = [
  { icon: <Mail className="h-5 w-5" />, label: "Email", badge: "12", href: "/email" },
  { icon: <FileText className="h-5 w-5" />, label: "Docs", href: "/docs" },
  { icon: <Table2 className="h-5 w-5" />, label: "Sheets", href: "/sheets" },
  { icon: <Calendar className="h-5 w-5" />, label: "Calendar", badge: "3", href: "/calendar" },
  { icon: <Video className="h-5 w-5" />, label: "Meetings", href: "/meetings" },
  { icon: <MessageSquare className="h-5 w-5" />, label: "Chat", badge: "5", href: "/chat" },
  { icon: <StickyNote className="h-5 w-5" />, label: "Notes", href: "/notes" },
  { icon: <CheckSquare className="h-5 w-5" />, label: "Tasks", badge: "7", href: "/tasks" },
  { icon: <Sparkles className="h-5 w-5" />, label: "AI Hub", href: "/ai" },
];

const quickActions = [
  { icon: <Mail className="h-5 w-5" />, label: "New Email", href: "/email", color: "bg-blue-50 text-blue-600 border-blue-200" },
  { icon: <FileText className="h-5 w-5" />, label: "New Doc", href: "/docs", color: "bg-emerald-50 text-emerald-600 border-emerald-200" },
  { icon: <Video className="h-5 w-5" />, label: "Start Meeting", href: "/meetings", color: "bg-violet-50 text-violet-600 border-violet-200" },
  { icon: <CheckSquare className="h-5 w-5" />, label: "New Task", href: "/tasks", color: "bg-amber-50 text-amber-600 border-amber-200" },
  { icon: <Sparkles className="h-5 w-5" />, label: "Ask Murshid", href: "/ai", color: "bg-rose-50 text-rose-600 border-rose-200" },
];

const statsCards = [
  { icon: <Mail className="h-5 w-5" />, label: "Unread Emails", value: "12", sub: "3 need reply today", color: "text-blue-600", bg: "bg-blue-50", href: "/email" },
  { icon: <Calendar className="h-5 w-5" />, label: "Upcoming Meetings", value: "3", sub: "Next in 45 min", color: "text-violet-600", bg: "bg-violet-50", href: "/meetings" },
  { icon: <CheckSquare className="h-5 w-5" />, label: "Pending Tasks", value: "7", sub: "2 overdue", color: "text-amber-600", bg: "bg-amber-50", href: "/tasks" },
  { icon: <Zap className="h-5 w-5" />, label: "AI Actions Used", value: "142/500", sub: "Resets in 18 days", color: "text-emerald-600", bg: "bg-emerald-50", href: "/ai" },
];

const activityFeed = [
  {
    type: "email",
    icon: <Mail className="h-4 w-4" />,
    iconBg: "bg-blue-100 text-blue-600",
    actor: "Sara Chen",
    action: "sent you an email",
    subject: "Q3 Budget Review — Updated Numbers",
    time: "5 min ago",
  },
  {
    type: "doc",
    icon: <FileText className="h-4 w-4" />,
    iconBg: "bg-emerald-100 text-emerald-600",
    actor: "Murshid AI",
    action: "drafted a document",
    subject: "Partnership Proposal v2",
    time: "22 min ago",
  },
  {
    type: "meeting",
    icon: <Video className="h-4 w-4" />,
    iconBg: "bg-violet-100 text-violet-600",
    actor: "Khalid Al-Mansouri",
    action: "invited you to",
    subject: "Weekly Product Sync",
    time: "1 hr ago",
  },
  {
    type: "task",
    icon: <CheckSquare className="h-4 w-4" />,
    iconBg: "bg-amber-100 text-amber-600",
    actor: "You",
    action: "completed task",
    subject: "Finalize onboarding flow mockups",
    time: "2 hrs ago",
  },
  {
    type: "email",
    icon: <Mail className="h-4 w-4" />,
    iconBg: "bg-blue-100 text-blue-600",
    actor: "Marketing Team",
    action: "sent you an email",
    subject: "Campaign Launch Checklist — Action Required",
    time: "3 hrs ago",
  },
  {
    type: "doc",
    icon: <FileText className="h-4 w-4" />,
    iconBg: "bg-emerald-100 text-emerald-600",
    actor: "Amira Youssef",
    action: "commented on",
    subject: "Product Roadmap Q4 2024",
    time: "4 hrs ago",
  },
];

const upcomingEvents = [
  { time: "9:00 AM", title: "Daily Standup", attendees: ["Sara", "Khalid", "+3"], type: "video" },
  { time: "11:00 AM", title: "Design Review — Haala Dashboard", attendees: ["Amira", "You", "+2"], type: "video" },
  { time: "2:00 PM", title: "Client Call — Acme Corp", attendees: ["Mohammed", "Client Team"], type: "video" },
];

const recentDocs = [
  { icon: <FileText className="h-5 w-5 text-blue-600" />, name: "Partnership Proposal v2", edited: "2 min ago", bg: "bg-blue-50" },
  { icon: <Table2 className="h-5 w-5 text-emerald-600" />, name: "Q3 Budget Tracker", edited: "1 hr ago", bg: "bg-emerald-50" },
  { icon: <BookOpen className="h-5 w-5 text-violet-600" />, name: "Product Roadmap Q4", edited: "Yesterday", bg: "bg-violet-50" },
  { icon: <FileText className="h-5 w-5 text-amber-600" />, name: "Onboarding Guide v3", edited: "2 days ago", bg: "bg-amber-50" },
];

const murshidSuggestions = [
  {
    title: "Summarize 4 budget emails",
    desc: "You have 4 unread emails in the Q3 budget thread. Want a quick summary?",
    action: "Get summary",
    href: "/ai",
  },
  {
    title: "Draft meeting agenda",
    desc: "Tomorrow's client call has no agenda. Murshid can draft one in seconds.",
    action: "Draft agenda",
    href: "/ai",
  },
  {
    title: "Follow up on proposal",
    desc: "The partnership proposal hasn't been touched in 3 days. Send a follow-up?",
    action: "Compose reply",
    href: "/ai",
  },
];

const DashboardPage = () => {
  const [notifOpen, setNotifOpen] = useState(false);
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    ye,
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex min-h-[calc(100vh-4rem)] bg-gray-50">
      {/* Left Sidebar */}
      <aside className="hidden lg:flex w-[220px] bg-white border-r border-gray-200 flex-col py-4 shrink-0">
        <div className="px-4 mb-4">
          <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-500 cursor-pointer hover:bg-gray-100 transition-colors">
            <Search className="h-4 w-4 shrink-0" />
            <span className="flex-1">Search...</span>
            <span className="text-xs bg-gray-200 px-1.5 py-0.5 rounded">⌘K</span>
          </div>
        </div>

        <nav className="flex-1 px-2 space-y-0.5">
          <Link
            to="/dashboard"
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-50 text-[#1A73E8] text-sm font-semibold"
          >
            <Home className="h-5 w-5 shrink-0" />
            Home
          </Link>
          {sidebarItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <span className="flex items-center gap-3">
                {item.icon}
                {item.label}
              </span>
              {item.badge && (
                <span className="text-xs bg-red-500 text-white px-1.5 py-0.5 rounded-full font-medium leading-none">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        <div className="px-4 mt-4 border-t border-gray-200 pt-4 space-y-0.5">
          <Link
            to="/settings"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>
          <Link
            to="/settings"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            <User className="h-5 w-5" />
            Profile
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto min-w-0">
        {/* Top Bar */}
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <h1 className="text-xl font-bold text-[#0D1B2A] flex items-center gap-2 flex-wrap">
              Good morning, Mohammed
              <span role="img" aria-label="wave" className="text-xl">👋</span>
            </h1>
            <p className="text-sm text-gray-500">{today}</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="relative">
              <button
                onClick={() => setNotifOpen((v) => !v)}
                className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Notifications"
              >
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
              </button>
              {notifOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl border border-gray-200 shadow-xl z-20 overflow-hidden">
                  <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                    <span className="font-semibold text-sm text-[#0D1B2A]">Notifications</span>
                    <button className="text-xs text-[#1A73E8] font-medium hover:underline">Mark all read</button>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {[
                      { icon: <Mail className="h-4 w-4" />, bg: "bg-blue-100 text-blue-600", text: "Sara Chen sent you an email", time: "5 min ago" },
                      { icon: <Calendar className="h-4 w-4" />, bg: "bg-violet-100 text-violet-600", text: "Daily Standup starts in 15 min", time: "Just now" },
                      { icon: <CheckSquare className="h-4 w-4" />, bg: "bg-amber-100 text-amber-600", text: "Task overdue: API documentation", time: "1 hr ago" },
                    ].map((n, i) => (
                      <div key={i} className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer">
                        <div className={`w-7 h-7 rounded-full ${n.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                          {n.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-[#0D1B2A] leading-snug">{n.text}</p>
                          <p className="text-xs text-gray-400 mt-0.5">{n.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-2.5 border-t border-gray-100 text-center">
                    <button className="text-xs text-[#1A73E8] font-medium hover:underline">View all notifications</button>
                  </div>
                </div>
              )}
            </div>
            <Link
              to="/settings"
              className="w-9 h-9 rounded-full bg-[#1A73E8] flex items-center justify-center text-white font-semibold text-sm cursor-pointer hover:bg-blue-600 transition-colors"
              aria-label="User profile"
            >
              M
            </Link>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Quick Actions */}
          <section>
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Quick Actions</h2>
            <div className="flex flex-wrap gap-3">
              {quickActions.map((action) => (
                <Link
                  key={action.label}
                  to={action.href}
                  className={`flex items-center gap-2 px-4 py-2.5 border rounded-xl text-sm font-semibold hover:shadow-md hover:-translate-y-0.5 transition-all ${action.color}`}
                >
                  {action.icon}
                  {action.label}
                </Link>
              ))}
            </div>
          </section>

          {/* Stats Row */}
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {statsCards.map((card) => (
              <Link
                key={card.label}
                to={card.href}
                className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow group"
              >
                <div className={`w-10 h-10 rounded-lg ${card.bg} ${card.color} flex items-center justify-center mb-3`}>
                  {card.icon}
                </div>
                <p className="text-2xl font-bold text-[#0D1B2A] mb-0.5 group-hover:text-[#1A73E8] transition-colors">
                  {card.value}
                </p>
                <p className="text-xs font-medium text-gray-500">{card.label}</p>
                <p className="text-xs text-gray-400 mt-1">{card.sub}</p>
              </Link>
            ))}
          </section>

          {/* Middle Row: Activity Feed + Upcoming Events */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Activity Feed */}
            <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-[#0D1B2A] flex items-center gap-2 text-sm">
                  <TrendingUp className="h-4 w-4 text-[#1A73E8]" />
                  Recent Activity
                </h2>
                <button className="text-xs text-[#1A73E8] font-medium hover:underline">View all</button>
              </div>
              <div className="space-y-3">
                {activityFeed.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group cursor-pointer p-2 -mx-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <div
                      className={`w-8 h-8 rounded-full ${item.iconBg} flex items-center justify-center shrink-0`}
                    >
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-[#0D1B2A]">
                        <span className="font-semibold">{item.actor}</span>
                        {" "}{item.action}{" "}
                        <span className="text-[#1A73E8] group-hover:underline">{item.subject}</span>
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {item.time}
                      </p>
                    </div>
                    <MoreHorizontal className="h-4 w-4 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-[#0D1B2A] flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-[#1A73E8]" />
                  Today's Events
                </h2>
                <Link
                  to="/calendar"
                  className="text-xs text-[#1A73E8] font-medium flex items-center gap-1 hover:underline"
                >
                  Calendar <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
              <div className="space-y-3">
                {upcomingEvents.map((event, i) => (
                  <div
                    key={i}
                    className="flex gap-3 p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors cursor-pointer group"
                  >
                    <div className="text-center shrink-0 w-14">
                      <p className="text-xs font-semibold text-[#1A73E8] whitespace-nowrap">{event.time}</p>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-[#0D1B2A] truncate">{event.title}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Users className="h-3 w-3 text-gray-400 shrink-0" />
                        <p className="text-xs text-gray-500 truncate">{event.attendees.join(", ")}</p>
                      </div>
                    </div>
                    <Video className="h-4 w-4 text-violet-500 shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
                <Link
                  to="/meetings"
                  className="flex items-center justify-center gap-2 w-full py-2.5 border-2 border-dashed border-gray-200 rounded-lg text-sm text-gray-500 hover:border-[#1A73E8] hover:text-[#1A73E8] transition-colors"
                >
                  <Plus className="h-4 w-4" />
                  Schedule meeting
                </Link>
              </div>
            </div>
          </div>

          {/* Recent Documents */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Recent Documents</h2>
              <Link
                to="/docs"
                className="text-xs text-[#1A73E8] font-medium flex items-center gap-1 hover:underline"
              >
                All docs <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {recentDocs.map((doc, i) => (
                <Link
                  key={i}
                  to="/docs"
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all group"
                >
                  <div className={`w-10 h-10 rounded-lg ${doc.bg} flex items-center justify-center mb-3`}>
                    {doc.icon}
                  </div>
                  <p className="text-sm font-semibold text-[#0D1B2A] mb-1 line-clamp-2 group-hover:text-[#1A73E8] transition-colors">
                    {doc.name}
                  </p>
                  <p className="text-xs text-gray-400 flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    Edited {doc.edited}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* Murshid AI Suggestions Strip */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="h-4 w-4 text-[#1A73E8]" />
              <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                Murshid Suggests —{" "}
                <ArabicText className="text-xs text-gray-400 normal-case tracking-normal">مرشد يقترح</ArabicText>
              </h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {murshidSuggestions.map((s, i) => (
                <div
                  key={i}
                  className="bg-white border border-blue-100 rounded-xl p-4 hover:shadow-md hover:border-[#1A73E8] transition-all group"
                >
                  <div className="flex items-start gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-[#1A73E8] flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles className="h-3 w-3 text-white" />
                    </div>
                    <p className="text-sm font-semibold text-[#0D1B2A]">{s.title}</p>
                  </div>
                  <p className="text-xs text-gray-500 mb-3 leading-relaxed">{s.desc}</p>
                  <Link
                    to={s.href}
                    className="text-xs text-[#1A73E8] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    {s.action}
                    <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
