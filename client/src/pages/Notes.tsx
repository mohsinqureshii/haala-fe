import { useState } from "react";
import {
  Star,
  Trash2,
  Clock,
  Search,
  Plus,
  Bold,
  Italic,
  List,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Tag,
  MoreHorizontal,
  FileText,
  Hash,
} from "lucide-react";
import ArabicText from "@/components/ArabicText";

interface Note {
  id: number;
  title: string;
  arabicTitle?: string;
  preview: string;
  date: string;
  tags: string[];
  starred: boolean;
  body: string;
}

const MOCK_NOTES: Note[] = [
  {
    id: 1,
    title: "Meeting Notes — Q1 Planning",
    arabicTitle: "خطط الربع الأول",
    preview: "Discussed roadmap priorities, PDPL compliance timeline, and Arabic spell-check feature rollout across Docs and Sheets...",
    date: "Mar 25, 2026",
    tags: ["meetings", "planning", "q1"],
    starred: true,
    body: `# Q1 Planning — Key Decisions

## Attendees
Ahmed Al-Rashid, Sara Hassan, Mohammed Khalid, Layla Nasser, Tariq Ibrahim

---

## Agenda Items

### 1. Product Roadmap Priorities
- Arabic spell-check for Docs: **High priority** — target Apr 15
- Hijri calendar sync: In progress, ETA Mar 31
- PDPL audit framework: Legal review underway

### 2. GCC Market Expansion
We reviewed the **Riyadh & Dubai** pipeline:
- NEOM contract in final negotiation phase
- Saudi Aramco POC scheduled for April
- UAE federal pilot RFP due April 7

### 3. Murshid AI Rollout
Murshid Pro will launch to enterprise customers in Q2. The team will focus on:
- Arabic language model fine-tuning
- Email suggestion accuracy improvements
- Integration with Haala Sheets (formula generation)

---

## Action Items
- [ ] Ahmed: Send NEOM proposal by March 28
- [ ] Sara: Complete PDPL gap analysis
- [ ] Mohammed: Finalize Murshid Pro pricing deck
- [ ] Layla: Arabic UI QA pass for Docs

---

> "Our Q1 goal is to make Haala the default productivity suite for GCC enterprises." — Ahmed
`,
  },
  {
    id: 2,
    title: "Murshid AI Research",
    preview: "Notes from LLM research — Arabic NLP benchmarks, CAMEL dataset performance, RAG architecture for enterprise knowledge bases...",
    date: "Mar 24, 2026",
    tags: ["ai", "research", "murshid"],
    starred: false,
    body: `# Murshid AI — Research Notes

## Arabic NLP Landscape

### Key Models Evaluated
Our benchmarks across standard Arabic NLP tasks show Murshid Pro leads on Gulf Arabic dialects.

### Architecture Decisions

**RAG Pipeline** — We use a Retrieval-Augmented Generation approach:
- Document ingestion (Arabic + English)
- Chunking with bilingual overlap
- Embedding via multilingual-e5-large
- FAISS vector store
- Murshid Pro generation layer

### Prompt Engineering

The system prompt sets bilingual context and instructs the model to respond in the user's language:

\`\`\`
أنت مرشد، مساعد ذكاء اصطناعي متخصص في بيئة العمل العربية.
Respond in the language the user writes in.
\`\`\`

## Key Findings
- Arabic tokenization remains the biggest challenge
- Right-to-left text in mixed documents needs special handling
- Our fine-tuned model outperforms GPT-4 on Gulf Arabic dialects by **12%**
`,
  },
  {
    id: 3,
    title: "Product Roadmap Ideas",
    preview: "Brainstorming session output — voice-to-text in Arabic, offline mode for Docs, Haala Drive cross-platform sync...",
    date: "Mar 22, 2026",
    tags: ["product", "roadmap", "ideas"],
    starred: true,
    body: `# Product Roadmap — Brainstorm

## Q2 2026 Ideas

### High Impact / Low Effort
- **Dark mode** for all apps (Mobile + Web)
- Haala Drive offline sync (PWA service worker)
- Export to XLSX / DOCX from Sheets and Docs

### High Impact / High Effort
- **Voice-to-text in Arabic** using Murshid ASR
- Real-time collaborative editing (OT-based)
- Video call transcription in Arabic

### GCC-Specific Features
- Hijri date support in Calendar, Sheets, and Docs
- Arabic spell-check and grammar correction
- RTL-first document templates
- Saudi National ID / Iqama validation in Forms

## Competitor Gaps
Google Workspace and Microsoft 365 both lack native Arabic-first design, Hijri calendar support, and GCC data residency.
`,
  },
  {
    id: 4,
    title: "GCC Market Analysis",
    preview: "TAM/SAM/SOM analysis for Saudi Arabia, UAE, and Qatar enterprise SaaS market. Includes growth projections through 2028...",
    date: "Mar 20, 2026",
    tags: ["market", "gcc", "strategy"],
    starred: false,
    body: `# GCC Market Analysis 2026

## Total Addressable Market

The GCC enterprise SaaS market is valued at **$4.2B** in 2026, growing at **23% CAGR**.

### Country Breakdown
- Saudi Arabia — $2.1B (50%) — Vision 2030 digitization drive
- UAE — $1.4B (33%) — DIFC & ADGM tech clusters
- Qatar — $0.4B (10%) — Post-World Cup infrastructure boom
- Kuwait + Bahrain + Oman — $0.3B (7%)

## Key Buying Drivers
- Arabic-first experience (critical for government sector)
- Data residency within GCC borders (PDPL, NESA compliance)
- Integration with Saudi Elm, UAE PASS
- Local support in Arabic (SLA-backed)

## Haala Positioning
**"The Workspace Built for the Arab World"**

Target segments:
- Government & semi-government (fastest growth)
- Financial services (SAMA regulations)
- Healthcare (MOH digital transformation)
- Education (moe.gov.sa initiatives)
`,
  },
  {
    id: 5,
    title: "Personal: Learning Arabic",
    preview: "My Arabic learning journey — resources, vocab lists, grammar notes. Focusing on Gulf dialect for business conversations...",
    date: "Mar 18, 2026",
    tags: ["personal", "arabic", "learning"],
    starred: false,
    body: `# Learning Arabic — Progress Notes

## Goal
Reach B2 business Arabic by end of 2026 for GCC client meetings.

## Resources
- **Duolingo Arabic** — daily 20 min streak (day 47)
- **ArabiCorpus** — reading practice
- **Gulf Arabic** YouTube series
- iTalki sessions: Tuesdays 7pm

## Useful Phrases
- أهلاً وسهلاً — Welcome
- كيف حالك؟ — How are you?
- شكراً جزيلاً — Thank you very much
- إلى اللقاء — Goodbye
- نتحدث لاحقاً — Let's talk later

## Grammar Notes

### Definite Article
The prefix **ال** (al-) makes nouns definite:
- كتاب = a book
- الكتاب = **the** book

### Dual form
Arabic has a special dual form — اجتماعان means "two meetings".
`,
  },
];

