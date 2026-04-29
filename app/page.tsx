"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  type Variants
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: "compass",
    tone: "gold",
    title: "Estrategia de Marketing",
    text: "Definimos el camino claro hacia el crecimiento: audiencias, posicionamiento, objetivos medibles y planes de acción ejecutables."
  },
  {
    icon: "message",
    tone: "mint",
    title: "Estrategia de Comunicaciones",
    text: "Construimos narrativas coherentes que conectan tu marca con sus públicos clave: mensajes, gestión de crisis y relaciones públicas."
  },
  {
    icon: "megaphone",
    tone: "gold",
    title: "Paid Media",
    text: "Diseñamos y optimizamos campañas en Meta Ads, Google Ads, TikTok Ads y LinkedIn Ads con foco en retorno."
  },
  {
    icon: "chart",
    tone: "mint",
    title: "Data y Analítica",
    text: "Medimos, interpretamos y optimizamos cada punto de contacto con tracking avanzado, dashboards claros y reportes accionables."
  },
  {
    icon: "search",
    tone: "gold",
    title: "SEO y SEM",
    text: "Posicionamos tu marca en buscadores con SEO técnico, contenido y estrategias de búsqueda pagada para atraer tráfico de calidad."
  },
  {
    icon: "network",
    tone: "mint",
    title: "Contenido para Redes",
    text: "Creamos contenido que conecta: estrategia, producción, copy y diseño para plataformas digitales."
  },
  {
    icon: "brain",
    tone: "gold",
    title: "Soluciones con IA",
    text: "Implementamos inteligencia artificial para optimizar procesos, automatizar tareas y generar insights estratégicos."
  },
  {
    icon: "people",
    tone: "mint",
    title: "Gestión de Influencers",
    text: "Identificamos, negociamos y gestionamos colaboraciones estratégicas con creadores para campañas auténticas y medibles."
  }
];

const principles = [
  "Pensamos en negocio, no solo en campañas",
  "Todo se puede medir",
  "Iteramos rápido",
  "Ejecutamos, no solo recomendamos"
];

const aboutPillars = [
  {
    icon: "chart",
    tone: "gold",
    title: "Analítica avanzada",
    text: "Decisiones basadas en datos reales, no suposiciones."
  },
  {
    icon: "people",
    tone: "mint",
    title: "Equipo especializado",
    text: "Expertos en cada disciplina, alineados a tus objetivos.",
    featured: true
  },
  {
    icon: "brain",
    tone: "gold",
    title: "Estrategia creativa",
    text: "Pensamiento diferente que resuelve problemas de negocio."
  },
  {
    icon: "megaphone",
    tone: "mint",
    title: "Ejecución ágil",
    text: "Implementación rápida con optimización continua."
  }
];

const cases = [
  {
    brand: "B2B Growth",
    metric: "+120%",
    detail: "crecimiento en leads calificados",
    tag: "Estrategia + Performance"
  },
  {
    brand: "Retail Lab",
    metric: "-35%",
    detail: "costo por adquisición",
    tag: "Contenido + CRO"
  },
  {
    brand: "Founder-led",
    metric: "3.8x",
    detail: "más reuniones comerciales",
    tag: "Narrativa + Automatización"
  }
];

const insights = [
  {
    category: "Marca",
    title: "La marca no compite por atención. Compite por memoria."
  },
  {
    category: "Negocio",
    title: "Un buen embudo no arregla una oferta floja."
  },
  {
    category: "Contenido",
    title: "El contenido que no decide nada, decora."
  }
];

const signals = ["Preguntamos", "Medimos", "Ejecutamos", "Optimizamos"];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 34 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" }
  }
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09
    }
  }
};

