import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { useSeo } from '../hooks/useSeo';
import NotFoundPage from './NotFoundPage';
import PostSidebar from '../components/PostSidebar';
import SimilarPosts from '../components/SimilarPosts';
import SocialShare from '../components/SocialShare';

const PostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find(p => p.slug === slug);

  useSeo(
    post ? `${post.title} | IgnitePress` : 'Post Not Found',
    post ? post.summary : 'The blog post you are looking for could not be found.'
  );

  if (!post) {
    return <NotFoundPage />;
  }

  return (
    <div className="bg-white dark:bg-gray-darker py-12 md:py-20">
      <div className="container mx-auto px-5">
        <div className="mb-8">
            <Link to="/articles" className="text-primary hover:text-primary-dark font-bold transition-colors inline-flex items-center gap-2">
              <i className="fas fa-arrow-left"></i> Back to all articles
            </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
          {/* Main Content */}
          <article className="w-full lg:w-[calc(66.66%-2rem)]">
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4 text-sm text-gray dark:text-gray-400 uppercase">
                  <span><i className="fas fa-calendar-alt mr-1.5 opacity-70"></i> {post.date}</span>
                  <span><i className="fas fa-user mr-1.5 opacity-70"></i> By {post.author}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-dark dark:text-light tracking-tight leading-tight">{post.title}</h1>
            </header>

            <SocialShare post={post} />

            <img 
              className="w-full aspect-video object-cover rounded-xl shadow-2xl my-8"
              src={post.imageUrl} 
              alt={post.title} 
            />

            <div className="text-lg text-dark/80 dark:text-light/80 leading-loose space-y-6 prose dark:prose-invert max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>

            <SimilarPosts currentPost={post} />
          </article>

          {/* Sidebar */}
          <aside className="w-full lg:w-1/3">
             <PostSidebar />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
