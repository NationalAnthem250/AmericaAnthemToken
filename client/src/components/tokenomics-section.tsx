export default function TokenomicsSection() {
  const tokenomicsData = [
    { label: "Total Supply", value: "1,776,000", color: "text-patriot-red", percentage: 100 },
    { label: "Public Sale", value: "888,000", color: "text-patriot-gold", percentage: 50 },
    { label: "Team & Advisors", value: "177,600", color: "text-patriot-blue", percentage: 10 },
    { label: "Marketing", value: "266,400", color: "text-green-400", percentage: 15 },
    { label: "Development", value: "266,400", color: "text-purple-400", percentage: 15 },
    { label: "Reserve", value: "177,600", color: "text-orange-400", percentage: 10 },
  ];

  return (
    <section id="tokenomics" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-patriot-navy mb-6">
            250STAR <span className="text-patriot-red">TOKENOMICS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent token allocation designed to honor America's 250th anniversary
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Chart Visualization */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              {/* Pie Chart Placeholder - In a real app, you'd use a charting library */}
              <div className="w-full h-full rounded-full border-8 border-patriot-gold relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-patriot-red via-patriot-blue to-patriot-gold opacity-20"></div>
                <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-black text-patriot-navy">1.776M</div>
                    <div className="text-sm text-gray-600">250STAR Tokens</div>
                    <div className="text-xs text-patriot-gold font-semibold">Commemorating 1776</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Token Details */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-patriot-navy mb-4">Token Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Token Name:</span>
                  <span className="font-semibold text-patriot-navy">250STAR</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Supply:</span>
                  <span className="font-semibold text-patriot-red">1,776,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Launch Price:</span>
                  <span className="font-semibold text-patriot-gold">$17.76 USD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Network:</span>
                  <span className="font-semibold text-patriot-blue">Ethereum</span>
                </div>
              </div>
            </div>

            {/* Allocation Breakdown */}
            <div className="space-y-4">
              {tokenomicsData.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow border border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-patriot-navy">{item.label}</span>
                    <span className={`font-bold ${item.color}`}>{item.value}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-patriot-red to-patriot-gold h-2 rounded-full transition-all duration-500"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{item.percentage}% of total supply</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center bg-patriot-red/10 rounded-xl p-6 border border-patriot-red/20">
            <div className="w-16 h-16 bg-patriot-red rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-shield-alt text-white text-2xl"></i>
            </div>
            <h4 className="text-xl font-bold text-patriot-navy mb-2">Deflationary</h4>
            <p className="text-gray-600">
              Token burns with each NFT mint reduce supply over time, increasing scarcity
            </p>
          </div>

          <div className="text-center bg-patriot-blue/10 rounded-xl p-6 border border-patriot-blue/20">
            <div className="w-16 h-16 bg-patriot-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-vote-yea text-white text-2xl"></i>
            </div>
            <h4 className="text-xl font-bold text-patriot-navy mb-2">Governance</h4>
            <p className="text-gray-600">
              Token holders vote on future developments and commemorative projects
            </p>
          </div>

          <div className="text-center bg-patriot-gold/10 rounded-xl p-6 border border-patriot-gold/20">
            <div className="w-16 h-16 bg-patriot-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-coins text-patriot-navy text-2xl"></i>
            </div>
            <h4 className="text-xl font-bold text-patriot-navy mb-2">Utility</h4>
            <p className="text-gray-600">
              Access exclusive NFT drops, merchandise, and America250 commemorative events
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}