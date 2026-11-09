import { motion } from "motion/react";
import { Clock, MapPin, ArrowRight, Calendar } from "lucide-react";
import { ServiceInfo } from "../types";

const SERVICES_SCHEDULE: ServiceInfo[] = [
  {
    id: "dominical",
    name: "Celebración Dominical",
    day: "Domingos",
    time: "8:00 AM y 10:30 AM",
    description: "Reunión principal para adorar en familia, recibir la enseñanza bíblica y orar juntos por la bendición de cada hogar.",
    iconName: "Calendar",
    type: "principal",
  },
  {
    id: "miercoles",
    name: "Miércoles de Enseñanza",
    day: "Miércoles",
    time: "7:00 PM",
    description: "Espacio de intercesión comunitaria y estudio bíblico práctico a mitad de semana para fortalecer tu caminar.",
    iconName: "Calendar",
    type: "especial",
  },
  {
    id: "oracion-madrugada-adn",
    name: "Oración de Madrugada",
    day: "Martes",
    time: "5:00 AM",
    description: "Búsqueda e intercesión a primera hora por las familias, la ciudad y la dirección espiritual de cada congregante.",
    iconName: "Calendar",
    type: "estudio",
  },
  {
    id: "kids",
    name: "Vida Kids",
    day: "Domingos",
    time: "8:00 AM y 10:30 AM",
    description: "Salones formativos dinámicos y seguros para que niños de todas las edades crezcan en valores cristianos.",
    iconName: "Calendar",
    type: "especial",
  },
  {
    id: "mujeres",
    name: "Reunión de Mujeres",
    day: "Primer Sábado de Mes",
    time: "4:00 PM",
    description: "Encuentro de edificación, acompañamiento pastoral y oración dedicado a las mujeres de la comunidad.",
    iconName: "Calendar",
    type: "especial",
  },
  {
    id: "jovenes_vip",
    name: "Jóvenes",
    day: "Primer Sábado de Mes",
    time: "5:00 PM",
    description: "Comunidad juvenil centrada en principios de vida, amistades constructivas y desarrollo de propósito.",
    iconName: "Calendar",
    type: "especial",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 md:py-24 px-6 md:px-12 lg:px-20 bg-[#f4f4f6] border-t border-stone-200/60">
      <div className="w-full max-w-[1600px] mx-auto">
        
        {/* Encabezado Minimalista y Elegante */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3" id="services-header">
          <span className="text-[11px] uppercase font-bold text-stone-500 tracking-[0.25em] block">
            Horarios de Servicios
          </span>
          <h2 className="text-stone-950 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
            Nuestras Reuniones Semanales
          </h2>
          <p className="text-stone-600 font-sans text-xs sm:text-sm md:text-base leading-relaxed max-w-lg mx-auto">
            Te esperamos con los brazos abiertos en nuestras reuniones presenciales como familia en Bogotá.
          </p>
        </div>

        {/* Grid de Cajas Minimalistas, Elegantes y Animadas (Sin Emojis) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch" id="services-grid">
          {SERVICES_SCHEDULE.map((service, index) => {
            const isPrincipal = service.type === "principal";
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                whileHover={{ 
                  y: -6, 
                  transition: { duration: 0.22, ease: "easeOut" } 
                }}
                className={`relative bg-white rounded-3xl p-7 sm:p-8 flex flex-col justify-between border transition-all duration-300 cursor-default ${
                  isPrincipal
                    ? "border-stone-900 shadow-sm hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] ring-1 ring-stone-900/5"
                    : "border-stone-200/80 shadow-xs hover:border-stone-300 hover:shadow-[0_14px_32px_rgba(0,0,0,0.06)]"
                }`}
                id={`service-card-${service.id}`}
              >
                {isPrincipal && (
                  <div className="absolute top-5 right-5 text-[9px] font-bold uppercase tracking-[0.2em] text-red-600 bg-red-50 px-2.5 py-1 rounded-full border border-red-100">
                    Sede Norte
                  </div>
                )}

                <div className="space-y-4 text-left">
                  {/* Día y Hora sobrio */}
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] uppercase font-bold text-stone-500 tracking-wider">
                      {service.day}
                    </span>
                    <span className="text-stone-300">·</span>
                    <span className="text-stone-700 font-sans text-xs font-semibold flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-stone-400" />
                      {service.time}
                    </span>
                  </div>

                  {/* Nombre */}
                  <h3 className="font-display font-bold text-stone-950 text-xl tracking-tight leading-snug">
                    {service.name}
                  </h3>

                  {/* Descripción natural y pulida */}
                  <p className="text-stone-600 font-sans text-xs sm:text-[13px] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Pie de Tarjeta Sobrio */}
                <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-left">
                  <span className="text-[11px] font-medium text-stone-400">
                    Entrada libre · Presencial
                  </span>
                  <span className="text-xs font-bold text-stone-900 inline-flex items-center gap-1">
                    Bogotá
                    <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Barra de Ubicación Minimalista */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 bg-stone-950 text-stone-100 rounded-3xl p-7 sm:p-10 border border-stone-900 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
          id="location-footer-banner"
        >
          <div className="text-left space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-red-500 block">
              Auditorio Principal
            </span>
            <h4 className="font-display font-bold text-lg sm:text-xl text-white">
              Cl. 163 #18a-23 · Bogotá Norte
            </h4>
            <p className="text-stone-400 font-sans text-xs sm:text-sm max-w-xl leading-relaxed">
              Contamos con parqueadero vigilado, atención para niños y fácil acceso. Comunícate al <a href="https://wa.me/573046485133" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-400 font-semibold underline">304 6485133</a>.
            </p>
          </div>
          
          <a
            href="https://share.google/pvSe8QKyMZ2HoplYx"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-red-600 hover:bg-red-700 active:scale-95 text-white font-sans text-xs sm:text-sm font-semibold px-7 py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 shrink-0 shadow-md cursor-pointer"
            id="gps-navigation"
          >
            <span>Cómo Llegar en Google Maps</span>
            <MapPin className="w-4 h-4 text-white" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
