import { useState } from 'react';
import { useLocale } from '@/context/LocaleContext';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const COUNTRIES = [
  { code: 'sa', name: 'Saudi Arabia', flag: '🇸🇦' },
  { code: 'pk', name: 'Pakistan', flag: '🇵🇰' },
  { code: 'ae', name: 'UAE', flag: '🇦🇪' },
  { code: 'bh', name: 'Bahrain', flag: '🇧🇭' },
  { code: 'qa', name: 'Qatar', flag: '🇶🇦' },
  { code: 'kw', name: 'Kuwait', flag: '🇰🇼' },
  { code: 'bd', name: 'Bangladesh', flag: '🇧🇩' },
  { code: 'eg', name: 'Egypt', flag: '🇪🇬' },
  { code: 'ma', name: 'Morocco', flag: '🇲🇦' },
  { code: 'tn', name: 'Tunisia', flag: '🇹🇳' },
  { code: 'ly', name: 'Libya', flag: '🇱🇾' },
  { code: 'dz', name: 'Algeria', flag: '🇩🇿' },
];

const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'ur', name: 'اردو', flag: '🇵🇰' },
  { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
];

interface HeroSectionProps {
  onCountryChange?: (countryCode: string) => void;
  onLanguageChange?: (languageCode: string) => void;
}

export function HeroSection({ onCountryChange, onLanguageChange }: HeroSectionProps) {
  const { country, language, setLanguage } = useLocale();
  const [selectedCountry, setSelectedCountry] = useState(country?.code || 'sa');
  const [selectedLanguage, setSelectedLanguage] = useState(language || 'en');

  const currentCountry = COUNTRIES.find(c => c.code === selectedCountry) || COUNTRIES[0];
  const currentLanguage = LANGUAGES.find(l => l.code === selectedLanguage) || LANGUAGES[0];

  const handleCountryChange = (countryCode: string) => {
    setSelectedCountry(countryCode);
    onCountryChange?.(countryCode);
  };

  const handleLanguageChange = (languageCode: string) => {
    setSelectedLanguage(languageCode);
    setLanguage(languageCode);
    onLanguageChange?.(languageCode);
  };

  const heroImage = 'https://d2xsxph8kpxj0f.cloudfront.net/116552453/FqtvQB8rZVbMmaoFThv8Xr/haala-hero-2-LfDcraGDqC6K2cNanqbuZg.webp';

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 to-green-50">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-green-600/5 pointer-events-none" />

      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Form & CTA */}
          <div className="space-y-6 z-10">
            {/* Header */}
            <div className="space-y-2">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                Welcome to Haala
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Your team's new home
              </h1>
              <p className="text-lg text-gray-600">
                Built for Pakistan, Saudi Arabia & the GCC
              </p>
            </div>

            {/* Selectors */}
            <div className="space-y-4 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              {/* Language Selector */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Language</label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between h-11 text-base"
                    >
                      <span>{currentLanguage.flag} {currentLanguage.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    {LANGUAGES.map(lang => (
                      <DropdownMenuItem
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className="cursor-pointer"
                      >
                        <span className="mr-2">{lang.flag}</span>
                        {lang.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Country Selector */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Country</label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between h-11 text-base"
                    >
                      <span>{currentCountry.flag} {currentCountry.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <div className="px-2 py-1.5">
                      <p className="text-xs font-semibold text-gray-500 uppercase px-2 mb-2">Gulf Region</p>
                      {COUNTRIES.filter(c => ['sa', 'ae', 'bh', 'qa', 'kw'].includes(c.code)).map(country => (
                        <DropdownMenuItem
                          key={country.code}
                          onClick={() => handleCountryChange(country.code)}
                          className="cursor-pointer"
                        >
                          <span className="mr-2">{country.flag}</span>
                          {country.name}
                        </DropdownMenuItem>
                      ))}
                    </div>
                    <div className="px-2 py-1.5 border-t">
                      <p className="text-xs font-semibold text-gray-500 uppercase px-2 mb-2">South Asia</p>
                      {COUNTRIES.filter(c => ['pk', 'bd'].includes(c.code)).map(country => (
                        <DropdownMenuItem
                          key={country.code}
                          onClick={() => handleCountryChange(country.code)}
                          className="cursor-pointer"
                        >
                          <span className="mr-2">{country.flag}</span>
                          {country.name}
                        </DropdownMenuItem>
                      ))}
                    </div>
                    <div className="px-2 py-1.5 border-t">
                      <p className="text-xs font-semibold text-gray-500 uppercase px-2 mb-2">North Africa</p>
                      {COUNTRIES.filter(c => ['eg', 'ma', 'tn', 'ly', 'dz'].includes(c.code)).map(country => (
                        <DropdownMenuItem
                          key={country.code}
                          onClick={() => handleCountryChange(country.code)}
                          className="cursor-pointer"
                        >
                          <span className="mr-2">{country.flag}</span>
                          {country.name}
                        </DropdownMenuItem>
                      ))}
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  className="flex-1 h-11 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
                  onClick={() => window.location.href = 'https://app.haala.io/signup'}
                >
                  Get Started Free
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 h-11 border-2 border-gray-300 hover:border-gray-400 font-semibold rounded-lg"
                >
                  Watch Demo
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="pt-2 text-center text-sm text-gray-600">
                <p>✓ No credit card required • 14-day free trial</p>
              </div>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative hidden md:block">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Team collaboration illustration"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent pointer-events-none" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-200 max-w-xs">
              <p className="text-sm font-semibold text-gray-900">
                ✨ Trusted by 10,000+ teams
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Across Pakistan, Saudi Arabia & the GCC
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
