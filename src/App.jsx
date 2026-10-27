
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  Clock3,
  Download,
  HardDrive,
  Headphones,
  Laptop,
  MapPin,
  Menu,
  MessageCircle,
  Monitor,
  Shield,
  ShieldCheck,
  Sparkles,
  Thermometer,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

const LOGO_SRC = `${import.meta.env.BASE_URL}logo-soportepc.png`;

const WA_NUMBER =
  import.meta.env.VITE_WA_NUMBER || "59898235535";

const WA_LINK = (message) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

const DEFAULT_MESSAGE =
  "Hola, quiero consultar por un problema con mi computadora.";

const HOURS = "Lunes a sábado, 10:00 a 19:00";

const NAV = [
  { label: "Servicios", href: "#servicios" },
  { label: "Precios", href: "#precios" },
  { label: "Cómo trabajo", href: "#proceso" },
  { label: "Preguntas", href: "#preguntas" },
];

const SERVICES = [
  {
    icon: Wrench,
    title: "Reparación de PC y notebooks",
    desc: "Problemas de encendido, pantallas azules, errores de Windows y fallas de funcionamiento.",
    tag: "Diagnóstico técnico",
    message: "Hola, necesito revisar una PC o notebook.",
  },
  {
    icon: Zap,
    title: "Optimización de equipos",
    desc: "Mejoramos el rendimiento de computadoras lentas, el inicio de Windows y la configuración del sistema.",
    tag: "Desde $1.500",
    message: "Hola, quiero consultar por optimización de una computadora.",
  },
  {
    icon: Download,
    title: "Formateo e instalación",
    desc: "Instalación de Windows o Linux, controladores, actualizaciones y configuración inicial.",
    tag: "Desde $2.200",
    message: "Hola, quiero consultar por un formateo o instalación de Windows.",
  },
  {
    icon: Thermometer,
    title: "Limpieza y mantenimiento",
    desc: "Limpieza interna, ventiladores, disipadores y cambio de pasta térmica cuando corresponde.",
    tag: "Desde $1.800",
    message: "Hola, quiero consultar por limpieza y mantenimiento de mi computadora.",
  },
  {
    icon: HardDrive,
    title: "Instalación de SSD y RAM",
    desc: "Actualización de componentes compatibles, clonación de discos y pruebas de funcionamiento.",
    tag: "Actualizaciones",
    message: "Hola, quiero consultar por instalación de SSD o memoria RAM.",
  },
  {
    icon: Headphones,
    title: "Soporte técnico remoto",
    desc: "Solución de problemas de Windows, programas, impresoras y configuraciones sin trasladar el equipo.",
    tag: "Desde $600",
    message: "Hola, necesito soporte técnico remoto.",
  },
];

const PRICES = [
  {
    name: "Diagnóstico técnico",
    price: "$700",
    fixed: true,
    note: "Se descuenta de la mano de obra si realizamos la reparación.",
    featured: true,
  },
  {
    name: "Optimización de equipos",
    price: "$1.500",
  },
  {
    name: "Formateo e instalación",
    price: "$2.200",
  },
  {
    name: "Limpieza interna y pasta térmica",
    price: "$1.800",
  },
  {
    name: "Instalación de SSD y clonación",
    price: "$2.000",
    note: "Disco SSD aparte.",
  },
  {
    name: "Instalación de RAM",
    price: "$1.200",
    note: "Memoria RAM aparte.",
  },
  {
    name: "Soporte técnico remoto",
    price: "$600",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Nos escribís",
    desc: "Contanos por WhatsApp qué problema tiene tu computadora.",
  },
  {
    number: "02",
    title: "Coordinamos",
    desc: "Acordamos la recepción del equipo o una sesión remota.",
  },
  {
    number: "03",
    title: "Diagnosticamos",
    desc: "Revisamos la falla y te presentamos un presupuesto.",
  },
  {
    number: "04",
    title: "Solucionamos",
    desc: "Realizamos el trabajo aprobado y comprobamos el resultado.",
  },
];

const FAQS = [
  {
    q: "¿Dónde están ubicados?",
    a: "Trabajamos en Cordón, Montevideo. La recepción de equipos se realiza únicamente con coordinación previa por WhatsApp. No publicamos una dirección de atención abierta al público.",
  },
  {
    q: "¿Hacen visitas a domicilio?",
    a: "No realizamos visitas ni retiros a domicilio. Podés acercar tu equipo con coordinación previa o solicitar soporte técnico remoto.",
  },
  {
    q: "¿Cuánto cuesta el diagnóstico?",
    a: "El diagnóstico tiene un costo de $700 UYU. Si realizamos la reparación, ese importe se descuenta de la mano de obra.",
  },
  {
    q: "¿Cuánto demora una reparación?",
    a: "Depende de la falla, la disponibilidad y los repuestos necesarios. Te informamos el plazo estimado después de revisar el caso.",
  },
  {
    q: "¿Voy a perder mis archivos?",
    a: "Antes de realizar cambios que puedan afectar tus datos, te informamos los riesgos y evaluamos las opciones de respaldo.",
  },
  {
    q: "¿Ofrecen soporte remoto?",
    a: "Sí. Podemos ayudarte con problemas de Windows, programas y configuraciones cuando el equipo permite una conexión remota.",
  },
  {
    q: "¿Qué garantía ofrecen?",
    a: "Las condiciones de garantía dependen del trabajo realizado y se informan antes de comenzar. Los repuestos tienen la garantía correspondiente del proveedor.",
  },
];

