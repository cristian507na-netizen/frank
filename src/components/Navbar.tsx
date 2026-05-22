"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#ritual", label: "Ritual" },
  { href: "#frank", label: "Frank" },
  { href: "#galeria", label: "Galería" },
  { href: "#reservar", label: "Reservar" }
];

function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const id = href.replace("#", "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.5, 0, 0, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "pt-4 px-4 md:px-8" : "pt-0 px-0"
      }`}
    >
      <nav
        className={`mx-auto flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "max-w-5xl rounded-full glassmorphism-light shadow-soft px-4 md:px-6 py-3"
            : "max-w-7xl px-6 md:px-12 py-5"
        }`}
      >
        {/* Logo + nombre */}
        <a
          href="#top"
          onClick={(e) => smoothScroll(e, "#top")}
          className="flex items-center gap-3 group"
        >
          <span
            className={`relative overflow-hidden rounded-full ring-2 ring-accent/30 group-hover:ring-accent transition-all duration-300 ${
              scrolled ? "w-10 h-10" : "w-12 h-12"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/frank.jpg"
              alt="Frank Barber"
              className="w-full h-full object-cover"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg md:text-xl text-primary tracking-tight">
              Frank<span className="text-accent">.</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-primary/50">
              Barber
            </span>
          </span>
        </a>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.slice(0, -1).map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => smoothScroll(e, link.href)}
                className="text-sm uppercase tracking-widest text-primary/70 hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-accent transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#reservar"
            onClick={(e) => smoothScroll(e, "#reservar")}
            className="px-6 py-2.5 bg-primary text-accent hover:bg-accent hover:text-primary transition-colors uppercase tracking-widest text-xs font-bold rounded-full"
          >
            Reservar
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menú"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={open ? { opacity: 1, y: 0, pointerEvents: "auto" } : { opacity: 0, y: -10, pointerEvents: "none" }}
        transition={{ duration: 0.25 }}
        className="md:hidden mx-4 mt-2"
      >
        <ul className="glassmorphism-light rounded-3xl shadow-soft p-4 space-y-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  smoothScroll(e, link.href);
                  setOpen(false);
                }}
                className="block px-4 py-3 rounded-2xl uppercase tracking-widest text-xs font-bold text-primary/80 hover:bg-primary hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.header>
  );
}
