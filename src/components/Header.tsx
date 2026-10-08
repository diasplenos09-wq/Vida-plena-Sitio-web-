import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, MapPin } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSedesOpen, setIsSedesOpen] = useState(false);
  const [isMobileSedesOpen, setIsMobileSedesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "inicio", label: "Inicio" },
    { id: "sedes", label: "Sedes", hasDropdown: true },
    { id: "servicios", label: "Servicios" },
    { id: "mensajes", label: "Mensajes" },
    { id: "contacto", label: "Contacto" },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
    setIsSedesOpen(false);
  };

  return (
    <header
      id="main-nav-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-stone-200/50 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Vida Plena Internacional - Text Only */}
        <button
          onClick={() => handleNavClick("inicio")}
          className="flex items-center gap-1 group text-left cursor-pointer focus:outline-hidden"
          id="logo-button"
        >
          <div className="flex flex-col -space-y-1">
            <span className="text-stone-950 font-cursive text-[28px] leading-none select-none font-bold">
              Vida Plena
            </span>
            <span className="text-stone-950 font-logo-sans font-bold uppercase tracking-[0.22em] text-[10px] select-none block leading-none">
              Internacional
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-stone-100/80 p-1 rounded-full border border-stone-200/60" id="desktop-nav">
          {navItems.map((item) => {
            if (item.hasDropdown) {
              const isSedesActive = ["sedes", "sede-sur", "sede-melgar", "melgar", "sede-megar"].includes(activeSection);
              return (
                <div 
                  key={item.id} 
                  className="relative"
                  onMouseEnter={() => setIsSedesOpen(true)}
                  onMouseLeave={() => setIsSedesOpen(false)}
                >
                  <button
                    onClick={() => setIsSedesOpen(!isSedesOpen)}
                    className={`relative px-4 py-1.5 rounded-full font-sans text-xs font-medium tracking-wide transition-all duration-200 cursor-pointer inline-flex items-center gap-1 focus:outline-hidden ${
                      isSedesActive
                        ? "bg-stone-900 text-white shadow-xs font-semibold"
                        : "text-stone-600 hover:text-stone-900 hover:bg-stone-200/50"
                    }`}
                    id="nav-link-sedes-dropdown"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isSedesOpen ? "rotate-180" : ""}`} />
                  </button>

                  {/* Dropdown Menu Desplegable de Sedes */}
                  {isSedesOpen && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-stone-200/80 p-2 z-50 flex flex-col gap-1 text-left animate-in fade-in slide-in-from-top-2 duration-150"
                      id="sedes-dropdown-card"
                    >
                      <button
                        onClick={() => handleNavClick("inicio")}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-stone-50 transition flex items-center justify-between group cursor-pointer"
                      >
                        <div>
                          <strong className="text-stone-900 text-xs font-bold block group-hover:text-[#ff0000] transition">
                            Sede Principal
                          </strong>
                          <span className="text-stone-500 text-[11px] block">Bogotá Norte (Cl. 163 #18a-23)</span>
                        </div>
                        <MapPin className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#ff0000]" />
                      </button>

                      <button
                        onClick={() => handleNavClick("sede-sur")}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-stone-50 transition flex items-center justify-between group cursor-pointer border-t border-stone-100"
                      >
                        <div>
                          <strong className="text-stone-900 text-xs font-bold block group-hover:text-[#ff0000] transition">
                            Sede Sur
                          </strong>
                          <span className="text-stone-500 text-[11px] block">Bogotá Sur (Reuniones de Fe)</span>
                        </div>
                        <MapPin className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#ff0000]" />
                      </button>

                      <button
                        onClick={() => handleNavClick("sede-melgar")}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-stone-50 transition flex items-center justify-between group cursor-pointer border-t border-stone-100"
                      >
                        <div>
                          <strong className="text-stone-900 text-xs font-bold block group-hover:text-[#ff0000] transition">
                            Sede Melgar
                          </strong>
                          <span className="text-stone-500 text-[11px] block">Tolima (Cultos & Retiros)</span>
                        </div>
                        <MapPin className="w-3.5 h-3.5 text-[#ff0000] group-hover:scale-110 transition" />
                      </button>
                    </div>
                  )}
                </div>
              );
            }

            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-1.5 rounded-full font-sans text-xs font-medium tracking-wide transition-all duration-200 cursor-pointer focus:outline-hidden ${
                  isActive
                    ? "bg-stone-900 text-white shadow-xs font-semibold"
                    : "text-stone-600 hover:text-stone-900 hover:bg-stone-200/50"
                }`}
                id={`nav-link-${item.id}`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button: Live Stream / Dominical Connection */}
        <div className="hidden lg:block" id="dominant-cta-container">
          <button
            onClick={() => handleNavClick("servicios")}
            className="bg-stone-900 hover:bg-[#ff0000] text-white font-sans text-xs font-medium px-4 py-2 rounded-full transition-all duration-200 shadow-xs cursor-pointer focus:outline-hidden"
            id="dominant-cta"
          >
            Horarios y Reunión
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-full transition-all duration-200 cursor-pointer focus:outline-hidden"
          id="mobile-menu-toggle"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Backdrop & Drawer */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 top-[65px] z-40 bg-stone-950/20 backdrop-blur-xs md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          id="mobile-drawer-backdrop"
        >
          <div
            className="absolute top-0 left-0 right-0 bg-white border-b border-stone-200 shadow-xl px-6 py-8 flex flex-col gap-3 animate-in slide-in-from-top duration-300"
            onClick={(e) => e.stopPropagation()}
            id="mobile-drawer-content"
          >
            <div className="text-stone-400 text-[10px] uppercase tracking-widest font-bold font-display px-2 mb-1">
              Menú de Navegación
            </div>
            {navItems.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div key={item.id} className="flex flex-col">
                    <button
                      onClick={() => setIsMobileSedesOpen(!isMobileSedesOpen)}
                      className="w-full text-left px-4 py-3 rounded-xl font-sans font-medium text-sm text-stone-700 hover:bg-stone-100 flex items-center justify-between cursor-pointer"
                    >
                      <span>Sedes</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileSedesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isMobileSedesOpen && (
                      <div className="pl-6 pr-2 py-2 flex flex-col gap-2 border-l-2 border-red-200 ml-4 my-1">
                        <button
                          onClick={() => handleNavClick("inicio")}
                          className="text-left py-1 text-xs text-stone-600 hover:text-[#ff0000] font-medium"
                        >
                          · Sede Principal (Norte)
                        </button>
                        <button
                          onClick={() => handleNavClick("sede-sur")}
                          className="text-left py-1 text-xs text-stone-600 hover:text-[#ff0000] font-medium"
                        >
                          · Sede Sur (Bogotá)
                        </button>
                        <button
                          onClick={() => handleNavClick("sede-melgar")}
                          className="text-left py-1 text-xs text-stone-600 hover:text-[#ff0000] font-medium"
                        >
                          · Sede Melgar (Tolima)
                        </button>
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl font-sans font-medium text-sm transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-red-50 text-red-900 border-l-4 border-red-600 font-semibold"
                      : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                  }`}
                  id={`mobile-nav-link-${item.id}`}
                >
                  {item.label}
                </button>
              );
            })}
            
            <button
              onClick={() => handleNavClick("contacto")}
              className="mt-4 w-full bg-red-800 hover:bg-red-900 text-white font-sans text-xs font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 shadow-xs"
              id="mobile-drawer-cta"
            >
              Pedir Oración / Contactar
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
