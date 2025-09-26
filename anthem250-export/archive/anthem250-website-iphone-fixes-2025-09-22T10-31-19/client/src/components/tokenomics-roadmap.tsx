import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend,
  LineChart,
  Line
} from "recharts";
import { 
  Coins, 
  Users, 
  Shield, 
  Rocket, 
  Star, 
  Calendar, 
  TrendingUp, 
  Lock,
  Gift,
  Trophy,
  Music,
  Globe
} from "lucide-react";
import { useLanguage } from '@/hooks/use-language';

export default function TokenomicsRoadmap() {
  const { t, formatters } = useLanguage();
  // Token allocation data
  const tokenAllocation = [
    { name: t('tokenomicsRoadmap.publicSale'), value: 40, amount: 710400000, color: "#DC2626" },
    { name: t('tokenomicsRoadmap.communityRewards'), value: 25, amount: 444000000, color: "#EAB308" },
    { name: t('tokenomicsRoadmap.hannahMagnelli'), value: 15, amount: 266400000, color: "#1D4ED8" },
    { name: t('tokenomicsRoadmap.development'), value: 10, amount: 177600000, color: "#059669" },
    { name: t('tokenomicsRoadmap.marketing'), value: 5, amount: 88800000, color: "#7C3AED" },
    { name: t('tokenomicsRoadmap.reserveTreasury'), value: 5, amount: 88800000, color: "#DC2626" }
  ];

  // Revenue projection data
  const revenueProjection = [
    { phase: t('tokenomicsRoadmap.launchPhase'), revenue: 12.6, holders: 5000 },
    { phase: t('tokenomicsRoadmap.q2_2024'), revenue: 25.2, holders: 12000 },
    { phase: t('tokenomicsRoadmap.q4_2024'), revenue: 44.8, holders: 25000 },
    { phase: t('tokenomicsRoadmap.america250'), revenue: 100, holders: 50000 }
  ];

  // Utility breakdown
  const utilityFeatures = [
    {
      icon: <Music className="w-6 h-6" />,
      title: t('tokenomicsRoadmap.exclusiveContent'),
      description: t('tokenomicsRoadmap.exclusiveContentDesc'),
      launch: t('tokenomicsRoadmap.phase1Label')
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: t('tokenomicsRoadmap.collectorStatus'),
      description: t('tokenomicsRoadmap.collectorStatusDesc'),
      launch: t('tokenomicsRoadmap.phase1Label')
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: t('tokenomicsRoadmap.eventAccess'),
      description: t('tokenomicsRoadmap.eventAccessDesc'),
      launch: t('tokenomicsRoadmap.phase2Label')
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t('tokenomicsRoadmap.communityGovernance'),
      description: t('tokenomicsRoadmap.communityGovernanceDesc'),
      launch: t('tokenomicsRoadmap.phase3Label')
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: t('tokenomicsRoadmap.globalRecognition'),
      description: t('tokenomicsRoadmap.globalRecognitionDesc'),
      launch: t('tokenomicsRoadmap.phase4Label')
    }
  ];

  // Roadmap phases
  const roadmapPhases = [
    {
      phase: t('tokenomicsRoadmap.phase1'),
      timeline: t('tokenomicsRoadmap.q1_2024'),
      status: t('tokenomicsRoadmap.currentStatus'),
      milestones: [
        { title: t('tokenomicsRoadmap.tokenLaunch'), completed: false, critical: true },
        { title: t('tokenomicsRoadmap.initial10kHolders'), completed: false, critical: true },
        { title: t('tokenomicsRoadmap.solanaIntegration'), completed: true, critical: true },
        { title: t('tokenomicsRoadmap.communityPlatform'), completed: false, critical: false }
      ]
    },
    {
      phase: t('tokenomicsRoadmap.phase2'), 
      timeline: t('tokenomicsRoadmap.q2_q3_2024'),
      status: t('tokenomicsRoadmap.upcomingStatus'),
      milestones: [
        { title: t('tokenomicsRoadmap.america250Partnership'), completed: false, critical: true },
        { title: t('tokenomicsRoadmap.hannahConcertSeries'), completed: false, critical: true },
        { title: t('tokenomicsRoadmap.holders25k'), completed: false, critical: false },
        { title: t('tokenomicsRoadmap.secondaryMarket'), completed: false, critical: false }
      ]
    },
    {
      phase: t('tokenomicsRoadmap.phase3'),
      timeline: t('tokenomicsRoadmap.q4_2024_q2_2025'), 
      status: t('tokenomicsRoadmap.plannedStatus'),
      milestones: [
        { title: t('tokenomicsRoadmap.internationalOutreach'), completed: false, critical: false },
        { title: t('tokenomicsRoadmap.additionalArtists'), completed: false, critical: false },
        { title: t('tokenomicsRoadmap.educationalPartnerships'), completed: false, critical: true },
        { title: t('tokenomicsRoadmap.holders50k'), completed: false, critical: false }
      ]
    },
    {
      phase: t('tokenomicsRoadmap.phase4'),
      timeline: t('tokenomicsRoadmap.year_2025_2026'),
      status: t('tokenomicsRoadmap.plannedStatus'),
      milestones: [
        { title: t('tokenomicsRoadmap.officialIntegration'), completed: false, critical: true },
        { title: t('tokenomicsRoadmap.nationalMediaCampaign'), completed: false, critical: true },
        { title: t('tokenomicsRoadmap.livePerformances'), completed: false, critical: true },
        { title: t('tokenomicsRoadmap.historicalPreservation'), completed: false, critical: true }
      ]
    }
  ];

  // Price milestones
  const priceMilestones = [
    { holders: "5K", price: formatters.currency(1.77), target: t('tokenomicsRoadmap.launchPrice') },
    { holders: "10K", price: formatters.currency(25.00), target: t('tokenomicsRoadmap.earlyAdoption') },
    { holders: "25K", price: formatters.currency(50.00), target: t('tokenomicsRoadmap.massAwareness') }, 
    { holders: "50K", price: formatters.currency(100.00), target: t('tokenomicsRoadmap.america250Peak') }
  ];

  return (
    <section id="tokenomics" className="py-20 bg-gradient-to-b from-black via-patriot-navy to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            {t('tokenomicsRoadmap.title')} <span className="text-patriot-gold">{t('tokenomicsRoadmap.economicsText')}</span> {t('tokenomicsRoadmap.andText')} <span className="text-patriot-red">{t('tokenomicsRoadmap.roadmapText')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            {t('tokenomicsRoadmap.subtitle')}
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="bg-white/10 backdrop-blur-sm border-patriot-gold/30 text-center">
            <CardContent className="p-6">
              <Coins className="w-8 h-8 text-patriot-gold mx-auto mb-3" />
              <div className="text-3xl font-bold text-white">{formatters.tokenAmount(1776000000)}</div>
              <div className="text-gray-400">{t('tokenomicsRoadmap.totalSupply')}</div>
              <div className="text-xs text-patriot-gold mt-1">{t('tokenomicsRoadmap.commemorating1776')}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-patriot-red/30 text-center">
            <CardContent className="p-6">
              <Star className="w-8 h-8 text-patriot-red mx-auto mb-3" />
              <div className="text-3xl font-bold text-white">{formatters.currency(1.77)}</div>
              <div className="text-gray-400">{t('tokenomicsRoadmap.launchPrice')}</div>
              <div className="text-xs text-patriot-red mt-1">{t('tokenomicsRoadmap.historicalSignificance')}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-patriot-blue/30 text-center">
            <CardContent className="p-6">
              <Shield className="w-8 h-8 text-patriot-blue mx-auto mb-3" />
              <div className="text-3xl font-bold text-white">{t('hero.solana')}</div>
              <div className="text-gray-400">{t('tokenomicsRoadmap.blockchain')}</div>
              <div className="text-xs text-patriot-blue mt-1">{t('tokenomicsRoadmap.fastEfficient')}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-patriot-gold/30 text-center">
            <CardContent className="p-6">
              <Calendar className="w-8 h-8 text-patriot-gold mx-auto mb-3" />
              <div className="text-3xl font-bold text-white">{t('tokenomicsRoadmap.july2026')}</div>
              <div className="text-gray-400">{t('tokenomicsRoadmap.targetMilestone')}</div>
              <div className="text-xs text-patriot-gold mt-1">{t('tokenomicsRoadmap.americas250th')}</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Token Allocation Chart */}
          <Card className="bg-white/5 border-patriot-gold/30">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <PieChart className="w-6 h-6 mr-2 text-patriot-gold" />
                {t('tokenomicsRoadmap.tokenAllocation')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={tokenAllocation}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name} ${value}%`}
                    >
                      {tokenAllocation.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="space-y-2">
                {tokenAllocation.map((item, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                      <span className="text-white">{item.name}</span>
                    </div>
                    <div className="text-gray-400">
                      {item.value}% • {item.amount.toLocaleString()} {t('tokenomicsRoadmap.tokens')}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Revenue Projections */}
          <Card className="bg-white/5 border-patriot-red/30">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-patriot-red" />
{t('tokenomicsRoadmap.growthProjections')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueProjection}>
                    <XAxis dataKey="phase" tick={{ fill: '#ffffff', fontSize: 12 }} />
                    <YAxis tick={{ fill: '#ffffff', fontSize: 12 }} />
                    <Tooltip 
                      formatter={(value, name) => [
                        name === 'revenue' ? formatters.currency(Number(value) * 1_000_000) : `${value.toLocaleString()}`,
                        name === 'revenue' ? t('tokenomicsRoadmap.revenue') : t('tokenomicsRoadmap.holders')
                      ]}
                      contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #eab308' }}
                    />
                    <Bar dataKey="revenue" fill="#DC2626" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-patriot-gold">{formatters.currency(31500000)}</div>
                  <div className="text-gray-400 text-sm">{t('tokenomicsRoadmap.projectedMarketCap')}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">50,000+</div>
                    <div className="text-gray-400 text-xs">{t('tokenomicsRoadmap.targetHolders2026')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">$100.00</div>
                    <div className="text-gray-400 text-xs">{t('tokenomicsRoadmap.america250TargetPrice')}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Utility Features */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            TOKEN <span className="text-patriot-gold">UTILITY</span> & BENEFITS
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {utilityFeatures.map((feature, index) => (
              <Card key={index} className="bg-white/5 border-patriot-blue/30 hover:border-patriot-blue/60 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-patriot-blue">
                      {feature.icon}
                      <CardTitle className="text-lg text-white ml-3">{feature.title}</CardTitle>
                    </div>
                    <Badge variant="outline" className="text-patriot-gold border-patriot-gold/50 text-xs">
                      {feature.launch}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Strategic Roadmap */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            STRATEGIC <span className="text-patriot-red">ROADMAP</span>
          </h3>

          <div className="space-y-8">
            {roadmapPhases.map((phase, phaseIndex) => (
              <Card key={phaseIndex} className={`bg-white/5 border-2 transition-all duration-300 ${
                phase.status === 'current' ? 'border-patriot-gold shadow-lg shadow-patriot-gold/20' :
                phase.status === 'upcoming' ? 'border-patriot-blue/50' :
                'border-white/20'
              }`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-4 h-4 rounded-full mr-4 ${
                        phase.status === 'current' ? 'bg-patriot-gold animate-pulse' :
                        phase.status === 'upcoming' ? 'bg-patriot-blue' :
                        'bg-gray-500'
                      }`}></div>
                      <div>
                        <CardTitle className="text-xl text-white">{phase.phase}</CardTitle>
                        <p className="text-gray-400 text-sm">{phase.timeline}</p>
                      </div>
                    </div>
                    <Badge className={`${
                      phase.status === 'current' ? 'bg-patriot-gold text-black' :
                      phase.status === 'upcoming' ? 'bg-patriot-blue' :
                      'bg-gray-600'
                    } text-xs uppercase font-bold`}>
                      {phase.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {phase.milestones.map((milestone, milestoneIndex) => (
                      <div key={milestoneIndex} className="flex items-center space-x-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          milestone.completed ? 'bg-green-500 text-white' : 
                          milestone.critical ? 'bg-patriot-red text-white' : 'bg-gray-600 text-white'
                        }`}>
                          {milestone.completed ? '✓' : milestone.critical ? '!' : '○'}
                        </div>
                        <span className={`text-sm ${milestone.completed ? 'text-green-400' : 'text-gray-300'}`}>
                          {milestone.title}
                        </span>
                        {milestone.critical && (
                          <Badge variant="outline" className="text-patriot-red border-patriot-red/50 text-xs">
                            Critical
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Price Target Milestones */}
        <Card className="bg-gradient-to-r from-patriot-navy/50 to-patriot-red/20 border-patriot-gold/50">
          <CardHeader>
            <CardTitle className="text-2xl text-white text-center flex items-center justify-center">
              <Rocket className="w-6 h-6 mr-2 text-patriot-gold" />
              {t('tokenomicsRoadmap.priceTargetMilestones')}
            </CardTitle>
            <p className="text-gray-300 text-center">
              {t('tokenomicsRoadmap.priceAppreciationDesc')}
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              {priceMilestones.map((milestone, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 rounded-2xl p-6 border border-patriot-gold/30 hover:border-patriot-gold/60 transition-all duration-300">
                    <div className="text-2xl font-bold text-patriot-gold mb-2">{milestone.price}</div>
                    <div className="text-white text-sm font-semibold mb-1">{milestone.holders} {t('tokenomicsRoadmap.holdersLabel')}</div>
                    <div className="text-gray-400 text-xs">{milestone.target}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-xs text-gray-400 mb-4">
                {t('tokenomicsRoadmap.priceProjectionsDisclaimer')}
              </p>
              <Button 
                className="bg-patriot-gold hover:bg-patriot-gold/90 text-patriot-navy font-bold"
                onClick={() => {
                  const element = document.getElementById('participate');
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t('tokenomicsRoadmap.joinLaunchWaitlist')}
              </Button>
            </div>
          </CardContent>
        </Card>

      </div>
    </section>
  );
}