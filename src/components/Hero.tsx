import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, HelpCircle, Heart, Check, Users, MessageSquare, PhoneCall, Calendar } from "lucide-react";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [isFirstTimeOpen, setIsFirstTimeOpen] = useState(false);

  return (
    <section 
      id="inicio-banner" 
      className="bg-white pt-24 pb-16 px-6 md:px-12 lg:px-20 overflow-hidden border-b border-stone-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand, Tag, Copy, Sub-Navigation & CTAs */}
          <div className="lg:col-span-6 text-left space-y-10" id="hero-left-col">
            
            {/* Minimal Capsule Badge Top */}
            <div className="inline-flex items-center gap-2 bg-[#ff0000] text-white px-5 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase shadow-xs">
              <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
              BIENVENIDOS A CASA
            </div>

            {/* Typography: Extrabold and Regular "VIDA PLENA INTERNACIONAL" */}
            <h1 
              className="font-sans text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tighter leading-[0.95] text-stone-950 uppercase"
              id="hero-typography-parent"
            >
              <span className="font-extrabold block">VIDA PLENA</span>
              <span className="font-light block text-stone-800 mt-1">INTERNACIONAL</span>
            </h1>

            {/* Slogan Description in clear minimalist style */}
            <p className="text-stone-605 font-sans text-xs sm:text-sm lg:text-base leading-relaxed max-w-xl" id="hero-slogan-p">
              Somos Vida Plena, una comunidad cristiana con una misión clara: establecer el Reino de Dios en la tierra mediante la predicación práctica y sencilla del evangelio de Jesucristo, llevando a cada persona a disfrutar la vida plena que Dios preparó.
            </p>

            {/* Sub-navigation under the banner left text */}
            <div className="py-4 border-y border-stone-100/80 my-4" id="home-sketch-subnav">
              <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block mb-3">Nuestra Iglesia</span>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-wider text-stone-600">
                <button onClick={() => onNavigate("inicio")} className="hover:text-[#ff0000] transition cursor-pointer flex items-center gap-1.5 font-bold text-[#ff0000]">
                  <span className="w-1.5 h-1.5 bg-[#ff0000] rounded-full" />
                  Inicio
                </button>
                <button onClick={() => onNavigate("servicios")} className="hover:text-[#ff0000] hover:bg-stone-50 border border-stone-200 px-3.5 py-1 rounded-full transition cursor-pointer text-stone-700">
                  Servicios
                </button>
                <button onClick={() => onNavigate("mensajes")} className="hover:text-[#ff0000] hover:bg-stone-50 border border-stone-200 px-3.5 py-1 rounded-full transition cursor-pointer text-stone-700">
                  Mensajes
                </button>
                <button onClick={() => onNavigate("contacto")} className="hover:text-[#ff0000] hover:bg-stone-50 border border-stone-200 px-3.5 py-1 rounded-full transition cursor-pointer text-stone-700">
                  Contacto
                </button>
              </div>
            </div>

            {/* Two Action buttons */}
            <div className="flex flex-wrap gap-4 items-center" id="hero-action-triggers">
              <button
                onClick={() => onNavigate("mensajes")}
                className="bg-[#ff0000] hover:bg-stone-900 text-white font-sans text-xs sm:text-sm font-bold px-10 py-4.5 rounded-full transition-all duration-300 hover:scale-[1.02] cursor-pointer shadow-sm hover:shadow-md"
                id="hero-btn-messages"
              >
                Ver Mensaje
              </button>
              <button
                onClick={() => {
                  const target = document.getElementById("schedules-and-location");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  } else {
                    onNavigate("servicios");
                  }
                }}
                className="bg-stone-950 hover:bg-[#ff0000] text-white font-sans text-xs sm:text-sm font-bold px-10 py-4.5 rounded-full transition-all duration-300 hover:scale-[1.02] cursor-pointer shadow-sm"
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
