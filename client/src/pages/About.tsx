import { Link } from "react-router-dom";
import {
  ArrowRight, Globe, Shield, Heart, Lightbulb,
  Users, Eye, Sparkles, MapPin, TrendingUp
} from "lucide-react";
import ArabicText from "@/components/ArabicText";

const timeline = [
  {
    year: "2022",
    title: "Founded in Lahore",
    desc: "Haala was founded in Lahore, Pakistan with a simple belief: teams in our region deserve a workspace platform built for them — not retrofitted from a Western product.",
    flag: "🇵🇰",
  },
  {
    year: "2023",
    title: "First 1,000 teams",
    desc: "We reached our first 1,000 active teams entirely through word of mouth. Mail, Chat, Docs, Calendar, and Meetings — all in one, with native Arabic and Urdu support.",
    flag: "🚀",
  },
  {
    year: "2024",
    title: "GCC Expansion",
    desc: "We opened our UAE data center and expanded into Saudi Arabia, UAE, and Bahrain. PDPL compliance and regional pricing made adoption in the Gulf instant.",
    flag: "🇦🇪",
  },
  {
    year: "2025",
    title: "100,000 users",
    desc: "Haala crossed 100,000 active users across 4 countries. We launched Murshid AI — the first Arabic-native AI assistant built into a full productivity suite.",
    flag: "⭐",
  },
  {
    year: "2026",
    title: "Enterprise Launch",
    desc: "We launched Haala Enterprise with on-premise deployment, SSO/SAML, SCIM, audit logs, and dedicated CSMs. SOC 2 Type II certified.",
    flag: "🏢",
  },
];

const values = [
  {
    icon: <Globe className="h-6 w-6" />,
    color: "#1A73E8",
    bg: "#EBF3FE",
    title: "Regional First",
    ar: "المنطقة أولاً",
    desc: "Every decision starts with: what do teams in Pakistan, Saudi Arabia, UAE, and Bahrain actually need? Not what's convenient for a Silicon Valley office.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    color: "#8B5CF6",
    bg: "#F2EEFF",
    title: "Arabic Native",
    ar: "عربية أصيلة",
    desc: "Arabic and Urdu support isn't a setting or add-on — it's built into the foundation of every product. RTL, Hijri calendar, Arabic names, Arabic AI.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    color: "#34A853",
    bg: "#E8F5EC",
    title: "Privacy by Design",
    ar: "الخصوصية من التصميم",
    desc: "Your data belongs to you. We never train AI models on your content. Enterprise customers can self-host everything in their own infrastructure.",
  },
  {
    icon: <Eye className="h-6 w-6" />,
    color: "#EA4335",
    bg: "#FDEEEC",
    title: "Radical Transparency",
    ar: "شفافية كاملة",
    desc: "Transparent pricing, a public roadmap, an open changelog, and honest communication. No surprise bills, no vendor lock-in, no dark patterns.",
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    color: "#FBBC04",
    bg: "#FEF8E6",
    title: "Long-term Thinking",
    ar: "تفكير طويل المدى",
    desc: "We're building a 50-year company, not a flip. That means sustainable growth, happy customers, and products we're proud of — not hockey-stick metrics.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    color: "#EC4899",
    bg: "#FDF2F8",
    title: "Community Driven",
    ar: "مجتمع متكامل",
    desc: "Our roadmap is shaped by the teams using Haala. We host open community calls, publish feature request votes, and ship what our users actually ask for.",
  },
];

const teamMembers = [
  {
    initials: "AK",
    name: "Ahmed Khalid",
    role: "CEO & Co-founder",
    flag: "🇵🇰",
    color: "bg-blue-100 text-blue-700",
    bio: "Previously led product at a leading Pakistani fintech. Ahmed founded Haala after his 50-person team spent more on software subscriptions than on salaries.",
  },
  {
    initials: "SN",
    name: "Sara Al-Nasser",
    role: "CTO & Co-founder",
    flag: "🇸🇦",
    color: "bg-purple-100 text-purple-700",
    bio: "Ex-Google engineer (London & Dubai). Sara architected Haala's real-time collaboration engine and the infrastructure behind Murshid AI.",
  },
  {
    initials: "OM",
    name: "Omar Mansoor",
    role: "Head of Product",
    flag: "🇦🇪",
    color: "bg-green-100 text-green-700",
    bio: "10 years in B2B SaaS product leadership. Omar obsesses over workflow design and ensuring Haala feels familiar to Google Workspace users from day one.",
  },
  {
    initials: "FM",
    name: "Fatima Malik",
    role: "Head of AI (Murshid)",
    flag: "🇵🇰",
    color: "bg-yellow-100 text-yellow-700",
    bio: "PhD in NLP (IIT Lahore). Fatima leads the team building Murshid — ensuring Arabic and Urdu understanding is first-class, not an afterthought.",
  },
  {
    initials: "RH",
    name: "Rania Hassan",
    role: "Head of Design",
    flag: "🇦🇪",
    color: "bg-red-100 text-red-700",
    bio: "Former design lead at a regional super-app. Rania built Haala's RTL-first design system and ensures every product is beautiful in both LTR and RTL.",
  },
  {
    initials: "ZQ",
    name: "Zain Al-Qahtani",
    role: "Head of Enterprise",
    flag: "🇸🇦",
    color: "bg-indigo-100 text-indigo-700",
    bio: "15 years in enterprise software sales across the Gulf. Zain runs Haala's enterprise business, helping large organizations migrate from legacy platforms.",
  },
];

