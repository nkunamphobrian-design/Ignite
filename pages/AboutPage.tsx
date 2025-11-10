import React from 'react';
import { useSeo } from '../hooks/useSeo';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  useSeo('About | IgnitePress', 'Learn about the mission and story behind the IgnitePress template.');

  return (
    <div className="bg-white dark:bg-gray-darker py-12 md:py-20">
      <div className="container mx-auto px-5">
        <article className="max-w-3xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-dark dark:text-light tracking-tight leading-tight">Our Mission</h1>
            <p className="mt-4 text-lg text-gray dark:text-gray-300">We're here to help you share your voice with the world.</p>
          </header>

          <img 
            className="w-full aspect-video object-cover rounded-xl shadow-2xl mb-12"
            src="https://picsum.photos/seed/about/1200/800" 
            alt="Team working together" 
          />

          <div className="text-lg text-dark/80 dark:text-light/80 leading-loose space-y-6">
            <p>
              IgnitePress was founded on a simple but powerful idea: <strong className="font-bold text-dark dark:text-white">great design should be accessible to everyone.</strong> In a world where first impressions are everything, we wanted to create a blog template that was not only beautiful and modern but also incredibly fast and easy to use.
            </p>
            <p>
              We felt overwhelmed by slow, bloated, and complicated themes. We wanted to build something different—a template that was lightweight, focused on readability, and packed with the features that matter most to content creators.
            </p>
            <p>
              Our goal is to provide you with a clear, professional, and high-performing platform to build your audience. Whether you're an artist, an entrepreneur, a developer, or simply someone who wants to share their passion, IgnitePress gives you the tools you need to succeed.
            </p>
            <p>
              Thank you for choosing IgnitePress. Let's build something amazing.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/contact" 
              className="inline-block bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30"
            >
              Get In Touch
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
};

export default AboutPage;