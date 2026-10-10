import { useState, FormEvent } from "react";
import { 
  Calendar, Clock, MapPin, Heart, BookOpen, Users,
  ArrowRight, ExternalLink, MessageCircle, Phone, CheckCircle, Send
} from "lucide-react";

interface SedeSurLandingProps {
  onNavigate: (pageId: string) => void;
}

export default function SedeSurLanding({ onNavigate }: SedeSurLandingProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    neighborhood: "",
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
      setFormData({ name: "", phone: "", neighborhood: "", message: "" });
    }, 1000);
  };

  const handleWazeClick = () => {
    window.open("https://waze.com/ul?q=Bogota+Sur&navigate=yes", "_blank", "referrerpolicy=no-referrer");
  };

  const handleMapsClick = () => {
    window.open("https://www.google.com/maps/search/Bogota+Sur+Colombia", "_blank", "referrerpolicy=no-referrer");
  };

  return (
    <div className="bg-white font-sans text-stone-900" id="sede-sur-landing-root">
      
      {/* =========================================================================
          HERO BANNER: VIDA PLENA INTERNACIONAL SEDE SUR
          Estructura idéntica a la portada principal con tipografía de alto impacto
         ========================================================================= */}
      <section className="relative overflow-hidden bg-white border-b border-stone-150 py-12 sm:py-16 lg:py-20 px-6 md:px-12 lg:px-20" id="sede-sur-hero">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Columna Izquierda: Identidad y Titular Principal */}
            <div className="lg:col-span-6 text-left space-y-6 sm:space-y-8" id="sede-sur-hero-left">
              
              {/* Badge de Bienvenida Sede Sur y Switcher de Sedes */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 bg-[#dc2626] text-white px-4 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase shadow-xs">
                  <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
                  BIENVENIDOS A CASA · SEDE SUR
                </div>

                {/* Botón rápido para alternar a Sede Principal */}
                <button
                  onClick={() => onNavigate("inicio")}
                  className="inline-flex items-center gap-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-wide transition cursor-pointer border border-stone-200"
                  title="Ver Sede Principal Norte"
                >
                  <MapPin className="w-3 h-3 text-stone-500" />
                  <span>Ver Sede Principal (Norte)</span>
                </button>
              </div>

              {/* Titular H2 / H1 en la jerarquía solicitada */}
              <div className="space-y-2 sm:space-y-3">
                <h2 
                  className="font-sans text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tighter leading-[0.95] text-stone-950 uppercase"
                  id="sede-sur-brand-h2"
                >
                  <span className="font-extrabold block">VIDA PLENA</span>
                  <span className="font-light block text-stone-800 mt-1">INTERNACIONAL</span>
                </h2>

                <h1 
                  className="font-sans text-base sm:text-lg lg:text-xl font-bold tracking-wide text-[#dc2626] uppercase"
                  id="sede-sur-seo-h1"
                >
                  Sede Sur · Iglesia Cristiana en Bogotá
                </h1>
              </div>

              {/* Párrafo descriptivo adaptado con las palabras clave */}
              <p className="text-stone-600 font-sans text-xs sm:text-sm lg:text-base leading-relaxed max-w-xl" id="sede-sur-slogan">
                Somos Vida Plena, una <strong className="font-semibold text-stone-800">comunidad cristiana en Bogotá</strong> enfocada en edificar hogares y vivir una fe que transforme vidas. En nuestra <strong className="font-semibold text-stone-800">Sede Sur</strong>, como <strong className="font-semibold text-stone-800">iglesia cristiana en Bogotá</strong>, compartimos el evangelio de Jesucristo de manera práctica, cercana y sencilla. Si buscas una comunidad viva donde restaurarte, crecer en fe y caminar en familia en el sur de la ciudad, te damos la bienvenida.
              </p>

              {/* Acciones principales del Hero */}
              <div className="flex flex-wrap gap-3 sm:gap-4 items-center pt-2" id="sede-sur-hero-actions">
                <button
                  onClick={() => {
                    const target = document.getElementById("sede-sur-horarios");
                    target?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-[#dc2626] hover:bg-stone-900 text-white font-sans text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 cursor-pointer shadow-xs whitespace-nowrap"
                >
                  Ver Horarios Sede Sur
                </button>

                <button
                  onClick={() => {
                    const target = document.getElementById("sede-sur-ubicacion");
                    target?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-stone-900 hover:bg-[#dc2626] text-white font-sans text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 cursor-pointer shadow-xs whitespace-nowrap"
                >
                  Cómo Llegar
                </button>

                <a
                  href="https://wa.me/573046485133?text=Hola,%20quisiera%20conocer%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Vida%20Plena%20Internacional%20Sede%20Sur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-stone-300 hover:border-emerald-500 hover:text-emerald-700 text-stone-700 bg-white px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition shadow-2xs"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Sede Sur</span>
                </a>
              </div>

              {/* Datos rápidos de la sede */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-stone-200/60 max-w-lg">
                <div className="text-left">
                  <span className="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">Sector</span>
                  <span className="text-stone-900 font-bold text-xs sm:text-sm">Bogotá Sur</span>
                </div>
                <div className="text-left">
                  <span className="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">Atención</span>
                  <span className="text-stone-900 font-bold text-xs sm:text-sm">304 6485133</span>
                </div>
                <div className="text-left">
                  <span className="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">Cultos</span>
                  <span className="text-[#dc2626] font-bold text-xs sm:text-sm">Dom y Mié</span>
                </div>
              </div>

            </div>

            {/* Columna Derecha: Responsive YouTube Video Embed Limpio (Idéntico a la imagen 1) */}
            <div className="lg:col-span-6 relative flex items-center justify-center pt-8 lg:pt-0" id="sede-sur-hero-right">
              <div className="w-full max-w-2xl aspect-video rounded-3xl shadow-2xl overflow-hidden border-4 border-stone-50 bg-stone-100" id="sede-sur-video-container">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/bo5vJJ20OKU?si=ZADdDRLInUxlM1my" 
                  title="Vence la Mentalidad de Langosta - Ap. Oscar Bernier" 
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
          SELECTOR COMPARATIVO DE SEDES (NORTE vs SUR)
         ========================================================================= */}
      <section className="py-12 bg-stone-50 border-b border-stone-200/80 px-6 md:px-12 lg:px-20" id="selector-sedes-banner">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-[10px] uppercase font-bold text-[#dc2626] tracking-widest block">
              Nuestras Sedes en Bogotá
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-stone-950 tracking-tight">
              Una Sola Iglesia, Dos Puntos de Encuentro
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm">
              Elige la sede que quede más cerca de tu hogar y asiste este fin de semana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            
            {/* Tarjeta Sede Principal (Norte) */}
            <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 text-left space-y-5 hover:border-stone-400 transition shadow-2xs">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 bg-stone-100 px-3 py-1 rounded-full">
                  Sede Principal · Norte
                </span>
                <span className="text-xs text-stone-400 font-semibold">Bogotá Norte</span>
              </div>
              <div>
                <h4 className="font-display font-bold text-stone-950 text-xl">Sede Principal Norte</h4>
                <p className="text-stone-600 text-xs mt-1">Cl. 163 #18a-23, Bogotá</p>
              </div>
              <p className="text-stone-500 text-xs leading-relaxed">
                Auditorio central con parqueadero vigilado, salas de niños y múltiples horarios dominicales.
              </p>
              <button
                onClick={() => onNavigate("inicio")}
                className="w-full inline-flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-900 hover:text-white text-stone-900 font-sans text-xs font-semibold py-2.5 rounded-full transition cursor-pointer"
              >
                Ir a Sede Principal (Norte)
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Tarjeta Sede Sur (Activa) */}
            <div className="bg-white border-2 border-[#dc2626] rounded-3xl p-6 sm:p-8 text-left space-y-5 shadow-md relative">
              <div className="absolute -top-3 right-6 bg-[#dc2626] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-0.5 rounded-full shadow-xs">
                Estás Viendo Sede Sur
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#dc2626] bg-red-50 border border-red-100 px-3 py-1 rounded-full">
                  Sede Sur · Bogotá
                </span>
                <span className="text-xs text-[#dc2626] font-semibold">Comunidad Sur</span>
              </div>
              <div>
                <h4 className="font-display font-bold text-stone-950 text-xl">Sede Sur</h4>
                <p className="text-stone-600 text-xs mt-1">Bogotá Sur, Colombia</p>
              </div>
              <p className="text-stone-500 text-xs leading-relaxed">
                Reuniones de avivamiento y grupos de vida preparados especialmente para las familias del sur.
              </p>
              <div className="inline-flex items-center gap-2 text-[#dc2626] font-bold text-xs">
                <span>Información y horarios detallados abajo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          HORARIOS DE SERVICIOS SEDE SUR
         ========================================================================= */}
      <section className="py-20 md:py-24 px-6 md:px-12 lg:px-20 bg-white border-b border-stone-150" id="sede-sur-horarios">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="max-w-3xl text-left space-y-3">
            <span className="text-[11px] uppercase font-bold text-[#dc2626] tracking-widest block">
              Horarios Sede Sur
            </span>
            <h2 className="text-stone-950 font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight uppercase">
              Reuniones Semanales Sede Sur
            </h2>
            <p className="text-stone-600 font-sans text-xs sm:text-sm lg:text-base leading-relaxed">
              Planifica tu fin de semana y asiste junto a tus seres queridos. Todos nuestros servicios cuentan con alabanza en vivo y enseñanza bíblica práctica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Tarjeta 1: Domingos Familiares Sede Sur */}
            <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 flex flex-col justify-between space-y-6 text-left hover:border-[#dc2626] transition">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-white border border-stone-200 flex items-center justify-center text-[#dc2626] shadow-2xs">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">Culto Familiar</span>
                  <h3 className="font-display font-bold text-stone-950 text-xl mt-0.5">Domingos Sede Sur</h3>
                </div>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Celebración central de adoración, palabra y bendición para comenzar la semana con la paz de Dios.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-200">
                <span className="text-[11px] text-stone-500 uppercase tracking-wide block">Horario Principal</span>
                <span className="text-[#dc2626] font-bold text-base block mt-0.5">10:00 AM</span>
              </div>
            </div>

            {/* Tarjeta 2: Miércoles de Poder Sede Sur */}
            <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 flex flex-col justify-between space-y-6 text-left hover:border-[#dc2626] transition">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-white border border-stone-200 flex items-center justify-center text-stone-900 shadow-2xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">Enfoque Bíblico</span>
                  <h3 className="font-display font-bold text-stone-950 text-xl mt-0.5">Miércoles Explosivos</h3>
                </div>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Enseñanza profunda de fe, renovación espiritual y oración unida a mitad de semana.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-200">
                <span className="text-[11px] text-stone-500 uppercase tracking-wide block">Horario Nocturno</span>
                <span className="text-[#dc2626] font-bold text-base block mt-0.5">7:00 PM</span>
              </div>
            </div>

            {/* Tarjeta 3: Grupos de Vida en el Sur */}
            <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 flex flex-col justify-between space-y-6 text-left hover:border-[#dc2626] transition">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-white border border-stone-200 flex items-center justify-center text-stone-900 shadow-2xs">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">Comunidad y Hogares</span>
                  <h3 className="font-display font-bold text-stone-950 text-xl mt-0.5">Grupos de Vida Sur</h3>
                </div>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Reuniones en casas por sectores en el sur de Bogotá para compartir, orar y hacer amigos en la fe.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-200">
                <span className="text-[11px] text-stone-500 uppercase tracking-wide block">Reuniones Semanales</span>
                <span className="text-stone-900 font-bold text-sm block mt-0.5">Viernes y Sábados</span>
              </div>
            </div>

            {/* Tarjeta 4: Plenitud Kids Sede Sur */}
            <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 flex flex-col justify-between space-y-6 text-left hover:border-[#dc2626] transition">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-white border border-stone-200 flex items-center justify-center text-[#dc2626] shadow-2xs">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">Ministerio Infantil</span>
                  <h3 className="font-display font-bold text-stone-950 text-xl mt-0.5">Vida Kids Sur</h3>
                </div>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Salones preparados con maestras dedicadas para enseñar valores cristianos y diversión bíblica.
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
          UBICACIÓN Y CÓMO LLEGAR SEDE SUR
         ========================================================================= */}
      <section className="py-20 md:py-24 px-6 md:px-12 lg:px-20 bg-stone-50/60 border-b border-stone-150" id="sede-sur-ubicacion">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Panel de Información de Llegada */}
            <div className="lg:col-span-6 text-left space-y-6">
              <span className="text-[10px] uppercase font-bold text-[#dc2626] tracking-widest bg-red-50 border border-red-100 px-3.5 py-1 rounded-full inline-block">
                Ubicación y Acceso
              </span>
              <h2 className="text-stone-950 font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
                Auditorio Sede Sur en Bogotá
              </h2>
              <p className="text-stone-600 font-sans text-xs sm:text-sm lg:text-base leading-relaxed">
                Nuestra sede en el sur de Bogotá está ubicada en un sector estratégico de fácil conexión vehicular y transporte masivo.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex gap-3.5 items-start bg-white p-4 rounded-2xl border border-stone-200/80 shadow-2xs">
                  <MapPin className="w-5 h-5 text-[#dc2626] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">Sector Bogotá Sur</h4>
                    <p className="text-stone-600 text-xs mt-0.5 leading-relaxed">
                      Llegada rápida desde vías principales del sur, avenidas troncales y TransMilenio.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start bg-white p-4 rounded-2xl border border-stone-200/80 shadow-2xs">
                  <Phone className="w-5 h-5 text-[#dc2626] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">Línea de Coordinación Sede Sur</h4>
                    <p className="text-stone-600 text-xs mt-0.5">
                      Tel / WhatsApp: <a href="https://wa.me/573046485133" target="_blank" rel="noopener noreferrer" className="text-stone-900 font-bold hover:text-[#dc2626]">304 6485133</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start bg-white p-4 rounded-2xl border border-stone-200/80 shadow-2xs">
                  <Clock className="w-5 h-5 text-[#dc2626] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">Horario de Puertas Abiertas</h4>
                    <p className="text-stone-600 text-xs mt-0.5">
                      Apertura 45 minutos antes de cada reunión para bienvenida y oración.
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
                  Abrir en Waze (Ruta Sur)
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

            {/* Formulario Rápido de Conexión Sede Sur */}
            <div className="lg:col-span-6">
              <div className="bg-white border border-stone-200/90 rounded-[32px] p-6 sm:p-10 shadow-sm text-left">
                <span className="text-[10px] uppercase font-bold text-stone-400 tracking-widest block mb-1">
                  Contacto Directo Sede Sur
                </span>
                <h3 className="font-display font-black text-2xl text-stone-950 tracking-tight">
                  ¿Vives en el Sur de Bogotá?
                </h3>
                <p className="text-stone-500 font-sans text-xs mt-1 mb-6">
                  Déjanos tus datos y nuestro equipo pastoral de la Sede Sur se pondrá en contacto contigo para orientarte y darte una cálida bienvenida.
                </p>

                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-5 rounded-2xl flex items-start gap-3.5">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-xs">¡Mensaje Recibido para Sede Sur!</h4>
                      <p className="text-stone-600 text-xs mt-1 leading-relaxed">
                        Pronto nos comunicaremos al número brindado. ¡Dios te bendiga abundantemente!
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
                        placeholder="Ej. Andrés Ramírez"
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
                          placeholder="Ej. 300 123 4567"
                          className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-xs text-stone-800 focus:outline-hidden focus:border-[#dc2626] focus:ring-1 focus:ring-[#dc2626] transition"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase font-bold text-stone-500 tracking-wider block mb-1.5 px-1">
                          Barrio o Localidad en el Sur
                        </label>
                        <input
                          type="text"
                          value={formData.neighborhood}
                          onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                          placeholder="Ej. Kennedy, Tunjuelito, Bosa"
                          className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-xs text-stone-800 focus:outline-hidden focus:border-[#dc2626] focus:ring-1 focus:ring-[#dc2626] transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase font-bold text-stone-500 tracking-wider block mb-1.5 px-1">
                        ¿Cómo podemos servirte o apoyarte en oración?
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Escribe tu mensaje o motivo de oración..."
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-xs text-stone-800 focus:outline-hidden focus:border-[#dc2626] focus:ring-1 focus:ring-[#dc2626] transition resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-[#dc2626] hover:bg-stone-900 text-white font-sans text-xs font-semibold py-3 rounded-xl transition duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xs disabled:opacity-50"
                    >
                      {submitting ? "Enviando información..." : "Enviar a Equipo Pastoral Sede Sur"}
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
            Estamos Listos para Recibirte en la Sede Sur
          </h3>
          <p className="text-stone-300 text-xs sm:text-sm max-w-xl mx-auto">
            ¿Quieres conocer también las actividades de nuestra Sede Principal en el norte o escuchar las prédicas en línea?
          </p>
          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <button
              onClick={() => onNavigate("inicio")}
              className="bg-white hover:bg-[#dc2626] hover:text-white text-stone-950 font-sans text-xs font-semibold px-6 py-2.5 rounded-full transition cursor-pointer shadow-xs"
            >
              Ver Sede Principal Norte
            </button>
            <button
              onClick={() => onNavigate("mensajes")}
              className="bg-stone-800 hover:bg-white hover:text-stone-950 text-white font-sans text-xs font-semibold px-6 py-2.5 rounded-full transition cursor-pointer border border-stone-700 shadow-xs"
            >
              Ver Prédicas en Línea
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
