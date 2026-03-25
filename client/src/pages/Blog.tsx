import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock,
  Calendar,
  Mail,
  Tag,
  ChevronRight,
} from "lucide-react";
import ArabicText from "@/components/ArabicText";

// ── Types ────────────────────────────────────────────────────────────────────

interface Post {
  slug: string;
  category: string;
  categoryColor: string;
  title: string;
  titleAr?: string;
  excerpt: string;
  author: string;
  authorInitials: string;
  authorColor: string;
  date: string;
  readTime: string;
}

// ── Data ─────────────────────────────────────────────────────────────────────

const categories = [
  "All",
  "Product",
  "Engineering",
  "Company",
  "Arabic",
];

const categoryColors: Record<string, string> = {
  Product: "bg-blue-100 text-blue-700",
  Engineering: "bg-purple-100 text-purple-700",
  Company: "bg-green-100 text-green-700",
  Arabic: "bg-yellow-100 text-yellow-700",
  "AI & ML": "bg-pink-100 text-pink-700",
  Security: "bg-red-100 text-red-700",
};

const featuredPost = {
  slug: "arabic-first-future-of-saas",
  category: "Company",
  title: "Why Arabic-First Is the Future of SaaS",
  excerpt:
    "The Arab world has 400 million people, a rapidly growing tech-savvy middle class, and almost no native-language SaaS to serve them. We built Haala to change that — and here's why we think Arabic-first is the biggest opportunity in enterprise software today.",
  author: "Tariq Siddiqui",
  authorInitials: "TS",
  role: "CEO, Haala",
  date: "March 20, 2026",
  readTime: "8 min read",
  gradient: "from-[#0D1B2A] via-[#1A2F4A] to-[#1A73E8]",
};

