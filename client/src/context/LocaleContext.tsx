import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import i18n from '../i18n';

export type CountryCode =
  | 'sa' | 'pk' | 'ae' | 'bh' | 'qa' | 'kw' | 'bd' | 'eg' | 'ma' | 'tn' | 'ly' | 'dz';

export type LangCode = 'ar' | 'ur' | 'bn' | 'en';

export interface CountryConfig {
  code: CountryCode;
  name: string;
  nameLocal: string;
  flag: string;
  language: LangCode;
  dir: 'rtl' | 'ltr';
  currency: string;
  businessPrice: number;
  cities: [string, string, string];
  regionName: string;
}

export const COUNTRIES: Record<CountryCode, CountryConfig> = {
  sa: { code: 'sa', name: 'Saudi Arabia', nameLocal: '\u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629', flag: '\uD83C\uDDF8\uD83C\uDDE6', language: 'ar', dir: 'rtl', currency: 'SAR', businessPrice: 25,  cities: ['Riyadh', 'Jeddah', 'NEOM'],         regionName: 'Saudi Arabia' },
  pk: { code: 'pk', name: 'Pakistan',     nameLocal: '\u067e\u0627\u06a9\u0633\u062a\u0627\u0646',    flag: '\uD83C\uDDF5\uD83C\uDDF0', language: 'ur', dir: 'rtl', currency: 'PKR', businessPrice: 499, cities: ['Karachi', 'Lahore', 'Islamabad'],  regionName: 'Pakistan' },
  ae: { code: 'ae', name: 'UAE',          nameLocal: '\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062a',  flag: '\uD83C\uDDE6\uD83C\uDDEA', language: 'ar', dir: 'rtl', currency: 'AED', businessPrice: 19,  cities: ['Dubai', 'Abu Dhabi', 'Sharjah'],  regionName: 'UAE' },
  bh: { code: 'bh', name: 'Bahrain',      nameLocal: '\u0627\u0644\u0628\u062d\u0631\u064a\u0646',  flag: '\uD83C\uDDE7\uD83C\uDDED', language: 'ar', dir: 'rtl', currency: 'BHD', businessPrice: 7,   cities: ['Manama', 'Riffa', 'Muharraq'],    regionName: 'Bahrain' },
  qa: { code: 'qa', name: 'Qatar',         nameLocal: '\u0642\u0637\u0631',      flag: '\uD83C\uDDF6\uD83C\uDDE6', language: 'ar', dir: 'rtl', currency: 'QAR', businessPrice: 20,  cities: ['Doha', 'Al Wakrah', 'Al Khor'],   regionName: 'Qatar' },
  kw: { code: 'kw', name: 'Kuwait',        nameLocal: '\u0627\u0644\u0643\u0648\u064a\u062a',  flag: '\uD83C\uDDF0\uD83C\uDDFC', language: 'ar', dir: 'rtl', currency: 'KWD', businessPrice: 7,   cities: ['Kuwait City', 'Hawalli', 'Salmiya'], regionName: 'Kuwait' },
  bd: { code: 'bd', name: 'Bangladesh',    nameLocal: '\u09ac\u09be\u0982\u09b2\u09be\u09a6\u09c7\u09b6', flag: '\uD83C\uDDE7\uD83C\uDDE9', language: 'bn', dir: 'ltr', currency: 'BDT', businessPrice: 550, cities: ['Dhaka', 'Chittagong', 'Sylhet'],   regionName: 'Bangladesh' },
  eg: { code: 'eg', name: 'Egypt',         nameLocal: '\u0645\u0635\u0631',      flag: '\uD83C\uDDEA\uD83C\uDDEC', language: 'ar', dir: 'rtl', currency: 'EGP', businessPrice: 150, cities: ['Cairo', 'Alexandria', 'Giza'],    regionName: 'Egypt' },
  ma: { code: 'ma', name: 'Morocco',       nameLocal: '\u0627\u0644\u0645\u063a\u0631\u0628',  flag: '\uD83C\uDDF2\uD83C\uDDE6', language: 'ar', dir: 'rtl', currency: 'MAD', businessPrice: 50,  cities: ['Casablanca', 'Rabat', 'Marrakech'], regionName: 'Morocco' },
  tn: { code: 'tn', name: 'Tunisia',       nameLocal: '\u062a\u0648\u0646\u0633',   flag: '\uD83C\uDDF9\uD83C\uDDF3', language: 'ar', dir: 'rtl', currency: 'TND', businessPrice: 15,  cities: ['Tunis', 'Sfax', 'Sousse'],        regionName: 'Tunisia' },
  ly: { code: 'ly', name: 'Libya',         nameLocal: '\u0644\u064a\u0628\u064a\u0627',   flag: '\uD83C\uDDF1\uD83C\uDDFE', language: 'ar', dir: 'rtl', currency: 'LYD', businessPrice: 25,  cities: ['Tripoli', 'Benghazi', 'Misrata'],  regionName: 'Libya' },
  dz: { code: 'dz', name: 'Algeria',       nameLocal: '\u0627\u0644\u062c\u0632\u0627\u0626\u0631', flag: '\uD83C\uDDE9\uD83C\uDDFF', language: 'ar', dir: 'rtl', currency: 'DZD', businessPrice: 700, cities: ['Algiers', 'Oran', 'Constantine'],  regionName: 'Algeria' },
};

