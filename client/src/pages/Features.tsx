import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail, MessageSquare, Video, Calendar, Users, HardDrive,
  Sparkles, CheckSquare, FileText, Table2, StickyNote,
  Check, X, ChevronRight, ArrowRight,
  Shield, Globe, Brain, Lock, Database
} from "lucide-react";
import ArabicText from "@/components/ArabicText";

type TabId = "all" | "communication" | "productivity" | "ai" | "security";

const tabs: { id: TabId; label: string; ar: string }[] = [
  { id: "all", label: "All Products", ar: "الكل" },
  { id: "communication", label: "Communication", ar: "التواصل" },
  { id: "productivity", label: "Productivity", ar: "الإنتاجية" },
  { id: "ai", label: "AI", ar: "الذكاء الاصطناعي" },
  { id: "security", label: "Security", ar: "الأمان" },
];

const products = [
  {
    icon: <Mail className="h-7 w-7" />,
    color: "#1A73E8",
    bg: "#EBF3FE",
    en: "Mail",
    ar: "بريد",
    category: "communication" as TabId,
    desc: "A full-featured email client built for teams in the Arab world.",
    features: [
      "Custom @yourdomain.com addresses for the whole team",
      "AI Murshid auto-composes replies in Arabic or English",
      "Unified inbox merging multiple accounts in one view",
      "Smart filters, labels, and priority inbox",
      "Snooze, schedule send, and undo send",
    ],
  },
  {
    icon: <MessageSquare className="h-7 w-7" />,
    color: "#34A853",
    bg: "#E8F5EC",
    en: "Chat · Kalam",
    ar: "كلام",
    category: "communication" as TabId,
    desc: "Real-time team messaging built for Arabic-speaking workplaces.",
    features: [
      "Channels, direct messages, and group threads",
      "Full RTL typing — Arabic and Urdu feel native",
      "Voice notes and in-line audio messages",
      "AI thread summaries — catch up on 200 messages in 3 lines",
      "File sharing, @mentions, and emoji reactions",
    ],
  },
  {
    icon: <Video className="h-7 w-7" />,
    color: "#EA4335",
    bg: "#FDEEEC",
    en: "Meetings · Majlis",
    ar: "مجلس",
    category: "communication" as TabId,
    desc: "HD video conferencing with AI transcription in Arabic and English.",
    features: [
      "HD 1080p video — no app download required",
      "AI live transcription in Arabic, Urdu, and English",
      "Auto-generated meeting summaries and action items",
      "Screen sharing, whiteboard, and breakout rooms",
      "Cloud recording with searchable transcripts",
    ],
  },
  {
    icon: <Calendar className="h-7 w-7" />,
    color: "#FBBC04",
    bg: "#FEF8E6",
    en: "Calendar · Maweed",
    ar: "موعد",
    category: "productivity" as TabId,
    desc: "Smart calendar with Hijri + Gregorian dual display and AI scheduling.",
    features: [
      "Hijri and Gregorian calendars side by side",
      "AI smart scheduling around your priorities",
      "Team availability view for instant meeting booking",
      "Booking page links — share your free slots publicly",
      "Prayer time overlays for Gulf and South Asia regions",
    ],
  },
  {
    icon: <Users className="h-7 w-7" />,
    color: "#0EA5E9",
    bg: "#E0F5FE",
    en: "People · Daira",
    ar: "دائرة",
    category: "productivity" as TabId,
    desc: "Contacts, directory, and org chart for your entire organization.",
    features: [
      "Company-wide org directory with photos and roles",
      "Smart contact enrichment from email and calendar",
      "Org chart builder with drag-and-drop structure",
      "SCIM provisioning for enterprise SSO sync",
      "Arabic name support with dual-script search",
    ],
  },
  {
    icon: <HardDrive className="h-7 w-7" />,
    color: "#10B981",
    bg: "#E6FAF4",
    en: "Drive · Amana",
    ar: "أمانة",
    category: "security" as TabId,
    desc: "Secure cloud storage with end-to-end encryption and regional servers.",
    features: [
      "End-to-end encrypted storage in UAE and Pakistan DCs",
      "Real-time collaboration on files and folders",
      "Granular sharing: view / comment / edit permissions",
      "Version history with 180-day recovery",
      "Desktop sync client for Windows, Mac, and Linux",
    ],
  },
  {
    icon: <Sparkles className="h-7 w-7" />,
    color: "#8B5CF6",
    bg: "#F2EEFF",
    en: "AI · Murshid",
    ar: "مرشد",
    category: "ai" as TabId,
    desc: "Your AI companion across every Haala product — in Arabic, Urdu, and English.",
    features: [
      "Context-aware AI that understands your entire workspace",
      "Composes emails, docs, and chats in Arabic or English",
      "Meeting summaries, smart scheduling, formula generation",
      "Works across Mail, Chat, Docs, Sheets, and Meetings",
      "On-device mode available for maximum data privacy",
    ],
  },
  {
    icon: <CheckSquare className="h-7 w-7" />,
    color: "#F59E0B",
    bg: "#FEF3E2",
    en: "Tasks · Injaaz",
    ar: "إنجاز",
    category: "productivity" as TabId,
    desc: "Project management with Kanban, Gantt, and AI task prioritization.",
    features: [
      "Kanban, list, and Gantt views — switch any time",
      "AI task decomposer breaks big goals into steps",
      "Sub-tasks, due dates, priorities, and file attachments",
      "Project templates for common Arabic business workflows",
      "Time tracking and progress reports",
    ],
  },
  {
    icon: <FileText className="h-7 w-7" />,
    color: "#1A73E8",
    bg: "#EBF3FE",
    en: "Docs · Kitaab",
    ar: "كتاب",
    category: "productivity" as TabId,
    desc: "Collaborative documents with real-time co-editing and AI writing assistance.",
    features: [
      "Real-time co-editing with presence indicators",
      "AI writing assistant in Arabic and English",
      "Complete RTL paragraph and mixed-direction support",
      "Version history, comments, and tracked changes",
      "Export to PDF, Word (.docx), and Markdown",
    ],
  },
  {
    icon: <Table2 className="h-7 w-7" />,
    color: "#34A853",
    bg: "#E8F5EC",
    en: "Sheets · Hisaab",
    ar: "حساب",
    category: "productivity" as TabId,
    desc: "Spreadsheets with Excel-compatible formulas and an AI formula generator.",
    features: [
      "450+ Excel-compatible formulas and functions",
      "AI formula generator — describe what you need in Arabic",
      "Pivot tables, charts, and conditional formatting",
      "Live data connections to external APIs",
      "Import/export .xlsx, .csv, Google Sheets",
    ],
  },
  {
    icon: <StickyNote className="h-7 w-7" />,
    color: "#EA4335",
    bg: "#FDEEEC",
    en: "Notes · Khawatir",
    ar: "خواطر",
    category: "productivity" as TabId,
    desc: "Personal notes and team knowledge base with powerful search.",
    features: [
      "Rich text notes with embedded media and tables",
      "Team wiki and knowledge base with nested pages",
      "AI note summarization and Q&A on your notes",
      "Tags, backlinks, and graph view",
      "Offline access on mobile and desktop",
    ],
  },
];

