import React from 'react';
import { useSeo } from '../hooks/useSeo';
import { Link } from 'react-router-dom';

const PrivacyPage: React.FC = () => {
  useSeo('Privacy Policy | IgnitePress', 'Read our privacy policy to understand how we handle your data.');

  return (
    <div className="bg-white dark:bg-gray-darker py-12 md:py-20">
      <div className="container mx-auto px-5">
        <article className="max-w-3xl mx-auto">
          <header className="mb-8">
             <div className="mb-4">
              <Link to="/" className="text-primary hover:text-primary-dark font-bold transition-colors inline-flex items-center gap-2">
                <i className="fas fa-arrow-left"></i> Back to home
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-dark dark:text-light tracking-tight leading-tight">Privacy Policy</h1>
            <p className="mt-2 text-gray dark:text-gray-400">Last updated: July 1, 2024</p>
          </header>

          <div className="text-lg text-dark/80 dark:text-light/80 leading-loose space-y-6 prose dark:prose-invert">
            <p>Welcome to IgnitePress (the "Website"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.</p>
            
            <h2 className="text-2xl font-bold text-dark dark:text-light pt-4">1. Information We Collect</h2>
            <p>We collect personal information that you voluntarily provide to us when you subscribe to our newsletter, express an interest in obtaining information about us or our products and services, when you participate in activities on the Website or otherwise when you contact us.</p>
            
            <h2 className="text-2xl font-bold text-dark dark:text-light pt-4">2. How We Use Your Information</h2>
            <p>We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>

            <h2 className="text-2xl font-bold text-dark dark:text-light pt-4">3. Will Your Information Be Shared?</h2>
            <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not sell your data.</p>
            
            <h2 className="text-2xl font-bold text-dark dark:text-light pt-4">4. Cookies and Other Tracking Technologies</h2>
            <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy.</p>
            
            <h2 className="text-2xl font-bold text-dark dark:text-light pt-4">5. Policy Updates</h2>
            <p>We may update this privacy policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.</p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default PrivacyPage;