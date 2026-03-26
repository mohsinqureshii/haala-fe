import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ProductShowcaseProps {
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
  ctaText?: string;
  ctaLink?: string;
  accentColor?: 'blue' | 'green';
}

export function ProductShowcase({
  title,
  description,
  features,
  imageUrl,
  imageAlt,
  imagePosition,
  ctaText = 'Learn More',
  ctaLink = '#',
  accentColor = 'blue',
}: ProductShowcaseProps) {
  const accentClass = accentColor === 'blue' ? 'text-blue-600' : 'text-green-600';
  const accentBgClass = accentColor === 'blue' ? 'bg-blue-50 border-blue-200' : 'bg-green-50 border-green-200';

  const content = (
    <div className="space-y-6">
      <div className="space-y-3">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          {title}
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Features list */}
      <ul className="space-y-3">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className={`w-6 h-6 rounded-full ${accentBgClass} flex items-center justify-center flex-shrink-0 mt-0.5`}>
              <svg className={`w-4 h-4 ${accentClass}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-base text-gray-700 leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <div className="pt-4">
        <Button
          className={`h-12 px-6 rounded-lg font-semibold flex items-center gap-2 ${
            accentColor === 'blue'
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-green-600 hover:bg-green-700 text-white'
          }`}
          onClick={() => window.location.href = ctaLink}
        >
          {ctaText}
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );

  const image = (
    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
      <img
        src={imageUrl}
        alt={imageAlt}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {imagePosition === 'left' ? (
            <>
              {image}
              {content}
            </>
          ) : (
            <>
              {content}
              {image}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
