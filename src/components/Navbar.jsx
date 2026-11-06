import React, { useState } from "react";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Accueil", href: "#home" },
    { name: "À propos", href: "#about" },
    { name: "Collections", href: "#collections" },
    { name: "Notre magasin", href: "#location" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-maison-cream/95 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#home" onClick={closeMenu} className="flex flex-col">
          <span className="font-serif text-2xl font-bold tracking-wide text-maison-brown">
            MAISON REDDAM
          </span>
          <span className="text-right text-sm tracking-[0.35em] text-maison-gold">
            دار الردام
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-maison-dark transition hover:text-maison-gold"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="tel:+212661350674"
          className="hidden items-center gap-2 bg-maison-brown px-5 py-3 text-sm text-white transition hover:bg-maison-gold lg:flex"
        >
          <FiPhone size={16} />
          06 61 35 06 74
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-maison-brown lg:hidden"
        >
          {menuOpen ? <FiX size={27} /> : <FiMenu size={27} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-maison-beige bg-maison-cream px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-sm font-medium text-maison-dark"
              >
                {link.name}
              </a>
            ))}

            <a
              href="tel:+212661350674"
              onClick={closeMenu}
              className="flex items-center gap-2 text-sm font-semibold text-maison-gold"
            >
              <FiPhone />
              06 61 35 06 74
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;