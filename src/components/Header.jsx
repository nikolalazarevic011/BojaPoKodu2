function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-auto-blue">
            Boja po Kodu
          </div>
          
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
            <a href="#pricing" className="text-auto-gray hover:text-auto-blue transition-colors">
              Cene
            </a>
            <a href="#contact" className="text-auto-gray hover:text-auto-blue transition-colors">
              Kontakt
            </a>
          </div>
          
          <div className="md:hidden">
            <button className="text-auto-gray">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;