const aiFeatures = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Auto-Compose Email",
    ar: "كتابة البريد تلقائياً",
    desc: "Murshid drafts entire email replies from a few keywords — in Arabic, Urdu, or English. Matches your tone and adapts to the recipient's language.",
  },
  {
    icon: <Video className="h-6 w-6" />,
    title: "Meeting Summaries",
    ar: "ملخصات الاجتماعات",
    desc: "Every Majlis meeting gets an AI-generated summary with key decisions, action items, and owners — available in Arabic within minutes of the call ending.",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Document Generation",
    ar: "إنشاء المستندات",
    desc: "Turn a brief prompt into a full proposal, report, or business plan — fully formatted, structured, and in your brand voice.",
  },
  {
    icon: <Table2 className="h-6 w-6" />,
    title: "Formula AI for Sheets",
    ar: "الذكاء الاصطناعي للأرقام",
    desc: "Describe your formula in natural Arabic or English and Murshid writes it. No more searching Stack Overflow for Excel syntax.",
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Smart Scheduling",
    ar: "جدولة ذكية",
    desc: "Tell Murshid who you need to meet and when you prefer — it finds the best slot, books the room, and sends the invite automatically.",
  },
];

type ComparisonValue = boolean | string;

const comparisonRows: { feature: string; haala: ComparisonValue; google: ComparisonValue; microsoft: ComparisonValue }[] = [
  { feature: "Price per user/month", haala: "$3 – $8", google: "$6 – $18", microsoft: "$6 – $22" },
  { feature: "Native Arabic RTL UI", haala: true, google: "Partial", microsoft: "Partial" },
  { feature: "Regional pricing (SAR/PKR)", haala: true, google: false, microsoft: false },
  { feature: "AI assistant included", haala: "All plans", google: "Gemini add-on $$$", microsoft: "Copilot add-on $$$" },
  { feature: "Data residency (UAE/PK)", haala: true, google: false, microsoft: "Limited" },
  { feature: "Free tier (real features)", haala: true, google: false, microsoft: false },
  { feature: "On-premise deployment", haala: true, google: false, microsoft: "Limited" },
  { feature: "Hijri calendar", haala: true, google: false, microsoft: false },
  { feature: "Arabic email addresses", haala: true, google: false, microsoft: false },
];

