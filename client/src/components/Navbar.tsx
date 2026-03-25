import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu, X, ChevronDown, Mail, MessageSquare, Video, Calendar,
  FileText, Table2, StickyNote, CheckSquare, Sparkles, Users,
  HardDrive, ArrowRight, Shield, Building2, BookOpen, Newspaper,
  HelpCircle, Phone, Globe
} from "lucide-react";
import HaalaLogo from "./HaalaLogo";

const products = [
  { icon: <Mail className="h-4 w-4" />, color: '#1A73E8', bg: '#EBF3FE', en: 'Mail', ar: 'بريد', desc: 'Free @haala.io email', href: '/products/mail' },
  { icon: <MessageSquare className="h-4 w-4" />, color: '#34A853', bg: '#E8F5EC', en: 'Chat', ar: 'كلام', desc: 'Team messaging & channels', href: '/products/chat' },
  { icon: <Video className="h-4 w-4" />, color: '#EA4335', bg: '#FDEEEC', en: 'Meetings', ar: 'مجلس', desc: 'HD video meetings', href: '/products/meetings' },
  { icon: <Calendar className="h-4 w-4" />, color: '#FBBC04', bg: '#FEF8E6', en: 'Calendar', ar: 'موعد', desc: 'Smart scheduling', href: '/products/calendar' },
  { icon: <Sparkles className="h-4 w-4" />, color: '#8B5CF6', bg: '#F2EEFF', en: 'AI · Murshid', ar: 'مرشد', desc: 'Your AI companion', href: '/products/ai' },
  { icon: <Users className="h-4 w-4" />, color: '#0EA5E9', bg: '#E0F5FE', en: 'People', ar: 'دائرة', desc: 'Contacts & directory', href: '/products/people' },
  { icon: <HardDrive className="h-4 w-4" />, color: '#10B981', bg: '#E6FAF4', en: 'Drive', ar: 'أمانة', desc: 'Cloud file storage', href: '/products/drive' },
  { icon: <CheckSquare className="h-4 w-4" />, color: '#F59E0B', bg: '#FEF3E2', en: 'Tasks', ar: 'إنجاز', desc: 'Projects & Kanban', href: '/products/tasks' },
  { icon: <FileText className="h-4 w-4" />, color: '#1A73E8', bg: '#EBF3FE', en: 'Docs', ar: 'كتاب', desc: 'Collaborative docs', href: '/products/docs' },
  { icon: <Table2 className="h-4 w-4" />, color: '#34A853', bg: '#E8F5EC', en: 'Sheets', ar: 'حساب', desc: 'Smart spreadsheets', href: '/products/sheets' },
  { icon: <StickyNote className="h-4 w-4" />, color: '#EA4335', bg: '#FDEEEC', en: 'Notes', ar: 'خواطر', desc: 'Notes & knowledge base', href: '/products/notes' },
];

