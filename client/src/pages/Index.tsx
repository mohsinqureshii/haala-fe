import { Link } from "react-router-dom";
import {
  Mail, MessageSquare, Video, Calendar, Sparkles, Users, HardDrive,
  CheckSquare, FileText, Table2, StickyNote, Star, Shield, ChevronRight,
  ArrowRight, Check
} from "lucide-react";

const products = [
  { icon: <Mail className="h-5 w-5" />, color: '#1A73E8', bg: '#EBF3FE', en: 'Mail', desc: 'Free @haala.io email for everyone', href: '/products/mail' },
  { icon: <MessageSquare className="h-5 w-5" />, color: '#34A853', bg: '#E8F5EC', en: 'Chat', desc: 'Team messaging & channels', href: '/products/chat' },
  { icon: <Video className="h-5 w-5" />, color: '#EA4335', bg: '#FDEEEC', en: 'Meetings', desc: 'HD video meetings, no download', href: '/products/meetings' },
  { icon: <Calendar className="h-5 w-5" />, color: '#FBBC04', bg: '#FEF8E6', en: 'Calendar', desc: 'Smart scheduling, Hijri + Gregorian', href: '/products/calendar' },
  { icon: <Users className="h-5 w-5" />, color: '#0EA5E9', bg: '#E0F5FE', en: 'People', desc: 'Contacts & org directory', href: '/products/people' },
  { icon: <HardDrive className="h-5 w-5" />, color: '#10B981', bg: '#E6FAF4', en: 'Drive', desc: 'Cloud file storage & sharing', href: '/products/drive' },
  { icon: <Sparkles className="h-5 w-5" />, color: '#8B5CF6', bg: '#F2EEFF', en: 'AI · Murshid', desc: 'Your AI companion for everything', href: '/products/ai' },
  { icon: <CheckSquare className="h-5 w-5" />, color: '#F59E0B', bg: '#FEF3E2', en: 'Tasks', desc: 'Projects, Kanban & Gantt', href: '/products/tasks' },
  { icon: <FileText className="h-5 w-5" />, color: '#1A73E8', bg: '#EBF3FE', en: 'Docs', desc: 'Collaborative documents', href: '/products/docs' },
  { icon: <Table2 className="h-5 w-5" />, color: '#34A853', bg: '#E8F5EC', en: 'Sheets', desc: 'Smart spreadsheets & formulas', href: '/products/sheets' },
  { icon: <StickyNote className="h-5 w-5" />, color: '#EA4335', bg: '#FDEEEC', en: 'Notes', desc: 'Notes & knowledge base', href: '/products/notes' },
];

