import React, { useState } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { volunteerOpportunities } from '../data/mockData';

const GetInvolved = () => {
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    motivation: ''
  });

  const handleInputChange = (e) => {
    setApplicationForm({
      ...applicationForm,
      [e.target.name]: e.target.value
    });
  };

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your application! We will review it and get back to you soon.');
    setApplicationForm({
      name: '',
      email: '',
      phone: '',
      experience: '',
      motivation: ''
    });
    setSelectedOpportunity(null);
  };

  const ApplicationModal = ({ opportunity, onClose }) => {
    if (!opportunity) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="heading-card text-gray-900">Apply for {opportunity.title}</h2>
              <button
                onClick={onClose}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleApplicationSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={applicationForm.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={applicationForm.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={applicationForm.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Relevant Experience
                </label>
                <textarea
                  name="experience"
                  value={applicationForm.experience}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your relevant experience and skills..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to volunteer with us? *
                </label>
                <textarea
                  name="motivation"
                  value={applicationForm.motivation}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Share your motivation and what you hope to contribute..."
                  required
                />
              </div>

              <div className="flex gap-4">
                <Button type="submit" variant="primary" className="flex-1">
                  Submit Application
                </Button>
                <Button type="button" variant="outline" onClick={onClose}>
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-hero text-gray-900 mb-6">Get Involved</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join our global community of changemakers. Whether you have a few hours or a few months, 
            there's a meaningful way for you to contribute to our mission.
          </p>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section text-gray-900 mb-6">Ways to Make a Difference</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose how you'd like to contribute to creating positive change in communities worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Volunteer",
                description: "Join our field teams or support remotely with your skills and expertise.",
                icon: (
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2 1l-3 4v2h2l2.54-3.4L16.5 18H20zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6h1.5v7H7.5z"/>
                  </svg>
                ),
                action: "View Opportunities",
                color: "blue"
              },
              {
                title: "Donate",
                description: "Support our projects with financial contributions that create lasting impact.",
                icon: (
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                ),
                action: "Make a Donation",
                color: "green"
              },
              {
                title: "Partner",
                description: "Collaborate with us as an organization to amplify our collective impact.",
                icon: (
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                ),
                action: "Learn More",
                color: "purple"
              },
              {
                title: "Fundraise",
                description: "Organize fundraising events or campaigns in your community.",
                icon: (
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                  </svg>
                ),
                action: "Get Started",
                color: "orange"
              },
              {
                title: "Spread Awareness",
                description: "Share our mission on social media and within your networks.",
                icon: (
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
                  </svg>
                ),
                action: "Share Now",
                color: "pink"
              },
              {
                title: "Corporate Partnership",
                description: "Engage your company in meaningful corporate social responsibility.",
                icon: (
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                  </svg>
                ),
                action: "Contact Us",
                color: "indigo"
              }
            ].map((way, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-2xl transition-all duration-500 group">
                <div className={`w-16 h-16 bg-${way.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <div className={`w-8 h-8 text-${way.color}-600`}>
                    {way.icon}
                  </div>
                </div>
                <h3 className="heading-card text-gray-900 mb-4">{way.title}</h3>
                <p className="text-body text-gray-600 mb-6">{way.description}</p>
                <Button variant="outline" className="group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
                  {way.action}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section text-gray-900 mb-6">Current Volunteer Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our team and make a direct impact on the communities we serve around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {volunteerOpportunities.map((opportunity) => (
              <Card key={opportunity.id} className="p-8 hover:shadow-2xl transition-all duration-500">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="heading-card text-gray-900 mb-2">{opportunity.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                        {opportunity.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                        </svg>
                        {opportunity.duration}
                      </span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    opportunity.type === 'Full-time' 
                      ? 'bg-green-100 text-green-800'
                      : opportunity.type === 'Part-time'
                      ? 'bg-blue-100 text-blue-800'
                      : opportunity.type === 'Remote'
                      ? 'bg-purple-100 text-purple-800'
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {opportunity.type}
                  </span>
                </div>

                <p className="text-body text-gray-600 mb-6">{opportunity.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {opportunity.requirements.map((req, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                        </svg>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  variant="primary" 
                  className="w-full"
                  onClick={() => setSelectedOpportunity(opportunity)}
                >
                  Apply Now
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-section text-gray-900 mb-6">Partner With Us</h2>
              <p className="text-xl text-gray-600 mb-8">
                We believe in the power of collaboration. Partner with us to amplify your impact 
                and create meaningful change together.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Corporate Partnerships",
                    description: "Engage your employees and customers in meaningful CSR initiatives."
                  },
                  {
                    title: "Foundation Collaborations",
                    description: "Pool resources and expertise to tackle complex global challenges."
                  },
                  {
                    title: "Academic Partnerships",
                    description: "Connect research with real-world impact through student programs."
                  },
                  {
                    title: "Government Relations",
                    description: "Work with public sector partners to scale sustainable solutions."
                  }
                ].map((partnership, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{partnership.title}</h4>
                      <p className="text-gray-600">{partnership.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button variant="primary" size="lg">
                  Explore Partnerships
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/none-profit_21.jpg"
                alt="Partnership"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-400 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section text-gray-900 mb-6">Resources & Downloads</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our resources to learn more about our work and how you can get involved.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Volunteer Handbook",
                description: "Complete guide for new volunteers with policies and procedures.",
                type: "PDF",
                size: "2.5 MB"
              },
              {
                title: "Impact Report 2024",
                description: "Annual report showcasing our achievements and financial transparency.",
                type: "PDF",
                size: "5.1 MB"
              },
              {
                title: "Partnership Brochure",
                description: "Information packet for potential corporate and foundation partners.",
                type: "PDF",
                size: "1.8 MB"
              },
              {
                title: "Fundraising Toolkit",
                description: "Resources and templates for organizing your own fundraising events.",
                type: "ZIP",
                size: "12.3 MB"
              },
              {
                title: "Social Media Kit",
                description: "Logos, images, and content for sharing our mission on social media.",
                type: "ZIP",
                size: "8.7 MB"
              },
              {
                title: "Educational Materials",
                description: "Presentations and materials for schools and community groups.",
                type: "ZIP",
                size: "15.2 MB"
              }
            ].map((resource, index) => (
              <Card key={index} className="p-6 hover:shadow-2xl transition-all duration-500 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <svg className="w-6 h-6 text-blue-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                    </svg>
                  </div>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                    {resource.type}
                  </span>
                </div>
                
                <h3 className="heading-card text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-body text-gray-600 mb-4">{resource.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{resource.size}</span>
                  <Button variant="outline" size="sm" className="group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
                    Download
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#667eea] to-[#764ba2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-section text-white mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join thousands of volunteers, donors, and partners who are creating positive change worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              Start Volunteering
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              Make a Donation
            </Button>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <ApplicationModal 
        opportunity={selectedOpportunity} 
        onClose={() => setSelectedOpportunity(null)} 
      />
    </div>
  );
};

export default GetInvolved;