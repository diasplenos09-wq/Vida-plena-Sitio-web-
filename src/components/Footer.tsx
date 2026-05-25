import { Facebook, Instagram, Youtube } from "lucide-react";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="w-full bg-stone-950 text-stone-300 font-sans mt-auto" id="main-site-footer">
      {/* Upper Black Section */}
      <div className="max-w-7xl mx-auto py-16 px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Brand Details */}
        <div className="lg:col-span-7 space-y-4 text-left">
          <h2 className="text-white font-sans font-extrabold text-2xl sm:text-3xl tracking-tight uppercase">
            Vida Plena <span className="font-normal text-stone-400">Internacional</span>
          </h2>
          <p className="text-stone-300 font-sans text-xs sm:text-sm max-w-xl leading-relaxed">
            En Iglesia Vida Plena Internacional caminamos juntos como familia, confiando en Dios, fortaleciendo la fe y llevando un mensaje de esperanza a cada generación.
          </p>
        </div>

        {/* Right Navigation & Socials */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-6 w-full">
          {/* Quick horizontal nav menu (from image 4) */}
          <div className="flex flex-wrap justify-center lg:justify-end gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-wider">
            <button 
              onClick={() => onNavigate("inicio")} 
              className="text-[#ff0000] border-b-2 border-[#ff0000] pb-1 cursor-pointer transition font-bold"
            >
              inicio
            </button>
            <button 
              onClick={() => onNavigate("servicios")} 
              className="text-stone-200 hover:text-[#ff0000] pb-1 cursor-pointer transition font-bold"
            >
              servicios
            </button>
            <button 
              onClick={() => onNavigate("mensajes")} 
              className="text-stone-200 hover:text-[#ff0000] pb-1 cursor-pointer transition font-bold"
            >
              mensajes
            </button>
            <button 
              onClick={() => onNavigate("contacto")} 
              className="text-stone-200 hover:text-[#ff0000] pb-1 cursor-pointer transition font-bold"
            >
              contacto
            </button>
          </div>

          {/* Social Icons matching white round boxes from image 4 */}
          <div className="flex gap-2.5">
            <a 
              href="https://www.facebook.com/p/Vida-Plena-Internacional-100068673755930/?locale=es_LA" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 bg-white hover:bg-[#ff0000] hover:text-white rounded-lg flex items-center justify-center text-stone-950 transition-colors duration-200 p-1.5"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a 
              href="https://www.instagram.com/vidaplenainternacional/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 bg-white hover:bg-[#ff0000] hover:text-white rounded-lg flex items-center justify-center text-stone-950 transition-colors duration-200 p-1.5"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="https://www.youtube.com/@ComunidadCristianaVidaPlena" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 bg-white hover:bg-[#ff0000] hover:text-white rounded-lg flex items-center justify-center text-stone-950 transition-colors duration-200 p-1.5"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom White Copyright Bar (from image 4) */}
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