const renderCell = (val: ComparisonValue) => {
  if (val === true) return <Check className="h-5 w-5 text-[#34A853] mx-auto" />;
  if (val === false) return <X className="h-5 w-5 text-gray-300 mx-auto" />;
  return <span className="text-sm text-gray-600">{val}</span>;
};

const FeaturesPage = () => {
  const [activeTab, setActiveTab] = useState<TabId>("all");

  const filtered =
    activeTab === "all"
      ? products
      : products.filter((p) => p.category === activeTab);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 lg:py-28 text-center bg-gradient-to-b from-blue-50/60 to-white">
        <div className="container mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A73E8]/10 text-[#1A73E8] text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            11 products. One platform.
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0D1B2A] leading-tight mb-4">
            Everything your team needs
          </h1>
          <p className="text-2xl font-medium mb-4">
            <ArabicText className="text-[#1A73E8]">كل ما يحتاجه فريقك</ArabicText>
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
            Haala replaces Google Workspace and Microsoft 365 with 11 deeply integrated products —
            built from the ground up for Arabic and Urdu-speaking teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 bg-[#1A73E8] text-white px-8 py-3.5 rounded-full font-medium hover:bg-[#1557B0] transition-colors"
            >
              Start for free <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 border border-gray-200 text-[#0D1B2A] px-8 py-3.5 rounded-full font-medium hover:bg-gray-50 transition-colors"
            >
              View pricing <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Tab Switcher + Product Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-[#1A73E8] text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab.label}{" "}
                <ArabicText className="text-xs opacity-70 ml-1">{tab.ar}</ArabicText>
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <div
                key={product.en}
                className="border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-gray-200 transition-all"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: product.bg, color: product.color }}
                >
                  {product.icon}
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <h3 className="text-lg font-bold text-[#0D1B2A]">{product.en}</h3>
                  <ArabicText className="text-base text-gray-400 font-medium">{product.ar}</ArabicText>
                </div>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{product.desc}</p>
                <ul className="space-y-2">
                  {product.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check
                        className="h-4 w-4 mt-0.5 shrink-0"
                        style={{ color: product.color }}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Everywhere Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-purple-50/40 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] text-sm font-medium mb-5">
              <Sparkles className="h-4 w-4" />
              AI Everywhere
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] mb-3">
              Murshid — your AI in every product
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              <ArabicText className="text-[#8B5CF6] font-medium">مرشد</ArabicText>
              {" "}is not a chatbot. It's an AI layer woven into every workflow — understanding your context, your language, and your team.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiFeatures.map((feat) => (
              <div
                key={feat.title}
                className="bg-white border border-purple-100 rounded-2xl p-6 hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center text-[#8B5CF6] mb-4">
                  {feat.icon}
                </div>
                <h3 className="font-bold text-[#0D1B2A] mb-1">{feat.title}</h3>
                <ArabicText className="text-xs text-[#8B5CF6] font-medium block mb-2">
                  {feat.ar}
                </ArabicText>
                <p className="text-sm text-gray-500 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
            <div className="bg-[#8B5CF6] text-white rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <Brain className="h-8 w-8 mb-4 opacity-80" />
                <h3 className="font-bold text-lg mb-2">Works in Arabic, Urdu &amp; English</h3>
                <p className="text-purple-100 text-sm leading-relaxed">
                  Murshid is fluent in Arabic, Urdu, and English — and can seamlessly switch
                  between them in the same conversation.
                </p>
              </div>
              <Link
                to="/signup"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white"
              >
                Try Murshid free <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] mb-3">
              How Haala stacks up
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              A fair, honest comparison with Google Workspace and Microsoft 365 — from the
              perspective of teams in our region.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full bg-white">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-6 py-5 text-sm font-semibold text-[#0D1B2A] w-2/5">
                    Feature
                  </th>
                  <th className="px-4 py-5 text-center w-1/5">
                    <div className="text-sm font-bold text-[#1A73E8]">Haala</div>
                    <ArabicText className="text-xs text-gray-400">هالة</ArabicText>
                  </th>
                  <th className="px-4 py-5 text-center w-1/5">
                    <div className="text-sm font-semibold text-gray-600">Google Workspace</div>
                  </th>
                  <th className="px-4 py-5 text-center w-1/5">
                    <div className="text-sm font-semibold text-gray-600">Microsoft 365</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-gray-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-[#0D1B2A]">
                      {row.feature}
                    </td>
                    <td className="px-4 py-4 text-center">{renderCell(row.haala)}</td>
                    <td className="px-4 py-4 text-center">{renderCell(row.google)}</td>
                    <td className="px-4 py-4 text-center">{renderCell(row.microsoft)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">
            Prices as of Q1 2026. Comparison reflects mid-tier plan features.
          </p>
        </div>
      </section>

      {/* Security Strip */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Shield className="h-6 w-6" />,
                title: "SOC 2 Type II",
                desc: "Annual third-party security audits.",
              },
              {
                icon: <Lock className="h-6 w-6" />,
                title: "End-to-End Encryption",
                desc: "All data encrypted at rest and in transit.",
              },
              {
                icon: <Database className="h-6 w-6" />,
                title: "Data Residency",
                desc: "Servers in UAE and Pakistan — your data stays in your region.",
              },
              {
                icon: <Globe className="h-6 w-6" />,
                title: "PDPL Compliant",
                desc: "Meets Saudi Arabia's Personal Data Protection Law.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 items-start bg-white p-5 rounded-xl border border-gray-100"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0D1B2A]/5 flex items-center justify-center text-[#0D1B2A] shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="font-semibold text-[#0D1B2A] text-sm mb-1">{item.title}</div>
                  <div className="text-xs text-gray-500 leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="bg-[#0D1B2A] rounded-3xl p-10 sm:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A73E8]/20 to-[#8B5CF6]/20 pointer-events-none" />
            <div className="relative">
              <Sparkles className="h-10 w-10 text-[#FBBC04] mx-auto mb-5" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                Ready to switch to Haala?
              </h2>
              <ArabicText className="text-xl text-blue-300 block mb-4">
                هل أنت مستعد للانتقال إلى هالة؟
              </ArabicText>
              <p className="text-gray-400 max-w-lg mx-auto mb-8">
                Free for individuals. Affordable for teams. Enterprise-grade for everyone.
                Your first month is on us — no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2 bg-[#1A73E8] text-white px-8 py-3.5 rounded-full font-medium hover:bg-[#1557B0] transition-colors"
                >
                  Start free today <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/5 transition-colors"
                >
                  See all plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
