import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white/70 text-sm">
      <div className="container mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4 pr-8">
            <h3 className="text-2xl font-black text-primary">
              I<span className="text-white">gnitePress</span>
            </h3>
            <p>A feature-rich, modern, and fast blog template perfect for writers, developers, and creators.</p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transform hover:-translate-y-1 transition-all">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transform hover:-translate-y-1 transition-all">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transform hover:-translate-y-1 transition-all">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-white mb-6">Explore</h3>
            <ul className="space-y-3">
              <li><Link to="/articles" className="hover:text-primary transition-colors">All Articles</Link></li>
              <li><Link to="/category/Productivity" className="hover:text-primary transition-colors">Productivity</Link></li>
              <li><Link to="/category/Mindset" className="hover:text-primary transition-colors">Mindset</Link></li>
              <li><Link to="/category/Creativity" className="hover:text-primary transition-colors">Creativity</Link></li>
              <li><Link to="/category/Habits" className="hover:text-primary transition-colors">Habits</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/start-here" className="hover:text-primary transition-colors">Start Here</Link></li>
              <li><Link to="/resources" className="hover:text-primary transition-colors">Free Workbook</Link></li>
              <li><Link to="/resources" className="hover:text-primary transition-colors">Community</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-white/10 text-white/50">
          © {new Date().getFullYear()} [Your Brand Name]. All rights reserved. | Template by <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">IgnitePress</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
