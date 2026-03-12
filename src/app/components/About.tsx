import { Award, CheckCircle2, Users, Wrench } from "lucide-react";
import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative h-[400px] bg-stone-100 overflow-hidden">
        <ImageWithFallback
          src="/images/hero3.jpg"
          alt="Parketvloer detail"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <h1
              className="text-4xl mb-6 text-white"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Over ons
            </h1>
            <p className="text-xl text-white">
              Ervaren parketleggers met een lange staat van dienst
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="prose prose-stone max-w-none">
          <div className="bg-amber-50 border-l-4 border-amber-800 p-8 mb-12">
            <h2 className="text-2xl mb-4 text-stone-900 mt-0">
              Van Theo van Epen naar Parketservice Hasert & Zn
            </h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              Als voormalige eigenaren van Theo van Epen Parketvloeren waren we
              jarenlang een begrip in Bussum en omstreken. Vader en zoon werkten
              zij aan zij, met een gedeelde passie voor vakmanschap en oog voor
              detail. Samen bouwden we een solide reputatie op van
              betrouwbaarheid en kwaliteit in het vakgebied van parketvloeren.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Na jaren van samenwerking onder de naam Theo van Epen gingen beide
              hun eigen weg. Maar de liefde voor het vak en de gedrevenheid om
              kwaliteit te leveren bleven onverminderd aanwezig. Nu slaan vader
              en zoon opnieuw de handen ineen onder een nieuwe naam:
              Parketservice Hasert & Zn.
            </p>
            <p className="text-stone-700 leading-relaxed mb-0">
              Deze nieuwe start brengt het beste van beide werelden samen: de
              jarenlange staat van dienst en ambachtelijke kennis van ervaren
              parketleggers, gecombineerd met frisse energie en moderne
              technieken. Samen leveren we exclusieve service en producten af,
              waarbij elke klus met dezelfde zorg wordt behandeld, of het nu
              gaat om een kleine reparatie of een volledig herstelproject.
            </p>
          </div>

          <h2 className="text-2xl mb-8 text-stone-900">Onze werkwijze</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex gap-4">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-7 h-7 text-amber-800" />
              </div>
              <div>
                <h3 className="text-lg mb-2 text-stone-900">
                  Inspectie & Advies
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  We beginnen met een grondige inspectie van uw vloer. Op basis
                  van onze jarenlange ervaring geven we eerlijk advies over de
                  beste aanpak.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Wrench className="w-7 h-7 text-amber-800" />
              </div>
              <div>
                <h3 className="text-lg mb-2 text-stone-900">Vakkundig Werk</h3>
                <p className="text-stone-600 leading-relaxed">
                  Geen haastwerk, maar zorgvuldig en precies werk. Onze
                  parketleggers werken met de aandacht en precisie die het vak
                  verdient.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="w-7 h-7 text-amber-800" />
              </div>
              <div>
                <h3 className="text-lg mb-2 text-stone-900">
                  Kwaliteitsmaterialen
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  We werken alleen met hoogwaardige materialen en producten die
                  bewezen hebben lang mee te gaan en optimale resultaten
                  leveren.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-7 h-7 text-amber-800" />
              </div>
              <div>
                <h3 className="text-lg mb-2 text-stone-900">
                  Persoonlijk Contact
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Direct contact met de vakman. U spreekt met degene die het
                  werk uitvoert, zonder tussenpersonen of verrassingen.
                </p>
              </div>
            </div>
          </div>

          <p className="text-stone-600 leading-relaxed mb-6">
            Bij elke opdracht staan kwaliteit en vakmanschap centraal. We nemen
            de tijd om uw vloer te inspecteren, advies te geven en een passende
            oplossing te bieden. Dit komt voort uit onze lange staat van dienst
            als parketleggers - we weten wat werkt en wat uw vloer echt nodig
            heeft.
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div>
              <h3 className="text-xl mb-3 text-stone-900">
                Jarenlange Ervaring
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Decennia aan ervaring als parketleggers, opgebouwd door
                generaties van vakmanschap en toewijding aan perfectie.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3 text-stone-900">
                Bewezen Vakmanschap
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Ambachtelijk werk waarbij elk detail telt. Een lange staat van
                dienst spreekt voor de kwaliteit van ons werk.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3 text-stone-900">
                Persoonlijke Service
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Direct contact met ervaren vakmensen. Geen tussenpersonen, maar
                persoonlijke service en advies op maat.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3 text-stone-900">
                Duurzame Kwaliteit
              </h3>
              <p className="text-stone-600 leading-relaxed">
                We werken alleen met de beste materialen en technieken voor een
                resultaat dat generaties meegaat.
              </p>
            </div>
          </div>

          <h2 className="text-2xl mb-6 text-stone-900">Onze specialisatie</h2>
          <p className="text-stone-600 leading-relaxed mb-6">
            Hoewel we als ervaren parketleggers alle aspecten van parketvloeren
            beheersen, ligt onze focus nu vooral op reparatie en herstel. We
            geven oude, beschadigde of verwaarloosde vloeren een nieuw leven.
            Dit vraagt om specifieke kennis, geduld en een diep begrip van hout
            en zijn eigenschappen - precies waar onze jarenlange staat van
            dienst tot zijn recht komt.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Of het nu gaat om een klassieke visgraat parketvloer, een antieke
            plankenvloer of een moderne houten vloer - we behandelen elk project
            met dezelfde aandacht en vakmanschap. Want elke vloer heeft zijn
            eigen verhaal en verdient het om zorgvuldig hersteld te worden.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-stone-100 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl mb-4 text-stone-900">Kennismaken?</h2>
          <p className="text-stone-600 mb-8">
            We vertellen graag meer over onze werkwijze en ervaring. Laat ons
            kijken naar de mogelijkheden voor uw vloer.
          </p>
          <a
            href="mailto:info@parketservicehasert.nl"
            className="inline-block px-8 py-3 bg-amber-800 text-white hover:bg-amber-900 transition-colors"
          >
            Stuur een bericht
          </a>
        </div>
      </section>
    </div>
  );
}
