import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    id: 1,
    name: "Marko Jovanović",
    rating: 5,
    comment: "Odličan set! Imao sam ogrebotinu na vratima od parkinga, mislio sam da ću morati u limar. Za 2000 dinara sam to sam popravio, ne vidi se uopšte! Uštedeo sam minimum 15 hiljada.",
    location: "Beograd"
  },
  {
    id: 2,
    name: "Stefan Milanović",
    rating: 5,
    comment: "Boja je identična originalnoj! Poslao sam im kod boje sa šasije, stigla je perfektna nijansa. Uputstvo je jasno, sve potrebno je u paketu. Kao da nikad nije bilo udubljenje!",
    location: "Novi Sad"
  },
  {
    id: 3,
    name: "Nikola Petrović",
    rating: 5,
    comment: "Skupio mi je neko branike na parkingu i pobegao. Umesto da dajem 20.000 u servisu, za 2.000 sam to sam sredio. Paket je stigao za dva dana, sve komplet - git, šmirgle, sprej, lak, sve!",
    location: "Niš"
  },
  {
    id: 4,
    name: "Milan Stojanović",
    rating: 4,
    comment: "Vrlo zadovoljan! Malo mi je trebalo da skontam tehniku nanošenja, ali kad sam uhvatio - super je ispalo. Možda bi video uputstvo bilo korisno, ali i ovako je ok.",
    location: "Kragujevac"
  },
  {
    id: 5,
    name: "Aleksandar Nikolić",
    rating: 5,
    comment: "Genijalna stvar! Imao sam tri manja oštećenja na autu, sve sam popravio sa jednim setom. Komšija me pitao gde sam to farbao, nije mogao da veruje da sam sam uradio!",
    location: "Subotica"
  },
  {
    id: 6,
    name: "Dejan Ristić",
    rating: 5,
    comment: "Najboljih 2000 dinara koje sam potrošio! Ogrebotina od grana je potpuno nestala. Boja se savršeno stopila sa originalnom. Brza dostava, sve stiglo za 2 dana. Svaka preporuka!",
    location: "Pančevo"
  }
]

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Utisci Naših Klijenata
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pročitajte šta kažu naši zadovoljni klijenti o našim proizvodima i uslugama.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="flex items-center mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
                <div className="flex">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
              </div>
              <p className="text-gray-700 text-lg italic">
                "{testimonials[currentIndex].comment}"
              </p>
            </motion.div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors"
              aria-label="Prethodna recenzija"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors"
              aria-label="Sledeća recenzija"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-red-600' : 'bg-gray-300'
                }`}
                aria-label={`Idi na recenziju ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <p className="text-3xl font-bold text-red-600">100+</p>
            <p className="text-gray-600">Zadovoljnih Klijenata</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-red-600">4.9</p>
            <p className="text-gray-600">Prosečna Ocena</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-red-600">400+</p>
            <p className="text-gray-600">Završenih Projekata</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-red-600">5+</p>
            <p className="text-gray-600">Godina Iskustva</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials