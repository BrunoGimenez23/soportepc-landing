
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

const WA_NUMBER =
  import.meta.env.VITE_WA_NUMBER || "59898235535";

const WA_TEXT = encodeURIComponent(
  "Hola, quiero consultar por un problema con mi computadora."
);

const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`;

const BUSINESS_HOURS = "Lun–Sáb 10:00 a 19:00";

const NAV_ITEMS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#precios", label: "Precios" },
  { href: "#como-trabajo", label: "Cómo trabajo" },
  { href: "#faq", label: "Preguntas frecuentes" },
];

const HERO_BADGES = [
  "Recepción con coordinación",
  "Soporte remoto",
  "Presupuesto previo",
];

const HERO_CARDS = [
  {
    title: "PC lenta",
    desc: "Arranque lento, errores, falta de espacio o problemas de rendimiento.",
  },
  {
    title: "Notebook caliente",
    desc: "Limpieza interna y mantenimiento para mejorar la refrigeración.",
  },
  {
    title: "Actualizar a SSD",
    desc: "Instalación y clonación para mejorar la velocidad de tu equipo.",
  },
  {
    title: "Soporte remoto",
    desc: "Ayuda con Windows, programas, impresoras y configuraciones.",
  },
];

const TRUST_POINTS = [
  {
    title: "Formación técnica",
    desc: "Formación en soporte informático y desarrollo de software.",
  },
  {
    title: "Presupuesto previo",
    desc: "Confirmamos el costo y las opciones antes de realizar una reparación.",
  },
  {
    title: "Condiciones claras",
    desc: "Informamos el alcance del trabajo y las condiciones de garantía.",
  },
  {
    title: "Pruebas finales",
    desc: "Verificamos el funcionamiento del equipo después de cada intervención.",
  },
];

const SERVICES = [
  {
    icon: Wrench,
    title: "Reparación de PC y notebooks",
    desc: "Diagnóstico de fallas de encendido, pantallas azules, errores de software y problemas de rendimiento.",
  },
  {
    icon: Download,
    title: "Formateo e instalación",
    desc: "Instalación de Windows o Linux, controladores, actualizaciones y configuración inicial.",
  },
  {
    icon: Thermometer,
    title: "Limpieza interna y pasta térmica",
    desc: "Mantenimiento de ventiladores y disipadores, limpieza de polvo y cambio de pasta térmica cuando corresponde.",
  },
  {
    icon: HardDrive,
    title: "Instalación de SSD y RAM",
    desc: "Actualización de componentes compatibles, clonación de discos cuando sea posible y pruebas de funcionamiento.",
  },
  {
    icon: Shield,
    title: "Backup y recuperación básica",
    desc: "Respaldo, transferencia y recuperación básica de archivos accesibles. No incluye recuperación avanzada.",
  },
  {
    icon: Headphones,
    title: "Soporte técnico remoto",
    desc: "Asistencia con Windows, programas, impresoras y configuraciones cuando el equipo permite conexión remota.",
  },
];

const PRICES = [
  {
    service: "Diagnóstico técnico",
    price: "$700",
    fixed: true,
    note: "Se descuenta de la mano de obra si realizamos la reparación.",
  },
  {
    service: "Optimización de equipos",
    price: "$1.500",
  },
  {
    service: "Formateo e instalación",
    price: "$2.200",
    note: "Instalación del sistema y configuración inicial.",
  },
  {
    service: "Limpieza interna y pasta térmica",
    price: "$1.800",
  },
  {
    service: "Instalación de SSD y clonación",
    price: "$2.000",
    note: "El disco SSD se cotiza aparte.",
  },
  {
    service: "Instalación de RAM",
    price: "$1.200",
    note: "La memoria se cotiza aparte.",
  },
  {
    service: "Soporte técnico remoto",
    price: "$600",
    note: "Según el problema y la duración.",
  },
];

const PROCESS_STEPS = [
  [
    "1",
    "WhatsApp",
    "Nos contás el problema y el modelo del equipo.",
  ],
  [
    "2",
    "Coordinación",
    "Coordinamos la recepción del equipo o una sesión de soporte remoto.",
  ],
  [
    "3",
    "Diagnóstico",
    "Revisamos el problema y te presentamos un presupuesto.",
  ],
  [
    "4",
    "Reparación",
    "Realizamos el trabajo aprobado y las pruebas correspondientes.",
  ],
  [
    "5",
    "Finalización",
    "Comprobamos el resultado y coordinamos la devolución si corresponde.",
  ],
];

const FAQS = [
  {
    q: "¿Cuánto demora una reparación?",
    a: "Depende del problema, la disponibilidad y los repuestos necesarios. Te informamos el plazo estimado después de revisar el equipo.",
  },
  {
    q: "¿Voy a perder mis archivos?",
    a: "Consultamos antes de realizar cambios que puedan afectar tus datos. Si es necesario, evaluamos un respaldo previo.",
  },
  {
    q: "¿Trabajan con coordinación previa?",
    a: "Sí. La recepción de equipos se coordina por WhatsApp para organizar los horarios.",
  },
  {
    q: "¿Retiran equipos a domicilio?",
    a: "No realizamos retiros ni visitas a domicilio. Podés acercar tu equipo con coordinación previa o consultar por soporte remoto.",
  },
  {
    q: "¿Ofrecen soporte remoto?",
    a: "Sí. Podemos ayudarte con Windows, programas y configuraciones cuando la computadora permite conectarse remotamente.",
  },
  {
    q: "¿Trabajan con Windows y Linux?",
    a: "Sí, ofrecemos instalación y configuración de Windows y Linux. Consultanos por tu caso particular.",
  },
  {
    q: "¿Qué garantía ofrecen?",
    a: "Las condiciones de garantía se informan antes del trabajo y dependen del servicio realizado. Los repuestos tienen la garantía correspondiente de su proveedor.",
  },
  {
    q: "¿Cómo solicito un presupuesto?",
    a: "Escribinos por WhatsApp con el problema, el modelo del equipo y, si tenés, una foto o video del error.",
  },
];

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
      {children}
    </span>
  );
}

function SectionTitle({ kicker, title, subtitle }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {kicker && (
        <p className="text-sm font-semibold tracking-wide text-slate-500">
          {kicker}
        </p>
      )}

      <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-base leading-relaxed text-slate-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function Card({ title, desc, Icon }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex gap-4">
        {Icon && (
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-100">
            <Icon className="h-5 w-5 text-slate-900" />
          </div>
        )}

        <div className="min-w-0">
          <h3 className="text-base font-extrabold text-slate-900">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

function PriceRow({
  service,
  price,
  note,
  fixed = false,
}) {
  return (
    <div className="flex flex-col gap-1 border-b border-slate-100 py-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-semibold text-slate-900">
          {service}
        </p>

        {note && (
          <p className="text-sm text-slate-500">
            {note}
          </p>
        )}
      </div>

      <p className="text-slate-700">
        {!fixed && "Desde "}
        <span className="font-bold">{price}</span>
      </p>
    </div>
  );
}

function FAQItem({ q, a }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <h3 className="font-bold text-slate-900">
        {q}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {a}
      </p>
    </div>
  );
}

function PrimaryButton({
  href,
  children,
  className = "",
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        "inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800 " +
        className
      }
    >
      {children}
    </a>
  );
}

function SecondaryButton({
  href,
  children,
  className = "",
}) {
  return (
    <a
      href={href}
      className={
        "inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-100 " +
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

      {/* NAVEGACIÓN */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">

          <a href="#" className="flex items-center">
            <img
              src={LOGO_SRC}
              alt="SoportePC Cordón"
              className="h-10 w-auto object-contain sm:h-12"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </a>

          <nav className="hidden flex-1 items-center justify-center gap-6 text-sm font-semibold text-slate-600 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-bold text-white hover:bg-slate-800"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* PORTADA */}
      <main>
        <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">

            <div>
              <div className="flex flex-wrap gap-2">
                {HERO_BADGES.map((badge) => (
                  <Badge key={badge}>{badge}</Badge>
                ))}
              </div>

              <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
                Reparación de PC y notebooks en Cordón, Montevideo
              </h1>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
                ¿Tu computadora está lenta, no enciende o presenta errores?
                Ofrecemos diagnóstico, mantenimiento, instalación de SSD y RAM,
                formateo y soporte técnico remoto.
              </p>

              <p className="mt-3 text-sm font-medium text-slate-700">
                Recepción de equipos con coordinación previa.
                Atención directa por WhatsApp.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href={WA_LINK}>
                  Consultar por WhatsApp
                </PrimaryButton>

                <SecondaryButton href="#servicios">
                  Ver servicios
                </SecondaryButton>
              </div>

              <p className="mt-4 text-sm font-semibold text-slate-700">
                Diagnóstico: $700 UYU
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Se descuenta de la mano de obra si realizamos la reparación.
                Repuestos aparte y presupuesto previo.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-500">
                ¿En qué podemos ayudarte?
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {HERO_CARDS.map((card) => (
                  <Card
                    key={card.title}
                    title={card.title}
                    desc={card.desc}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONFIANZA */}
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14">

            <SectionTitle
              kicker="Confianza"
              title="Atención técnica con un proceso claro"
              subtitle="Sabé qué se va a revisar, cuánto cuesta y qué opciones tenés antes de realizar una reparación."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {TRUST_POINTS.map((point) => (
                <div
                  key={point.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <h3 className="font-extrabold text-slate-900">
                    {point.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <PrimaryButton href={WA_LINK}>
                Pedir presupuesto
              </PrimaryButton>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section
          id="servicios"
          className="scroll-mt-24 border-t border-slate-200 bg-white"
        >
          <div className="mx-auto max-w-6xl px-4 py-14">

            <SectionTitle
              kicker="Qué hacemos"
              title="Servicios principales"
              subtitle="Soluciones para computadoras lentas, problemas de funcionamiento y actualizaciones de hardware."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service) => (
                <Card
                  key={service.title}
                  title={service.title}
                  desc={service.desc}
                  Icon={service.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* PRECIOS */}
        <section
          id="precios"
          className="scroll-mt-24 border-t border-slate-200 bg-slate-50"
        >
          <div className="mx-auto max-w-6xl px-4 py-14">

            <SectionTitle
              kicker="Transparencia"
              title="Precios de nuestros servicios"
              subtitle="Precios en pesos uruguayos. El presupuesto final depende del diagnóstico y del trabajo necesario."
            />

            <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

              {PRICES.map((row) => (
                <PriceRow
                  key={row.service}
                  {...row}
                />
              ))}

              <PrimaryButton
                href={WA_LINK}
                className="mt-6 w-full"
              >
                Pedir presupuesto por WhatsApp
              </PrimaryButton>

              <p className="mt-3 text-xs text-slate-500">
                Precios orientativos, salvo la tarifa de diagnóstico indicada.
                No incluyen repuestos.
                Se confirma el presupuesto antes de avanzar.
              </p>
            </div>
          </div>
        </section>

        {/* CÓMO TRABAJO */}
        <section
          id="como-trabajo"
          className="scroll-mt-24 border-t border-slate-200 bg-white"
        >
          <div className="mx-auto max-w-6xl px-4 py-14">

            <SectionTitle
              kicker="Proceso"
              title="Cómo trabajo"
              subtitle="Coordinación sencilla y presupuesto claro."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-5">
              {PROCESS_STEPS.map(([number, title, desc]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-900 font-extrabold text-white">
                      {number}
                    </div>

                    <h3 className="font-extrabold text-slate-900">
                      {title}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    Zona de atención
                  </p>

                  <h3 className="mt-1 text-lg font-extrabold text-slate-900">
                    Cordón, Montevideo
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">
                    Recepción de equipos únicamente con coordinación previa.
                    No realizamos visitas ni retiros a domicilio.
                    También ofrecemos soporte remoto.
                  </p>
                </div>

                <PrimaryButton
                  href={WA_LINK}
                  className="px-5 py-3"
                >
                  Coordinar por WhatsApp
                </PrimaryButton>
              </div>
            </div>
          </div>
        </section>

        {/* PREGUNTAS FRECUENTES */}
        <section
          id="faq"
          className="scroll-mt-24 border-t border-slate-200 bg-slate-50"
        >
          <div className="mx-auto max-w-6xl px-4 py-14">

            <SectionTitle
              kicker="Dudas comunes"
              title="Preguntas frecuentes"
              subtitle="Todo lo que necesitás saber antes de consultar."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {FAQS.map((faq) => (
                <FAQItem
                  key={faq.q}
                  q={faq.q}
                  a={faq.a}
                />
              ))}
            </div>

            <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-slate-900 p-8 text-white">

              <p className="text-sm font-semibold text-white/70">
                ¿Necesitás ayuda?
              </p>

              <h3 className="mt-2 text-2xl font-black">
                Consultá ahora por WhatsApp
              </h3>

              <p className="mt-2 text-sm text-white/80">
                Contanos qué problema tiene tu computadora y qué modelo es.
                Te orientamos sobre los siguientes pasos.
              </p>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-900 hover:bg-slate-100"
              >
                Abrir WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* PIE DE PÁGINA */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-sm text-slate-600">
              © {new Date().getFullYear()} SoportePC Cordón —
              Reparación de PC y notebooks en Montevideo.
            </p>

            <div className="flex items-center gap-4 text-sm font-semibold">
              <a
                href="#servicios"
                className="text-slate-600 hover:text-slate-900"
              >
                Servicios
              </a>

              <a
                href="#precios"
                className="text-slate-600 hover:text-slate-900"
              >
                Precios
              </a>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <p className="mt-3 text-xs text-slate-500">
            Atención con coordinación previa — Cordón, Montevideo.
            Horario de consultas: {BUSINESS_HOURS}.
          </p>

          <p className="mt-2 text-xs text-slate-500">
            Precios orientativos. Repuestos aparte.
            Presupuesto final sujeto a diagnóstico.
          </p>
        </div>
      </footer>

      {/* WHATSAPP FLOTANTE */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Consultar a SoportePC Cordón por WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-green-600 px-4 py-3 font-bold text-white shadow-lg transition hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-200"
      >
        <MessageCircle
          className="h-5 w-5"
          aria-hidden="true"
        />

        <span className="hidden sm:inline">
          Consultanos
        </span>
      </a>
    </div>
  );
}
