import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    carMake: '',
    carModel: '',
    colorCode: '',
    damageDescription: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
    alert('Hvala! Kontaktiraćemo vas uskoro sa ponudom.');
  };

  return (
    <section id="contact" className="py-20 bg-auto-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Zatraži ponudu
          </h2>
          <p className="text-xl text-auto-gray">
            Pošalji nam detalje i dobićeš personalizovanu ponudu za 24h
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ime i prezime *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-auto-blue focus:border-transparent"
                    placeholder="Marko Petrović"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-auto-blue focus:border-transparent"
                    placeholder="060 123 4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-auto-blue focus:border-transparent"
                  placeholder="marko@example.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Marka automobila *
                  </label>
                  <input
                    type="text"
                    name="carMake"
                    required
                    value={formData.carMake}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-auto-blue focus:border-transparent"
                    placeholder="BMW, Audi, VW..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Model i godina
                  </label>
                  <input
                    type="text"
                    name="carModel"
                    value={formData.carModel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-auto-blue focus:border-transparent"
                    placeholder="320i 2018"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kod boje (ako znaš)
                </label>
                <input
                  type="text"
                  name="colorCode"
                  value={formData.colorCode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-auto-blue focus:border-transparent"
                  placeholder="L041, B9A, 300..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Opis oštećenja *
                </label>
                <textarea
                  name="damageDescription"
                  required
                  rows="4"
                  value={formData.damageDescription}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-auto-blue focus:border-transparent"
                  placeholder="Opiši gde se nalazi oštećenje i koliko je veliko..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-auto-orange text-white py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Pošalji zahtev
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Kontakt informacije
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-auto-blue rounded-lg flex items-center justify-center text-white mr-4">
                    📞
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Telefon</p>
                    <p className="text-auto-gray">+381 60 123 4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-auto-blue rounded-lg flex items-center justify-center text-white mr-4">
                    📧
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-auto-gray">info@autospray.rs</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-auto-blue rounded-lg flex items-center justify-center text-white mr-4">
                    🕒
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Radno vreme</p>
                    <p className="text-auto-gray">Pon-Pet: 8:00-17:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-auto-blue rounded-xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-4">
                Zašto da nas izabereš?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Originalna formula boje
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Brza dostava 24-48h
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Telefon podrška
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Garancija na kvalitet
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;