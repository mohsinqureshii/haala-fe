import { useState } from "react";
import {
  Video,
  Plus,
  Mic,
  MicOff,
  VideoOff,
  Monitor,
  MessageSquare,
  Users,
  PhoneOff,
  Clock,
  Calendar,
  ChevronRight,
  Play,
  Download,
  Copy,
  X,
  Settings,
  MoreVertical,
} from "lucide-react";
import ArabicText from "@/components/ArabicText";

interface Meeting {
  id: number;
  title: string;
  time: string;
  date: string;
  participants: number;
  code: string;
  status: "upcoming" | "past";
}

const UPCOMING_MEETINGS: Meeting[] = [
  {
    id: 1,
    title: "Q2 Product Strategy Review",
    time: "10:00 AM – 11:00 AM",
    date: "Today, Mar 25",
    participants: 8,
    code: "hla-qpsr-2026",
    status: "upcoming",
  },
  {
    id: 2,
    title: "GCC Sales Pipeline — Weekly",
    time: "2:00 PM – 2:30 PM",
    date: "Today, Mar 25",
    participants: 5,
    code: "hla-gcc-wkly",
    status: "upcoming",
  },
  {
    id: 3,
    title: "Murshid AI Demo — NEOM",
    time: "9:00 AM – 10:00 AM",
    date: "Tomorrow, Mar 26",
    participants: 12,
    code: "hla-neom-demo",
    status: "upcoming",
  },
];

const PAST_MEETINGS: Meeting[] = [
  {
    id: 4,
    title: "Sprint 12 Retrospective",
    time: "3:00 PM – 4:00 PM",
    date: "Mar 24, 2026",
    participants: 9,
    code: "hla-s12-retro",
    status: "past",
  },
  {
    id: 5,
    title: "Arabic Localisation Review",
    time: "11:00 AM – 12:00 PM",
    date: "Mar 23, 2026",
    participants: 4,
    code: "hla-arabic-loc",
    status: "past",
  },
];

const PARTICIPANTS = [
  { name: "Ahmed Al-Rashid", initials: "AA", color: "bg-blue-600" },
  { name: "Sara Hassan", initials: "SH", color: "bg-purple-600" },
  { name: "Mohammed Khalid", initials: "MK", color: "bg-emerald-600" },
  { name: "Layla Nasser", initials: "LN", color: "bg-orange-600" },
];

type ModalMode = "none" | "new";

