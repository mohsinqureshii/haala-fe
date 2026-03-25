import { useState, ChangeEvent, FormEvent } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Briefcase,
  DollarSign,
  Building2,
  Calendar,
  Upload,
  CheckCircle2,
  Wifi,
  TrendingUp,
  Umbrella,
  Plane,
} from "lucide-react";

const job = {
  title: "Senior Full-Stack Engineer",
  department: "Engineering",
  location: "Lahore / Remote",
  type: "Full-time",
  salaryUSD: "$80K – $120K USD",
  salaryPKR: "PKR 800K – 1.2M / yr",
  applyBy: "30 April 2026",
  teamSize: "8 engineers",
  overview:
    "Haala is building the Google Workspace alternative for Arabic and Urdu markets. As a Senior Full-Stack Engineer you'll work across our core product surface — Mail, Docs, and our real-time collaboration layer — shipping features used by hundreds of thousands of people who've never had a workspace tool that truly understands their language. This is a senior IC role with direct influence on architecture and product direction.",
  responsibilities: [
    "Design and build full-stack features across Haala Mail, Docs, and Drive using React, TypeScript, and Node.js",
    "Implement and optimise RTL (right-to-left) UI patterns for Arabic and Urdu — this is a first-class concern, not an afterthought",
    "Collaborate with the Murshid AI team to integrate LLM-powered features (smart compose, email summarisation, translation)",
    "Own your features end-to-end: from data model design to database migrations to front-end rendering",
    "Participate in code review, help define engineering standards, and mentor mid-level engineers on the team",
    "Contribute to on-call rotation and help maintain 99.9% uptime SLA across production services",
  ],
  qualifications: [
    "5+ years of professional full-stack engineering experience, with recent work in TypeScript/React and Node.js or a similar back-end runtime",
    "Strong understanding of relational databases (PostgreSQL) and caching (Redis) at production scale",
    "Experience with RESTful and/or GraphQL API design and consuming third-party APIs",
    "Solid grasp of frontend performance: bundle optimisation, lazy loading, paint metrics, and accessibility",
    "Comfortable owning a feature independently from design handoff to production deployment",
    "Excellent written English communication — we're async-first and clear writing is a core skill",
  ],
  niceToHave: [
    "Experience building or maintaining RTL / bidirectional text layouts in web applications",
    "Familiarity with Arabic NLP concepts or multilingual product localisation at scale",
    "Prior startup experience, especially in a high-ownership IC role with limited process overhead",
    "Contributions to open-source projects or a public portfolio showing production-quality code",
  ],
};

const companyPerks = [
  { icon: <DollarSign className="h-4 w-4" />, text: "Paid in USD globally" },
  { icon: <Wifi className="h-4 w-4" />, text: "Remote-first, async culture" },
  { icon: <TrendingUp className="h-4 w-4" />, text: "Equity from day one" },
  { icon: <Umbrella className="h-4 w-4" />, text: "40 days leave per year" },
  { icon: <Plane className="h-4 w-4" />, text: "Bi-annual GCC retreats" },
];