export const VALID_COUNTRY_CODES = Object.keys(COUNTRIES) as CountryCode[];

export const IP_TO_COUNTRY: Record<string, CountryCode> = {
  SA: 'sa', PK: 'pk', AE: 'ae', BH: 'bh', QA: 'qa', KW: 'kw',
  BD: 'bd', EG: 'eg', MA: 'ma', TN: 'tn', LY: 'ly', DZ: 'dz',
};

export const LANG_TO_COUNTRY: Record<string, CountryCode> = {
  'ar-SA': 'sa', 'ar-AE': 'ae', 'ar-BH': 'bh', 'ar-QA': 'qa', 'ar-KW': 'kw',
  'ar-EG': 'eg', 'ar-MA': 'ma', 'ar-TN': 'tn', 'ar-LY': 'ly', 'ar-DZ': 'dz',
  'ar': 'sa', 'ur': 'pk', 'ur-PK': 'pk', 'bn': 'bd', 'bn-BD': 'bd',
};

interface LocaleContextType {
  country: CountryConfig;
  setCountry: (code: CountryCode) => void;
}

const LocaleContext = createContext<LocaleContextType>({
  country: COUNTRIES['sa'],
  setCountry: () => {},
});

export function LocaleProvider({
  children,
  initialCountry,
  forceEnglish = false,
}: {
  children: ReactNode;
  initialCountry?: CountryCode;
  forceEnglish?: boolean;
}) {
  const [country, setCountryState] = useState<CountryConfig>(
    COUNTRIES[initialCountry ?? 'sa']
  );

  const applyLocale = (config: CountryConfig, useEnglish = false) => {
    const lang = useEnglish ? 'en' : config.language;
    i18n.changeLanguage(lang);
    document.documentElement.dir = useEnglish ? 'ltr' : config.dir;
    document.documentElement.lang = lang;
    localStorage.setItem('haala_country', config.code);
  };

  useEffect(() => {
    if (forceEnglish) {
      const config = COUNTRIES['sa'];
      setCountryState(config);
      applyLocale(config, true);
    } else if (initialCountry && COUNTRIES[initialCountry]) {
      const config = COUNTRIES[initialCountry];
      setCountryState(config);
      applyLocale(config, false);
    }
  }, [initialCountry, forceEnglish]);

  const setCountry = (code: CountryCode) => {
    const config = COUNTRIES[code];
    setCountryState(config);
    applyLocale(config, false);
  };

  return (
    <LocaleContext.Provider value={{ country, setCountry }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
