import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2 } from "lucide-react";
import { Redirect } from "wouter";
import { useLanguage } from "@/contexts/language-context";

// Reference to javascript_auth_all_persistance integration
export default function AuthPage() {
  const { user, loginMutation, registerMutation } = useAuth();
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [registerData, setRegisterData] = useState({ username: "", password: "", confirmPassword: "" });
  const { t } = useLanguage();

  // Redirect if already logged in
  if (user) {
    return <Redirect to="/" />;
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate(loginData);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      return;
    }
    registerMutation.mutate({
      username: registerData.username,
      password: registerData.password,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted px-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Authentication Forms */}
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle>{t('auth.welcomeToAnthem')}</CardTitle>
            <CardDescription>
              {t('auth.loginToAccess')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-1">
                <TabsTrigger value="login">{t('auth.login')}</TabsTrigger>
              </TabsList>
              
              {/* Login Tab */}
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-username">{t('auth.username')}</Label>
                    <Input
                      id="login-username"
                      type="text"
                      placeholder={t('auth.enterUsername')}
                      value={loginData.username}
                      onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                      required
                      disabled={loginMutation.isPending}
                      data-testid="input-login-username"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">{t('auth.password')}</Label>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder={t('auth.enterPassword')}
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      required
                      disabled={loginMutation.isPending}
                      data-testid="input-login-password"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={loginMutation.isPending}
                    data-testid="button-login"
                  >
                    {loginMutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {t('auth.loggingIn')}
                      </>
                    ) : (
                      t('auth.login')
                    )}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Hero Section */}
        <div className="hidden lg:block text-center lg:text-left px-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
            {t('common.anthem250')}
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            {t('auth.celebrating250')}
          </p>
          <div className="space-y-4 text-muted-foreground">
            <p>
              {t('auth.joinUsCommemorating')}
            </p>
            <p>
              {t('auth.ownPieceOfHistory')}
            </p>
            <div className="pt-6">
              <h3 className="font-semibold text-foreground mb-2">{t('auth.platformFeatures')}</h3>
              <ul className="space-y-2 text-sm">
                <li>✓ {t('auth.exclusiveNFT')}</li>
                <li>✓ {t('auth.limitedSupply')}</li>
                <li>✓ {t('auth.collectorBenefits')}</li>
                <li>✓ {t('auth.accessToEvents')}</li>
                <li>✓ {t('auth.socialMediaTools')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}