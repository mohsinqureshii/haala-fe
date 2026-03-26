import { HeroSection } from '@/components/HeroSection';
import { ProductGrid } from '@/components/ProductGrid';
import { ProductShowcase } from '@/components/ProductShowcase';
import { PricingSection } from '@/components/PricingSection';
import { FAQSection } from '@/components/FAQSection';

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

const FAQS = [
  {
    question: 'How do I get started with Haala?',
    answer: 'Getting started is easy! Sign up for a free account, invite your team members, and start collaborating. No credit card required for the free trial.',
    category: 'Getting Started',
  },
  {
    question: 'Can I try Haala for free?',
    answer: 'Yes! We offer a 14-day free trial of all features. You can explore everything Haala has to offer without entering a credit card.',
    category: 'Billing',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express), bank transfers, and regional payment methods in Pakistan, Saudi Arabia, and the GCC.',
    category: 'Billing',
  },
  {
    question: 'Is my data secure?',
    answer: 'Security is our top priority. We use end-to-end encryption, SOC 2 compliance, GDPR adherence, and regular security audits to protect your data.',
    category: 'Security',
  },
  {
    question: 'Can I export my data?',
    answer: 'Yes, you can export all your data at any time in standard formats (CSV, JSON, etc.). Your data belongs to you.',
    category: 'Data',
  },
  {
    question: 'Do you offer API access?',
    answer: 'Yes! We provide a comprehensive REST API and webhooks for custom integrations. Check our developer documentation for details.',
    category: 'Integration',
  },
  {
    question: 'What is your uptime guarantee?',
    answer: 'We guarantee 99.9% uptime with our Enterprise SLA. Our infrastructure is distributed across multiple regions for maximum reliability.',
    category: 'Support',
  },
  {
    question: 'How do I contact support?',
    answer: 'You can reach our support team via email, chat, or phone. Response times vary by plan, with Enterprise customers getting priority support.',
    category: 'Support',
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Product Grid */}
      <ProductGrid />

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

      {/* FAQ Section */}
      <FAQSection faqs={FAQS} />

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to transform your team?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Join thousands of teams across Pakistan, Saudi Arabia, and the GCC using Haala.
          </p>
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
