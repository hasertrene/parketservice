import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router";

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-stone-100 overflow-hidden">
        <ImageWithFallback
          src="/images/hero.jpg"
          alt="Visgraat parketvloer met interieur"
          className="w-full h-full object-cover object-[100%_75%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-3xl px-6">
            <h1
              className="text-5xl mb-4 text-white"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Vakmanschap in parket
            </h1>
            <p className="text-xl text-white mb-8">
              Ervaren parketleggers met jarenlange staat van dienst -
              gespecialiseerd in reparatie en herstel
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-amber-800 text-white hover:bg-amber-900 transition-colors"
            >
              Neem contact op
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl text-center mb-16 text-stone-900">
          Onze diensten
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-amber-100 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-amber-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <h3 className="text-xl mb-3 text-stone-900">Reparatie</h3>
            <p className="text-stone-600 leading-relaxed">
              Vakkundige reparatie van beschadigde parketvloeren. Van kleine
              krassen tot grotere herstelwerkzaamheden.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-amber-100 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-amber-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <h3 className="text-xl mb-3 text-stone-900">Onderhoud</h3>
            <p className="text-stone-600 leading-relaxed">
              Regelmatig onderhoud verlengt de levensduur van uw vloer. Wij
              zorgen voor optimale bescherming en glans.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-amber-100 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-amber-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <h3 className="text-xl mb-3 text-stone-900">Schuren & Afwerken</h3>
            <p className="text-stone-600 leading-relaxed">
              Professioneel schuren en afwerken van houten vloeren. Wij geven uw
              vloer een tweede leven.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl mb-6 text-stone-900">
                Ervaren vakmensen
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                Onze parketleggers hebben een jarenlange staat van dienst in het
                vakgebied. Met decennia aan ervaring bieden wij een exclusieve
                service waarbij kwaliteit en precisie voorop staan. Elke vloer
                verdient onze volledige aandacht en vakmanschap.
              </p>
              <p className="text-stone-600 leading-relaxed">
                Als voormalige eigenaren van Theo van Epen Parketvloeren in
                Bussum, brengen we bewezen expertise en een reputatie van
                betrouwbaarheid mee. Onze focus ligt nu op reparatie en herstel,
                waarbij we beschadigde vloeren hun oorspronkelijke schoonheid
                teruggeven.
              </p>
            </div>
            <div className="h-96 bg-stone-100 rounded-sm overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1617262869711-2f5006b61073?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwZmxvb3IlMjBjcmFmdHNtYW4lMjB3b3JrfGVufDF8fHx8MTc3MzMxNjU5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Vakmanschap"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl mb-6 text-stone-900">
          Heeft uw vloer aandacht nodig?
        </h2>
        <p className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto">
          Neem vrijblijvend contact met ons op voor advies of een offerte op
          maat.
        </p>
        <Link
          to="/contact"
          className="inline-block px-8 py-3 bg-amber-800 text-white hover:bg-amber-900 transition-colors"
        >
          Contact opnemen
        </Link>
      </section>
    </div>
  );
}
