import { useState, FormEvent } from "react";
import { 
  Calendar, Clock, MapPin, Heart, Users,
  ArrowRight, ExternalLink, MessageCircle, Phone, CheckCircle, Send, Waves, Award, Navigation
} from "lucide-react";

interface SedeBarranquillaLandingProps {
  onNavigate: (pageId: string) => void;
}

export default function SedeBarranquillaLanding({ onNavigate }: SedeBarranquillaLandingProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    barrio: "",
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
      setFormData({ name: "", phone: "", barrio: "", message: "" });
    }, 1000);
  };

  const handleWazeClick = () => {
    window.open("https://waze.com/ul?q=Cra.+4+%2341B-91+Barranquilla&navigate=yes", "_blank", "referrerpolicy=no-referrer");
  };

  const handleMapsClick = () => {
    window.open("https://www.google.com/maps/search/?api=1&query=Cra.+4+%2341B-91,+Barranquilla,+Atlantico,+Colombia", "_blank", "referrerpolicy=no-referrer");
  };

  return (
    <div className="bg-[#f4f4f6] font-sans text-stone-900" id="sede-barranquilla-landing-root">
      
      {/* =========================================================================
          HERO BANNER: VIDA PLENA INTERNACIONAL SEDE BARRANQUILLA
         ========================================================================= */}
      <section className="relative overflow-hidden bg-[#f4f4f6] border-b border-stone-200/60 py-12 sm:py-16 lg:py-20 px-6 md:px-12 lg:px-20" id="sede-barranquilla-hero">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Columna Izquierda: Identidad y Titular Principal */}
            <div className="lg:col-span-6 text-left space-y-6 sm:space-y-8" id="sede-barranquilla-hero-left">
              
              {/* Selector Rápido */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-900 border border-blue-200/80 px-3 py-1.5 rounded-full text-[11px] font-medium tracking-wide">
                  <Waves className="w-3.5 h-3.5 text-blue-600" />
                  <span>Barranquilla, Atlántico · Costa Caribe</span>
                </div>
              </div>

              {/* Titular H2 / H1 */}
              <div className="space-y-2 sm:space-y-3">
                <h2 
                  className="font-sans text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tighter leading-[0.95] text-stone-950 uppercase"
                  id="sede-barranquilla-brand-h2"
                >
                  <span className="font-extrabold block">VIDA PLENA</span>
                  <span className="font-light block text-stone-800 mt-1">INTERNACIONAL</span>
                </h2>

                <h1 
                  className="font-sans text-base sm:text-lg lg:text-xl font-bold tracking-wide text-[#dc2626] uppercase"
                  id="sede-barranquilla-seo-h1"
                >
                  Sede Barranquilla · Alabanza, Palabra & Familia en la Costa
                </h1>
              </div>

              {/* Párrafo descriptivo adaptado a Barranquilla */}
              <p className="text-stone-600 font-sans text-xs sm:text-sm lg:text-base leading-relaxed max-w-xl" id="sede-barranquilla-slogan">
                Somos Vida Plena, una <strong className="font-semibold text-stone-800">comunidad de fe</strong> apasionada por restaurar familias y enseñar la palabra de Dios de forma viva y práctica. En nuestra <strong className="font-semibold text-stone-800">Sede Barranquilla</strong>, bajo el liderazgo pastoral del <strong className="font-semibold text-stone-900">Pr. Amado Rodríguez</strong> y la <strong className="font-semibold text-stone-900">Pra. Lesly Silvera</strong>, te abrimos las puertas en un ambiente cálido de amor fraterno, milagros y crecimiento espiritual.
              </p>

              {/* Acciones principales del Hero */}
              <div className="flex flex-wrap gap-3 sm:gap-4 items-center pt-2" id="sede-barranquilla-hero-actions">
                <button
                  onClick={() => {
                    const target = document.getElementById("sede-barranquilla-horarios");
                    target?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-[#dc2626] hover:bg-stone-900 text-white font-sans text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer shadow-xs whitespace-nowrap"
                >
                  Ver Horarios de Reunión
                </button>

                <button
                  onClick={() => {
                    const target = document.getElementById("sede-barranquilla-ubicacion");
                    target?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-stone-900 hover:bg-[#dc2626] text-white font-sans text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer shadow-xs whitespace-nowrap"
                >
                  Cómo Llegar · Cra. 4 #41B-91
                </button>

                <a
                  href="https://wa.me/573017910845?text=Hola,%20quisiera%20conocer%20informaci%C3%B3n%20sobre%20las%20reuniones%20en%20Vida%20Plena%20Internacional%20Sede%20Barranquilla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-slate-200 hover:border-emerald-500 hover:text-emerald-700 text-slate-700 bg-white px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition shadow-2xs"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp 301 791 0845</span>
                </a>
              </div>

              {/* Datos clave de Sede Barranquilla */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200 max-w-lg">
                <div className="text-left">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Dirección</span>
                  <span className="text-stone-900 font-bold text-xs sm:text-sm">Cra. 4 #41B-91</span>
                </div>
                <div className="text-left">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Encargados</span>
                  <span className="text-stone-900 font-bold text-xs sm:text-sm">Pr. Amado & Pra. Lesly</span>
                </div>
                <div className="text-left">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Contacto</span>
                  <span className="text-[#dc2626] font-bold text-xs sm:text-sm">301 791 0845</span>
                </div>
              </div>

            </div>

            {/* Columna Derecha: Responsive YouTube Video Embed Limpio */}
            <div className="lg:col-span-6 relative flex items-center justify-center pt-8 lg:pt-0" id="sede-barranquilla-hero-right">
              <div className="w-full max-w-2xl aspect-video rounded-2xl shadow-xl overflow-hidden border border-slate-200 bg-slate-100" id="sede-barranquilla-video-container">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/bo5vJJ20OKU?si=ZADdDRLInUxlM1my" 
                  title="Vida Plena Internacional - Prédica y Mensaje de Esperanza" 
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
          PASTORES ENCARGADOS DE SEDE BARRANQUILLA
         ========================================================================= */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 bg-slate-50/70 border-b border-slate-200/80" id="sede-barranquilla-encargados">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-xs grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-4 flex flex-col items-center text-center space-y-4">
              <div className="w-24 h-24 rounded-2xl bg-red-50 border-2 border-red-100 flex items-center justify-center text-[#dc2626] shadow-2xs">
                <Users className="w-12 h-12" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#dc2626] bg-red-50 px-3 py-1 rounded-full">
                  Equipo Pastoral Encargado
                </span>
                <h3 className="font-sans font-bold text-xl text-stone-900 mt-2">
                  Pr. Amado Rodríguez <br />
                  <span className="font-semibold text-stone-700">&amp; Pra. Lesly Silvera</span>
                </h3>
              </div>
            </div>

            <div className="md:col-span-8 text-left space-y-4 border-t md:border-t-0 md:border-l border-slate-200 md:pl-8 pt-6 md:pt-0">
              <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider block">
                Liderazgo de Sede Barranquilla
              </span>
              <h4 className="font-sans font-bold text-2xl text-stone-900">
                Pastores con Corazón de Servicio en la Arenosa
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                El Pastor Amado Rodríguez y la Pastora Lesly Silvera lideran con vocación y entrega la congregación de Vida Plena Internacional en Barranquilla. Su misión es acompañar a cada familia en su caminar con Dios, brindando consejería, oración, discipulado y un espacio donde cada persona descubra su propósito en Cristo.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="tel:+573017910845"
                  className="inline-flex items-center gap-2 bg-stone-900 hover:bg-[#dc2626] text-white px-5 py-2.5 rounded-lg text-xs font-semibold transition"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Llamar: 301 791 0845</span>
                </a>
                <a
                  href="https://wa.me/573017910845?text=Hola%20Pastores%20Amado%20y%20Lesly,%20deseo%20contactarme%20con%20ustedes%20en%20Sede%20Barranquilla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg text-xs font-semibold transition"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Escribir por WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SELECTOR COMPARATIVO DE LAS SEDES DE VIDA PLENA
         ========================================================================= */}
      <section className="py-14 bg-[#f4f4f6] border-b border-stone-200/80 px-6 md:px-12 lg:px-20" id="selector-sedes-barranquilla">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-[10px] uppercase font-bold text-[#dc2626] tracking-widest block">
              Red de Sedes Vida Plena Internacional
            </span>
            <h3 className="font-sans font-bold text-2xl sm:text-3xl text-stone-950 tracking-tight">
              Nuestras Sedes a Tu Servicio
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm">
              Conoce nuestros diferentes puntos de reunión y acompáñanos este fin de semana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            
            {/* Sede Principal Norte */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 text-left space-y-4 hover:border-slate-300 transition shadow-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full inline-block">
                Bogotá Norte
              </span>
              <div>
                <h4 className="font-sans font-bold text-stone-950 text-lg">Sede Principal Norte</h4>
                <p className="text-stone-600 text-xs mt-0.5">Cl. 163 #18a-23, Bogotá</p>
              </div>
              <p className="text-stone-500 text-xs leading-relaxed">
                Auditorio central con parqueadero vigilado y cultos dominicales 8:00 AM y 10:30 AM.
              </p>
              <button
                onClick={() => onNavigate("inicio")}
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-stone-900 hover:text-white text-stone-900 font-sans text-xs font-semibold py-2 rounded-lg transition cursor-pointer"
              >
                Ir a Sede Principal
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Sede Sur */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 text-left space-y-4 hover:border-slate-300 transition shadow-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full inline-block">
                Bogotá Sur
              </span>
              <div>
                <h4 className="font-sans font-bold text-stone-950 text-lg">Sede Sur</h4>
                <p className="text-stone-600 text-xs mt-0.5">Bogotá Sur, Colombia</p>
              </div>
              <p className="text-stone-500 text-xs leading-relaxed">
                Reuniones de avivamiento y grupos de vida familiares en el sur de Bogotá.
              </p>
              <button
                onClick={() => onNavigate("sede-sur")}
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-stone-900 hover:text-white text-stone-900 font-sans text-xs font-semibold py-2 rounded-lg transition cursor-pointer"
              >
                Ir a Sede Sur
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Sede Barranquilla (Activa) */}
            <div className="bg-white border-2 border-[#dc2626] rounded-2xl p-6 text-left space-y-4 shadow-sm relative">
              <div className="absolute -top-3 right-5 bg-[#dc2626] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-0.5 rounded-full shadow-xs">
                Estás Viendo Sede Barranquilla
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#dc2626] bg-red-50 border border-red-100 px-3 py-1 rounded-full inline-block">
                Atlántico · Barranquilla
              </span>
              <div>
                <h4 className="font-sans font-bold text-stone-950 text-lg">Sede Barranquilla</h4>
                <p className="text-stone-600 text-xs mt-0.5">Cra. 4 #41B-91, Barranquilla</p>
              </div>
              <p className="text-stone-500 text-xs leading-relaxed">
                Reuniones de fe, discipulado y avivamiento lideradas por el Pr. Amado Rodríguez y Pra. Lesly Silvera.
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
          HORARIOS DE SERVICIOS SEDE BARRANQUILLA
         ========================================================================= */}
      <section className="py-20 md:py-24 px-6 md:px-12 lg:px-20 bg-slate-50/60 border-b border-slate-200/80" id="sede-barranquilla-horarios">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="max-w-3xl text-left space-y-3">
            <span className="text-[11px] uppercase font-bold text-[#dc2626] tracking-widest block">
              Horarios Sede Barranquilla
            </span>
            <h2 className="text-stone-950 font-sans font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight uppercase">
              Reuniones en Sede Barranquilla
            </h2>
            <p className="text-stone-600 font-sans text-xs sm:text-sm lg:text-base leading-relaxed">
              Te invitamos a adorar a Dios y recibir una palabra de vida en nuestra sede de la Cra. 4 #41B-91.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Tarjeta 1: Domingos en Barranquilla */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between space-y-6 text-left hover:border-[#dc2626] transition shadow-xs">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-[#dc2626] shadow-2xs">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Culto Dominical</span>
                  <h3 className="font-sans font-bold text-stone-950 text-xl mt-0.5">Domingos Familiares</h3>
                </div>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Celebración enérgica con alabanza, mensaje de fe y bendición para cada hogar barranquillero.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <span className="text-[11px] text-slate-500 uppercase tracking-wide block">Horario Matutino</span>
                <span className="text-[#dc2626] font-bold text-base block mt-0.5">10:00 AM</span>
              </div>
            </div>

            {/* Tarjeta 2: Noche de Alabanza y Oración */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between space-y-6 text-left hover:border-[#dc2626] transition shadow-xs">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-stone-900 shadow-2xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Oración &amp; Poder</span>
                  <h3 className="font-sans font-bold text-stone-950 text-xl mt-0.5">Noche de Milagros</h3>
                </div>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Clamor congregacional por sanidad, restauración familiar y peticiones de la iglesia.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <span className="text-[11px] text-slate-500 uppercase tracking-wide block">Entre Semana</span>
                <span className="text-[#dc2626] font-bold text-base block mt-0.5">7:00 PM</span>
              </div>
            </div>

            {/* Tarjeta 3: Discipulado y Crecimiento */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between space-y-6 text-left hover:border-[#dc2626] transition shadow-xs">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-stone-900 shadow-2xs">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Formación Bíblica</span>
                  <h3 className="font-sans font-bold text-stone-950 text-xl mt-0.5">Grupos de Vida</h3>
                </div>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Conexión cercana entre creyentes en hogares de Barranquilla para compartir la palabra.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <span className="text-[11px] text-slate-500 uppercase tracking-wide block">Coordinación Pastoral</span>
                <span className="text-stone-900 font-bold text-sm block mt-0.5">Horarios Flexibles</span>
              </div>
            </div>

            {/* Tarjeta 4: Vida Kids Barranquilla */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between space-y-6 text-left hover:border-[#dc2626] transition shadow-xs">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-[#dc2626] shadow-2xs">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Ministerio Infantil</span>
                  <h3 className="font-sans font-bold text-stone-950 text-xl mt-0.5">Vida Kids</h3>
                </div>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Clases pedagógicas, canciones y diversión bíblica para los pequeños de la casa.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <span className="text-[11px] text-slate-500 uppercase tracking-wide block">Durante los Servicios</span>
                <span className="text-[#dc2626] font-bold text-sm block mt-0.5">Domingos Simultáneos</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          UBICACIÓN Y CÓMO LLEGAR A SEDE BARRANQUILLA
         ========================================================================= */}
      <section className="py-20 md:py-24 px-6 md:px-12 lg:px-20 bg-[#f4f4f6] border-b border-stone-200/80" id="sede-barranquilla-ubicacion">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Panel de Información de Llegada */}
            <div className="lg:col-span-6 text-left space-y-6">
              <span className="text-[10px] uppercase font-bold text-[#dc2626] tracking-widest bg-red-50 border border-red-100 px-3.5 py-1 rounded-full inline-block">
                Ubicación Central en Barranquilla
              </span>
              <h2 className="text-stone-950 font-sans font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
                Instalaciones Sede Barranquilla
              </h2>
              <p className="text-stone-600 font-sans text-xs sm:text-sm lg:text-base leading-relaxed">
                Estamos ubicados en la <strong className="text-stone-900 font-semibold">Cra. 4 #41B-91</strong> en Barranquilla (Atlántico). Un lugar accesible con transporte público y vías principales para que tú y tu familia nos acompañen con total comodidad.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex gap-3.5 items-start bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-2xs">
                  <MapPin className="w-5 h-5 text-[#dc2626] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">Cra. 4 #41B-91, Barranquilla, Atlántico</h4>
                    <p className="text-stone-600 text-xs mt-0.5 leading-relaxed">
                      Barranquilla, Colombia · Punto de referencia con fácil acceso.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-2xs">
                  <Users className="w-5 h-5 text-[#dc2626] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">Pastores Encargados</h4>
                    <p className="text-stone-600 text-xs mt-0.5">
                      Pr. Amado Rodríguez y Pra. Lesly Silvera
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-2xs">
                  <Phone className="w-5 h-5 text-[#dc2626] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">Línea Telefónica y WhatsApp</h4>
                    <p className="text-stone-600 text-xs mt-0.5">
                      Tel / WhatsApp: <a href="tel:+573017910845" className="text-stone-900 font-bold hover:text-[#dc2626]">301 791 0845</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Botones de Navegación GPS */}
              <div className="flex flex-wrap gap-3 pt-3">
                <button
                  onClick={handleWazeClick}
                  className="inline-flex items-center gap-2 bg-stone-900 hover:bg-[#dc2626] text-white font-sans text-xs font-semibold px-5 py-3 rounded-xl transition shadow-xs cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Abrir en Waze (Cra. 4 #41B-91)
                </button>

                <button
                  onClick={handleMapsClick}
                  className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-stone-900 text-white font-sans text-xs font-semibold px-5 py-3 rounded-xl transition shadow-xs cursor-pointer"
                >
                  Abrir en Google Maps
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Formulario Rápido de Registro para Sede Barranquilla */}
            <div className="lg:col-span-6">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs text-left">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest block mb-1">
                  Visítanos en Barranquilla
                </span>
                <h3 className="font-sans font-bold text-2xl text-stone-950 tracking-tight">
                  ¿Deseas Asistir a Sede Barranquilla?
                </h3>
                <p className="text-stone-500 font-sans text-xs mt-1 mb-6">
                  Déjanos tus datos y los Pastores Amado Rodríguez y Lesly Silvera se comunicarán contigo para brindarte una cálida bienvenida.
                </p>

                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-5 rounded-xl flex items-start gap-3.5">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-xs">¡Mensaje Recibido para Sede Barranquilla!</h4>
                      <p className="text-stone-600 text-xs mt-1 leading-relaxed">
                        Los pastores Amado Rodríguez y Lesly Silvera han recibido tu solicitud. Te contactaremos al 301 791 0845. ¡Dios te bendiga!
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block mb-1.5 px-1">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej. Carlos Mendoza"
                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-xs text-stone-800 focus:outline-hidden focus:border-[#dc2626] focus:ring-1 focus:ring-[#dc2626] transition"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block mb-1.5 px-1">
                          Teléfono / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Ej. 301 791 0845"
                          className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-xs text-stone-800 focus:outline-hidden focus:border-[#dc2626] focus:ring-1 focus:ring-[#dc2626] transition"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block mb-1.5 px-1">
                          Barrio o Sector en Barranquilla
                        </label>
                        <input
                          type="text"
                          value={formData.barrio}
                          onChange={(e) => setFormData({ ...formData, barrio: e.target.value })}
                          placeholder="Ej. Murillo / Centro / Norte"
                          className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-xs text-stone-800 focus:outline-hidden focus:border-[#dc2626] focus:ring-1 focus:ring-[#dc2626] transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block mb-1.5 px-1">
                        Mensaje o Petición de Oración
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Escribe tu mensaje, número de familiares o consulta para los Pastores de Sede Barranquilla..."
                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-xs text-stone-800 focus:outline-hidden focus:border-[#dc2626] focus:ring-1 focus:ring-[#dc2626] transition resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-[#dc2626] hover:bg-stone-900 text-white font-sans text-xs font-semibold py-3 rounded-lg transition duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xs disabled:opacity-50"
                    >
                      {submitting ? "Enviando información..." : "Enviar a Pastores Amado y Lesly"}
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
          BANNER INFERIOR: REGRESO A SEDE PRINCIPAL O SEDE SUR
         ========================================================================= */}
      <section className="py-14 px-6 md:px-12 lg:px-20 bg-stone-900 text-white text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#dc2626] bg-white/10 px-3.5 py-1 rounded-full inline-block">
            Vida Plena Internacional
          </span>
          <h3 className="font-sans font-bold text-2xl sm:text-3xl tracking-tight text-white">
            Una Sola Visión, Múltiples Altares de Bendición
          </h3>
          <p className="text-stone-300 text-xs sm:text-sm max-w-xl mx-auto">
            ¿Deseas consultar la Sede Principal en Bogotá Norte o conocer la Sede Sur?
          </p>
          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <button
              onClick={() => onNavigate("inicio")}
              className="bg-white hover:bg-[#dc2626] hover:text-white text-stone-950 font-sans text-xs font-semibold px-6 py-2.5 rounded-lg transition cursor-pointer shadow-xs"
            >
              Ver Sede Principal Norte (Bogotá)
            </button>
            <button
              onClick={() => onNavigate("sede-sur")}
              className="bg-stone-800 hover:bg-white hover:text-stone-950 text-white font-sans text-xs font-semibold px-6 py-2.5 rounded-lg transition cursor-pointer border border-stone-700 shadow-xs"
            >
              Ver Sede Sur (Bogotá)
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
