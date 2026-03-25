import { ReactNode } from "react";

interface ProductPageProps {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  image: string;
  features: { icon: ReactNode; title: string; description: string }[];
  ctaText?: string;
}

const ProductPage = ({ badge, title, highlight, description, image, features, ctaText = "Try for free" }: ProductPageProps) => {
  return (
    <div>
      {/* Hero */}
      <section className="section-padding text-center">
        <div className="container-tight">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            {badge}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            {title} <span className="hero-gradient-text">{highlight}</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">{description}</p>
          <div className="flex items-center justify-center gap-4">
            <a href="/pricing" className="hero-gradient-bg text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
              {ctaText}
            </a>
            <a href="/contact" className="border border-border px-8 py-3 rounded-full font-medium text-foreground hover:bg-secondary transition-colors">
              Contact sales
            </a>
          </div>
        </div>
      </section>

      {/* Product Image */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="container-wide">
          <div className="rounded-2xl overflow-hidden border border-border shadow-2xl">
            <img src={image} alt={title} className="w-full" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">Key Features</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Everything you need, built right in.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-background rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 rounded-lg hero-gradient-bg flex items-center justify-center text-primary-foreground mb-4">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center">
        <div className="container-tight">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Ready to get started?</h2>
          <p className="text-muted-foreground mb-8">First 10 users are completely free. No credit card required.</p>
          <a href="/pricing" className="hero-gradient-bg text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity inline-block">
            Start for free
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
