import { ArrowRight } from 'lucide-react';

interface Resource {
  category: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
  thumbnail?: string;
  backgroundColor?: string;
}

interface ResourcesSectionProps {
  title: string;
  subtitle: string;
  resources: Resource[];
}

export function ResourcesSection({ title, subtitle, resources }: ResourcesSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
            {title.split('\n')[0]}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title.split('\n')[1]}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            {subtitle}
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Thumbnail */}
              {resource.thumbnail && (
                <div className={`h-40 ${resource.backgroundColor || 'bg-gray-100'} flex items-center justify-center overflow-hidden`}>
                  <img
                    src={resource.thumbnail}
                    alt={resource.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Category */}
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  {resource.category}
                </p>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex-grow">
                  {resource.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {resource.description}
                </p>

                {/* Link */}
                <a
                  href={resource.link}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
                >
                  {resource.linkText}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
