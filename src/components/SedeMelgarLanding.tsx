import { useState, FormEvent } from "react";
import { 
  Calendar, Clock, MapPin, Heart, Users,
  ArrowRight, ExternalLink, MessageCircle, Phone, CheckCircle, Send, Sun, Trees, Compass
} from "lucide-react";

interface SedeMelgarLandingProps {
  onNavigate: (pageId: string) => void;
}

export default function SedeMelgarLanding({ onNavigate }: SedeMelgarLandingProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", phone: "", city: "", message: "" });
    }, 1000);
  };

  const handleWazeClick = () => {
    window.open("https://waze.com/ul?q=Melgar+Tolima&navigate=yes", "_blank", "referrerpolicy=no-referrer");
  };

  const handleMapsClick = () => {
    window.open("https://www.google.com/maps/search/Melgar+Tolima+Colombia", "_blank", "referrerpolicy=no-referrer");
  };

  return (
    <div className="bg-white font-sans text-stone-900" id="sede-melgar-landing-root">
      
      {/* =========================================================================
          HERO BANNER: VIDA PLENA INTERNACIONAL SEDE MELGAR
         ========================================================================= */}
      <section className="relative overflow-hidden bg-white border-b border-stone-150 py-12 sm:py-16 lg:py-20 px-6 md:px-12 lg:px-20" id="sede-melgar-hero">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Columna Izquierda: Identidad y Titular Principal */}
            <div className="lg:col-span-6 text-left space-y-6 sm:space-y-8" id="sede-melgar-hero-left">
              
              {/* Badges de Bienvenida y Selector Rápido */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 bg-[#dc2626] text-white px-4 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase shadow-xs">
                  <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
                  BIENVENIDOS A CASA · SEDE MELGAR
                </div>

                <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-900 border border-amber-200/80 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wide">
                  <Sun className="w-3.5 h-3.5 text-amber-600" />
                  <span>Tolima · Clima Cálido y Retiros</span>
                </div>
              </div>

              {/* Titular H2 / H1 */}
              <div className="space-y-2 sm:space-y-3">
                <h2 
                  className="font-sans text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tighter leading-[0.95] text-stone-950 uppercase"
                  id="sede-melgar-brand-h2"
                >
                  <span className="font-extrabold block">VIDA PLENA</span>
                  <span className="font-light block text-stone-800 mt-1">INTERNACIONAL</span>
                </h2>

                <h1 
                  className="font-sans text-base sm:text-lg lg:text-xl font-bold tracking-wide text-[#dc2626] uppercase"
                  id="sede-melgar-seo-h1"
                >
                  Sede Melgar · Comunidad Cristiana & Retiros de Fe
                </h1>
              </div>

              {/* Párrafo descriptivo adaptado a Melgar */}
              <p className="text-stone-600 font-sans text-xs sm:text-sm lg:text-base leading-relaxed max-w-xl" id="sede-melgar-slogan">
                Somos Vida Plena, una <strong className="font-semibold text-stone-800">comunidad cristiana</strong> enfocada en edificar hogares y vivir una fe que transforme vidas. En nuestra <strong className="font-semibold text-stone-800">Sede Melgar (Tolima)</strong>, hemos preparado un espacio campestre de paz, descanso espiritual y avivamiento. Si buscas un lugar donde recargar tu espíritu, restaurar tu familia y congregarte este fin de semana, la Sede Melgar te da la bienvenida con los brazos abiertos.
              </p>

              {/* Acciones principales del Hero */}
              <div className="flex flex-wrap gap-3 sm:gap-4 items-center pt-2" id="sede-melgar-hero-actions">
                <button
                  onClick={() => {
                    const target = document.getElementById("sede-melgar-horarios");
                    target?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-[#dc2626] hover:bg-stone-900 text-white font-sans text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 cursor-pointer shadow-xs whitespace-nowrap"
                >
                  Ver Horarios Sede Melgar
                </button>

                <button
                  onClick={() => {
                    const target = document.getElementById("sede-melgar-ubicacion");
                    target?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-stone-900 hover:bg-[#dc2626] text-white font-sans text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 cursor-pointer shadow-xs whitespace-nowrap"
                >
                  Cómo Llegar desde Bogotá
                </button>

                <a
                  href="https://wa.me/573046485133?text=Hola,%20quisiera%20conocer%20informaci%C3%B3n%20sobre%20reuniones%20y%20retiros%20en%20Vida%20Plena%20Internacional%20Sede%20Melgar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-stone-300 hover:border-emerald-500 hover:text-emerald-700 text-stone-700 bg-white px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition shadow-2xs"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Sede Melgar</span>
                </a>
              </div>

              {/* Datos clave de Sede Melgar */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-stone-200/60 max-w-lg">
                <div className="text-left">
                  <span className="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">Ubicación</span>
                  <span className="text-stone-900 font-bold text-xs sm:text-sm">Melgar, Tolima</span>
                </div>
                <div className="text-left">
                  <span className="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">Atención</span>
                  <span className="text-stone-900 font-bold text-xs sm:text-sm">304 6485133</span>
                </div>
                <div className="text-left">
                  <span className="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">Enfoque</span>
                  <span className="text-[#dc2626] font-bold text-xs sm:text-sm">Cultos & Retiros</span>
                </div>
              </div>

            </div>

            {/* Columna Derecha: Responsive YouTube Video Embed Limpio */}
            <div className="lg:col-span-6 relative flex items-center justify-center pt-8 lg:pt-0" id="sede-melgar-hero-right">
              <div className="w-full max-w-2xl aspect-video rounded-3xl shadow-2xl overflow-hidden border-4 border-stone-50 bg-stone-100" id="sede-melgar-video-container">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/bo5vJJ20OKU?si=ZADdDRLInUxlM1my" 
                  title="Vence la Mentalidad de Langosta - Vida Plena Internacional Sede Melgar" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SELECTOR COMPARATIVO DE LAS 3 SEDES DE VIDA PLENA
         ========================================================================= */}
      <section className="py-12 bg-stone-50 border-b border-stone-200/80 px-6 md:px-12 lg:px-20" id="selector-tres-sedes">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-[10px] uppercase font-bold text-[#dc2626] tracking-widest block">
              Red de Sedes Vida Plena Internacional
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-stone-950 tracking-tight">
              Nuestras Sedes a Tu Servicio
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm">
              Visítanos en la sede más conveniente para ti o tu familia este fin de semana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            
            {/* Sede Principal Norte */}
            <div className="bg-white border border-stone-200 rounded-3xl p-6 text-left space-y-4 hover:border-stone-400 transition shadow-2xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 bg-stone-100 px-3 py-1 rounded-full inline-block">
                Bogotá Norte
              </span>
              <div>
                <h4 className="font-display font-bold text-stone-950 text-lg">Sede Principal Norte</h4>
                <p className="text-stone-600 text-xs mt-0.5">Cl. 163 #18a-23, Bogotá</p>
              </div>
              <p className="text-stone-500 text-xs leading-relaxed">
                Auditorio central con parqueadero vigilado y cultos dominicales 8:00 AM y 10:30 AM.
              </p>
              <button
                onClick={() => onNavigate("inicio")}
                className="w-full inline-flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-900 hover:text-white text-stone-900 font-sans text-xs font-semibold py-2 rounded-full transition cursor-pointer"
              >
                Ir a Sede Principal
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Sede Sur */}
            <div className="bg-white border border-stone-200 rounded-3xl p-6 text-left space-y-4 hover:border-stone-400 transition shadow-2xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 bg-stone-100 px-3 py-1 rounded-full inline-block">
                Bogotá Sur
              </span>
              <div>
                <h4 className="font-display font-bold text-stone-950 text-lg">Sede Sur</h4>
                <p className="text-stone-600 text-xs mt-0.5">Bogotá Sur, Colombia</p>
              </div>
              <p className="text-stone-500 text-xs leading-relaxed">
                Reuniones de avivamiento y grupos de vida familiares en el sur de Bogotá.
              </p>
              <button
                onClick={() => onNavigate("sede-sur")}
                className="w-full inline-flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-900 hover:text-white text-stone-900 font-sans text-xs font-semibold py-2 rounded-full transition cursor-pointer"
              >
                Ir a Sede Sur
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Sede Melgar (Activa) */}
            <div className="bg-white border-2 border-[#dc2626] rounded-3xl p-6 text-left space-y-4 shadow-md relative">
              <div className="absolute -top-3 right-5 bg-[#dc2626] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-0.5 rounded-full shadow-xs">
                Estás Viendo Sede Melgar
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#dc2626] bg-red-50 border border-red-100 px-3 py-1 rounded-full inline-block">
                Tolima · Melgar
              </span>
              <div>
                <h4 className="font-display font-bold text-stone-950 text-lg">Sede Melgar</h4>
                <p className="text-stone-600 text-xs mt-0.5">Melgar, Tolima, Colombia</p>
              </div>
              <p className="text-stone-500 text-xs leading-relaxed">
                Cultos dominicales, campamentos de jóvenes, retiros de parejas y descanso espiritual.
              </p>
              <div className="inline-flex items-center gap-1.5 text-[#dc2626] font-bold text-xs pt-1">
                <span>Información y horarios abajo</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          HORARIOS DE SERVICIOS SEDE MELGAR
         ========================================================================= */}
      <section className="py-20 md:py-24 px-6 md:px-12 lg:px-20 bg-white border-b border-stone-150" id="sede-melgar-horarios">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="max-w-3xl text-left space-y-3">
            <span className="text-[11px] uppercase font-bold text-[#dc2626] tracking-widest block">
              Horarios Sede Melgar
            </span>
            <h2 className="text-stone-950 font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight uppercase">
              Reuniones en Sede Melgar
            </h2>
            <p className="text-stone-600 font-sans text-xs sm:text-sm lg:text-base leading-relaxed">
              Si vives en Melgar o viajas el fin de semana para descansar, te invitamos a adorar y fortalecer tu fe en nuestras reuniones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Tarjeta 1: Domingos en Melgar */}
            <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 flex flex-col justify-between space-y-6 text-left hover:border-[#dc2626] transition">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-white border border-stone-200 flex items-center justify-center text-[#dc2626] shadow-2xs">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">Culto Dominical</span>
                  <h3 className="font-display font-bold text-stone-950 text-xl mt-0.5">Domingos Familiares</h3>
                </div>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Celebración de alabanza, palabra y comunión familiar para comenzar la semana renovados por Dios.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-200">
                <span className="text-[11px] text-stone-500 uppercase tracking-wide block">Horario Matutino</span>
                <span className="text-[#dc2626] font-bold text-base block mt-0.5">10:00 AM</span>
              </div>
            </div>

            {/* Tarjeta 2: Noche de Alabanza y Fuego */}
            <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 flex flex-col justify-between space-y-6 text-left hover:border-[#dc2626] transition">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-white border border-stone-200 flex items-center justify-center text-stone-900 shadow-2xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">Víspera de Avivamiento</span>
                  <h3 className="font-display font-bold text-stone-950 text-xl mt-0.5">Sábados de Gloria</h3>
                </div>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Tiempo especial de intercesión, búsqueda del Espíritu Santo y adoración libre bajo las estrellas.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-200">
                <span className="text-[11px] text-stone-500 uppercase tracking-wide block">Horario Nocturno</span>
                <span className="text-[#dc2626] font-bold text-base block mt-0.5">6:30 PM</span>
              </div>
            </div>

            {/* Tarjeta 3: Retiros y Campamentos */}
            <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 flex flex-col justify-between space-y-6 text-left hover:border-[#dc2626] transition">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-white border border-stone-200 flex items-center justify-center text-stone-900 shadow-2xs">
                  <Trees className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">Experiencias Especiales</span>
                  <h3 className="font-display font-bold text-stone-950 text-xl mt-0.5">Retiros Campestres</h3>
                </div>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Encuentros de matrimonios, campamentos juveniles y vigilias programadas periódicamente.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-200">
                <span className="text-[11px] text-stone-500 uppercase tracking-wide block">Programación</span>
                <span className="text-stone-900 font-bold text-sm block mt-0.5">Fines de Semana</span>
              </div>
            </div>

            {/* Tarjeta 4: Vida Kids Melgar */}
            <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 flex flex-col justify-between space-y-6 text-left hover:border-[#dc2626] transition">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-white border border-stone-200 flex items-center justify-center text-[#dc2626] shadow-2xs">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">Ministerio Infantil</span>
                  <h3 className="font-display font-bold text-stone-950 text-xl mt-0.5">Vida Kids Melgar</h3>
                </div>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Actividades bíblicas recreativas al aire libre para que los niños aprendan de Jesús mientras disfrutan.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-200">
                <span className="text-[11px] text-stone-500 uppercase tracking-wide block">Durante los Servicios</span>
                <span className="text-[#dc2626] font-bold text-sm block mt-0.5">Domingos Simultáneos</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          UBICACIÓN Y CÓMO LLEGAR A SEDE MELGAR
         ========================================================================= */}
      <section className="py-20 md:py-24 px-6 md:px-12 lg:px-20 bg-stone-50/60 border-b border-stone-150" id="sede-melgar-ubicacion">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Panel de Información de Llegada */}
            <div className="lg:col-span-6 text-left space-y-6">
              <span className="text-[10px] uppercase font-bold text-[#dc2626] tracking-widest bg-red-50 border border-red-100 px-3.5 py-1 rounded-full inline-block">
                Ubicación Campestre
              </span>
              <h2 className="text-stone-950 font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
                Instalaciones Sede Melgar
              </h2>
              <p className="text-stone-600 font-sans text-xs sm:text-sm lg:text-base leading-relaxed">
                Melgar, Tolima se encuentra a tan solo 2 horas de Bogotá por la moderna vía doble calzada. Contamos con instalaciones acondicionadas para que toda la congregación viva momentos inolvidables.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex gap-3.5 items-start bg-white p-4 rounded-2xl border border-stone-200/80 shadow-2xs">
                  <MapPin className="w-5 h-5 text-[#dc2626] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">Melgar, Tolima, Colombia</h4>
                    <p className="text-stone-600 text-xs mt-0.5 leading-relaxed">
                      Sector campestre y tranquilo, con parqueadero privado vigilado y zonas de descanso.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start bg-white p-4 rounded-2xl border border-stone-200/80 shadow-2xs">
                  <Compass className="w-5 h-5 text-[#dc2626] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">Fácil Acceso desde Bogotá</h4>
                    <p className="text-stone-600 text-xs mt-0.5">
                      Ruta directa vía Bogotá - Fusagasugá - Melgar por autopista.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start bg-white p-4 rounded-2xl border border-stone-200/80 shadow-2xs">
                  <Phone className="w-5 h-5 text-[#dc2626] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">Línea de Coordinación Sede Melgar</h4>
                    <p className="text-stone-600 text-xs mt-0.5">
                      Tel / WhatsApp: <a href="https://wa.me/573046485133" target="_blank" rel="noopener noreferrer" className="text-stone-900 font-bold hover:text-[#dc2626]">304 6485133</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Botones de Navegación GPS */}
              <div className="flex flex-wrap gap-3 pt-3">
                <button
                  onClick={handleWazeClick}
                  className="inline-flex items-center gap-2 bg-stone-900 hover:bg-[#dc2626] text-white font-sans text-xs font-semibold px-5 py-3 rounded-full transition shadow-xs cursor-pointer"
                >
                  Abrir en Waze (Ruta Melgar)
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={handleMapsClick}
                  className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-stone-900 text-white font-sans text-xs font-semibold px-5 py-3 rounded-full transition shadow-xs cursor-pointer"
                >
                  Abrir en Google Maps
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Formulario Rápido de Registro para Visitas a Melgar */}
            <div className="lg:col-span-6">
              <div className="bg-white border border-stone-200/90 rounded-[32px] p-6 sm:p-10 shadow-sm text-left">
                <span className="text-[10px] uppercase font-bold text-stone-400 tracking-widest block mb-1">
                  Planifica Tu Visita
                </span>
                <h3 className="font-display font-black text-2xl text-stone-950 tracking-tight">
                  ¿Visitas Melgar Este Fin de Semana?
                </h3>
                <p className="text-stone-500 font-sans text-xs mt-1 mb-6">
                  Déjanos tus datos para coordinar tu llegada, reservarte un lugar preferencial o darte información sobre los próximos retiros espirituales.
                </p>

                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-5 rounded-2xl flex items-start gap-3.5">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-xs">¡Mensaje Recibido para Sede Melgar!</h4>
                      <p className="text-stone-600 text-xs mt-1 leading-relaxed">
                        Nuestro equipo se pondrá en contacto para brindarte todas las indicaciones. ¡Te esperamos!
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-[10px] uppercase font-bold text-stone-500 tracking-wider block mb-1.5 px-1">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej. Juan Carlos Méndez"
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-xs text-stone-800 focus:outline-hidden focus:border-[#dc2626] focus:ring-1 focus:ring-[#dc2626] transition"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] uppercase font-bold text-stone-500 tracking-wider block mb-1.5 px-1">
                          Teléfono / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Ej. 310 987 6543"
                          className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-xs text-stone-800 focus:outline-hidden focus:border-[#dc2626] focus:ring-1 focus:ring-[#dc2626] transition"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase font-bold text-stone-500 tracking-wider block mb-1.5 px-1">
                          Ciudad de Origen (o Melgar)
                        </label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="Ej. Bogotá / Melgar"
                          className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-xs text-stone-800 focus:outline-hidden focus:border-[#dc2626] focus:ring-1 focus:ring-[#dc2626] transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase font-bold text-stone-500 tracking-wider block mb-1.5 px-1">
                        ¿Te interesa algún retiro o evento en particular?
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Escribe tu mensaje, número de asistentes o consulta sobre Sede Melgar..."
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-xs text-stone-800 focus:outline-hidden focus:border-[#dc2626] focus:ring-1 focus:ring-[#dc2626] transition resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-[#dc2626] hover:bg-stone-900 text-white font-sans text-xs font-semibold py-3 rounded-xl transition duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xs disabled:opacity-50"
                    >
                      {submitting ? "Enviando información..." : "Enviar a Equipo Pastoral Sede Melgar"}
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          BANNER INFERIOR: REGRESO A SEDE PRINCIPAL O MENSAJES
         ========================================================================= */}
      <section className="py-14 px-6 md:px-12 lg:px-20 bg-stone-900 text-white text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#dc2626] bg-white/10 px-3.5 py-1 rounded-full inline-block">
            Vida Plena Internacional
          </span>
          <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight text-white">
            Una Sola Visión, Múltiples Altares de Bendición
          </h3>
          <p className="text-stone-300 text-xs sm:text-sm max-w-xl mx-auto">
            ¿Deseas regresar a la Sede Principal en Bogotá Norte o conocer la Sede Sur?
          </p>
          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <button
              onClick={() => onNavigate("inicio")}
              className="bg-white hover:bg-[#dc2626] hover:text-white text-stone-950 font-sans text-xs font-semibold px-6 py-2.5 rounded-full transition cursor-pointer shadow-xs"
            >
              Ver Sede Principal Norte
            </button>
            <button
              onClick={() => onNavigate("sede-sur")}
              className="bg-stone-800 hover:bg-white hover:text-stone-950 text-white font-sans text-xs font-semibold px-6 py-2.5 rounded-full transition cursor-pointer border border-stone-700 shadow-xs"
            >
              Ver Sede Sur
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
