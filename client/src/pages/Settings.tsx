import { useState } from "react";
import { Link } from "react-router-dom";
import {
  User, Bell, Palette, Globe, Shield, CreditCard,
  Users, Puzzle, Code2, ChevronRight, Upload, Check,
  Eye, EyeOff, Monitor, Sun, Moon, Smartphone,
  Mail, MessageSquare, Calendar, CheckSquare,
} from "lucide-react";
import ArabicText from "@/components/ArabicText";

type Section =
  | "profile"
  | "account"
  | "notifications"
  | "appearance"
  | "language"
  | "security"
  | "integrations"
  | "billing"
  | "team"
  | "api";

const sidebarSections: { id: Section; icon: React.ReactNode; label: string }[] = [
  { id: "profile", icon: <User className="h-4 w-4" />, label: "Profile" },
  { id: "account", icon: <User className="h-4 w-4" />, label: "Account" },
  { id: "notifications", icon: <Bell className="h-4 w-4" />, label: "Notifications" },
  { id: "appearance", icon: <Palette className="h-4 w-4" />, label: "Appearance" },
  { id: "language", icon: <Globe className="h-4 w-4" />, label: "Language" },
  { id: "security", icon: <Shield className="h-4 w-4" />, label: "Security" },
  { id: "integrations", icon: <Puzzle className="h-4 w-4" />, label: "Integrations" },
  { id: "billing", icon: <CreditCard className="h-4 w-4" />, label: "Billing" },
  { id: "team", icon: <Users className="h-4 w-4" />, label: "Team" },
  { id: "api", icon: <Code2 className="h-4 w-4" />, label: "API" },
];

interface ToggleProps {
  checked: boolean;
  onChange: () => void;
  label?: string;
}

const Toggle = ({ checked, onChange, label }: ToggleProps) => (
  <button
    role="switch"
    aria-checked={checked}
    aria-label={label}
    onClick={onChange}
    className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-[#1A73E8] focus:ring-offset-2 ${
      checked ? "bg-[#1A73E8]" : "bg-gray-200"
    }`}
  >
    <span
      className={`pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow transform ring-0 transition-transform ${
        checked ? "translate-x-4" : "translate-x-0"
      }`}
    />
  </button>
);

// ── Profile Section ──────────────────────────────────────────────────────────
const ProfileSection = () => {
  const [displayName, setDisplayName] = useState("Mohammed Al-Rashidi");
  const [email, setEmail] = useState("mohammed@haala.app");
  const [jobTitle, setJobTitle] = useState("Product Manager");
  const [timezone, setTimezone] = useState("Asia/Riyadh");
  const [uiLang, setUiLang] = useState<"en" | "ar" | "ur">("en");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-bold text-[#0D1B2A] mb-1">Profile</h2>
        <p className="text-sm text-gray-500">Manage your personal information and preferences.</p>
      </div>

      {/* Avatar */}
      <div className="flex items-center gap-5">
        <div className="w-20 h-20 rounded-full bg-[#1A73E8] flex items-center justify-center text-white text-2xl font-bold shrink-0">
          M
        </div>
        <div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <Upload className="h-4 w-4" />
            Upload photo
          </button>
          <p className="text-xs text-gray-400 mt-1.5">JPG, PNG or GIF. Max 5 MB.</p>
        </div>
      </div>

      {/* Fields */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Display name</label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Job title</label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Timezone</label>
          <select
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent bg-white"
          >
            <option value="Asia/Riyadh">Asia/Riyadh (UTC+3)</option>
            <option value="Asia/Dubai">Asia/Dubai (UTC+4)</option>
            <option value="Asia/Karachi">Asia/Karachi (UTC+5)</option>
            <option value="Europe/London">Europe/London (UTC+0)</option>
            <option value="America/New_York">America/New_York (UTC-5)</option>
          </select>
        </div>
      </div>

      {/* Language toggle */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Interface language</label>
        <div className="flex gap-2">
          {(["en", "ar", "ur"] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => setUiLang(lang)}
              className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                uiLang === lang
                  ? "bg-[#1A73E8] text-white border-[#1A73E8]"
                  : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
              }`}
            >
              {lang === "en" ? "English" : lang === "ar" ? <ArabicText>العربية</ArabicText> : "اردو"}
            </button>
          ))}
        </div>
      </div>

      <div>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#1A73E8] text-white rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors"
        >
          {saved ? <Check className="h-4 w-4" /> : null}
          {saved ? "Saved!" : "Save changes"}
        </button>
      </div>
    </div>
  );
};

