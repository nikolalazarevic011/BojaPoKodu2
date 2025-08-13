function Products() {
  const products = [
    {
      category: "Spray boje",
      items: [
        { name: "BMW Alpine White", code: "300", price: "890 RSD" },
        { name: "Audi Phantom Black", code: "L041", price: "890 RSD" },
        { name: "VW Candy White", code: "B9A", price: "890 RSD" },
        { name: "Opel Summit White", code: "GAZ", price: "890 RSD" }
      ]
    },
    {
      category: "Predmaterijali", 
      items: [
        { name: "Primer spray", price: "450 RSD" },
        { name: "Baza za metalik", price: "390 RSD" },
        { name: "Prep spray", price: "320 RSD" }
      ]
    },
    {
      category: "Lakovi",
      items: [
        { name: "Clear coat 2K", price: "650 RSD" },
        { name: "UV zaštita", price: "580 RSD" },
        { name: "Visoki sjaj", price: "620 RSD" }
      ]
    },
    {
      category: "Alati",
      items: [
        { name: "Šmirgla set", price: "380 RSD" },
        { name: "Krpe za poliranje", price: "250 RSD" },
        { name: "Gito folija", price: "190 RSD" }
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