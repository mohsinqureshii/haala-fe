import { ReactNode } from 'react';

interface Feature {
  title: string;
  description: string;
  icon?: ReactNode;
}

interface FeatureHighlightsProps {
  features: Feature[];
}

export function FeatureHighlights({ features }: FeatureHighlightsProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4 leading-tight">
          All the tools you need and a<br />few more we think you'll love.
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, idx) => (
            <div key={idx} className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
