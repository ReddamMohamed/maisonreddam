import React from "react";
import { FiMapPin, FiPhone, FiArrowUpRight } from "react-icons/fi";

const Location = () => {
  const address = "Q56H+79X, Tangier 90060, Morocco";

  return (
    <section id="location" className="bg-maison-beige/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-maison-gold">
            Venez nous rendre visite
          </p>

          <h2 className="text-4xl text-maison-brown md:text-5xl">
            Retrouvez-nous à Tanger
          </h2>
        </div>

        <div className="grid overflow-hidden bg-white shadow-sm lg:grid-cols-2">
          <div className="min-h-[400px]">
            <iframe
              title="Localisation de Maison Reddam à Tanger"
              src="https://www.google.com/maps?q=Q56H%2B79X%2C+Tangier+90060&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="flex flex-col justify-center p-8 md:p-14">
            <h3 className="mb-8 text-3xl text-maison-brown">
              Notre magasin
            </h3>

            <div className="mb-8 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-maison-cream text-maison-gold">
                <FiMapPin size={22} />
              </div>

              <div>
                <h4 className="mb-2 font-semibold text-maison-brown">
                  Adresse
                </h4>
                <p className="text-sm leading-7 text-gray-500">{address}</p>
              </div>
            </div>

            <div className="mb-10 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-maison-cream text-maison-gold">
                <FiPhone size={22} />
              </div>

              <div>
                <h4 className="mb-2 font-semibold text-maison-brown">
                  Téléphone
                </h4>
                <a
                  href="tel:+212661350674"
                  className="text-sm text-gray-500 transition hover:text-maison-gold"
                >
                  06 61 35 06 74
                </a>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Q56H%2B79X%2C+Tangier+90060"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-3 bg-maison-brown px-7 py-4 text-sm font-semibold text-white transition hover:bg-maison-gold"
            >
              Obtenir l'itinéraire
              <FiArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;