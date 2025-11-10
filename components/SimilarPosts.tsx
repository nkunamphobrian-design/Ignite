import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { Post } from '../types';

interface SimilarPostsProps {
  currentPost: Post;
}

const SimilarPosts: React.FC<SimilarPostsProps> = ({ currentPost }) => {
  const similar = posts.filter(post => 
    post.slug !== currentPost.slug &&
    post.tags.some(tag => currentPost.tags.includes(tag))
  ).slice(0, 3);

  if (similar.length === 0) {
    return null;
  }

  return (
    <div className="mt-16 pt-12 border-t border-gray-light dark:border-gray-dark">
      <h2 className="text-3xl font-black text-dark dark:text-light mb-8">You Might Also Like</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {similar.map(post => {
          const readingTime = Math.ceil(post.content.split(' ').length / 200);
          return (
            <Link key={post.id} to={`/post/${post.slug}`} className="block group">
              <div className="overflow-hidden rounded-xl">
                 <img 
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" 
                  src={post.imageUrl} 
                  alt={post.title} 
                />
              </div>
              <div className="pt-4">
                <p className="text-xs text-gray dark:text-gray-400 uppercase font-semibold mb-2">{post.tags[0]}</p>
                <h3 className="text-lg font-bold text-dark dark:text-light group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  );
};

export default SimilarPosts;
