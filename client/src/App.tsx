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

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/terms" component={Terms} />
      <Route path="/social-media" component={SocialMediaDashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
