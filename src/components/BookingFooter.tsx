"use client";

import {
  MessageCircle,
  Calendar,
  Clock,
  CalendarDays,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

function scrollToBooking() {
  document.getElementById("reservar")?.scrollIntoView({ behavior: "smooth" });
}

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#ritual", label: "Cómo trabajo" },
  { href: "#frank", label: "Sobre mí" },
  { href: "#galeria", label: "Galería" },
  { href: "#reservar", label: "Reservar" }
];

function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
}

export default function BookingFooter() {
  return (
    <footer className="bg-background pt-24 pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* CAPSULE CTA */}
        <div className="bg-primary rounded-[28px] md:rounded-[40px] p-8 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 shadow-premium relative overflow-hidden mb-24">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary z-0" />
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl z-0" />

          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            <p className="text-accent uppercase tracking-[0.25em] text-xs font-semibold mb-4">
              Reserva tu silla
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-[1.05] text-balance">
              ¿Listo para tu próximo corte?
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="https://wa.me/50760000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-primary font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <button
                onClick={scrollToBooking}
                className="flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold uppercase tracking-widest text-xs rounded-full hover:bg-white/10 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                Agendar online
              </button>
            </div>
          </div>

          <div className="relative z-10 glassmorphism-dark p-7 rounded-3xl w-full max-w-sm shrink-0">
            <h4 className="text-accent font-serif text-lg mb-5 border-b border-white/10 pb-4">
              Horarios
            </h4>
            <ul className="space-y-4 text-white/80 text-sm">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-accent shrink-0 mt-1" />
                <span>
                  <strong className="block text-white">Lun – Vie</strong>
                  <span className="text-white/60 text-xs">9:00 AM – 8:00 PM</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CalendarDays className="w-4 h-4 text-accent shrink-0 mt-1" />
                <span>
                  <strong className="block text-white">Sábados</strong>
                  <span className="text-white/60 text-xs">
                    8:00 AM – 7:00 PM · reserva con anticipación
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0 mt-1" />
                <span>
                  <strong className="block text-white">Domingos</strong>
                  <span className="text-white/60 text-xs">
                    Sólo bajo reserva privada por WhatsApp
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* GRID FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 text-primary/70 border-t border-primary/10 pt-16">
          {/* Marca */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-accent/30">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/frank.jpg"
                  alt="Frank"
                  className="w-full h-full object-cover"
                />
              </span>
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-2xl text-primary">
                  Frank<span className="text-accent">.</span> Barber
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-primary/50">
                  Estudio personal
                </span>
              </div>
            </div>
            <p className="text-sm mb-6 max-w-md leading-relaxed">
              Un barbero, una silla, una sesión a la vez. Cortes a tijera y navaja,
              diseño de barba y afeitados clásicos en el corazón de Panamá.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                </svg>
              </a>
              <a
                href="https://wa.me/50760000000"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-primary mb-5 uppercase tracking-widest text-[11px]">
              Navegar
            </h4>
            <ul className="space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => smoothScroll(e, l.href)}
                    className="hover:text-accent transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="lg:col-span-4">
            <h4 className="font-bold text-primary mb-5 uppercase tracking-widest text-[11px]">
              Contacto
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span>
                  Calle 50, Obarrio
                  <br />
                  <span className="text-primary/50 text-xs">Ciudad de Panamá</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-accent" />
                <a href="https://wa.me/50760000000" className="hover:text-accent transition-colors">
                  +507 6000-0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:hola@frankbarber.pa" className="hover:text-accent transition-colors">
                  hola@frankbarber.pa
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Pie inferior */}
        <div className="mt-14 pt-6 border-t border-primary/10 text-xs text-primary/50 flex flex-col md:flex-row justify-between items-center gap-3 text-center">
          <p>© {new Date().getFullYear()} Frank Barber Panamá. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">
              Términos
            </a>
            <span>·</span>
            <a href="#" className="hover:text-primary transition-colors">
              Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
