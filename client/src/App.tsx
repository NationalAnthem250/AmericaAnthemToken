import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ChatWindow } from "@/components/chat-window";
import { useState } from "react";
import Home from "@/pages/home";
import Terms from "@/pages/terms";
import NotFound from "@/pages/not-found";
import ErrorBoundary from "@/components/error-boundary";
import SocialMediaDashboard from "@/pages/social-media";
import AuthPage from "@/pages/auth-page";
import { AuthProvider } from "@/hooks/use-auth";
import { ProtectedRoute } from "@/lib/protected-route";

function Router() {
  return (
    <Switch>
      <ProtectedRoute path="/" component={Home} />
      <ProtectedRoute path="/terms" component={Terms} />
      <ProtectedRoute path="/social-media" component={SocialMediaDashboard} />
      <Route path="/auth" component={AuthPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ErrorBoundary>
          <TooltipProvider>
            <Toaster />
            <Router />
            <ChatWindow 
              isOpen={isChatOpen} 
              onToggle={() => setIsChatOpen(!isChatOpen)} 
            />
          </TooltipProvider>
        </ErrorBoundary>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
