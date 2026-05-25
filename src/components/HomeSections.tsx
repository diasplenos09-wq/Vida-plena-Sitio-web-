import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Calendar, Clock, MapPin, Heart, BookOpen, 
  ChevronRight, Send, Check, DollarSign, ArrowRight, PlayCircle
} from "lucide-react";

interface SectionsProps {
  onNavigate: (sectionId: string) => void;
}

export default function HomeSections({ onNavigate }: SectionsProps) {
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [donateAmount, setDonateAmount] = useState("50000");
  const [customAmount, setCustomAmount] = useState("");
  const [donateSuccess, setDonateSuccess] = useState(false);

  const handleMapRedirect = () => {
    window.open("https://waze.com/ul?ll=4.7431,-74.0432&navigate=yes", "_blank", "referrerpolicy=no-referrer");
  };

  const handleDonateSubmit = (e: FormEvent) => {
    e.preventDefault();
    setDonateSuccess(true);
    setTimeout(() => {
      setDonateSuccess(false);
      setShowDonateModal(false);
      setCustomAmount("");
    }, 4000);
  };

  const renderVideoCover = (videoId: string, title: string) => {
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;
    return (
      <a
        href={watchUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group/video block relative w-full h-full aspect-video overflow-hidden hover:scale-[1.01] transition-transform duration-350 bg-stone-950 select-none cursor-pointer"
        title={`Ver "${title}" en YouTube`}
      >
        <img 
          src={thumbnailUrl} 
          alt={title}
          className="w-full h-full object-cover group-hover/video:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-stone-950/20 group-hover/video:bg-stone-950/35 transition-colors duration-300 flex items-center justify-center">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#ff0000] text-white rounded-full flex items-center justify-center shadow-lg transform group-hover/video:scale-110 active:scale-95 transition-transform duration-300">
            <PlayCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white stroke-none" />
          </div>
        </div>
        <div className="absolute bottom-2.5 right-2.5 bg-stone-900/90 backdrop-blur-xs text-[9px] text-white font-bold tracking-wider uppercase px-2.5 py-1.2 rounded-md opacity-0 group-hover/video:opacity-100 transition-opacity duration-300">
          Ver en YouTube
        </div>
      </a>
    );
  };

  return (
    <div className="bg-white font-sans text-stone-900" id="home-additional-sections">

      {/* SECTION 1: Signature Blend Style - Horarios y Ubicaciones */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-white border-t border-stone-100" id="schedules-and-location">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Side: Signature Blend layout from sketch */}
            <div className="lg:col-span-5 text-left space-y-8" id="schedules-left-narrative">
              <div className="space-y-4">
                <span className="text-[10px] uppercase font-bold text-stone-400 tracking-widest block">
                  Reuniones de Fe
                </span>
                <h2 className="text-stone-950 font-display font-bold text-4xl sm:text-5xl tracking-tight leading-tighter">
                  Nuestros Horarios de Reunión
                </h2>
              </div>
              
              <p className="text-stone-600 font-sans text-xs sm:text-sm leading-relaxed max-w-md">
                Cada semana nos reunimos para adorar, aprender y crecer juntos. Tenemos un espacio preparado para ti y toda tu familia. Participa en cualquiera de nuestros servicios presenciales en Bogotá.
              </p>

              <div className="border border-stone-100 rounded-2xl p-6 bg-stone-50/50 space-y-4 max-w-md" id="sketch-address-box">
                <div className="flex gap-3.5 items-start">
                  <MapPin className="w-5 h-5 text-[#ff0000] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-bold text-stone-900 text-xs sm:text-sm uppercase tracking-wide">Auditorio Principal</h4>
                    <p className="text-stone-600 font-sans text-xs mt-1.5 leading-relaxed">
                      Cl. 163 #18a-23, Bogotá, Colombia
                    </p>
                  </div>
                </div>
                <div className="h-[1px] bg-stone-200/50" />
                <p className="text-[11px] text-stone-400 leading-normal">
                  Sector seguro del norte con parqueadero vigilado y salas climatizadas para niños.
                </p>
              </div>

              {/* Minimalist CTA Buttons for directions and mapping */}
              <div className="flex flex-wrap gap-3" id="navigation-cta-buttons">
                <button
                  onClick={handleMapRedirect}
                  className="inline-flex items-center gap-2.5 bg-stone-950 hover:bg-[#ff0000] text-white font-sans text-[11px] font-bold uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer"
                  id="sketch-btn-horarios"
                >
                  Ver Horarios (Waze)
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="https://share.google/pvSe8QKyMZ2HoplYx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#ff0000] hover:bg-stone-950 text-white font-sans text-[11px] font-bold uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer"
                  id="sketch-btn-googlemaps"
                >
                  Google Maps
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Side: Grid of 4 beautiful minimal cards representing the 4 schedule boxes */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6" id="schedules-cards-g">
              
              {/* Card 1: Domingos */}
              <div 
                className="bg-white border border-stone-150 rounded-2xl p-6 hover:border-[#ff0000] transition-all duration-300 group flex flex-col justify-between"
                id="sch-box-1"
              >
                <div className="space-y-4 text-left">
                  <div className="w-10 h-10 bg-stone-50 rounded-xl flex items-center justify-center text-stone-900 border border-stone-200/40">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">Reunión General</span>
                    <h3 className="font-display font-black text-stone-950 text-lg leading-tight mt-1">Domingos</h3>
                  </div>
                </div>
                <div className="mt-8 text-left">
                  <span className="text-xs text-stone-400 block uppercase tracking-wide font-semibold">Horarios Dominicales</span>
                  <span className="text-[#ff0000] font-bold text-xs sm:text-sm block mt-0.5 leading-relaxed">
                    8:00 AM - 10:00 AM<br />
                    10:30 AM - 12:00 PM
                  </span>
                </div>
              </div>

              {/* Card 2: Miércoles */}
              <div 
                className="bg-white border border-stone-150 rounded-2xl p-6 hover:border-[#ff0000] transition-all duration-300 group flex flex-col justify-between"
                id="sch-box-2"
              >
                <div className="space-y-4 text-left">
                  <div className="w-10 h-10 bg-stone-50 rounded-xl flex items-center justify-center text-stone-900 border border-stone-200/40">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">Reunión de Enfoque</span>
                    <h3 className="font-display font-black text-stone-950 text-lg leading-tight mt-1">Miércoles</h3>
                  </div>
                </div>
                <div className="mt-8 text-left">
                  <span className="text-xs text-stone-400 block uppercase tracking-wide font-semibold">Taller de Fe</span>
                  <span className="text-[#ff0000] font-bold text-base block mt-0.5">7:30 PM</span>
                </div>
              </div>

              {/* Card 3: Oración de Machos */}
              <div 
                className="bg-white border border-stone-150 rounded-2xl p-6 hover:border-[#ff0000] transition-all duration-300 group flex flex-col justify-between"
                id="sch-box-3"
              >
                <div className="space-y-4 text-left">
                  <div className="w-10 h-10 bg-stone-50 rounded-xl flex items-center justify-center text-stone-900 border border-stone-200/40">
                    <Heart className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">Oración Especial</span>
                    <h3 className="font-display font-black text-stone-950 text-lg leading-tight mt-1">Martes</h3>
                  </div>
                </div>
                <div className="mt-8 text-left">
                  <span className="text-xs text-stone-400 block uppercase tracking-wide font-semibold font-bold">Oración de machos</span>
                  <span className="text-[#ff0000] font-bold text-base block mt-0.5">5:00 AM</span>
                </div>
              </div>

              {/* Card 4: Vida Kits */}
              <div 
                className="bg-white border border-stone-150 rounded-2xl p-6 hover:border-[#ff0000] transition-all duration-300 group flex flex-col justify-between"
                id="sch-box-4"
              >
                <div className="space-y-4 text-left">
                  <div className="w-10 h-10 bg-stone-50 rounded-xl flex items-center justify-center text-stone-900 border border-stone-200/40">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">Atención de Niños</span>
                    <h3 className="font-display font-black text-stone-950 text-lg leading-tight mt-1">Vida Kits</h3>
                  </div>
                </div>
                <div className="mt-8 text-left">
                  <span className="text-xs text-stone-400 block uppercase tracking-wide font-semibold">Durante Servicios</span>
                  <span className="text-[#ff0000] font-bold text-base block mt-0.5">Domingos</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: The House Blend style - Featured sermon */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-stone-50/50 border-t border-stone-100" id="featured-sermon-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Sermon Title details and info */}
            <div className="lg:col-span-7 text-left space-y-6" id="featured-sermon-text">
              <span className="text-[10px] uppercase font-bold text-[#ff0000] tracking-widest bg-red-50 px-3 py-1 rounded-full inline-block">
                Único Mensaje Prominente
              </span>
              <h2 className="text-stone-950 font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-none">
                El Mensaje del Hogar
              </h2>
              <p className="text-stone-700 font-sans text-xs sm:text-sm leading-relaxed max-w-xl">
                La enseñanza de la Palabra de Dios es el eje restaurador en Vida Plena Internacional. Nuestros mensajes semanales brindan las claves espirituales para blindar tu hogar contra la duda, restaurar el amor conyugal y educar hijos saludables. Accede gratis a la serie de prédicas multimedia.
              </p>

              <div className="space-y-4 pt-4" id="house-blend-highlights">
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 bg-[#ff0000] rounded-full mt-1.5 shrink-0" />
                  <p className="text-[11px] sm:text-xs text-stone-605">
                    <strong>Enseñanza Práctica:</strong> Sin sermones cansados; explicamos la Biblia en lenguaje sencillo y aplicable a tu lunes por la mañana.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 bg-[#ff0000] rounded-full mt-1.5 shrink-0" />
                  <p className="text-[11px] sm:text-xs text-stone-605">
                    <strong>Poder Devocional:</strong> Activa el poder protector del Espíritu Santo y libera el potencial oculto en tu caminar ministerial.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 pt-6" id="house-blend-ctas">
                <button
                  onClick={() => onNavigate("mensajes")}
                  className="bg-stone-950 hover:bg-[#ff0000] text-white font-sans text-[11px] font-bold uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                >
                  Ver Prédicas en Línea
                </button>
              </div>
            </div>

            {/* Right Column: YouTube video player instead of Serie Actual as requested */}
            <div className="lg:col-span-5 flex items-center justify-center w-full" id="featured-sermon-video">
              <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-stone-200/80 bg-stone-950" id="youtube-embed-wrapper">
                {renderVideoCover("bo5vJJ20OKU", "El Mensaje del Hogar")}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: 4 Blogs en la página principal (Noticias Vida Plena Internacional) */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-white border-t border-stone-100" id="blog-articles-section">
        <div className="max-w-7xl mx-auto">
          
          {/* Black heading panel row */}
          <div className="bg-stone-950 text-white rounded-3xl p-8 sm:p-12 mb-16 text-left flex flex-col md:flex-row md:items-center justify-between gap-6" id="blog-header-badge-row">
            <div className="space-y-2">
              <span className="text-[10px] text-[#ff0000] uppercase font-black tracking-widest">
                Comunidad Activa
              </span>
              <h2 className="text-white font-display font-black text-3xl sm:text-4xl tracking-tight uppercase leading-none">
                Noticias Vida Plena Internacional
              </h2>
              <p className="text-stone-300 font-sans text-xs sm:text-sm mt-3 max-w-xl">
                Hay un lugar para todos en vida plena. Descubre cómo conectarte con Dios, alimentar tu devoción diaria y sumarte a los milagros.
              </p>
            </div>
            
            <button 
              onClick={() => onNavigate("mensajes")}
              className="inline-flex items-center gap-2 bg-white hover:bg-[#ff0000] hover:text-white text-stone-950 font-sans text-[10px] font-bold uppercase tracking-wider px-6 py-3.5 rounded-full transition-all duration-300 shrink-0 cursor-pointer"
            >
              Ver Todas las Prédicas
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* 3 YouTube video embeds inside a clean 3-column grid as requested */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="blogs-grid">
            
            {/* Video Card 1 */}
            <div className="bg-stone-50 border border-stone-200 rounded-[24px] p-4 hover:shadow-md transition-all duration-300 flex flex-col justify-between" id="video-embed-card-1">
              <div className="space-y-3 text-left">
                <div className="aspect-video w-full rounded-2xl overflow-hidden bg-stone-950 shadow-xs">
                  {renderVideoCover("WKzvTfoh4_U", "Restaurando Familias con el Poder de Dios")}
                </div>
                <div className="px-1">
                  <span className="text-[9px] uppercase font-bold text-[#ff0000] tracking-wider block">Mensaje Dominical</span>
                  <h3 className="font-sans font-bold text-stone-950 text-xs sm:text-sm mt-1 leading-snug">
                    Restaurando Familias con el Poder de Dios
                  </h3>
                </div>
              </div>
            </div>

            {/* Video Card 2 */}
            <div className="bg-stone-50 border border-stone-200 rounded-[24px] p-4 hover:shadow-md transition-all duration-300 flex flex-col justify-between" id="video-embed-card-2">
              <div className="space-y-3 text-left">
                <div className="aspect-video w-full rounded-2xl overflow-hidden bg-stone-950 shadow-xs">
                  {renderVideoCover("Xwk_yjISVn4", "Estableciendo el Reino de Dios en la Tierra")}
                </div>
                <div className="px-1">
                  <span className="text-[9px] uppercase font-bold text-[#ff0000] tracking-wider block">Devoción Activa</span>
                  <h3 className="font-sans font-bold text-stone-950 text-xs sm:text-sm mt-1 leading-snug">
                    Estableciendo el Reino de Dios en la Tierra
                  </h3>
                </div>
              </div>
            </div>

            {/* Video Card 3 */}
            <div className="bg-stone-50 border border-stone-200 rounded-[24px] p-4 hover:shadow-md transition-all duration-300 flex flex-col justify-between" id="video-embed-card-3">
              <div className="space-y-3 text-left">
                <div className="aspect-video w-full rounded-2xl overflow-hidden bg-stone-950 shadow-xs">
                  {renderVideoCover("QDE2lt1yONQ", "Caminando con Valentía y Esperanza Diaria")}
                </div>
                <div className="px-1">
                  <span className="text-[9px] uppercase font-bold text-[#ff0000] tracking-wider block">Crecimiento de Fe</span>
                  <h3 className="font-sans font-bold text-stone-950 text-xs sm:text-sm mt-1 leading-snug">
                    Caminando con Valentía y Esperanza Diaria
                  </h3>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: Final Black Callout Banner (Image 5 exact design) */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white" id="callout-banner-section">
        <div className="max-w-7xl mx-auto">
          
          <div 
            className="bg-[#0c0a09] text-white rounded-[32px] p-8 sm:p-16 relative overflow-hidden text-center flex flex-col items-center justify-center border border-stone-900 shadow-2xl"
            id="callout-card"
          >
            {/* Background elements to ensure depth */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#ff0000]/10 rounded-full filter blur-3xl opacity-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-stone-900/60 rounded-full filter blur-2xl opacity-40 pointer-events-none" />

            {/* Grey pill container with white text and solid red bullet */}
            <div 
              className="inline-flex items-center gap-2 bg-[#292524] text-[#e7e5e4] border border-stone-800 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-8 relative z-10"
              id="callout-pill"
            >
              <span className="w-2.5 h-2.5 bg-[#ff0000] rounded-full animate-pulse" />
              BIENVENIDOS A CASA
            </div>

            {/* Title: Sé parte del cambio */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white mb-6 leading-none max-w-2xl relative z-10 uppercase">
              Sé parte del cambio
            </h2>

            {/* Paragraph: Tu generosidad... */}
            <p className="text-stone-300 font-sans text-xs sm:text-sm leading-relaxed max-w-xl mb-10 relative z-10">
              Tu generosidad nos ayuda a seguir impactando vidas en nuestra comunidad y más allá. Gracias por sembrar en buena tierra.
            </p>

            {/* Two Action Buttons side by side (Image 5 exact design) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto relative z-10" id="callout-actions">
              <button
                onClick={() => setShowDonateModal(true)}
                className="w-full sm:w-auto bg-[#ff0000] hover:bg-[#dd0000] text-white font-sans text-xs font-bold px-12 py-4 rounded-full transition-all duration-300 hover:scale-[1.03] shadow-[0_4px_20px_rgba(255,0,0,0.3)] cursor-pointer"
                id="btn-donate-trigger"
              >
                Donar en línea
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("schedules-and-location");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto bg-white hover:bg-stone-100 text-stone-950 font-sans text-xs font-bold px-10 py-4 rounded-full transition-all duration-300 hover:scale-[1.03] cursor-pointer"
                id="btn-callout-schedules"
              >
                Ver Horarios
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Slide-in Donation Dialog */}
      <AnimatePresence>
        {showDonateModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" id="donate-modal">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDonateModal(false)}
              className="absolute inset-0 bg-stone-950/70 backdrop-blur-md"
              id="donate-backdrop"
            />

            {/* Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-stone-250 overflow-hidden z-10"
              id="donate-container"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#ff0000]" />

              <h3 className="font-display font-bold text-xl text-stone-950 mb-2">Sembrar con Generosidad</h3>
              <p className="text-stone-500 text-xs mb-6">Tu donación libre ayuda a expandir el Reino de Dios en Colombia y restaurar familias.</p>

              {donateSuccess ? (
                <div className="py-8 text-center space-y-4" id="donate-success-view">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto shadow-md">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-base text-stone-900">¡Muchas Gracias por tu Ofrenda!</h4>
                  <p className="text-xs text-stone-500 leading-relaxed max-w-xs mx-auto">
                    Tu transacción de fe simulada de <span className="font-bold text-[#ff0000]">${Number(customAmount || donateAmount).toLocaleString()} COP</span> ha sido procesada. ¡Que Dios multiplique tu abundante generosidad en buena tierra!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleDonateSubmit} className="space-y-6" id="donate-amount-form">
                  {/* Select Amount buttons */}
                  <div className="grid grid-cols-3 gap-3" id="value-picks">
                    {[
                      { label: "$20.000", value: "20000" },
                      { label: "$50.000", value: "50000" },
                      { label: "$100.000", value: "100000" }
                    ].map((item) => (
                      <button
                        key={item.value}
                        type="button"
                        onClick={() => {
                          setDonateAmount(item.value);
                          setCustomAmount("");
                        }}
                        className={`py-3 px-3 rounded-xl text-xs font-bold leading-none border transition-all cursor-pointer ${
                          donateAmount === item.value && !customAmount
                            ? "bg-stone-950 text-white border-stone-950"
                            : "bg-stone-50 border-stone-200 text-stone-800 hover:bg-stone-100"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>

                  {/* Custom Amount option */}
                  <div className="flex flex-col text-left space-y-1.5" id="custom-amount-panel">
                    <label htmlFor="custom-amt" className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">
                      U otro valor personalizado (COP)
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                      <input
                        type="number"
                        id="custom-amt"
                        min="5000"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setDonateAmount("");
                        }}
                        placeholder="Ej. 150000"
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl pl-10 pr-4 py-3 text-xs text-stone-800 focus:outline-hidden focus:border-[#ff0000] focus:ring-1 focus:ring-[#ff0000]"
                      />
                    </div>
                  </div>

                  {/* Fast Bank Options for completeness */}
                  <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/50 space-y-3" id="funding-methods">
                    <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block text-left">Canal de pago electrónico</span>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-white border border-stone-200 rounded-lg text-center text-[10px] font-bold text-stone-700 shadow-3xs">
                        PSE / Ahorros / Nequi
                      </div>
                      <div className="p-3 bg-white border border-stone-200 rounded-lg text-center text-[10px] font-bold text-stone-700 shadow-3xs">
                        Tarjeta de Crédito
                      </div>
                    </div>
                  </div>

                  {/* Action triggers */}
                  <div className="flex gap-3 justify-end pt-2">
                    <button
                      type="button"
                      onClick={() => setShowDonateModal(false)}
                      className="bg-stone-50 hover:bg-stone-100 text-stone-700 font-semibold px-5 py-3 rounded-lg border border-stone-200 text-xs transition cursor-pointer"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="bg-[#ff0000] hover:bg-[#dd0000] text-white font-bold px-7 py-3 rounded-lg text-xs transition-colors cursor-pointer shadow-md"
                    >
                      Ofrendar ahora
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
