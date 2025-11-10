import React, { useEffect } from 'react';
import { useSeo } from '../hooks/useSeo';
import { posts } from '../data/posts';
import BlogPostCard from '../components/BlogPostCard';
import { Link, useLocation } from 'react-router-dom';

const HomePage: React.FC = () => {
  useSeo(
    'IgnitePress - Modern React & Tailwind Blog Template',
    'A feature-rich, modern, and fast blog template built with React and Tailwind CSS. Perfect for writers, developers, and creators.'
  );

  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#subscribe') {
      document.getElementById('subscribe')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const featuredPosts = posts.slice(0, 3);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement;
    if (emailInput && emailInput.value) {
      alert(`Thank you for subscribing! Check ${emailInput.value} for updates.`);
      form.reset();
    }
  };

  const handleScrollToSubscribe = () => {
    document.getElementById('subscribe')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative text-center py-24 md:py-32 px-5 overflow-hidden bg-light dark:bg-dark">
        <div className="absolute top-0 left-0 w-full h-full bg-hero-shape bg-cover bg-no-repeat bg-center opacity-50 dark:opacity-100"></div>
        <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-dark to-primary dark:from-light dark:to-primary">
                Share Your Voice.
                <br />
                Build Your Audience.
                </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-DEFAULT dark:text-gray-300 mb-10">
                A feature-rich, modern, and fast blog template perfect for writers, developers, and creators.
            </p>
            <button
                onClick={handleScrollToSubscribe}
                className="inline-block bg-primary text-white text-lg font-bold px-10 py-5 rounded-full hover:bg-primary-dark transition-all duration-300 shadow-2xl shadow-primary/40 hover:shadow-2xl hover:shadow-primary/50 transform hover:-translate-y-1 animate-pulse-strong"
            >
                Start Publishing
            </button>
        
            <div className="flex justify-center flex-wrap gap-8 md:gap-16 mt-16">
                <div className="stat">
                    <h3 className="text-4xl font-black text-primary">250+</h3>
                    <p className="text-sm uppercase tracking-widest text-gray-DEFAULT dark:text-gray-400 mt-1">Articles Published</p>
                </div>
                <div className="stat">
                    <h3 className="text-4xl font-black text-primary">50K+</h3>
                    <p className="text-sm uppercase tracking-widest text-gray-DEFAULT dark:text-gray-400 mt-1">Monthly Readers</p>
                </div>
                <div className="stat">
                    <h3 className="text-4xl font-black text-primary">4.9★</h3>
                    <p className="text-sm uppercase tracking-widest text-gray-DEFAULT dark:text-gray-400 mt-1">Reader Rating</p>
                </div>
            </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section id="articles" className="py-16 md:py-24 bg-white dark:bg-gray-darker px-5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-dark dark:text-light relative inline-block">
              Latest Articles
              <span className="block w-20 h-1 bg-primary mt-2 mx-auto rounded-full"></span>
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.map((post, index) => (
              <BlogPostCard key={post.id} post={post} index={index} />
            ))}
          </div>
          <div className="text-center mt-12">
             <Link to="/articles" className="inline-block bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30">
                View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="subscribe" className="py-20 bg-gradient-to-r from-dark to-gray-900 text-white text-center px-5">
        <h2 className="text-4xl font-black mb-4">Get Updates in Your Inbox</h2>
        <p className="max-w-xl mx-auto mb-10 text-white/80 text-lg">
          Subscribe to the newsletter for new articles and exclusive content.
        </p>
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row max-w-md mx-auto bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/20">
          <input type="email" placeholder="Enter your email" required className="flex-1 p-4 px-6 bg-transparent text-white placeholder:text-white/60 focus:outline-none text-center sm:text-left" />
          <button type="submit" className="bg-primary text-white px-8 font-bold hover:bg-white hover:text-primary transition-all duration-300 py-4 sm:py-0">
            Subscribe
          </button>
        </form>
      </section>
    </>
  );
};

export default HomePage;