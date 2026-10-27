// src/App.jsx
// SoportePC Cordón — Landing completa (React + Vite + Tailwind v3)
// Logo en /public/logo-soportepc.png

import {
  Wrench,
  Download,
  Thermometer,
  HardDrive,
  Shield,
  Headphones,
  MessageCircle,
} from "lucide-react";

const LOGO_SRC = `${import.meta.env.BASE_URL}logo-soportepc.png`;

const WA_NUMBER = import.meta.env.VITE_WA_NUMBER || "598XXXXXXXX"; // sin +, sin espacios
const WA_TEXT = encodeURIComponent(
  "Hola, quiero consultar por un problema con mi computadora."
);
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`;

// Ajustá tu horario real acá
const BUSINESS_HOURS = "Lun–Sáb 10:00 a 19:00";

const NAV_ITEMS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#precios", label: "Precios" },
  { href: "#como-trabajo", label: "Cómo trabajo" },
  { href: "#faq", label: "FAQ" },
];

const HERO_BADGES = ["Recepción con coordinación", "Soporte remoto", "Presupuesto previo"];

const HERO_CARDS = [
  { title: "PC lenta", desc: "Arranque lento, errores, falta de espacio, programas pesados." },
  { title: "Notebook caliente", desc: "Limpieza interna y pasta térmica para bajar temperatura." },
  { title: "Actualizar a SSD", desc: "Instalación y clonación para mejorar rendimiento." },
  { title: "Soporte remoto", desc: "Ayuda con Windows, programas, impresoras y configuraciones." },
];

const TRUST_POINTS = [
  { title: "Formación técnica", desc: "Formación en soporte IT y desarrollo de software." },
  { title: "Presupuesto antes de avanzar", desc: "Confirmo costos y opciones antes de hacer cambios." },
  { title: "Condiciones claras", desc: "Informo alcance, presupuesto y condiciones de garantía antes del trabajo." },
  { title: "Trabajo prolijo", desc: "Pruebas finales de estabilidad/rendimiento/temperaturas." },
];

// ✅ MISMO ARRAY, SOLO AGREGANDO icon EN CADA SERVICIO
const SERVICES = [
  { icon: Wrench, title: "Reparación y optimización", desc: "PC lenta, errores, pantalla azul, drivers, arranque y rendimiento." },
  { icon: Download, title: "Formateo e instalación", desc: "Windows/Linux, drivers, configuración inicial y programas básicos." },
  { icon: Thermometer, title: "Limpieza interna + pasta térmica", desc: "Menos temperatura, menos ruido, mejor estabilidad." },
  { icon: HardDrive, title: "Upgrade SSD / RAM", desc: "Instalación, clonación (si aplica) y pruebas de rendimiento." },
  { icon: Shield, title: "Backup y recuperación básica", desc: "Rescate de archivos, copias seguras y migración de datos." },
  {
    icon: Truck,
    title: "Retiro y entrega (Cordón y cercanías)",
    desc: "Coordinado por WhatsApp según disponibilidad. Ideal si no podés trasladar el equipo.",
  },
];

const PRICES = [
  { service: "Diagnóstico", price: "$ 700", fixed: true, note: "Se descuenta de la mano de obra si realizamos la reparación." },
  { service: "Optimización / puesta a punto", price: "$ 1.500" },
  { service: "Formateo + instalación", price: "$ 2.200", note: "Drivers + configuración inicial." },
  { service: "Limpieza interna + pasta térmica", price: "$ 1.800" },
  { service: "Instalación SSD / clonación", price: "$ 2.000", note: "SSD aparte." },
  { service: "Instalación RAM", price: "$ 1.200", note: "Memoria aparte." },\n  { service: "Soporte técnico remoto", price: "$ 600", note: "Según el problema y la duración." },
];

const PROCESS_STEPS = [
  ["1", "WhatsApp", "Me escribís con el problema y el modelo del equipo."],
  ["2", "Coordinación", "Coordinamos la recepción del equipo o una sesión de soporte remoto."],
  ["3", "Diagnóstico", "Te paso el presupuesto antes de hacer cambios."],
  ["4", "Reparación", "Trabajo + pruebas (rendimiento/temperaturas/estabilidad)."],
  ["5", "Finalización", "Probamos el resultado y coordinamos la devolución del equipo si corresponde."],
];

const FAQS = [
  {
    q: "¿Cuánto demora?",
    a: "Depende del problema, la disponibilidad y los repuestos. Te informo el plazo estimado después de revisar el caso.",
  },
  { q: "¿Perderé mis archivos?", a: "Siempre consulto antes. Si hay riesgo, propongo backup o recuperación como primer paso." },
  { q: "¿Trabajás con turno?", a: "Sí. Coordinamos por WhatsApp para atender prolijo y sin esperas." },
  {
    q: "¿Hacés retiro y entrega?",
    a: "Sí, coordinado en Cordón y cercanías según disponibilidad. Te confirmo horario y punto por WhatsApp.",
  },
  { q: "¿Trabajás con Windows y Linux?", a: "Sí. Windows y Linux. (Mac: a confirmar según caso.)" },
  { q: "¿Das garantía?", a: "Las condiciones de garantía se informan antes del trabajo y dependen del servicio realizado. Los repuestos tienen la garantía de su proveedor." },
  {
    q: "¿Cómo pido presupuesto?",
    a: "Escribime por WhatsApp con el problema, modelo del equipo y si querés, una foto/video del error.",
  },
];

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
      {children}
    </span>
  );
}

function SectionTitle({ kicker, title, subtitle }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {kicker && <p className="text-sm font-semibold tracking-wide text-slate-500">{kicker}</p>}
      <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
      {subtitle && <p className="mt-3 text-base leading-relaxed text-slate-600">{subtitle}</p>}
    </div>
  );
}

// ✅ MISMO CARD, SOLO AGREGO Icon OPCIONAL (no afecta HERO_CARDS porque no lo pasan)
function Card({ title, desc, Icon }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex gap-4">
        {Icon ? (
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-slate-100">
            <Icon className="h-5 w-5 text-slate-900" />
          </div>
        ) : null}

        <div className="min-w-0">
          <h3 className="text-base font-extrabold text-slate-900">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function PriceRow({ service, price, note, fixed = false }) {
  return (
    <div className="flex flex-col gap-1 border-b border-slate-100 py-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-semibold text-slate-900">{service}</p>
        {note && <p className="text-sm text-slate-500">{note}</p>}
      </div>
      <p className="text-slate-700">
        {!fixed && "Desde "}<span className="font-bold">{price}</span>
      </p>
    </div>
  );
}

function FAQItem({ q, a }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <p className="font-bold text-slate-900">{q}</p>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{a}</p>
    </div>
  );
}

function PrimaryButton({ href, children, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={
        "inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800 " +
        className
      }
    >
      {children}
    </a>
  );
}

function SecondaryButton({ href, children, className = "" }) {
  return (
    <a
      href={href}
      className={
        "inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-900 hover:bg-slate-100 " +
        className
      }
    >
      {children}
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          {/* Logo horizontal (grande) */}
          <a href="#" className="flex items-center">
            <div className="rounded-xl bg-transparent">
              <img
                src={LOGO_SRC}
                alt="SoportePC Cordón — Reparación y soporte técnico"
                className="
                  h-10 w-auto object-contain
                  sm:h-12
                "
                loading="eager"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement.innerHTML =
                    '<div class="grid h-10 w-28 place-items-center rounded-xl bg-slate-900 text-white text-xs font-extrabold sm:h-12 sm:w-36">SoportePC</div>';
                }}
              />
            </div>
          </a>

          <nav className="hidden flex-1 items-center justify-center gap-6 text-sm font-semibold text-slate-600 md:flex">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} className="hover:text-slate-900" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-bold text-white hover:bg-slate-800"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="flex flex-wrap gap-2">
              {HERO_BADGES.map((b) => (
                <Badge key={b}>{b}</Badge>
              ))}
            </div>

            <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
              Reparación de PC y notebooks en Cordón, Montevideo
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Diagnóstico claro, soluciones rápidas y atención directa por WhatsApp. Optimización, formateo, upgrades
              (SSD/RAM) y limpieza interna.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href={WA_LINK}>Consultar por WhatsApp</PrimaryButton>
              <SecondaryButton href="#servicios">Ver servicios</SecondaryButton>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Garantía por escrito en trabajos de software y mano de obra. Repuestos según proveedor. Recuperación
              avanzada de datos se cotiza aparte.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-500">Ideal para:</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {HERO_CARDS.map((c) => (
                <Card key={c.title} title={c.title} desc={c.desc} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Confianza */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <SectionTitle
            kicker="Confianza"
            title="Trabajo con proceso y garantías claras"
            subtitle="La idea es simple: saber exactamente qué se va a hacer, cuánto cuesta y cuándo se entrega."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_POINTS.map((p) => (
              <div key={p.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="font-extrabold text-slate-900">{p.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <PrimaryButton href={WA_LINK}>Pedir presupuesto</PrimaryButton>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="scroll-mt-24 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <SectionTitle
            kicker="Qué hago"
            title="Servicios principales"
            subtitle="Enfoque en trabajos de alta demanda y alto impacto en rendimiento."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Card key={s.title} title={s.title} desc={s.desc} Icon={s.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* Precios */}
      <section id="precios" className="scroll-mt-24 border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <SectionTitle
            kicker="Transparencia"
            title="Precios orientativos"
            subtitle="El presupuesto final depende del diagnóstico. Siempre confirmo antes de hacer cambios."
          />

          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            {PRICES.map((row) => (
              <PriceRow key={row.service} {...row} />
            ))}

            <PrimaryButton href={WA_LINK} className="mt-6 w-full">
              Pedir presupuesto por WhatsApp
            </PrimaryButton>

            <p className="mt-3 text-xs text-slate-500">
              Precios orientativos. No incluyen repuestos. Recuperación avanzada de datos se cotiza aparte. En casos
              complejos, se confirma el total antes de avanzar.
            </p>
          </div>
        </div>
      </section>

      {/* Cómo trabajo */}
      <section id="como-trabajo" className="scroll-mt-24 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <SectionTitle kicker="Proceso" title="Cómo trabajo" subtitle="Simple, claro y con control del presupuesto." />

          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {PROCESS_STEPS.map(([n, t, d]) => (
              <div key={n} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-slate-900 text-white font-extrabold">
                    {n}
                  </div>
                  <p className="font-extrabold text-slate-900">{t}</p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-500">Zona de atención</p>
                <p className="mt-1 text-lg font-extrabold text-slate-900">
                  Cordón, Centro, Tres Cruces, La Comercial y alrededores
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Recepción de equipos con coordinación previa. No realizo visitas a domicilio. También ofrezco soporte remoto.
                </p>
              </div>
              <PrimaryButton href={WA_LINK} className="px-5 py-3">
                Agendar por WhatsApp
              </PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <SectionTitle
            kicker="Dudas comunes"
            title="Preguntas frecuentes"
            subtitle="Respuestas cortas y claras para acelerar la decisión."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {FAQS.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-slate-900 p-8 text-white">
            <p className="text-sm font-semibold text-white/70">Listo para resolverlo</p>
            <h3 className="mt-2 text-2xl font-black">Consultá ahora por WhatsApp</h3>
            <p className="mt-2 text-sm text-white/80">
              Contame el problema y el modelo. Te digo el camino más rápido y el presupuesto estimado.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-900 hover:bg-slate-100"
            >
              Abrir WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-600">
              © {new Date().getFullYear()} SoportePC Cordón — Reparación de PC y notebooks en Montevideo.
            </p>

            <div className="flex items-center gap-4 text-sm font-semibold">
              <a className="text-slate-600 hover:text-slate-900" href="#servicios">
                Servicios
              </a>
              <a className="text-slate-600 hover:text-slate-900" href="#precios">
                Precios
              </a>
              <a className="text-slate-600 hover:text-slate-900" href={WA_LINK} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </div>

          <p className="mt-2 text-xs text-slate-500">
            Atención con turno — Cordón (Montevideo). Horario: {BUSINESS_HOURS}.
          </p>

          <p className="mt-2 text-xs text-slate-500">
            Precios orientativos. Presupuesto final según diagnóstico. No incluye repuestos. Recuperación avanzada de
            datos se cotiza aparte.
          </p>
        </div>
      </footer>

      {/* Acceso rápido a WhatsApp desde cualquier sección */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Consultar a SoportePC Cordón por WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-green-600 px-4 py-3 font-bold text-white shadow-lg transition hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-200"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        <span className="hidden sm:inline">Consultanos</span>
      </a>
    </div>
  );
}
