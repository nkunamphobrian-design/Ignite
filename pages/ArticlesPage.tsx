import React, { useState, useMemo, useEffect } from 'react';
import { posts } from '../data/posts';
import BlogPostCard from '../components/BlogPostCard';
import { useSeo } from '../hooks/useSeo';
import { useLocation } from 'react-router-dom';

const POSTS_PER_PAGE = 6;

const ArticlesPage: React.FC = () => {
  useSeo(
    'Articles | IgnitePress', 
    'Browse all articles. Search, filter, and find inspiration on a variety of topics.'
  );

  const [searchTerm, setSearchTerm] = useState('');
  const [activeTag, setActiveTag] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  
  const location = useLocation();
  useEffect(() => {
    if (location.hash === '#subscribe') {
      document.getElementById('subscribe')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const allTags = useMemo(() => ['All', ...new Set(posts.flatMap(p => p.tags))], []);

  const filteredPosts = useMemo(() => {
    return posts
      .filter(post => {
        if (searchTerm.trim() === '') return true;
        const searchLower = searchTerm.toLowerCase();
        return (
          post.title.toLowerCase().includes(searchLower) ||
          post.summary.toLowerCase().includes(searchLower)
        );
      })
      .filter(post => {
        if (activeTag === 'All') return true;
        return post.tags.includes(activeTag);
      });
  }, [searchTerm, activeTag]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const paginatedPosts = useMemo(() => {
      const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
      return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);
  
  useEffect(() => {
      setCurrentPage(1);
  }, [searchTerm, activeTag]);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement;
    if (emailInput && emailInput.value) {
      alert(`Thank you for subscribing! Check ${emailInput.value} for updates.`);
      form.reset();
    }
  };

  return (
    <>
      <section id="articles" className="py-16 md:py-20 px-5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-dark dark:text-light">All Articles</h1>
            <p className="text-lg text-gray dark:text-gray-300 mt-2">Find inspiration to build your momentum.</p>
          </div>
          
          {/* Sticky Search and Filter */}
          <div className="sticky top-20 z-30 py-6 bg-light/95 dark:bg-dark/95 backdrop-blur-lg -mx-5 px-5 mb-12 border-b border-gray-light dark:border-gray-dark">
            <div className="container mx-auto space-y-8">
              <div className="relative max-w-lg mx-auto">
                <input 
                  type="search"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-4 pl-12 rounded-full bg-white dark:bg-gray-darker border border-gray-light dark:border-gray-dark focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <i className="fas fa-search absolute left-5 top-1/2 -translate-y-1/2 text-gray dark:text-gray-400"></i>
              </div>
              <div className="flex justify-center flex-wrap gap-3">
                {allTags.map(tag => (
                  <button 
                    key={tag}
                    onClick={() => setActiveTag(tag)}
                    className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${activeTag === tag ? 'bg-primary text-white' : 'bg-gray-light text-gray-DEFAULT dark:bg-gray-dark dark:text-gray-300 hover:bg-primary/20'}`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {paginatedPosts.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {paginatedPosts.map((post, index) => (
                <BlogPostCard key={post.id} post={post} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
                <p className="text-2xl font-bold">No articles found.</p>
                <p className="text-gray dark:text-gray-300 mt-2">Try adjusting your search or filters.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-16">
              <button 
                onClick={() => setCurrentPage(p => Math.max(1, p-1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg bg-white dark:bg-gray-darker disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <span className="font-semibold">Page {currentPage} of {totalPages}</span>
               <button 
                onClick={() => setCurrentPage(p => Math.min(totalPages, p+1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg bg-white dark:bg-gray-darker disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          )}
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

export default ArticlesPage;