function ReplicaLogo({
  tone = "dark",
  size = "nav"
}: {
  tone?: "dark" | "light";
  size?: "nav" | "hero" | "footer";
}) {
  const widthClass = {
    nav: "w-[118px] sm:w-[150px]",
    hero: "w-[180px] sm:w-[240px]",
    footer: "w-[148px] sm:w-[190px]"
  }[size];

  return (
    <span
      className={`relative inline-block aspect-[1686/540] ${widthClass} ${
        tone === "light" ? "brightness-0 invert" : ""
      }`}
      aria-label="Réplica MKTG & COMMS"
    >
      <Image
        src="/logo-replica.png"
        alt="Réplica MKTG & COMMS"
        fill
        priority={size === "nav"}
        sizes={size === "hero" ? "240px" : "190px"}
        className="object-contain"
      />
    </span>
  );
}

function ServiceIcon({ type, tone }: { type: string; tone: string }) {
  const isGold = tone === "gold";
  const wrapper = isGold ? "bg-[#FFF3B8] text-[#C98A00]" : "bg-replica-mist text-replica-accent";
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const
  };

  return (
    <motion.span
      className={`grid size-16 place-items-center rounded-[14px] ${wrapper}`}
      whileHover={{ rotate: -6, scale: 1.08 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
    >
      <svg viewBox="0 0 24 24" className="size-8" aria-hidden="true">
        {type === "compass" && (
          <>
            <circle cx="12" cy="12" r="8" {...common} />
            <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" {...common} />
          </>
        )}
        {type === "message" && (
          <path d="M5 6h14v10H9l-4 3V6Z" {...common} />
        )}
        {type === "megaphone" && (
          <>
            <path d="M4 11h4l9-4v10l-9-4H4v-2Z" {...common} />
            <path d="M8 13l2 5" {...common} />
          </>
        )}
        {type === "chart" && (
          <>
            <path d="M6 18V9" {...common} />
            <path d="M12 18V5" {...common} />
            <path d="M18 18v-7" {...common} />
          </>
        )}
        {type === "search" && (
          <>
            <circle cx="10.5" cy="10.5" r="5.5" {...common} />
            <path d="m15 15 4 4" {...common} />
          </>
        )}
        {type === "network" && (
          <>
            <circle cx="6" cy="12" r="2" {...common} />
            <circle cx="18" cy="6" r="2" {...common} />
            <circle cx="18" cy="18" r="2" {...common} />
            <path d="m8 11 8-4" {...common} />
            <path d="m8 13 8 4" {...common} />
          </>
        )}
        {type === "brain" && (
          <>
            <path d="M9 5a3 3 0 0 0-3 3v1a3 3 0 0 0 0 6v1a3 3 0 0 0 5 2.2" {...common} />
            <path d="M15 5a3 3 0 0 1 3 3v1a3 3 0 0 1 0 6v1a3 3 0 0 1-5 2.2" {...common} />
            <path d="M12 5v14" {...common} />
          </>
        )}
        {type === "people" && (
          <>
            <circle cx="9" cy="8" r="3" {...common} />
            <path d="M4 19a5 5 0 0 1 10 0" {...common} />
            <path d="M16 11a3 3 0 0 1 3 3v5" {...common} />
            <path d="M16 5a3 3 0 0 1 0 6" {...common} />
          </>
        )}
      </svg>
    </motion.span>
  );
}

function MagneticButton({
  children,
  href,
  variant = "dark"
}: {
  children: React.ReactNode;
  href: string;
  variant?: "dark" | "light";
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group inline-flex min-h-12 items-center gap-3 rounded-full border px-5 text-sm font-bold uppercase transition-colors duration-300 ${
        variant === "dark"
          ? "border-replica-accent bg-replica-accent text-white hover:border-replica-green hover:bg-replica-green hover:text-replica-ink"
          : "border-replica-line bg-replica-card text-replica-ink hover:border-replica-green hover:bg-replica-green"
      }`}
    >
      <span>{children}</span>
      <span className="grid size-6 place-items-center rounded-full bg-replica-green text-replica-ink transition-colors duration-300 group-hover:bg-white">
        -&gt;
      </span>
    </motion.a>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[70] h-1 origin-left bg-replica-green"
      style={{ scaleX, width: "100%" }}
    />
  );
}

function RotatingSignals() {
  const [activeSignal, setActiveSignal] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSignal((current) => (current + 1) % signals.length);
    }, 1800);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative mt-8 h-[clamp(3.6rem,7.8vw,7.2rem)] overflow-hidden pb-[0.18em]">
      <AnimatePresence mode="wait">
        <motion.span
          key={signals[activeSignal]}
          className="absolute left-0 top-0 text-[clamp(3rem,7vw,6.5rem)] font-black leading-[0.98] text-replica-green"
          initial={{ y: "100%", opacity: 0, filter: "blur(8px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-100%", opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        >
          {signals[activeSignal]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 90, damping: 18 });
  const smoothY = useSpring(mouseY, { stiffness: 90, damping: 18 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -7]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const layerOneX = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);
  const layerOneY = useTransform(smoothY, [-0.5, 0.5], [-14, 14]);
  const layerTwoX = useTransform(smoothX, [-0.5, 0.5], [22, -22]);
  const layerTwoY = useTransform(smoothY, [-0.5, 0.5], [18, -18]);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      style={{ y, rotate, rotateX, rotateY, transformPerspective: 1000 }}
      className="relative min-h-[520px] overflow-hidden rounded-[18px] border border-replica-line bg-replica-accent shadow-soft md:min-h-[680px]"
    >
      <div className="absolute inset-0 kinetic-grid opacity-20 mix-blend-screen" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(182,209,205,0.42),transparent_28%),radial-gradient(circle_at_12%_82%,rgba(201,138,0,0.20),transparent_24%),linear-gradient(135deg,rgba(47,79,74,0.98),rgba(31,36,35,0.92))]" />
      <motion.div
        className="absolute -right-24 top-12 h-80 w-80 rounded-full bg-replica-green/60 blur-3xl"
        animate={{ scale: [1, 1.18, 1], x: [0, -22, 0], y: [0, 18, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <motion.path
          d="M8 32 C28 14 42 45 53 51 C66 60 78 50 94 70"
          fill="none"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="0.32"
          strokeDasharray="1.2 1.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, delay: 0.4, ease: "easeInOut" }}
        />
        <motion.path
          d="M10 82 C24 64 41 75 53 49 C63 28 78 30 92 18"
          fill="none"
          stroke="rgba(201,138,0,0.28)"
          strokeWidth="0.3"
          strokeDasharray="1 1.4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, delay: 0.7, ease: "easeInOut" }}
        />
      </svg>

      <motion.div
        className="absolute left-6 top-24 z-20 max-w-[620px] md:left-10 md:top-28"
        style={{ x: layerOneX, y: layerOneY }}
      >
        <p className="text-[clamp(3.7rem,7vw,6.3rem)] font-black leading-[0.8] text-white">
          Menos ruido.
        </p>
        <p className="text-[clamp(3.7rem,7vw,6.3rem)] font-black leading-[0.8] text-replica-green">
          Más señal.
        </p>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-7 z-20 max-w-[380px] md:bottom-10 md:left-10"
        style={{ x: layerOneX, y: layerTwoY }}
      >
        <span className="label text-white/48">Sistema creativo</span>
        <p className="mt-4 text-xl font-bold leading-8 text-white/78 md:text-2xl md:leading-9">
          Estrategia, contenido y datos trabajando como una sola máquina de crecimiento.
        </p>
      </motion.div>

      <motion.div
        className="absolute right-[-4rem] top-[-3rem] hidden size-[25rem] rounded-full border border-white/20 bg-white/[0.06] backdrop-blur-sm md:block"
        style={{ x: layerTwoX, y: layerOneY }}
        animate={{ rotate: [0, 16, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-10 rounded-full border border-replica-green/45" />
        <div className="absolute inset-24 rounded-full bg-replica-green/70 blur-xl" />
      </motion.div>

      <motion.div
        className="absolute bottom-16 right-7 z-10 hidden h-40 w-64 items-end gap-2 opacity-85 md:flex"
        style={{ x: layerTwoX, y: layerOneY }}
      >
        {[46, 82, 58, 132, 104, 72].map((height, index) => (
          <motion.span
            key={height}
            className="block flex-1 rounded-full bg-replica-green"
            style={{ height }}
            animate={{ scaleY: [0.64, 1, 0.64] }}
            transition={{ duration: 2.1, repeat: Infinity, delay: index * 0.13, ease: "easeInOut" }}
          />
        ))}
      </motion.div>

      <div className="absolute left-[66%] top-[54%] z-[1] grid size-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/24 bg-white/10 backdrop-blur">
        <motion.div
          className="size-5 rounded-full bg-[#C98A00]"
          animate={{ scale: [1, 1.8, 1], opacity: [1, 0.28, 1] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}

function CasesShowcase() {
  return (
    <section id="resultados" className="relative overflow-hidden bg-replica-accent py-24 text-white md:py-36">
      <div className="absolute inset-0 kinetic-grid opacity-10 mix-blend-screen" />
      <motion.div
        className="absolute -right-32 top-10 size-[28rem] rounded-full bg-replica-green/40 blur-3xl"
        animate={{ scale: [1, 1.16, 1], x: [0, -28, 0], y: [0, 18, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -left-40 bottom-10 size-[24rem] rounded-full bg-[#C98A00]/18 blur-3xl"
        animate={{ scale: [1.05, 0.92, 1.05], x: [0, 34, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-pad relative z-10">
        <Reveal className="mb-12 grid gap-8 border-t border-white/16 pt-8 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <div>
            <span className="label text-white/48">Resultados medibles</span>
            <h2 className="mt-6 max-w-xl text-[clamp(2.6rem,5.4vw,5.7rem)] font-black leading-[0.96] tracking-normal text-white">
              La creatividad también tiene que cerrar números.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {["Medimos", "Aprendemos", "Optimizamos"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="border border-white/16 bg-white/[0.06] px-5 py-6 backdrop-blur"
              >
                <span className="text-xs font-black text-[#C98A00]">0{index + 1}</span>
                <p className="mt-8 text-xl font-black text-white">{item}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-6 xl:grid-cols-4">
          {cases.map((item, index) => (
            <motion.article
              key={item.brand}
              initial={{ opacity: 0, y: 42, rotate: index % 2 === 0 ? -1.2 : 1.2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              whileHover={{ y: -10, rotate: index % 2 === 0 ? -0.8 : 0.8 }}
              className={`relative flex min-h-[360px] overflow-hidden border border-white/16 p-6 shadow-soft ${
                index === 0
                  ? "bg-white text-replica-ink lg:col-span-3 xl:col-span-1"
                  : "bg-white/[0.08] text-white backdrop-blur lg:col-span-3 xl:col-span-1"
              }`}
            >
              <div className={`absolute inset-x-0 top-0 h-2 ${index === 0 ? "bg-replica-green" : "bg-[#C98A00]"}`} />
              <div className="relative z-10 flex h-full w-full flex-col justify-between">
                <div className="flex items-center justify-between gap-5">
                  <span className={`label ${index === 0 ? "" : "text-white/45"}`}>{item.brand}</span>
                  <span
                    className={`rounded-full border px-3 py-2 text-xs font-black ${
                      index === 0 ? "border-replica-line text-replica-dark/60" : "border-white/16 text-white/54"
                    }`}
                  >
                    {item.tag}
                  </span>
                </div>
                <div>
                  <motion.div
                    className={`max-w-full whitespace-nowrap text-[clamp(2.9rem,5vw,5.15rem)] font-black leading-[0.9] ${
                      index === 0 ? "text-replica-ink" : "text-white"
                    }`}
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.7, delay: index * 0.08 }}
                  >
                    {item.metric}
                  </motion.div>
                  <p
                    className={`mt-4 max-w-md text-lg font-bold leading-7 xl:text-xl ${
                      index === 0 ? "text-replica-dark/[0.72]" : "text-white/64"
                    }`}
                  >
                    {item.detail}
                  </p>
                </div>
              </div>
              <div className={`absolute -bottom-20 -right-16 size-56 rounded-full blur-2xl ${index === 0 ? "bg-replica-green/30" : "bg-replica-green/18"}`} />
            </motion.article>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 42 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            whileHover={{ y: -10 }}
            className="relative flex min-h-[360px] items-end overflow-hidden border border-replica-green/40 bg-replica-green p-8 text-replica-ink lg:col-span-6 xl:col-span-1"
          >
            <div className="absolute -right-12 -top-12 size-44 rounded-full border border-replica-accent/18" />
            <div className="absolute right-8 top-8 size-5 rounded-full bg-[#C98A00]" />
            <div>
              <p className="max-w-sm text-3xl font-black leading-tight">
                Menos ruido. Más señales que se pueden medir.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <ScrollProgress />
      <div className="noise" />
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="container-pad py-4">
          <div className="flex items-center justify-between border border-replica-line bg-white/[0.78] px-4 py-3 backdrop-blur-xl">
            <a href="#inicio" className="flex items-center">
              <ReplicaLogo />
            </a>
            <nav className="hidden items-center gap-6 text-xs font-bold uppercase text-replica-dark/70 md:flex">
              <a className="transition hover:text-replica-green" href="#somos">Somos</a>
              <a className="transition hover:text-replica-green" href="#servicios">Servicios</a>
              <a className="transition hover:text-replica-green" href="#resultados">Resultados</a>
              <a className="transition hover:text-replica-green" href="#insights">Ideas</a>
            </nav>
            <a href="#contacto" className="text-xs font-black uppercase text-replica-ink transition hover:text-replica-green">
              Hablemos
            </a>
          </div>
        </div>
      </header>

      <section id="inicio" className="container-pad flex min-h-screen flex-col justify-between pb-8 pt-28">
        <div className="grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp} className="mb-8 flex flex-wrap items-center gap-3">
              <span className="label rounded-full border border-replica-line bg-white/60 px-3 py-2">Marketing que se implementa</span>
              <span className="label text-[#C98A00]">Sin humo. Con sistema.</span>
            </motion.div>
            <div className="word-mask">
              <motion.h1 variants={fadeUp} className="big-title max-w-5xl">
                Creamos marcas que no se <span className="text-[#C98A00]">ignoran</span>
              </motion.h1>
            </div>
            <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-xl leading-8 text-replica-dark/[0.78] md:text-2xl md:leading-9">
              Estrategia, contenido, comunicación y performance para empresas que necesitan claridad, ejecución y crecimiento medible.
            </motion.p>
            <motion.div variants={fadeUp}>
              <RotatingSignals />
            </motion.div>
            <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <MagneticButton href="#contacto">Hablemos</MagneticButton>
              <MagneticButton href="#resultados" variant="light">Ver proyectos</MagneticButton>
            </motion.div>
          </motion.div>
          <HeroVisual />
        </div>

        <div className="mt-12 overflow-hidden border-y border-replica-line py-4">
          <div className="marquee-track flex w-max gap-10 text-sm font-black uppercase text-replica-dark/70">
            {[...Array(2)].map((_, group) => (
              <div key={group} className="flex gap-10 pr-10">
                <span>Contenido que convierte</span>
                <span className="text-replica-green">Performance con criterio</span>
                <span>Estrategia comercial</span>
                <span className="text-replica-green">Web + automatización</span>
                <span>Comunicación con actitud</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="somos" className="container-pad py-24 md:py-36">
        <div className="grid gap-14 border-t border-replica-line pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <span className="label text-[#C98A00]">Quiénes somos</span>
            <h2 className="section-title mt-6 max-w-5xl text-replica-accent">
              No asumimos. Preguntamos. No intuimos. <span className="text-[#C98A00]">Medimos.</span>
            </h2>
            <div className="mt-10 grid gap-7">
              <p className="text-[clamp(1.25rem,2vw,2rem)] leading-[1.45] text-[#4F8A84]">
                Somos un equipo de <strong className="font-black text-replica-accent">consultores expertos</strong> que entiende que un partner estratégico debe generar valor comercial y tangible para las empresas, no solo creatividad o viralidad.
              </p>
              <p className="text-[clamp(1.25rem,2vw,2rem)] leading-[1.45] text-[#4F8A84]">
                Creemos en la <strong className="font-black text-replica-accent">transparencia</strong>, en los datos como fundamento de decisión, en la creatividad que resuelve problemas de negocio y en la humildad de seguir aprendiendo.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              {["No improvisamos", "Ejecutamos con datos", "Aprendemos rápido"].map((item) => (
                <motion.span
                  key={item}
                  whileHover={{ y: -3 }}
                  className="inline-flex items-center gap-3 rounded-full bg-replica-mist px-5 py-3 text-base font-bold text-replica-accent"
                >
                  <span className="grid size-5 place-items-center rounded-full border border-[#C98A00] text-[#C98A00]">✓</span>
                  {item}
                </motion.span>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {aboutPillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                whileHover={{ y: -10, rotate: index % 2 === 0 ? -0.8 : 0.8 }}
                className={`min-h-[230px] rounded-[18px] border p-7 shadow-soft ${
                  pillar.featured
                    ? "border-replica-green bg-replica-green text-white"
                    : "border-replica-line bg-replica-card text-replica-accent"
                }`}
              >
                <ServiceIcon type={pillar.icon} tone={pillar.tone} />
                <h3 className={`mt-8 text-2xl font-black ${pillar.featured ? "text-white" : "text-replica-accent"}`}>
                  {pillar.title}
                </h3>
                <p className={`mt-4 text-lg leading-7 ${pillar.featured ? "text-replica-accent/70" : "text-[#4F8A84]"}`}>
                  {pillar.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="relative overflow-hidden bg-replica-mist py-24 md:py-36">
        <motion.div
          className="absolute -left-28 top-24 size-72 rounded-full bg-replica-green/40 blur-3xl"
          animate={{ scale: [1, 1.18, 1], x: [0, 28, 0], y: [0, -18, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-24 bottom-20 size-80 rounded-full bg-white/80 blur-3xl"
          animate={{ scale: [1.1, 0.95, 1.1], x: [0, -24, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container-pad relative z-10">
          <Reveal className="mb-16 grid gap-8 border-t border-replica-line pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <span className="label text-[#C98A00]">Qué hacemos</span>
              <h2 className="mt-6 max-w-5xl text-[clamp(3.2rem,6.6vw,7.2rem)] font-black leading-[0.88] tracking-normal text-replica-accent">
                Servicios que se implementan, no se archivan.
              </h2>
            </div>
            <div className="relative overflow-hidden border border-replica-line bg-replica-card p-6 shadow-soft">
              <div className="absolute -right-16 -top-16 size-48 rounded-full bg-replica-green/50 blur-3xl" />
              <p className="relative z-10 text-[clamp(1.25rem,2vw,2rem)] font-bold leading-[1.28] text-[#4F8A84]">
                Cada servicio entra al sistema con una pregunta simple: qué mueve para el negocio y cómo lo vamos a medir.
              </p>
              <div className="relative z-10 mt-8 grid grid-cols-3 gap-3">
                {["Estrategia", "Ejecución", "Medición"].map((item, index) => (
                  <motion.div
                    key={item}
                    className="border border-replica-line bg-replica-mist px-4 py-5"
                    animate={{ y: [0, index === 1 ? -6 : 6, 0] }}
                    transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="text-xs font-black text-[#C98A00]">0{index + 1}</span>
                    <p className="mt-6 text-sm font-black uppercase tracking-[0.1em] text-replica-accent">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 44, rotateX: -8 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.7, delay: index * 0.045, ease: "easeOut" }}
                whileHover={{ y: -12, rotate: index % 2 === 0 ? -0.7 : 0.7 }}
                className="group relative min-h-[330px] overflow-hidden rounded-[18px] border border-white bg-replica-card p-8 shadow-soft"
              >
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-replica-green transition-transform duration-500 group-hover:scale-x-100" />
                <div className="absolute -right-16 -top-16 size-36 rounded-full bg-replica-green/0 blur-2xl transition-colors duration-500 group-hover:bg-replica-green/40" />
                <ServiceIcon type={service.icon} tone={service.tone} />
                <h3 className="mt-8 text-2xl font-black leading-tight text-replica-accent">{service.title}</h3>
                <p className="mt-5 text-lg leading-8 text-[#4F8A84]">{service.text}</p>
              </motion.article>
            ))}

            <motion.article
              initial={{ opacity: 0, y: 44, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, delay: 0.2 }}
              whileHover={{ y: -12 }}
              className="relative flex min-h-[330px] flex-col items-center justify-center overflow-hidden rounded-[18px] border border-replica-green bg-replica-green p-8 text-center"
            >
              <motion.div
                className="text-[#C98A00]"
                animate={{ y: [0, -10, 0], rotate: [0, 6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg viewBox="0 0 24 24" className="size-16" aria-hidden="true">
                  <path d="M5 19c4.5-1 8-4.5 9-9l5-5c.4-.4.9-.2.9.4-.2 4.5-2.4 8.8-6.1 11.5L12 22l-2-4-5-2 4.8-1.8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
              <h3 className="mt-8 text-2xl font-black text-white">¿Necesitas algo más?</h3>
              <p className="mt-4 text-lg text-replica-accent/70">Hablemos de tu proyecto.</p>
              <div className="mt-8">
                <MagneticButton href="#contacto" variant="dark">Conversemos</MagneticButton>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="container-pad py-24 md:py-36">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Reveal>
            <span className="label">Sistema de trabajo</span>
            <h2 className="section-title mt-6">
              No hacemos marketing. Construimos <span className="text-[#C98A00]">sistemas</span>
            </h2>
          </Reveal>
          <div className="grid gap-3">
            {principles.map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <div className="flex items-center justify-between border border-replica-line bg-replica-card p-5 shadow-sm">
                  <span className="text-lg font-black text-replica-ink">{item}</span>
                  <span className="text-sm font-black text-replica-green">0{index + 1}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CasesShowcase />

      <section id="insights" className="bg-replica-mist py-24 md:py-36">
        <div className="container-pad">
          <Reveal className="mb-14 max-w-5xl">
            <span className="label">Ideas propias</span>
            <h2 className="section-title mt-6">
              Ideas que valen más que un <span className="text-[#C98A00]">post</span>
            </h2>
            <p className="body-copy mt-7 max-w-2xl">
              Reflexiones sobre marketing, negocios y cómo crecen realmente las marcas.
            </p>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {insights.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <motion.article
                  whileHover={{ y: -10, rotate: index === 1 ? -1.5 : 1.5 }}
                  className="flex min-h-[260px] flex-col justify-between border border-replica-line bg-replica-card p-5 transition duration-300 hover:border-replica-green"
                >
                  <span className="label">{item.category}</span>
                  <h3 className="text-2xl font-black leading-tight text-replica-ink">{item.title}</h3>
                  <span className="text-sm font-black text-replica-green">Leer idea</span>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-replica-accent py-24 text-white md:py-36">
        <div className="container-pad">
          <Reveal className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <span className="label text-white/50">Próximo movimiento</span>
              <h2 className="section-title mt-6 text-white">
                Si quieres hacer marketing de verdad, <span className="text-replica-green">hablemos</span>
              </h2>
            </div>
            <div className="border border-white/[0.16] bg-white/[0.08] p-5">
              <p className="mb-8 text-lg leading-7 text-white/70">
                Agenda una reunión. Revisamos dónde estás perdiendo atención, confianza o conversión.
              </p>
              <MagneticButton href="mailto:hola@replica.cl" variant="light">Agenda una reunión</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="bg-replica-accent text-white">
        <div className="container-pad flex flex-col gap-8 border-t border-white/[0.16] py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <ReplicaLogo tone="light" size="footer" />
          </div>
          <div className="flex flex-wrap gap-5 text-xs font-bold uppercase text-white/[0.54]">
            <a className="hover:text-replica-green" href="#somos">Somos</a>
            <a className="hover:text-replica-green" href="#servicios">Servicios</a>
            <a className="hover:text-replica-green" href="#resultados">Resultados</a>
            <a className="hover:text-replica-green" href="mailto:hola@replica.cl">hola@replica.cl</a>
            <a className="hover:text-replica-green" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="hover:text-replica-green" href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
