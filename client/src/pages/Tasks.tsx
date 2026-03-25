import { useState } from "react";
import {
  Plus,
  MoreHorizontal,
  Calendar,
  Filter,
  LayoutGrid,
  List,
  BarChart2,
  ChevronDown,
  X,
  Circle,
  CheckCircle2,
  Clock,
  AlertCircle,
  Search,
  Settings,
  User,
} from "lucide-react";
import ArabicText from "@/components/ArabicText";

type Priority = "High" | "Med" | "Low";
type Column = "Backlog" | "In Progress" | "Review" | "Done";

interface Task {
  id: number;
  title: string;
  assignee: string;
  initials: string;
  avatarColor: string;
  priority: Priority;
  dueDate: string;
  tags: string[];
  tagColor: string;
  column: Column;
}

const PRIORITY_STYLES: Record<Priority, string> = {
  High: "bg-red-100 text-red-700 border border-red-200",
  Med: "bg-yellow-100 text-yellow-700 border border-yellow-200",
  Low: "bg-green-100 text-green-700 border border-green-200",
};

const COLUMN_STYLES: Record<Column, { header: string; dot: string; icon: React.ReactNode }> = {
  Backlog: {
    header: "bg-gray-100 text-gray-700",
    dot: "bg-gray-400",
    icon: <Circle className="w-4 h-4 text-gray-400" />,
  },
  "In Progress": {
    header: "bg-blue-100 text-blue-700",
    dot: "bg-blue-500",
    icon: <Clock className="w-4 h-4 text-blue-500" />,
  },
  Review: {
    header: "bg-purple-100 text-purple-700",
    dot: "bg-purple-500",
    icon: <AlertCircle className="w-4 h-4 text-purple-500" />,
  },
  Done: {
    header: "bg-green-100 text-green-700",
    dot: "bg-green-500",
    icon: <CheckCircle2 className="w-4 h-4 text-green-500" />,
  },
};

const INITIAL_TASKS: Task[] = [
  // Backlog
  {
    id: 1,
    title: "Arabic spell-check for Docs",
    assignee: "Sara Hassan",
    initials: "SH",
    avatarColor: "bg-purple-500",
    priority: "High",
    dueDate: "Apr 15",
    tags: ["Docs", "Arabic"],
    tagColor: "bg-blue-100 text-blue-700",
    column: "Backlog",
  },
  {
    id: 2,
    title: "Hijri calendar sync",
    assignee: "Mohammed Khalid",
    initials: "MK",
    avatarColor: "bg-emerald-500",
    priority: "Med",
    dueDate: "Mar 31",
    tags: ["Calendar"],
    tagColor: "bg-teal-100 text-teal-700",
    column: "Backlog",
  },
  {
    id: 3,
    title: "PDPL audit report",
    assignee: "Layla Nasser",
    initials: "LN",
    avatarColor: "bg-orange-500",
    priority: "High",
    dueDate: "Apr 1",
    tags: ["Compliance", "Legal"],
    tagColor: "bg-red-100 text-red-700",
    column: "Backlog",
  },
  // In Progress
  {
    id: 4,
    title: "Murshid AI email suggestions v2",
    assignee: "Ahmed Al-Rashid",
    initials: "AA",
    avatarColor: "bg-blue-600",
    priority: "High",
    dueDate: "Mar 28",
    tags: ["Murshid", "AI"],
    tagColor: "bg-indigo-100 text-indigo-700",
    column: "In Progress",
  },
  {
    id: 5,
    title: "Dark mode for mobile",
    assignee: "Tariq Ibrahim",
    initials: "TI",
    avatarColor: "bg-pink-500",
    priority: "Med",
    dueDate: "Apr 5",
    tags: ["Mobile", "Design"],
    tagColor: "bg-pink-100 text-pink-700",
    column: "In Progress",
  },
  // Review
  {
    id: 6,
    title: "Pricing page redesign",
    assignee: "Sara Hassan",
    initials: "SH",
    avatarColor: "bg-purple-500",
    priority: "Med",
    dueDate: "Mar 27",
    tags: ["Marketing", "Design"],
    tagColor: "bg-violet-100 text-violet-700",
    column: "Review",
  },
  {
    id: 7,
    title: "API rate limiting",
    assignee: "Mohammed Khalid",
    initials: "MK",
    avatarColor: "bg-emerald-500",
    priority: "High",
    dueDate: "Mar 26",
    tags: ["Backend", "Security"],
    tagColor: "bg-orange-100 text-orange-700",
    column: "Review",
  },
  // Done
  {
    id: 8,
    title: "Google Workspace import",
    assignee: "Ahmed Al-Rashid",
    initials: "AA",
    avatarColor: "bg-blue-600",
    priority: "High",
    dueDate: "Mar 20",
    tags: ["Migration"],
    tagColor: "bg-cyan-100 text-cyan-700",
    column: "Done",
  },
  {
    id: 9,
    title: "Multi-language onboarding",
    assignee: "Layla Nasser",
    initials: "LN",
    avatarColor: "bg-orange-500",
    priority: "Med",
    dueDate: "Mar 18",
    tags: ["Onboarding", "i18n"],
    tagColor: "bg-amber-100 text-amber-700",
    column: "Done",
  },
];

