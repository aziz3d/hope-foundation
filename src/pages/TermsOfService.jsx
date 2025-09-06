import React from 'react';
import { organizationInfo } from '../data/mockData';

const TermsOfService = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-hero text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These terms govern your use of our website and services. Please read them carefully.
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
            
            {/* Acceptance of Terms */}
            <div className="mb-16">
              <h2 className="heading-section text-gray-900 mb-8 pb-4 border-b-2 border-purple-100">Acceptance of Terms</h2>
              <p className="text-body text-gray-600 leading-relaxed mb-4">
                By accessing and using the {organizationInfo.name} website and services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
              <p className="text-body text-gray-600 leading-relaxed">
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            {/* Use License */}
            <div className="mb-16">
              <h2 className="heading-section text-gray-900 mb-8 pb-4 border-b-2 border-purple-100">Use License</h2>
              <p className="text-body text-gray-600 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials on {organizationInfo.name}'s website for personal, non-commercial transitory viewing only.
              </p>
              <p className="text-body text-gray-600 leading-relaxed mb-4">This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc list-inside space-y-2 ml-6 text-body text-gray-600">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                <li>attempt to decompile or reverse engineer any software contained on the website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>

            {/* Donations and Contributions */}
            <div className="mb-16">
              <h2 className="heading-section text-gray-900 mb-8 pb-4 border-b-2 border-purple-100">Donations and Contributions</h2>
              
              <div className="mb-8">
                <h3 className="heading-card text-gray-900 mb-4">Donation Policy</h3>
                <ul className="list-disc list-inside space-y-2 ml-6 text-body text-gray-600">
                  <li>All donations are voluntary and non-refundable unless required by law</li>
                  <li>Donations are used to support our charitable programs and operations</li>
                  <li>We provide tax-deductible receipts for eligible donations</li>
                  <li>Donors may request information about how their contributions are used</li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="heading-card text-gray-900 mb-4">Recurring Donations</h3>
                <p className="text-body text-gray-600 leading-relaxed">
                  For recurring donations, you authorize us to charge your payment method on a recurring basis. You may cancel recurring donations at any time by contacting us.
                </p>
              </div>
            </div>

            {/* User Conduct */}
            <div className="mb-16">
              <h2 className="heading-section text-gray-900 mb-8 pb-4 border-b-2 border-purple-100">User Conduct</h2>
              <p className="text-body text-gray-600 leading-relaxed mb-4">You agree not to use our website or services to:</p>
              <ul className="list-disc list-inside space-y-2 ml-6 text-body text-gray-600">
                <li>Violate any applicable laws or regulations</li>
                <li>Transmit any harmful, threatening, or offensive content</li>
                <li>Impersonate any person or entity</li>
                <li>Interfere with or disrupt our services</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Collect or harvest personal information of other users</li>
              </ul>
            </div>

            {/* Volunteer Services */}
            <div className="mb-16">
              <h2 className="heading-section text-gray-900 mb-8 pb-4 border-b-2 border-purple-100">Volunteer Services</h2>
              <p className="text-body text-gray-600 leading-relaxed mb-4">
                Volunteer opportunities are subject to availability and our approval process. We reserve the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-6 text-body text-gray-600">
                <li>Accept or decline volunteer applications at our discretion</li>
                <li>Require background checks and other screening procedures</li>
                <li>Terminate volunteer relationships at any time</li>
                <li>Modify volunteer roles and responsibilities as needed</li>
              </ul>
              <p className="text-body text-gray-600 leading-relaxed mt-4">
                Volunteers are expected to comply with our policies and code of conduct.
              </p>
            </div>

            {/* Disclaimer */}
            <div className="mb-16">
              <h2 className="heading-section text-gray-900 mb-8 pb-4 border-b-2 border-purple-100">Disclaimer</h2>
              <p className="text-body text-gray-600 leading-relaxed mb-4">
                The materials on {organizationInfo.name}'s website are provided on an 'as is' basis. {organizationInfo.name} makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p className="text-body text-gray-600 leading-relaxed">
                Further, {organizationInfo.name} does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
              </p>
            </div>

            {/* Limitations */}
            <div className="mb-16">
              <h2 className="heading-section text-gray-900 mb-8 pb-4 border-b-2 border-purple-100">Limitations</h2>
              <p className="text-body text-gray-600 leading-relaxed">
                In no event shall {organizationInfo.name} or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on {organizationInfo.name}'s website, even if {organizationInfo.name} or a {organizationInfo.name} authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-16">
              <h2 className="heading-section text-gray-900 mb-8 pb-4 border-b-2 border-purple-100">Governing Law</h2>
              <p className="text-body text-gray-600 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of New York, United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-16 p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border-l-4 border-purple-500">
              <h2 className="heading-section text-gray-900 mb-6">Contact Us</h2>
              <p className="text-body text-gray-600 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-body text-gray-700">
                <p><strong>Email:</strong> legal@afhope.org</p>
                <p><strong>Phone:</strong> +1 (555) 123-HOPE</p>
                <p><strong>Address:</strong> 123 Hope Street, Community Center, New York, NY 10001</p>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="mb-16">
              <h2 className="heading-section text-gray-900 mb-8 pb-4 border-b-2 border-purple-100">Changes to Terms</h2>
              <p className="text-body text-gray-600 leading-relaxed">
                {organizationInfo.name} may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;