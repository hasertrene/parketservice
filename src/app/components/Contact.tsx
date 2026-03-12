import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Contact() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative h-[400px] bg-stone-100 overflow-hidden">
        <ImageWithFallback
          src="/images/hero1.jpg"
          alt="Parketvloer"
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <h1
              className="text-4xl mb-6 text-white"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Contact
            </h1>
            <p className="text-xl text-white">
              Neem vrijblijvend contact met ons op
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Details */}
          <div>
            <h2 className="text-2xl mb-8 text-stone-900">Bereikbaarheid</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-amber-800" />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wide text-stone-500 mb-1">
                    Telefoon
                  </h3>
                  <a
                    href="tel:+31612345678"
                    className="text-stone-900 hover:text-amber-800 transition-colors"
                  >
                    06 123 456 78
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-amber-800" />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wide text-stone-500 mb-1">
                    E-mail
                  </h3>
                  <a
                    href="mailto:info@parketservicehasert.nl"
                    className="text-stone-900 hover:text-amber-800 transition-colors"
                  >
                    info@parketservicehasert.nl
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-amber-800" />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wide text-stone-500 mb-1">
                    Werkgebied
                  </h3>
                  <p className="text-stone-900">
                    Bussum en omgeving
                    <br />
                    Het Gooi, Noord-Holland
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-amber-50 border-l-4 border-amber-800">
              <h3 className="text-lg mb-2 text-stone-900">Openingstijden</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                We zijn bereikbaar op werkdagen tussen 08:00 - 18:00 uur. Heeft
                u buiten deze tijden een vraag? Stuur dan een e-mail en we nemen
                zo spoedig mogelijk contact met u op.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl mb-8 text-stone-900">Stuur een bericht</h2>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-stone-700 mb-2"
                >
                  Naam *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-stone-300 bg-white focus:outline-none focus:border-amber-800 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-stone-700 mb-2"
                >
                  E-mailadres *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-stone-300 bg-white focus:outline-none focus:border-amber-800 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm text-stone-700 mb-2"
                >
                  Telefoonnummer
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-stone-300 bg-white focus:outline-none focus:border-amber-800 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-stone-700 mb-2"
                >
                  Bericht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-stone-300 bg-white focus:outline-none focus:border-amber-800 transition-colors resize-none"
                  placeholder="Vertel ons over uw vloer en wat u nodig heeft..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-amber-800 text-white hover:bg-amber-900 transition-colors"
              >
                Verstuur bericht
              </button>

              <p className="text-sm text-stone-500">* Verplichte velden</p>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="bg-white py-16 border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg mb-3 text-stone-900">Gratis advies</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Een vrijblijvend gesprek over de mogelijkheden voor uw vloer
              </p>
            </div>
            <div>
              <h3 className="text-lg mb-3 text-stone-900">Offerte op maat</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Duidelijke prijsopgave zonder verrassingen achteraf
              </p>
            </div>
            <div>
              <h3 className="text-lg mb-3 text-stone-900">
                Persoonlijk contact
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Direct contact met de vakman, geen tussenpersonen
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
