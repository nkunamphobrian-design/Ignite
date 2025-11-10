import React from 'react';
import { useSeo } from '../hooks/useSeo';
import { posts } from '../data/posts';
import { Link, useNavigate } from 'react-router-dom';

const StartHerePage: React.FC = () => {
  useSeo('Start Here | IgnitePress', 'Welcome to IgnitePress! Find out what this template is all about and where to begin.');
  const navigate = useNavigate();

  const recommendedPosts = posts.slice(0, 3);
  
  const handleSubscribeClick = () => {
      navigate('/#subscribe');
  };

  return (
    <div className="bg-white dark:bg-gray-darker py-12 md:py-20">
      <div className="container mx-auto px-5">
        <article className="max-w-3xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-dark dark:text-light tracking-tight leading-tight">Welcome to IgnitePress</h1>
            <p className="mt-4 text-lg text-gray dark:text-gray-300">Your journey to building a stunning blog starts here.</p>
          </header>

          <div className="text-lg text-dark/80 dark:text-light/80 leading-loose space-y-6">
            <p>
              We believe that great content deserves a beautiful home. That's why we created IgnitePress, a template designed to make your writing shine and provide your readers with an exceptional experience.
            </p>
            <p>
              This blog is a collection of actionable insights and science-backed strategies on productivity, creativity, and mindset. We cut through the noise to give you practical advice you can apply immediately to your life and work.
            </p>
            <p>
              If you're new here, we recommend starting with some of our most popular articles. They lay the foundation for the kind of content this template is perfect for:
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-dark dark:text-light mb-6">Recommended Reading</h2>
            <div className="space-y-4">
              {recommendedPosts.map(post => (
                <Link 
                  key={post.id}
                  to={`/post/${post.slug}`}
                  className="block p-4 border border-gray-light dark:border-gray-dark rounded-lg hover:border-primary hover:bg-primary/5 transition-all"
                >
                  <h3 className="font-bold text-primary">{post.title}</h3>
                  <p className="text-sm text-gray dark:text-gray-400">{post.summary}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center bg-gray-light dark:bg-gray-darker p-8 rounded-xl">
             <h2 className="text-2xl font-bold text-dark dark:text-light mb-4">Join the Community</h2>
             <p className="text-gray dark:text-gray-300 mb-6">Get new articles and exclusive content in your inbox every week. No spam, ever.</p>
             <button 
                onClick={handleSubscribeClick}
                className="inline-block bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30"
              >
                Subscribe Now
              </button>
          </div>

        </article>
      </div>
    </div>
  );
};

export default StartHerePage;