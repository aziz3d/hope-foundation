// Mock data AF Hope Foundation

export const organizationInfo = {
  name: "Hope Foundation",
  tagline: "Empowering Communities, Creating Hope",
  mission: "To create lasting positive change in underserved communities through education, healthcare, and sustainable development programs.",
  vision: "A world where every individual has access to opportunities that enable them to thrive and contribute to their community's growth.",
  founded: "2018",
  beneficiaries: "5000+",
  volunteers: "2500+",
  projects: "150+"
};

export const teamMembers = [
  {
    id: 1,
    name: "Aziz Khan",
    role: "Founder & Executive Director",
    image: "/images/none-profit_2.jpg",
    bio: "Passionate web developer with 15+ years of experience in web development and graphic design.",
    email: "sunrise300@gmail.com"
  },
  {
    id: 2,
    name: "Sarah",
    role: "Program Director",
    image: "/images/none-profit_3.jpg",
    bio: "Expert in program development and implementation with a focus on education and youth empowerment initiatives.",
    email: "sarah@afhope.org"
  },
  {
    id: 3,
    name: "Michael",
    role: "Operations Manager",
    image: "/images/none-profit_4.jpg",
    bio: "Strategic operations leader ensuring efficient resource allocation and program delivery across all initiatives.",
    email: "michael@afhope.org"
  },
  {
    id: 4,
    name: "Dr. Amara",
    role: "Healthcare Coordinator",
    image: "/images/none-profit_5.jpg",
    bio: "Medical professional dedicated to improving healthcare access in underserved communities worldwide.",
    email: "amara@afhope.org"
  }
];

export const projects = [
  {
    id: 1,
    title: "Clean Water Initiative",
    description: "Providing access to clean, safe drinking water in rural communities through well construction and water purification systems.",
    image: "/images/none-profit_6.jpg",
    status: "active",
    progress: 75,
    goal: 50000,
    raised: 37500,
    beneficiaries: 2500,
    location: "Rural Afghanistan",
    category: "Infrastructure"
  },
  {
    id: 2,
    title: "Education for All",
    description: "Building schools and providing educational resources to ensure every child has access to quality education.",
    image: "/images/none-profit_7.jpg",
    status: "active",
    progress: 60,
    goal: 75000,
    raised: 45000,
    beneficiaries: 1200,
    location: "Afghanistan",
    category: "Education"
  },
  {
    id: 3,
    title: "Healthcare Mobile Clinics",
    description: "Bringing essential healthcare services to remote areas through mobile medical units and trained professionals.",
    image: "/images/none-profit_8.jpg",
    status: "active",
    progress: 85,
    goal: 40000,
    raised: 34000,
    beneficiaries: 3000,
    location: "Rural Afghanistan",
    category: "Healthcare"
  },
  {
    id: 4,
    title: "Sustainable Agriculture",
    description: "Teaching sustainable farming techniques and providing tools to help communities achieve food security.",
    image: "/images/none-profit_9.jpg",
    status: "completed",
    progress: 100,
    goal: 30000,
    raised: 30000,
    beneficiaries: 800,
    location: "Guatemala",
    category: "Agriculture"
  },
  {
    id: 5,
    title: "Women's Empowerment Program",
    description: "Providing skills training and microfinance opportunities to empower women in developing communities.",
    image: "/images/none-profit_10.jpg",
    status: "active",
    progress: 45,
    goal: 60000,
    raised: 27000,
    beneficiaries: 1500,
    location: "Nigeria",
    category: "Empowerment"
  },
  {
    id: 6,
    title: "Emergency Relief Fund",
    description: "Rapid response support for communities affected by natural disasters and humanitarian crises.",
    image: "/images/none-profit_11.jpg",
    status: "active",
    progress: 30,
    goal: 100000,
    raised: 30000,
    beneficiaries: 5000,
    location: "Global",
    category: "Emergency"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Maria Santos",
    role: "Community Leader",
    location: "Guatemala",
    image: "/images/none-profit_12.jpg",
    quote: "The sustainable agriculture program has transformed our entire village. We now have food security and can support our families year-round.",
    project: "Sustainable Agriculture"
  },
  {
    id: 2,
    name: "James Kimani",
    role: "Village Elder",
    location: "Afghanistan",
    image: "/images/none-profit_13.jpg",
    quote: "Clean water has changed everything for us. Our children are healthier, and women can focus on education instead of walking miles for water.",
    project: "Clean Water Initiative"
  },
  {
    id: 3,
    name: "Dr. Priya Sharma",
    role: "Local Healthcare Worker",
    location: "Afghanistan",
    image: "/images/none-profit_14.jpg",
    quote: "The mobile clinics have been a lifeline for our remote communities. We can now provide essential healthcare to those who need it most.",
    project: "Healthcare Mobile Clinics"
  }
];