// ── Notifications Section ─────────────────────────────────────────────────────
const NotificationsSection = () => {
  const [prefs, setPrefs] = useState({
    emailNewMsg: true,
    emailMentions: true,
    emailMeetingReminders: true,
    emailTaskDue: false,
    inAppAll: true,
    inAppMentions: true,
    inAppMeetings: true,
    inAppTasks: true,
    mobileAll: false,
    mobileMentions: true,
    mobileMeetings: true,
    mobileUrgent: true,
  });

  const toggle = (key: keyof typeof prefs) =>
    setPrefs((p) => ({ ...p, [key]: !p[key] }));

  const rows: { key: keyof typeof prefs; icon: React.ReactNode; label: string; desc: string }[] = [
    { key: "emailNewMsg", icon: <Mail className="h-4 w-4" />, label: "New messages", desc: "When someone sends you an email" },
    { key: "emailMentions", icon: <MessageSquare className="h-4 w-4" />, label: "Mentions", desc: "When you're @mentioned in docs or chat" },
    { key: "emailMeetingReminders", icon: <Calendar className="h-4 w-4" />, label: "Meeting reminders", desc: "15 minutes before each meeting" },
    { key: "emailTaskDue", icon: <CheckSquare className="h-4 w-4" />, label: "Task due dates", desc: "Daily digest of upcoming task deadlines" },
  ];

  const channels = [
    { label: "Email notifications", prefix: "email" as const, keys: ["emailNewMsg", "emailMentions", "emailMeetingReminders", "emailTaskDue"] as (keyof typeof prefs)[] },
    { label: "In-app notifications", prefix: "inApp" as const, keys: ["inAppAll", "inAppMentions", "inAppMeetings", "inAppTasks"] as (keyof typeof prefs)[] },
    { label: "Mobile push", prefix: "mobile" as const, keys: ["mobileAll", "mobileMentions", "mobileMeetings", "mobileUrgent"] as (keyof typeof prefs)[] },
  ];

  const inAppLabels: Record<string, string> = {
    inAppAll: "All activity",
    inAppMentions: "Mentions only",
    inAppMeetings: "Meeting updates",
    inAppTasks: "Task assignments",
  };

  const mobileLabels: Record<string, string> = {
    mobileAll: "All notifications",
    mobileMentions: "Mentions",
    mobileMeetings: "Meeting reminders",
    mobileUrgent: "Urgent only",
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-bold text-[#0D1B2A] mb-1">Notifications</h2>
        <p className="text-sm text-gray-500">Choose how and when Haala notifies you.</p>
      </div>

      {/* Email */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-2">
          <Mail className="h-4 w-4 text-[#1A73E8]" />
          <span className="text-sm font-semibold text-[#0D1B2A]">Email notifications</span>
        </div>
        <div className="divide-y divide-gray-50">
          {rows.map((row) => (
            <div key={row.key} className="flex items-center justify-between px-5 py-3.5">
              <div className="flex items-center gap-3">
                <div className="text-gray-400">{row.icon}</div>
                <div>
                  <p className="text-sm font-medium text-[#0D1B2A]">{row.label}</p>
                  <p className="text-xs text-gray-400">{row.desc}</p>
                </div>
              </div>
              <Toggle checked={prefs[row.key]} onChange={() => toggle(row.key)} label={row.label} />
            </div>
          ))}
        </div>
      </div>

      {/* In-app */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-2">
          <Monitor className="h-4 w-4 text-[#1A73E8]" />
          <span className="text-sm font-semibold text-[#0D1B2A]">In-app notifications</span>
        </div>
        <div className="divide-y divide-gray-50">
          {channels[1].keys.map((key) => (
            <div key={key} className="flex items-center justify-between px-5 py-3.5">
              <p className="text-sm font-medium text-[#0D1B2A]">{inAppLabels[key]}</p>
              <Toggle checked={prefs[key]} onChange={() => toggle(key)} label={inAppLabels[key]} />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-2">
          <Smartphone className="h-4 w-4 text-[#1A73E8]" />
          <span className="text-sm font-semibold text-[#0D1B2A]">Mobile push</span>
        </div>
        <div className="divide-y divide-gray-50">
          {channels[2].keys.map((key) => (
            <div key={key} className="flex items-center justify-between px-5 py-3.5">
              <p className="text-sm font-medium text-[#0D1B2A]">{mobileLabels[key]}</p>
              <Toggle checked={prefs[key]} onChange={() => toggle(key)} label={mobileLabels[key]} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ── Appearance Section ────────────────────────────────────────────────────────
const AppearanceSection = () => {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("light");
  const [fontSize, setFontSize] = useState<"sm" | "md" | "lg">("md");

  const themes = [
    { id: "light" as const, icon: <Sun className="h-5 w-5" />, label: "Light" },
    { id: "dark" as const, icon: <Moon className="h-5 w-5" />, label: "Dark" },
    { id: "system" as const, icon: <Monitor className="h-5 w-5" />, label: "System" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-bold text-[#0D1B2A] mb-1">Appearance</h2>
        <p className="text-sm text-gray-500">Customize how Haala looks on your device.</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">Theme</label>
        <div className="grid grid-cols-3 gap-3 max-w-sm">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => setTheme(t.id)}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                theme === t.id
                  ? "border-[#1A73E8] bg-blue-50 text-[#1A73E8]"
                  : "border-gray-200 bg-white text-gray-500 hover:border-gray-300"
              }`}
            >
              {t.icon}
              <span className="text-xs font-medium">{t.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">Font size</label>
        <div className="flex gap-2">
          {(["sm", "md", "lg"] as const).map((size) => (
            <button
              key={size}
              onClick={() => setFontSize(size)}
              className={`px-5 py-2 rounded-lg border text-sm font-medium transition-colors ${
                fontSize === size
                  ? "bg-[#1A73E8] text-white border-[#1A73E8]"
                  : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
              }`}
            >
              {size === "sm" ? "Small" : size === "md" ? "Medium" : "Large"}
            </button>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-2">
          Preview:{" "}
          <span
            className={
              fontSize === "sm" ? "text-xs" : fontSize === "md" ? "text-sm" : "text-base"
            }
          >
            The quick brown fox jumps over the lazy dog.
          </span>
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">Accent color</label>
        <div className="flex gap-2.5">
          {["#1A73E8", "#0D9488", "#7C3AED", "#DC2626", "#D97706"].map((color) => (
            <button
              key={color}
              className="w-7 h-7 rounded-full border-2 border-white shadow hover:scale-110 transition-transform"
              style={{ backgroundColor: color }}
              aria-label={`Accent color ${color}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// ── Language Section ──────────────────────────────────────────────────────────
const LanguageSection = () => {
  const [uiLang, setUiLang] = useState("en");
  const [rtl, setRtl] = useState(false);
  const [dateFormat, setDateFormat] = useState<"gregorian" | "hijri">("gregorian");

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-bold text-[#0D1B2A] mb-1">Language & Region</h2>
        <p className="text-sm text-gray-500">Set your preferred language, reading direction, and date format.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
        <div className="px-5 py-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-[#0D1B2A]">UI Language</p>
            <p className="text-xs text-gray-400">Select the language for menus and labels</p>
          </div>
          <select
            value={uiLang}
            onChange={(e) => setUiLang(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1A73E8] bg-white"
          >
            <option value="en">English</option>
            <option value="ar">العربية</option>
            <option value="ur">اردو</option>
          </select>
        </div>

        <div className="px-5 py-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-[#0D1B2A]">Right-to-left (RTL)</p>
            <p className="text-xs text-gray-400">
              Mirror the interface for Arabic and Urdu — <ArabicText className="text-xs text-gray-400">من اليمين إلى اليسار</ArabicText>
            </p>
          </div>
          <Toggle checked={rtl} onChange={() => setRtl((v) => !v)} label="RTL mode" />
        </div>

        <div className="px-5 py-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-[#0D1B2A]">Date format</p>
            <p className="text-xs text-gray-400">Gregorian (2024-03-25) or Hijri (١٤٤٥/٩/١٤)</p>
          </div>
          <div className="flex gap-2">
            {(["gregorian", "hijri"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setDateFormat(f)}
                className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors ${
                  dateFormat === f
                    ? "bg-[#1A73E8] text-white border-[#1A73E8]"
                    : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
                }`}
              >
                {f === "gregorian" ? "Gregorian" : <ArabicText className="text-xs">هجري</ArabicText>}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Security Section ──────────────────────────────────────────────────────────
const SecuritySection = () => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [twoFA, setTwoFA] = useState(false);
  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  const sessions = [
    { device: "MacBook Pro — Chrome", location: "Riyadh, SA", lastActive: "Now", current: true },
    { device: "iPhone 15 — Safari", location: "Riyadh, SA", lastActive: "2 hours ago", current: false },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-bold text-[#0D1B2A] mb-1">Security</h2>
        <p className="text-sm text-gray-500">Manage your password, two-factor authentication, and active sessions.</p>
      </div>

      {/* Change password */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h3 className="text-sm font-semibold text-[#0D1B2A] mb-4">Change password</h3>
        <div className="space-y-4 max-w-sm">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1.5">Current password</label>
            <div className="relative">
              <input
                type={showCurrent ? "text" : "password"}
                value={currentPw}
                onChange={(e) => setCurrentPw(e.target.value)}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent"
                placeholder="Enter current password"
              />
              <button
                type="button"
                onClick={() => setShowCurrent((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showCurrent ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1.5">New password</label>
            <div className="relative">
              <input
                type={showNew ? "text" : "password"}
                value={newPw}
                onChange={(e) => setNewPw(e.target.value)}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent"
                placeholder="Enter new password"
              />
              <button
                type="button"
                onClick={() => setShowNew((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showNew ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1.5">Confirm new password</label>
            <input
              type="password"
              value={confirmPw}
              onChange={(e) => setConfirmPw(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent"
              placeholder="Repeat new password"
            />
          </div>
          <button
            disabled={!currentPw || !newPw || newPw !== confirmPw}
            className="px-5 py-2.5 bg-[#1A73E8] text-white rounded-lg text-sm font-semibold hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Update password
          </button>
        </div>
      </div>

      {/* 2FA */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-[#0D1B2A]">Two-factor authentication</h3>
            <p className="text-xs text-gray-400 mt-0.5">
              {twoFA ? "2FA is enabled. Your account is protected." : "Add an extra layer of security to your account."}
            </p>
          </div>
          <Toggle checked={twoFA} onChange={() => setTwoFA((v) => !v)} label="Two-factor authentication" />
        </div>
        {twoFA && (
          <div className="mt-4 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
            <p className="text-xs text-emerald-700 font-medium flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5" />
              2FA is active. Authenticator app connected.
            </p>
          </div>
        )}
      </div>

      {/* Active sessions */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100">
          <h3 className="text-sm font-semibold text-[#0D1B2A]">Active sessions</h3>
          <p className="text-xs text-gray-400 mt-0.5">Devices currently signed into your account.</p>
        </div>
        <div className="divide-y divide-gray-50">
          {sessions.map((s, i) => (
            <div key={i} className="flex items-center justify-between px-5 py-4 gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-sm font-medium text-[#0D1B2A]">{s.device}</p>
                  {s.current && (
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs rounded-full font-medium">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-400 mt-0.5">
                  {s.location} · Last active: {s.lastActive}
                </p>
              </div>
              {!s.current && (
                <button className="text-xs text-red-500 font-medium hover:underline shrink-0">
                  Revoke
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ── Billing Section ───────────────────────────────────────────────────────────
const BillingSection = () => {
  const usage = [
    { label: "Storage", used: 4.2, total: 30, unit: "GB", color: "bg-blue-500" },
    { label: "AI Actions", used: 142, total: 500, unit: "", color: "bg-violet-500" },
    { label: "Team members", used: 3, total: 5, unit: "", color: "bg-emerald-500" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-bold text-[#0D1B2A] mb-1">Billing</h2>
        <p className="text-sm text-gray-500">Manage your subscription, usage, and invoices.</p>
      </div>

      {/* Current plan */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg font-bold text-[#0D1B2A]">Starter Plan</span>
              <span className="px-2.5 py-0.5 bg-blue-100 text-[#1A73E8] text-xs rounded-full font-semibold">Active</span>
            </div>
            <p className="text-sm text-gray-500">$12 / user / month · billed monthly</p>
            <p className="text-xs text-gray-400 mt-1">
              Next billing date: <span className="font-medium text-[#0D1B2A]">April 12, 2026</span>
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              Manage billing
            </button>
            <Link
              to="/pricing"
              className="px-4 py-2 bg-[#1A73E8] text-white rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors"
            >
              Upgrade plan
            </Link>
          </div>
        </div>
      </div>

      {/* Usage meters */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h3 className="text-sm font-semibold text-[#0D1B2A] mb-4">Usage this month</h3>
        <div className="space-y-5">
          {usage.map((u) => {
            const pct = Math.round((u.used / u.total) * 100);
            return (
              <div key={u.label}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-[#0D1B2A]">{u.label}</span>
                  <span className="text-xs text-gray-500">
                    {u.used}{u.unit} / {u.total}{u.unit}
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${u.color} rounded-full transition-all`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1">{pct}% used</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Upgrade CTA */}
      <div className="rounded-xl bg-gradient-to-br from-[#1A73E8] to-[#0D1B2A] p-6 text-white">
        <h3 className="font-bold text-base mb-1">Unlock the full power of Haala</h3>
        <p className="text-sm text-blue-100 mb-4">
          Upgrade to Professional for unlimited AI actions, 1 TB storage, and priority support.
        </p>
        <Link
          to="/pricing"
          className="inline-block px-5 py-2.5 bg-white text-[#1A73E8] rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors"
        >
          View Professional plan →
        </Link>
      </div>
    </div>
  );
};

// ── Stub sections ─────────────────────────────────────────────────────────────
const StubSection = ({ title, desc }: { title: string; desc: string }) => (
  <div className="space-y-4">
    <div>
      <h2 className="text-lg font-bold text-[#0D1B2A] mb-1">{title}</h2>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
    <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
        <ChevronRight className="h-6 w-6 text-gray-400" />
      </div>
      <p className="text-sm text-gray-400">This section is coming soon.</p>
    </div>
  </div>
);

// ── Main SettingsPage ─────────────────────────────────────────────────────────
const SettingsPage = () => {
  const [activeSection, setActiveSection] = useState<Section>("profile");

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return <ProfileSection />;
      case "account":
        return <StubSection title="Account" desc="Manage your account details and connected services." />;
      case "notifications":
        return <NotificationsSection />;
      case "appearance":
        return <AppearanceSection />;
      case "language":
        return <LanguageSection />;
      case "security":
        return <SecuritySection />;
      case "integrations":
        return <StubSection title="Integrations" desc="Connect Haala to 50+ third-party apps and services." />;
      case "billing":
        return <BillingSection />;
      case "team":
        return <StubSection title="Team" desc="Manage team members, roles, and permissions." />;
      case "api":
        return <StubSection title="API" desc="Generate and manage API keys for developer access." />;
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden md:flex w-56 bg-white border-r border-gray-200 flex-col py-6 shrink-0">
        <div className="px-5 mb-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Settings</p>
        </div>
        <nav className="flex-1 px-3 space-y-0.5">
          {sidebarSections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors text-left ${
                activeSection === s.id
                  ? "bg-blue-50 text-[#1A73E8] font-semibold"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              <span className={activeSection === s.id ? "text-[#1A73E8]" : "text-gray-400"}>
                {s.icon}
              </span>
              {s.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Mobile section switcher */}
      <div className="md:hidden w-full border-b border-gray-200 bg-white px-4 py-3">
        <select
          value={activeSection}
          onChange={(e) => setActiveSection(e.target.value as Section)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1A73E8]"
        >
          {sidebarSections.map((s) => (
            <option key={s.id} value={s.id}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      {/* Content */}
      <main className="flex-1 overflow-y-auto min-w-0">
        <div className="max-w-2xl mx-auto px-6 py-8">{renderContent()}</div>
      </main>
    </div>
  );
};

export default SettingsPage;
