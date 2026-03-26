import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'ur', name: 'اردو', flag: '🇵🇰' },
  { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const currentLang = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0];

  const handleSelect = (code: string) => {
    i18n.changeLanguage(code);
    // Update HTML dir and lang attributes
    const isRTL = code === 'ar' || code === 'ur';
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = code;
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-colors border border-gray-200"
        aria-expanded={open}
        aria-haspopup="listbox"
        title="Change language"
      >
        <span className="text-base leading-none">{currentLang.flag}</span>
        <span className="hidden sm:inline text-xs font-medium uppercase">{currentLang.code}</span>
        <ChevronDown className={`h-3 w-3 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div
          className="absolute end-0 top-full mt-2 w-48 bg-white rounded-2xl border border-gray-200 shadow-xl z-50 overflow-hidden py-2"
          role="listbox"
        >
          {LANGUAGES.map((lang) => {
            const isSelected = i18n.language === lang.code;
            return (
              <button
                key={lang.code}
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                  isSelected ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span className="text-xl leading-none">{lang.flag}</span>
                <div className="text-left flex-1">
                  <div className="font-medium text-sm uppercase">{lang.code}</div>
                </div>
                {isSelected && (
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
