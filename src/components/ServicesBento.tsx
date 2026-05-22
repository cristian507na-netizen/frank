"use client";

import { motion } from "framer-motion";
import { Crown, Scissors, Sparkles, Droplets } from "lucide-react";

function scrollToBooking() {
  document.getElementById("reservar")?.scrollIntoView({ behavior: "smooth" });
}

function fadeUpProps(index: number) {
  return {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.8, delay: index * 0.12, ease: "easeOut" as const }
  };
}

const FEATURED_IMG =
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1400&q=80";
const TREATMENT_IMG =
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1400&q=80";

export default function ServicesBento() {
  return (
    <section id="servicios" className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <p className="text-accent uppercase tracking-[0.25em] text-xs font-semibold mb-3">
            01 · Servicios
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-primary leading-[1.05] max-w-2xl text-balance">
            Lo que hago en la silla
          </h2>
        </div>
        <p className="text-primary/60 max-w-md text-sm leading-relaxed">
          Cuatro servicios, todos ejecutados a mano. Sin atajos, sin máquinas
          rápidas, sin clientes en paralelo.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-5 md:gap-6">
        {/* 1. FEATURED */}
        <motion.div
          {...fadeUpProps(0)}
          className="md:col-span-2 md:row-span-2 bg-primary rounded-3xl p-8 md:p-10 flex flex-col justify-end relative overflow-hidden group hover-lift"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={FEATURED_IMG}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/20" />

          <div className="absolute top-7 left-7 z-10 w-12 h-12 bg-accent/15 backdrop-blur rounded-full flex items-center justify-center border border-accent/30">
            <Crown className="w-5 h-5 text-accent" />
          </div>

          <div className="absolute top-7 right-7 z-10 px-3 py-1 rounded-full bg-accent text-primary text-[10px] font-bold uppercase tracking-widest">
            Top del estudio
          </div>

          <div className="relative z-10">
            <p className="text-accent/80 uppercase tracking-[0.25em] text-[10px] font-bold mb-3">
              75 minutos
            </p>
            <h3 className="font-serif text-3xl md:text-4xl text-white mb-4 leading-tight text-balance">
              Ritual completo
            </h3>
            <p className="text-white/70 max-w-md mb-6 leading-relaxed text-sm">
              Corte de precisión, afeitado clásico con toalla caliente, masaje
              capilar y café de cortesía. El servicio que más me piden, y el que más
              disfruto hacer.
            </p>
            <button
              onClick={scrollToBooking}
              className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors uppercase tracking-widest text-xs font-bold"
            >
              Reservar
              <span aria-hidden>→</span>
            </button>
          </div>
        </motion.div>

        {/* 2. Standard A */}
        <motion.div
          {...fadeUpProps(1)}
          className="bg-white border border-primary/5 rounded-3xl p-7 shadow-soft hover:border-accent/40 hover-lift transition-colors flex flex-col"
        >
          <div className="w-11 h-11 bg-accent/10 rounded-full flex items-center justify-center mb-6">
            <Scissors className="w-5 h-5 text-accent" />
          </div>
          <p className="text-[10px] uppercase tracking-widest text-accent font-bold mb-2">
            30 min · $18
          </p>
          <h3 className="font-serif text-xl text-primary mb-2">Corte clásico</h3>
          <p className="text-primary/60 text-sm leading-relaxed flex-1">
            Fade, undercut, pompadour o textura. A tijera y máquina según tu rostro
            y estilo.
          </p>
          <button
            onClick={scrollToBooking}
            className="text-primary hover:text-accent transition-colors uppercase tracking-widest text-[11px] font-bold mt-6 text-left"
          >
            Reservar →
          </button>
        </motion.div>

        {/* 3. Standard B */}
        <motion.div
          {...fadeUpProps(2)}
          className="bg-white border border-primary/5 rounded-3xl p-7 shadow-soft hover:border-accent/40 hover-lift transition-colors flex flex-col"
        >
          <div className="w-11 h-11 bg-accent/10 rounded-full flex items-center justify-center mb-6">
            <Sparkles className="w-5 h-5 text-accent" />
          </div>
          <p className="text-[10px] uppercase tracking-widest text-accent font-bold mb-2">
            45 min · $28
          </p>
          <h3 className="font-serif text-xl text-primary mb-2">Corte + barba</h3>
          <p className="text-primary/60 text-sm leading-relaxed flex-1">
            Corte completo más perfilado y diseño de barba con aceites importados.
          </p>
          <button
            onClick={scrollToBooking}
            className="text-primary hover:text-accent transition-colors uppercase tracking-widest text-[11px] font-bold mt-6 text-left"
          >
            Reservar →
          </button>
        </motion.div>

        {/* 4. ACCENT con imagen */}
        <motion.div
          {...fadeUpProps(3)}
          className="md:col-span-2 bg-secondary text-white rounded-3xl p-7 md:p-9 flex flex-col md:flex-row items-stretch gap-6 md:gap-8 overflow-hidden relative hover-lift"
        >
          <div className="relative w-full md:w-48 h-40 md:h-auto rounded-2xl overflow-hidden flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={TREATMENT_IMG}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                  <Droplets className="w-5 h-5 text-accent" />
                </div>
                <p className="text-[10px] uppercase tracking-widest text-accent font-bold">
                  45 min · $30
                </p>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl mb-2 leading-tight">
                Tratamiento capilar
              </h3>
              <p className="text-white/65 text-sm leading-relaxed max-w-md">
                Hidratación profunda, anti-caída o tonificación con productos
                italianos. La salud del cabello primero.
              </p>
            </div>
            <button
              onClick={scrollToBooking}
              className="self-start mt-6 inline-flex items-center gap-2 text-accent hover:text-white transition-colors uppercase tracking-widest text-xs font-bold"
            >
              Reservar
              <span aria-hidden>→</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
