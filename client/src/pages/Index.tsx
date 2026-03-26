import { useTranslation } from 'react-i18next';
import {
  Mail, MessageSquare, Video, Calendar, Sparkles, Users, HardDrive,
  CheckSquare, FileText, Table2, StickyNote, Star, ChevronRight, ArrowRight,
} from 'lucide-react';
import { useLocale } from '../context/LocaleContext';
import LocaleLink from '../components/LocaleLink';

const products = [
  { icon: <Mail className="h-5 w-5" />,        color: '#1A73E8', bg: '#EBF3FE', key: 'Mail',       href: '/email' },
  { icon: <MessageSquare className="h-5 w-5" />, color: '#34A853', bg: '#E8F5EC', key: 'Chat',       href: '/chat' },
  { icon: <Video className="h-5 w-5" />,         color: '#EA4335', bg: '#FDEEEC', key: 'Meetings',   href: '/meetings' },
  { icon: <Calendar className="h-5 w-5" />,      color: '#FBBC04', bg: '#FEF8E6', key: 'Calendar',   href: '/calendar' },
  { icon: <Users className="h-5 w-5" />,         color: '#0EA5E9', bg: '#E0F5FE', key: 'People',     href: '/people' },
  { icon: <HardDrive className="h-5 w-5" />,     color: '#10B981', bg: '#E6FAF4', key: 'Drive',      href: '/drive' },
  { icon: <Sparkles className="h-5 w-5" />,      color: '#8B5CF6', bg: '#F2EEFF', key: 'AI·Murshid', href: '/ai' },
  { icon: <CheckSquare className="h-5 w-5" />,   color: '#F59E0B', bg: '#FEF3E2', key: 'Tasks',      href: '/tasks' },
  { icon: <FileText className="h-5 w-5" />,      color: '#1A73E8', bg: '#EBF3FE', key: 'Docs',       href: '/docs' },
  { icon: <Table2 className="h-5 w-5" />,        color: '#34A853', bg: '#E8F5EC', key: 'Sheets',     href: '/sheets' },
  { icon: <StickyNote className="h-5 w-5" />,    color: '#EA4335', bg: '#FDEEEC', key: 'Notes',      href: '/notes' },
];

const productDesc: Record<string, string> = {
  'Mail':       'Free @haala.io email for everyone',
  'Chat':       'Team messaging & channels',
  'Meetings':   'HD video meetings, no download',
  'Calendar':   'Smart scheduling, Hijri + Gregorian',
  'People':     'Contacts & org directory',
  'Drive':      'Cloud file storage & sharing',
  'AI·Murshid': 'Your AI companion for everything',
  'Tasks':      'Projects, Kanban & Gantt',
  'Docs':       'Collaborative documents',
  'Sheets':     'Smart spreadsheets & formulas',
  'Notes':      'Notes & knowledge base',
};

const testimonials = [
  {
    stars: 5,
    quote: 'Haala replaced Google Workspace for our 80-person team. We saved SAR 180,000 a year and the Arabic UI made adoption instant.',
    initials: 'MQ', name: 'Mohammed Al-Qahtani', flag: '\uD83C\uDDF8\uD83C\uDDE6', role: 'CTO, Saudi Fintech Co.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    stars: 5,
    quote: 'Murshid AI writes half my emails. The product quality matches Google — but it actually understands our market and language.',
    initials: 'FM', name: 'Fatima Malik', flag: '\uD83C\uDDF5\uD83C\uDDF0', role: 'Founder, Lahore Startup',
    color: 'bg-green-100 text-green-600',
  },
  {
    stars: 5,
    quote: 'The on-premise deployment option was critical for our government contract. Haala delivered everything we needed.',
    initials: 'OH', name: 'Omar Al-Hassan', flag: '\uD83C\uDDE6\uD83C\uDDEA', role: 'Director of Technology, Dubai Gov Agency',
    color: 'bg-purple-100 text-purple-600',
  },
];

