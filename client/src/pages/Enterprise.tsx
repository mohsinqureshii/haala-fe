import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Shield, Lock, Server, Users, CheckSquare, Globe, ArrowRight,
  Building2, FileText, Key, Eye, AlertCircle, Zap, Check,
  Headphones, Database, Cloud, HardDrive, Sparkles, ChevronRight
} from "lucide-react";
import ArabicText from "@/components/ArabicText";

const trustBadges = [
  { label: "SOC 2 Type II", desc: "Annual third-party audit", icon: <Shield className="h-5 w-5" /> },
  { label: "ISO 27001", desc: "Information security management", icon: <Lock className="h-5 w-5" /> },
  { label: "GDPR", desc: "EU data protection compliant", icon: <Eye className="h-5 w-5" /> },
  { label: "PDPL", desc: "Saudi data protection law", icon: <Globe className="h-5 w-5" /> },
];

const pillars = [
  {
    icon: <Shield className="h-7 w-7" />,
    color: "#1A73E8",
    bg: "#EBF3FE",
    title: "Security",
    ar: "الأمان",
    desc: "Enterprise-grade protection at every layer.",
    features: [
      "End-to-end encryption (AES-256)",
      "Zero-trust network architecture",
      "Advanced threat detection & DLP",
      "Automated vulnerability scanning",
      "Hardware security keys (FIDO2)",
    ],
  },
  {
    icon: <FileText className="h-7 w-7" />,
    color: "#34A853",
    bg: "#E8F5EC",
    title: "Compliance",
    ar: "الامتثال",
    desc: "Meet every regulatory requirement in your region.",
    features: [
      "SOC 2 Type II certified",
      "ISO 27001 certified",
      "PDPL (Saudi Arabia) compliant",
      "GDPR Article 28 DPA available",
      "Custom compliance reporting",
    ],
  },
  {
    icon: <Key className="h-7 w-7" />,
    color: "#8B5CF6",
    bg: "#F2EEFF",
    title: "Control",
    ar: "التحكم",
    desc: "Full administrative control over your organization.",
    features: [
      "SSO / SAML 2.0 integration",
      "SCIM directory provisioning",
      "Granular role-based access control",
      "Admin console with audit logs",
      "Policy enforcement across all products",
    ],
  },
  {
    icon: <Headphones className="h-7 w-7" />,
    color: "#EA4335",
    bg: "#FDEEEC",
    title: "Support",
    ar: "الدعم",
    desc: "A dedicated team invested in your success.",
    features: [
      "Dedicated Customer Success Manager",
      "24/7 priority support with SLA",
      "Onboarding & migration assistance",
      "Quarterly business reviews",
      "Arabic, Urdu, and English support",
    ],
  },
];

const deploymentOptions = [
  {
    icon: <Cloud className="h-8 w-8" />,
    title: "Cloud",
    ar: "سحابي",
    color: "#1A73E8",
    bg: "#EBF3FE",
    desc: "Fully managed by Haala. Data hosted in your chosen region — UAE or Pakistan data center.",
    features: [
      "Zero infrastructure management",
      "Automatic updates & patches",
      "99.99% uptime SLA",
      "Regional data residency (UAE or PK)",
      "Scalable from 50 to 50,000 users",
    ],
    badge: "Most common",
  },
  {
    icon: <HardDrive className="h-8 w-8" />,
    title: "Hybrid",
    ar: "هجين",
    color: "#8B5CF6",
    bg: "#F2EEFF",
    desc: "Sensitive data in your private cloud; collaboration features managed by Haala. Best of both worlds.",
    features: [
      "Split data plane / control plane",
      "Customer-controlled encryption keys",
      "Private storage for regulated data",
      "Haala manages app layer updates",
      "Auditable data flows",
    ],
    badge: "Recommended for finance",
  },
  {
    icon: <Server className="h-8 w-8" />,
    title: "On-Premise",
    ar: "داخلي",
    color: "#34A853",
    bg: "#E8F5EC",
    desc: "Full Haala stack deployed in your own data center. Complete data sovereignty, air-gap support.",
    features: [
      "Docker Compose or Kubernetes (Helm)",
      "Air-gapped network support",
      "Self-managed updates",
      "Full source code escrow available",
      "Government & defense approved",
    ],
    badge: "For regulated industries",
  },
];

