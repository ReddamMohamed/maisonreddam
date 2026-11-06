import React from "react";
import {
  FiPhone,
  FiMapPin,
  FiArrowUpRight,
  FiArrowUp,
} from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-maison-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <a href="#home" className="inline-block">
            <h2 className="font-serif text-3xl tracking-wide">
              MAISON REDDAM
            </h2>
            <p className="mt-2 text-sm tracking-[0.4em] text-maison-gold">
              دار الردام
            </p>
          </a>

          <p className="mt-6 max-w-sm text-sm leading-7 text-gray-400">
            Votre destination pour le mobilier et la décoration. Donnez
            à votre intérieur le caractère et l'élégance qu'il mérite.
          </p>

          <div className="mt-7 flex gap-3">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center border border-white/20 transition hover:border-maison-gold hover:bg-maison-gold"
            >
              <FaInstagram size={17} />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center border border-white/20 transition hover:border-maison-gold hover:bg-maison-gold"
            >
              <FaFacebookF size={16} />
            </a>

            <a
              href="https://wa.me/212661350674"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center border border-white/20 transition hover:border-maison-gold hover:bg-maison-gold"
            >
              <FaWhatsapp size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-6 font-serif text-xl">Navigation</h3>

          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#home" className="transition hover:text-maison-gold">Accueil</a></li>
            <li><a href="#about" className="transition hover:text-maison-gold">À propos</a></li>
            <li><a href="#collections" className="transition hover:text-maison-gold">Collections</a></li>
            <li><a href="#location" className="transition hover:text-maison-gold">Notre magasin</a></li>
            <li><a href="#contact" className="transition hover:text-maison-gold">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-6 font-serif text-xl">Contact</h3>

          <div className="space-y-5 text-sm text-gray-400">
            <a
              href="tel:+212661350674"
              className="flex items-start gap-3 transition hover:text-maison-gold"
            >
              <FiPhone size={18} className="mt-1 shrink-0" />
              06 61 35 06 74
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Q56H%2B79X%2C+Tangier+90060"
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-3 transition hover:text-maison-gold"
            >
              <FiMapPin size={18} className="mt-1 shrink-0" />
              Q56H+79X, Tanger, Maroc
            </a>

            <a
              href="https://wa.me/212661350674"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition hover:text-maison-gold"
            >
              WhatsApp <FiArrowUpRight />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center text-xs text-gray-500 md:flex-row lg:px-10">
          <p>
            © {new Date().getFullYear()} Maison Reddam. Tous droits réservés.
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 transition hover:text-maison-gold"
          >
            Retour en haut <FiArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;