import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Menu, X, ChevronDown, Mail, MessageSquare, Video, Calendar,
  FileText, Table2, StickyNote, CheckSquare, Sparkles, Users,
  HardDrive, ArrowRight, Shield, Building2, Newspaper,
  HelpCircle, Phone,
} from 'lucide-react';
import HaalaLogo from './HaalaLogo';
import LocaleLink from './LocaleLink';
import CountrySelector from './CountrySelector';

const products = [
  { icon: <Mail className="h-4 w-4" />,        color: '#1A73E8', bg: '#EBF3FE', en: 'Mail',       ar: '\u0628\u0631\u064a\u062f', desc: 'Free @haala.io email', href: '/email' },
  { icon: <MessageSquare className="h-4 w-4" />, color: '#34A853', bg: '#E8F5EC', en: 'Chat',       ar: '\u0643\u0644\u0627\u0645', desc: 'Team messaging & channels', href: '/chat' },
  { icon: <Video className="h-4 w-4" />,         color: '#EA4335', bg: '#FDEEEC', en: 'Meetings',   ar: '\u0645\u062c\u0644\u0633', desc: 'HD video meetings', href: '/meetings' },
  { icon: <Calendar className="h-4 w-4" />,      color: '#FBBC04', bg: '#FEF8E6', en: 'Calendar',   ar: '\u0645\u0648\u0639\u062f', desc: 'Smart scheduling', href: '/calendar' },
  { icon: <Sparkles className="h-4 w-4" />,      color: '#8B5CF6', bg: '#F2EEFF', en: 'AI \u00b7 Murshid', ar: '\u0645\u0631\u0634\u062f', desc: 'Your AI companion', href: '/ai' },
  { icon: <Users className="h-4 w-4" />,         color: '#0EA5E9', bg: '#E0F5FE', en: 'People',     ar: '\u062f\u0627\u0626\u0631\u0629', desc: 'Contacts & directory', href: '/people' },
  { icon: <HardDrive className="h-4 w-4" />,     color: '#10B981', bg: '#E6FAF4', en: 'Drive',      ar: '\u0623\u0645\u0627\u0646\u0629', desc: 'Cloud file storage', href: '/drive' },
  { icon: <CheckSquare className="h-4 w-4" />,   color: '#F59E0B', bg: '#FEF3E2', en: 'Tasks',      ar: '\u0625\u0646\u062c\u0627\u0632', desc: 'Projects & Kanban', href: '/tasks' },
  { icon: <FileText className="h-4 w-4" />,      color: '#1A73E8', bg: '#EBF3FE', en: 'Docs',       ar: '\u0643\u062a\u0627\u0628', desc: 'Collaborative docs', href: '/docs' },
  { icon: <Table2 className="h-4 w-4" />,        color: '#34A853', bg: '#E8F5EC', en: 'Sheets',     ar: '\u062d\u0633\u0627\u0628', desc: 'Smart spreadsheets', href: '/sheets' },
  { icon: <StickyNote className="h-4 w-4" />,    color: '#EA4335', bg: '#FDEEEC', en: 'Notes',      ar: '\u062e\u0648\u0627\u0637\u0631', desc: 'Notes & knowledge base', href: '/notes' },
];