const Notes = () => {
  const [selectedNoteId, setSelectedNoteId] = useState<number>(1);
  const [editedTitle, setEditedTitle] = useState<string>(MOCK_NOTES[0].title);
  const [sidebarSection, setSidebarSection] = useState<"all" | "recent" | "starred" | "trash">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const selectedNote = MOCK_NOTES.find((n) => n.id === selectedNoteId) ?? MOCK_NOTES[0];

  const handleSelectNote = (note: Note) => {
    setSelectedNoteId(note.id);
    setEditedTitle(note.title);
  };

  const filteredNotes = MOCK_NOTES.filter((n) => {
    if (sidebarSection === "starred") return n.starred;
    if (searchQuery) return n.title.toLowerCase().includes(searchQuery.toLowerCase());
    return true;
  });

  const renderBody = (body: string) => {
    const lines = body.split("\n");
    return lines.map((line, i) => {
      if (line.startsWith("# ")) {
        return <h1 key={i} className="text-2xl font-bold text-gray-900 mt-4 mb-2">{line.slice(2)}</h1>;
      }
      if (line.startsWith("## ")) {
        return <h2 key={i} className="text-xl font-semibold text-gray-800 mt-4 mb-1">{line.slice(3)}</h2>;
      }
      if (line.startsWith("### ")) {
        return <h3 key={i} className="text-base font-semibold text-gray-700 mt-3 mb-1">{line.slice(4)}</h3>;
      }
      if (line.startsWith("---")) {
        return <hr key={i} className="border-gray-200 my-3" />;
      }
      if (line.startsWith("- [ ] ")) {
        return (
          <div key={i} className="flex items-center gap-2 py-0.5">
            <input type="checkbox" className="rounded" readOnly />
            <span className="text-sm text-gray-700">{line.slice(6)}</span>
          </div>
        );
      }
      if (line.startsWith("- ")) {
        const text = line.slice(2).replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
        return (
          <li key={i} className="text-sm text-gray-700 ml-4 list-disc py-0.5" dangerouslySetInnerHTML={{ __html: text }} />
        );
      }
      if (line.startsWith("> ")) {
        return (
          <blockquote key={i} className="border-l-4 border-[#1A73E8] pl-3 py-1 my-2 text-sm text-gray-600 italic">
            {line.slice(2)}
          </blockquote>
        );
      }
      if (line.startsWith("```")) {
        return null;
      }
      if (line.trim() === "") {
        return <div key={i} className="h-2" />;
      }
      const formatted = line
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.*?)\*/g, "<em>$1</em>");
      return (
        <p
          key={i}
          className="text-sm text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: formatted }}
        />
      );
    });
  };

  return (
    <div className="flex h-screen bg-white overflow-hidden" style={{ fontFamily: "'Google Sans', sans-serif" }}>
      {/* Left Sidebar */}
      <div className="w-52 bg-gray-50 border-r border-gray-200 flex flex-col">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-[#1A73E8]" />
            <span className="text-base font-semibold text-gray-800">Notes</span>
          </div>
          <button className="w-full flex items-center gap-2 bg-[#1A73E8] text-white rounded-xl px-3 py-2.5 text-sm font-medium hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4" />
            New Note
          </button>
        </div>
        <nav className="px-2 space-y-0.5">
          {[
            { key: "all", label: "All Notes", icon: <FileText className="w-4 h-4" /> },
            { key: "recent", label: "Recent", icon: <Clock className="w-4 h-4" /> },
            { key: "starred", label: "Starred", icon: <Star className="w-4 h-4" /> },
            { key: "trash", label: "Trash", icon: <Trash2 className="w-4 h-4" /> },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => setSidebarSection(item.key as typeof sidebarSection)}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left
                ${sidebarSection === item.key ? "bg-blue-100 text-[#1A73E8]" : "text-gray-600 hover:bg-gray-200"}`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
        <div className="px-3 pt-4">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Tags</div>
          {["meetings", "ai", "product", "gcc", "personal"].map((tag) => (
            <div key={tag} className="flex items-center gap-1.5 py-1.5 px-2 text-xs text-gray-600 hover:bg-gray-200 rounded cursor-pointer">
              <Hash className="w-3 h-3 text-gray-400" />
              {tag}
            </div>
          ))}
        </div>
      </div>

      {/* Notes List */}
      <div className="w-72 border-r border-gray-200 flex flex-col bg-white">
        <div className="p-3 border-b border-gray-100">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-gray-400" />
            <input
              className="w-full pl-8 pr-3 py-2 text-sm bg-gray-100 rounded-lg outline-none focus:bg-white focus:ring-1 focus:ring-[#1A73E8] border border-transparent focus:border-[#1A73E8]"
              placeholder="Search notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {filteredNotes.map((note) => (
            <button
              key={note.id}
              onClick={() => handleSelectNote(note)}
              className={`w-full text-left px-4 py-3 border-b border-gray-100 hover:bg-gray-50 transition-colors
                ${selectedNoteId === note.id ? "bg-blue-50 border-l-2 border-l-[#1A73E8]" : ""}`}
            >
              <div className="flex items-start justify-between gap-1">
                <span className="text-sm font-semibold text-gray-900 line-clamp-1">{note.title}</span>
                {note.starred && <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400 shrink-0 mt-0.5" />}
              </div>
              {note.arabicTitle && (
                <div className="text-xs text-gray-500 mt-0.5">
                  <ArabicText>{note.arabicTitle}</ArabicText>
                </div>
              )}
              <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">{note.preview}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-gray-400">{note.date}</span>
                <div className="flex gap-1">
                  {note.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">#{tag}</span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Editor */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Toolbar */}
        <div className="flex items-center gap-1 px-4 py-2 border-b border-gray-200 bg-white">
          <div className="flex items-center gap-1 border-r border-gray-200 pr-2 mr-1">
            <button className="p-1.5 rounded hover:bg-gray-100 text-gray-600" title="Heading 1"><Heading1 className="w-4 h-4" /></button>
            <button className="p-1.5 rounded hover:bg-gray-100 text-gray-600" title="Heading 2"><Heading2 className="w-4 h-4" /></button>
            <button className="p-1.5 rounded hover:bg-gray-100 text-gray-600" title="Heading 3"><Heading3 className="w-4 h-4" /></button>
          </div>
          <div className="flex items-center gap-1 border-r border-gray-200 pr-2 mr-1">
            <button className="p-1.5 rounded hover:bg-gray-100 text-gray-600" title="Bold"><Bold className="w-4 h-4" /></button>
            <button className="p-1.5 rounded hover:bg-gray-100 text-gray-600" title="Italic"><Italic className="w-4 h-4" /></button>
          </div>
          <div className="flex items-center gap-1 border-r border-gray-200 pr-2 mr-1">
            <button className="p-1.5 rounded hover:bg-gray-100 text-gray-600" title="Bullet list"><List className="w-4 h-4" /></button>
            <button className="p-1.5 rounded hover:bg-gray-100 text-gray-600" title="Code block"><Code className="w-4 h-4" /></button>
          </div>
          <button className="p-1.5 rounded hover:bg-gray-100 text-gray-600" title="Tags"><Tag className="w-4 h-4" /></button>
          <div className="ml-auto flex items-center gap-2">
            <div className="flex gap-1">
              {selectedNote.tags.map((tag) => (
                <span key={tag} className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">#{tag}</span>
              ))}
            </div>
            <button className="p-1.5 rounded hover:bg-gray-100 text-gray-600"><MoreHorizontal className="w-4 h-4" /></button>
          </div>
        </div>

        {/* Editor Body */}
        <div className="flex-1 overflow-y-auto px-10 py-8">
          <div className="max-w-2xl mx-auto">
            <input
              className="w-full text-3xl font-bold text-gray-900 outline-none border-none bg-transparent placeholder-gray-300 mb-1"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            {selectedNote.arabicTitle && (
              <div className="text-lg text-gray-500 mt-1 mb-2">
                <ArabicText className="text-xl">{selectedNote.arabicTitle}</ArabicText>
              </div>
            )}
            <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
              <Clock className="w-3 h-3" />
              Last edited {selectedNote.date}
            </div>
            <div className="space-y-1">
              {renderBody(selectedNote.body)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
