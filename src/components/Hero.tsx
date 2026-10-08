interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section 
      id="inicio-banner" 
      className="bg-white pt-24 pb-16 px-6 md:px-12 lg:px-20 overflow-hidden border-b border-stone-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand, Tag, Copy & CTAs */}
          <div className="lg:col-span-6 text-left space-y-8" id="hero-left-col">
            
            {/* Minimal Capsule Badge Top */}
            <div className="inline-flex items-center gap-2 bg-[#ff0000] text-white px-5 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase shadow-xs">
              <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
              BIENVENIDOS A CASA
            </div>

            {/* Typography: VIDA PLENA INTERNACIONAL as H2 & Iglesia Cristiana en Bogotá as H1 */}
            <div className="space-y-2 sm:space-y-3">
              <h2 
                className="font-sans text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tighter leading-[0.95] text-stone-950 uppercase"
                id="hero-typography-parent"
              >
                <span className="font-extrabold block">VIDA PLENA</span>
                <span className="font-light block text-stone-800 mt-1">INTERNACIONAL</span>
              </h2>

              <h1 
                className="font-sans text-base sm:text-lg lg:text-xl font-bold tracking-wide text-[#ff0000] uppercase"
                id="hero-main-h1"
              >
                Iglesia Cristiana en Bogotá
              </h1>
            </div>

            {/* Slogan Description in clear minimalist style */}
            <p className="text-stone-600 font-sans text-xs sm:text-sm lg:text-base leading-relaxed max-w-xl" id="hero-slogan-p">
              Somos Vida Plena, una <strong className="font-medium text-stone-800">comunidad cristiana en Bogotá</strong> enfocada en edificar hogares y vivir una fe que transforme vidas. Como <strong className="font-medium text-stone-800">iglesia cristiana en Bogotá</strong>, buscamos compartir el evangelio de Jesucristo de manera práctica, cercana y sencilla. Si buscas una <strong className="font-medium text-stone-800">comunidad cristiana en Bogotá</strong> donde puedas crecer en la fe, restaurarte y caminar en familia, te damos la bienvenida.
            </p>

            {/* Two Action buttons - Always in a single line on mobile and desktop */}
            <div className="flex flex-row gap-3 sm:gap-4 items-center w-full sm:w-auto pt-2" id="hero-action-triggers">
              <button
                onClick={() => onNavigate("mensajes")}
                className="flex-1 sm:flex-initial text-center justify-center bg-[#ff0000] hover:bg-stone-900 text-white font-sans text-xs sm:text-sm font-medium px-5 sm:px-7 py-2.5 rounded-full transition-all duration-200 cursor-pointer shadow-xs whitespace-nowrap"
                id="hero-btn-messages"
              >
                Ver Mensaje
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
                className="flex-1 sm:flex-initial text-center justify-center bg-stone-900 hover:bg-[#ff0000] text-white font-sans text-xs sm:text-sm font-medium px-5 sm:px-7 py-2.5 rounded-full transition-all duration-200 cursor-pointer shadow-xs whitespace-nowrap"
                id="hero-btn-schedules"
              >
                Ver Horarios
              </button>
            </div>

          </div>

          {/* Right Column: Responsive YouTube Video Embed */}
          <div className="lg:col-span-6 relative flex items-center justify-center pt-8 lg:pt-0" id="hero-right-col">
            <div className="w-full max-w-2xl aspect-video rounded-3xl shadow-2xl overflow-hidden border-4 border-stone-50 bg-stone-100" id="hero-video-container">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/bo5vJJ20OKU?si=ZADdDRLInUxlM1my" 
                title="YouTube video player" 
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
  );
}
