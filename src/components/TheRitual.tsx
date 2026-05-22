"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Flame,
  Scissors,
  Coffee,
  SprayCan,
  Clock
} from "lucide-react";

const rituals = [
  {
    icon: ShieldCheck,
    title: "Una silla a la vez",
    desc: "Atiendo de a un cliente. Sin clientes en paralelo, sin tiempos cruzados. Toda la sesión es tuya."
  },
  {
    icon: Flame,
    title: "Toalla caliente",
    desc: "Apertura de poros antes del afeitado para una pasada de navaja limpia, sin irritación."
  },
  {
    icon: Scissors,
    title: "Herramienta esterilizada",
    desc: "Tijeras, navajas y peines higienizados entre cada cliente. Punto y aparte."
  },
  {
    icon: Coffee,
    title: "Café o cerveza",
    desc: "Bebida de bienvenida mientras decidimos el corte. La sesión arranca relajada."
  },
  {
    icon: SprayCan,
    title: "Producto importado",
    desc: "Trabajo con Proraso, Reuzel y Layrite. Productos que aguantan el clima panameño."
  },
  {
    icon: Clock,
    title: "Puntualidad",
    desc: "Si tu cita es a las 4:00 PM, a las 4:00 PM estás en la silla. Respeto tu tiempo."
  }
];

export default function TheRitual() {
  return (
    <section
      id="ritual"
      className="relative py-28 px-6 md:px-12 bg-primary overflow-hidden"
    >
      <span className="absolute -bottom-10 -right-10 text-white/[0.025] font-serif text-[14rem] md:text-[20rem] leading-none tracking-tighter pointer-events-none select-none z-0 italic">
        Frank
      </span>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <p className="text-accent uppercase tracking-[0.25em] text-xs font-semibold mb-3">
            02 · Cómo trabajo
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-6 text-balance">
            Detalles que no se ven en la foto
          </h2>
          <p className="text-white/55 leading-relaxed">
            La confianza se gana en lo pequeño. Estos son los seis principios que
            sostienen cada cita en el estudio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {rituals.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.5, 0, 0, 1] }}
                className="group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-11 h-11 bg-accent/15 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-5 h-5 text-accent group-hover:text-primary transition-colors" />
                  </div>
                  <span className="font-serif text-accent/40 text-2xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
