import React, { useState } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useProjects, useProjectById } from '../services/queries';
import { ClimbingBoxLoader } from 'react-spinners';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  
  const { data: projects, isLoading } = useProjects();
  // const { data: selectedProject } = useProjectById(selectedProjectId);

  // Show loading state while data is being fetched
  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <ClimbingBoxLoader color="#3B82F6" size={35} />
      </div>
    );
  }

  // Show error state if query failed
  if (!projects) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500">Failed to load projects. Please try again later.</p>
        </div>
      </div>
    );
  }

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.status === filter);

  const categories = [...new Set(projects.map(project => project.category))];

  const ProjectModal = ({ projectId, onClose }) => {
    const { data: project } = useProjectById(projectId);
    
    if (!projectId || !project) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {project.category}
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {project.location}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                project.status === 'active' 
                  ? 'bg-orange-100 text-orange-800' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {project.status === 'active' ? 'Active' : 'Completed'}
              </span>
            </div>
            
            <h2 className="heading-card text-gray-900 mb-4">{project.title}</h2>
            <p className="text-body text-gray-600 mb-6">{project.description}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600">{project.beneficiaries}</div>
                <div className="text-sm text-gray-600">Beneficiaries</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <div className="text-2xl font-bold text-green-600">{project.progress}%</div>
                <div className="text-sm text-gray-600">Complete</div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Funding Progress</span>
                <span>${project.raised.toLocaleString()} / ${project.goal.toLocaleString()}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full"
                  style={{ width: `${(project.raised / project.goal) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <Button variant="primary" className="w-full">
              Support This Project
            </Button>
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
          <h1 className="heading-hero text-gray-900 mb-6">Our Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover the impactful initiatives we're implementing worldwide to create sustainable change 
            in education, healthcare, infrastructure, and community development.
          </p>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                filter === 'all'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setFilter('active')}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                filter === 'active'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              Active ({projects.filter(p => p.status === 'active').length})
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                filter === 'completed'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              Completed ({projects.filter(p => p.status === 'completed').length})
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden group cursor-pointer">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'active' 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-gray-500 text-white'
                    }`}>
                      {project.status === 'active' ? 'Active' : 'Completed'}
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
                  <p className="text-body text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  
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
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setSelectedProjectId(project.id)}
                      >
                        Learn More
                      </Button>
                      <Button variant="primary" size="sm">
                        Support
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section text-gray-900 mb-6">Project Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse portfolio of projects addresses multiple aspects of community development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const categoryProjects = projects.filter(p => p.category === category);
              const totalBeneficiaries = categoryProjects.reduce((sum, p) => sum + p.beneficiaries, 0);
              const avgProgress = Math.round(categoryProjects.reduce((sum, p) => sum + p.progress, 0) / categoryProjects.length);
              
              return (
                <Card key={category} className="p-8 text-center hover:shadow-2xl transition-all duration-500">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 text-blue-600">
                      {category === 'Infrastructure' && (
                        <svg fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 3L2 12h3v8h14v-8h3L12 3zm0 2.84L18.16 12H17v6H7v-6H5.84L12 5.84z"/>
                        </svg>
                      )}
                      {category === 'Education' && (
                        <svg fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6L23 9l-11-6zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                        </svg>
                      )}
                      {category === 'Healthcare' && (
                        <svg fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3V8zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/>
                        </svg>
                      )}
                      {category === 'Agriculture' && (
                        <svg fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>
                        </svg>
                      )}
                      {category === 'Empowerment' && (
                        <svg fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2 1l-3 4v2h2l2.54-3.4L16.5 18H20z"/>
                        </svg>
                      )}
                      {category === 'Emergency' && (
                        <svg fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2v-2zm0-6h2v4h-2v-4z"/>
                        </svg>
                      )}
                    </div>
                  </div>
                  <h3 className="heading-card text-gray-900 mb-4">{category}</h3>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Projects:</span>
                      <span className="font-medium">{categoryProjects.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Beneficiaries:</span>
                      <span className="font-medium">{totalBeneficiaries.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Avg Progress:</span>
                      <span className="font-medium">{avgProgress}%</span>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#667eea] to-[#764ba2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-section text-white mb-6">Support Our Projects</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Every contribution, no matter the size, makes a meaningful difference in the lives of those we serve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              Make a Donation
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              Become a Volunteer
            </Button>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal 
        projectId={selectedProjectId} 
        onClose={() => setSelectedProjectId(null)} 
      />
    </div>
  );
};

export default Projects;