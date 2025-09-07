import React from 'react';
import { Link } from 'react-router';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { useOrganizationInfo, useProjects, useTestimonials, useImpactStats, useDonationTiers } from '../services/queries';
import { ClimbingBoxLoader } from 'react-spinners';

const Home = () => {
  const { data: organizationInfo, isLoading: isOrganizationLoading } = useOrganizationInfo();
  const { data: projects, isLoading: isProjectsLoading } = useProjects();
  const { data: testimonials, isLoading: isTestimonialsLoading } = useTestimonials();
  const { data: impactStats, isLoading: isImpactStatsLoading } = useImpactStats();
  const { data: donationTiers, isLoading: isDonationTiersLoading } = useDonationTiers();

  // Show loading state while data is being fetched
  if (isOrganizationLoading || isProjectsLoading || isTestimonialsLoading || 
      isImpactStatsLoading || isDonationTiersLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <ClimbingBoxLoader color="#3B82F6" size={35} />
      </div>
    );
  }

  // Show error state if any queries failed
  if (!organizationInfo || !projects || !testimonials || !impactStats || !donationTiers) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500">Failed to load data. Please try again later.</p>
        </div>
      </div>
    );
  }

  const featuredProjects = projects.filter(project => project.status === 'active').slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-modern">
        {/* Background Image with semi-transparency */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/np01.jpg" 
            alt="Hope Foundation Community" 
            className="w-full h-full object-cover"
          />
          {/* Overlay to make image semi-transparent */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
          <div className="fade-in">
            {/* Typography */}
           <div className="text-hero-modern text-7xl mb-4 tracking-wide">
            Transform
            <span className="ml-[20px] bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
            Communities
            </span>
          </div>

            
            <p className="text-lg font-semibold md:text-xl text-white mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Join our mission to empower communities worldwide through sustainable development, 
              education, and healthcare initiatives that create meaningful change.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link to="/donate">
                <button className="group relative px-8 py-4 bg-white text-gray-900 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/25">
                  <span className="relative z-10 flex items-center">
                    Start Your Impact
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-white rounded-2xl group-hover:bg-transparent transition-colors duration-300"></div>
                </button>
              </Link>
              <Link to="/about">
                <button className="px-8 py-4 border-2 border-white/30 text-white rounded-2xl font-semibold text-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                  Discover Our Story
                </button>
              </Link>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {impactStats.map((stat, index) => (
                <div key={index} className="hero-card-modern p-6 text-center group hover:scale-105 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-white/90 font-semibold mb-1 text-sm md:text-base">{stat.label}</div>
                  <div className="text-white/60 text-xs md:text-sm leading-tight">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section text-gray-900 mb-6">Our Mission & Vision</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in the power of community-driven change and sustainable development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="p-8 hover:shadow-2xl transition-all duration-500">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 text-blue-600">
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="heading-card text-gray-900 mb-3">Our Mission</h3>
                    <p className="text-body text-gray-600">{organizationInfo.mission}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-2xl transition-all duration-500">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 text-green-600">
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="heading-card text-gray-900 mb-3">Our Vision</h3>
                    <p className="text-body text-gray-600">{organizationInfo.vision}</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="relative">
              <img
                src="/images/none-profit_15.jpg"
                alt="Community Impact"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-orange-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section text-gray-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover the impactful projects we're currently working on to create positive change in communities worldwide.
            </p>
            <Link to="/projects">
              <Button variant="outline">View All Projects</Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden group">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      {project.location}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="heading-card text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-body text-gray-600 mb-4">{project.description}</p>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                    <span>Raised: ${project.raised.toLocaleString()}</span>
                    <span>Goal: ${project.goal.toLocaleString()}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{project.beneficiaries} beneficiaries</span>
                    <Button variant="primary" size="sm">
                      Support Project
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section text-gray-900 mb-6">Stories of Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from the communities and individuals whose lives have been transformed through our programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} variant="glass" className="p-8 text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
                />
                <blockquote className="text-body text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-small text-gray-600">{testimonial.role}</p>
                  <p className="text-small text-blue-600 font-medium">{testimonial.location}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#667eea] to-[#764ba2] hero-modern relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-section text-white mb-6">Make a Difference Today</h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Your donation can transform lives and create lasting change in communities that need it most.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {donationTiers.map((tier) => (
              <Card key={tier.amount} variant="glass" className={`p-6 text-center ${tier.popular ? 'ring-2 ring-yellow-400' : ''}`}>
                {tier.popular && (
                  <div className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    Most Popular
                  </div>
                )}
                <div className="text-3xl font-bold text-white mb-2">${tier.amount}</div>
                <div className="text-white font-medium mb-3">{tier.title}</div>
                <div className="text-white/80 text-sm mb-4">{tier.description}</div>
                <div className="text-yellow-300 text-sm font-medium mb-4">{tier.impact}</div>
                <Button variant="primary" className="w-full bg-white text-gray-900 hover:bg-gray-100">
                  Donate ${tier.amount}
                </Button>
              </Card>
            ))}
          </div>

          <Link to="/donate">
            <Button variant="primary" size="lg" className="bg-white text-gray-900 hover:bg-gray-100 shadow-2xl">
              Choose Custom Amount
            </Button>
          </Link>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-section text-gray-900 mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter to receive updates on our projects and impact stories.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <Button type="submit" variant="primary">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;