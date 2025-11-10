import React, { useState } from 'react';
import { Post } from '../types';

interface SocialShareProps {
  post: Post;
}

const SocialShare: React.FC<SocialShareProps> = ({ post }) => {
  const [copied, setCopied] = useState(false);
  
  const url = window.location.href;
  const title = post.title;

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const iconClasses = "w-10 h-10 rounded-full flex items-center justify-center text-lg bg-gray-light dark:bg-gray-dark text-gray-DEFAULT dark:text-gray-300 hover:bg-primary hover:text-white transition-all transform hover:scale-110";

  return (
    <div className="flex items-center gap-3 py-4 border-y border-gray-light dark:border-gray-dark">
      <span className="font-bold text-sm uppercase text-gray dark:text-gray-400">Share:</span>
      <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter" className={iconClasses}>
        <i className="fab fa-twitter"></i>
      </a>
      <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook" className={iconClasses}>
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn" className={iconClasses}>
        <i className="fab fa-linkedin-in"></i>
      </a>
      <button onClick={copyToClipboard} aria-label="Copy link" className={`${iconClasses} relative`}>
        {copied ? <i className="fas fa-check"></i> : <i className="fas fa-link"></i>}
        {copied && <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-dark text-white text-xs px-2 py-1 rounded-md">Copied!</span>}
      </button>
    </div>
  );
};

export default SocialShare;
