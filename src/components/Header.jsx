import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/bojapokodu.jpg" alt="Boja po Kodu" className="h-10 w-10 rounded-lg object-cover" />
            <div className="text-2xl font-bold text-auto-blue">
              Boja po Kodu
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#hero" className="text-auto-gray hover:text-auto-blue transition-colors">
              Početna
            </a>
            <a href="#products" className="text-auto-gray hover:text-auto-blue transition-colors">
              Proizvodi
            </a>
            <a href="#process" className="text-auto-gray hover:text-auto-blue transition-colors">
              Proces
            </a>
            <a href="#work" className="text-auto-gray hover:text-auto-blue transition-colors">
              Radovi
            </a>
            <a href="#pricing" className="text-auto-gray hover:text-auto-blue transition-colors">
              Cene
            </a>
            <a href="#contact" className="text-auto-gray hover:text-auto-blue transition-colors">
              Kontakt
            </a>
          </div>
          
          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-auto-gray hover:text-auto-blue focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              <a 
                href="#hero" 
                onClick={closeMenu}
                className="text-auto-gray hover:text-auto-blue transition-colors py-2"
              >
                Početna
              </a>
              <a 
                href="#products" 
                onClick={closeMenu}
                className="text-auto-gray hover:text-auto-blue transition-colors py-2"
              >
                Proizvodi
              </a>
              <a 
                href="#process" 
                onClick={closeMenu}
                className="text-auto-gray hover:text-auto-blue transition-colors py-2"
              >
                Proces
              </a>
              <a 
                href="#work" 
                onClick={closeMenu}
                className="text-auto-gray hover:text-auto-blue transition-colors py-2"
              >
                Radovi
              </a>
              <a 
                href="#pricing" 
                onClick={closeMenu}
                className="text-auto-gray hover:text-auto-blue transition-colors py-2"
              >
                Cene
              </a>
              <a 
                href="#contact" 
                onClick={closeMenu}
                className="text-auto-gray hover:text-auto-blue transition-colors py-2"
              >
                Kontakt
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;