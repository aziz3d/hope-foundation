import React from 'react';
// import { organizationInfo } from '../data/mockData';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-hero text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <div className="mt-8 text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Information We Collect */}
            <div className="mb-16">
              <h2 className="heading-section text-gray-900 mb-8 pb-4 border-b-2 border-blue-100">Information We Collect</h2>
              
              <div className="mb-8">
                <h3 className="heading-card text-gray-900 mb-4">Personal Information</h3>
                <p className="text-body text-gray-600 leading-relaxed mb-4">
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-6 text-body text-gray-600">
                  <li>Make a donation or contribution</li>
                  <li>Sign up for our newsletter</li>
                  <li>Apply to volunteer</li>
                  <li>Contact us through our website</li>
                  <li>Participate in surveys or feedback forms</li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="heading-card text-gray-900 mb-4">Automatically Collected Information</h3>
                <p className="text-body text-gray-600 leading-relaxed">
                  When you visit our website, we automatically collect certain information about your device and usage patterns, including IP address, browser type, operating system, referring URLs, and pages visited.
                </p>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-16">
              <h2 className="heading-section text-gray-900 mb-8 pb-4 border-b-2 border-blue-100">How We Use Your Information</h2>
              <p className="text-body text-gray-600 leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-6 text-body text-gray-600">
                <li>Process donations and maintain donor records</li>
                <li>Send newsletters and updates about our programs</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations and tax requirements</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-16">
              <h2 className="heading-section text-gray-900 mb-8 pb-4 border-b-2 border-blue-100">Information Sharing and Disclosure</h2>
              <p className="text-body text-gray-600 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-6 text-body text-gray-600">
                <li>With service providers who assist us in operating our website and conducting our business</li>
                <li>When required by law or to protect our rights and safety</li>
                <li>In connection with a merger, acquisition, or sale of assets</li>
                <li>With your explicit consent</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-16">
              <h2 className="heading-section text-gray-900 mb-8 pb-4 border-b-2 border-blue-100">Data Security</h2>
              <p className="text-body text-gray-600 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p className="text-body text-gray-600 leading-relaxed">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-16">
              <h2 className="heading-section text-gray-900 mb-8 pb-4 border-b-2 border-blue-100">Your Rights and Choices</h2>
              <p className="text-body text-gray-600 leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-6 text-body text-gray-600">
                <li>Access and update your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Request data portability</li>
              </ul>
              <p className="text-body text-gray-600 leading-relaxed mt-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-16">
              <h2 className="heading-section text-gray-900 mb-8 pb-4 border-b-2 border-blue-100">Cookies and Tracking Technologies</h2>
              <p className="text-body text-gray-600 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us remember your preferences and improve our services.
              </p>
              <p className="text-body text-gray-600 leading-relaxed">
                You can control cookies through your browser settings, but disabling cookies may affect the functionality of our website.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-16 p-8 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl border-l-4 border-blue-500">
              <h2 className="heading-section text-gray-900 mb-6">Contact Us</h2>
              <p className="text-body text-gray-600 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-body text-gray-700">
                <p><strong>Email:</strong> privacy@afhope.org</p>
                <p><strong>Phone:</strong> +1 (555) 123-HOPE</p>
                <p><strong>Address:</strong> 123 Hope Street, Community Center, New York, NY 10001</p>
              </div>
            </div>

            {/* Changes to Policy */}
            <div className="mb-16">
              <h2 className="heading-section text-gray-900 mb-8 pb-4 border-b-2 border-blue-100">Changes to This Policy</h2>
              <p className="text-body text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;