interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section 
      id="inicio-banner" 
      className="bg-[#f4f4f6] pt-24 sm:pt-28 pb-16 px-6 sm:px-10 lg:px-14 xl:px-16 max-w-[1536px] mx-auto border-b border-stone-200/60"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
        
        {/* Columna Izquierda: Identidad y Contenido Principal */}
        <div className="lg:col-span-6 text-left space-y-6" id="hero-content">

          {/* Titular Principal como estaba antes */}
          <div className="space-y-2 sm:space-y-3" id="hero-brand-section">
            <h2 
              className="font-sans text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tighter leading-[0.95] text-stone-950 uppercase"
              id="hero-brand-h2"
            >
              <span className="font-extrabold block">VIDA PLENA</span>
              <span className="font-light block text-stone-800 mt-1">INTERNACIONAL</span>
            </h2>

            <h1 
              className="font-sans text-base sm:text-lg lg:text-xl font-bold tracking-normal text-red-600 uppercase"
              id="hero-main-h1"
            >
              Iglesia Cristiana en Bogotá
            </h1>
          </div>

          {/* Slogan Description in clear minimalist style */}
          <p className="text-stone-600 font-sans text-xs sm:text-sm lg:text-base leading-relaxed max-w-xl" id="hero-slogan-p">
            Somos Vida Plena, una <strong className="font-medium text-stone-900">comunidad cristiana en Bogotá</strong> enfocada en edificar hogares y vivir una fe que transforme vidas. Como <strong className="font-medium text-stone-900">Iglesia Cristiana</strong>, buscamos compartir el evangelio de Jesucristo de manera práctica, cercana y sencilla. Si buscas un espacio donde puedas crecer en la fe, restaurarte y caminar en familia, te damos la bienvenida.
          </p>

          {/* Action buttons - Clean Astra Buttons */}
          <div className="flex flex-wrap gap-3 items-center pt-1" id="hero-action-triggers">
            <button
              onClick={() => onNavigate("mensajes")}
              className="bg-red-600 hover:bg-red-700 text-white font-sans text-xs sm:text-sm font-medium px-6 py-2.5 rounded-lg transition-all duration-200 cursor-pointer shadow-xs whitespace-nowrap"
              id="hero-btn-messages"
            >
              Ver Mensajes
            </button>
            <button
              onClick={() => {
                const target = document.getElementById("servicios") || document.getElementById("schedules-and-location");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                } else {
                  onNavigate("servicios");
                }
              }}
              className="bg-stone-900 hover:bg-stone-800 text-white font-sans text-xs sm:text-sm font-medium px-6 py-2.5 rounded-lg transition-all duration-200 cursor-pointer shadow-xs whitespace-nowrap"
              id="hero-btn-schedules"
            >
              Ver Horarios
            </button>
          </div>

          {/* Indicadores rápidos de la sede principal */}
          <div className="pt-6 border-t border-stone-100 grid grid-cols-3 gap-4 text-left max-w-lg" id="hero-quick-indicators">
            <div className="space-y-0.5">
              <span className="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">Sede Norte</span>
              <p className="text-stone-900 font-semibold text-xs sm:text-sm">Cl. 163 #18a-23</p>
            </div>
            <div className="space-y-0.5">
              <span className="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">Horarios</span>
              <p className="text-stone-900 font-semibold text-xs sm:text-sm">Dom 8:00 & 10:30</p>
            </div>
            <div className="space-y-0.5">
              <span className="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">Comunidad</span>
              <p className="text-red-600 font-semibold text-xs sm:text-sm">Vida Kids & Más</p>
            </div>
          </div>

        </div>

        {/* Columna Derecha: Responsive YouTube Video Banner */}
        <div className="lg:col-span-6 relative flex items-center justify-center pt-6 lg:pt-0" id="hero-media-column">
          <div className="w-full max-w-full aspect-video rounded-2xl shadow-xl overflow-hidden border border-stone-200 bg-stone-100" id="hero-video-container">
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
    </section>
  );
}
