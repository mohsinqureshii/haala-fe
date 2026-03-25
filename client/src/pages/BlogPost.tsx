import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  Share2,
  Twitter,
  Linkedin,
  Copy,
  Check,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import ArabicText from "@/components/ArabicText";

// ── Types ─────────────────────────────────────────────────────────────────────

interface TocItem {
  id: string;
  label: string;
}

interface RelatedPost {
  slug: string;
  category: string;
  categoryColor: string;
  title: string;
  author: string;
  authorInitials: string;
  date: string;
  readTime: string;
}

// ── Article data ──────────────────────────────────────────────────────────────

const featuredPost = {
  slug: "arabic-first-future-of-saas",
  category: "Company",
  categoryColor: "bg-green-100 text-green-700",
  title: "Why Arabic-First Is the Future of SaaS",
  subtitle:
    "The Arab world has 400 million people and almost no native-language SaaS to serve them.",
  author: "Tariq Siddiqui",
  authorInitials: "TS",
  role: "CEO & Co-founder, Haala",
  authorBio:
    "Tariq Siddiqui is the CEO and co-founder of Haala. Before Haala, he spent seven years at Google working on Search and Maps products for the MENA region. He is passionate about building software that reflects the culture, language, and needs of the Arab and South Asian world. He tweets at @tariqsiddiqui.",
  date: "March 20, 2026",
  readTime: "8 min read",
  gradient: "from-[#0D1B2A] via-[#1A2F4A] to-[#1A73E8]",
};

const tocItems: TocItem[] = [
  { id: "the-gap", label: "The language gap in enterprise SaaS" },
  { id: "not-rtl", label: "Arabic-first is more than RTL" },
  { id: "market", label: "The market opportunity" },
  { id: "how-we-built", label: "How we built Haala" },
  { id: "murshid", label: "Murshid: the Arabic AI layer" },
  { id: "whats-next", label: "What's next" },
];

