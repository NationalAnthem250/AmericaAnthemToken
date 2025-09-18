import { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";

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
      return (
        <div className="min-h-screen bg-gradient-to-b from-patriot-navy to-black flex items-center justify-center p-4">
          <Card className="max-w-lg w-full bg-white/10 backdrop-blur-sm border-patriot-gold/30">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">
                {window.localStorage.getItem('language') === 'es' ? '¡Ups! Algo salió mal' : 'Oops! Something went wrong'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 text-center">
                {window.localStorage.getItem('language') === 'es' ? 'Encontramos un error inesperado. Por favor intenta actualizar la página.' : 'We encountered an unexpected error. Please try refreshing the page.'}
              </p>
              <Button 
                onClick={this.handleReset}
                className="w-full bg-patriot-gold hover:bg-patriot-gold/90 text-patriot-navy font-bold"
              >
                {window.localStorage.getItem('language') === 'es' ? 'Actualizar Página' : 'Refresh Page'}
              </Button>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}