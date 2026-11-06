import React from "react";
import { FiArrowRight } from "react-icons/fi";

const About = () => {
  return (
    <section id="about" className="bg-maison-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85"
            alt="Intérieur élégant et chaleureux"
            className="h-[420px] w-full object-cover md:h-[550px]"
          />

          <div className="absolute -bottom-6 -right-4 hidden bg-maison-gold px-9 py-8 text-white md:block">
            <p className="font-serif text-3xl">دار الردام</p>
            <p className="mt-2 text-xs tracking-widest">L'ART DE VIVRE</p>
          </div>
        </div>

        <div className="lg:pl-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-maison-gold">
            À propos de nous
          </p>

          <h2 className="mb-7 text-4xl leading-tight text-maison-brown md:text-5xl">
            L'élégance commence chez vous.
          </h2>

          <p className="mb-5 leading-8 text-gray-600">
            Chez Maison Reddam, nous croyons que chaque intérieur mérite
            d'être à l'image de ceux qui y vivent.
          </p>

          <p className="mb-8 leading-8 text-gray-600">
            Notre univers rassemble mobilier et décoration pour vous aider
            à créer des espaces accueillants, harmonieux et pleins de
            caractère.
          </p>

          <a
            href="#collections"
            className="inline-flex items-center gap-3 border-b border-maison-gold pb-2 text-sm font-semibold text-maison-brown transition hover:text-maison-gold"
          >
            Explorer nos collections
            <FiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;