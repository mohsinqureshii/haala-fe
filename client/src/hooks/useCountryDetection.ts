import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CountryCode, IP_TO_COUNTRY, LANG_TO_COUNTRY, VALID_COUNTRY_CODES } from '../context/LocaleContext';

async function detectFromIP(): Promise<CountryCode | null> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 3000);
  try {
    const res = await fetch('https://ipapi.co/json/', { signal: controller.signal });
    clearTimeout(timeoutId);
    if (!res.ok) return null;
    const data = await res.json();
    return IP_TO_COUNTRY[data.country_code as string] ?? null;
  } catch {
    clearTimeout(timeoutId);
    return null;
  }
}

function detectFromLanguage(): CountryCode | null {
  const langs: readonly string[] = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];
  for (const lang of langs) {
    if (LANG_TO_COUNTRY[lang]) return LANG_TO_COUNTRY[lang];
    const prefix = lang.split('-')[0];
    if (LANG_TO_COUNTRY[prefix]) return LANG_TO_COUNTRY[prefix];
  }
  return null;
}

export function useCountryDetection() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const doRedirect = (code: CountryCode) => {
      const path = location.pathname === '/' ? '' : location.pathname;
      navigate(`/${code}${path}${location.search}`, { replace: true });
    };

    // 1. Stored preference (sync, instant)
    const stored = localStorage.getItem('haala_country') as CountryCode | null;
    if (stored && VALID_COUNTRY_CODES.includes(stored)) {
      doRedirect(stored);
      return;
    }

    // 2. Browser language (sync)
    const fromLang = detectFromLanguage();
    if (fromLang) {
      doRedirect(fromLang);
      return;
    }

    // 3. IP geolocation (async fallback)
    detectFromIP().then((country) => {
      doRedirect(country ?? 'sa');
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
