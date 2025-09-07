import React from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useOrganizationInfo, useTeamMembers, useImpactStats } from '../services/queries';
import { ClimbingBoxLoader } from 'react-spinners';

const About = () => {
  const { data: organizationInfo, isLoading: isOrganizationLoading } = useOrganizationInfo();
  const { data: teamMembers, isLoading: isTeamLoading } = useTeamMembers();
  const { data: impactStats, isLoading: isImpactStatsLoading } = useImpactStats();

  // Show loading state while data is being fetched
  if (isOrganizationLoading || isTeamLoading || isImpactStatsLoading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <ClimbingBoxLoader color="#3B82F6" size={35} />
      </div>
    );
  }

  // Show error state if any queries failed
  if (!organizationInfo || !teamMembers || !impactStats) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500">Failed to load data. Please try again later.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-hero text-gray-900 mb-6">
                About <span className="text-gradient">{organizationInfo.name}</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Founded in {organizationInfo.founded}, we have been dedicated to creating sustainable change 
                in communities worldwide through innovative programs and partnerships.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{organizationInfo.beneficiaries}</div>
                  <div className="text-gray-600">Lives Impacted</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">{organizationInfo.volunteers}</div>
                  <div className="text-gray-600">Active Volunteers</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/none-profit_16.jpg"
                alt="About AF Hope Foundation"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section text-gray-900 mb-6">Our Purpose</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 text-blue-600">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
              </div>
              <h3 className="heading-card text-gray-900 mb-4">Our Mission</h3>
              <p className="text-body text-gray-600 leading-relaxed">
                {organizationInfo.mission}
              </p>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 text-green-600">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
              <h3 className="heading-card text-gray-900 mb-4">Our Vision</h3>
              <p className="text-body text-gray-600 leading-relaxed">
                {organizationInfo.vision}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-gradient-to-br from-[#667eea] to-[#764ba2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section text-white mb-6">Our Impact by Numbers</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              These numbers represent real lives changed and communities empowered through our collective efforts.
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

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-section text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-body text-gray-600 leading-relaxed">
                <p>
                  AF Hope Foundation was born from a simple yet powerful belief: that every person deserves 
                  the opportunity to thrive. Founded by Aziz Khan in 2018, our organization emerged from 
                  firsthand experiences witnessing the challenges faced by underserved communities.
                </p>
                <p>
                  What started as a small initiative to provide clean water to a single village has grown 
                  into a global movement. Today, we operate across 25 countries, implementing sustainable 
                  solutions in education, healthcare, infrastructure, and economic empowerment.
                </p>
                <p>
                  Our approach is rooted in partnership and sustainability. We work closely with local 
                  communities to understand their unique needs and develop solutions that create lasting 
                  change. Every project is designed with the community's input and long-term success in mind.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/none-profit_17.jpg"
                alt="Our Story 1"
                className="rounded-xl shadow-lg h-48 w-full object-cover"
              />
              <img
                src="/images/none-profit_18.jpg"
                alt="Our Story 2"
                className="rounded-xl shadow-lg h-48 w-full object-cover mt-8"
              />
              <img
                src="/images/none-profit_19.jpg"
                alt="Our Story 3"
                className="rounded-xl shadow-lg h-48 w-full object-cover -mt-8"
              />
              <img
                src="/images/none-profit_20.jpg"
                alt="Our Story 4"
                className="rounded-xl shadow-lg h-48 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated team of professionals brings together diverse expertise and a shared passion for creating positive change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="text-center overflow-hidden group">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="heading-card text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-small text-gray-600 mb-4">{member.bio}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                  >
                    {member.email}
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide every decision we make and every action we take.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Transparency",
                description: "We maintain open communication about our operations, finances, and impact.",
                icon: (
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                  </svg>
                )
              },
              {
                title: "Sustainability",
                description: "We create long-term solutions that communities can maintain and grow.",
                icon: (
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3S17 8 17 8zM3.82 21.34C5.9 16.17 8 10 17 8s5 5 5 5S19 20 7 20c-.36 0-.86-.13-1.34-.3l-.95 2.3-1.89-.66z"/>
                  </svg>
                )
              },
              {
                title: "Partnership",
                description: "We work hand-in-hand with local communities and organizations.",
                icon: (
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2 1l-3 4v2h2l2.54-3.4L16.5 18H20zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6h1.5v7H7.5z"/>
                  </svg>
                )
              },
              {
                title: "Innovation",
                description: "We embrace creative solutions and modern approaches to age-old problems.",
                icon: (
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
                  </svg>
                )
              },
              {
                title: "Accountability",
                description: "We take responsibility for our actions and measure our impact rigorously.",
                icon: (
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                  </svg>
                )
              },
              {
                title: "Compassion",
                description: "We approach every situation with empathy and understanding.",
                icon: (
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                )
              }
            ].map((value, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 text-blue-600">
                    {value.icon}
                  </div>
                </div>
                <h3 className="heading-card text-gray-900 mb-4">{value.title}</h3>
                <p className="text-body text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#667eea] to-[#764ba2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-section text-white mb-6">Join Our Mission</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Whether through volunteering, donating, or partnering with us, there are many ways to be part of the change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              Get Involved
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              Make a Donation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;