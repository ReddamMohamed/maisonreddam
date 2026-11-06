import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=90')",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-32 lg:px-10">
        <div className="max-w-2xl text-white">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.4em] text-maison-beige">
            Bienvenue chez Maison Reddam
          </p>

          <h1 className="mb-6 text-5xl font-medium leading-tight md:text-7xl">
            Votre maison,
            <br />
            notre passion.
          </h1>

          <p className="mb-9 max-w-xl text-base leading-8 text-white/85 md:text-lg">
            Découvrez un univers de mobilier et de décoration pensé pour
            transformer votre intérieur en un espace unique, chaleureux et
            élégant.
          </p>

          <a
            href="#collections"
            className="inline-flex items-center gap-3 bg-maison-gold px-7 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-maison-brown"
          >
            Découvrir nos collections
            <FiArrowRight size={19} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 right-10 hidden text-right text-white md:block">
        <p className="font-serif text-2xl">دار الردام</p>
        <p className="mt-1 text-xs tracking-[0.3em]">TANGER · MAROC</p>
      </div>
    </section>
  );
};

export default Hero;