import React from 'react';
import { useSeo } from '../hooks/useSeo';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  useSeo('404: Page Not Found | IgnitePress', 'The page you are looking for does not exist.');

  return (
    <div className="text-center py-24 px-5">
      <h1 className="text-8xl font-black text-primary">404</h1>
      <h2 className="mt-4 text-4xl font-bold text-dark dark:text-light tracking-tight sm:text-5xl">Page Not Found</h2>
      <p className="mt-6 text-lg text-gray dark:text-gray-300">Sorry, we couldn’t find the page you’re looking for.</p>
      <div className="mt-10">
        <Link 
          to="/" 
          className="inline-block bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;