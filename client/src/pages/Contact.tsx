import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  HelpCircle,
  Send,
  Loader2,
  ChevronDown,
  Users,
} from "lucide-react";
import ArabicText from "@/components/ArabicText";

const offices = [
  {
    city: "Lahore",
    flag: "🇵🇰",
    country: "Pakistan",
    address: "Office 4B, Arfa Software Technology Park, Lahore 54000",
    phone: "+92 42 3571 0000",
    color: "bg-green-50 border-green-100",
    dotColor: "bg-green-500",
  },
  {
    city: "Riyadh",
    flag: "🇸🇦",
    country: "Saudi Arabia",
    address: "Al Olaya District, King Fahad Road, Tower B, Riyadh 12211",
    phone: "+966 11 460 0000",
    color: "bg-blue-50 border-blue-100",
    dotColor: "bg-blue-500",
  },
  {
    city: "Dubai",
    flag: "🇦🇪",
    country: "UAE",
    address: "Dubai Internet City, Building 11, Office 203, Dubai",
    phone: "+971 4 440 0000",
    color: "bg-purple-50 border-purple-100",
    dotColor: "bg-purple-500",
  },
  {
    city: "Manama",
    flag: "🇧🇭",
    country: "Bahrain",
    address: "Harbour Row, Unit 12, Bahrain Financial Harbour, Manama",
    phone: "+973 1717 0000",
    color: "bg-yellow-50 border-yellow-100",
    dotColor: "bg-yellow-500",
  },
];

const teamSizes = ["Just me", "2–10", "11–50", "51–200", "201–500", "500+"];

type ActiveTab = "sales" | "support";

interface FormState {
  name: string;
  email: string;
  company: string;
  teamSize: string;
  message: string;
}

const emptyForm: FormState = {
  name: "",
  email: "",
  company: "",
  teamSize: "",
  message: "",
};

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("sales");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>(emptyForm);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1800);
  };

  const resetForm = () => {
    setSubmitted(false);
    setForm(emptyForm);
  };

  return (
    <div className="font-sans bg-white min-h-screen">
      {/* ── Hero ── */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-[#0D1B2A] via-[#1A2F4A] to-[#0D1B2A] text-white text-center px-4">
        <div className="max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6 border border-white/10">
            Contact
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold mb-3 tracking-tight">
            Let's talk
          </h1>
          <p className="text-2xl font-light text-white/70 mb-5">
            <ArabicText className="text-white/90 text-2xl">
              تواصل معنا
            </ArabicText>
          </p>
          <p className="text-white/60 text-lg max-w-md mx-auto">
            Whether you're evaluating Haala for your team or need help with
            your account, we're here.
          </p>
        </div>
      </section>

      {/* ── Tab Switcher ── */}
      <div className="flex justify-center -mt-5 relative z-10 px-4">
        <div className="inline-flex bg-white rounded-full shadow-lg border border-gray-100 p-1">
          {(["sales", "support"] as ActiveTab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeTab === tab
                  ? "bg-[#1A73E8] text-white shadow"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {tab === "sales" ? "Talk to Sales" : "Get Support"}
            </button>
          ))}
        </div>
      </div>

      {/* ── Two-column layout ── */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: Contact Form */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D1B2A] mb-2">
                {activeTab === "sales"
                  ? "Talk to our sales team"
                  : "Contact support"}
              </h2>
              <p className="text-gray-500">
                {activeTab === "sales"
                  ? "Tell us about your team and we'll help you find the right plan."
                  : "Having a technical issue? Describe it and our team will get back to you."}
              </p>
            </div>

            {submitted ? (
              <div className="bg-green-50 border border-green-100 rounded-2xl p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Send className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1B2A] mb-2">
                  Message sent!
                </h3>
                <p className="text-gray-500 mb-6">
                  We'll get back to you within one business day.
                </p>
                <button
                  onClick={resetForm}
                  className="text-[#1A73E8] font-semibold hover:underline text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full name{" "}
                      <span className="text-[#EA4335]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ahmed Al-Rashid"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A73E8]/30 focus:border-[#1A73E8] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Work email{" "}
                      <span className="text-[#EA4335]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="ahmed@company.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A73E8]/30 focus:border-[#1A73E8] transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Company name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A73E8]/30 focus:border-[#1A73E8] transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    <Users className="inline h-4 w-4 mr-1 text-gray-400" />
                    Team size
                  </label>
                  <div className="relative">
                    <select
                      name="teamSize"
                      value={form.teamSize}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#1A73E8]/30 focus:border-[#1A73E8] transition cursor-pointer"
                    >
                      <option value="">Select team size…</option>
                      {teamSizes.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message <span className="text-[#EA4335]">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder={
                      activeTab === "sales"
                        ? "Tell us about your team, current tools, and what you're looking for…"
                        : "Describe the issue you're experiencing…"
                    }
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A73E8]/30 focus:border-[#1A73E8] transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1A73E8] hover:bg-[#1557B0] text-white font-semibold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      {activeTab === "sales" ? "Talk to Sales" : "Submit Request"}
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  By submitting, you agree to our{" "}
                  <Link to="/privacy" className="text-[#1A73E8] hover:underline">
                    Privacy Policy
                  </Link>
                  . We never spam.
                </p>
              </form>
            )}
          </div>

          {/* Right: Info */}
          <div className="space-y-8">
            {/* Support channels */}
            <div>
              <h3 className="text-lg font-bold text-[#0D1B2A] mb-4">
                {activeTab === "sales"
                  ? "Prefer to reach out directly?"
                  : "Other support channels"}
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:hello@haala.io"
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-[#1A73E8]/30 hover:bg-blue-50/50 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition">
                    <Mail className="h-5 w-5 text-[#1A73E8]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0D1B2A]">
                      Email us
                    </p>
                    <p className="text-sm text-[#1A73E8]">hello@haala.io</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/924235710000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-green-200 hover:bg-green-50/50 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition">
                    <MessageSquare className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0D1B2A]">
                      WhatsApp
                    </p>
                    <p className="text-sm text-green-600">
                      Chat with us on WhatsApp
                    </p>
                  </div>
                </a>

                <Link
                  to="/docs"
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-purple-200 hover:bg-purple-50/50 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition">
                    <HelpCircle className="h-5 w-5 text-[#8B5CF6]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0D1B2A]">
                      Help Center
                    </p>
                    <p className="text-sm text-[#8B5CF6]">
                      Guides, docs &amp; FAQs
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Office cards */}
            <div>
              <h3 className="text-lg font-bold text-[#0D1B2A] mb-4">
                Our offices
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {offices.map((office) => (
                  <div
                    key={office.city}
                    className={`p-4 rounded-xl border ${office.color}`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl">{office.flag}</span>
                      <div>
                        <p className="text-sm font-bold text-[#0D1B2A]">
                          {office.city}
                        </p>
                        <p className="text-xs text-gray-500">
                          {office.country}
                        </p>
                      </div>
                      <span
                        className={`ml-auto w-2 h-2 rounded-full ${office.dotColor}`}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-3.5 w-3.5 text-gray-400 mt-0.5 shrink-0" />
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {office.address}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                        <p className="text-xs text-gray-600">{office.phone}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response time note */}
            <div className="bg-[#0D1B2A] rounded-2xl p-5 text-white">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <MessageSquare className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">
                    Fast response guarantee
                  </p>
                  <p className="text-white/60 text-xs leading-relaxed">
                    Sales inquiries answered within 4 hours during business
                    hours (GST). Support tickets within 8 hours, 7 days a
                    week. Enterprise customers get a dedicated Slack channel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
