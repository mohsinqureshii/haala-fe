import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, X, ArrowRight, ChevronDown, ChevronUp, Sparkles, Shield, Users, Zap, Building2 } from "lucide-react";
import ArabicText from "@/components/ArabicText";

type Currency = "USD" | "SAR" | "PKR";

const currencySymbol: Record<Currency, string> = {
  USD: "$",
  SAR: "SAR",
  PKR: "PKR",
};

const plans = [
  {
    id: "free",
    name: "Free",
    nameAr: "مجاني",
    desc: "For individuals and micro-teams getting started.",
    price: { USD: 0, SAR: 0, PKR: 0 },
    period: "",
    perUser: false,
    cta: "Get started free",
    ctaHref: "/signup",
    popular: false,
    color: "#6B7280",
    highlight: null,
    features: [
      "1 user",
      "15 GB cloud storage",
      "Free @haala.io email address",
      "Chat with up to 5 teammates",
      "40-minute video meetings",
      "Basic Docs & Sheets",
      "Notes & Tasks",
      "500 Murshid AI actions/month",
      "Community support",
    ],
  },
  {
    id: "starter",
    name: "Starter",
    nameAr: "البداية",
    desc: "For small teams of up to 50 users.",
    price: { USD: 3, SAR: 11, PKR: 830 },
    period: "/user/mo",
    perUser: true,
    cta: "Start free trial",
    ctaHref: "/signup",
    popular: false,
    color: "#1A73E8",
    highlight: null,
    features: [
      "Up to 50 users",
      "50 GB storage per user",
      "Custom domain email @yourdomain",
      "Unlimited Chat history",
      "3-hour video meetings",
      "Full Docs, Sheets & Notes",
      "Calendar with Hijri support",
      "2,000 Murshid AI actions/month",
      "Arabic & Urdu RTL UI",
      "Email support",
    ],
  },
  {
    id: "business",
    name: "Business",
    nameAr: "الأعمال",
    desc: "For growing teams that need the full Haala suite.",
    price: { USD: 8, SAR: 30, PKR: 2200 },
    period: "/user/mo",
    perUser: true,
    cta: "Start free trial",
    ctaHref: "/signup",
    popular: true,
    color: "#8B5CF6",
    highlight: "Most Popular",
    features: [
      "Unlimited users",
      "200 GB storage per user",
      "Multiple custom domains",
      "Full Murshid AI — unlimited actions",
      "AI meeting summaries & email drafts",
      "SSO / SAML 2.0",
      "Advanced admin console",
      "Audit logs (90-day retention)",
      "Data residency (UAE or Pakistan)",
      "Priority support + SLA",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    nameAr: "المؤسسات",
    desc: "For large organizations needing on-premise or custom deployments.",
    price: { USD: -1, SAR: -1, PKR: -1 },
    period: "",
    perUser: false,
    cta: "Contact sales",
    ctaHref: "/contact",
    popular: false,
    color: "#0D1B2A",
    highlight: null,
    features: [
      "Everything in Business",
      "On-premise or hybrid deployment",
      "Dedicated Customer Success Manager",
      "Custom AI model integration",
      "Unlimited audit log retention",
      "Custom SLA & uptime guarantee",
      "SCIM directory sync",
      "Advanced DLP policies",
      "Invoicing & purchase orders",
      "Security review & custom DPA",
    ],
  },
];

const featureMatrix = [
  { feature: "Users", free: "1", starter: "Up to 50", business: "Unlimited", enterprise: "Unlimited" },
  { feature: "Storage", free: "15 GB", starter: "50 GB/user", business: "200 GB/user", enterprise: "Custom" },
  { feature: "Custom domain email", free: false, starter: true, business: true, enterprise: true },
  { feature: "Video meetings", free: "40 min", starter: "3 hrs", business: "Unlimited", enterprise: "Unlimited" },
  { feature: "Murshid AI", free: "500 actions/mo", starter: "2,000 actions/mo", business: "Unlimited", enterprise: "Unlimited + custom models" },
  { feature: "AI email auto-compose", free: false, starter: true, business: true, enterprise: true },
  { feature: "AI meeting summaries", free: false, starter: false, business: true, enterprise: true },
  { feature: "Arabic/Urdu RTL", free: true, starter: true, business: true, enterprise: true },
  { feature: "Hijri calendar", free: true, starter: true, business: true, enterprise: true },
  { feature: "SSO / SAML", free: false, starter: false, business: true, enterprise: true },
  { feature: "Audit logs", free: false, starter: false, business: "90 days", enterprise: "Unlimited" },
  { feature: "Data residency (UAE/PK)", free: false, starter: false, business: true, enterprise: true },
  { feature: "On-premise deployment", free: false, starter: false, business: false, enterprise: true },
  { feature: "Dedicated CSM", free: false, starter: false, business: false, enterprise: true },
  { feature: "Support", free: "Community", starter: "Email", business: "Priority + SLA", enterprise: "Dedicated 24/7" },
];

const faqs = [
  {
    q: "Is the free plan really free forever?",
    a: "Yes. The Free plan is not a trial — it's free forever for 1 user. No credit card required. You get real features including a @haala.io email, 15 GB storage, and 500 monthly AI actions.",
  },
  {
    q: "How does regional pricing work?",
    a: "We charge in local currencies — SAR for Saudi Arabia and Bahrain, PKR for Pakistan. Prices are set to be genuinely affordable in those markets, not just a currency conversion of US dollar rates.",
  },
  {
    q: "Is Arabic and Urdu support included in all plans?",
    a: "Absolutely. Full RTL support, Arabic and Urdu UI, Hijri calendar, Arabic name search, and right-to-left document editing are available on every plan including Free.",
  },
  {
    q: "What is data residency and which plans include it?",
    a: "Data residency means your files, emails, and chat messages are stored on servers physically located in your region (UAE or Pakistan). This is included in Business and Enterprise plans and is critical for organizations with compliance requirements.",
  },
  {
    q: "Can I try Business features before paying?",
    a: "Yes — all paid plans come with a 14-day free trial with no credit card required. You get full access to every feature in the plan, including AI, SSO, and admin tools.",
  },
  {
    q: "What does the Enterprise on-premise option include?",
    a: "Enterprise on-premise gives you the full Haala stack deployed in your own data center or private cloud. We provide Docker Compose and Kubernetes (Helm chart) deployments, dedicated support, and a custom SLA.",
  },
];

type MatrixCell = boolean | string;

const renderMatrixCell = (val: MatrixCell) => {
  if (val === true) return <Check className="h-4 w-4 text-[#34A853] mx-auto" />;
  if (val === false) return <X className="h-4 w-4 text-gray-200 mx-auto" />;
  return <span className="text-xs text-gray-600 text-center block">{val}</span>;
};

const formatPrice = (amount: number, currency: Currency) => {
  if (amount === -1) return "Custom";
  if (amount === 0) return "Free";
  const sym = currencySymbol[currency];
  if (currency === "USD") return `$${amount}`;
  return `${sym} ${amount.toLocaleString()}`;
};

const PricingPage = () => {
  const [currency, setCurrency] = useState<Currency>("USD");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 lg:py-28 text-center bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A73E8]/10 text-[#1A73E8] text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Transparent pricing
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0D1B2A] leading-tight mb-4">
            Simple pricing.{" "}
            <span className="text-[#1A73E8]">Made for our markets.</span>
          </h1>
          <p className="text-xl font-medium mb-3">
            <ArabicText className="text-gray-500">أسعار شفافة لأسواقنا</ArabicText>
          </p>
          <p className="text-lg text-gray-500 max-w-xl mx-auto mb-10">
            No per-feature paywalls. No surprise bills. Plans that make sense for
            teams in Pakistan, Saudi Arabia, UAE, and Bahrain.
          </p>

          {/* Currency Toggle */}
          <div className="inline-flex items-center gap-1 bg-gray-100 rounded-full p-1 mb-2">
            {(["USD", "SAR", "PKR"] as Currency[]).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  currency === c
                    ? "bg-white text-[#0D1B2A] shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-400">
            {currency === "SAR" && "Saudi Riyal — prices set for local market"}
            {currency === "PKR" && "Pakistani Rupee — prices set for local market"}
            {currency === "USD" && "US Dollar — billed monthly"}
          </p>
        </div>
      </section>

      {/* Plan Cards */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-2xl p-6 border relative flex flex-col ${
                  plan.popular
                    ? "border-[#8B5CF6] shadow-xl shadow-purple-100"
                    : "border-gray-100"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#8B5CF6] text-white text-xs font-semibold px-4 py-1 rounded-full">
                    {plan.highlight}
                  </div>
                )}

                <div className="mb-4">
                  <h3 className="text-lg font-bold text-[#0D1B2A]">{plan.name}</h3>
                  <ArabicText className="text-sm text-gray-400">{plan.nameAr}</ArabicText>
                </div>

                <div className="mb-2">
                  <span className="text-3xl font-bold text-[#0D1B2A]">
                    {formatPrice(plan.price[currency], currency)}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-gray-400 ml-1">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-gray-500 mb-5 leading-relaxed">{plan.desc}</p>

                <Link
                  to={plan.ctaHref}
                  className={`block text-center py-2.5 rounded-full font-medium transition-all mb-6 text-sm ${
                    plan.popular
                      ? "bg-[#8B5CF6] text-white hover:bg-[#7C3AED]"
                      : plan.id === "enterprise"
                      ? "bg-[#0D1B2A] text-white hover:bg-[#1A2D40]"
                      : "border border-gray-200 text-[#0D1B2A] hover:bg-gray-50"
                  }`}
                >
                  {plan.cta}
                </Link>

                <ul className="space-y-2.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check
                        className="h-4 w-4 mt-0.5 shrink-0"
                        style={{ color: plan.color }}
                      />
                      <span className="text-gray-600">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Note */}
      <section className="py-8 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-medium text-gray-700">
            Serving{" "}
            <span className="font-semibold">Pakistan 🇵🇰</span>,{" "}
            <span className="font-semibold">Saudi Arabia 🇸🇦</span>,{" "}
            <span className="font-semibold">UAE 🇦🇪</span>,{" "}
            <span className="font-semibold">Bahrain 🇧🇭</span>
            {" "}— with local pricing, local support, and local data centers.
          </p>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] mb-3">
              Full feature comparison
            </h2>
            <p className="text-gray-500">Everything you get on each plan, at a glance.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full bg-white">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-6 py-5 text-sm font-semibold text-[#0D1B2A] w-1/3">
                    Feature
                  </th>
                  {plans.map((p) => (
                    <th key={p.id} className="px-3 py-5 text-center">
                      <div
                        className={`text-sm font-bold ${p.popular ? "text-[#8B5CF6]" : "text-gray-600"}`}
                      >
                        {p.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureMatrix.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-gray-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}
                  >
                    <td className="px-6 py-3.5 text-sm font-medium text-[#0D1B2A]">
                      {row.feature}
                    </td>
                    <td className="px-3 py-3.5 text-center">
                      {renderMatrixCell(row.free as MatrixCell)}
                    </td>
                    <td className="px-3 py-3.5 text-center">
                      {renderMatrixCell(row.starter as MatrixCell)}
                    </td>
                    <td className="px-3 py-3.5 text-center bg-purple-50/30">
                      {renderMatrixCell(row.business as MatrixCell)}
                    </td>
                    <td className="px-3 py-3.5 text-center">
                      {renderMatrixCell(row.enterprise as MatrixCell)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] mb-3">
              Frequently asked questions
            </h2>
            <ArabicText className="text-gray-500 text-lg">أسئلة شائعة</ArabicText>
          </div>

          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                >
                  <span className="font-semibold text-[#0D1B2A] text-sm leading-snug">
                    {faq.q}
                  </span>
                  {openFaq === i ? (
                    <ChevronUp className="h-4 w-4 text-gray-400 shrink-0" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-gray-400 shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA Banner */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-[#0D1B2A] rounded-3xl p-10 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A73E8]/10 to-[#8B5CF6]/10 pointer-events-none" />
            <div className="relative text-white">
              <div className="flex items-center gap-2 mb-3">
                <Building2 className="h-5 w-5 text-blue-300" />
                <span className="text-blue-300 text-sm font-medium">Enterprise &amp; On-Premise</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                Need a custom deployment?
              </h3>
              <ArabicText className="text-blue-300 text-base block mb-3">
                هل تحتاج إلى نشر مخصص؟
              </ArabicText>
              <p className="text-gray-400 max-w-lg text-sm leading-relaxed">
                Custom pricing, on-premise or hybrid deployment, dedicated CSM, SCIM, audit logs,
                and a tailored SLA. Talk to our sales team.
              </p>
            </div>
            <div className="relative shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#0D1B2A] px-7 py-3.5 rounded-full font-medium hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                Contact sales <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            {[
              { icon: <Zap className="h-4 w-4" />, text: "14-day free trial" },
              { icon: <Shield className="h-4 w-4" />, text: "No credit card required" },
              { icon: <Users className="h-4 w-4" />, text: "Cancel any time" },
            ].map((item) => (
              <div
                key={item.text}
                className="inline-flex items-center gap-1.5 text-sm text-gray-600"
              >
                <span className="text-[#1A73E8]">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
          <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">
            Start with Haala today
          </h2>
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 bg-[#1A73E8] text-white px-8 py-3.5 rounded-full font-medium hover:bg-[#1557B0] transition-colors"
          >
            Get started free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
