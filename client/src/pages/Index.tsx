import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail, MessageSquare, Video, Calendar, Sparkles, Users, HardDrive,
  CheckSquare, FileText, Table2, StickyNote, Star, Shield, ChevronRight,
  ArrowRight, Check
} from "lucide-react";
import ArabicText from "@/components/ArabicText";

const products = [
  { icon: <Mail className="h-5 w-5" />, color: '#1A73E8', bg: '#EBF3FE', en: 'Mail', ar: 'Barid', arScript: 'بريد', desc: 'Free @haala.io email for everyone', href: '/products/mail' },
  { icon: <MessageSquare className="h-5 w-5" />, color: '#34A853', bg: '#E8F5EC', en: 'Chat', ar: 'Kalam', arScript: 'كلام', desc: 'Team messaging & channels', href: '/products/chat' },
  { icon: <Video className="h-5 w-5" />, color: '#EA4335', bg: '#FDEEEC', en: 'Meetings', ar: 'Majlis', arScript: 'مجلس', desc: 'HD video meetings, no download', href: '/products/meetings' },
  { icon: <Calendar className="h-5 w-5" />, color: '#FBBC04', bg: '#FEF8E6', en: 'Calendar', ar: 'Maweed', arScript: 'موعد', desc: 'Smart scheduling, Hijri + Gregorian', href: '/products/calendar' },
  { icon: <Users className="h-5 w-5" />, color: '#0EA5E9', bg: '#E0F5FE', en: 'People', ar: 'Daira', arScript: 'دائرة', desc: 'Contacts & org directory', href: '/products/people' },
  { icon: <HardDrive className="h-5 w-5" />, color: '#10B981', bg: '#E6FAF4', en: 'Drive', ar: 'Amana', arScript: 'أمانة', desc: 'Cloud file storage & sharing', href: '/products/drive' },
  { icon: <Sparkles className="h-5 w-5" />, color: '#8B5CF6', bg: '#F2EEFF', en: 'AI · Murshid', ar: 'Murshid', arScript: 'مرشد', desc: 'Your AI companion for everything', href: '/products/ai' },
  { icon: <CheckSquare className="h-5 w-5" />, color: '#F59E0B', bg: '#FEF3E2', en: 'Tasks', ar: 'Injaaz', arScript: 'إنجاز', desc: 'Projects, Kanban & Gantt', href: '/products/tasks' },
  { icon: <FileText className="h-5 w-5" />, color: '#1A73E8', bg: '#EBF3FE', en: 'Docs', ar: 'Kitaab', arScript: 'كتاب', desc: 'Collaborative documents', href: '/products/docs' },
  { icon: <Table2 className="h-5 w-5" />, color: '#34A853', bg: '#E8F5EC', en: 'Sheets', ar: 'Hisaab', arScript: 'حساب', desc: 'Smart spreadsheets & formulas', href: '/products/sheets' },
  { icon: <StickyNote className="h-5 w-5" />, color: '#EA4335', bg: '#FDEEEC', en: 'Notes', ar: 'Khawatir', arScript: 'خواطر', desc: 'Notes & knowledge base', href: '/products/notes' },
];

const whyCards = [
  { emoji: '🌙', en: 'Arabic & Urdu First', ar: 'العربية والأردية أولاً', desc: 'Full RTL support built in from day one, not bolted on.' },
  { emoji: '💸', en: 'Priced for Our Markets', ar: 'أسعار تناسب أسواقنا', desc: 'Plans from PKR 499/mo and SAR 25/mo. Not $20/user/month.' },
  { emoji: '🔒', en: 'Data Stays in Region', ar: 'بياناتك في المنطقة', desc: 'Servers in UAE and Pakistan. PDPL compliant.' },
  { emoji: '📱', en: 'Mobile-First', ar: 'الجوال أولاً', desc: 'Designed for how we actually work — on our phones.' },
  { emoji: '🆓', en: 'Actually Free', ar: 'مجاني فعلاً', desc: 'Not a trial. Free forever for individuals.' },
  { emoji: '🤝', en: 'Local Support', ar: 'دعم محلي', desc: 'Arabic, Urdu and English. Real humans.' },
];