export default function HomePage() {
  const { t } = useTranslation();
  const { country } = useLocale();
  const isRTL = country.dir === 'rtl';

  const whyCards = [
    { emoji: '\uD83C\uDF19', title: t('why.rtl_title'),     desc: t('why.rtl_desc') },
    { emoji: '\uD83D\uDCB8', title: t('why.pricing_title'), desc: t('why.pricing_desc', { price: `${country.currency} ${country.businessPrice}/mo` }) },
    { emoji: '\uD83D\uDD12', title: t('why.data_title'),    desc: t('why.data_desc') },
    { emoji: '\uD83D\uDCF1', title: t('why.mobile_title'),  desc: t('why.mobile_desc') },
    { emoji: '\uD83C\uDD93', title: t('why.free_title'),    desc: t('why.free_desc') },
    { emoji: '\uD83E\uDD1D', title: t('why.support_title'), desc: t('why.support_desc') },
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative flex items-center" style={{ background: '#FFFFFF', minHeight: '92vh' }}>
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: '#1A73E8', opacity: 0.04, filter: 'blur(80px)' }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: '#34A853', opacity: 0.04, filter: 'blur(80px)' }} />

        <div className="container-tight text-center relative z-10 pt-24 pb-20 w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-blue-600 mb-8 border" style={{ background: 'rgba(26,115,232,0.08)', borderColor: 'rgba(26,115,232,0.2)' }}>
            <span>\uD83C\uDF1F</span>
            {t('hero.badge', { region: country.regionName })}
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-0.03em', lineHeight: 1.05 }}>
            {t('hero.title1')}
            <br />
            <span style={{ background: 'linear-gradient(135deg, #1A73E8, #34A853)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {t('hero.title2')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mt-6 mb-8">
            {t('hero.subtitle', { region: country.regionName })}
          </p>

          {/* CTAs */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <LocaleLink
              to="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base transition-all active:scale-[0.98] hover:brightness-110"
              style={{ background: '#1A73E8' }}
            >
              {t('hero.cta_primary')} <ArrowRight className="h-5 w-5" />
            </LocaleLink>
            <LocaleLink
              to="/features"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-gray-700 font-semibold text-base border border-gray-300 hover:border-gray-400 transition-all"
            >
              &#9654; {t('hero.cta_secondary')}
            </LocaleLink>
          </div>
          <p className="text-sm text-gray-500">{t('hero.free_note')}</p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 lg:gap-16 justify-center pt-16 mt-8 border-t border-gray-200">
            {[
              { value: '12K+', label: t('hero.stats_teams') },
              { value: '150+', label: t('hero.stats_countries') },
              { value: '99.9%', label: t('hero.stats_uptime') },
              { value: '11',   label: t('hero.stats_products') },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Dashboard mockup */}
          <div className="mt-12 max-w-5xl mx-auto rounded-t-2xl border border-gray-300 overflow-hidden" style={{ background: '#F9FAFB' }}>
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-300" style={{ background: '#F3F4F6' }}>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 mx-4 bg-gray-300 rounded-full py-1 px-3 text-xs text-gray-600 text-center" dir="ltr">app.haala.io/{country.code}</div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-gray-400 text-sm">Dashboard Preview</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-24 bg-white">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{t('products.title')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('products.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <LocaleLink
                key={p.key}
                to={p.href}
                className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 block"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: p.bg, color: p.color }}>
                    {p.icon}
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-300 group-hover:text-gray-500 transition-colors mt-1" />
                </div>
                <div className="text-base font-semibold text-gray-900 mb-1">{p.key}</div>
                <p className="text-sm text-gray-600 leading-relaxed">{productDesc[p.key]}</p>
              </LocaleLink>
            ))}
          </div>
        </div>
      </section>

      {/* WHY HAALA */}
      <section className="py-24 bg-gray-50">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{t('why.title')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('why.subtitle', { city1: country.cities[0], city2: country.cities[1], city3: country.cities[2] })}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-8 border border-gray-200">
                <div className="text-4xl mb-4">{card.emoji}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{t('testimonials.title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((tm, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(tm.stars)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">&ldquo;{tm.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${tm.color}`}>
                    {tm.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{tm.flag} {tm.name}</div>
                    <div className="text-sm text-gray-500">{tm.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 bg-gray-50">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{t('pricing.title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Free */}
            <div className="rounded-2xl p-8 border border-gray-200 bg-white">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('pricing.free_name')}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">{t('pricing.free_price')}</span>
                <span className="text-gray-600 ms-2 text-sm">{t('pricing.free_period')}</span>
              </div>
              <p className="text-gray-600 mb-6">{t('pricing.free_desc')}</p>
              <LocaleLink to="/signup" className="block text-center px-6 py-3 rounded-full font-medium transition-all" style={{ background: '#F3F4F6', color: '#1F2937' }}>
                {t('pricing.free_cta')}
              </LocaleLink>
            </div>

            {/* Business */}
            <div className="rounded-2xl p-8 border-2 border-blue-500 bg-blue-50">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('pricing.business_name')}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">{country.businessPrice}</span>
                <span className="text-gray-600 ms-2 text-sm">{t('pricing.business_period', { currency: country.currency })}</span>
              </div>
              <p className="text-gray-600 mb-6">{t('pricing.business_desc')}</p>
              <LocaleLink to="/signup" className="block text-center px-6 py-3 rounded-full font-medium text-white transition-all" style={{ background: '#1A73E8' }}>
                {t('pricing.business_cta')}
              </LocaleLink>
            </div>

            {/* Enterprise */}
            <div className="rounded-2xl p-8 border border-gray-200 bg-white">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('pricing.enterprise_name')}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">{t('pricing.enterprise_price')}</span>
                <span className="text-gray-600 ms-2 text-sm">{t('pricing.enterprise_period')}</span>
              </div>
              <p className="text-gray-600 mb-6">{t('pricing.enterprise_desc')}</p>
              <LocaleLink to="/contact" className="block text-center px-6 py-3 rounded-full font-medium transition-all" style={{ background: '#F3F4F6', color: '#1F2937' }}>
                {t('pricing.enterprise_cta')}
              </LocaleLink>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container-tight text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">{t('cta.title')}</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">{t('cta.subtitle')}</p>
          <LocaleLink
            to="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-all"
          >
            {t('cta.button')} <ArrowRight className="h-5 w-5" />
          </LocaleLink>
        </div>
      </section>
    </div>
  );
}
