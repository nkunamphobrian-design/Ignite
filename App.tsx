import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
import PostPage from './pages/PostPage';
import NotFoundPage from './pages/NotFoundPage';
import StartHerePage from './pages/StartHerePage';
import AboutPage from './pages/AboutPage';
import CategoryPage from './pages/CategoryPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import ResourcesPage from './pages/ResourcesPage';
import { useTheme } from './hooks/useTheme';
import ScrollToTopButton from './components/ScrollToTopButton';

const App: React.FC = () => {
  useTheme(); // Initialize theme hook

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-animated-gradient bg-[size:400%_400%] animate-gradient-shift opacity-[0.07] -z-10"></div>
      <div className="flex flex-col min-h-screen bg-light text-dark dark:bg-dark dark:text-light font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/post/:slug" element={<PostPage />} />
            <Route path="/start-here" element={<StartHerePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/category/:tag" element={<CategoryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default App;