const Navbar = () => {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    setActiveMenu(null);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(label);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-200 bg-white/95 backdrop-blur-xl border-b border-gray-100 ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="container-wide flex items-center justify-between h-full">
        {/* Logo */}
        <LocaleLink to="/" className="flex items-center">
          <HaalaLogo size="md" />
        </LocaleLink>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('Products')}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-full ${activeMenu === 'Products' ? 'text-[#1A73E8] bg-blue-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>
              {t('nav.products')} <ChevronDown className={`h-3.5 w-3.5 transition-transform ${activeMenu === 'Products' ? 'rotate-180' : ''}`} />
            </button>
          </div>
          <LocaleLink to="/features"  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${location.pathname.endsWith('/features')  ? 'text-[#1A73E8]' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>{t('nav.features')}</LocaleLink>
          <LocaleLink to="/pricing"   className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${location.pathname.endsWith('/pricing')   ? 'text-[#1A73E8]' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>{t('nav.pricing')}</LocaleLink>
          <LocaleLink to="/enterprise" className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${location.pathname.endsWith('/enterprise') ? 'text-[#1A73E8]' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>{t('nav.enterprise')}</LocaleLink>
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('Company')}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-full ${activeMenu === 'Company' ? 'text-[#1A73E8] bg-blue-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>
              {t('nav.company')} <ChevronDown className={`h-3.5 w-3.5 transition-transform ${activeMenu === 'Company' ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-2">
          <CountrySelector />
          <LocaleLink to="/contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-4 py-2 rounded-full hover:bg-gray-50">
            {t('nav.contact_sales')}
          </LocaleLink>
          <LocaleLink to="/signup" className="text-sm font-medium text-white px-5 py-2.5 rounded-full transition-all active:scale-[0.98]" style={{ background: '#1A73E8' }}>
            {t('nav.get_started')}
          </LocaleLink>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2 text-gray-700" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Products Mega Menu */}
      {activeMenu === 'Products' && (
        <div
          className="hidden lg:block absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-xl z-50"
          onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); setActiveMenu('Products'); }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="container-wide py-8">
            <div className="grid grid-cols-[1fr_320px] gap-8">
              <div className="grid grid-cols-3 gap-2">
                {products.map((p) => (
                  <LocaleLink
                    key={p.href}
                    to={p.href}
                    className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: p.bg, color: p.color }}>
                      {p.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-semibold text-gray-900">{p.en}</span>
                        <span className="text-xs text-gray-400" style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }} dir="rtl" lang="ar">{p.ar}</span>
                      </div>
                      <span className="text-xs text-gray-500">{p.desc}</span>
                    </div>
                  </LocaleLink>
                ))}
              </div>
              <div className="rounded-2xl p-6 text-white flex flex-col justify-between" style={{ background: 'linear-gradient(135deg, #1A73E8, #4F46E5)' }}>
                <div>
                  <p className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">THE HAALA SUITE</p>
                  <h3 className="text-lg font-bold mb-2">11 tools. One login. Zero compromise.</h3>
                  <p className="text-sm text-white/80 leading-relaxed mb-4">Every product your team needs, deeply integrated and AI-native.</p>
                  <div className="grid grid-cols-3 gap-2 bg-white/10 rounded-xl p-3 mb-4">
                    <div className="text-center"><div className="text-xl font-bold">12K+</div><div className="text-xs text-white/70">Teams</div></div>
                    <div className="text-center"><div className="text-xl font-bold">11</div><div className="text-xs text-white/70">Products</div></div>
                    <div className="text-center"><div className="text-xl font-bold">99.9%</div><div className="text-xs text-white/70">Uptime</div></div>
                  </div>
                </div>
                <LocaleLink to="/features" className="flex items-center justify-center gap-2 bg-white text-blue-600 px-4 py-2.5 rounded-full text-sm font-medium hover:bg-white/90 transition-colors">
                  Explore all features <ArrowRight className="h-4 w-4" />
                </LocaleLink>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Company Mega Menu */}
      {activeMenu === 'Company' && (
        <div
          className="hidden lg:block absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-xl z-50"
          onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); setActiveMenu('Company'); }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="container-wide py-8">
            <div className="grid grid-cols-6 gap-4">
              {[
                { icon: <Building2 className="h-4 w-4" />, label: 'About',       desc: 'Our story & mission',  href: '/about' },
                { icon: <Users className="h-4 w-4" />,     label: 'Careers',     desc: '8 open roles',         href: '/careers' },
                { icon: <Newspaper className="h-4 w-4" />, label: 'Blog',        desc: 'News & updates',       href: '/blog' },
                { icon: <Phone className="h-4 w-4" />,     label: 'Contact',     desc: 'Get in touch',         href: '/contact' },
                { icon: <Shield className="h-4 w-4" />,    label: 'Security',    desc: 'PDPL & compliance',    href: '/enterprise' },
                { icon: <HelpCircle className="h-4 w-4" />, label: 'Help Center', desc: 'Support & docs',      href: '/contact' },
              ].map((item) => (
                <LocaleLink key={item.href + item.label} to={item.href} className="flex flex-col gap-2 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">{item.icon}</div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{item.label}</div>
                    <div className="text-xs text-gray-500">{item.desc}</div>
                  </div>
                </LocaleLink>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white max-h-[80vh] overflow-y-auto">
          <div className="py-4 px-4 space-y-1">
            <p className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">{t('nav.products')}</p>
            {products.map((p) => (
              <LocaleLink key={p.href} to={p.href} onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: p.bg, color: p.color }}>{p.icon}</div>
                <div>
                  <span className="text-sm font-medium text-gray-900">{p.en}</span>
                  <span className="text-xs text-gray-400 ms-1.5" dir="rtl" lang="ar" style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}>{p.ar}</span>
                </div>
              </LocaleLink>
            ))}
            <div className="border-t border-gray-100 my-2 pt-2">
              {[
                { label: t('nav.features'),   href: '/features' },
                { label: t('nav.pricing'),    href: '/pricing' },
                { label: 'About',             href: '/about' },
                { label: 'Careers',           href: '/careers' },
                { label: 'Blog',              href: '/blog' },
                { label: t('nav.enterprise'), href: '/enterprise' },
                { label: 'Contact',           href: '/contact' },
              ].map((link) => (
                <LocaleLink key={link.href} to={link.href} onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                  {link.label}
                </LocaleLink>
              ))}
            </div>
            <div className="pt-2 space-y-2">
              {/* Country selector in mobile */}
              <div className="px-3 py-2">
                <CountrySelector />
              </div>
              <LocaleLink to="/signup" onClick={() => setMobileOpen(false)}
                className="block text-white text-sm font-medium text-center px-5 py-3 rounded-full"
                style={{ background: '#1A73E8' }}>
                {t('nav.get_started')}
              </LocaleLink>
              <LocaleLink to="/contact" onClick={() => setMobileOpen(false)}
                className="block text-gray-700 text-sm font-medium text-center px-5 py-3 rounded-full border border-gray-200 hover:bg-gray-50">
                {t('nav.contact_sales')}
              </LocaleLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
