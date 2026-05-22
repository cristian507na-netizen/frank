"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  CalendarCheck,
  CalendarDays,
  ArrowLeft,
  ArrowRight,
  Scissors,
  Sparkles,
  Droplets,
  Crown,
  MessageCircle,
  Mail
} from "lucide-react";

type ServiceId = "corte-clasico" | "corte-barba" | "afeitado" | "ritual-completo";

interface FormData {
  service: ServiceId | null;
  date: Date | null;
  time: string | null;
  name: string;
  phone: string;
  email: string;
  notes: string;
}

const services = [
  {
    id: "corte-clasico" as const,
    icon: Scissors,
    title: "Corte clásico",
    duration: "30 min",
    price: "$18",
    desc: "Corte a tijera y máquina con acabados a navaja."
  },
  {
    id: "corte-barba" as const,
    icon: Sparkles,
    title: "Corte + barba",
    duration: "45 min",
    price: "$28",
    desc: "Corte completo más perfilado y diseño de barba."
  },
  {
    id: "afeitado" as const,
    icon: Droplets,
    title: "Afeitado clásico",
    duration: "30 min",
    price: "$20",
    desc: "Afeitado a navaja con toalla caliente y bálsamo."
  },
  {
    id: "ritual-completo" as const,
    icon: Crown,
    title: "Ritual completo",
    duration: "75 min",
    price: "$45",
    desc: "Corte + afeitado + tratamiento + café. La experiencia firma."
  }
];

const STEPS = ["Servicio", "Fecha & Hora", "Tus Datos"] as const;

const MONTHS_ES = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
];

const WEEKDAYS = ["L", "M", "M", "J", "V", "S", "D"];

function generateTimeSlots() {
  const slots: string[] = [];
  for (let h = 9; h <= 19; h++) {
    slots.push(`${h.toString().padStart(2, "0")}:00`);
    if (h < 19) slots.push(`${h.toString().padStart(2, "0")}:30`);
    if (h === 19) slots.push(`19:30`);
  }
  return slots;
}