interface FormState {
  name: string;
  email: string;
  linkedin: string;
  resume: File | null;
  coverNote: string;
}

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    linkedin: "",
    resume: null,
    coverNote: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setForm((prev) => ({ ...prev, resume: file }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // id is used to identify the role; full detail is always shown for Senior Full-Stack Engineer
  void id;

  return (
    <div className="font-sans bg-white min-h-screen">
      {/* Header */}
      <section className="bg-[#0D1B2A] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <Link
            to="/careers/jobs"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> All open roles
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#1A73E8] mb-4 bg-[#1A73E8]/10 px-3 py-1.5 rounded-full">
              {job.department}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              {job.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" /> {job.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Briefcase className="h-4 w-4" /> {job.type}
              </span>
              <span className="flex items-center gap-1.5">
                <DollarSign className="h-4 w-4" /> {job.salaryUSD}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> Apply by {job.applyBy}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid lg:grid-cols-[1fr_340px] gap-14">
          {/* Main JD */}
          <div>
            {/* Overview */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0D1B2A] mb-4">
                Overview
              </h2>
              <p className="text-gray-600 leading-relaxed text-[17px]">
                {job.overview}
              </p>
            </div>

            {/* What you'll do */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0D1B2A] mb-5">
                What you'll do
              </h2>
              <ul className="space-y-4">
                {job.responsibilities.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-[17px]">
                    <span className="w-2 h-2 rounded-full bg-[#1A73E8] mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* What we're looking for */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0D1B2A] mb-5">
                What we're looking for
              </h2>
              <ul className="space-y-4">
                {job.qualifications.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-[17px]">
                    <span className="w-2 h-2 rounded-full bg-[#1A73E8] mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Nice to have */}
            <div className="mb-14">
              <h2 className="text-2xl font-bold text-[#0D1B2A] mb-5">
                Nice to have
              </h2>
              <ul className="space-y-4">
                {job.niceToHave.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-500 text-[17px]">
                    <span className="w-2 h-2 rounded-full bg-gray-300 mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Application form */}
            <div className="border border-gray-100 rounded-2xl p-8 bg-gray-50">
              <h2 className="text-2xl font-bold text-[#0D1B2A] mb-2">
                Apply for this role
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                We read every application. You'll hear back within 5 business
                days.
              </p>

              {submitted ? (
                <div className="flex flex-col items-center text-center py-10">
                  <CheckCircle2 className="h-14 w-14 text-[#34A853] mb-4" />
                  <h3 className="text-xl font-bold text-[#0D1B2A] mb-2">
                    Application received!
                  </h3>
                  <p className="text-gray-500">
                    Thanks for applying. We'll be in touch within 5 business
                    days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0D1B2A] mb-1.5">
                      Full Name <span className="text-[#EA4335]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Fatima Al-Rashidi"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-[#0D1B2A] text-sm focus:ring-2 focus:ring-[#1A73E8]/20 focus:border-[#1A73E8] outline-none transition"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0D1B2A] mb-1.5">
                      Email Address <span className="text-[#EA4335]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="fatima@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-[#0D1B2A] text-sm focus:ring-2 focus:ring-[#1A73E8]/20 focus:border-[#1A73E8] outline-none transition"
                    />
                  </div>

                  {/* LinkedIn */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0D1B2A] mb-1.5">
                      LinkedIn URL
                    </label>
                    <input
                      type="url"
                      name="linkedin"
                      value={form.linkedin}
                      onChange={handleChange}
                      placeholder="https://linkedin.com/in/yourname"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-[#0D1B2A] text-sm focus:ring-2 focus:ring-[#1A73E8]/20 focus:border-[#1A73E8] outline-none transition"
                    />
                  </div>

                  {/* Resume upload */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0D1B2A] mb-1.5">
                      Resume / CV <span className="text-[#EA4335]">*</span>
                    </label>
                    <label className="flex flex-col items-center justify-center gap-3 w-full border-2 border-dashed border-gray-200 rounded-xl py-8 bg-white cursor-pointer hover:border-[#1A73E8]/40 hover:bg-[#1A73E8]/5 transition-colors">
                      <Upload className="h-7 w-7 text-[#1A73E8]" />
                      <span className="text-sm text-gray-500 text-center">
                        {form.resume ? (
                          <span className="font-medium text-[#0D1B2A]">
                            {form.resume.name}
                          </span>
                        ) : (
                          <>
                            <span className="font-medium text-[#1A73E8]">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                            <br />
                            PDF, DOCX up to 10 MB
                          </>
                        )}
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        required
                        className="sr-only"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>

                  {/* Cover note */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0D1B2A] mb-1.5">
                      Cover Note
                    </label>
                    <textarea
                      name="coverNote"
                      rows={5}
                      value={form.coverNote}
                      onChange={handleChange}
                      placeholder="Tell us why you want to build Haala and what you'd bring to this role..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[#0D1B2A] text-sm focus:ring-2 focus:ring-[#1A73E8]/20 focus:border-[#1A73E8] outline-none transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1A73E8] hover:bg-[#1A73E8]/90 text-white py-3.5 rounded-full font-semibold transition-colors"
                  >
                    Submit Application
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="sticky top-24 space-y-5">
              {/* Role metadata */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 space-y-5">
                <h3 className="font-bold text-[#0D1B2A] text-base">
                  Role details
                </h3>

                <div className="flex items-start gap-3">
                  <Building2 className="h-5 w-5 text-gray-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                      Department
                    </p>
                    <p className="text-sm font-medium text-[#0D1B2A] mt-0.5">
                      {job.department}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gray-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-sm font-medium text-[#0D1B2A] mt-0.5">
                      {job.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Briefcase className="h-5 w-5 text-gray-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                      Type
                    </p>
                    <p className="text-sm font-medium text-[#0D1B2A] mt-0.5">
                      {job.type}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-gray-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                      Salary
                    </p>
                    <p className="text-sm font-medium text-[#0D1B2A] mt-0.5">
                      {job.salaryUSD}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {job.salaryPKR}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-gray-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                      Apply by
                    </p>
                    <p className="text-sm font-medium text-[#0D1B2A] mt-0.5">
                      {job.applyBy}
                    </p>
                  </div>
                </div>
              </div>

              {/* Company perks */}
              <div className="bg-[#0D1B2A] rounded-2xl p-6">
                <h3 className="font-bold text-white text-base mb-4">
                  Haala perks
                </h3>
                <ul className="space-y-3">
                  {companyPerks.map((perk, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-white/70 text-sm"
                    >
                      <span className="text-[#1A73E8] shrink-0">
                        {perk.icon}
                      </span>
                      {perk.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Back link */}
              <Link
                to="/careers/jobs"
                className="flex items-center justify-center gap-2 border border-gray-200 text-gray-600 hover:border-[#0D1B2A] hover:text-[#0D1B2A] px-6 py-3 rounded-full text-sm font-medium transition-colors"
              >
                <ArrowLeft className="h-4 w-4" /> All open roles
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default JobDetail;
