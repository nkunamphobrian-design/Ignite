import React from 'react';
import { Post } from '../types';

interface BlogPostCardProps {
  post: Post;
  index: number;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, index }) => {
  const readingTime = Math.ceil(post.content.split(' ').length / 200);

  return (
    <div style={{ animationDelay: `${index * 100}ms` }} className="animate-fade-in-up">
      <a href={`#/post/${post.slug}`} className="block group bg-white dark:bg-gray-darker rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-light dark:border-gray-dark transform hover:-translate-y-2">
        <article>
          <div className="h-52 overflow-hidden">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              src={post.imageUrl} 
              alt={post.title} 
            />
          </div>
          <div className="p-6">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-3 text-xs text-gray dark:text-gray-400 uppercase font-semibold tracking-wider">
              <span><i className="fas fa-calendar-alt mr-1.5 opacity-70"></i> {post.date}</span>
              <span><i className="fas fa-clock mr-1.5 opacity-70"></i> {readingTime} min read</span>
              {post.tags[0] && <span><i className="fas fa-tag mr-1.5 opacity-70"></i> {post.tags[0]}</span>}
            </div>
            <h3 className="text-xl font-bold text-dark dark:text-light group-hover:text-primary transition-colors duration-300 mb-2 leading-tight">
              {post.title}
            </h3>
            <p className="text-gray-DEFAULT dark:text-gray-300 text-sm mb-4 leading-relaxed">
              {post.summary}
            </p>
            <div className="inline-flex items-center gap-2 font-bold text-primary group-hover:gap-3 transition-all duration-300">
              Read Now <i className="fas fa-arrow-right"></i>
            </div>
          </div>
        </article>
      </a>
    </div>
  );
};

export default BlogPostCard;