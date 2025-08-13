function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Boja po Kodu
            </h3>
            <p className="text-gray-400 mb-4">
              Originalni automobilski lakovi i materijali za DIY popravke. 
              Uštedite novac i popravite auto sam!
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/bojapokodu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                📸 Instagram
              </a>
              <a href="https://www.tiktok.com/@bojapokodu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                🎵 TikTok
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Brzi linkovi</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-white transition-colors">
                  Početna
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors">
                  Proizvodi
                </a>
              </li>
              <li>
                <a href="#process" className="text-gray-400 hover:text-white transition-colors">
                  Kako funkcioniše
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                  Cene
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-2 text-gray-400">
              <p>📧 bojapokodu@proton.me</p>
              <p>🕒 Pon-Pet: 8:00-17:00</p>
              <p>📍 Beograd, Srbija</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Boja po Kodu. Sva prava zadržana.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Napravljeno od strane <a href="https://www.nikola-apps.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">nikola-apps</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;