export const volunteerOpportunities = [
  {
    id: 1,
    title: "Field Coordinator",
    location: "Afghanistan",
    duration: "6 months",
    description: "Lead project implementation and coordinate with local communities for the Clean Water Initiative.",
    requirements: ["Project management experience", "Willingness to relocate", "Cross-cultural communication skills"],
    type: "Full-time"
  },
  {
    id: 2,
    title: "Education Specialist",
    location: "Afghanistan",
    duration: "3 months",
    description: "Develop curriculum and train local teachers for our Education for All program.",
    requirements: ["Teaching experience", "Curriculum development", "English proficiency"],
    type: "Part-time"
  },
  {
    id: 3,
    title: "Medical Volunteer",
    location: "Afghanistan",
    duration: "2 weeks",
    description: "Provide medical care and health education through our mobile clinic program.",
    requirements: ["Medical license", "Tropical medicine experience preferred", "Flexibility"],
    type: "Short-term"
  },
  {
    id: 4,
    title: "Digital Marketing Specialist",
    location: "Remote",
    duration: "Ongoing",
    description: "Help spread awareness about our mission through social media and digital campaigns.",
    requirements: ["Digital marketing experience", "Social media expertise", "Passion for social causes"],
    type: "Remote"
  }
];

export const donationTiers = [
  {
    amount: 25,
    title: "Hope Supporter",
    description: "Provides clean water for one person for an entire month",
    impact: "1 person with clean water access",
    popular: false
  },
  {
    amount: 50,
    title: "Community Helper",
    description: "Funds educational materials for 5 children for one semester",
    impact: "5 children with learning resources",
    popular: true
  },
  {
    amount: 100,
    title: "Change Maker",
    description: "Supports a family's healthcare needs for 3 months",
    impact: "1 family with healthcare access",
    popular: false
  },
  {
    amount: 250,
    title: "Hope Champion",
    description: "Funds a complete water purification system for a small community",
    impact: "50 people with permanent clean water",
    popular: false
  }
];

export const impactStats = [
  {
    number: "50,000+",
    label: "Lives Impacted",
    description: "People whose lives have been improved through our programs"
  },
  {
    number: "150+",
    label: "Projects Completed",
    description: "Successful initiatives across 25 countries"
  },
  {
    number: "2,500+",
    label: "Active Volunteers",
    description: "Dedicated individuals making a difference"
  },
  {
    number: "95%",
    label: "Funds to Programs",
    description: "Of every dollar goes directly to our mission"
  }
];

export const contactInfo = {
  address: "123 Hope Street, Community Center, New York, NY 10001",
  phone: "+1 (555) 123-HOPE",
  email: "sunrise300@gmail.com",
  coordinates: {
    lat: 40.7128,
    lng: -74.0060
  }
};

export const socialLinks = [
  {
    platform: "Facebook",
    url: "https://facebook.com/afhopefoundation",
    icon: "facebook"
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/afhopefoundation",
    icon: "twitter"
  },
  {
    platform: "Instagram",
    url: "https://instagram.com/afhopefoundation",
    icon: "instagram"
  }
];