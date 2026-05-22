"use client";

import { motion } from "framer-motion";
import { Calendar, Award, MapPin } from "lucide-react";

function scrollToBooking() {
  document.getElementById("reservar")?.scrollIntoView({ behavior: "smooth" });
}

export default function MeetFrank() {
  return (
    <section id="frank" className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
        {/* Foto */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.5, 0, 0, 1] }}
          className="relative order-2 lg:order-1"
        >
          {/* Marco decorativo */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-accent" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-accent" />

          <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-premium">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/frank.jpg"
              alt="Frank, el barbero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
          </div>

          {/* Tarjeta flotante */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glassmorphism-dark absolute -bottom-8 left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0 p-5 rounded-2xl shadow-premium w-64"
          >
            <p className="text-accent uppercase tracking-[0.25em] text-[10px] font-bold mb-2">
              Duración por servicio
            </p>
            <p className="font-serif text-2xl text-white">
              30 <span className="text-white/30 text-base">·</span> 45{" "}
              <span className="text-white/30 text-base">·</span> 75
              <span className="text-white/40 text-xs ml-1">min</span>
            </p>
          </motion.div>
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.5, 0, 0, 1] }}
          className="order-1 lg:order-2 max-w-xl"
        >
          <p className="text-accent uppercase tracking-[0.25em] text-xs font-semibold mb-3">
            03 · Sobre mí
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-8 leading-[1.05] text-balance">
            Soy Frank, y esto es lo que hago.
          </h2>
          <div className="space-y-5 text-primary/70 leading-relaxed">
            <p>
              Llevo ocho años con la tijera en la mano. Aprendí el oficio a la
              vieja escuela: midiendo con los dedos, escuchando la cabeza antes de
              cortar y respetando el tiempo de cada cliente.
            </p>
            <p>
              Mi estudio es chico, deliberadamente. Una silla, una sesión, una
              cabeza a la vez. Así me concentro en lo que importa: que salgas con
              un corte que se vea bien hoy, mañana y dentro de tres semanas.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={scrollToBooking}
              className="px-8 py-3.5 bg-primary text-accent hover:bg-accent hover:text-primary border border-primary transition-colors font-bold tracking-widest uppercase text-xs rounded-full"
            >
              Reservar mi cita
            </button>
            <a
              href="#galeria"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("galeria")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3.5 border border-primary/15 text-primary hover:border-accent hover:text-accent transition-colors font-semibold tracking-widest uppercase text-xs rounded-full"
            >
              Ver galería
            </a>
          </div>
        </motion.div>
      </div>

      {/* Trust banner refinado */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="bg-white border border-primary/5 rounded-3xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 shadow-soft"
      >
        {[
          { icon: Calendar, title: "Reserva online", sub: "Confirmación por WhatsApp" },
          { icon: Award, title: "Producto importado", sub: "Proraso · Reuzel · Layrite" },
          { icon: MapPin, title: "Estudio en Obarrio", sub: "Calle 50, ciudad de Panamá" }
        ].map((item, i, arr) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className={`flex items-center gap-4 md:gap-5 ${
                i < arr.length - 1 ? "md:border-r md:border-primary/10 md:pr-4" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-primary leading-tight">
                  {item.title}
                </h4>
                <p className="text-primary/55 text-xs mt-0.5">{item.sub}</p>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
