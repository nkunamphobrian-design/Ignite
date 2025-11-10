import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { useSeo } from '../hooks/useSeo';
import BlogPostCard from '../components/BlogPostCard';

const CategoryPage: React.FC = () => {
  const { tag } = useParams<{ tag: string }>();
  
  const filteredPosts = posts.filter(post => 
    post.tags.some(postTag => postTag.toLowerCase() === tag?.toLowerCase())
  );

  const capitalizedTag = tag ? tag.charAt(0).toUpperCase() + tag.slice(1) : 'Category';

  useSeo(`${capitalizedTag} Articles | IgnitePress`, `Browse all articles tagged with "${capitalizedTag}".`);

  return (
    <div className="py-12 md:py-20 px-5">
      <div className="container mx-auto">
        <header className="mb-12 max-w-3xl mx-auto">
          <div className="mb-4">
            <Link to="/articles" className="text-primary hover:text-primary-dark font-bold transition-colors inline-flex items-center gap-2">
              <i className="fas fa-arrow-left"></i> Back to all articles
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-dark dark:text-light tracking-tight leading-tight">
            Category: <span className="text-primary">{capitalizedTag}</span>
          </h1>
        </header>

        {filteredPosts.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, index) => (
              <BlogPostCard key={post.id} post={post} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center max-w-3xl mx-auto py-16 bg-white dark:bg-gray-darker rounded-xl shadow-lg">
            <p className="text-2xl font-bold text-dark dark:text-light">No articles found for this category yet.</p>
            <p className="text-gray dark:text-gray-300 mt-2">Check back soon for new content!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;