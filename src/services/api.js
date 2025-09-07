// Mock API service functions that simulate API calls with mock data
import { 
  organizationInfo, 
  teamMembers, 
  projects, 
  testimonials, 
  volunteerOpportunities, 
  donationTiers, 
  impactStats,
  contactInfo,
  socialLinks
} from '../data/mockData';

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Organization API
export const fetchOrganizationInfo = async () => {
  await delay(300); // Simulate network delay
  return organizationInfo;
};

// Team API
export const fetchTeamMembers = async () => {
  await delay(300);
  return teamMembers;
};

// Projects API
export const fetchProjects = async () => {
  await delay(300);
  return projects;
};

export const fetchProjectById = async (id) => {
  await delay(300);
  return projects.find(project => project.id === id) || null;
};

// Testimonials API
export const fetchTestimonials = async () => {
  await delay(300);
  return testimonials;
};

// Volunteer Opportunities API
export const fetchVolunteerOpportunities = async () => {
  await delay(300);
  return volunteerOpportunities;
};

// Donation Tiers API
export const fetchDonationTiers = async () => {
  await delay(300);
  return donationTiers;
};

// Impact Stats API
export const fetchImpactStats = async () => {
  await delay(300);
  return impactStats;
};

// Contact Info API
export const fetchContactInfo = async () => {
  await delay(300);
  return contactInfo;
};

// Social Links API
export const fetchSocialLinks = async () => {
  await delay(300);
  return socialLinks;
};