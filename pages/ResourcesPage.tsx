import React from 'react';
import { useSeo } from '../hooks/useSeo';

const ResourcesPage: React.FC = () => {
  useSeo('Resources | Momentum Blog', 'Download our free workbooks and join the community.');

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mx-auto text-center">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-dark dark:text-light tracking-tight leading-tight">Tools for Momentum</h1>
            <p className="mt-4 text-lg text-gray dark:text-gray-300">Actionable resources to help you apply what you've learned.</p>
          </header>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white dark:bg-gray-darker p-8 rounded-xl shadow-lg">
              <i className="fas fa-book text-4xl text-primary mb-4"></i>
              <h2 className="text-2xl font-bold text-dark dark:text-light mb-2">Free Workbook</h2>
              <p className="text-gray dark:text-gray-300 mb-6">A downloadable PDF guide to help you identify your goals, break them down, and start building your momentum flywheel today.</p>
              <button disabled className="w-full bg-gray-light dark:bg-gray-dark text-gray dark:text-gray-400 font-bold px-6 py-3 rounded-full cursor-not-allowed">
                Coming Soon
              </button>
            </div>
            <div className="bg-white dark:bg-gray-darker p-8 rounded-xl shadow-lg">
              <i className="fas fa-users text-4xl text-primary mb-4"></i>
              <h2 className="text-2xl font-bold text-dark dark:text-light mb-2">Private Community</h2>
              <p className="text-gray dark:text-gray-300 mb-6">Join our private Slack or Discord channel to connect with like-minded individuals, share your progress, and get accountability.</p>
               <button disabled className="w-full bg-gray-light dark:bg-gray-dark text-gray dark:text-gray-400 font-bold px-6 py-3 rounded-full cursor-not-allowed">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;