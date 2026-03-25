import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  DollarSign,
  Wifi,
  Languages,
  TrendingUp,
  Umbrella,
  Plane,
  BookOpen,
  ExternalLink,
} from "lucide-react";
import ArabicText from "@/components/ArabicText";

const perks = [
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: "Competitive salary in USD",
    desc: "We benchmark against top-tier global companies. Everyone gets paid in USD regardless of location — no local haircut.",
  },
  {
    icon: <Wifi className="h-6 w-6" />,
    title: "Remote-first",
    desc: "Work from wherever you do your best thinking. We're async-first and built for distributed teams across multiple time zones.",
  },
  {
    icon: <Languages className="h-6 w-6" />,
    title: "Work in Arabic and English",
    desc: "Our product and our team operate fluently in both languages. No code-switching awkwardness — both are first-class here.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Equity for everyone",
    desc: "From engineers to ops, every hire gets meaningful equity from day one. When Haala wins, the whole team wins.",
  },
  {
    icon: <Umbrella className="h-6 w-6" />,
    title: "40 days leave per year",
    desc: "That's 5 full weeks, plus national holidays. Rest is a productivity strategy at Haala, not a privilege to be earned.",
  },
  {
    icon: <Plane className="h-6 w-6" />,
    title: "Team retreats in GCC cities",
    desc: "Twice a year we bring the whole company together — Dubai, Riyadh, Lahore. Real connection matters for remote teams.",
  },
];

const teamStories = [
  {
    name: "Fatima Al-Rashidi",
    role: "Senior Product Designer · Dubai",
    initials: "FA",
    color: "#1A73E8",
    quote:
      "I spent 6 years designing enterprise tools that ignored how Arabic speakers actually read and write. At Haala, RTL isn't an afterthought — it's the first consideration. I've shipped more meaningful work in 10 months here than in my previous 3 years combined.",
  },
  {
    name: "Bilal Chaudhry",
    role: "ML Engineer · Lahore (Remote)",
    initials: "BC",
    color: "#34A853",
    quote:
      "The Murshid AI project is unlike anything I've worked on. We're not adapting Western models — we're building from the ground up for Urdu and Arabic. My manager gives me real space to research, and the team ships actual code. No performative agile ceremonies.",
  },
  {
    name: "Nour El-Sayed",
    role: "Enterprise Sales · Riyadh",
    initials: "NE",
    color: "#EA4335",
    quote:
      "GCC enterprises have been waiting for a workspace tool that understands how business is done here. When I demo Haala, I'm not translating features — I'm showing something built for them. Deal cycles are fast because the product sells itself.",
  },
];

const locations = [
  { city: "Lahore", country: "Pakistan", badge: "HQ", flag: "🇵🇰" },
  { city: "Riyadh", country: "Saudi Arabia", flag: "🇸🇦" },
  { city: "Dubai", country: "UAE", flag: "🇦🇪" },
  { city: "Remote", country: "Worldwide", flag: "🌍" },
];

const previewRoles = [
  { title: "Senior Full-Stack Engineer", dept: "Engineering", loc: "Lahore / Remote" },
  { title: "AI/ML Engineer – Murshid Team", dept: "Engineering", loc: "Remote" },
  { title: "Product Manager – Communications", dept: "Product", loc: "Riyadh / Remote" },
  { title: "Enterprise Sales Executive – GCC", dept: "Sales", loc: "Riyadh" },
];

