import { useQuery } from '@tanstack/react-query';
import * as api from './api';

// Organization Queries
export const useOrganizationInfo = () => {
  return useQuery({
    queryKey: ['organization'],
    queryFn: api.fetchOrganizationInfo,
  });
};

// Team Queries
export const useTeamMembers = () => {
  return useQuery({
    queryKey: ['team'],
    queryFn: api.fetchTeamMembers,
  });
};

// Projects Queries
export const useProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: api.fetchProjects,
  });
};

export const useProjectById = (id) => {
  return useQuery({
    queryKey: ['project', id],
    queryFn: () => api.fetchProjectById(id),
    enabled: !!id,
  });
};

// Testimonials Queries
export const useTestimonials = () => {
  return useQuery({
    queryKey: ['testimonials'],
    queryFn: api.fetchTestimonials,
  });
};

// Volunteer Opportunities Queries
export const useVolunteerOpportunities = () => {
  return useQuery({
    queryKey: ['volunteer-opportunities'],
    queryFn: api.fetchVolunteerOpportunities,
  });
};

// Donation Tiers Queries
export const useDonationTiers = () => {
  return useQuery({
    queryKey: ['donation-tiers'],
    queryFn: api.fetchDonationTiers,
  });
};

// Impact Stats Queries
export const useImpactStats = () => {
  return useQuery({
    queryKey: ['impact-stats'],
    queryFn: api.fetchImpactStats,
  });
};

// Contact Info Queries
export const useContactInfo = () => {
  return useQuery({
    queryKey: ['contact-info'],
    queryFn: api.fetchContactInfo,
  });
};

// Social Links Queries
export const useSocialLinks = () => {
  return useQuery({
    queryKey: ['social-links'],
    queryFn: api.fetchSocialLinks,
  });
};