function Pricing() {
    return (
        <section id="pricing" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Uporedi cene
                    </h2>
                    <p className="text-xl text-auto-gray">
                        Vidi koliko možeš da uštediš radeći sam
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* DIY Option */}
                    <div className="bg-auto-light rounded-xl p-8 border-2 border-auto-orange relative">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <span className="bg-auto-orange text-white px-4 py-2 rounded-full text-sm font-semibold">
                                PREPORUČENO
                            </span>
                        </div>

                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                Uradi sam
                            </h3>
                            <div className="text-4xl font-bold text-auto-orange mb-2">
                                1.990 RSD
                            </div>
                            <p className="text-auto-gray">
                                Komplet za DIY popravku
                            </p>
                        </div>

                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center">
                                <span className="text-green-500 mr-3">✓</span>
                                Placanje pouzecem
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-3">✓</span>
                                Originalna boja identična fabričkoj
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-3">✓</span>
                                Svi potrebni materijali
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-3">✓</span>
                                Detaljno uputstvo
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-3">✓</span>
                                Danas poručiš ➡️sutra se pakuje➡️prekosutra
                                šalje
                            </li>

                            <li className="flex items-center">
                                <span className="text-green-500 mr-3">✓</span>
                                Garancija na materijale
                            </li>
                        </ul>

                        <button
                            onClick={() =>
                                document
                                    .getElementById("contact")
                                    .scrollIntoView({ behavior: "smooth" })
                            }
                            className="w-full bg-auto-orange text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                        >
                            Zatraži ponudu
                        </button>
                    </div>

                    {/* Service Option */}
                    <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                Autofarbara
                            </h3>
                            <div className="text-4xl font-bold text-gray-600 mb-2">
                                15.000+ RSD
                            </div>
                            <p className="text-auto-gray">
                                Prosečna cena servisa
                            </p>
                        </div>

                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center">
                                <span className="text-green-500 mr-3">✓</span>
                                Profesionalna usluga
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-3">✓</span>
                                Originalni materijali
                            </li>
                            <li className="flex items-center">
                                <span className="text-red-500 mr-3">✗</span>
                                <span className="text-gray-500">
                                    Čekanje na termin
                                </span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-red-500 mr-3">✗</span>
                                <span className="text-gray-500">
                                    Ostavljanje automobila
                                </span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-red-500 mr-3">✗</span>
                                <span className="text-gray-500">
                                    Dodatni troškovi
                                </span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-red-500 mr-3">✗</span>
                                <span className="text-gray-500">
                                    Visoka cena
                                </span>
                            </li>
                        </ul>

                        <button
                            disabled
                            className="w-full bg-gray-300 text-gray-500 py-3 rounded-lg font-semibold cursor-not-allowed"
                        >
                            Skupo rešenje
                        </button>
                    </div>
                </div>

                <div className="text-center mt-12 bg-auto-light rounded-xl p-8 max-w-2xl mx-auto">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Uštediš
                        <span className="text-auto-orange">13.000+ RSD</span>
                    </h3>
                    <p className="text-auto-gray text-lg">
                        Sa našim kompletom možeš da popraviš auto sam i uštediš
                        više od 85% troškova!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Pricing;
