import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState, lazy, Suspense } from "react";
import Home from "@/pages/home";
import ErrorBoundary from "@/components/error-boundary";
import { AuthProvider } from "@/hooks/use-auth";
import { ProtectedRoute } from "@/lib/protected-route";

// Lazy load non-critical components
const ChatWindow = lazy(() => import("@/components/chat-window").then(m => ({ default: m.ChatWindow })));
const Terms = lazy(() => import("@/pages/terms"));
const NotFound = lazy(() => import("@/pages/not-found"));
const SocialMediaDashboard = lazy(() => import("@/pages/social-media"));
const AuthPage = lazy(() => import("@/pages/auth-page"));

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/terms">
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-patriot-blue"></div></div>}>
          <Terms />
        </Suspense>
      </Route>
      <ProtectedRoute path="/social-media" component={() => (
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-patriot-blue"></div></div>}>
          <SocialMediaDashboard />
        </Suspense>
      )} />
      <Route path="/auth">
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-patriot-blue"></div></div>}>
          <AuthPage />
        </Suspense>
      </Route>
      <Route>
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-patriot-blue"></div></div>}>
          <NotFound />
        </Suspense>
      </Route>
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
            <Suspense fallback={null}>
              <ChatWindow 
                isOpen={isChatOpen} 
                onToggle={() => setIsChatOpen(!isChatOpen)} 
              />
            </Suspense>
          </TooltipProvider>
        </ErrorBoundary>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
