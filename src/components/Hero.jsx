function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-auto-light to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Popravi auto sam - <span className="text-auto-blue">uštedi 10x više</span> para!
            </h1>
            <p className="text-xl md:text-2xl text-auto-gray mb-8">
              <span className="font-semibold text-auto-orange">1.990 RSD</span> umesto{' '}
              <span className="line-through">15.000 RSD</span> u servisu
            </p>
            <p className="text-lg text-auto-gray mb-8">
              Originalna formula boje identična fabričkoj. Sve što ti treba u jednom paketu. 
              Dostava za 24-48h širom Srbije.
            </p>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-auto-orange text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg"
            >
              Zatraži ponudu
            </button>
          </div>
          
          <div className="relative">
            <img 
              src="/bojapokodu.jpg" 
              alt="Boja po Kodu - Automotive Paint Products" 
              className="rounded-lg h-96 w-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;