const posts: Post[] = [
  {
    slug: "murshid-ai-arabic-llm",
    category: "Engineering",
    categoryColor: categoryColors["Engineering"],
    title: "Murshid AI: How We Built an Arabic LLM Assistant",
    titleAr: "مرشد: كيف بنينا مساعد الذكاء الاصطناعي العربي",
    excerpt:
      "Training a large language model that truly understands Arabic dialects, Urdu, and code-switching was the hardest engineering challenge we've tackled. Here's a behind-the-scenes look.",
    author: "Nadia Akhtar",
    authorInitials: "NA",
    authorColor: "bg-purple-100 text-purple-700",
    date: "March 15, 2026",
    readTime: "11 min read",
  },
  {
    slug: "lahore-to-riyadh-building-gcc-saas",
    category: "Company",
    categoryColor: categoryColors["Company"],
    title: "From Lahore to Riyadh: Building SaaS for the GCC",
    excerpt:
      "How a team of 12 engineers in Lahore built a product that's now used by teams across Saudi Arabia, UAE, Bahrain, and Kuwait.",
    author: "Tariq Siddiqui",
    authorInitials: "TS",
    authorColor: "bg-green-100 text-green-700",
    date: "March 12, 2026",
    readTime: "6 min read",
  },
  {
    slug: "haala-calendar-hijri-gregorian",
    category: "Product",
    categoryColor: categoryColors["Product"],
    title: "Haala Calendar: Hijri + Gregorian Support Deep Dive",
    titleAr: "موعد: دعم التقويمين الهجري والميلادي",
    excerpt:
      "How we built dual-calendar support that actually works — including prayer time overlays, public holidays across 8 countries, and smart timezone handling.",
    author: "Bilal Hassan",
    authorInitials: "BH",
    authorColor: "bg-blue-100 text-blue-700",
    date: "March 8, 2026",
    readTime: "9 min read",
  },
  {
    slug: "pkr-sar-pricing-from-day-one",
    category: "Company",
    categoryColor: categoryColors["Company"],
    title: "Why We Chose PKR and SAR Pricing From Day One",
    excerpt:
      "Charging in local currencies isn't just good UX — it's a statement about who you're building for. We break down the financial and philosophical reasons behind our regional pricing strategy.",
    author: "Sana Mirza",
    authorInitials: "SM",
    authorColor: "bg-yellow-100 text-yellow-700",
    date: "March 4, 2026",
    readTime: "5 min read",
  },
  {
    slug: "building-rtl-first-lessons",
    category: "Arabic",
    categoryColor: categoryColors["Arabic"],
    title: "Building RTL-First: Lessons from 2 Years",
    titleAr: "بناء الواجهة من اليمين لليسار: دروس من سنتين",
    excerpt:
      "RTL support in most frameworks is an afterthought. We made it our foundation. Two years in, here's everything we learned — from CSS grid quirks to icon mirroring rules.",
    author: "Hana Al-Fahad",
    authorInitials: "HF",
    authorColor: "bg-orange-100 text-orange-700",
    date: "Feb 28, 2026",
    readTime: "13 min read",
  },
  {
    slug: "pdpl-compliance-data",
    category: "Engineering",
    categoryColor: categoryColors["Engineering"],
    title: "PDPL Compliance: What It Means for Your Data",
    excerpt:
      "Saudi Arabia's Personal Data Protection Law came into effect in 2023. Here's exactly what Haala does to keep your team's data compliant, private, and in-region.",
    author: "Omar Khalil",
    authorInitials: "OK",
    authorColor: "bg-red-100 text-red-700",
    date: "Feb 22, 2026",
    readTime: "7 min read",
  },
  {
    slug: "team-feature-80-people-haala",
    category: "Company",
    categoryColor: categoryColors["Company"],
    title: "Team Feature: How 80 People Use Haala Daily",
    excerpt:
      "We surveyed our own team — 80 people across Lahore, Dubai, and Riyadh — about how they actually use Haala every day. The results surprised us.",
    author: "Fatima Qureshi",
    authorInitials: "FQ",
    authorColor: "bg-teal-100 text-teal-700",
    date: "Feb 17, 2026",
    readTime: "4 min read",
  },
  {
    slug: "sheets-arabic-numbers-formulas",
    category: "Product",
    categoryColor: categoryColors["Product"],
    title: "Product Update: Sheets Formulas Now Support Arabic Numbers",
    titleAr: "تحديث: حساب يدعم الأرقام العربية في الصيغ",
    excerpt:
      "Starting today, Haala Sheets handles Eastern Arabic numerals (٠١٢٣٤٥٦٧٨٩) natively in formulas, VLOOKUP, and pivot tables — no workarounds needed.",
    author: "Bilal Hassan",
    authorInitials: "BH",
    authorColor: "bg-blue-100 text-blue-700",
    date: "Feb 10, 2026",
    readTime: "3 min read",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSubmitted(true);
  };

  return (
    <div className="font-sans bg-white min-h-screen">
      {/* ── Hero ── */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#0D1B2A] via-[#1A2F4A] to-[#0D1B2A] text-white text-center px-4">
        <div className="max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6 border border-white/10">
            Blog
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold mb-3 tracking-tight">
            The Haala Blog
          </h1>
          <p className="text-2xl font-light text-white/70">
            <ArabicText className="text-white/90 text-2xl">
              مدونة هالة
            </ArabicText>
          </p>
          <p className="mt-4 text-white/60 text-lg max-w-md mx-auto">
            Product updates, engineering deep-dives, and perspectives on
            building software for the Arab and South Asian world.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        {/* ── Featured Post ── */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
            Featured Post
          </p>
          <Link
            to={`/blog/${featuredPost.slug}`}
            className="group block rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow"
          >
            <div
              className={`bg-gradient-to-br ${featuredPost.gradient} p-10 sm:p-14 text-white relative overflow-hidden`}
            >
              {/* decorative blur */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl" />
              <div className="relative z-10 max-w-2xl">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5 ${
                    categoryColors[featuredPost.category] ??
                    "bg-white/20 text-white"
                  }`}
                >
                  {featuredPost.category}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight group-hover:text-white/90 transition">
                  {featuredPost.title}
                </h2>
                <p className="text-white/70 text-base leading-relaxed mb-8 max-w-xl">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                      {featuredPost.authorInitials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">
                        {featuredPost.author}
                      </p>
                      <p className="text-xs text-white/60">
                        {featuredPost.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-white/60 text-sm ml-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <span className="ml-auto flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all">
                    Read article <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* ── Category Filter ── */}
        <div>
          <div className="flex items-center gap-2 flex-wrap mb-8">
            <Tag className="h-4 w-4 text-gray-400" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#1A73E8] text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
            <span className="ml-auto text-sm text-gray-400">
              {filtered.length} post{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* ── Post Grid ── */}
          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all"
                >
                  {/* Card color bar */}
                  <div
                    className={`h-1.5 ${
                      post.category === "Engineering"
                        ? "bg-purple-400"
                        : post.category === "Product"
                        ? "bg-blue-400"
                        : post.category === "Company"
                        ? "bg-green-400"
                        : post.category === "Arabic"
                        ? "bg-yellow-400"
                        : "bg-gray-300"
                    }`}
                  />
                  <div className="p-6 flex flex-col flex-1">
                    {/* Category + read time */}
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${post.categoryColor}`}
                      >
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-[#0D1B2A] leading-snug mb-1 group-hover:text-[#1A73E8] transition">
                      {post.title}
                    </h3>
                    {post.titleAr && (
                      <p className="text-xs text-gray-400 mb-3">
                        <ArabicText>{post.titleAr}</ArabicText>
                      </p>
                    )}

                    {/* Excerpt */}
                    <p className="text-sm text-gray-500 leading-relaxed flex-1 mt-2 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center gap-2 mt-5 pt-4 border-t border-gray-100">
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${post.authorColor}`}
                      >
                        {post.authorInitials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-gray-700 truncate">
                          {post.author}
                        </p>
                        <p className="text-xs text-gray-400">{post.date}</p>
                      </div>
                      <ChevronRight className="h-4 w-4 text-gray-300 group-hover:text-[#1A73E8] group-hover:translate-x-0.5 transition-all shrink-0" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-gray-400">
              No posts in this category yet.
            </div>
          )}
        </div>

        {/* ── Newsletter ── */}
        <div className="bg-gradient-to-br from-[#0D1B2A] to-[#1A2F4A] rounded-3xl p-10 sm:p-14 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative z-10 max-w-xl mx-auto">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-5">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-2">
              Stay in the loop
            </h2>
            <p className="text-white/60 mb-8">
              Get the latest Haala product updates, engineering articles, and
              regional SaaS insights — delivered to your inbox.
            </p>
            {newsletterSubmitted ? (
              <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4">
                <p className="font-semibold text-white">
                  You're subscribed!
                </p>
                <p className="text-white/60 text-sm mt-1">
                  First issue lands in your inbox this Friday.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleNewsletter}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition"
                />
                <button
                  type="submit"
                  className="bg-[#1A73E8] hover:bg-[#1557B0] text-white font-semibold px-6 py-3 rounded-xl transition-all whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
            <p className="text-white/40 text-xs mt-4">
              No spam. Unsubscribe any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