const articleSections = [
  {
    id: "the-gap",
    heading: "The language gap in enterprise SaaS",
    content: [
      "There are over 400 million Arabic speakers in the world. They run businesses, manage teams, send emails, schedule meetings, and collaborate on documents — every single day. Yet the tools they use to do this are almost entirely designed for English speakers, translated after the fact.",
      "The translation approach sounds reasonable until you use the products. Google Workspace has Arabic support. Microsoft 365 has Arabic support. But \"support\" means a right-to-left text mode and a translated menu. It does not mean a product that thinks, reasons, and responds in Arabic. It does not mean AI that understands the cultural context of a Friday-to-Saturday weekend, or knows that a Hijri date and a Gregorian date can coexist in the same calendar event.",
      "We started Haala because we experienced this gap ourselves. As a team working across Lahore and Riyadh, we were constantly context-switching between languages, fighting with broken RTL layouts, and watching colleagues default to English in their work tools simply because the Arabic experience was too frustrating.",
    ],
  },
  {
    id: "not-rtl",
    heading: "Arabic-first is more than RTL",
    content: [
      "When most software teams hear 'Arabic support,' they think of a CSS property: `direction: rtl`. That is the beginning, not the end. Real Arabic-first design means questioning every UX assumption made for left-to-right users.",
      "Consider something as simple as a progress bar. In English, progress flows left to right. In Arabic, the natural reading direction is right to left — so a progress bar that fills from left to right is cognitively dissonant for an Arabic speaker. The same is true for breadcrumbs, tab orders, icon directions (a 'forward' arrow pointing right in English should point left in Arabic), and dozens of other micro-interactions.",
      "Then there is the question of numbers. Arabic uses two numeral systems — Western Arabic numerals (0–9, which are actually of Arabic origin and adopted by the West) and Eastern Arabic numerals (٠–٩). In formal business documents in Saudi Arabia, Egypt, and the Gulf, Eastern Arabic numerals are common. Haala Sheets, for example, fully supports Eastern Arabic numerals in formulas — something that Excel and Google Sheets handle poorly or not at all.",
      "And then there is the question of AI. Most large language models were trained on internet data that is overwhelmingly English. Arabic represents less than 2% of training corpora for most foundation models, despite representing over 5% of the world's population. An AI assistant trained this way will struggle with nuance, dialects, and domain-specific Arabic vocabulary. Our Murshid AI team spent 18 months building a custom Arabic-optimised reasoning layer on top of a foundation model precisely because the off-the-shelf options were not good enough for our users.",
    ],
  },
  {
    id: "market",
    heading: "The market opportunity",
    content: [
      "The GCC alone has a total addressable SaaS market estimated at $3.2 billion USD by 2027, growing at 18% CAGR. Pakistan adds another substantial and fast-growing market — the country has over 220 million people, a booming startup ecosystem, and a workforce that overwhelmingly prefers to work in Urdu and English rather than the English-only interfaces of Western SaaS tools.",
      "What is striking is not just the size — it is how underserved these markets are. When we ran customer discovery interviews before building Haala, we asked IT managers at companies in Riyadh, Dubai, Karachi, and Cairo what productivity tools they use. The answer was almost always 'Google Workspace or Microsoft 365, but it's painful.' The pain was consistent: poor RTL support, no local-language AI, pricing in dollars that was expensive relative to local salaries, and data sovereignty concerns about servers located outside the region.",
      "PDPL in Saudi Arabia, the Personal Data Protection Law, has added a compliance dimension that Western tools struggle to address. Data residency requirements mean that many Saudi companies are legally constrained from using cloud services that store data outside the Kingdom. Haala operates data centres in Riyadh and Lahore, with planned expansion to Abu Dhabi and Cairo in 2026.",
    ],
  },
  {
    id: "how-we-built",
    heading: "How we built Haala",
    content: [
      "We started with email. Barid — our email product — was the first module we shipped, because email is where work begins and ends for most professionals. We obsessed over every detail: the compose window that defaults to RTL when it detects Arabic input; the thread view that handles mixed Arabic and English content without layout breakage; the spam filters trained on Arabic-language spam patterns that are entirely different from English-language spam.",
      "From email, we expanded to Calendar (Maweed), with its dual Hijri-Gregorian view, prayer time support, and GCC public holiday data. Then Chat (Kalam), Docs (Kitaab), and Sheets (Hisaab). Each product was built RTL-first, not translated. The difference is visible the moment you open any of them.",
      "Our engineering team in Lahore is 40 people strong, with satellite teams in Riyadh and Dubai. We deliberately built the team in markets we're serving — not just because the talent is excellent and the salaries are regional, but because engineers who use the product in their own language every day are the best QA for a product like ours.",
    ],
  },
  {
    id: "murshid",
    heading: "Murshid: the Arabic AI layer",
    content: [
      "Murshid — which means 'guide' in Arabic — is our AI assistant. It is embedded across all Haala products: it drafts emails in Arabic, summarises long document threads, answers questions about your calendar, and can run multi-step workflows across modules.",
      "Building Murshid required us to make hard technical choices. We evaluated every major foundation model and found that none of them handled Arabic with the fluency we needed. Colloquial Gulf Arabic, Pakistani Urdu code-switching, formal Modern Standard Arabic in legal documents — these are not edge cases for our users, they are the norm. We ended up building a retrieval-augmented generation system on top of a fine-tuned base model, with a custom tokeniser optimised for Arabic morphology.",
      "The result is an AI that genuinely understands the user's context. It knows that 'مساء الخير' in an email should be rendered as 'Good evening' in an English summary, not transliterated. It knows that a meeting at 'بعد الصلاة' (after prayer) needs to be disambiguated by prayer time and location. This is what Arabic-first AI means in practice.",
    ],
  },
  {
    id: "whats-next",
    heading: "What's next",
    content: [
      "We are six months away from launching Haala for Government — a dedicated on-premise deployment option designed for GCC government agencies with the highest data sovereignty requirements. We are also expanding our language support to include Farsi and Turkish, building on the same RTL-first infrastructure we built for Arabic and Urdu.",
      "The vision has not changed since day one: build the productivity suite that the 1.5 billion people of the Arab and South Asian world actually deserve. Not a translated version of a product built for someone else. A product built for them, from the ground up, in their language.",
      "If that mission resonates with you — whether you're an enterprise customer, a developer, or someone who wants to join the team — we'd love to hear from you.",
    ],
  },
];

