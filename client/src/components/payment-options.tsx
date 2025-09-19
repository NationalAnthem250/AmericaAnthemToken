import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLanguage } from '@/contexts/language-context';

export default function PaymentOptions() {
  const [selectedAmount, setSelectedAmount] = useState(1);
  const { t, formatters } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-b from-patriot-navy to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            {t('paymentOptions.title')} <span className="text-patriot-gold">{t('paymentOptions.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-4">
            {t('paymentOptions.subtitle')}
          </p>
          <div className="inline-flex items-center bg-patriot-gold/20 backdrop-blur-sm rounded-full px-6 py-3 border border-patriot-gold/40">
            <span className="text-patriot-gold font-bold text-lg mr-2">🚀</span>
            <span className="text-patriot-gold font-semibold text-lg">{t('paymentOptions.comingSoon')}</span>
          </div>
        </div>

        <div className="relative">
          {/* Coming Soon Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-2xl z-10 flex items-center justify-center">
            <div className="text-center">
              <div className="bg-patriot-gold/20 backdrop-blur-sm rounded-2xl p-8 border border-patriot-gold/40">
                <h3 className="text-3xl font-bold text-patriot-gold mb-4">{t('paymentOptions.paymentSystemLaunching')}</h3>
                <p className="text-white text-lg mb-6">
                  {t('paymentOptions.finishingTouches')}
                </p>
                <div className="space-y-3 text-gray-300">
                  <p className="flex items-center justify-center gap-2">
                    <span className="text-patriot-gold">✓</span>
                    {t('paymentOptions.creditCardPayments')}
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <span className="text-patriot-gold">✓</span>
                    {t('paymentOptions.cryptoWalletIntegration')}
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <span className="text-patriot-gold">✓</span>
                    {t('paymentOptions.secureBlockchain')}
                  </p>
                </div>
                <div className="mt-6 p-4 bg-patriot-red/20 rounded-lg border border-patriot-red/30">
                  <p className="text-patriot-red font-semibold">
                    <a 
                      href="#participate" 
                      className="hover:text-patriot-gold transition-colors cursor-pointer underline decoration-patriot-red hover:decoration-patriot-gold"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('participate')?.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                        });
                      }}
                    >
                      {t('paymentOptions.joinWaitlistNotification')}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="credit-card" className="w-full opacity-30">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="credit-card" className="text-lg py-3">
              {t('paymentOptions.creditCardTab')}
            </TabsTrigger>
            <TabsTrigger value="crypto" className="text-lg py-3">
              {t('paymentOptions.cryptoTab')}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="credit-card">
            <Card className="bg-white/10 backdrop-blur-sm border-patriot-gold/30">
              <CardHeader>
                <CardTitle className="text-2xl text-white text-center">
                  {t('paymentOptions.payWithCreditCard')}
                </CardTitle>
                <p className="text-gray-300 text-center">
                  {t('paymentOptions.justLikeOnline')}
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Amount Selection */}
                <div>
                  <Label className="text-white text-lg mb-4 block">{t('paymentOptions.selectQuantity')}</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[1, 5, 10, 25].map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setSelectedAmount(amount)}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          selectedAmount === amount
                            ? 'border-patriot-gold bg-patriot-gold/20 text-patriot-gold'
                            : 'border-gray-600 bg-white/5 text-gray-300 hover:border-patriot-gold/50'
                        }`}
                      >
                        <div className="font-bold text-lg">{amount}</div>
                        <div className="text-sm">{formatters.currency(amount * 17.76)}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Order Summary */}
                <Card className="bg-black/30 border-patriot-gold/20">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center text-lg">
                      <span className="text-gray-300">
                        {selectedAmount} × 250STAR {selectedAmount > 1 ? t('paymentOptions.tokensPlural') : t('paymentOptions.tokens')}
                      </span>
                      <span className="text-patriot-gold font-bold">
                        {formatters.currency(selectedAmount * 17.76)}
                      </span>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Form */}
                <div className="space-y-4">
                  <div>
                    <Label className="text-white">{t('paymentOptions.emailAddress')}</Label>
                    <Input 
                      type="email" 
                      placeholder={t('paymentOptions.emailPlaceholder')}
                      className="bg-white/10 border-gray-600 text-white"
                    />
                  </div>
                  
                  <Button className="w-full bg-patriot-gold hover:bg-patriot-gold/90 text-patriot-navy py-6 text-xl font-bold">
                    {t('paymentOptions.continueToPayment')}
                  </Button>
                </div>

                {/* Payment Partners */}
                <div className="text-center pt-4">
                  <p className="text-gray-400 text-sm mb-3">{t('paymentOptions.poweredBy')}</p>
                  <div className="flex justify-center items-center gap-6 opacity-70">
                    <div className="text-white font-bold">MoonPay</div>
                    <div className="text-white font-bold">Crossmint</div>
                    <div className="text-white font-bold">Stripe</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="crypto">
            <Card className="bg-white/10 backdrop-blur-sm border-patriot-red/30">
              <CardHeader>
                <CardTitle className="text-2xl text-white text-center">
                  {t('paymentOptions.connectWallet')} <span className="text-patriot-gold text-lg font-normal ml-2">({t('paymentOptions.comingSoon')})</span>
                </CardTitle>
                <p className="text-gray-300 text-center">
                  {t('paymentOptions.forExperiencedUsers')}
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Wallet Options */}
                <div className="grid gap-4">
                  <Button 
                    variant="outline" 
                    className="w-full py-6 text-lg border-patriot-red text-patriot-red hover:bg-patriot-red hover:text-white"
                  >
                    <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-.29 1.248c-.117.461-.423.564-.857.35l-2.225-.87c-.064-.025-.112-.039-.151-.039-.128 0-.224.08-.288.24l-.353 1.48c-.048.195-.144.282-.288.282-.096 0-.176-.048-.24-.144l-.968-1.632-.968 1.632c-.064.096-.144.144-.24.144-.144 0-.24-.087-.288-.282l-.353-1.48c-.064-.16-.16-.24-.288-.24-.039 0-.087.014-.151.039l-2.225.87c-.434.214-.74.111-.857-.35L4.432 8.16c-.117-.461.062-.788.467-.788.096 0 .192.014.288.043l7.813 2.4 7.813-2.4c.096-.029.192-.043.288-.043.405 0 .584.327.467.788z"/>
                    </svg>
                    {t('paymentOptions.connectPhantom')}
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full py-6 text-lg border-patriot-blue text-patriot-blue hover:bg-patriot-blue hover:text-white"
                  >
                    <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2a10 10 0 110 20 10 10 0 010-20z"/>
                    </svg>
                    {t('paymentOptions.connectSolflare')}
                  </Button>

                  <Button 
                    variant="outline" 
                    className="w-full py-6 text-lg border-patriot-gold text-patriot-gold hover:bg-patriot-gold hover:text-patriot-navy"
                  >
                    <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5 13h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                    </svg>
                    {t('paymentOptions.otherWallets')}
                  </Button>
                </div>

                {/* Network Info */}
                <Card className="bg-black/30 border-patriot-blue/20">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        <div>
                          <div className="text-white font-semibold">{t('tokenomicsRoadmap.solanaNetwork')}</div>
                          <div className="text-gray-400 text-sm">{t('paymentOptions.lowerTransactionFeesSolana')}</div>
                        </div>
                      </div>
                      <div className="text-patriot-gold font-bold">{formatters.currency(1.77)}</div>
                    </div>
                  </CardContent>
                </Card>

                {/* Benefits for Crypto Users */}
                <div className="bg-black/30 rounded-lg p-4 border border-patriot-gold/20">
                  <h4 className="text-patriot-gold font-semibold mb-3">{t('paymentOptions.cryptoUserBenefits')}</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-patriot-gold">✓</span>
                      {t('paymentOptions.directWalletOwnership')}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-patriot-gold">✓</span>
                      {t('paymentOptions.instantMarketplaceTrading')}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-patriot-gold">✓</span>
                      {t('paymentOptions.accessAdvancedTokenomics')}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-patriot-gold">✓</span>
                      {t('paymentOptions.lowerTransactionFeesSolana')}
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        </div>
      </div>
    </section>
  );
}