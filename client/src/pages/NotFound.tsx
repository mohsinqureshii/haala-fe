import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ArabicText from "@/components/ArabicText";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const helpfulLinks = [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 flex flex-col items-center justify-center px-4 py-16">
      {/* SVG Illustration */}
      <div className="mb-8">
        <svg
          width="220"
          height="140"
          viewBox="0 0 220 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Ground */}
          <ellipse cx="110" cy="128" rx="90" ry="10" fill="#E5E7EB" />
          {/* Page body */}
          <rect x="65" y="20" width="90" height="110" rx="8" fill="white" stroke="#D1D5DB" strokeWidth="2" />
          {/* Page fold */}
          <path d="M135 20 L155 40 L135 40 Z" fill="#E5E7EB" />
          <path d="M135 20 L155 40 H135 V20Z" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="1.5" />
          {/* Lines on page */}
          <rect x="78" y="52" width="44" height="5" rx="2.5" fill="#E5E7EB" />
          <rect x="78" y="65" width="64" height="4" rx="2" fill="#F3F4F6" />
          <rect x="78" y="77" width="56" height="4" rx="2" fill="#F3F4F6" />
          <rect x="78" y="89" width="60" height="4" rx="2" fill="#F3F4F6" />
          {/* Magnifying glass */}
          <circle cx="152" cy="92" r="22" fill="white" stroke="#1A73E8" strokeWidth="3" />
          <circle cx="152" cy="92" r="14" fill="#EFF6FF" stroke="#1A73E8" strokeWidth="2" />
          {/* X inside magnifying glass */}
          <line x1="146" y1="86" x2="158" y2="98" stroke="#1A73E8" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="158" y1="86" x2="146" y2="98" stroke="#1A73E8" strokeWidth="2.5" strokeLinecap="round" />
          {/* Handle */}
          <line x1="169" y1="109" x2="180" y2="120" stroke="#1A73E8" strokeWidth="3.5" strokeLinecap="round" />
          {/* Small stars */}
          <circle cx="42" cy="38" r="3" fill="#BFDBFE" />
          <circle cx="185" cy="55" r="2" fill="#BFDBFE" />
          <circle cx="30" cy="80" r="2" fill="#DBEAFE" />
          <circle cx="192" cy="30" r="3.5" fill="#DBEAFE" />
        </svg>
      </div>

      {/* 404 Number */}
      <h1
        className="text-[96px] sm:text-[128px] font-black leading-none text-[#1A73E8] select-none"
        style={{ letterSpacing: "-0.04em" }}
      >
        404
      </h1>

      {/* Titles */}
      <div className="text-center mt-2 mb-8">
        <p className="text-2xl sm:text-3xl font-bold text-[#0D1B2A] mb-2">
          Page not found
        </p>
        <p className="text-lg text-gray-400 font-medium">
          <ArabicText className="text-lg text-gray-400">الصفحة غير موجودة</ArabicText>
        </p>
        <p className="text-sm text-gray-500 mt-3 max-w-sm mx-auto">
          The page at{" "}
          <code className="px-1.5 py-0.5 bg-gray-100 rounded text-xs font-mono text-gray-600">
            {location.pathname}
          </code>{" "}
          doesn't exist or has been moved.
        </p>
      </div>

      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded-xl text-sm font-semibold text-gray-700 hover:bg-white hover:shadow-sm transition-all mb-8"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Go back
      </button>

      {/* Helpful links */}
      <div className="bg-white rounded-2xl border border-gray-200 px-6 py-5 w-full max-w-sm shadow-sm">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4 text-center">
          Helpful links
        </p>
        <div className="grid grid-cols-1 gap-1">
          {helpfulLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-blue-50 hover:text-[#1A73E8] text-sm font-medium text-gray-700 transition-colors group"
            >
              <span>{link.label}</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="text-gray-300 group-hover:text-[#1A73E8] transition-colors"
                aria-hidden="true"
              >
                <path
                  d="M4 7h6M7 4l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          ))}
        </div>
      </div>

      {/* Brand footer note */}
      <p className="text-xs text-gray-400 mt-8">
        Need help?{" "}
        <Link to="/contact" className="text-[#1A73E8] hover:underline font-medium">
          Contact support
        </Link>
        {" "}or visit the{" "}
        <Link to="/" className="text-[#1A73E8] hover:underline font-medium">
          Haala homepage
        </Link>
        .
      </p>
    </div>
  );
};

export default NotFound;
