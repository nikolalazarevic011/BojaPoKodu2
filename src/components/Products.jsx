function Products() {
  const products = [
    {
      category: "Sprejevi",
      items: [
        { name: "Fiksno", price: "1890 RSD" },
        
      ]
    },
    {
      category: "Predmaterijali", 
      items: [
        { name: "Od", price: "399 RSD" },
       
      ]
    },
    {
      category: "Lakovi",
      items: [
         { name: "Od", price: "499 RSD" },
      
      ]
    },
    {
      category: "Alati",
      items: [
         { name: "Od", price: "599 RSD" },
        
      ]
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Naši proizvodi
          </h2>
          <p className="text-xl text-auto-gray">
            Sve što ti treba za profesionalnu popravku automobila
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((category, index) => (
            <div key={index} className="bg-auto-light rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-auto-blue mb-4">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-b border-gray-200 pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-gray-900">{item.name}</p>
                        {item.code && (
                          <p className="text-sm text-auto-gray">Kod: {item.code}</p>
                        )}
                      </div>
                      <span className="font-semibold text-auto-orange">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* What We Ship Section */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              🚚 Šaljemo ti:
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✔️</span>
                <div>
                  <span className="font-semibold">Boju u spreju</span> – <em>po tačnoj kodi tvoje marke</em> (BMW, Audi, VW, Opel, Fiat...)
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✔️</span>
                <div>
                  <span className="font-semibold">Henter + originalni lak</span> – za <em>pravi fabrički sjaj</em>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✔️</span>
                <div>
                  <span className="font-semibold">Gitovi, šmirgle, krpe, trakove</span> – <em>SVE u kompletu</em>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✔️</span>
                <div>
                  <span className="font-semibold">Uputstvo</span> – korak po korak. <em>Nije teško.</em>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✅</span>
                <span className="font-semibold">Bez majstora.</span>
              </div>
              
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✅</span>
                <span className="font-semibold">Bez gužve.</span>
              </div>
              
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✅</span>
                <span className="font-semibold">Bez preteranih cena.</span>
              </div>
              
              <div className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">📦</span>
                <span className="font-semibold">Besplatna dostava za narudžbe iznad 3.500 RSD</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-auto-gray mb-6">
            Kompletan set za popravku oštećenja do 20cm²
          </p>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-auto-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Naruči svoj set
          </button>
        </div>
      </div>
    </section>
  );
}

export default Products;