const relatedPosts: RelatedPost[] = [
  {
    slug: "murshid-ai-arabic-llm",
    category: "Engineering",
    categoryColor: "bg-purple-100 text-purple-700",
    title: "Murshid AI: How We Built an Arabic LLM Assistant",
    author: "Nadia Akhtar",
    authorInitials: "NA",
    date: "March 15, 2026",
    readTime: "11 min read",
  },
  {
    slug: "building-rtl-first-lessons",
    category: "Arabic",
    categoryColor: "bg-yellow-100 text-yellow-700",
    title: "Building RTL-First: Lessons from 2 Years",
    author: "Hana Al-Fahad",
    authorInitials: "HF",
    date: "Feb 28, 2026",
    readTime: "13 min read",
  },
  {
    slug: "lahore-to-riyadh-building-gcc-saas",
    category: "Company",
    categoryColor: "bg-green-100 text-green-700",
    title: "From Lahore to Riyadh: Building SaaS for the GCC",
    author: "Tariq Siddiqui",
    authorInitials: "TS",
    date: "March 12, 2026",
    readTime: "6 min read",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);
  const [activeToc, setActiveToc] = useState<string>(tocItems[0].id);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // For any slug we show the featured post (single-post demo)
  const post = featuredPost;
  const _ = slug; // acknowledged, not used for routing logic in this demo

  return (
    <div className="font-sans bg-white min-h-screen">
      {/* ── Hero ── */}
      <div
        className={`bg-gradient-to-br ${post.gradient} pt-24 pb-20 px-4 text-white`}
      >
        <div className="max-w-3xl mx-auto text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm mb-8 transition"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Blog
          </Link>

          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5 ${post.categoryColor}`}
          >
            {post.category}
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-white/60 text-lg mb-8">{post.subtitle}</p>

          {/* Author + meta */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                {post.authorInitials}
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold">{post.author}</p>
                <p className="text-xs text-white/60">{post.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white/60 text-sm">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid lg:grid-cols-[1fr_280px] gap-12 items-start">
          {/* ── Article ── */}
          <article className="min-w-0">
            {/* Share row */}
            <div className="flex items-center gap-3 mb-10 pb-6 border-b border-gray-100">
              <span className="text-sm text-gray-500 font-medium flex items-center gap-1.5">
                <Share2 className="h-4 w-4" /> Share
              </span>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition">
                <Twitter className="h-4 w-4 text-sky-500" />
                Twitter
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition">
                <Linkedin className="h-4 w-4 text-blue-600" />
                LinkedIn
              </button>
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-green-500" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" /> Copy link
                  </>
                )}
              </button>
            </div>

            {/* Content sections */}
            <div className="prose prose-lg max-w-none">
              {articleSections.map((section) => (
                <div key={section.id} id={section.id} className="mb-12">
                  <h2 className="text-2xl font-bold text-[#0D1B2A] mb-5 leading-snug">
                    {section.heading}
                  </h2>
                  {section.content.map((para, i) => (
                    <p
                      key={i}
                      className="text-gray-600 leading-relaxed mb-4 text-base"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Arabic quote callout */}
            <div className="my-10 bg-gradient-to-r from-[#1A73E8]/5 to-[#8B5CF6]/5 border-l-4 border-[#1A73E8] rounded-r-2xl p-6">
              <p className="text-[#0D1B2A] font-medium text-lg mb-2">
                "Build software that reflects the culture and language of the
                people using it — not just a translation of something built for
                someone else."
              </p>
              <p className="text-sm text-gray-400 mt-3">
                <ArabicText className="text-gray-500 text-sm">
                  — ابنِ البرمجيات التي تعكس ثقافة مستخدميها ولغتهم
                </ArabicText>
              </p>
            </div>

            {/* Author bio */}
            <div className="mt-14 pt-8 border-t border-gray-100">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1A73E8] to-[#8B5CF6] flex items-center justify-center text-white text-xl font-bold shrink-0">
                  {post.authorInitials}
                </div>
                <div>
                  <p className="font-bold text-[#0D1B2A] text-lg">
                    {post.author}
                  </p>
                  <p className="text-sm text-[#1A73E8] mb-3">{post.role}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {post.authorBio}
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* ── Sidebar ── */}
          <aside className="space-y-8 sticky top-24">
            {/* Table of contents */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-4 w-4 text-gray-400" />
                <p className="text-sm font-bold text-[#0D1B2A]">
                  In this article
                </p>
              </div>
              <nav className="space-y-1">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setActiveToc(item.id)}
                    className={`flex items-center gap-2 text-sm py-1.5 px-2 rounded-lg transition group ${
                      activeToc === item.id
                        ? "text-[#1A73E8] bg-blue-50 font-medium"
                        : "text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full shrink-0 transition ${
                        activeToc === item.id
                          ? "bg-[#1A73E8]"
                          : "bg-gray-300 group-hover:bg-gray-500"
                      }`}
                    />
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Related posts */}
            <div>
              <p className="text-sm font-bold text-[#0D1B2A] mb-4">
                Related posts
              </p>
              <div className="space-y-3">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    to={`/blog/${rp.slug}`}
                    className="group flex gap-3 p-3 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition"
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${rp.categoryColor}`}
                    >
                      {rp.authorInitials}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-[#0D1B2A] leading-snug group-hover:text-[#1A73E8] transition line-clamp-2">
                        {rp.title}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {rp.readTime}
                      </p>
                    </div>
                    <ChevronRight className="h-3.5 w-3.5 text-gray-300 group-hover:text-[#1A73E8] shrink-0 mt-0.5 transition" />
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#0D1B2A] rounded-2xl p-5 text-white text-center">
              <p className="text-sm font-bold mb-2">Try Haala free</p>
              <p className="text-white/60 text-xs mb-4 leading-relaxed">
                The Arabic-first workspace your team deserves.
              </p>
              <Link
                to="/signup"
                className="block bg-[#1A73E8] hover:bg-[#1557B0] text-white text-sm font-semibold py-2.5 rounded-xl transition"
              >
                Get started — it's free
              </Link>
            </div>
          </aside>
        </div>

        {/* ── More posts ── */}
        <div className="mt-20 pt-12 border-t border-gray-100">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#0D1B2A]">
              More from the blog
            </h2>
            <Link
              to="/blog"
              className="text-sm text-[#1A73E8] font-semibold hover:underline flex items-center gap-1"
            >
              View all posts <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {relatedPosts.map((rp) => (
              <Link
                key={rp.slug}
                to={`/blog/${rp.slug}`}
                className="group flex flex-col border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all p-6"
              >
                <span
                  className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold mb-4 self-start ${rp.categoryColor}`}
                >
                  {rp.category}
                </span>
                <h3 className="text-base font-bold text-[#0D1B2A] leading-snug flex-1 group-hover:text-[#1A73E8] transition mb-4">
                  {rp.title}
                </h3>
                <div className="flex items-center gap-2 mt-auto pt-4 border-t border-gray-100">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${rp.categoryColor}`}
                  >
                    {rp.authorInitials}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-700">
                      {rp.author}
                    </p>
                    <p className="text-xs text-gray-400">
                      {rp.date} · {rp.readTime}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
