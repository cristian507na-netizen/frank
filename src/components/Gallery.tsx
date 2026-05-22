"use client";

import { motion } from "framer-motion";

const shots = [
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80",
    tag: "Fade clásico"
  },
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80",
    tag: "Barba diseñada"
  },
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=80",
    tag: "Estudio"
  },
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=80",
    tag: "Caballero"
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=900&q=80",
    tag: "Detalle navaja"
  },
  {
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=80",
    tag: "Undercut"
  },
  {
    src: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=900&q=80",
    tag: "Herramienta"
  },
  {
    src: "https://images.unsplash.com/photo-1593702288056-7927a672ce15?auto=format&fit=crop&w=900&q=80",
    tag: "Silla"
  },
  {
    src: "https://images.unsplash.com/photo-1567894340315-735d7c361db0?auto=format&fit=crop&w=900&q=80",
    tag: "Pompadour"
  },
  {
    src: "https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?auto=format&fit=crop&w=900&q=80",
    tag: "Barba completa"
  }
];

const duplicated = [...shots, ...shots];

const marqueeWords = [
  "Frank Barber",
  "·",
  "Hecho a mano",
  "·",
  "Panamá",
  "·",
  "Una silla a la vez",
  "·"
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="relative py-28 overflow-hidden bg-primary"
    >
      {/* Marquee tipográfico decorativo arriba */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden border-b border-white/5 py-5 bg-primary z-20">
        <div className="flex gap-8 animate-marquee-x whitespace-nowrap will-change-transform">
          {[...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords].map(
            (w, i) => (
              <span
                key={i}
                className={`font-serif text-2xl md:text-3xl ${
                  w === "·" ? "text-accent" : "text-white/25 italic"
                }`}
              >
                {w}
              </span>
            )
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24 mb-14 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <p className="text-accent uppercase tracking-[0.25em] text-xs font-semibold mb-3">
              04 · Galería
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-[1.05] text-balance">
              Trabajo reciente
            </h2>
          </div>
          <p className="text-white/55 max-w-sm text-sm leading-relaxed">
            Una muestra de cortes hechos en la silla. Cada cabeza es distinta,
            cada corte también.
          </p>
        </motion.div>
      </div>

      {/* Slider infinito */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)"
        }}
      >
        <div className="flex gap-5 md:gap-6 animate-marquee-x w-max will-change-transform">
          {duplicated.map((shot, i) => (
            <figure
              key={i}
              className="group relative flex-shrink-0 w-[260px] h-[340px] md:w-[320px] md:h-[420px] lg:w-[360px] lg:h-[460px] rounded-2xl overflow-hidden bg-secondary shadow-premium"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={shot.src}
                alt={shot.tag}
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/10 to-transparent" />
              <figcaption className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <span className="text-[10px] uppercase tracking-[0.25em] font-bold">
                  {shot.tag}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent text-[9px] uppercase tracking-widest font-bold">
                  Frank
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </motion.div>

      {/* Pie de galería con CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 md:px-12 mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10"
      >
        <p className="text-white/40 text-xs uppercase tracking-[0.3em]">
          + 2,000 cortes firmados desde 2018
        </p>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-white hover:bg-accent hover:text-primary hover:border-accent transition-colors uppercase tracking-widest text-xs font-bold rounded-full"
        >
          Ver más en Instagram
          <span aria-hidden>→</span>
        </a>
      </motion.div>

    </section>
  );
}