function WhatsAppButton({
  children = "Consultar por WhatsApp",
  message = DEFAULT_MESSAGE,
  light = false,
  className = "",
}) {
  return (
    <a
      href={WA_LINK(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition duration-200 hover:-translate-y-0.5 ${
        light
          ? "bg-white text-slate-900 shadow-lg hover:bg-slate-100"
          : "bg-green-600 text-white shadow-lg shadow-green-900/10 hover:bg-green-700"
      } ${className}`}
    >
      <MessageCircle className="h-5 w-5" />
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  desc,
  center = true,
}) {
  return (
    <div
      className={`max-w-2xl ${
        center ? "mx-auto text-center" : ""
      }`}
    >
      <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-blue-600">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {desc && (
        <p className="mt-4 text-base leading-7 text-slate-600">
          {desc}
        </p>
      )}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#inicio"
          className="flex shrink-0 items-center gap-2"
        >
          <img
            src={LOGO_SRC}
            alt="SoportePC Cordón"
            className="h-11 w-auto object-contain sm:h-12"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <span className="text-sm font-black tracking-tight text-slate-900 sm:text-base">
            SoportePC <span className="text-blue-600">Cordón</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden sm:block">
          <WhatsAppButton className="px-4 py-2.5">
            Consultar
          </WhatsAppButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="rounded-xl border border-slate-200 p-2.5 text-slate-800 lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-slate-950 text-white"
    >
      <div className="pointer-events-none absolute -right-32 -top-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-52 left-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-bold text-blue-200">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Servicio técnico en Cordón, Montevideo
          </div>

          <h1 className="max-w-2xl text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            Tu computadora
            <span className="block text-blue-400">
              funcionando mejor.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Reparación de PC y notebooks, diagnóstico de fallas,
            mantenimiento, instalación de SSD y RAM, formateo y
            soporte técnico remoto.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton className="sm:px-6">
              Consultar por WhatsApp
            </WhatsAppButton>

            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Ver servicios
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-green-400" />
              Presupuesto previo
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-green-400" />
              Atención coordinada
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-green-400" />
              Soporte remoto
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-blue-500/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-lg sm:p-7">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-500/20 p-3 text-blue-300">
                  <Monitor size={25} />
                </div>
                <div>
                  <p className="font-bold">SoportePC Cordón</p>
                  <p className="text-xs text-slate-400">
                    Diagnóstico y soluciones
                  </p>
                </div>
              </div>
              <ShieldCheck className="text-green-400" size={25} />
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-300">
                  Diagnóstico técnico
                </p>
                <span className="rounded-full bg-green-500/15 px-3 py-1 text-xs font-bold text-green-300">
                  Disponible
                </span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black tracking-tight">
                  $700
                </span>
                <span className="text-sm text-slate-400">UYU</span>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Se descuenta de la mano de obra si realizamos la reparación.
              </p>

              <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
                {[
                  "Revisión del problema",
                  "Evaluación de posibles fallas",
                  "Presupuesto antes de reparar",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-200"
                  >
                    <Check
                      size={17}
                      className="shrink-0 text-green-400"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <HardDrive className="mb-3 text-blue-400" size={22} />
                <p className="text-sm font-bold">SSD y RAM</p>
                <p className="mt-1 text-xs text-slate-400">
                  Actualizaciones
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <Headphones className="mb-3 text-blue-400" size={22} />
                <p className="text-sm font-bold">Soporte remoto</p>
                <p className="mt-1 text-xs text-slate-400">
                  Sin trasladar el equipo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: ShieldCheck, title: "Presupuesto previo", desc: "Sin reparaciones no autorizadas" },
    { icon: Laptop, title: "PC y notebooks", desc: "Hardware y software" },
    { icon: MapPin, title: "Cordón, Montevideo", desc: "Recepción coordinada" },
    { icon: Headphones, title: "Asistencia remota", desc: "Cuando el equipo lo permite" },
  ];

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                <Icon size={21} />
              </div>
              <div>
                <p className="text-sm font-extrabold text-slate-900">
                  {item.title}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section
      id="servicios"
      className="scroll-mt-24 bg-slate-50 px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Nuestros servicios"
          title="Soluciones para tu computadora"
          desc="Desde una PC lenta hasta una actualización de hardware. Te ayudamos a identificar el problema y elegir la solución adecuada."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={27} />
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold tracking-tight text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  {service.desc}
                </p>

                <a
                  href={WA_LINK(service.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 border-t border-slate-100 pt-5 text-sm font-bold text-blue-600 transition hover:gap-3"
                >
                  Consultar servicio
                  <ArrowRight size={17} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section
      id="precios"
      className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Precios transparentes"
          title="Conocé nuestros precios"
          desc="Tarifas de referencia en pesos uruguayos. Confirmamos el presupuesto antes de realizar cualquier reparación."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-600/20 blur-3xl" />

            <div className="relative">
              <div className="inline-flex rounded-xl bg-blue-500/20 p-3 text-blue-300">
                <ShieldCheck size={28} />
              </div>

              <p className="mt-7 text-sm font-bold text-blue-300">
                Diagnóstico técnico
              </p>

              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-6xl font-black">$700</span>
                <span className="text-slate-400">UYU</span>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-300">
                Revisamos el equipo para identificar la posible causa
                de la falla y definir los siguientes pasos.
              </p>

              <div className="mt-7 rounded-xl border border-green-500/20 bg-green-500/10 p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-green-400"
                    size={20}
                  />
                  <p className="text-sm leading-6 text-green-100">
                    Si realizamos la reparación, descontamos los
                    $700 de la mano de obra.
                  </p>
                </div>
              </div>

              <WhatsAppButton
                className="mt-8 w-full"
                message="Hola, quiero coordinar un diagnóstico técnico."
              >
                Coordinar diagnóstico
              </WhatsAppButton>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-5 flex items-center justify-between gap-3">
              <h3 className="text-lg font-extrabold text-slate-900">
                Lista de servicios
              </h3>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                UYU
              </span>
            </div>

            <div className="divide-y divide-slate-100">
              {PRICES.filter((p) => !p.featured).map((item) => (
                <div
                  key={item.name}
                  className="flex items-start justify-between gap-5 py-4"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {item.name}
                    </p>
                    {item.note && (
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {item.note}
                      </p>
                    )}
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-xs text-slate-500">Desde</p>
                    <p className="text-lg font-black text-slate-900">
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-5 text-xs leading-6 text-slate-500">
              Los precios son orientativos y no incluyen repuestos.
              El importe final depende del trabajo necesario.
            </p>

            <WhatsAppButton
              className="mt-5 w-full"
              message="Hola, quiero pedir un presupuesto para mi computadora."
            >
              Solicitar presupuesto
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section
      id="proceso"
      className="scroll-mt-24 bg-slate-50 px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Cómo trabajo"
          title="Un proceso simple y claro"
          desc="Desde tu primera consulta hasta la finalización del servicio, sabés qué se está haciendo y cuánto cuesta."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-slate-200 bg-white p-7"
            >
              <span className="text-4xl font-black text-blue-100">
                {step.number}
              </span>
              <h3 className="mt-5 text-lg font-extrabold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl border border-blue-100 bg-blue-50 p-7 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-2 text-blue-700">
              <MapPin size={19} />
              <span className="text-sm font-bold">
                Cordón, Montevideo
              </span>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Recepción de equipos con coordinación previa.
              Sin visitas ni retiros a domicilio.
              También ofrecemos soporte remoto.
            </p>
          </div>
          <WhatsAppButton className="w-full shrink-0 sm:w-auto">
            Coordinar atención
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="preguntas"
      className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Resolvemos tus dudas"
          desc="Información útil antes de traer tu equipo o solicitar soporte remoto."
        />

        <div className="mt-12 space-y-3">
          {FAQS.map((item, index) => (
            <div
              key={item.q}
              className={`overflow-hidden rounded-2xl border transition ${
                active === index
                  ? "border-blue-200 bg-blue-50/40"
                  : "border-slate-200 bg-white"
              }`}
            >
              <button
                type="button"
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
                aria-expanded={active === index}
                className="flex w-full items-center justify-between gap-4 p-5 text-left sm:px-6"
              >
                <span className="font-bold text-slate-900">
                  {item.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-slate-500 transition-transform ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {active === index && (
                <p className="px-5 pb-6 text-sm leading-7 text-slate-600 sm:px-6">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-slate-950 px-5 py-20 text-white sm:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-300">
          <MessageCircle size={27} />
        </div>

        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
          ¿Tu computadora necesita ayuda?
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-300">
          Contanos qué problema tiene tu PC o notebook.
          Te orientamos sobre los siguientes pasos y cómo coordinar
          la revisión.
        </p>

        <WhatsAppButton className="mt-8 sm:px-8">
          Escribir por WhatsApp
        </WhatsAppButton>

        <p className="mt-5 text-xs text-slate-400">
          Atención con coordinación previa · Cordón, Montevideo
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-5 py-10 text-slate-400 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="text-base font-extrabold text-white">
            SoportePC <span className="text-blue-400">Cordón</span>
          </p>
          <p className="mt-2 text-xs">
            Reparación de PC y notebooks · Montevideo, Uruguay
          </p>
          <p className="mt-2 text-xs">
            Consultas: {HOURS}
          </p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-xs">
        © {new Date().getFullYear()} SoportePC Cordón.
        Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Pricing />
        <Process />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />

      <a
        href={WA_LINK(DEFAULT_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Consultar por WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-green-600 text-white shadow-xl transition hover:scale-110 hover:bg-green-700 sm:bottom-6 sm:right-6"
      >
        <MessageCircle size={27} />
      </a>
    </div>
  );
}
