import React from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useOrganizationInfo, useImpactStats } from '../services/queries';
import { ClimbingBoxLoader } from 'react-spinners';

const FinancialReports = () => {
  const { data: organizationInfo, isLoading: isOrganizationInfoLoading } = useOrganizationInfo();
  const { data: impactStats, isLoading: isImpactStatsLoading } = useImpactStats();

  // Show loading state while data is being fetched
  if (isOrganizationInfoLoading || isImpactStatsLoading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <ClimbingBoxLoader color="#3B82F6" size={35} />
      </div>
    );
  }

  // Show error state if any queries failed
  if (!organizationInfo || !impactStats) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500">Failed to load financial reports. Please try again later.</p>
        </div>
      </div>
    );
  }

  const financialData = {
    totalRevenue: 2850000,
    programExpenses: 2707500,
    administrativeExpenses: 85500,
    fundraisingExpenses: 57000,
    programRatio: 95,
    years: [2024, 2023, 2022, 2021, 2020]
  };

  const programBreakdown = [
    { program: 'Clean Water Initiative', percentage: 35, amount: 947625 },
    { program: 'Education Programs', percentage: 28, amount: 758100 },
    { program: 'Healthcare Services', percentage: 22, amount: 595650 },
    { program: 'Emergency Relief', percentage: 15, amount: 406125 }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-hero text-gray-900 mb-6">Financial Reports</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transparency and accountability are core to our mission. Explore our financial reports and see how your donations create impact.
          </p>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
            <div className="text-4xl font-bold text-green-600 mb-2">{financialData.programRatio}%</div>
            <div className="text-gray-700">of funds go directly to programs</div>
          </div>
        </div>
      </section>

      {/* Financial Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section text-gray-900 mb-6">2024 Financial Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to transparency means you can see exactly how we use every dollar.
            </p>
          </div>

          {/* Key Financial Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                ${(financialData.totalRevenue / 1000000).toFixed(1)}M
              </div>
              <div className="text-gray-600 font-medium">Total Revenue</div>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                ${(financialData.programExpenses / 1000000).toFixed(1)}M
              </div>
              <div className="text-gray-600 font-medium">Program Expenses</div>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                ${(financialData.administrativeExpenses / 1000).toFixed(0)}K
              </div>
              <div className="text-gray-600 font-medium">Administrative</div>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                ${(financialData.fundraisingExpenses / 1000).toFixed(0)}K
              </div>
              <div className="text-gray-600 font-medium">Fundraising</div>
            </Card>
          </div>

          {/* Program Breakdown */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="p-8 hover:shadow-2xl transition-all duration-500">
              <h3 className="heading-card text-gray-900 mb-6">Program Fund Allocation</h3>
              <div className="space-y-6">
                {programBreakdown.map((program, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{program.program}</span>
                      <span className="text-gray-600">{program.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${program.percentage}%` }}
                      ></div>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      ${program.amount.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all duration-500">
              <h3 className="heading-card text-gray-900 mb-6">Expense Breakdown</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                  <div>
                    <div className="font-semibold text-gray-900">Program Services</div>
                    <div className="text-sm text-gray-600">Direct impact activities</div>
                  </div>
                  <div className="text-2xl font-bold text-green-600">95%</div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                  <div>
                    <div className="font-semibold text-gray-900">Administrative</div>
                    <div className="text-sm text-gray-600">Operations & management</div>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">3%</div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-xl">
                  <div>
                    <div className="font-semibold text-gray-900">Fundraising</div>
                    <div className="text-sm text-gray-600">Donor acquisition & events</div>
                  </div>
                  <div className="text-2xl font-bold text-orange-600">2%</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Annual Reports */}
          <Card className="p-8 hover:shadow-2xl transition-all duration-500">
            <h3 className="heading-card text-gray-900 mb-6">Annual Reports</h3>
            <p className="text-body text-gray-600 mb-8">
              Download our comprehensive annual reports for detailed financial information and impact stories.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {financialData.years.map((year) => (
                <div key={year} className="text-center">
                  <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 mb-4 hover:shadow-lg transition-all duration-300">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                      <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                      </svg>
                    </div>
                    <div className="font-bold text-gray-900 mb-2">{year} Report</div>
                    <div className="text-sm text-gray-600 mb-4">Annual Financial Report</div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Download PDF
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section text-white mb-6">Financial Impact</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              See how our financial stewardship translates into real-world impact.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <Card key={index} variant="glass" className="p-8 text-center">
                <div className="text-4xl font-bold text-white mb-3">{stat.number}</div>
                <div className="text-white/90 font-semibold mb-2">{stat.label}</div>
                <div className="text-white/70 text-sm">{stat.description}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 bg-gradient-to-br from-green-50 to-blue-50 border-green-100">
            <h2 className="heading-section text-gray-900 mb-6 text-center">Our Commitment to Transparency</h2>
            <div className="text-body text-gray-600 leading-relaxed space-y-4">
              <p>
                At {organizationInfo.name}, we believe that transparency builds trust. We are committed to providing clear, accurate, and timely financial information to our donors, partners, and the communities we serve.
              </p>
              <p>
                Our financial reports are audited annually by independent certified public accountants, and we maintain the highest standards of financial accountability. We are proud to be recognized by leading charity watchdog organizations for our fiscal responsibility.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                    </svg>
                  </div>
                  <div className="font-semibold text-gray-900">GuideStar Gold</div>
                  <div className="text-sm text-gray-600">Transparency Seal</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div className="font-semibold text-gray-900">4-Star Rating</div>
                  <div className="text-sm text-gray-600">Charity Navigator</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div className="font-semibold text-gray-900">BBB Accredited</div>
                  <div className="text-sm text-gray-600">Better Business Bureau</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default FinancialReports;