function sameDay(a: Date | null, b: Date | null) {
  if (!a || !b) return false;
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export default function BookingSection() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    service: null,
    date: null,
    time: null,
    name: "",
    phone: "",
    email: "",
    notes: ""
  });
  const [direction, setDirection] = useState<1 | -1>(1);
  const [calendarMonth, setCalendarMonth] = useState(() => {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), 1);
  });
  const [isConfirmed, setIsConfirmed] = useState(false);

  const timeSlots = useMemo(() => generateTimeSlots(), []);
  const selectedService = services.find((s) => s.id === formData.service);

  const canContinue = useMemo(() => {
    if (step === 1) return !!formData.service;
    if (step === 2) return !!formData.date && !!formData.time;
    if (step === 3) return formData.name.trim() && formData.phone.trim();
    return false;
  }, [step, formData]);

  function next() {
    if (step < 3 && canContinue) {
      setDirection(1);
      setStep(step + 1);
    } else if (step === 3 && canContinue) {
      setIsConfirmed(true);
    }
  }

  function back() {
    if (step > 1) {
      setDirection(-1);
      setStep(step - 1);
    }
  }

  function resetForm() {
    setIsConfirmed(false);
    setStep(1);
    setFormData({
      service: null,
      date: null,
      time: null,
      name: "",
      phone: "",
      email: "",
      notes: ""
    });
  }

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <section
      id="reservar"
      className="relative py-24 md:py-32 px-6 md:px-12 bg-background"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header minimalista */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 md:mb-16 max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-accent" />
            <p className="text-accent uppercase tracking-[0.3em] text-[11px] font-semibold">
              05 · Reserva
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl text-primary leading-[1.1] font-medium tracking-tight">
            Agenda tu silla
            <br />
            <span className="text-primary/40">en 3 pasos.</span>
          </h2>
          <p className="text-primary/60 mt-6 leading-relaxed max-w-lg">
            Elige tu servicio, la fecha y déjame tu WhatsApp. Te confirmo en
            minutos.
          </p>
        </motion.div>

        {/* Tarjeta del formulario */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-white rounded-3xl border border-primary/10 overflow-hidden shadow-soft"
        >
          {/* STEPPER */}
          <div className="px-5 md:px-8 py-5 border-b border-primary/5 flex items-center gap-3 md:gap-4">
            {STEPS.map((label, i) => {
              const idx = i + 1;
              const isActive = idx === step;
              const isDone = idx < step;
              return (
                <div
                  key={label}
                  className="flex items-center flex-1 last:flex-none min-w-0"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-xs transition-all flex-shrink-0 ${
                        isActive
                          ? "bg-primary text-white"
                          : isDone
                          ? "bg-accent text-primary"
                          : "bg-primary/5 text-primary/40"
                      }`}
                    >
                      {isDone ? <Check className="w-3.5 h-3.5" /> : idx}
                    </div>
                    <span
                      className={`text-sm font-medium whitespace-nowrap truncate transition-colors ${
                        isActive ? "text-primary" : "text-primary/40"
                      } ${isActive ? "inline" : "hidden md:inline"}`}
                    >
                      {label}
                    </span>
                  </div>
                  {idx < STEPS.length && (
                    <div
                      className={`flex-1 h-px mx-3 md:mx-4 transition-colors ${
                        isDone ? "bg-accent" : "bg-primary/10"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* BODY */}
          <div className="p-6 md:p-10 min-h-[480px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={step}
                custom={direction}
                initial={{ opacity: 0, x: direction === 1 ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction === 1 ? -20 : 20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                {step === 1 && <StepService formData={formData} update={update} />}
                {step === 2 && (
                  <StepDateTime
                    formData={formData}
                    update={update}
                    calendarMonth={calendarMonth}
                    setCalendarMonth={setCalendarMonth}
                    timeSlots={timeSlots}
                  />
                )}
                {step === 3 && (
                  <StepDetails
                    formData={formData}
                    update={update}
                    selectedService={selectedService}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* NAV */}
          <div className="px-6 md:px-10 py-5 border-t border-primary/5 flex items-center justify-between gap-4">
            <button
              onClick={back}
              className={`flex items-center gap-1.5 px-3 py-2 text-primary/50 hover:text-primary text-sm font-medium transition-colors ${
                step === 1 ? "invisible" : ""
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              Atrás
            </button>

            <button
              onClick={next}
              disabled={!canContinue}
              className={`flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full transition-all ${
                step === 3
                  ? "bg-accent text-primary hover:bg-primary hover:text-accent"
                  : "bg-primary text-white hover:bg-accent hover:text-primary"
              } ${
                !canContinue
                  ? "bg-primary/10 text-primary/30 cursor-not-allowed hover:bg-primary/10 hover:text-primary/30"
                  : ""
              }`}
            >
              {step === 3 ? (
                <>
                  <Check className="w-4 h-4" />
                  Confirmar reserva
                </>
              ) : (
                <>
                  Continuar
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>

      {/* MODAL CONFIRMACIÓN */}
      <AnimatePresence>
        {isConfirmed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-primary/90 backdrop-blur-md flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 220 }}
              className="bg-white rounded-3xl max-w-md w-full text-center p-10 md:p-12 shadow-premium"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.15 }}
                className="w-16 h-16 mx-auto mb-6 bg-accent/15 rounded-full flex items-center justify-center"
              >
                <Check className="w-8 h-8 text-accent" />
              </motion.div>
              <h3 className="text-2xl font-medium text-primary mb-3">
                Reserva enviada
              </h3>
              <p className="text-primary/60 mb-8 leading-relaxed text-sm">
                Recibirás tu confirmación por WhatsApp en los próximos minutos.
                Nos vemos en la silla.
              </p>
              <button
                onClick={resetForm}
                className="px-7 py-3 bg-primary text-white rounded-full text-sm font-semibold hover:bg-accent hover:text-primary transition-colors"
              >
                Entendido
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ---------- STEPS ---------- */

function StepService({
  formData,
  update
}: {
  formData: FormData;
  update: <K extends keyof FormData>(k: K, v: FormData[K]) => void;
}) {
  return (
    <div>
      <h3 className="text-xl md:text-2xl text-primary font-medium mb-1">
        ¿Qué te hago hoy?
      </h3>
      <p className="text-primary/50 text-sm mb-8">Selecciona un servicio.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {services.map((s) => {
          const Icon = s.icon;
          const selected = formData.service === s.id;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => update("service", s.id)}
              className={`group relative p-5 rounded-2xl border transition-all text-left ${
                selected
                  ? "border-primary bg-primary text-white"
                  : "border-primary/10 bg-white hover:border-primary/30"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    selected ? "bg-accent/20" : "bg-accent/10"
                  }`}
                >
                  <Icon className="w-4 h-4 text-accent" />
                </div>
                <div className="text-right">
                  <p
                    className={`text-base font-semibold ${
                      selected ? "text-accent" : "text-primary"
                    }`}
                  >
                    {s.price}
                  </p>
                  <p
                    className={`text-[10px] uppercase tracking-widest mt-0.5 ${
                      selected ? "text-white/50" : "text-primary/40"
                    }`}
                  >
                    {s.duration}
                  </p>
                </div>
              </div>
              <h4
                className={`text-base font-semibold mt-4 ${
                  selected ? "text-white" : "text-primary"
                }`}
              >
                {s.title}
              </h4>
              <p
                className={`text-sm mt-1 leading-relaxed ${
                  selected ? "text-white/60" : "text-primary/55"
                }`}
              >
                {s.desc}
              </p>

              {selected && (
                <div className="absolute top-4 right-4 w-5 h-5 rounded-full bg-accent text-primary flex items-center justify-center">
                  <Check className="w-3 h-3" />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function StepDateTime({
  formData,
  update,
  calendarMonth,
  setCalendarMonth,
  timeSlots
}: {
  formData: FormData;
  update: <K extends keyof FormData>(k: K, v: FormData[K]) => void;
  calendarMonth: Date;
  setCalendarMonth: (d: Date) => void;
  timeSlots: string[];
}) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const year = calendarMonth.getFullYear();
  const month = calendarMonth.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const offset = (firstDay.getDay() + 6) % 7;

  const cells: (Date | null)[] = [];
  for (let i = 0; i < offset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));

  function prevMonth() {
    setCalendarMonth(new Date(year, month - 1, 1));
  }
  function nextMonth() {
    setCalendarMonth(new Date(year, month + 1, 1));
  }

  return (
    <div>
      <h3 className="text-xl md:text-2xl text-primary font-medium mb-1">
        ¿Cuándo te espero?
      </h3>
      <p className="text-primary/50 text-sm mb-8">
        Lun–Vie 9:00–20:00 · Sáb 8:00–19:00 · Dom solo bajo cita privada.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="bg-primary/[0.02] rounded-2xl p-5 md:p-6">
          <div className="flex items-center justify-between mb-5">
            <p className="text-primary font-medium capitalize text-base">
              {MONTHS_ES[month].toLowerCase()} {year}
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={prevMonth}
                className="w-8 h-8 rounded-full bg-white border border-primary/10 hover:bg-primary hover:text-white text-primary flex items-center justify-center transition-colors"
                aria-label="Mes anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextMonth}
                className="w-8 h-8 rounded-full bg-white border border-primary/10 hover:bg-primary hover:text-white text-primary flex items-center justify-center transition-colors"
                aria-label="Mes siguiente"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-2">
            {WEEKDAYS.map((w, i) => (
              <div
                key={i}
                className="text-[10px] uppercase tracking-widest text-primary/35 text-center py-2 font-medium"
              >
                {w}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {cells.map((cell, i) => {
              if (!cell) return <div key={i} className="aspect-square" />;
              const isPast = cell < today;
              const isSunday = cell.getDay() === 0;
              const disabled = isPast || isSunday;
              const selected = sameDay(cell, formData.date);
              const isToday = sameDay(cell, today);

              return (
                <button
                  key={i}
                  type="button"
                  disabled={disabled}
                  onClick={() => {
                    update("date", cell);
                    update("time", null);
                  }}
                  className={`aspect-square rounded-lg text-sm font-medium transition-all ${
                    selected
                      ? "bg-primary text-white"
                      : disabled
                      ? "text-primary/15 cursor-not-allowed pointer-events-none"
                      : isToday
                      ? "border border-accent text-accent hover:bg-accent/10"
                      : "hover:bg-primary/5 text-primary"
                  }`}
                >
                  {cell.getDate()}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-[11px] uppercase tracking-widest text-primary/40 mb-3 font-semibold">
            Horarios disponibles
          </p>

          {!formData.date ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-primary/40 py-12 bg-primary/[0.02] rounded-2xl">
              <CalendarDays className="w-10 h-10 mb-3" />
              <p className="text-sm">Elige una fecha para ver horarios</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((slot, i) => {
                  const occupied = i % 4 === 0;
                  const selected = formData.time === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      disabled={occupied}
                      onClick={() => update("time", slot)}
                      className={`py-2.5 px-2 rounded-lg border text-sm font-medium transition-all ${
                        selected
                          ? "border-primary bg-primary text-white"
                          : occupied
                          ? "border-primary/5 bg-primary/[0.02] text-primary/20 line-through cursor-not-allowed pointer-events-none"
                          : "border-primary/10 bg-white hover:border-primary text-primary"
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>

              {formData.date && formData.time && (
                <div className="mt-5 p-4 bg-accent/10 border border-accent/20 rounded-xl flex items-center gap-3">
                  <CalendarCheck className="w-4 h-4 text-accent flex-shrink-0" />
                  <p className="text-primary text-sm">
                    {formData.date.toLocaleDateString("es-PA", {
                      weekday: "long",
                      day: "numeric",
                      month: "long"
                    })}{" "}
                    a las <span className="font-semibold">{formData.time}</span>
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function StepDetails({
  formData,
  update,
  selectedService
}: {
  formData: FormData;
  update: <K extends keyof FormData>(k: K, v: FormData[K]) => void;
  selectedService?: (typeof services)[number];
}) {
  const inputBase =
    "w-full px-4 py-3 bg-primary/[0.02] border border-primary/10 rounded-xl text-primary placeholder:text-primary/25 focus:outline-none focus:border-primary focus:bg-white transition-all text-sm";

  return (
    <div>
      <h3 className="text-xl md:text-2xl text-primary font-medium mb-1">
        Último paso
      </h3>
      <p className="text-primary/50 text-sm mb-8">
        Tu nombre y WhatsApp para confirmar la cita.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2 flex flex-col gap-1.5">
          <label className="text-[11px] font-semibold text-primary/60 uppercase tracking-wider">
            Nombre completo *
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Tu nombre y apellido"
            className={inputBase}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-semibold text-primary/60 uppercase tracking-wider">
            WhatsApp *
          </label>
          <div className="relative">
            <MessageCircle className="w-4 h-4 text-primary/30 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="+507 0000-0000"
              className={`${inputBase} pl-10`}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-semibold text-primary/60 uppercase tracking-wider">
            Correo electrónico
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-primary/30 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="tu@correo.com"
              className={`${inputBase} pl-10`}
            />
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col gap-1.5">
          <label className="text-[11px] font-semibold text-primary/60 uppercase tracking-wider">
            Notas para Frank
          </label>
          <textarea
            rows={3}
            value={formData.notes}
            onChange={(e) => update("notes", e.target.value)}
            placeholder="Referencia, alergia, preferencia…"
            className={`${inputBase} resize-none`}
          />
        </div>

        {/* Resumen */}
        <div className="md:col-span-2 mt-3 p-5 bg-primary/[0.03] rounded-2xl border border-primary/5">
          <p className="text-[11px] uppercase tracking-widest text-primary/40 mb-4 font-semibold">
            Resumen
          </p>
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div>
              <p className="text-primary/40 text-[10px] uppercase tracking-widest mb-1">
                Servicio
              </p>
              <p className="text-primary text-sm font-medium truncate">
                {selectedService?.title ?? "—"}
              </p>
            </div>
            <div>
              <p className="text-primary/40 text-[10px] uppercase tracking-widest mb-1">
                Fecha
              </p>
              <p className="text-primary text-sm font-medium truncate">
                {formData.date
                  ? formData.date.toLocaleDateString("es-PA", {
                      day: "numeric",
                      month: "short"
                    })
                  : "—"}
              </p>
            </div>
            <div>
              <p className="text-primary/40 text-[10px] uppercase tracking-widest mb-1">
                Hora
              </p>
              <p className="text-primary text-sm font-medium truncate">
                {formData.time ?? "—"}
              </p>
            </div>
          </div>
          {selectedService && (
            <div className="pt-4 border-t border-primary/10 flex items-center justify-between">
              <p className="text-xs uppercase tracking-widest text-primary/50 font-semibold">
                Total
              </p>
              <p className="text-2xl text-primary font-semibold">
                {selectedService.price}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