const adminFeatures = [
  {
    icon: <Key className="h-5 w-5" />,
    title: "SSO / SAML 2.0",
    desc: "Connect to Okta, Azure AD, Google Workspace, or any SAML 2.0 provider. One login for everything.",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Custom Domains",
    desc: "Use your own domain for email, meeting links, and the Haala web app. Full white-labeling available.",
  },
  {
    icon: <Eye className="h-5 w-5" />,
    title: "Audit Logs",
    desc: "Immutable audit trail of every admin action, login event, file access, and permission change. Unlimited retention.",
  },
  {
    icon: <CheckSquare className="h-5 w-5" />,
    title: "Admin Console",
    desc: "Centralized management for users, groups, policies, and security settings across all 11 Haala products.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "SCIM Provisioning",
    desc: "Automatically create, update, and deprovision users from your IdP. Zero manual HR admin.",
  },
  {
    icon: <AlertCircle className="h-5 w-5" />,
    title: "DLP Policies",
    desc: "Define data loss prevention rules — block sensitive file sharing, restrict downloads, watermark documents.",
  },
];

const certifications = [
  {
    name: "SOC 2 Type II",
    issuer: "AICPA",
    desc: "Our annual SOC 2 Type II audit, conducted by an independent third-party firm, covers all five Trust Service Criteria: Security, Availability, Processing Integrity, Confidentiality, and Privacy.",
    color: "#1A73E8",
  },
  {
    name: "ISO 27001:2022",
    issuer: "International Organization for Standardization",
    desc: "Haala's Information Security Management System (ISMS) is certified to the latest ISO 27001:2022 standard, covering all organizational, technical, and physical controls.",
    color: "#34A853",
  },
  {
    name: "GDPR (EU)",
    issuer: "European Union",
    desc: "We act as a Data Processor under GDPR Article 28. DPAs are available for EU customers. We support data subject access requests, erasure, and portability out of the box.",
    color: "#8B5CF6",
  },
  {
    name: "PDPL (Saudi Arabia)",
    issuer: "SDAIA",
    desc: "Haala is fully compliant with Saudi Arabia's Personal Data Protection Law. Data for Saudi customers is stored in our UAE region and processed in accordance with SDAIA guidelines.",
    color: "#EA4335",
  },
];

const customerLogos = [
  { name: "Al-Futtaim Group", flag: "🇦🇪" },
  { name: "Makkah Holdings", flag: "🇸🇦" },
  { name: "Systems Limited", flag: "🇵🇰" },
  { name: "Gulf Bank", flag: "🇧🇭" },
  { name: "Noor Technologies", flag: "🇦🇪" },
  { name: "Zid Commerce", flag: "🇸🇦" },
  { name: "TechVentures PK", flag: "🇵🇰" },
  { name: "Al Baraka Digital", flag: "🇧🇭" },
];

type FormState = {
  name: string;
  company: string;
  email: string;
  teamSize: string;
  message: string;
};

