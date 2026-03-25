import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Calendar,
  List,
  Clock,
  AlignLeft,
  Bell,
  Search,
  Settings,
  ChevronDown,
} from "lucide-react";
import ArabicText from "@/components/ArabicText";

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const HIJRI_DAYS = ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"];

// March 2026 starts on Sunday (day index 0)
// March has 31 days
const generateMarchDays = () => {
  const days: { date: number; month: "prev" | "current" | "next" }[] = [];
  // Feb 2026: 28 days, March starts on Sunday so no prev month days
  // March 1, 2026 = Sunday
  for (let d = 1; d <= 31; d++) {
    days.push({ date: d, month: "current" });
  }
  // Fill to 35 (5 rows × 7)
  for (let d = 1; days.length < 35; d++) {
    days.push({ date: d, month: "next" });
  }
  return days;
};

type EventColor =
  | "blue"
  | "green"
  | "red"
  | "purple"
  | "orange"
  | "teal"
  | "pink"
  | "indigo"
  | "amber"
  | "cyan"
  | "rose";

interface CalEvent {
  day: number;
  title: string;
  time: string;
  color: EventColor;
}

const COLOR_CLASSES: Record<EventColor, string> = {
  blue: "bg-blue-500 text-white",
  green: "bg-emerald-500 text-white",
  red: "bg-red-500 text-white",
  purple: "bg-purple-500 text-white",
  orange: "bg-orange-500 text-white",
  teal: "bg-teal-500 text-white",
  pink: "bg-pink-500 text-white",
  indigo: "bg-indigo-500 text-white",
  amber: "bg-amber-500 text-white",
  cyan: "bg-cyan-500 text-white",
  rose: "bg-rose-500 text-white",
};

const EVENTS: CalEvent[] = [
  { day: 2, title: "Sprint Planning", time: "9:00 AM", color: "blue" },
  { day: 3, title: "GCC Sales Call", time: "2:00 PM", color: "green" },
  { day: 5, title: "Board Meeting", time: "10:00 AM", color: "red" },
  { day: 9, title: "Product Review", time: "3:00 PM", color: "purple" },
  { day: 10, title: "Team Lunch", time: "12:30 PM", color: "orange" },
  { day: 12, title: "Sprint Planning", time: "9:00 AM", color: "blue" },
  { day: 15, title: "GCC Sales Call", time: "11:00 AM", color: "green" },
  { day: 17, title: "Board Meeting", time: "2:00 PM", color: "red" },
  { day: 19, title: "Product Review", time: "4:00 PM", color: "purple" },
  { day: 23, title: "Team Lunch", time: "1:00 PM", color: "orange" },
  { day: 25, title: "Sprint Planning", time: "9:00 AM", color: "blue" },
  { day: 26, title: "GCC Sales Call", time: "3:00 PM", color: "teal" },
  { day: 30, title: "Board Meeting", time: "10:30 AM", color: "indigo" },
];

// Mini calendar for sidebar
const MINI_WEEKS = [
  [22, 23, 24, 25, 26, 27, 28], // Feb last week
  [1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20, 21],
  [22, 23, 24, 25, 26, 27, 28],
  [29, 30, 31, 1, 2, 3, 4],
];

const WEEK_HOURS = [
  "8 AM", "9 AM", "10 AM", "11 AM", "12 PM",
  "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM",
];

// March 23–29, 2026 (week view)
const WEEK_DAYS = [
  { label: "SUN", date: 22 },
  { label: "MON", date: 23 },
  { label: "TUE", date: 24 },
  { label: "WED", date: 25 },
  { label: "THU", date: 26 },
  { label: "FRI", date: 27 },
  { label: "SAT", date: 28 },
];

const WEEK_EVENTS = [
  { day: 23, hour: 1, title: "Team Lunch", color: "orange" as EventColor, span: 1 },
  { day: 25, hour: 0, title: "Sprint Planning", color: "blue" as EventColor, span: 2 },
  { day: 26, hour: 4, title: "GCC Sales Call", color: "teal" as EventColor, span: 1 },
  { day: 27, hour: 2, title: "Product Review", color: "purple" as EventColor, span: 2 },
];

type ViewMode = "month" | "week" | "day" | "agenda";