const Careers = () => {
  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="bg-[#0D1B2A] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#1A73E8] mb-6 bg-[#1A73E8]/10 px-3 py-1.5 rounded-full">
              We're hiring
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Build the future of work for 1.8 billion people
            </h1>
            <p className="text-xl text-white/60 mb-3">
              <ArabicText className="text-2xl text-white/80 font-semibold">
                ابنِ مستقبل العمل لـ 1.8 مليار شخص
              </ArabicText>
            </p>
            <p className="text-lg text-white/60 mt-6 mb-10 max-w-2xl">
              Arabic and Urdu speakers have been second-class citizens in
              workplace software for decades. We're fixing that — one product,
              one team, one hire at a time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/careers/jobs"
                className="inline-flex items-center gap-2 bg-[#1A73E8] hover:bg-[#1A73E8]/90 text-white px-8 py-3.5 rounded-full font-semibold transition-colors"
              >
                See 8 open roles <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#why-haala"
                className="inline-flex items-center gap-2 border border-white/20 text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-medium transition-colors"
              >
                Why Haala?
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#1A73E8] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: "4", label: "Countries" },
              { value: "8", label: "Open roles" },
              { value: "1.8B", label: "People we serve" },
              { value: "100%", label: "Remote-friendly" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold">{s.value}</div>
                <div className="text-sm text-white/70 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Haala — perks */}
      <section id="why-haala" className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] mb-4">
              Why Haala?
            </h2>
            <p className="text-lg text-gray-500">
              We designed the company the same way we design the product — for
              the people who use it.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-[#1A73E8]/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1A73E8]/10 flex items-center justify-center text-[#1A73E8] mb-5">
                  {perk.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0D1B2A] mb-2">
                  {perk.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {perk.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values in action — team stories */}
      <section className="py-20 sm:py-28 bg-[#0D1B2A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Values in action
            </h2>
            <p className="text-lg text-white/50">
              Don't take our word for it. Hear from people who joined and stayed.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamStories.map((story) => (
              <div
                key={story.name}
                className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors"
              >
                <p className="text-white/80 leading-relaxed text-[15px] mb-6 italic">
                  &ldquo;{story.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                    style={{ backgroundColor: story.color }}
                  >
                    {story.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">
                      {story.name}
                    </p>
                    <p className="text-white/40 text-xs">{story.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles teaser */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] mb-3">
                Open roles
              </h2>
              <p className="text-gray-500 text-lg">
                8 open roles across engineering, product, design, sales, and
                operations.
              </p>
            </div>
            <Link
              to="/careers/jobs"
              className="inline-flex items-center gap-2 bg-[#0D1B2A] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[#0D1B2A]/80 transition-colors shrink-0"
            >
              View all 8 roles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
            {previewRoles.map((role) => (
              <Link
                key={role.title}
                to="/careers/jobs"
                className="flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 transition-colors group"
              >
                <div>
                  <p className="font-semibold text-[#0D1B2A] group-hover:text-[#1A73E8] transition-colors">
                    {role.title}
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs font-medium text-[#1A73E8] bg-[#1A73E8]/10 px-2 py-0.5 rounded-full">
                      {role.dept}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <MapPin className="h-3 w-3" /> {role.loc}
                    </span>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-[#1A73E8] transition-colors" />
              </Link>
            ))}
          </div>

          <p className="text-center mt-6">
            <Link
              to="/careers/jobs"
              className="text-[#1A73E8] font-medium hover:underline inline-flex items-center gap-1"
            >
              See all 8 open roles <ArrowRight className="h-4 w-4" />
            </Link>
          </p>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0D1B2A] mb-10">
            Where we work
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <div
                key={loc.city}
                className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow"
              >
                <span className="text-3xl mb-3">{loc.flag}</span>
                <div className="flex items-center gap-1.5 mb-1">
                  <p className="font-bold text-[#0D1B2A]">{loc.city}</p>
                  {loc.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#1A73E8] text-white px-1.5 py-0.5 rounded">
                      {loc.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-400">{loc.country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering blog link */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#0D1B2A] rounded-2xl px-8 py-10">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#1A73E8]/20 flex items-center justify-center shrink-0">
                <BookOpen className="h-6 w-6 text-[#1A73E8]" />
              </div>
              <div>
                <p className="font-bold text-white text-lg">
                  Read the Haala Engineering Blog
                </p>
                <p className="text-white/50 text-sm mt-0.5">
                  Deep dives on building for Arabic NLP, RTL UI, and distributed
                  systems at scale.
                </p>
              </div>
            </div>
            <a
              href="/blog"
              className="inline-flex items-center gap-2 bg-white text-[#0D1B2A] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shrink-0"
            >
              Engineering blog <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