const Meetings = () => {
  const [isInMeeting, setIsInMeeting] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showParticipants, setShowParticipants] = useState(false);
  const [modalMode, setModalMode] = useState<ModalMode>("none");
  const [activeMeeting, setActiveMeeting] = useState<Meeting | null>(null);
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");

  const joinMeeting = (meeting: Meeting) => {
    setActiveMeeting(meeting);
    setIsInMeeting(true);
  };

  if (isInMeeting && activeMeeting) {
    return (
      <div className="h-screen bg-[#1e1e1e] flex flex-col" style={{ fontFamily: "'Google Sans', sans-serif" }}>
        {/* Meeting header */}
        <div className="flex items-center justify-between px-6 py-3 bg-[#2a2a2a] border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-[#1A73E8] flex items-center justify-center">
              <Video className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">{activeMeeting.title}</div>
              <div className="text-xs text-gray-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                Recording · 00:12:47
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded font-mono">{activeMeeting.code}</div>
            <button className="p-1.5 rounded-full hover:bg-gray-600 text-gray-300"><Copy className="w-4 h-4" /></button>
            <button className="p-1.5 rounded-full hover:bg-gray-600 text-gray-300"><Settings className="w-4 h-4" /></button>
          </div>
        </div>

        {/* Main area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Participant grid */}
          <div className="flex-1 p-4 grid grid-cols-2 gap-3 content-start">
            {PARTICIPANTS.map((p, i) => (
              <div key={i} className="bg-[#2c2c2c] rounded-xl aspect-video relative overflow-hidden flex items-center justify-center group">
                {i === 0 && !isCameraOn ? (
                  <div className={`w-16 h-16 rounded-full ${p.color} flex items-center justify-center text-xl font-bold text-white`}>
                    {p.initials}
                  </div>
                ) : i === 0 ? (
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <div className={`w-16 h-16 rounded-full ${p.color} flex items-center justify-center text-xl font-bold text-white`}>
                      {p.initials}
                    </div>
                  </div>
                ) : (
                  <div className={`w-16 h-16 rounded-full ${p.color} flex items-center justify-center text-xl font-bold text-white`}>
                    {p.initials}
                  </div>
                )}
                <div className="absolute bottom-2 left-2 flex items-center gap-1.5 bg-black/60 rounded px-2 py-0.5">
                  {i === 0 && isMuted && <MicOff className="w-3 h-3 text-red-400" />}
                  {!(i === 0 && isMuted) && <Mic className="w-3 h-3 text-gray-300" />}
                  <span className="text-xs text-white">{p.name}{i === 0 ? " (You)" : ""}</span>
                </div>
                {i === 1 && (
                  <div className="absolute top-2 right-2 bg-yellow-500 text-xs text-black font-semibold px-1.5 py-0.5 rounded">Speaking</div>
                )}
              </div>
            ))}
          </div>

          {/* Side panel: chat or participants */}
          {(showChat || showParticipants) && (
            <div className="w-72 bg-[#2a2a2a] border-l border-gray-700 flex flex-col">
              <div className="flex border-b border-gray-700">
                <button
                  onClick={() => { setShowChat(true); setShowParticipants(false); }}
                  className={`flex-1 py-3 text-sm font-medium transition-colors ${showChat ? "text-[#1A73E8] border-b-2 border-[#1A73E8]" : "text-gray-400 hover:text-gray-200"}`}
                >
                  Chat
                </button>
                <button
                  onClick={() => { setShowParticipants(true); setShowChat(false); }}
                  className={`flex-1 py-3 text-sm font-medium transition-colors ${showParticipants ? "text-[#1A73E8] border-b-2 border-[#1A73E8]" : "text-gray-400 hover:text-gray-200"}`}
                >
                  People ({activeMeeting.participants})
                </button>
              </div>
              {showChat && (
                <div className="flex-1 overflow-y-auto p-3 space-y-3">
                  {[
                    { sender: "Sara Hassan", msg: "Can everyone see the slides?", time: "10:14 AM" },
                    { sender: "Mohammed Khalid", msg: "Yes, looks good!", time: "10:14 AM" },
                    { sender: "Ahmed Al-Rashid", msg: "Let's move to slide 5", time: "10:15 AM" },
                  ].map((msg, i) => (
                    <div key={i}>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xs font-semibold text-blue-400">{msg.sender}</span>
                        <span className="text-xs text-gray-500">{msg.time}</span>
                      </div>
                      <p className="text-sm text-gray-300 mt-0.5">{msg.msg}</p>
                    </div>
                  ))}
                </div>
              )}
              {showParticipants && (
                <div className="flex-1 overflow-y-auto p-3 space-y-2">
                  {PARTICIPANTS.map((p, i) => (
                    <div key={i} className="flex items-center gap-2 py-1.5">
                      <div className={`w-8 h-8 rounded-full ${p.color} flex items-center justify-center text-sm font-bold text-white shrink-0`}>{p.initials}</div>
                      <span className="text-sm text-gray-300 flex-1">{p.name}{i === 0 ? " (You)" : ""}</span>
                      {i === 0 && isMuted ? <MicOff className="w-4 h-4 text-red-400" /> : <Mic className="w-4 h-4 text-gray-500" />}
                    </div>
                  ))}
                  <div className="text-xs text-gray-500 pt-2">+ {activeMeeting.participants - 4} more joined</div>
                </div>
              )}
              {showChat && (
                <div className="p-3 border-t border-gray-700">
                  <input className="w-full bg-gray-700 text-sm text-gray-200 rounded-lg px-3 py-2 outline-none placeholder-gray-500" placeholder="Send a message..." />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Control bar */}
        <div className="bg-[#2a2a2a] border-t border-gray-700 px-6 py-4 flex items-center justify-between">
          <div className="text-xs text-gray-500 font-mono">10:12 AM · Haala Meet</div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-colors ${isMuted ? "bg-red-600 hover:bg-red-700" : "bg-gray-700 hover:bg-gray-600"}`}
            >
              {isMuted ? <MicOff className="w-5 h-5 text-white" /> : <Mic className="w-5 h-5 text-white" />}
              <span className="text-xs text-gray-300">{isMuted ? "Unmute" : "Mute"}</span>
            </button>
            <button
              onClick={() => setIsCameraOn(!isCameraOn)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-colors ${!isCameraOn ? "bg-red-600 hover:bg-red-700" : "bg-gray-700 hover:bg-gray-600"}`}
            >
              {isCameraOn ? <Video className="w-5 h-5 text-white" /> : <VideoOff className="w-5 h-5 text-white" />}
              <span className="text-xs text-gray-300">{isCameraOn ? "Camera" : "Start cam"}</span>
            </button>
            <button
              onClick={() => setIsScreenSharing(!isScreenSharing)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-colors ${isScreenSharing ? "bg-[#1A73E8]" : "bg-gray-700 hover:bg-gray-600"}`}
            >
              <Monitor className="w-5 h-5 text-white" />
              <span className="text-xs text-gray-300">Share</span>
            </button>
            <button
              onClick={() => { setShowChat(!showChat); setShowParticipants(false); }}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-colors ${showChat ? "bg-[#1A73E8]" : "bg-gray-700 hover:bg-gray-600"}`}
            >
              <MessageSquare className="w-5 h-5 text-white" />
              <span className="text-xs text-gray-300">Chat</span>
            </button>
            <button
              onClick={() => { setShowParticipants(!showParticipants); setShowChat(false); }}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-colors ${showParticipants ? "bg-[#1A73E8]" : "bg-gray-700 hover:bg-gray-600"}`}
            >
              <Users className="w-5 h-5 text-white" />
              <span className="text-xs text-gray-300">People</span>
            </button>
            <button
              onClick={() => { setIsInMeeting(false); setActiveMeeting(null); setShowChat(false); setShowParticipants(false); setIsScreenSharing(false); }}
              className="flex flex-col items-center gap-1 px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 transition-colors"
            >
              <PhoneOff className="w-5 h-5 text-white" />
              <span className="text-xs text-white font-medium">End call</span>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-xl bg-gray-700 hover:bg-gray-600"><MoreVertical className="w-5 h-5 text-gray-300" /></button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden" style={{ fontFamily: "'Google Sans', sans-serif" }}>
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-[#1A73E8] flex items-center justify-center">
              <Video className="w-4 h-4 text-white" />
            </div>
            <span className="text-base font-semibold text-gray-800">Haala Meet</span>
          </div>
          <button
            onClick={() => setModalMode("new")}
            className="w-full bg-[#1A73E8] text-white rounded-xl py-2.5 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            New Meeting
          </button>
        </div>
        <nav className="p-3 space-y-1">
          {[
            { label: "My Meetings", icon: <Video className="w-4 h-4" /> },
            { label: "Scheduled", icon: <Calendar className="w-4 h-4" /> },
            { label: "Recordings", icon: <Play className="w-4 h-4" /> },
          ].map((item) => (
            <button key={item.label} className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100 text-left font-medium">
              <span className="text-gray-500">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="mt-auto p-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-bold text-white">AA</div>
            <div>
              <div className="text-sm font-medium text-gray-800">Ahmed Al-Rashid</div>
              <div className="text-xs text-gray-500">ahmed@haala.app</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6 max-w-3xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">My Meetings</h1>
          <p className="text-sm text-gray-500 mb-6">Wednesday, March 25, 2026</p>

          {/* Tabs */}
          <div className="flex gap-4 border-b border-gray-200 mb-6">
            {(["upcoming", "past"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`pb-3 text-sm font-medium capitalize transition-colors ${tab === t ? "text-[#1A73E8] border-b-2 border-[#1A73E8]" : "text-gray-500 hover:text-gray-700"}`}
              >
                {t}
              </button>
            ))}
          </div>

          {tab === "upcoming" && (
            <div className="space-y-3">
              {UPCOMING_MEETINGS.map((meeting) => (
                <div key={meeting.id} className="bg-white rounded-2xl border border-gray-200 p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                        <Video className="w-5 h-5 text-[#1A73E8]" />
                      </div>
                      <div>
                        <div className="text-base font-semibold text-gray-900">{meeting.title}</div>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-sm text-gray-500 flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{meeting.time}</span>
                          <span className="text-sm text-gray-500 flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{meeting.date}</span>
                          <span className="text-sm text-gray-500 flex items-center gap-1"><Users className="w-3.5 h-3.5" />{meeting.participants} people</span>
                        </div>
                        <div className="mt-1.5 text-xs text-gray-400 font-mono bg-gray-100 px-2 py-0.5 rounded inline-block">{meeting.code}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => joinMeeting(meeting)}
                      className="px-5 py-2.5 bg-[#1A73E8] text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-1.5 shrink-0"
                    >
                      <Video className="w-4 h-4" />
                      Join
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === "past" && (
            <div className="space-y-3">
              {PAST_MEETINGS.map((meeting) => (
                <div key={meeting.id} className="bg-white rounded-2xl border border-gray-200 p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                        <Video className="w-5 h-5 text-gray-500" />
                      </div>
                      <div>
                        <div className="text-base font-semibold text-gray-900">{meeting.title}</div>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-sm text-gray-500 flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{meeting.time}</span>
                          <span className="text-sm text-gray-500 flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{meeting.date}</span>
                          <span className="text-sm text-gray-500 flex items-center gap-1"><Users className="w-3.5 h-3.5" />{meeting.participants} people</span>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">Recording available</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <button className="px-3 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-xl hover:bg-gray-50 transition-colors flex items-center gap-1.5">
                        <Play className="w-4 h-4" />
                        Play
                      </button>
                      <button className="px-3 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-xl hover:bg-gray-50 transition-colors flex items-center gap-1.5">
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* New Meeting Modal */}
      {modalMode === "new" && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-96 p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-semibold text-gray-900">New Meeting</h3>
              <button onClick={() => setModalMode("none")} className="p-1 rounded-full hover:bg-gray-100"><X className="w-5 h-5 text-gray-500" /></button>
            </div>
            <div className="space-y-3">
              <button
                onClick={() => { setModalMode("none"); joinMeeting(UPCOMING_MEETINGS[0]); }}
                className="w-full flex items-center gap-4 p-4 border-2 border-[#1A73E8] rounded-xl hover:bg-blue-50 transition-colors group"
              >
                <div className="w-10 h-10 bg-[#1A73E8] rounded-full flex items-center justify-center">
                  <Video className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-gray-900">Start an instant meeting</div>
                  <div className="text-xs text-gray-500">Open a meeting room right now</div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
              </button>
              <button className="w-full flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-gray-600" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-gray-900">Schedule for later</div>
                  <div className="text-xs text-gray-500">Set a date, time and invite people</div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
              </button>
              <div className="border-t border-gray-200 pt-3">
                <div className="text-xs text-gray-500 mb-2 font-medium">Or join with a code</div>
                <div className="flex gap-2">
                  <input className="flex-1 border border-gray-300 rounded-xl px-3 py-2 text-sm outline-none focus:border-[#1A73E8]" placeholder="Enter meeting code" />
                  <button className="px-3 py-2 bg-[#1A73E8] text-white text-sm font-medium rounded-xl hover:bg-blue-700">Join</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Meetings;
