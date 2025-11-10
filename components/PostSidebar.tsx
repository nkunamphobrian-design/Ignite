import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

const PostSidebar: React.FC = () => {
  // Assuming posts are sorted by date, newest first.
  const recentPosts = posts.slice(0, 4);

  return (
    <div className="sticky top-28">
      <div className="bg-gray-light/50 dark:bg-gray-dark/50 p-6 rounded-xl">
        <h3 className="text-xl font-bold text-dark dark:text-light mb-6 border-b-2 border-primary/50 pb-3">
          Recent Posts
        </h3>
        <ul className="space-y-5">
          {recentPosts.map(post => (
            <li key={post.id}>
              <Link to={`/post/${post.slug}`} className="group flex items-start gap-4">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-20 h-20 object-cover rounded-lg flex-shrink-0" 
                />
                <div>
                  <h4 className="font-bold text-dark dark:text-light group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h4>
                  <p className="text-xs text-gray dark:text-gray-400 mt-1">{post.date}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostSidebar;
