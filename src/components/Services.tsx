import { Sun, Flame, Users, Clock, MapPin, Sparkles, Heart } from "lucide-react";
import { ServiceInfo } from "../types";

const SERVICES_SCHEDULE: ServiceInfo[] = [
  {
    id: "dominical",
    name: "Celebración de la Fe",
    day: "Domingos",
    time: "8:00 AM y 10:30 AM",
    description: "Nuestra reunión presencial principal. Un espacio para adorar juntos en comunidad, recibir un mensaje transformador y relevante de la Palabra de Dios, y orar por necesidades familiares.",
    iconName: "Sun",
    type: "principal",
  },
  {
    id: "miercoles",
    name: "Miércoles Explosivos",
    day: "Miércoles",
    time: "7:00 PM",
    description: "Un espacio de intercesión en llamas, intercesión activa por milagros y clamor ferviente que enciende la fe y el avivamiento en tu semana.",
    iconName: "Flame",
    type: "especial",
  },
  {
    id: "machos",
    name: "Oración de Machos",
    day: "Martes",
    time: "4:30 AM",
    description: "Hombres llamados a bendecir, interceder y clamar activamente por la dirección espiritual de su hogar, la restauración y protección de sus matrimonios, hijos y familias.",
    iconName: "Users",
    type: "estudio",
  },
  {
    id: "kids",
    name: "Vida Kids",
    day: "Domingos",
    time: "8:00 AM y 10:30 AM",
    description: "Un auditorio interactivo y seguro adaptado para que los niños crezcan conociendo el amor de Jesús con clases lúdicas y dinámicas bíblicas.",
    iconName: "Sparkles",
    type: "especial",
  },
  {
    id: "mujeres",
    name: "Reunión de Mujeres",
    day: "Primer Sábado de Mes",
    time: "4:00 PM",
    description: "Un espacio valioso de edificación de fe, intercesión conjunta, restauración interior y conexión de corazón diseñado especialmente para bendecir a cada mujer.",
    iconName: "Heart",
    type: "especial",
  },
  {
    id: "jovenes_vip",
    name: "Jóvenes (Zona VIP)",
    day: "Primer Sábado de Mes",
    time: "5:00 PM",
    description: "Reunión especial de jóvenes enfocada en la consagración activa, edificar un propósito de vida eterno y consolidar amistades sanas basadas en la verdad.",
    iconName: "Sparkles",
    type: "especial",
  },
];

export default function Services() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Sun":
        return <Sun className="w-5 h-5 text-amber-600" />;
      case "Flame":
        return <Flame className="w-5 h-5 text-rose-600" />;
      case "Users":
        return <Users className="w-5 h-5 text-red-600" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-yellow-500" />;
      case "Heart":
        return <Heart className="w-5 h-5 text-[#ff0000] fill-red-500/10" />;
      default:
        return <Clock className="w-5 h-5 text-stone-500" />;
    }
  };

  return (
    <section id="servicios" className="py-24 px-6 bg-white border-t border-stone-200/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="services-header">
          <span className="text-[10px] uppercase font-bold text-red-800 tracking-widest bg-red-50 border border-red-100 px-3.5 py-1 rounded-full inline-block mb-3">
            Nuestras Reuniones
          </span>
          <h2 className="text-stone-900 font-display font-bold text-3xl sm:text-4xl tracking-tight">
            Horarios de Conexión
          </h2>
          <p className="text-stone-500 font-sans text-sm sm:text-base leading-relaxed mt-3">
            Te invitamos a sumarte de manera presencial a cualquiera de nuestros servicios semanales. Creemos que cada reunión es una cita divina y la puerta a una vida llena de propósito.
          </p>
        </div>

        {/* Schedule Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-grid">
          {SERVICES_SCHEDULE.map((service) => (
            <div
              key={service.id}
              className={`relative bg-white border rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between hover:shadow-lg group ${
                service.type === "principal"
                  ? "border-red-600/30 shadow-xs ring-1 ring-red-500/5"
                  : "border-stone-200/60 shadow-xs"
              }`}
              id={`service-card-${service.id}`}
            >
              {service.type === "principal" && (
                <div className="absolute top-4 right-4 bg-red-100 text-red-900 text-[9px] font-bold tracking-wider font-display px-2.5 py-1 rounded-full flex items-center gap-1 uppercase" id="badge-reunion-central">
                  <Sparkles className="w-2.5 h-2.5" />
                  Servicio Central
                </div>
              )}

              <div>
                {/* Icon Wrapper */}
                <div className="w-12 h-12 rounded-2xl bg-stone-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-300" id={`service-icon-wrapper-${service.id}`}>
                  {getIcon(service.iconName)}
                </div>

                {/* Day & Time badges */}
                <div className="flex items-center gap-2 mb-3" id={`service-badges-${service.id}`}>
                  <span className="text-stone-800 font-display font-semibold text-xs py-1 rounded-md">
                    {service.day}
                  </span>
                  <div className="w-1 h-1 rounded-full bg-stone-300" />
                  <span className="text-stone-500 font-sans text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3 text-stone-400" />
                    {service.time}
                  </span>
                </div>

                {/* Name & Description */}
                <h3 className="text-stone-900 font-display font-bold text-lg mb-3" id={`service-title-${service.id}`}>
                  {service.name}
                </h3>
                <p className="text-stone-600 font-sans text-xs leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Card Footer Button */}
              <div className="pt-4 border-t border-stone-100 flex items-center gap-2 text-[11px] font-semibold text-stone-800 uppercase tracking-widest group-hover:text-red-800 transition-colors">
                <Heart className="w-3 h-3 text-red-500 fill-red-500/10" />
                <span>Abierto para todos</span>
              </div>
            </div>
          ))}
        </div>

        {/* Location Note Bar (Elegant Horizontal Card Below) */}
        <div
          className="mt-12 bg-stone-900 text-stone-100 rounded-3xl p-6 sm:p-8 border border-stone-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
          id="location-footer-banner"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-full bg-red-800/60 border border-red-600/30 flex items-center justify-center text-red-400 shrink-0 hidden sm:flex">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-stone-100">Instalaciones de Reunión</h4>
              <p className="text-stone-400 text-xs mt-1 max-w-lg leading-relaxed">
                Nos encontramos ubicados en Bogotá, Colombia. Nuestras instalaciones cuentan con espacios cómodos, ambiente climatizado, auditorio para niños ("Plenitud Kids") y estacionamiento seguro vigilado.
              </p>
            </div>
          </div>
          <a
            href="https://share.google/pvSe8QKyMZ2HoplYx"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-[#ff0000] hover:bg-[#dd0000] text-white font-sans text-xs font-bold px-8 py-3.5 rounded-full flex items-center justify-center gap-2 transition duration-300 shrink-0 shadow-md hover:shadow-lg hover:scale-[1.02]"
            id="gps-navigation"
          >
            Cómo Llegar (Google Maps)
            <MapPin className="w-3.5 h-3.5 text-white" />
          </a>
        </div>

      </div>
    </section>
  );
}