const stats = [
  { value: "100K+", label: "Active users", ar: "مستخدم نشط" },
  { value: "12K+", label: "Teams", ar: "فريق" },
  { value: "4", label: "Countries", ar: "دول" },
  { value: "11", label: "Products", ar: "منتج" },
];

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Hero — dark navy background */}
      <section className="bg-[#0D1B2A] py-24 lg:py-36 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A73E8]/20 to-[#8B5CF6]/15 pointer-events-none" />
        <div className="container mx-auto px-6 relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6">
            <MapPin className="h-4 w-4" />
            Lahore · Dubai · Riyadh
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Built by us,{" "}
            <span className="text-[#1A73E8]">for us.</span>
          </h1>
          <ArabicText className="text-xl text-blue-300 block mb-6">
            بُنِيَ بيننا، لأجلنا
          </ArabicText>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Haala was built by a team from Pakistan, Saudi Arabia, and UAE —
            tired of paying for tools that don't understand our language, our pricing, or our workflows.
            So we built the one we always wanted.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-[#1A73E8] mb-1">{stat.value}</div>
                <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
                <ArabicText className="text-xs text-gray-400">{stat.ar}</ArabicText>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A73E8]/10 text-[#1A73E8] text-sm font-medium mb-6">
              Our Mission
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] mb-4">
              <ArabicText className="text-[#1A73E8]">مهمتنا</ArabicText>
            </h2>
            <blockquote className="text-xl text-gray-700 leading-relaxed mb-6 font-medium">
              "To give every team in the Arab world and South Asia a workspace platform
              that matches their language, their budget, and their data sovereignty requirements —
              without compromise."
            </blockquote>
            <ArabicText className="text-lg text-gray-500 leading-relaxed block">
              منح كل فريق في العالم العربي وجنوب آسيا منصة عمل تتوافق مع لغته وميزانيته
              ومتطلبات سيادة بياناته — دون تنازلات.
            </ArabicText>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] mb-3">
              Our journey
            </h2>
            <ArabicText className="text-gray-500 text-lg">مسيرتنا</ArabicText>
          </div>

          <div className="max-w-3xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 hidden sm:block" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={item.year} className="flex gap-6 items-start">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-white border-2 border-[#1A73E8] flex items-center justify-center text-2xl shadow-sm z-10">
                      {item.flag}
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl border border-gray-100 p-6 flex-1 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-[#1A73E8] bg-[#1A73E8]/10 px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                      <h3 className="font-bold text-[#0D1B2A]">{item.title}</h3>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] mb-3">
              What we believe
            </h2>
            <ArabicText className="text-gray-500 text-lg">ما نؤمن به</ArabicText>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val) => (
              <div
                key={val.title}
                className="border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-gray-200 transition-all"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: val.bg, color: val.color }}
                >
                  {val.icon}
                </div>
                <h3 className="font-bold text-[#0D1B2A] mb-1">{val.title}</h3>
                <ArabicText className="text-xs font-medium block mb-3" style={{ color: val.color }}>
                  {val.ar}
                </ArabicText>
                <p className="text-sm text-gray-500 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] mb-3">
              Meet the team
            </h2>
            <ArabicText className="text-gray-500 text-lg">تعرف على الفريق</ArabicText>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              We're a 30-person team across Lahore, Dubai, and Riyadh — all building the platform we wish had existed.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${member.color}`}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <div className="font-bold text-[#0D1B2A] flex items-center gap-1.5">
                      {member.name}
                      <span>{member.flag}</span>
                    </div>
                    <div className="text-sm text-gray-500">{member.role}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-400 mt-10">
            Want to join the team?{" "}
            <Link to="/careers" className="text-[#1A73E8] font-medium hover:underline">
              See open roles →
            </Link>
          </p>
        </div>
      </section>

      {/* Investors */}
      <section className="py-16 border-y border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-gray-400 uppercase tracking-wide font-medium mb-6">
            Backed by
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
            {[
              "Zaif Ventures",
              "Gulf Tech Fund",
              "Karachi Angels",
              "Madinah Capital",
              "Atlas Seed Fund",
            ].map((backer) => (
              <span key={backer} className="text-gray-400 font-semibold text-sm">
                {backer}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="bg-[#0D1B2A] rounded-3xl p-10 sm:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A73E8]/20 to-[#8B5CF6]/15 pointer-events-none" />
            <div className="relative">
              <TrendingUp className="h-10 w-10 text-[#FBBC04] mx-auto mb-5" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                Join 100,000+ users already on Haala
              </h2>
              <ArabicText className="text-blue-300 text-lg block mb-4">
                انضم إلى أكثر من ١٠٠,٠٠٠ مستخدم
              </ArabicText>
              <p className="text-gray-400 max-w-lg mx-auto mb-8">
                Free for individuals. Affordable for teams. Enterprise-grade for large organizations.
                No credit card required to start.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2 bg-[#1A73E8] text-white px-8 py-3.5 rounded-full font-medium hover:bg-[#1557B0] transition-colors"
                >
                  Start free today <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/5 transition-colors"
                >
                  Talk to sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
