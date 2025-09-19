import { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { translations } from "@/translations";
import type { Language } from "@/contexts/language-context";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can log the error to an error reporting service here
    // For now, we'll just log it internally
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      const language = (localStorage.getItem('language') as Language) || 'en';
      const t = translations[language];

      return (
        <div className="min-h-screen bg-gradient-to-b from-patriot-navy to-black flex items-center justify-center p-4">
          <Card className="max-w-lg w-full bg-white/10 backdrop-blur-sm border-patriot-gold/30">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">
                {t.error.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 text-center">
                {t.error.description}
              </p>
              <Button 
                onClick={this.handleReset}
                className="w-full bg-patriot-gold hover:bg-patriot-gold/90 text-patriot-navy font-bold"
                data-testid="button-refresh-page"
              >
                {t.error.button}
              </Button>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}