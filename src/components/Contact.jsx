import React, { useState } from "react";
import {
  FiPhone,
  FiMapPin,
  FiMessageCircle,
  FiSend,
} from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const whatsappMessage = `
Bonjour Maison Reddam !

Nom : ${formData.name}
Téléphone : ${formData.phone}
Sujet : ${formData.subject}

Message :
${formData.message}
    `;

    const whatsappURL = `https://wa.me/212661350674?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="bg-maison-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-maison-gold">
              Restons en contact
            </p>

            <h2 className="mb-6 text-4xl leading-tight text-maison-brown md:text-5xl">
              Parlons de votre intérieur.
            </h2>

            <p className="mb-10 max-w-md leading-8 text-gray-500">
              Une question sur nos collections ou besoin d'informations ?
              Notre équipe sera ravie de vous répondre.
            </p>

            <div className="space-y-7">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center bg-white text-maison-gold">
                  <FiPhone size={21} />
                </div>
                <div>
                  <p className="mb-1 text-sm text-gray-500">Téléphone</p>
                  <a
                    href="tel:+212661350674"
                    className="font-semibold text-maison-brown"
                  >
                    06 61 35 06 74
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center bg-white text-maison-gold">
                  <FiMapPin size={21} />
                </div>
                <div>
                  <p className="mb-1 text-sm text-gray-500">Adresse</p>
                  <p className="font-semibold text-maison-brown">
                    Tanger, Maroc
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center bg-white text-maison-gold">
                  <FiMessageCircle size={21} />
                </div>
                <div>
                  <p className="mb-1 text-sm text-gray-500">WhatsApp</p>
                  <a
                    href="https://wa.me/212661350674"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-maison-brown"
                  >
                    Envoyez-nous un message
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-7 shadow-sm md:p-10"
          >
            <h3 className="mb-8 text-2xl text-maison-brown">
              Envoyez-nous un message
            </h3>

            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-maison-brown"
              >
                Votre nom
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Entrez votre nom"
                required
                className="w-full border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-maison-gold"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-maison-brown"
              >
                Votre téléphone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Votre numéro de téléphone"
                required
                className="w-full border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-maison-gold"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-maison-brown"
              >
                Sujet
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-maison-gold"
              >
                <option value="">Choisissez un sujet</option>
                <option value="Informations sur un produit">
                  Informations sur un produit
                </option>
                <option value="Disponibilité">Disponibilité</option>
                <option value="Prix">Prix</option>
                <option value="Autre demande">Autre demande</option>
              </select>
            </div>

            <div className="mb-7">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-maison-brown"
              >
                Votre message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Comment pouvons-nous vous aider ?"
                required
                className="w-full resize-none border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-maison-gold"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 bg-maison-brown px-6 py-4 text-sm font-semibold text-white transition hover:bg-maison-gold"
            >
              Envoyer sur WhatsApp
              <FiSend size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;