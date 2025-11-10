import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, toggleTheme] = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Close menu on route change
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleScrollToSubscribe = () => {
    // Always navigate to the homepage's subscribe section
    if (location.pathname === '/') {
      document.getElementById('subscribe')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#subscribe');
    }
  };

  const navLinkClasses = "font-medium text-dark dark:text-light hover:text-primary transition-colors relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full";
  const mobileNavLinkClasses = "text-4xl font-bold text-dark dark:text-light hover:text-primary transition-colors";

  const NavLinks = ({mobile = false} : {mobile?: boolean}) => (
    <>
      <Link to="/articles" className={mobile ? mobileNavLinkClasses : navLinkClasses}>Articles</Link>
      <Link to="/start-here" className={mobile ? mobileNavLinkClasses : navLinkClasses}>Start Here</Link>
      <Link to="/about" className={mobile ? mobileNavLinkClasses : navLinkClasses}>About</Link>
    </>
  )

  return (
    <>
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/85 dark:bg-dark/85 border-b border-black/5 dark:border-white/5">
        <div className="container mx-auto px-5">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="text-3xl font-black text-primary hover:opacity-80 transition-opacity">
              I<span className="text-dark dark:text-light">gnitePress</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <NavLinks />
            </nav>
            <div className="flex items-center gap-4">
              <button
                onClick={handleScrollToSubscribe}
                className="cursor-pointer hidden sm:inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transform hover:-translate-y-0.5"
              >
                Subscribe
              </button>
              <button
                aria-label="Toggle theme"
                onClick={toggleTheme}
                className="text-xl text-dark dark:text-light hover:text-primary transition-colors"
              >
                <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
              </button>
              <button
                aria-label="Open menu"
                onClick={() => setIsMenuOpen(true)}
                className="md:hidden text-2xl text-dark dark:text-light"
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-light dark:bg-dark z-50 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="container mx-auto px-5 h-full flex flex-col items-center justify-center">
          <button
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-7 right-5 text-3xl text-dark dark:text-light"
          >
            <i className="fas fa-times"></i>
          </button>
          <nav className="flex flex-col items-center gap-10">
            <NavLinks mobile={true} />
            <button
              onClick={() => {
                setIsMenuOpen(false);
                handleScrollToSubscribe();
              }}
              className="mt-6 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg"
            >
              Subscribe
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;