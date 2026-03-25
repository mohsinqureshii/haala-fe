import { useState } from "react";
import {
  Share2,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Link,
  Image,
  Table,
  Undo2,
  Redo2,
  ChevronDown,
  MessageSquare,
  X,
  Check,
  Strikethrough,
  Minus,
} from "lucide-react";

interface Comment {
  id: number;
  author: string;
  initials: string;
  avatarColor: string;
  time: string;
  text: string;
  quote: string;
  resolved: boolean;
}

const MOCK_COMMENTS: Comment[] = [
  {
    id: 1,
    author: "Fatima Malik",
    initials: "FM",
    avatarColor: "#0F9D58",
    time: "2 hours ago",
    text: "Should we also include a timeline for the Murshid AI Voice feature here? I know it's not confirmed yet but stakeholders will ask.",
    quote: "Murshid AI Enhancements",
    resolved: false,
  },
  {
    id: 2,
    author: "Ahmed Al-Rashid",
    initials: "AA",
    avatarColor: "#1A73E8",
    time: "Yesterday",
    text: "The growth target of 40% seems aggressive given the current pipeline. Let's align with Sales before publishing this externally.",
    quote: "Growth targets: 40% user growth",
    resolved: false,
  },
];

const COLLABORATORS = [
  { initials: "FM", color: "#0F9D58", name: "Fatima Malik" },
  { initials: "KN", color: "#F4B400", name: "Khalid Nasser" },
  { initials: "AA", color: "#1A73E8", name: "Ahmed Al-Rashid" },
];

const OUTLINE = [
  { level: 1, text: "Executive Summary" },
  { level: 1, text: "Q1 2026 Priorities" },
  { level: 2, text: "1. Murshid AI Enhancements" },
  { level: 2, text: "2. Mobile Apps (iOS & Android)" },
  { level: 2, text: "3. Enterprise SSO & Compliance" },
  { level: 2, text: "4. Sheets — Advanced Formulas" },
  { level: 1, text: "Key Metrics & OKRs" },
  { level: 1, text: "Resource Allocation" },
  { level: 1, text: "Risks & Mitigations" },
];

type MenuKey = "File" | "Edit" | "View" | "Insert" | "Format" | "Tools" | null;

