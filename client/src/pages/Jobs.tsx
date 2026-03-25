import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Briefcase } from "lucide-react";

type Department =
  | "All"
  | "Engineering"
  | "Product"
  | "Design"
  | "Sales"
  | "Operations"
  | "Marketing";

interface Job {
  id: string;
  title: string;
  department: Department;
  location: string;
  type: string;
  regionFlag: string;
}

const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Lahore / Remote",
    type: "Full-time",
    regionFlag: "🇵🇰",
  },
  {
    id: "2",
    title: "AI/ML Engineer – Murshid Team",
    department: "Engineering",
    location: "Remote",
    type: "Remote",
    regionFlag: "🌍",
  },
  {
    id: "3",
    title: "Product Manager – Communications",
    department: "Product",
    location: "Riyadh / Remote",
    type: "Full-time",
    regionFlag: "🇸🇦",
  },
  {
    id: "4",
    title: "Senior Product Designer",
    department: "Design",
    location: "Dubai / Remote",
    type: "Full-time",
    regionFlag: "🇦🇪",
  },
  {
    id: "5",
    title: "Enterprise Sales Executive – GCC",
    department: "Sales",
    location: "Riyadh",
    type: "Full-time",
    regionFlag: "🇸🇦",
  },
  {
    id: "6",
    title: "DevOps / SRE Engineer",
    department: "Engineering",
    location: "Lahore / Remote",
    type: "Full-time",
    regionFlag: "🇵🇰",
  },
  {
    id: "7",
    title: "Head of Marketing – MENA",
    department: "Marketing",
    location: "Dubai / Remote",
    type: "Full-time",
    regionFlag: "🇦🇪",
  },
  {
    id: "8",
    title: "Customer Success Manager – Pakistan",
    department: "Operations",
    location: "Lahore",
    type: "Full-time",
    regionFlag: "🇵🇰",
  },
];

const filterTabs: Department[] = [
  "All",
  "Engineering",
  "Product",
  "Design",
  "Sales",
  "Operations",
];

const deptColors: Record<string, string> = {
  Engineering: "bg-[#1A73E8]/10 text-[#1A73E8]",
  Product: "bg-purple-100 text-purple-700",
  Design: "bg-pink-100 text-pink-700",
  Sales: "bg-[#34A853]/10 text-[#34A853]",
  Operations: "bg-orange-100 text-orange-700",
  Marketing: "bg-yellow-100 text-yellow-700",
};

const Jobs = () => {
  const [activeFilter, setActiveFilter] = useState<Department>("All");

  const filteredJobs =
    activeFilter === "All"
      ? jobs
      : jobs.filter((j) => j.department === activeFilter);

  return (
    <div className="font-sans bg-white min-h-screen">
      {/* Header */}
      <section className="bg-[#0D1B2A] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Link
            to="/careers"
            className="text-white/50 hover:text-white text-sm mb-6 inline-block transition-colors"
          >
            ← Back to Careers
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Open Roles</h1>
          <p className="text-white/50 text-lg">
            {jobs.length} open positions across engineering, product, design,
            sales, and operations.
          </p>
        </div>
      </section>

      {/* Filter tabs + job list */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeFilter === tab
                  ? "bg-[#0D1B2A] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab}
              {tab !== "All" && (
                <span
                  className={`ml-1.5 text-xs ${
                    activeFilter === tab ? "text-white/60" : "text-gray-400"
                  }`}
                >
                  {jobs.filter((j) => j.department === tab).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-sm text-gray-400 mb-5">
          Showing {filteredJobs.length}{" "}
          {filteredJobs.length === 1 ? "role" : "roles"}
          {activeFilter !== "All" ? ` in ${activeFilter}` : ""}
        </p>

        {/* Job cards */}
        <div className="space-y-3">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="group border border-gray-100 rounded-2xl p-6 hover:border-[#1A73E8]/30 hover:shadow-lg transition-all bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-xl mt-0.5">{job.regionFlag}</span>
                  <div>
                    <h3 className="font-bold text-[#0D1B2A] text-lg leading-tight group-hover:text-[#1A73E8] transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                          deptColors[job.department] ??
                          "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <MapPin className="h-3.5 w-3.5" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Briefcase className="h-3.5 w-3.5" /> {job.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                to={`/careers/jobs/${job.id}`}
                className="inline-flex items-center gap-2 bg-[#1A73E8] hover:bg-[#1A73E8]/90 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors shrink-0"
              >
                Apply <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-20">
            <Briefcase className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#0D1B2A] mb-2">
              No roles in this department right now
            </h3>
            <p className="text-gray-400 mb-6">
              We're always hiring great people. Send us your CV anyway.
            </p>
            <button
              onClick={() => setActiveFilter("All")}
              className="text-[#1A73E8] font-medium hover:underline"
            >
              View all roles
            </button>
          </div>
        )}
      </section>

      {/* Don't see your role */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#0D1B2A] mb-3">
            Don't see your role?
          </h2>
          <p className="text-gray-500 mb-8">
            We're always interested in exceptional people. Send a short note and
            your CV to{" "}
            <a
              href="mailto:careers@haala.io"
              className="text-[#1A73E8] hover:underline"
            >
              careers@haala.io
            </a>
          </p>
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 border border-[#0D1B2A] text-[#0D1B2A] hover:bg-[#0D1B2A] hover:text-white px-7 py-3 rounded-full font-semibold transition-colors"
          >
            Back to Careers overview
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Jobs;
