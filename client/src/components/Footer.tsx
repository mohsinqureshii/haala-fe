import { Link } from "react-router-dom";
import { Twitter, Linkedin, Youtube, Instagram } from "lucide-react";
import HaalaLogo from "./HaalaLogo";
import ArabicText from "./ArabicText";

const products = [
  { en: 'Mail', ar: 'بريد', href: '/products/mail' },
  { en: 'Chat', ar: 'كلام', href: '/products/chat' },
  { en: 'Meetings', ar: 'مجلس', href: '/products/meetings' },
  { en: 'Calendar', ar: 'موعد', href: '/products/calendar' },
  { en: 'AI · Murshid', ar: 'مرشد', href: '/products/ai' },
  { en: 'People', ar: 'دائرة', href: '/products/people' },
  { en: 'Drive', ar: 'أمانة', href: '/products/drive' },
  { en: 'Tasks', ar: 'إنجاز', href: '/products/tasks' },
  { en: 'Docs', ar: 'كتاب', href: '/products/docs' },
  { en: 'Sheets', ar: 'حساب', href: '/products/sheets' },
  { en: 'Notes', ar: 'خواطر', href: '/products/notes' },
];

const Footer = () => (
  <footer style={{ background: '#030712' }} className="text-gray-300">
    <div className="container-wide pt-16 pb-8">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
        {/* Brand col */}
        <div className="col-span-2">
          <HaalaLogo dark size="lg" />
          <p className="text-sm text-gray-500 mt-2 mb-1">Everyone, together.</p>
          <ArabicText className="text-sm text-gray-600 block mb-4">الجميع، معاً — هالة</ArabicText>
          <div className="flex gap-3 mb-6">
            {[Twitter, Linkedin, Youtube, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <div className="space-y-1 text-xs text-gray-500">
            <div>🇵🇰 Lahore, Pakistan</div>
            <div>🇸🇦 Riyadh, Saudi Arabia</div>
            <div>🇦🇪 Dubai, UAE</div>
            <div>🇧🇭 Manama, Bahrain</div>
          </div>
        </div>

        {/* Products */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Products</p>
          <ul className="space-y-2">
            {products.map((p) => (
              <li key={p.href}>
                <Link to={p.href} className="text-sm text-gray-500 hover:text-white transition-colors flex items-center gap-1.5">
                  {p.en}
                  <ArabicText className="text-xs text-gray-600">{p.ar}</ArabicText>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Solutions</p>
          <ul className="space-y-2 text-sm text-gray-500">
            {[
              ['Startups', '/pricing'],
              ['Mid-Market', '/pricing'],
              ['Enterprise', '/enterprise'],
              ['Government', '/enterprise'],
              ['Healthcare', '/enterprise'],
              ['Financial Services', '/enterprise'],
            ].map(([label, href]) => (
              <li key={label}><Link to={href} className="hover:text-white transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Company</p>
          <ul className="space-y-2 text-sm text-gray-500">
            {[
              ['About', '/about'],
              ['Careers', '/careers'],
              ['Blog', '/blog'],
              ['Contact', '/contact'],
              ['Press', '/about'],
              ['Partners', '/contact'],
            ].map(([label, href]) => (
              <li key={label}><Link to={href} className="hover:text-white transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Resources + Legal */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Resources</p>
          <ul className="space-y-2 text-sm text-gray-500 mb-6">
            {[
              ['Help Center', '/contact'],
              ['Documentation', '/contact'],
              ['Status Page', '/contact'],
              ['Changelog', '/blog'],
            ].map(([label, href]) => (
              <li key={label}><Link to={href} className="hover:text-white transition-colors">{label}</Link></li>
            ))}
          </ul>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Legal</p>
          <ul className="space-y-2 text-sm text-gray-500">
            {[
              ['Privacy Policy', '/privacy'],
              ['Terms of Service', '/terms'],
              ['Security', '/enterprise'],
            ].map(([label, href]) => (
              <li key={label}><Link to={href} className="hover:text-white transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-xs text-gray-600">
          © 2026 Haala · TechBanq. All rights reserved. Made with ♥ for Pakistan & the GCC.
        </div>
        <div className="flex items-center gap-3 text-xs text-gray-600">
          <span className="bg-gray-800 px-2 py-1 rounded">SOC 2 Type II</span>
          <span className="bg-gray-800 px-2 py-1 rounded">GDPR</span>
          <span className="bg-gray-800 px-2 py-1 rounded">ISO 27001</span>
          <span className="bg-gray-800 px-2 py-1 rounded">PDPL</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
