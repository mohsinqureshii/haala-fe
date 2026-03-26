import { HeroSection } from '@/components/HeroSection';
import { ProductGrid } from '@/components/ProductGrid';
import { ProductShowcase } from '@/components/ProductShowcase';
import { PricingSection } from '@/components/PricingSection';
import { FeatureHighlights } from '@/components/FeatureHighlights';
import { ResourcesSection } from '@/components/ResourcesSection';

const FEATURES = [
  {
    title: 'Premium AI built-in',
    description: 'Do your best work faster with the Gemini app, NotebookLM, and Gemini in Gmail, Docs, Sheets, and more.',
  },
  {
    title: 'Tools born in the Cloud',
    description: 'Collaborate in real time, from any device, across tools that are always up-to-date.',
  },
  {
    title: 'Enterprise-grade security',
    description: 'Protect your emails, files, and meetings with AI-powered security and compliance controls.',
  },
];

const PRICING_TIERS = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for getting started',
    features: [
      'Up to 3 team members',
      '5GB storage',
      'Basic email & chat',
      'Community support',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Business',
    price: '$19',
    description: 'For growing teams',
    features: [
      'Unlimited team members',
      '100GB storage per user',
      'All core features',
      'Priority support',
      'Advanced security',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    description: 'For large organizations',
    features: [
      'Everything in Business',
      'Unlimited storage',
      'Advanced analytics',
      'Custom integrations',
      'Dedicated support',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
  {
    name: 'Custom',
    price: '?',
    description: 'Tailored for your needs',
    features: [
      'Custom features',
      'White-label options',
      'SLA guarantees',
      'On-premise deployment',
      'Account manager',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

const RESOURCES = [
  {
    category: 'ANNOUNCEMENT',
    title: 'Unlock new ways of working with Haala and Gemini',
    description: 'Discover how AI-powered collaboration is transforming the way teams work together.',
    link: '#',
    linkText: 'Learn more',
  },
  {
    category: 'E-BOOK',
    title: 'Get our ebook to learn about Haala and AI-powered collaboration',
    description: 'Download our comprehensive guide to understanding modern workplace productivity.',
    link: '#',
    linkText: 'Download now',
  },
  {
    category: 'NEWS',
    title: 'Stay up to date with the latest stories and product news on the Haala blog',
    description: 'Get insights into product updates, customer stories, and industry trends.',
    link: '#',
    linkText: 'Read the blog',
  },
  {
    category: 'GUIDE',
    title: 'Prompt Guide 101: A quick-start handbook for effective prompts',
    description: 'Master the art of writing effective prompts to get the most from AI assistance.',
    link: '#',
    linkText: 'Download now',
  },
  {
    category: 'COMPARISON',
    title: 'Compare Haala with Microsoft 365',
    description: 'See why Haala is the choice for teams that want modern productivity tools.',
    link: '#',
    linkText: 'Download now',
  },
  {
    category: 'MIGRATION',
    title: 'Migrate your data with confidence',
    description: 'Securely copy your emails, files, and data to Haala with our migration tools.',
    link: '#',
    linkText: 'Migration Resources',
  },
];

const TRUST_METRICS = [
  { value: '12K+', label: 'Teams' },
  { value: '150+', label: 'Countries' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '11', label: 'Products' },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Trust Metrics */}
      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {TRUST_METRICS.map((metric, idx) => (
              <div key={idx}>
                <div className="text-3xl md:text-4xl font-bold text-gray-900">{metric.value}</div>
                <div className="text-gray-600 mt-2">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <ProductGrid />

      {/* Feature Highlights */}
      <FeatureHighlights features={FEATURES} />

      {/* Product Showcase 1: Mail */}
      <ProductShowcase
        title="Secure Email"
        description="Powerful email that keeps your team connected. Built with security and productivity in mind."
        features={[
          'End-to-end encryption for sensitive emails',
          'Powerful search across all messages',
          'Smart filters and labels for organization',
          'Integration with calendar and contacts',
        ]}
        imageUrl="https://d2xsxph8kpxj0f.cloudfront.net/116552453/FqtvQB8rZVbMmaoFThv8Xr/haala-hero-1-BeRis7udbxqmCPwBuNgPzC.webp"
        imageAlt="Email interface"
        imagePosition="right"
        accentColor="blue"
      />

      {/* Product Showcase 2: Chat */}
      <ProductShowcase
        title="Team Chat"
        description="Real-time messaging with channels, threads, and direct messages. Keep conversations organized and searchable."
        features={[
          'Organized channels for different topics',
          'Thread conversations to keep discussions focused',
          'Rich media sharing and file uploads',
          'Instant notifications and mentions',
        ]}
        imageUrl="https://d2xsxph8kpxj0f.cloudfront.net/116552453/FqtvQB8rZVbMmaoFThv8Xr/haala-hero-3-EoAnzfjELYwJn6go7A9kAj.webp"
        imageAlt="Chat interface"
        imagePosition="left"
        accentColor="green"
      />

      {/* Product Showcase 3: Meetings */}
      <ProductShowcase
        title="Video Meetings"
        description="Crystal clear video conferencing with screen sharing, recording, and real-time collaboration."
        features={[
          'HD video and audio quality',
          'Screen sharing and presentation mode',
          'Meeting recording and transcription',
          'Virtual backgrounds and noise cancellation',
        ]}
        imageUrl="https://d2xsxph8kpxj0f.cloudfront.net/116552453/FqtvQB8rZVbMmaoFThv8Xr/haala-hero-2-LfDcraGDqC6K2cNanqbuZg.webp"
        imageAlt="Meetings interface"
        imagePosition="right"
        accentColor="blue"
      />

      {/* Pricing Section */}
      <PricingSection tiers={PRICING_TIERS} />

      {/* Resources Section */}
      <ResourcesSection
        title="ALL THE LATEST\nLearn more about the future of work."
        subtitle="Stay up to date with the latest stories, events, and more with Haala."
        resources={RESOURCES}
      />

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Your team's new home is waiting.
          </h2>
          <div className="space-y-2">
            <p className="text-xl text-blue-100">
              Free forever. No credit card. Set up in 2 minutes.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={() => window.location.href = 'https://app.haala.io/signup'}
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Started Free
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
