function Process() {
  const steps = [
    {
      step: "01",
      title: "Pošalji kod boje",
      description: "Pronađi kod boje na svom automobilu (nalazi se na nalepnici u vratima, haubi ili VIN-u) i pošalji nam ga putem forme",
      icon: "📋"
    },
    {
      step: "02", 
      title: "Dobij komplet",
      description: "Mi ti pošaljemo tačnu boju u spreju + sve što ti treba za kvalitetnu popravku -  Isporuka za 24–48h širom Srbije!",
      icon: "📦"
    },
    {
      step: "03",
      title: "Popravi auto",
      description: "Popravi grešku, ogrebotinu ili oštećenje – kao profesionalac!",
      icon: "🚗"
    }
  ];

  return (
    <section id="process" className="py-20 bg-auto-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Kako funkcioniše?
          </h2>
          <p className="text-xl text-auto-gray">
            Samo 3 jednostavna koraka do savršene popravke
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-auto-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <div className="text-4xl mb-4">{step.icon}</div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-auto-blue/30 transform translate-x-1/2"></div>
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-auto-gray">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Gde da pronađem kod boje?
            </h3>
            <p className="text-auto-gray mb-4">
              Kod boje se obično nalazi na naljepnici u odjeljku motora, 
              na vratima vozača ili u prtljažniku. Izgledaju kao: <strong>L041, B9A, 300</strong>
            </p>
            <p className="text-sm text-auto-gray">
              Nisi siguran? Pošalji nam fotografiju naljepnice i mi ćemo ti pomoći!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;