const testimonials = [
  {
    stars: 5,
    quote: 'Haala replaced Google Workspace for our 80-person team. We saved SAR 180,000 a year and the Arabic UI made adoption instant.',
    initials: 'MQ',
    name: 'Mohammed Al-Qahtani',
    flag: '🇸🇦',
    role: 'CTO, Saudi Fintech Co.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    stars: 5,
    quote: 'Murshid AI writes half my emails. The product quality matches Google — but it actually understands our market and language.',
    initials: 'FM',
    name: 'Fatima Malik',
    flag: '🇵🇰',
    role: 'Founder, Lahore Startup',
    color: 'bg-green-100 text-green-600',
  },
  {
    stars: 5,
    quote: 'The on-premise deployment option was critical for our government contract. Haala delivered everything we needed.',
    initials: 'OH',
    name: 'Omar Al-Hassan',
    flag: '🇦🇪',
    role: 'Director of Technology, Dubai Gov Agency',
    color: 'bg-purple-100 text-purple-600',
  },
];

const ProductCard = ({ product }: { product: typeof products[0] }) => (
  <Link to={product.href} className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 block">
    <div className="flex items-start justify-between mb-3">
      <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: product.bg, color: product.color }}>
        {product.icon}
      </div>
      <ChevronRight className="h-4 w-4 text-gray-300 group-hover:text-gray-500 transition-colors mt-1" />
    </div>
    <div className="flex items-baseline gap-2 mb-1">
      <span className="text-base font-semibold text-gray-900">{product.en}</span>
      <ArabicText className="text-sm text-gray-400">{product.arScript}</ArabicText>
    </div>
    <p className="text-sm text-gray-500 leading-relaxed">{product.desc}</p>
  </Link>
);

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section style={{ background: '#0D1B2A', minHeight: '92vh' }} className="relative flex items-center">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: '#1A73E8', opacity: 0.08, filter: 'blur(80px)' }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: '#4F46E5', opacity: 0.08, filter: 'blur(80px)' }} />

        <div className="container-tight text-center relative z-10 pt-24 pb-20 w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-blue-400 mb-8 border" style={{ background: 'rgba(26,115,232,0.12)', borderColor: 'rgba(26,115,232,0.3)' }}>
            <span>🌟</span> AI-Powered · Now Available in Pakistan & GCC
          </div>

          {/* H1 */}
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4" style={{ fontFamily: "'Google Sans Display', sans-serif", letterSpacing: '-0.03em', lineHeight: 1.05 }}>
            Your team's new home.
            <br />
            <span style={{ background: 'linear-gradient(135deg, #1A73E8, #34A853)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Everyone, together.
            </span>
          </h1>

          {/* Subtitle EN */}
          <p className="text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mt-6 mb-3">
            Mail. Chat. Meetings. Docs. Drive. AI.<br />
            Eleven products, one platform — built for Pakistan, Saudi Arabia and the GCC.
          </p>

          {/* Subtitle AR */}
          <ArabicText className="text-base text-gray-500 block mb-8">
            البريد · الدردشة · الاجتماعات · المستندات · الذكاء الاصطناعي — كل شيء في مكان واحد
          </ArabicText>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <Link to="/signup" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium text-base transition-all active:scale-[0.98] hover:brightness-110" style={{ background: '#1A73E8' }}>
              Get started free <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/features" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-gray-300 font-medium text-base border border-gray-600 hover:border-gray-400 transition-all">
              ▶ Watch demo
            </Link>
          </div>
          <p className="text-sm text-gray-500">Free forever for individuals · No credit card required</p>

          {/* Stats bar */}
          <div className="flex flex-wrap gap-8 lg:gap-16 justify-center pt-16 mt-8 border-t border-gray-800">
            {[
              { value: '12K+', label: 'Teams' },
              { value: '150+', label: 'Countries' },
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '11', label: 'Products' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Dashboard mockup */}
          <div className="mt-12 max-w-5xl mx-auto rounded-t-2xl border border-gray-700 overflow-hidden" style={{ background: '#111827' }}>
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-700" style={{ background: '#1F2937' }}>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 mx-4 bg-gray-700 rounded-full py-1 px-3 text-xs text-gray-400 text-center">app.haala.io</div>
            </div>
            {/* App layout */}
            <div className="flex" style={{ minHeight: 280 }}>
              {/* Sidebar */}
              <div className="w-[200px] border-r border-gray-700 p-4 shrink-0">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Workspace</p>
                {[
                  { icon: <Mail className="h-3.5 w-3.5" />, en: 'Barid', ar: 'بريد', color: '#1A73E8' },
                  { icon: <MessageSquare className="h-3.5 w-3.5" />, en: 'Kalam', ar: 'كلام', color: '#34A853' },
                  { icon: <Video className="h-3.5 w-3.5" />, en: 'Majlis', ar: 'مجلس', color: '#EA4335' },
                  { icon: <Calendar className="h-3.5 w-3.5" />, en: 'Maweed', ar: 'موعد', color: '#FBBC04' },
                  { icon: <Sparkles className="h-3.5 w-3.5" />, en: 'Murshid', ar: 'مرشد', color: '#8B5CF6' },
                  { icon: <FileText className="h-3.5 w-3.5" />, en: 'Kitaab', ar: 'كتاب', color: '#1A73E8' },
                  { icon: <HardDrive className="h-3.5 w-3.5" />, en: 'Amana', ar: 'أمانة', color: '#10B981' },
                ].map((item) => (
                  <div key={item.en} className="flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-gray-700 cursor-pointer group">
                    <div className="flex items-center gap-2" style={{ color: item.color }}>{item.icon}<span className="text-xs text-gray-300">{item.en}</span></div>
                    <ArabicText className="text-xs text-gray-500">{item.ar}</ArabicText>
                  </div>
                ))}
              </div>
              {/* Main area */}
              <div className="flex-1 p-6">
                <div className="h-5 bg-gray-700 rounded w-48 mb-2" />
                <div className="h-3.5 bg-gray-800 rounded w-72 mb-5" />
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[0,1,2].map(i => (
                    <div key={i} className="rounded-xl p-4" style={{ background: '#1F2937' }}>
                      <div className="h-3 bg-gray-700 rounded w-16 mb-2" />
                      <div className="h-6 bg-gray-600 rounded w-12" />
                    </div>
                  ))}
                </div>
                {/* AI bubble */}
                <div className="rounded-xl p-4" style={{ background: '#1F2937' }}>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0" style={{ background: '#8B5CF6' }}>م</div>
                    <div>
                      <ArabicText className="text-sm text-gray-300 block mb-1">مرحباً! تقرير الربع الثالث جاهز. هل تريد مني إرساله للفريق؟</ArabicText>
                      <p className="text-xs text-gray-500">Q3 report ready. Want me to email it to the team?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="bg-white py-10 border-y border-gray-100 overflow-hidden">
        <p className="text-sm text-gray-400 text-center mb-6">Trusted by teams across Pakistan, Saudi Arabia and the GCC</p>
        <div className="flex gap-14 flex-wrap justify-center text-gray-300 font-medium">
          {['TechBanq', 'NovaPay PKR', 'Gulf Finco', 'Al-Rashid Group', 'Karachi Ventures', 'Dubai Startup Hub', 'Riyadh Tech'].map(name => (
            <span key={name} className="text-gray-400 font-medium">{name}</span>
          ))}
        </div>
      </section>

      {/* PRODUCT SUITE */}
      <section className="section-padding" style={{ background: '#F9FAFB' }}>
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wider mb-4">
              THE HAALA SUITE
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Eleven tools. One login. Zero compromise.</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">Every product your team needs — deeply integrated, beautifully designed, and AI-native.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map(p => <ProductCard key={p.en} product={p} />)}
          </div>
        </div>
      </section>

      {/* MURSHID AI */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <span className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wider mb-6">
                <Sparkles className="h-3.5 w-3.5" /> MURSHID AI · مرشد
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">AI that understands your whole workspace.</h2>
              <p className="text-gray-500 leading-relaxed mb-6">Murshid isn't just a chatbot. It reads your emails, summarises your meetings, drafts documents and automates workflows — in Arabic, Urdu and English.</p>
              <div className="space-y-3 mb-8">
                {[
                  { en: '"Summarise this week\'s meetings and email the action items to my team"', ar: 'لخّص اجتماعات هذا الأسبوع وأرسل بنود العمل للفريق' },
                  { en: '"Draft a proposal in Arabic for the client meeting tomorrow"', ar: 'اكتب مقترحاً بالعربية لاجتماع العميل غداً' },
                  { en: '"Who hasn\'t responded to my last email?"', ar: 'من لم يرد على بريدي الأخير؟' },
                ].map((prompt, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl border border-gray-100 p-4">
                    <p className="text-sm italic text-gray-700 mb-1">{prompt.en}</p>
                    <ArabicText className="text-xs text-gray-400">{prompt.ar}</ArabicText>
                  </div>
                ))}
              </div>
              <Link to="/products/ai" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium transition-all hover:brightness-110" style={{ background: '#8B5CF6' }}>
                Meet Murshid <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Right — dark AI panel */}
            <div className="rounded-2xl p-6 border border-gray-800" style={{ background: '#030712' }}>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm text-gray-300 font-medium">Murshid · Active</span>
              </div>
              <div className="space-y-4">
                <div className="flex justify-end">
                  <div className="bg-gray-700 rounded-xl p-4 max-w-xs">
                    <p className="text-sm text-gray-200">Summarise Q3 report and email to team</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="rounded-xl p-4 max-w-xs" style={{ background: '#1F2937' }}>
                    <ArabicText className="text-sm text-gray-300 block mb-1">مرحباً! كيف يمكنني مساعدتك اليوم؟</ArabicText>
                    <p className="text-xs text-gray-500">Hi! How can I help you today?</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-purple-400 mb-2">Murshid is working…</p>
                  <div className="flex gap-3 text-xs text-gray-500">
                    <div className="flex items-center gap-1"><Mail className="h-3 w-3" /> Reading emails</div>
                    <div className="flex items-center gap-1"><FileText className="h-3 w-3" /> Opening report</div>
                    <div className="flex items-center gap-1 text-green-400"><Check className="h-3 w-3" /> Draft ready</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY HAALA */}
      <section className="section-padding" style={{ background: '#F9FAFB' }}>
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wider mb-4">
              WHY HAALA
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Built for our world. Not just translated for it.</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">Most productivity tools were built for Silicon Valley. Haala is built for Karachi, Riyadh, Dubai and Istanbul.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyCards.map((c) => (
              <div key={c.en} className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="text-3xl mb-4">{c.emoji}</div>
                <div className="text-base font-semibold text-gray-900 mb-1">{c.en}</div>
                <ArabicText className="text-xs text-gray-400 block mb-3">{c.ar}</ArabicText>
                <p className="text-sm text-gray-500">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Loved by teams across the region</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({length: t.stars}).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="italic text-sm text-gray-700 leading-relaxed mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold ${t.color}`}>{t.initials}</div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{t.flag} {t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENTERPRISE / SECURITY */}
      <section className="section-padding" style={{ background: '#F9FAFB' }}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wider mb-6">
                <Shield className="h-3.5 w-3.5" /> ENTERPRISE & SECURITY
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Enterprise-grade. Regional compliance.</h2>
              <p className="text-gray-500 leading-relaxed mb-8">Built from the ground up for regulated industries and government deployments in the GCC and South Asia.</p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { title: 'SSO / SAML 2.0', desc: 'Enterprise identity integration' },
                  { title: 'Audited annually', desc: 'SOC2 Type II certified' },
                  { title: 'Data Residency', desc: 'UAE & Pakistan servers' },
                  { title: 'On-Premise', desc: 'Full control deployment' },
                ].map((f) => (
                  <div key={f.title} className="bg-white rounded-xl border border-gray-100 p-4">
                    <div className="text-sm font-semibold text-gray-900 mb-1">{f.title}</div>
                    <div className="text-xs text-gray-500">{f.desc}</div>
                  </div>
                ))}
              </div>
              <Link to="/enterprise" className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                Talk to enterprise sales <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="space-y-3">
              {[
                { metric: '99.9%', desc: 'Uptime SLA — guaranteed' },
                { metric: '256-bit', desc: 'AES encryption at rest and in transit' },
                { metric: '24/7', desc: 'Support in Arabic, Urdu and English' },
                { metric: '5 min', desc: 'Average enterprise onboarding time' },
              ].map((row) => (
                <div key={row.metric} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-5">
                  <div className="text-3xl font-bold text-blue-600 min-w-[80px]">{row.metric}</div>
                  <div className="text-sm text-gray-600">{row.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING TEASER */}
      <section className="section-padding bg-white">
        <div className="container-tight">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">Start free. Upgrade when ready.</h2>
          <div className="grid sm:grid-cols-3 gap-5 mb-8 mt-10">
            {[
              { name: 'Free', price: '0', period: 'Forever', desc: 'For individuals & small teams', cta: 'Get started free', href: '/signup', highlight: false },
              { name: 'Business', price: '499', period: 'PKR/user/mo', desc: 'For growing teams', cta: 'Start free trial', href: '/signup?plan=business', highlight: true },
              { name: 'Enterprise', price: 'Custom', period: 'Tailored', desc: 'For large organisations', cta: 'Talk to sales', href: '/contact?subject=enterprise', highlight: false },
            ].map((plan) => (
              <div key={plan.name} className={`rounded-3xl p-8 ${plan.highlight ? 'border-2 border-[#1A73E8] bg-blue-50' : 'border-2 border-gray-100 bg-gray-50'}`}>
                <p className="text-xs uppercase font-semibold text-gray-400 mb-2">{plan.name}</p>
                <div className="text-4xl font-bold text-gray-900 mb-1">{plan.price === '0' ? 'Free' : plan.price}</div>
                <p className="text-sm text-gray-500 mb-1">{plan.period}</p>
                <p className="text-xs text-gray-400 mb-6">{plan.desc}</p>
                <Link to={plan.href} className={`block text-center text-sm font-medium py-2.5 rounded-full transition-all ${plan.highlight ? 'bg-[#1A73E8] text-white hover:brightness-110' : 'border border-gray-200 text-gray-700 hover:bg-white'}`}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/pricing" className="text-sm text-blue-600 hover:text-blue-700">
              See full pricing and feature comparison →
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding" style={{ background: '#0D1B2A' }}>
        <div className="container-tight text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ letterSpacing: '-0.03em' }}>Your team's new home is waiting.</h2>
          <p className="text-gray-400 mb-2">Free forever. No credit card. Set up in 2 minutes.</p>
          <ArabicText className="text-gray-500 block mb-8">مجاني للأبد · بدون بطاقة ائتمان · جاهز في دقيقتين</ArabicText>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-medium text-base hover:brightness-110 transition-all" style={{ background: '#1A73E8' }}>
              Get started free <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-gray-300 font-medium text-base border border-gray-600 hover:border-gray-400 transition-all">
              Talk to sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
