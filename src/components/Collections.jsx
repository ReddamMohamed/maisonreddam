import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import collections from "../data/collections";

const Collections = () => {
  return (
    <section id="collections" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-maison-gold">
            Notre univers
          </p>

          <h2 className="mb-5 text-4xl text-maison-brown md:text-5xl">
            Nos collections
          </h2>

          <p className="mx-auto max-w-xl leading-7 text-gray-500">
            Découvrez nos univers et trouvez l'inspiration pour aménager
            chaque espace de votre maison.
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.id} className="group">
                <div className="relative mb-5 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-[340px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center bg-maison-cream text-maison-brown">
                    <Icon size={22} />
                  </div>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="mb-2 text-xl text-maison-brown">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-6 text-gray-500">
                      {item.description}
                    </p>
                  </div>

                  <a
                    href="#contact"
                    aria-label={`Contacter Maison Reddam pour ${item.title}`}
                    className="mt-1 text-maison-gold transition group-hover:translate-x-1"
                  >
                    <FiArrowUpRight size={22} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Collections;