export default function DocsPage() {
  const [title, setTitle] = useState("Haala Q1 2026 Product Roadmap");
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null);
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [comments, setComments] = useState<Comment[]>(MOCK_COMMENTS);
  const [rightPanel, setRightPanel] = useState<"comments" | "outline">("comments");
  const [wordCount] = useState(487);

  const toggleMenu = (menu: MenuKey) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  const resolveComment = (id: number) => {
    setComments((prev) => prev.map((c) => (c.id === id ? { ...c, resolved: true } : c)));
  };

  const menuItems: Record<string, string[]> = {
    File: ["New", "Open", "Make a copy", "Share", "Download", "Print"],
    Edit: ["Undo", "Redo", "Cut", "Copy", "Paste", "Find and replace"],
    View: ["Mode", "Show ruler", "Show outline", "Full screen"],
    Insert: ["Image", "Table", "Link", "Comment", "Footnote", "Special characters"],
    Format: ["Text", "Paragraph styles", "Align & indent", "Line & paragraph spacing", "Columns"],
    Tools: ["Spelling & grammar", "Word count", "Translate document", "Murshid AI"],
  };

  return (
    <div
      className="flex flex-col overflow-hidden bg-gray-100"
      style={{ fontFamily: "'Google Sans', sans-serif", height: "calc(100vh - 64px)" }}
      onClick={() => setActiveMenu(null)}
    >
      {/* Top bar */}
      <div className="bg-white border-b border-gray-200 flex-shrink-0">
        {/* Title row */}
        <div className="flex items-center px-4 py-2 gap-3">
          {/* Doc icon */}
          <div className="w-8 h-10 flex-shrink-0 rounded-sm flex items-center justify-center" style={{ backgroundColor: "#4285F4" }}>
            <span className="text-white text-xs font-bold">W</span>
          </div>
          <div className="flex-1 min-w-0">
            <input
              className="text-base font-medium text-gray-900 outline-none border-b-2 border-transparent focus:border-blue-500 bg-transparent transition-colors w-full max-w-md"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="flex items-center gap-3 mt-0.5">
              <span className="text-xs text-gray-500">All changes saved</span>
              <span className="text-xs text-gray-400">·</span>
              <span className="text-xs text-gray-500">Shared with 5 people</span>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Collaborator avatars */}
            <div className="flex items-center -space-x-2">
              {COLLABORATORS.map((c) => (
                <div
                  key={c.initials}
                  title={c.name}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white ring-1 ring-gray-200 cursor-pointer"
                  style={{ backgroundColor: c.color }}
                >
                  {c.initials}
                </div>
              ))}
            </div>
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-medium"
              style={{ backgroundColor: "#1A73E8" }}
            >
              <Share2 size={14} />
              Share
            </button>
          </div>
        </div>

        {/* Menu bar */}
        <div className="flex items-center px-4 gap-1" onClick={(e) => e.stopPropagation()}>
          {(Object.keys(menuItems) as MenuKey[]).map((menu) => (
            <div key={menu as string} className="relative">
              <button
                onClick={() => toggleMenu(menu)}
                className={`px-3 py-1.5 text-sm rounded transition-colors ${
                  activeMenu === menu ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {menu as string}
              </button>
              {activeMenu === menu && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-44 py-1">
                  {menuItems[menu as string].map((item) => (
                    <button
                      key={item}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      onClick={() => setActiveMenu(null)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Formatting toolbar */}
        <div className="flex items-center gap-1 px-4 py-1.5 border-t border-gray-100">
          <button className="p-1.5 hover:bg-gray-100 rounded transition-colors" onClick={() => {}}>
            <Undo2 size={15} className="text-gray-600" />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
            <Redo2 size={15} className="text-gray-600" />
          </button>
          <div className="w-px h-5 bg-gray-200 mx-1" />

          {/* Font size */}
          <button className="flex items-center gap-1 px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded border border-gray-200 transition-colors">
            11
            <ChevronDown size={12} />
          </button>
          <div className="w-px h-5 bg-gray-200 mx-1" />

          {/* Format buttons */}
          {[
            { icon: Bold, active: bold, toggle: () => setBold(!bold), label: "Bold" },
            { icon: Italic, active: italic, toggle: () => setItalic(!italic), label: "Italic" },
            { icon: Underline, active: underline, toggle: () => setUnderline(!underline), label: "Underline" },
            { icon: Strikethrough, active: false, toggle: () => {}, label: "Strikethrough" },
          ].map(({ icon: Icon, active, toggle, label }) => (
            <button
              key={label}
              onClick={toggle}
              title={label}
              className={`p-1.5 rounded transition-colors ${
                active ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100 text-gray-600"
              }`}
            >
              <Icon size={15} />
            </button>
          ))}
          <div className="w-px h-5 bg-gray-200 mx-1" />

          {/* Text color */}
          <button className="flex flex-col items-center p-1.5 hover:bg-gray-100 rounded transition-colors">
            <span className="text-sm font-bold text-gray-700 leading-none">A</span>
            <div className="w-4 h-1 rounded-sm mt-0.5" style={{ backgroundColor: "#1A73E8" }} />
          </button>
          <div className="w-px h-5 bg-gray-200 mx-1" />

          {/* Alignment */}
          {[
            { icon: AlignLeft, label: "Align left" },
            { icon: AlignCenter, label: "Align center" },
            { icon: AlignRight, label: "Align right" },
          ].map(({ icon: Icon, label }) => (
            <button key={label} title={label} className="p-1.5 hover:bg-gray-100 rounded text-gray-600 transition-colors">
              <Icon size={15} />
            </button>
          ))}
          <div className="w-px h-5 bg-gray-200 mx-1" />

          {/* Lists */}
          <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600 transition-colors">
            <List size={15} />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600 transition-colors">
            <ListOrdered size={15} />
          </button>
          <div className="w-px h-5 bg-gray-200 mx-1" />

          {/* Insert */}
          <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600 transition-colors">
            <Link size={15} />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600 transition-colors">
            <Image size={15} />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600 transition-colors">
            <Table size={15} />
          </button>
        </div>
      </div>

      {/* Body area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Document */}
        <div className="flex-1 overflow-y-auto py-8 px-4">
          <div
            className="bg-white mx-auto shadow-sm rounded-sm"
            style={{ width: "816px", minHeight: "1056px", padding: "96px 96px" }}
          >
            {/* Doc content */}
            <div className="prose max-w-none">
              <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Google Sans', sans-serif" }}>
                Haala Q1 2026 Product Roadmap
              </h1>
              <p className="text-sm text-gray-500 mb-8">Last updated: March 25, 2026 · Owned by Ahmed Al-Rashid · Confidential</p>

              <Minus size={16} className="text-gray-300 my-4" />

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Executive Summary</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                This document outlines Haala's product priorities for Q1 2026. Our focus this quarter is deepening the core productivity suite — Email, Chat, Docs, and Sheets — while accelerating Murshid AI capabilities to establish market leadership in the Arabic-speaking enterprise segment.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-6">
                We serve a rapidly growing user base of 500+ enterprise customers across the GCC and South Asia. The four priorities below have been validated through customer interviews, support ticket analysis, and competitive benchmarking against Google Workspace and Microsoft 365.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Q1 2026 Priorities</h2>

              <h3 className="text-base font-semibold text-gray-800 mt-6 mb-2">1. Murshid AI Enhancements</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Murshid AI is our primary differentiator. In Q1 we will ship the following capabilities:
              </p>
              <ul className="text-sm text-gray-700 space-y-1.5 mb-4 ml-5 list-disc">
                <li>Smart Compose for Email — inline suggestions while typing, supporting Arabic and English</li>
                <li>Murshid Chat — an AI assistant available in every workspace channel</li>
                <li>Document Summarization — one-click summaries of long Docs and email threads</li>
                <li>Task Extraction — automatically identify action items in emails and add to Tasks</li>
                <li>Tone & Translation — detect email tone and offer bilingual rephrasing</li>
              </ul>

              <h3 className="text-base font-semibold text-gray-800 mt-6 mb-2">2. Mobile Apps (iOS & Android)</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Our current mobile experience is a PWA. 34% of our users access Haala primarily on mobile — we need a native experience. Key deliverables:
              </p>
              <ul className="text-sm text-gray-700 space-y-1.5 mb-4 ml-5 list-disc">
                <li>Native iOS and Android apps for Email and Chat (GA by Feb 28)</li>
                <li>Push notifications with priority filtering</li>
                <li>Offline mode for drafts and read-only Docs access</li>
                <li>Biometric authentication (Face ID / fingerprint)</li>
              </ul>

              <h3 className="text-base font-semibold text-gray-800 mt-6 mb-2">3. Enterprise SSO & Compliance</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Several enterprise deals (including NEOM) are blocked pending SSO support and Saudi PDPL compliance certification. We will complete SAML 2.0 / OIDC SSO, data residency controls for KSA and UAE, and begin the ISO 27001 audit process in Q1.
              </p>

              <h3 className="text-base font-semibold text-gray-800 mt-6 mb-2">4. Sheets — Advanced Formulas & Charts</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Haala Sheets currently supports 180 formulas. Q1 will bring the count to 350+ including XLOOKUP, LAMBDA, and array functions, plus 6 new chart types (waterfall, funnel, heatmap, sparklines, Gantt, treemap).
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Key Metrics &amp; OKRs</h2>
              <table className="w-full text-sm border-collapse mb-6">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left px-4 py-2 border border-gray-200 font-semibold text-gray-700">Objective</th>
                    <th className="text-left px-4 py-2 border border-gray-200 font-semibold text-gray-700">Key Result</th>
                    <th className="text-left px-4 py-2 border border-gray-200 font-semibold text-gray-700">Target</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Ship Murshid AI v2", "Features in production by Mar 31", "5/5 features"],
                    ["Mobile apps GA", "iOS & Android live in stores", "Feb 28, 2026"],
                    ["Enterprise deals", "SSO unblocks pipeline", "SAR 12M ARR"],
                    ["User growth", "Growth targets: 40% user growth", "18,000 MAU"],
                    ["NPS improvement", "Core product satisfaction", "NPS > 52"],
                  ].map(([obj, kr, target]) => (
                    <tr key={obj} className="hover:bg-gray-50">
                      <td className="px-4 py-2 border border-gray-200 text-gray-700">{obj}</td>
                      <td className="px-4 py-2 border border-gray-200 text-gray-600">{kr}</td>
                      <td className="px-4 py-2 border border-gray-200 text-gray-600 font-medium">{target}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Resource Allocation</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Engineering headcount this quarter: 18 engineers across 4 squads — AI (5), Mobile (4), Platform (5), and Growth (4). Design: 3 designers. PM: 2 product managers. Total Q1 budget: SAR 2.1M.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Risks &amp; Mitigations</h2>
              <ul className="text-sm text-gray-700 space-y-2 mb-4 ml-5 list-disc">
                <li><strong>AI model latency:</strong> Arabic NLP models are 2-3x slower than English. Mitigation: edge caching + streaming responses.</li>
                <li><strong>App store approval delays:</strong> iOS review can take 2-4 weeks. Mitigation: submit Feb 7 to hit Feb 28 target.</li>
                <li><strong>SSO complexity:</strong> Customer AD environments vary. Mitigation: dedicated implementation engineer per enterprise deal.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <aside className="w-72 flex-shrink-0 flex flex-col bg-white border-l border-gray-200 overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 flex-shrink-0">
            <button
              onClick={() => setRightPanel("comments")}
              className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-xs font-medium transition-colors ${
                rightPanel === "comments"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <MessageSquare size={13} />
              Comments ({comments.filter((c) => !c.resolved).length})
            </button>
            <button
              onClick={() => setRightPanel("outline")}
              className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-xs font-medium transition-colors ${
                rightPanel === "outline"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <List size={13} />
              Outline
            </button>
          </div>

          {rightPanel === "comments" && (
            <div className="flex-1 overflow-y-auto p-3 space-y-3">
              {comments.filter((c) => !c.resolved).map((comment) => (
                <div key={comment.id} className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                        style={{ backgroundColor: comment.avatarColor }}
                      >
                        {comment.initials}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-800">{comment.author}</div>
                        <div className="text-xs text-gray-400">{comment.time}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => resolveComment(comment.id)}
                      className="p-1 hover:bg-green-50 rounded transition-colors"
                      title="Resolve"
                    >
                      <Check size={13} className="text-gray-400 hover:text-green-600" />
                    </button>
                  </div>
                  <div className="text-xs bg-blue-50 border-l-2 border-blue-300 px-2 py-1 rounded-r text-blue-700 mb-2 italic">
                    "{comment.quote}"
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed">{comment.text}</p>
                  <button className="mt-2 text-xs text-blue-600 hover:underline">Reply</button>
                </div>
              ))}
              {comments.filter((c) => c.resolved).length > 0 && (
                <div className="text-center py-3">
                  <p className="text-xs text-gray-400">{comments.filter((c) => c.resolved).length} resolved comment(s)</p>
                </div>
              )}
              {comments.every((c) => c.resolved) && (
                <div className="text-center py-8 text-gray-400">
                  <MessageSquare size={32} className="mx-auto mb-2 opacity-30" />
                  <p className="text-xs">All comments resolved</p>
                </div>
              )}
            </div>
          )}

          {rightPanel === "outline" && (
            <div className="flex-1 overflow-y-auto p-3">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">Document outline</p>
              <ul className="space-y-1">
                {OUTLINE.map((item, idx) => (
                  <li key={idx}>
                    <button
                      className={`w-full text-left text-xs text-gray-600 hover:text-blue-600 py-1 transition-colors truncate ${
                        item.level === 1 ? "font-semibold" : "pl-4 text-gray-500"
                      }`}
                    >
                      {item.text}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>

      {/* Status bar */}
      <div className="flex items-center gap-6 px-6 py-1.5 bg-white border-t border-gray-200 text-xs text-gray-500 flex-shrink-0">
        <span>{wordCount} words</span>
        <span>|</span>
        <span>Page 1 of 3</span>
        <span>|</span>
        <span>100%</span>
        <div className="ml-auto flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span>3 collaborators online</span>
          <button className="ml-2 p-1 hover:bg-gray-100 rounded transition-colors">
            <X size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}
