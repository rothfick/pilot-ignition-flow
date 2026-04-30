import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import AppPreview from "./pages/AppPreview.tsx";
import Unsubscribe from "./pages/Unsubscribe.tsx";
import AppLayout from "./app/components/AppLayout";
import Login from "./app/screens/Login";
import Onboarding from "./app/screens/Onboarding";
import Dashboard from "./app/screens/Dashboard";
import Leads from "./app/screens/Leads";
import LeadDetail from "./app/screens/LeadDetail";
import Automations from "./app/screens/Automations";
import AutomationBuilder from "./app/screens/AutomationBuilder";
import Analytics from "./app/screens/Analytics";
import AIAssistant from "./app/screens/AIAssistant";
import Notifications from "./app/screens/Notifications";
import Integrations from "./app/screens/Integrations";
import CalendarScreen from "./app/screens/CalendarScreen";
import Team from "./app/screens/Team";
import Billing from "./app/screens/Billing";
import Settings from "./app/screens/Settings";
import Profile from "./app/screens/Profile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/app-install" element={<AppPreview />} />
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            <Route path="onboarding" element={<Onboarding />} />
            <Route path="leads" element={<Leads />} />
            <Route path="leads/:id" element={<LeadDetail />} />
            <Route path="automations" element={<Automations />} />
            <Route path="automations/new" element={<AutomationBuilder />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="ai" element={<AIAssistant />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="integrations" element={<Integrations />} />
            <Route path="calendar" element={<CalendarScreen />} />
            <Route path="team" element={<Team />} />
            <Route path="billing" element={<Billing />} />
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/unsubscribe" element={<Unsubscribe />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