const Navbar = () => {
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
        <Link to="/" className="flex items-center">
          <HaalaLogo size="md" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {/* Products dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('Products')}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-full ${activeMenu === 'Products' ? 'text-[#1A73E8] bg-blue-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>
              Products <ChevronDown className={`h-3.5 w-3.5 transition-transform ${activeMenu === 'Products' ? 'rotate-180' : ''}`} />
            </button>
          </div>
          <Link to="/features" className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${location.pathname === '/features' ? 'text-[#1A73E8]' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>Features</Link>
          <Link to="/pricing" className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${location.pathname === '/pricing' ? 'text-[#1A73E8]' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>Pricing</Link>
          <Link to="/enterprise" className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${location.pathname === '/enterprise' ? 'text-[#1A73E8]' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>Enterprise</Link>
          {/* Company dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('Company')}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-full ${activeMenu === 'Company' ? 'text-[#1A73E8] bg-blue-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>
              Company <ChevronDown className={`h-3.5 w-3.5 transition-transform ${activeMenu === 'Company' ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-4 py-2 rounded-full hover:bg-gray-50">
            Contact sales
          </Link>
          <Link to="/signup" className="text-sm font-medium text-white px-5 py-2.5 rounded-full transition-all active:scale-[0.98]" style={{ background: '#1A73E8' }}>
            Get started free
          </Link>
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
                  <Link
                    key={p.href}
                    to={p.href}
                    className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all" style={{ background: p.bg, color: p.color }}>
                      {p.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-semibold text-gray-900">{p.en}</span>
                        <span className="text-xs text-gray-400" style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }} dir="rtl" lang="ar">{p.ar}</span>
                      </div>
                      <span className="text-xs text-gray-500">{p.desc}</span>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="rounded-2xl p-6 text-white flex flex-col justify-between" style={{ background: 'linear-gradient(135deg, #1A73E8, #4F46E5)' }}>
                <div>
                  <p className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">THE HAALA SUITE</p>
                  <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "'Google Sans Display', sans-serif" }}>11 tools. One login. Zero compromise.</h3>
                  <p className="text-sm text-white/80 leading-relaxed mb-4">Every product your team needs, deeply integrated and AI-native.</p>
                  <div className="grid grid-cols-3 gap-2 bg-white/10 rounded-xl p-3 mb-4">
                    <div className="text-center"><div className="text-xl font-bold">12K+</div><div className="text-xs text-white/70">Teams</div></div>
                    <div className="text-center"><div className="text-xl font-bold">11</div><div className="text-xs text-white/70">Products</div></div>
                    <div className="text-center"><div className="text-xl font-bold">99.9%</div><div className="text-xs text-white/70">Uptime</div></div>
                  </div>
                </div>
                <Link to="/features" className="flex items-center justify-center gap-2 bg-white text-blue-600 px-4 py-2.5 rounded-full text-sm font-medium hover:bg-white/90 transition-colors">
                  Explore all features <ArrowRight className="h-4 w-4" />
                </Link>
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
                { icon: <Building2 className="h-4 w-4" />, label: 'About', desc: 'Our story & mission', href: '/about' },
                { icon: <Users className="h-4 w-4" />, label: 'Careers', desc: '8 open roles', href: '/careers' },
                { icon: <Newspaper className="h-4 w-4" />, label: 'Blog', desc: 'News & updates', href: '/blog' },
                { icon: <Phone className="h-4 w-4" />, label: 'Contact', desc: 'Get in touch', href: '/contact' },
                { icon: <Shield className="h-4 w-4" />, label: 'Security', desc: 'PDPL & compliance', href: '/enterprise' },
                { icon: <HelpCircle className="h-4 w-4" />, label: 'Help Center', desc: 'Support & docs', href: '/contact' },
              ].map((item) => (
                <Link key={item.href + item.label} to={item.href} className="flex flex-col gap-2 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">{item.icon}</div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{item.label}</div>
                    <div className="text-xs text-gray-500">{item.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white max-h-[80vh] overflow-y-auto">
          <div className="py-4 px-4 space-y-1">
            <p className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Products</p>
            {products.map((p) => (
              <Link key={p.href} to={p.href} onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: p.bg, color: p.color }}>{p.icon}</div>
                <div>
                  <span className="text-sm font-medium text-gray-900">{p.en}</span>
                  <span className="text-xs text-gray-400 ml-1.5" dir="rtl" lang="ar" style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}>{p.ar}</span>
                </div>
              </Link>
            ))}
            <div className="border-t border-gray-100 my-2 pt-2">
              {[
                { label: 'Features', href: '/features' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'About', href: '/about' },
                { label: 'Careers', href: '/careers' },
                { label: 'Blog', href: '/blog' },
                { label: 'Enterprise', href: '/enterprise' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <Link key={link.href} to={link.href} onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="pt-2 flex flex-col gap-2">
              <Link to="/signup" onClick={() => setMobileOpen(false)}
                className="block text-white text-sm font-medium text-center px-5 py-3 rounded-full"
                style={{ background: '#1A73E8' }}>
                Get started free
              </Link>
              <Link to="/contact" onClick={() => setMobileOpen(false)}
                className="block text-gray-700 text-sm font-medium text-center px-5 py-3 rounded-full border border-gray-200 hover:bg-gray-50">
                Contact sales
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
