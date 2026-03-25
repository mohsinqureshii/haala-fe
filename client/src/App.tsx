import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import EmailPage from "./pages/Email";
import DocsPage from "./pages/Docs";
import SheetsPage from "./pages/Sheets";
import CalendarPage from "./pages/CalendarPage";
import MeetingsPage from "./pages/Meetings";
import ChatPage from "./pages/Chat";
import NotesPage from "./pages/Notes";
import TasksPage from "./pages/Tasks";
import AIHubPage from "./pages/AIHub";
import FeaturesPage from "./pages/Features";
import PricingPage from "./pages/Pricing";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import SignUpPage from "./pages/SignUp";
import DashboardPage from "./pages/Dashboard";
import SettingsPage from "./pages/Settings";
import EnterprisePage from "./pages/Enterprise";
import NotFound from "./pages/NotFound";
import BlogPage from "./pages/Blog";
import BlogPostPage from "./pages/BlogPost";
import CareersPage from "./pages/Careers";
import JobsPage from "./pages/Jobs";
import JobDetailPage from "./pages/JobDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          {/* SignUp has its own layout (no navbar/footer) */}
          <Route path="/signup" element={<SignUpPage />} />
          
          {/* All other pages use the shared layout */}
          <Route path="/*" element={
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/email" element={<EmailPage />} />
                <Route path="/docs" element={<DocsPage />} />
                <Route path="/sheets" element={<SheetsPage />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/meetings" element={<MeetingsPage />} />
                <Route path="/video" element={<MeetingsPage />} />
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/messenger" element={<ChatPage />} />
                <Route path="/notes" element={<NotesPage />} />
                <Route path="/tasks" element={<TasksPage />} />
                <Route path="/ai" element={<AIHubPage />} />
                <Route path="/features" element={<FeaturesPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/enterprise" element={<EnterprisePage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogPostPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/careers/jobs" element={<JobsPage />} />
                <Route path="/careers/jobs/:id" element={<JobDetailPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
