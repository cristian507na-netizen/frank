"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SplitText from "@/components/SplitText";
import Navbar from "@/components/Navbar";
import ServicesBento from "@/components/ServicesBento";
import TheRitual from "@/components/TheRitual";
import MeetFrank from "@/components/MeetFrank";
import Gallery from "@/components/Gallery";
import BookingSection from "@/components/BookingSection";
import ClientReviews from "@/components/ClientReviews";
import BookingFooter from "@/components/BookingFooter";

const HERO_IMG =
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=2000&q=80";

function scrollToBooking() {
  document.getElementById("reservar")?.scrollIntoView({ behavior: "smooth" });
}

export default function Page() {
  const [hasStarted, setHasStarted] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowSubtitle(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <main id="top" className="relative">
      <AnimatePresence mode="wait">
        {!hasStarted ? (
          <motion.div
            key="intro"
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-primary overflow-hidden"
          >
            {/* Foto a pantalla completa */}
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2.4, ease: [0.5, 0, 0, 1] }}
              className="absolute inset-0"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/frank.jpg"
                alt="Frank"
                className="absolute inset-0 w-full h-full object-cover object-[50%_30%] opacity-60"
              />
              {/* Gradient overlays para mood y legibilidad */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/50 to-primary" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-primary/60" />
            </motion.div>

            {/* Esquinas decorativas */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="absolute inset-6 md:inset-10 pointer-events-none"
            >
              <span className="absolute top-0 left-0 w-10 h-10 border-t border-l border-accent/50" />
              <span className="absolute top-0 right-0 w-10 h-10 border-t border-r border-accent/50" />
              <span className="absolute bottom-0 left-0 w-10 h-10 border-b border-l border-accent/50" />
              <span className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-accent/50" />
            </motion.div>

            {/* Línea superior con etiquetas */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute top-10 md:top-14 left-0 right-0 px-10 md:px-16 flex justify-between items-center text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-white/40 font-medium"
            >
              <span>Est. MMXVIII</span>
              <span className="hidden md:block">Frank · Barber</span>
              <span>Panamá · PA</span>
            </motion.div>

            {/* Contenido central */}
            <div className="relative h-full w-full flex flex-col items-center justify-center px-6">
              <SplitText
                text="FRANK"
                className="font-serif text-[22vw] md:text-[14rem] lg:text-[16rem] text-white tracking-[-0.04em] leading-[0.85]"
                delay={70}
                duration={1.1}
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.9 }}
                className="flex items-baseline gap-3 mt-2 md:mt-4"
              >
                <span className="h-px w-10 md:w-16 bg-accent/60 self-center" />
                <span className="font-serif italic text-accent text-2xl md:text-4xl tracking-wide">
                  Barber
                </span>
                <span className="h-px w-10 md:w-16 bg-accent/60 self-center" />
              </motion.div>

              <AnimatePresence>
                {showSubtitle && (
                  <motion.p
                    key="sub-text"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-8 md:mt-10 text-white/55 text-sm md:text-base uppercase tracking-[0.4em] font-light text-center max-w-md"
                  >
                    Cortes hechos a mano · Panamá
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Botón inferior */}
            <AnimatePresence>
              {showSubtitle && (
                <motion.div
                  key="cta"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute bottom-14 md:bottom-20 left-0 right-0 flex flex-col items-center gap-5"
                >
                  <button
                    onClick={() => setHasStarted(true)}
                    className="group relative inline-flex items-center gap-3 px-10 py-4 bg-accent text-primary hover:bg-white transition-colors duration-300 font-semibold uppercase tracking-[0.3em] text-[11px] rounded-full"
                  >
                    Entrar al estudio
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>

                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    className="text-white/30 text-[10px] uppercase tracking-[0.4em] font-light"
                  >
                    o desliza
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Navbar />

            {/* HERO */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20">
              <div className="absolute inset-0 z-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={HERO_IMG}
                  alt=""
                  className="w-full h-full object-cover opacity-25"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
              </div>

              <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 backdrop-blur"
                >
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-primary/70 uppercase tracking-[0.25em] text-[10px] md:text-xs font-semibold">
                    Estudio personal · Panamá
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.35 }}
                  className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary leading-[1.02] mb-8 text-balance"
                >
                  Tu corte,
                  <br />
                  <span className="italic text-accent">hecho a mano.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.55 }}
                  className="text-base md:text-lg text-primary/70 max-w-xl mx-auto mb-12 leading-relaxed"
                >
                  Soy Frank. Hago cortes a tijera y navaja, diseño de barba y afeitados
                  clásicos en una silla, con tiempo dedicado a cada cabeza. Sin filas,
                  sin prisas.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.75 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <button
                    onClick={scrollToBooking}
                    className="px-10 py-4 bg-primary text-accent hover:bg-accent hover:text-primary transition-all duration-300 font-bold uppercase tracking-widest text-xs rounded-full shadow-premium hover-lift"
                  >
                    Reservar mi cita
                  </button>
                  <a
                    href="#galeria"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("galeria")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-10 py-4 border border-primary/20 text-primary hover:border-accent hover:text-accent transition-colors uppercase tracking-widest text-xs font-semibold rounded-full"
                  >
                    Ver galería
                  </a>
                </motion.div>

                {/* Stats bar */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="mt-20 grid grid-cols-3 max-w-2xl mx-auto gap-6 md:gap-10 pt-10 border-t border-primary/10"
                >
                  {[
                    { num: "8+", label: "Años de oficio" },
                    { num: "2K+", label: "Cortes firmados" },
                    { num: "4.9", label: "Reseñas en Google" }
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="font-serif text-3xl md:text-4xl text-primary">{s.num}</p>
                      <p className="text-[10px] md:text-xs uppercase tracking-widest text-primary/50 mt-1">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </section>

            <ServicesBento />
            <TheRitual />
            <MeetFrank />
            <Gallery />
            <BookingSection />
            <ClientReviews />
            <BookingFooter />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
