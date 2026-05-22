"use client";

import { motion } from "framer-motion";

interface Review {
  text: string;
  service: string;
  name: string;
}

const reviews: Review[] = [
  {
    text: "Pedí un fade con diseño de barba y salí sintiéndome otra persona. Frank sabe exactamente lo que cada rostro necesita.",
    service: "Fade + barba",
    name: "Diego R."
  },
  {
    text: "El afeitado clásico con toalla caliente es una experiencia obligatoria. Nunca había sentido la piel tan suave.",
    service: "Afeitado clásico",
    name: "Andrés M."
  },
  {
    text: "Reservé online a las 11 PM y a la mañana siguiente ya estaba en la silla. Sin enredos.",
    service: "Corte ejecutivo",
    name: "Javier L."
  },
  {
    text: "Llevo 8 meses viniendo cada quincena y nunca un corte ha sido inconsistente. Profesionalismo puro.",
    service: "Corte clásico",
    name: "Carlos V."
  },
  {
    text: "El café de cortesía fue el detalle inesperado. Sentí que entré a un estudio privado, no a una barbería común.",
    service: "Ritual completo",
    name: "Ricardo H."
  },
  {
    text: "Mi barba tenía un problema de simetría hace años. En una sola visita me la diseñó perfecta.",
    service: "Diseño de barba",
    name: "Luis F."
  },
  {
    text: "El tratamiento anti-caída me devolvió densidad. Producto italiano de verdad, no marketing.",
    service: "Tratamiento capilar",
    name: "Mario S."
  },
  {
    text: "Vine antes de mi boda y me asesoró sobre el estilo más fotogénico. Las fotos hablan por sí solas.",
    service: "Ritual completo",
    name: "Sebastián P."
  },
  {
    text: "El estudio es una obra. El ambiente solo ya vale la pena la visita. Y el corte, mejor.",
    service: "Corte + barba",
    name: "Alejandro N."
  }
];

function TestimonialCard({ review }: { review: Review }) {
  return (
    <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/[0.07] transition-colors">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className="w-3.5 h-3.5 text-accent fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
      <p className="font-serif italic text-white/85 text-sm leading-relaxed mb-5">
        “{review.text}”
      </p>
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <span className="text-white/70 text-xs font-semibold">{review.name}</span>
        <span className="text-accent text-[9px] uppercase tracking-widest font-bold">
          {review.service}
        </span>
      </div>
    </div>
  );
}

export default function ClientReviews() {
  const col1 = [...reviews.slice(0, 3), ...reviews.slice(0, 3)];
  const col2 = [...reviews.slice(3, 6), ...reviews.slice(3, 6)];
  const col3 = [...reviews.slice(6, 9), ...reviews.slice(6, 9)];

  return (
    <section className="relative py-28 px-6 bg-primary overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto mb-16 text-center"
      >
        <p className="text-accent uppercase tracking-[0.25em] text-xs font-semibold mb-3">
          06 · Clientes
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-white text-balance leading-[1.05]">
          Lo que dicen los que se sientan
        </h2>
      </motion.div>

      <div className="relative h-[600px] max-w-6xl mx-auto overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary to-transparent z-10 pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
          <div className="hidden md:flex flex-col gap-6 animate-scroller-down">
            {col1.map((r, i) => (
              <TestimonialCard key={`c1-${i}`} review={r} />
            ))}
          </div>

          <div className="flex flex-col gap-6 animate-scroller-up">
            {col2.map((r, i) => (
              <TestimonialCard key={`c2-${i}`} review={r} />
            ))}
          </div>

          <div className="hidden md:flex flex-col gap-6 animate-scroller-down">
            {col3.map((r, i) => (
              <TestimonialCard key={`c3-${i}`} review={r} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
