import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useLocale, COUNTRIES, CountryCode, VALID_COUNTRY_CODES } from '../context/LocaleContext';

const GROUPS: { label: string; codes: CountryCode[] }[] = [
  { label: 'Gulf', codes: ['sa', 'ae', 'bh', 'qa', 'kw'] },
  { label: 'South Asia', codes: ['pk', 'bd'] },
  { label: 'North Africa', codes: ['eg', 'ma', 'tn', 'ly', 'dz'] },
];

export default function CountrySelector() {
  const { country, setCountry } = useLocale();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSelect = (code: CountryCode) => {
    setCountry(code);
    const parts = location.pathname.split('/').filter(Boolean);
    const hasCountry = VALID_COUNTRY_CODES.includes(parts[0] as CountryCode);
    const restPath = hasCountry ? '/' + parts.slice(1).join('/') : location.pathname;
    const cleanPath = restPath === '/' || restPath === '' ? '' : restPath;
    navigate(`/${code}${cleanPath}${location.search}`, { replace: true });
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-colors border border-gray-200"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span className="text-base leading-none">{country.flag}</span>
        <span className="hidden sm:inline text-xs font-medium">{country.name}</span>
        <ChevronDown className={`h-3 w-3 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div
          className="absolute end-0 top-full mt-2 w-64 bg-white rounded-2xl border border-gray-200 shadow-xl z-50 overflow-hidden py-2"
          role="listbox"
        >
          {GROUPS.map(({ label, codes }) => (
            <div key={label}>
              <p className="px-4 pt-3 pb-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                {label}
              </p>
              {codes.map((code) => {
                const c = COUNTRIES[code];
                const isSelected = country.code === code;
                return (
                  <button
                    key={code}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(code)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                      isSelected ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-xl leading-none">{c.flag}</span>
                    <div className="text-left">
                      <div className="font-medium text-sm">{c.name}</div>
                      <div className="text-xs text-gray-400">{c.nameLocal} &middot; {c.currency}</div>
                    </div>
                    {isSelected && (
                      <div className="ms-auto w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