type ViewMode = "board" | "list" | "gantt";

const COLUMNS: Column[] = ["Backlog", "In Progress", "Review", "Done"];

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [viewMode, setViewMode] = useState<ViewMode>("board");
  const [showAddModal, setShowAddModal] = useState(false);
  const [addingToColumn, setAddingToColumn] = useState<Column>("Backlog");
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskPriority, setNewTaskPriority] = useState<Priority>("Med");
  const [newTaskDue, setNewTaskDue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const getColumnTasks = (col: Column) =>
    tasks.filter((t) => t.column === col && (searchQuery === "" || t.title.toLowerCase().includes(searchQuery.toLowerCase())));

  const handleAddTask = () => {
    if (!newTaskTitle.trim()) return;
    const newTask: Task = {
      id: Date.now(),
      title: newTaskTitle,
      assignee: "Ahmed Al-Rashid",
      initials: "AA",
      avatarColor: "bg-blue-600",
      priority: newTaskPriority,
      dueDate: newTaskDue || "TBD",
      tags: [],
      tagColor: "bg-gray-100 text-gray-600",
      column: addingToColumn,
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
    setNewTaskDue("");
    setShowAddModal(false);
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden" style={{ fontFamily: "'Google Sans', sans-serif" }}>
      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center gap-4">
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Sprint 12</h1>
            <div className="text-xs text-gray-500">Mar 18 – Apr 1, 2026 · 9 tasks</div>
          </div>

          {/* View toggle */}
          <div className="flex border border-gray-200 rounded-lg overflow-hidden ml-4">
            {([
              { key: "board", icon: <LayoutGrid className="w-4 h-4" />, label: "Board" },
              { key: "list", icon: <List className="w-4 h-4" />, label: "List" },
              { key: "gantt", icon: <BarChart2 className="w-4 h-4" />, label: "Gantt" },
            ] as { key: ViewMode; icon: React.ReactNode; label: string }[]).map((v) => (
              <button
                key={v.key}
                onClick={() => setViewMode(v.key)}
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors
                  ${viewMode === v.key ? "bg-[#1A73E8] text-white" : "text-gray-600 hover:bg-gray-50"}`}
              >
                {v.icon}
                {v.label}
              </button>
            ))}
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2 ml-2">
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">
              <Filter className="w-3.5 h-3.5" />
              Filter
              <ChevronDown className="w-3 h-3" />
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">
              <User className="w-3.5 h-3.5" />
              Assignee
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-gray-400" />
              <input
                className="pl-8 pr-3 py-1.5 text-sm bg-gray-100 rounded-lg outline-none w-48"
                placeholder="Search tasks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="p-1.5 rounded-lg hover:bg-gray-100"><Settings className="w-4 h-4 text-gray-500" /></button>
          </div>
        </div>

        {/* Board View */}
        {viewMode === "board" && (
          <div className="flex-1 overflow-x-auto overflow-y-hidden p-4">
            <div className="flex gap-4 h-full min-w-max">
              {COLUMNS.map((col) => {
                const colTasks = getColumnTasks(col);
                const style = COLUMN_STYLES[col];
                return (
                  <div key={col} className="w-72 flex flex-col bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                    {/* Column header */}
                    <div className={`flex items-center justify-between px-4 py-3 ${style.header}`}>
                      <div className="flex items-center gap-2">
                        {style.icon}
                        <span className="text-sm font-semibold">{col}</span>
                        <span className="text-xs font-bold bg-white/60 px-1.5 py-0.5 rounded-full">{colTasks.length}</span>
                      </div>
                      <button className="p-1 rounded hover:bg-white/40"><MoreHorizontal className="w-4 h-4" /></button>
                    </div>

                    {/* Tasks */}
                    <div className="flex-1 overflow-y-auto p-3 space-y-2">
                      {colTasks.map((task) => (
                        <div key={task.id} className="bg-white border border-gray-200 rounded-xl p-3 hover:shadow-md transition-shadow cursor-pointer group">
                          <div className="flex items-start justify-between gap-1 mb-2">
                            <p className="text-sm font-medium text-gray-800 leading-snug flex-1">{task.title}</p>
                            <button className="opacity-0 group-hover:opacity-100 p-0.5 rounded hover:bg-gray-100 shrink-0">
                              <MoreHorizontal className="w-3.5 h-3.5 text-gray-400" />
                            </button>
                          </div>
                          <div className="flex flex-wrap gap-1 mb-2.5">
                            {task.tags.map((tag) => (
                              <span key={tag} className={`text-xs px-1.5 py-0.5 rounded font-medium ${task.tagColor}`}>{tag}</span>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <div className={`w-6 h-6 rounded-full ${task.avatarColor} flex items-center justify-center text-xs font-bold text-white`}>
                                {task.initials}
                              </div>
                              <span className={`text-xs font-semibold px-1.5 py-0.5 rounded ${PRIORITY_STYLES[task.priority]}`}>{task.priority}</span>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-gray-400">
                              <Calendar className="w-3 h-3" />
                              {task.dueDate}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Add task */}
                    <div className="p-3 border-t border-gray-100">
                      <button
                        onClick={() => { setAddingToColumn(col); setShowAddModal(true); }}
                        className="w-full flex items-center gap-2 text-sm text-gray-500 hover:text-[#1A73E8] hover:bg-blue-50 rounded-lg px-2 py-2 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                        Add task
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* List View */}
        {viewMode === "list" && (
          <div className="flex-1 overflow-y-auto p-4">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Task</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Priority</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Assignee</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Due</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Tags</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks
                    .filter((t) => !searchQuery || t.title.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((task) => (
                      <tr key={task.id} className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
                        <td className="px-4 py-3 text-sm text-gray-800 font-medium">{task.title}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1.5">
                            {COLUMN_STYLES[task.column].icon}
                            <span className="text-xs text-gray-600">{task.column}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${PRIORITY_STYLES[task.priority]}`}>{task.priority}</span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1.5">
                            <div className={`w-6 h-6 rounded-full ${task.avatarColor} flex items-center justify-center text-xs font-bold text-white`}>{task.initials}</div>
                            <span className="text-xs text-gray-600">{task.assignee.split(" ")[0]}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-xs text-gray-500">{task.dueDate}</td>
                        <td className="px-4 py-3">
                          <div className="flex gap-1">
                            {task.tags.map((tag) => (
                              <span key={tag} className={`text-xs px-1.5 py-0.5 rounded font-medium ${task.tagColor}`}>{tag}</span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Gantt View */}
        {viewMode === "gantt" && (
          <div className="flex-1 overflow-auto p-4">
            <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 text-sm font-semibold text-gray-600">
                Sprint 12 — Gantt View (Mar 18 – Apr 1, 2026)
              </div>
              {/* Day headers */}
              <div className="flex border-b border-gray-200">
                <div className="w-48 shrink-0 px-4 py-2 text-xs font-semibold text-gray-500 border-r border-gray-200">Task</div>
                {Array.from({ length: 14 }, (_, i) => i + 18).map((d) => (
                  <div key={d} className={`flex-1 text-center py-2 text-xs text-gray-500 border-r border-gray-100 ${d === 25 ? "bg-blue-50 font-semibold text-blue-600" : ""}`}>
                    {d > 31 ? `Apr ${d - 31}` : `M ${d}`}
                  </div>
                ))}
              </div>
              {tasks.slice(0, 9).map((task, ti) => {
                const start = Math.max(0, ti % 7);
                const len = Math.floor(Math.random() * 4) + 2;
                return (
                  <div key={task.id} className="flex border-b border-gray-100 hover:bg-gray-50">
                    <div className="w-48 shrink-0 px-4 py-2.5 text-xs text-gray-700 font-medium border-r border-gray-200 truncate">{task.title}</div>
                    {Array.from({ length: 14 }, (_, i) => {
                      const inRange = i >= start && i < start + len;
                      const isFirst = i === start;
                      const isLast = i === start + len - 1;
                      return (
                        <div key={i} className="flex-1 border-r border-gray-100 py-2 px-0.5">
                          {inRange && (
                            <div className={`h-5 ${task.tagColor.split(" ")[0]} opacity-80 ${isFirst ? "rounded-l-full" : ""} ${isLast ? "rounded-r-full" : ""}`} />
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Add Task Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-[480px] p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-semibold text-gray-900">Add Task to {addingToColumn}</h3>
              <button onClick={() => setShowAddModal(false)} className="p-1 rounded-full hover:bg-gray-100">
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="space-y-3">
              <input
                className="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-[#1A73E8]"
                placeholder="Task title"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                autoFocus
              />
              <div className="flex gap-3">
                <div className="flex-1">
                  <label className="block text-xs font-medium text-gray-600 mb-1">Priority</label>
                  <select
                    className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm outline-none focus:border-[#1A73E8]"
                    value={newTaskPriority}
                    onChange={(e) => setNewTaskPriority(e.target.value as Priority)}
                  >
                    <option>High</option>
                    <option>Med</option>
                    <option>Low</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block text-xs font-medium text-gray-600 mb-1">Due date</label>
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm outline-none focus:border-[#1A73E8]"
                    value={newTaskDue}
                    onChange={(e) => setNewTaskDue(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Assignee</label>
                <select className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm outline-none focus:border-[#1A73E8]">
                  <option>Ahmed Al-Rashid</option>
                  <option>Sara Hassan</option>
                  <option>Mohammed Khalid</option>
                  <option>Layla Nasser</option>
                  <option>Tariq Ibrahim</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-5">
              <button onClick={() => setShowAddModal(false)} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-xl">Cancel</button>
              <button onClick={handleAddTask} className="px-5 py-2 text-sm bg-[#1A73E8] text-white rounded-xl hover:bg-blue-700 font-medium">Add Task</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;
