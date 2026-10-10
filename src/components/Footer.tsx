import { Facebook, Instagram, Youtube } from "lucide-react";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="w-full bg-stone-950 text-stone-300 font-sans mt-auto" id="main-site-footer">
      
      {/* =========================================================================
          TRES CONTENEDORES HORIZONTALES CON DIVISIONES VERTICALES
          1. Vida Plena Internacional (Marca y propósito)
          2. Menú horizontal con Redes Sociales
          3. Cuadro pequeño para el Mapa
         ========================================================================= */}
      <div className="max-w-7xl mx-auto py-12 px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center divide-y lg:divide-y-0 lg:divide-x divide-stone-800">
          
          {/* CONTENEDOR 1: Vida Plena Internacional (Marca y Misión) */}
          <div className="lg:col-span-5 text-left space-y-3 pb-8 lg:pb-0 lg:pr-8" id="footer-seccion-marca">
            <h2 className="text-white font-sans text-2xl sm:text-3xl tracking-tight uppercase">
              <span className="font-extrabold text-white">VIDA PLENA</span>{" "}
              <span className="font-light text-stone-400">INTERNACIONAL</span>
            </h2>
            <p className="text-stone-300 font-sans text-xs sm:text-sm leading-relaxed max-w-md">
              Como <strong className="font-semibold text-white">Iglesia Cristiana</strong> caminamos juntos en Vida Plena Internacional como familia, siendo luz entre las <strong className="font-semibold text-white">iglesias norte de Bogotá</strong> para fortalecer la fe y llevar un mensaje de esperanza a cada generación.
            </p>
          </div>

          {/* CONTENEDOR 2: Menú Horizontal + Redes Sociales */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center gap-5 py-8 lg:py-0 lg:px-6" id="footer-seccion-menu-redes">
            {/* Menú Horizontal */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-6 gap-y-2 text-xs sm:text-sm font-bold uppercase tracking-wider">
              <button 
                onClick={() => onNavigate("inicio")} 
                className="text-red-500 border-b-2 border-red-500 pb-1 cursor-pointer transition font-bold"
              >
                inicio
              </button>
              <button 
                onClick={() => onNavigate("sedes")} 
                className="text-white hover:text-red-400 pb-1 cursor-pointer transition font-bold"
              >
                sedes
              </button>
              <button 
                onClick={() => onNavigate("servicios")} 
                className="text-white hover:text-red-400 pb-1 cursor-pointer transition font-bold"
              >
                servicios
              </button>
              <button 
                onClick={() => onNavigate("mensajes")} 
                className="text-white hover:text-red-400 pb-1 cursor-pointer transition font-bold"
              >
                mensajes
              </button>
              <button 
                onClick={() => onNavigate("contacto")} 
                className="text-white hover:text-red-400 pb-1 cursor-pointer transition font-bold"
              >
                contacto
              </button>
            </div>

            {/* Redes Sociales en botones cuadrados blancos */}
            <div className="flex gap-3 items-center justify-center">
              <a 
                href="https://www.facebook.com/p/Vida-Plena-Internacional-100068673755930/?locale=es_LA" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 bg-white hover:bg-red-600 hover:text-white rounded-lg flex items-center justify-center text-slate-950 transition-colors duration-200 shadow-xs"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 fill-current stroke-none" />
              </a>
              <a 
                href="https://www.instagram.com/vidaplenainternacional/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 bg-white hover:bg-red-600 hover:text-white rounded-lg flex items-center justify-center text-slate-950 transition-colors duration-200 shadow-xs"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.youtube.com/@ComunidadCristianaVidaPlena" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 bg-white hover:bg-red-600 hover:text-white rounded-lg flex items-center justify-center text-slate-950 transition-colors duration-200 shadow-xs"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 fill-current stroke-none" />
              </a>
            </div>
          </div>

          {/* CONTENEDOR 3: Cuadro Pequeño para el Mapa */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-end justify-center pt-8 lg:pt-0 lg:pl-6 w-full" id="footer-seccion-mapa-pequeno">
            <div className="w-full max-w-[280px] h-[135px] sm:h-[145px] rounded-2xl overflow-hidden border border-stone-800 shadow-md bg-stone-900 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127247.33542038074!2d-74.1686392596674!3d4.686463274896434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f85776399bf5d%3A0xa7ef5fb8ab3d4976!2sComunidad%20Cristiana%20Vida%20Plena%20Internacional!5e0!3m2!1sen!2sco!4v1791474869308!5m2!1sen!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Mapa Pequeño Comunidad Cristiana Vida Plena Internacional"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Barra Inferior de Derechos Reservados */}
      <div className="w-full bg-[#fbfbfb] border-t border-stone-200 py-5 px-6 md:px-12 lg:px-20 text-stone-900 font-sans shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="text-[10px] text-stone-400 font-bold uppercase tracking-wider sm:text-left text-center">
            Iglesia Vida Plena Internacional
          </div>
          <div className="text-stone-600 font-sans text-xs sm:text-right text-center">
            Todos los derechos reservados · Agencia de Publicidad Sapiens
          </div>
        </div>
      </div>

    </footer>
  );
}