const CalendarPage = () => {
  const [view, setView] = useState<ViewMode>("month");
  const [isHijri, setIsHijri] = useState(false);
  const [selectedDay, setSelectedDay] = useState(25);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const days = generateMarchDays();

  const getEventsForDay = (day: number) =>
    EVENTS.filter((e) => e.day === day);

  return (
    <div className="flex h-screen bg-white overflow-hidden" style={{ fontFamily: "'Google Sans', sans-serif" }}>
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-200 flex flex-col bg-white overflow-y-auto">
        <div className="p-4">
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-4 py-3 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow text-sm font-medium text-gray-700 bg-white w-full"
          >
            <Plus className="w-5 h-5 text-[#1A73E8]" />
            Create event
          </button>
        </div>

        {/* Mini Calendar */}
        <div className="px-3 pb-4">
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="text-sm font-semibold text-gray-800">March 2026</span>
            <div className="flex gap-1">
              <button className="p-1 rounded-full hover:bg-gray-100"><ChevronLeft className="w-4 h-4 text-gray-600" /></button>
              <button className="p-1 rounded-full hover:bg-gray-100"><ChevronRight className="w-4 h-4 text-gray-600" /></button>
            </div>
          </div>
          <div className="grid grid-cols-7 text-center">
            {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
              <div key={i} className="text-xs text-gray-500 py-1 font-medium">{d}</div>
            ))}
            {MINI_WEEKS.map((week, wi) =>
              week.map((day, di) => {
                const isCurrentMonth = wi > 0 && !(wi === 5 && di > 2);
                const isSelected = isCurrentMonth && day === selectedDay;
                const isToday = isCurrentMonth && day === 25;
                return (
                  <button
                    key={`${wi}-${di}`}
                    onClick={() => isCurrentMonth && setSelectedDay(day)}
                    className={`text-xs py-1 w-7 h-7 mx-auto rounded-full flex items-center justify-center
                      ${isSelected ? "bg-[#1A73E8] text-white" : ""}
                      ${isToday && !isSelected ? "text-[#1A73E8] font-bold" : ""}
                      ${!isCurrentMonth ? "text-gray-300" : "text-gray-700 hover:bg-gray-100"}
                    `}
                  >
                    {day}
                  </button>
                );
              })
            )}
          </div>
        </div>

        {/* Calendars */}
        <div className="px-4 pt-2 pb-4 border-t border-gray-100">
          <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-3">My calendars</div>
          {[
            { label: "Ahmed Al-Rashid", color: "bg-blue-500" },
            { label: "Work", color: "bg-green-500" },
            { label: "Personal", color: "bg-yellow-500" },
          ].map((cal) => (
            <label key={cal.label} className="flex items-center gap-2 mb-2 cursor-pointer group">
              <div className={`w-3 h-3 rounded-sm ${cal.color}`} />
              <span className="text-sm text-gray-700">{cal.label}</span>
            </label>
          ))}
          <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-3 mt-4">Other calendars</div>
          {[
            { label: "Haala Team", color: "bg-teal-500" },
            { label: "Public Holidays (SA)", color: "bg-orange-500" },
          ].map((cal) => (
            <label key={cal.label} className="flex items-center gap-2 mb-2 cursor-pointer">
              <div className={`w-3 h-3 rounded-sm ${cal.color}`} />
              <span className="text-sm text-gray-700">{cal.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="flex items-center px-4 py-3 border-b border-gray-200 gap-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-[#1A73E8]" />
            <span className="text-xl font-semibold text-gray-800">Calendar</span>
          </div>
          <div className="flex items-center gap-1 ml-2">
            <button className="p-1.5 rounded-full hover:bg-gray-100"><ChevronLeft className="w-5 h-5 text-gray-600" /></button>
            <button className="px-2 py-1 text-sm rounded hover:bg-gray-100 text-gray-700 font-medium">Today</button>
            <button className="p-1.5 rounded-full hover:bg-gray-100"><ChevronRight className="w-5 h-5 text-gray-600" /></button>
          </div>
          <div>
            <h2 className="text-lg font-medium text-gray-800">
              March 2026
              {isHijri && (
                <span className="ml-2 text-sm text-gray-500">
                  · <ArabicText>رجب 1447</ArabicText>
                </span>
              )}
            </h2>
          </div>
          <div className="ml-auto flex items-center gap-3">
            {/* Hijri toggle */}
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-600">Hijri</span>
              <button
                onClick={() => setIsHijri(!isHijri)}
                className={`relative inline-flex h-5 w-10 rounded-full transition-colors ${isHijri ? "bg-[#1A73E8]" : "bg-gray-300"}`}
              >
                <span className={`inline-block h-4 w-4 rounded-full bg-white shadow transform transition-transform mt-0.5 ${isHijri ? "translate-x-5" : "translate-x-0.5"}`} />
              </button>
            </div>
            {/* View switcher */}
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              {(["month", "week", "day", "agenda"] as ViewMode[]).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={`px-3 py-1.5 text-sm capitalize font-medium transition-colors
                    ${view === v ? "bg-[#1A73E8] text-white" : "text-gray-700 hover:bg-gray-50"}`}
                >
                  {v.charAt(0).toUpperCase() + v.slice(1)}
                </button>
              ))}
            </div>
            <button className="p-1.5 rounded-full hover:bg-gray-100"><Search className="w-5 h-5 text-gray-600" /></button>
            <button className="p-1.5 rounded-full hover:bg-gray-100"><Bell className="w-5 h-5 text-gray-600" /></button>
            <button className="p-1.5 rounded-full hover:bg-gray-100"><Settings className="w-5 h-5 text-gray-600" /></button>
          </div>
        </div>

        {/* Calendar Body */}
        {view === "month" && (
          <div className="flex-1 overflow-auto">
            {/* Day headers */}
            <div className="grid grid-cols-7 border-b border-gray-200">
              {(isHijri ? HIJRI_DAYS : DAYS_OF_WEEK).map((d, i) => (
                <div key={i} className="text-center py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  {isHijri ? <ArabicText>{d}</ArabicText> : d}
                </div>
              ))}
            </div>
            {/* Weeks */}
            <div className="grid grid-rows-5 flex-1" style={{ minHeight: "calc(100vh - 160px)" }}>
              {[0, 1, 2, 3, 4].map((week) => (
                <div key={week} className="grid grid-cols-7 border-b border-gray-200" style={{ minHeight: "120px" }}>
                  {days.slice(week * 7, week * 7 + 7).map((cell, di) => {
                    const dayEvents = cell.month === "current" ? getEventsForDay(cell.date) : [];
                    const isToday = cell.month === "current" && cell.date === 25;
                    const isSelected = cell.month === "current" && cell.date === selectedDay;
                    // Hijri offset: March 1 = Rajab 1, 1447 (approx)
                    const hijriDay = cell.month === "current" ? cell.date : null;
                    return (
                      <div
                        key={di}
                        onClick={() => cell.month === "current" && setSelectedDay(cell.date)}
                        className={`border-r border-gray-200 p-1 cursor-pointer hover:bg-gray-50 transition-colors
                          ${cell.month !== "current" ? "bg-gray-50" : ""}
                          ${isSelected && !isToday ? "bg-blue-50" : ""}
                        `}
                      >
                        <div className="flex items-center gap-1 mb-1">
                          <span
                            className={`text-sm font-medium w-6 h-6 flex items-center justify-center rounded-full
                              ${isToday ? "bg-[#1A73E8] text-white" : cell.month !== "current" ? "text-gray-400" : "text-gray-700"}
                            `}
                          >
                            {cell.date}
                          </span>
                          {isHijri && hijriDay && (
                            <span className="text-xs text-gray-400">
                              <ArabicText>{hijriDay}</ArabicText>
                            </span>
                          )}
                        </div>
                        <div className="space-y-0.5">
                          {dayEvents.slice(0, 3).map((ev, ei) => (
                            <div
                              key={ei}
                              className={`text-xs px-1.5 py-0.5 rounded truncate font-medium ${COLOR_CLASSES[ev.color]}`}
                            >
                              {ev.time} {ev.title}
                            </div>
                          ))}
                          {dayEvents.length > 3 && (
                            <div className="text-xs text-gray-500 px-1">+{dayEvents.length - 3} more</div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        )}

        {view === "week" && (
          <div className="flex-1 overflow-auto">
            {/* All-day row */}
            <div className="grid border-b border-gray-200" style={{ gridTemplateColumns: "56px repeat(7,1fr)" }}>
              <div className="text-xs text-gray-400 text-right pr-2 py-2">All day</div>
              {WEEK_DAYS.map((wd, i) => (
                <div key={i} className={`border-l border-gray-200 p-1 min-h-[32px] ${wd.date === 25 ? "bg-blue-50" : ""}`}>
                  <div className={`flex flex-col items-center`}>
                    <span className="text-xs text-gray-500 font-medium">{wd.label}</span>
                    <span className={`text-sm font-medium w-7 h-7 flex items-center justify-center rounded-full ${wd.date === 25 ? "bg-[#1A73E8] text-white" : "text-gray-700"}`}>{wd.date}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Time slots */}
            <div className="relative">
              {WEEK_HOURS.map((hour, hi) => (
                <div key={hi} className="grid border-b border-gray-100" style={{ gridTemplateColumns: "56px repeat(7,1fr)", height: "60px" }}>
                  <div className="text-xs text-gray-400 text-right pr-2 -mt-2.5">{hour}</div>
                  {WEEK_DAYS.map((wd, di) => {
                    const ev = WEEK_EVENTS.find((e) => e.day === wd.date && e.hour === hi);
                    return (
                      <div key={di} className={`border-l border-gray-200 relative hover:bg-gray-50 cursor-pointer ${wd.date === 25 ? "bg-blue-50/30" : ""}`}>
                        {ev && (
                          <div
                            className={`absolute inset-x-0.5 top-0.5 rounded px-1 py-0.5 text-xs font-medium z-10 ${COLOR_CLASSES[ev.color]}`}
                            style={{ height: `${ev.span * 60 - 4}px` }}
                          >
                            {ev.title}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        )}

        {view === "day" && (
          <div className="flex-1 overflow-auto p-4">
            <div className="text-center mb-4">
              <div className="text-sm text-gray-500 font-medium">WEDNESDAY</div>
              <div className="text-4xl font-light text-[#1A73E8] w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mt-1">25</div>
              {isHijri && <div className="text-sm text-gray-500 mt-1"><ArabicText>25 رجب 1447</ArabicText></div>}
            </div>
            {WEEK_HOURS.map((hour, hi) => {
              const ev = EVENTS.find((e) => e.day === 25 && hi === 0 && e.title === "Sprint Planning");
              return (
                <div key={hi} className="flex gap-4 border-t border-gray-100 min-h-[60px] py-1">
                  <span className="text-xs text-gray-400 w-12 text-right shrink-0 -mt-2">{hour}</span>
                  <div className="flex-1 relative hover:bg-gray-50 rounded cursor-pointer">
                    {hi === 0 && (
                      <div className="bg-blue-500 text-white text-xs rounded px-2 py-1 font-medium w-48">
                        9:00 AM Sprint Planning
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {view === "agenda" && (
          <div className="flex-1 overflow-auto p-4">
            <div className="max-w-2xl mx-auto space-y-2">
              {EVENTS.sort((a, b) => a.day - b.day).map((ev, i) => (
                <div key={i} className="flex gap-4 py-3 border-b border-gray-100 items-start">
                  <div className="w-20 shrink-0">
                    <div className="text-sm font-medium text-gray-800">Mar {ev.day}</div>
                    <div className="text-xs text-gray-500">{ev.time}</div>
                  </div>
                  <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${COLOR_CLASSES[ev.color].split(" ")[0]}`} />
                  <div>
                    <div className="text-sm font-medium text-gray-800">{ev.title}</div>
                    {isHijri && <div className="text-xs text-gray-500"><ArabicText>رجب 1447</ArabicText></div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Create Event Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-[480px] p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">New Event</h3>
            <div className="space-y-3">
              <input className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#1A73E8]" placeholder="Add title" />
              <div className="flex gap-2">
                <input type="date" defaultValue="2026-03-25" className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#1A73E8]" />
                <input type="time" defaultValue="09:00" className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#1A73E8]" />
              </div>
              <input className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#1A73E8]" placeholder="Add guests" />
              <textarea className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#1A73E8] resize-none" rows={2} placeholder="Add description" />
              <div className="flex gap-2 pt-2">
                <select className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#1A73E8]">
                  {Object.keys(COLOR_CLASSES).map((c) => (
                    <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-5">
              <button onClick={() => setShowCreateModal(false)} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">Cancel</button>
              <button onClick={() => setShowCreateModal(false)} className="px-4 py-2 text-sm bg-[#1A73E8] text-white rounded-lg hover:bg-blue-700 font-medium">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarPage;