const EnterprisePage = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    teamSize: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Hero — dark navy */}
      <section className="bg-[#0D1B2A] py-24 lg:py-36 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A73E8]/20 to-[#8B5CF6]/15 pointer-events-none" />
        <div className="container mx-auto px-6 relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6">
            <Building2 className="h-4 w-4" />
            Enterprise
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Enterprise-grade.{" "}
            <span className="text-[#1A73E8]">Region-ready.</span>
          </h1>
          <ArabicText className="text-xl text-blue-300 block mb-6">
            جاهز للمؤسسات. جاهز لمنطقتنا.
          </ArabicText>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Haala Enterprise gives large organizations in the Middle East and South Asia
            the security, compliance, and control they need — with full support for Arabic and Urdu workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#1A73E8] text-white px-8 py-3.5 rounded-full font-medium hover:bg-[#1557B0] transition-colors"
            >
              Contact sales <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/5 transition-colors"
            >
              View pricing <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-gray-400 uppercase tracking-widest font-medium mb-8">
            Certifications &amp; Compliance
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-3 bg-gray-50 rounded-xl px-5 py-4 border border-gray-100"
              >
                <div className="w-9 h-9 rounded-lg bg-[#0D1B2A]/5 flex items-center justify-center text-[#0D1B2A] shrink-0">
                  {badge.icon}
                </div>
                <div>
                  <div className="font-bold text-[#0D1B2A] text-sm">{badge.label}</div>
                  <div className="text-xs text-gray-500">{badge.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Key Pillars */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] mb-3">
              Built on four pillars
            </h2>
            <ArabicText className="text-gray-500 text-lg">أربعة ركائز أساسية</ArabicText>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-gray-200 transition-all"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: pillar.bg, color: pillar.color }}
                >
                  {pillar.icon}
                </div>
                <h3 className="font-bold text-[#0D1B2A] text-lg mb-1">{pillar.title}</h3>
                <ArabicText className="text-xs font-medium block mb-2" style={{ color: pillar.color }}>
                  {pillar.ar}
                </ArabicText>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{pillar.desc}</p>
                <ul className="space-y-2">
                  {pillar.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: pillar.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Residency Map */}
      <section className="py-20 lg:py-28 bg-[#0D1B2A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A73E8]/10 to-[#8B5CF6]/10 pointer-events-none" />
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/70 text-sm font-medium mb-5">
              <Database className="h-4 w-4" />
              Data Residency
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Your data stays in your region
            </h2>
            <ArabicText className="text-blue-300 text-lg block mb-4">
              بياناتك تبقى في منطقتك
            </ArabicText>
            <p className="text-gray-400 max-w-xl mx-auto">
              Haala operates two production data centers — one in the UAE and one in Pakistan.
              Enterprise customers choose exactly where their data is stored and processed.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                flag: "🇦🇪",
                region: "UAE — Dubai",
                ar: "الإمارات — دبي",
                desc: "Primary region for Gulf and MENA customers. Serves Saudi Arabia, UAE, Bahrain, and Kuwait. PDPL and GDPR compliant.",
                color: "#1A73E8",
                tags: ["Saudi Arabia 🇸🇦", "UAE 🇦🇪", "Bahrain 🇧🇭", "Kuwait 🇰🇼"],
              },
              {
                flag: "🇵🇰",
                region: "Pakistan — Karachi",
                ar: "باكستان — كراتشي",
                desc: "Primary region for South Asian customers. Serves Pakistan, Bangladesh, and the broader South Asia market. PTA and PECA compliant.",
                color: "#34A853",
                tags: ["Pakistan 🇵🇰", "Bangladesh 🇧🇩", "Sri Lanka 🇱🇰"],
              },
            ].map((dc) => (
              <div key={dc.region} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-4xl mb-3">{dc.flag}</div>
                <h3 className="font-bold text-white text-lg mb-1">{dc.region}</h3>
                <ArabicText className="text-sm block mb-3" style={{ color: dc.color }}>
                  {dc.ar}
                </ArabicText>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{dc.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {dc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admin Console Features */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] mb-3">
              Built for IT administrators
            </h2>
            <ArabicText className="text-gray-500 text-lg">مبني لمسؤولي تقنية المعلومات</ArabicText>
            <p className="text-gray-500 mt-3 max-w-lg mx-auto">
              One admin console to manage every user, policy, and security setting
              across all 11 Haala products.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {adminFeatures.map((feat) => (
              <div
                key={feat.title}
                className="flex gap-4 items-start border border-gray-100 rounded-xl p-5 hover:shadow-sm hover:border-gray-200 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1A73E8]/10 flex items-center justify-center text-[#1A73E8] shrink-0">
                  {feat.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-[#0D1B2A] mb-1 text-sm">{feat.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] mb-3">
              Deploy your way
            </h2>
            <ArabicText className="text-gray-500 text-lg">انشر بالطريقة التي تناسبك</ArabicText>
            <p className="text-gray-500 mt-3 max-w-lg mx-auto">
              Whether you need fully managed cloud, a hybrid split, or complete on-premise
              control — Haala supports it all.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {deploymentOptions.map((opt) => (
              <div
                key={opt.title}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all relative"
              >
                {opt.badge && (
                  <div
                    className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: opt.bg, color: opt.color }}
                  >
                    {opt.badge}
                  </div>
                )}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: opt.bg, color: opt.color }}
                >
                  {opt.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0D1B2A] mb-1">{opt.title}</h3>
                <ArabicText className="text-sm font-medium block mb-3" style={{ color: opt.color }}>
                  {opt.ar}
                </ArabicText>
                <p className="text-sm text-gray-500 mb-5 leading-relaxed">{opt.desc}</p>
                <ul className="space-y-2">
                  {opt.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: opt.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Certifications Detail */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] mb-3">
              Compliance certifications
            </h2>
            <ArabicText className="text-gray-500 text-lg">شهادات الامتثال</ArabicText>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="border border-gray-100 rounded-2xl p-6 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-2 h-8 rounded-full"
                    style={{ backgroundColor: cert.color }}
                  />
                  <div>
                    <h3 className="font-bold text-[#0D1B2A]">{cert.name}</h3>
                    <div className="text-xs text-gray-400">{cert.issuer}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Logos Strip */}
      <section className="py-14 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-gray-400 uppercase tracking-widest font-medium mb-8">
            Trusted by leading organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
            {customerLogos.map((co) => (
              <div key={co.name} className="flex items-center gap-2">
                <span className="text-lg">{co.flag}</span>
                <span className="font-semibold text-gray-500 text-sm">{co.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Sales Form */}
      <section id="contact" className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A73E8]/10 text-[#1A73E8] text-sm font-medium mb-5">
                <Sparkles className="h-4 w-4" />
                Contact Sales
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] mb-3">
                Let's talk enterprise
              </h2>
              <ArabicText className="text-gray-500 text-lg block mb-3">
                لنتحدث عن حلول المؤسسات
              </ArabicText>
              <p className="text-gray-500">
                Fill in the form and our enterprise team will reach out within one business day.
              </p>
            </div>

            {submitted ? (
              <div className="bg-[#34A853]/10 border border-[#34A853]/20 rounded-2xl p-10 text-center">
                <div className="w-14 h-14 bg-[#34A853]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-7 w-7 text-[#34A853]" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1B2A] mb-2">
                  Thanks — we'll be in touch!
                </h3>
                <ArabicText className="text-gray-500 block">
                  شكراً! سنتواصل معك قريباً
                </ArabicText>
                <p className="text-sm text-gray-500 mt-3">
                  Our enterprise team will contact you within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#0D1B2A] mb-1.5">
                      Full name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Ahmed Khalid"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A73E8]/30 focus:border-[#1A73E8]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0D1B2A] mb-1.5">
                      Company *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      required
                      placeholder="Acme Corp"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A73E8]/30 focus:border-[#1A73E8]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0D1B2A] mb-1.5">
                    Work email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="ahmed@company.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A73E8]/30 focus:border-[#1A73E8]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0D1B2A] mb-1.5">
                    Team size *
                  </label>
                  <select
                    name="teamSize"
                    value={form.teamSize}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A73E8]/30 focus:border-[#1A73E8] bg-white"
                  >
                    <option value="">Select team size</option>
                    <option value="50-200">50 – 200 employees</option>
                    <option value="200-1000">200 – 1,000 employees</option>
                    <option value="1000-5000">1,000 – 5,000 employees</option>
                    <option value="5000+">5,000+ employees</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0D1B2A] mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your deployment needs, compliance requirements, or any questions..."
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A73E8]/30 focus:border-[#1A73E8] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1A73E8] text-white py-3.5 rounded-full font-medium hover:bg-[#1557B0] transition-colors flex items-center justify-center gap-2"
                >
                  Send message <ArrowRight className="h-4 w-4" />
                </button>

                <p className="text-xs text-gray-400 text-center">
                  By submitting, you agree to Haala's{" "}
                  <Link to="/privacy" className="underline hover:text-gray-600">
                    Privacy Policy
                  </Link>
                  . We'll respond within one business day.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#0D1B2A]">
        <div className="container mx-auto px-6 text-center">
          <Zap className="h-8 w-8 text-[#FBBC04] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">
            Not sure yet? Start with Business.
          </h2>
          <p className="text-gray-400 mb-6 max-w-md mx-auto text-sm">
            The Business plan includes SSO, audit logs, data residency, and priority support.
            Upgrade to Enterprise when you're ready.
          </p>
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 border border-white/20 text-white px-7 py-3 rounded-full font-medium hover:bg-white/5 transition-colors text-sm"
          >
            Compare all plans <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EnterprisePage;
