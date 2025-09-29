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
    { name: t('tokenomicsRoadmap.publicSale'), value: 40, amount: 7104000, color: "#DC2626" },
    { name: t('tokenomicsRoadmap.communityRewards'), value: 25, amount: 4440000, color: "#EAB308" },
    { name: t('tokenomicsRoadmap.hannahMagnelli'), value: 15, amount: 2664000, color: "#1D4ED8" },
    { name: t('tokenomicsRoadmap.development'), value: 10, amount: 1776000, color: "#059669" },
    { name: t('tokenomicsRoadmap.marketing'), value: 5, amount: 888000, color: "#7C3AED" },
    { name: t('tokenomicsRoadmap.reserveTreasury'), value: 5, amount: 888000, color: "#DC2626" }
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
              <div className="text-3xl font-bold text-white">{formatters.tokenAmount(17760000)}</div>
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

        {/* Transparency & Technical Details */}
        <div className="mt-16 space-y-8">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            FULL <span className="text-patriot-gold">TRANSPARENCY</span> & TECHNICAL DETAILS
          </h3>

          {/* Smart Contract & Security */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/5 border-green-500/30">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center">
                  <Shield className="w-6 h-6 mr-2 text-green-500" />
                  Smart Contract & Audits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-white font-semibold">Security Audit Scheduled</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Full smart contract audit by reputable third-party security firm scheduled for Q1 2025 prior to launch.
                  </p>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Blockchain:</span>
                    <span className="text-white font-semibold">Solana (SPL Token)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Contract Address:</span>
                    <span className="text-patriot-gold font-semibold">To be published at launch</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Audit Report:</span>
                    <span className="text-patriot-gold font-semibold">Available post-audit</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Verification:</span>
                    <span className="text-white">Solana Explorer</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <h5 className="text-white font-semibold mb-2">Security Features:</h5>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• No admin mint authority (fixed supply)</li>
                    <li>• No freeze authority</li>
                    <li>• Immutable contract code</li>
                    <li>• Multi-signature treasury wallet</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-patriot-blue/30">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center">
                  <Lock className="w-6 h-6 mr-2 text-patriot-blue" />
                  Vesting & Lock-up Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm mb-4">
                  Team and artist allocations are locked to prevent early dumping and ensure long-term commitment.
                </p>

                <div className="space-y-3">
                  <div className="bg-patriot-red/10 border border-patriot-red/30 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-semibold">Hannah Magnelli (15%)</span>
                      <span className="text-patriot-red text-sm">2.66M tokens</span>
                    </div>
                    <p className="text-gray-400 text-xs">
                      50% locked for 12 months, remaining 50% vested quarterly over 24 months
                    </p>
                  </div>

                  <div className="bg-patriot-blue/10 border border-patriot-blue/30 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-semibold">Development Team (10%)</span>
                      <span className="text-patriot-blue text-sm">1.78M tokens</span>
                    </div>
                    <p className="text-gray-400 text-xs">
                      100% locked for 6 months, then vested monthly over 18 months
                    </p>
                  </div>

                  <div className="bg-patriot-gold/10 border border-patriot-gold/30 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-semibold">Reserve/Treasury (5%)</span>
                      <span className="text-patriot-gold text-sm">888K tokens</span>
                    </div>
                    <p className="text-gray-400 text-xs">
                      Multi-sig controlled, releases require community governance approval
                    </p>
                  </div>

                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-semibold">Public Sale (40%)</span>
                      <span className="text-green-500 text-sm">7.10M tokens</span>
                    </div>
                    <p className="text-gray-400 text-xs">
                      No lock-up, freely tradable immediately upon purchase
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Supply Mechanics */}
          <Card className="bg-gradient-to-r from-patriot-red/10 to-patriot-blue/10 border-patriot-gold/50">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center justify-center">
                <Coins className="w-6 h-6 mr-2 text-patriot-gold" />
                Supply Mechanics & Token Economics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white/5 rounded-lg border border-patriot-red/30">
                  <div className="text-3xl mb-2">🔒</div>
                  <h5 className="text-white font-bold mb-2">Fixed Supply</h5>
                  <p className="text-gray-300 text-sm">
                    <strong className="text-patriot-red">17,760,000 tokens</strong> - Absolute maximum. No additional minting ever possible after initial creation.
                  </p>
                </div>

                <div className="text-center p-4 bg-white/5 rounded-lg border border-patriot-blue/30">
                  <div className="text-3xl mb-2">🔥</div>
                  <h5 className="text-white font-bold mb-2">Deflationary Burn</h5>
                  <p className="text-gray-300 text-sm">
                    <strong className="text-patriot-blue">0.25% of all transactions</strong> permanently burned, reducing circulating supply over time.
                  </p>
                </div>

                <div className="text-center p-4 bg-white/5 rounded-lg border border-green-500/30">
                  <div className="text-3xl mb-2">📈</div>
                  <h5 className="text-white font-bold mb-2">Scarcity Model</h5>
                  <p className="text-gray-300 text-sm">
                    As supply decreases through burns and holding increases, <strong className="text-green-500">value appreciates</strong> naturally.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-patriot-navy/50 rounded-lg border border-patriot-gold/30">
                <h5 className="text-white font-semibold mb-3 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-patriot-gold" />
                  No Inflation Risk
                </h5>
                <p className="text-gray-300 text-sm">
                  Unlike traditional cryptocurrencies with ongoing emissions, NAT250 has a permanent cap. The smart contract has no mint authority, ensuring the supply can never increase. Combined with the burn mechanism, the circulating supply will only decrease over time, creating natural scarcity and upward price pressure as adoption grows.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Liquidity & Exchange Listings */}
          <Card className="bg-white/5 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center justify-center">
                <Rocket className="w-6 h-6 mr-2 text-purple-500" />
                Liquidity & Exchange Listing Strategy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-white font-bold mb-3 flex items-center">
                      <div className="w-2 h-2 bg-patriot-gold rounded-full mr-2"></div>
                      Phase 1: Initial Liquidity (Launch)
                    </h5>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start">
                        <span className="text-patriot-gold mr-2">•</span>
                        <span><strong>Raydium DEX</strong> - Primary trading pair NAT250/USDC with initial liquidity of $250,000</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-patriot-gold mr-2">•</span>
                        <span><strong>Orca DEX</strong> - Secondary liquidity pool for increased accessibility</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-patriot-gold mr-2">•</span>
                        <span>Liquidity locked for minimum 12 months via Solana lock contracts</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-white font-bold mb-3 flex items-center">
                      <div className="w-2 h-2 bg-patriot-blue rounded-full mr-2"></div>
                      Phase 2: CEX Listings (Q2-Q3 2025)
                    </h5>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start">
                        <span className="text-patriot-blue mr-2">•</span>
                        <span>Applications submitted to major centralized exchanges (Coinbase, Kraken, Binance.US)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-patriot-blue mr-2">•</span>
                        <span>Target: Minimum 2 Tier-1 CEX listings by July 4, 2025</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-patriot-blue mr-2">•</span>
                        <span>Marketing budget allocated for listing fees and promotional campaigns</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <h5 className="text-white font-bold mb-2 flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Liquidity Commitment
                  </h5>
                  <p className="text-gray-300 text-sm">
                    10% of all public sale proceeds will be added to DEX liquidity pools within 48 hours of sale milestones. All liquidity pool tokens will be time-locked and cannot be removed by the team, ensuring permanent trading availability.
                  </p>
                </div>

                <div className="text-center pt-4 border-t border-white/10">
                  <p className="text-gray-400 text-sm mb-4">
                    <strong className="text-white">Market Making Partnership:</strong> Professional market makers engaged to ensure healthy trading volume and price stability post-launch.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Token Utility Expansion */}
          <Card className="bg-gradient-to-br from-patriot-navy/50 via-patriot-red/20 to-patriot-blue/20 border-patriot-gold/50">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">
                Token Utility & Holder Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h5 className="text-patriot-gold font-bold">Immediate Utility (Launch)</h5>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start">
                      <span className="text-patriot-gold mr-2">✓</span>
                      <span><strong>Ownership of historic performance:</strong> Digital rights to Hannah Magnelli's National Anthem recording</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-patriot-gold mr-2">✓</span>
                      <span><strong>Exclusive content access:</strong> Behind-the-scenes footage, interviews, rehearsal recordings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-patriot-gold mr-2">✓</span>
                      <span><strong>Commemorative certificate:</strong> Digital certificate of authenticity and participation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-patriot-gold mr-2">✓</span>
                      <span><strong>Community membership:</strong> Access to exclusive holder Discord channels and events</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h5 className="text-patriot-red font-bold">Future Utility (Roadmap)</h5>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start">
                      <span className="text-patriot-red mr-2">→</span>
                      <span><strong>Governance rights:</strong> Vote on future project decisions and fund allocations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-patriot-red mr-2">→</span>
                      <span><strong>Event access:</strong> Priority tickets to Hannah Magnelli performances and America250 events</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-patriot-red mr-2">→</span>
                      <span><strong>Physical merchandise:</strong> Ability to redeem tokens for limited-edition physical collectibles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-patriot-red mr-2">→</span>
                      <span><strong>Revenue sharing:</strong> Potential revenue share from future licensing and commercial use</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white/5 rounded-lg border border-patriot-blue/30">
                <p className="text-gray-300 text-sm">
                  <strong className="text-white">Long-term Vision:</strong> NAT250 tokens are designed to appreciate in value through a combination of fixed supply, deflationary burns, growing utility, and increasing cultural significance as we approach America's 250th anniversary in 2026. Holders become part of a historic moment in American commemorative digital art.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Legal & Compliance */}
          <Card className="bg-white/5 border-patriot-gold/30">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center justify-center">
                <Shield className="w-6 h-6 mr-2 text-patriot-gold" />
                Legal & Regulatory Compliance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm text-gray-300">
                <p>
                  <strong className="text-white">Securities Compliance:</strong> NAT250 tokens are structured as commemorative digital collectibles with utility features, not as investment securities. Legal analysis conducted by specialized crypto attorneys to ensure compliance with U.S. securities laws.
                </p>
                <p>
                  <strong className="text-white">KYC/AML:</strong> Optional KYC verification available for larger purchases and exchange listings. Standard AML procedures implemented for all transactions above $10,000.
                </p>
                <p>
                  <strong className="text-white">Tax Reporting:</strong> All U.S.-based holders will receive appropriate tax documentation (Form 1099) for sales above IRS reporting thresholds.
                </p>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-gray-400">
                    <strong>Disclaimer:</strong> This is not financial advice. Cryptocurrency investments carry risk. Past performance does not guarantee future results. Price projections are estimates only and not guarantees. Always conduct your own research and consult with financial advisors before investing.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
}