const whyCards = [
  { emoji: '🌙', en: 'Arabic & Urdu First', desc: 'Full RTL support built in from day one, not bolted on.' },
  { emoji: '💸', en: 'Priced for Our Markets', desc: 'Plans from PKR 499/mo and SAR 25/mo. Not $20/user/month.' },
  { emoji: '🔒', en: 'Data Stays in Region', desc: 'Servers in UAE and Pakistan. PDPL compliant.' },
  { emoji: '📱', en: 'Mobile-First', desc: 'Designed for how we actually work — on our phones.' },
  { emoji: '🆓', en: 'Actually Free', desc: 'Not a trial. Free forever for individuals.' },
  { emoji: '🤝', en: 'Local Support', desc: 'Arabic, Urdu and English. Real humans.' },
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
  <Link to={product.href} className="group bg-white rounded-3xl border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 block min-h-[280px] flex flex-col">
    <div className="flex items-start justify-between mb-6">
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: product.bg, color: product.color }}>
        {product.icon}
      </div>
      <ChevronRight className="h-5 w-5 text-gray-300 group-hover:text-gray-500 transition-colors" />
    </div>
    <div className="flex items-baseline gap-2 mb-3 flex-grow-0">
      <span className="text-lg font-bold text-gray-900">{product.en}</span>
    </div>
    <p className="text-base text-gray-600 leading-relaxed flex-grow">{product.desc}</p>
  </Link>
);

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* HERO - Light White Background */}
      <section className="relative flex items-center" style={{ background: '#FFFFFF', minHeight: '92vh' }}>
        {/* Subtle gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: '#1A73E8', opacity: 0.04, filter: 'blur(80px)' }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: '#34A853', opacity: 0.04, filter: 'blur(80px)' }} />

        <div className="container-tight text-center relative z-10 pt-24 pb-20 w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-blue-600 mb-8 border" style={{ background: 'rgba(26,115,232,0.08)', borderColor: 'rgba(26,115,232,0.2)' }}>
            <span>🌟</span> AI-Powered · Now Available in Pakistan & GCC
          </div>

          {/* H1 - English Only */}
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-0.03em', lineHeight: 1.05, fontWeight: 700 }}>
            Your team's new home.
            <br />
            <span style={{ background: 'linear-gradient(135deg, #1A73E8, #34A853)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Everyone, together.
            </span>
          </h1>

          {/* Subtitle - English Only */}
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mt-6 mb-8">
            Mail. Chat. Meetings. Docs. Drive. AI.<br />
            Eleven products, one platform — built for Pakistan, Saudi Arabia and the GCC.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <Link to="/signup" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium text-base transition-all active:scale-[0.98] hover:brightness-110" style={{ background: '#1A73E8' }}>
              Get started free <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/features" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-gray-700 font-medium text-base border border-gray-300 hover:border-gray-400 transition-all">
              ▶ Watch demo
            </Link>
          </div>
          <p className="text-sm text-gray-500">Free forever for individuals · No credit card required</p>

          {/* Stats bar */}
          <div className="flex flex-wrap gap-8 lg:gap-16 justify-center pt-16 mt-8 border-t border-gray-200">
            {[
              { value: '12K+', label: 'Teams' },
              { value: '150+', label: 'Countries' },
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '11', label: 'Products' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Dashboard mockup */}
          <div className="mt-12 max-w-5xl mx-auto rounded-t-2xl border border-gray-300 overflow-hidden" style={{ background: '#F9FAFB' }}>
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-300" style={{ background: '#F3F4F6' }}>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 mx-4 bg-gray-300 rounded-full py-1 px-3 text-xs text-gray-600 text-center">app.haala.io</div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="text-gray-400 text-sm">Dashboard Preview</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION - Clean White Canvas */}
      <section className="py-32 bg-white">
        <div className="container-tight">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Eleven tools. One login. Zero compromise.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every product your team needs — deeply integrated, beautifully designed, and AI-native.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.en} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY HAALA SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Built for our world. Not just translated for it.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Most productivity tools were built for Silicon Valley. Haala is built for Karachi, Riyadh, Dubai and Istanbul.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyCards.map((card) => (
              <div key={card.en} className="bg-white rounded-2xl p-8 border border-gray-200">
                <div className="text-4xl mb-4">{card.emoji}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{card.en}</h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 bg-white">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Loved by teams across the region
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${testimonial.color}`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.flag} {testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Start free. Upgrade when ready.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Free', price: 'Free', period: 'Forever', desc: 'For individuals & small teams', cta: 'Get started free' },
              { name: 'Business', price: '499', period: 'PKR/user/mo', desc: 'For growing teams', cta: 'Start free trial', highlight: true },
              { name: 'Enterprise', price: 'Custom', period: 'Tailored', desc: 'For large organisations', cta: 'Talk to sales' },
            ].map((plan) => (
              <div key={plan.name} className={`rounded-2xl p-8 border ${plan.highlight ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'}`}>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.desc}</p>
                <Link to="/signup" className="block text-center px-6 py-3 rounded-full font-medium transition-all" style={{ background: plan.highlight ? '#1A73E8' : '#F3F4F6', color: plan.highlight ? 'white' : '#1F2937' }}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container-tight text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Your team's new home is waiting.
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Free forever. No credit card. Set up in 2 minutes.
          </p>
          <Link to="/signup" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-blue-600 font-medium hover:bg-blue-50 transition-all">
            Get started free <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
