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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-xs"
          : "bg-white/70 backdrop-blur-xs py-4 border-b border-slate-100/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Vida Plena Internacional - Astra Clean Poppins Typography */}
        <button
          onClick={() => handleNavClick("inicio")}
          className="flex items-center gap-2 group text-left cursor-pointer focus:outline-hidden"
          id="logo-button"
        >
          <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-bold text-sm shadow-xs group-hover:bg-red-700 transition-colors">
            VP
          </div>
          <div className="flex flex-col -space-y-0.5">
            <span className="text-slate-900 font-bold text-lg tracking-tight select-none leading-none group-hover:text-red-600 transition-colors">
              VIDA PLENA
            </span>
            <span className="text-slate-500 font-semibold uppercase tracking-[0.24em] text-[9px] select-none block leading-none">
              INTERNACIONAL
            </span>
          </div>
        </button>

        {/* Desktop Navigation - Astra Minimalist Menu */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-50/90 p-1 rounded-lg border border-slate-200/80" id="desktop-nav">
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
                    className={`relative px-3.5 py-1.5 rounded-md font-sans text-xs font-medium tracking-normal transition-all duration-150 cursor-pointer inline-flex items-center gap-1 focus:outline-hidden ${
                      isSedesActive
                        ? "bg-white text-slate-900 shadow-xs font-semibold border border-slate-200"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white/70"
                    }`}
                    id="nav-link-sedes-dropdown"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isSedesOpen ? "rotate-180" : ""}`} />
                  </button>

                  {/* Dropdown Menu Desplegable de Sedes */}
                  {isSedesOpen && (
                    <div 
                      className="absolute top-full left-0 mt-1.5 w-64 bg-white rounded-xl shadow-lg border border-slate-200/90 p-1.5 z-50 flex flex-col gap-0.5 text-left animate-in fade-in slide-in-from-top-1 duration-150"
                      id="sedes-dropdown-card"
                    >
                      <button
                        onClick={() => handleNavClick("inicio")}
                        className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 transition flex items-center justify-between group cursor-pointer"
                      >
                        <div>
                          <strong className="text-slate-900 text-xs font-semibold block group-hover:text-red-600 transition">
                            Sede Principal
                          </strong>
                          <span className="text-slate-500 text-[11px] block">Bogotá Norte (Cl. 163 #18a-23)</span>
                        </div>
                        <MapPin className="w-3.5 h-3.5 text-slate-400 group-hover:text-red-600" />
                      </button>

                      <button
                        onClick={() => handleNavClick("sede-sur")}
                        className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 transition flex items-center justify-between group cursor-pointer border-t border-slate-100"
                      >
                        <div>
                          <strong className="text-slate-900 text-xs font-semibold block group-hover:text-red-600 transition">
                            Sede Sur
                          </strong>
                          <span className="text-slate-500 text-[11px] block">Bogotá Sur (Reuniones de Fe)</span>
                        </div>
                        <MapPin className="w-3.5 h-3.5 text-slate-400 group-hover:text-red-600" />
                      </button>

                      <button
                        onClick={() => handleNavClick("sede-melgar")}
                        className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 transition flex items-center justify-between group cursor-pointer border-t border-slate-100"
                      >
                        <div>
                          <strong className="text-slate-900 text-xs font-semibold block group-hover:text-red-600 transition">
                            Sede Melgar
                          </strong>
                          <span className="text-slate-500 text-[11px] block">Tolima (Cultos & Retiros)</span>
                        </div>
                        <MapPin className="w-3.5 h-3.5 text-red-600 group-hover:scale-110 transition" />
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
                className={`relative px-3.5 py-1.5 rounded-md font-sans text-xs font-medium tracking-normal transition-all duration-150 cursor-pointer focus:outline-hidden ${
                  isActive
                    ? "bg-white text-slate-900 shadow-xs font-semibold border border-slate-200"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/70"
                }`}
                id={`nav-link-${item.id}`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button: Astra Clean CTA */}
        <div className="hidden lg:block" id="dominant-cta-container">
          <button
            onClick={() => handleNavClick("servicios")}
            className="bg-slate-900 hover:bg-red-600 text-white font-sans text-xs font-medium px-4 py-2 rounded-lg transition-all duration-200 shadow-xs cursor-pointer focus:outline-hidden"
            id="dominant-cta"
          >
            Horarios y Reunión
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all duration-200 cursor-pointer focus:outline-hidden"
          id="mobile-menu-toggle"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Backdrop & Drawer */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 top-[60px] z-40 bg-slate-950/20 backdrop-blur-xs md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          id="mobile-drawer-backdrop"
        >
          <div
            className="absolute top-0 left-0 right-0 bg-white border-b border-slate-200 shadow-xl px-6 py-6 flex flex-col gap-2 animate-in slide-in-from-top duration-200"
            onClick={(e) => e.stopPropagation()}
            id="mobile-drawer-content"
          >
            <div className="text-slate-400 text-[10px] uppercase tracking-widest font-semibold px-2 mb-1">
              Menú de Navegación
            </div>
            {navItems.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div key={item.id} className="flex flex-col">
                    <button
                      onClick={() => setIsMobileSedesOpen(!isMobileSedesOpen)}
                      className="w-full text-left px-3.5 py-2.5 rounded-lg font-sans font-medium text-sm text-slate-700 hover:bg-slate-50 flex items-center justify-between cursor-pointer"
                    >
                      <span>Sedes</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileSedesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isMobileSedesOpen && (
                      <div className="pl-4 pr-2 py-1.5 flex flex-col gap-1.5 border-l-2 border-red-200 ml-4 my-1">
                        <button
                          onClick={() => handleNavClick("inicio")}
                          className="text-left py-1 text-xs text-slate-600 hover:text-red-600 font-medium"
                        >
                          · Sede Principal (Norte)
                        </button>
                        <button
                          onClick={() => handleNavClick("sede-sur")}
                          className="text-left py-1 text-xs text-slate-600 hover:text-red-600 font-medium"
                        >
                          · Sede Sur (Bogotá)
                        </button>
                        <button
                          onClick={() => handleNavClick("sede-melgar")}
                          className="text-left py-1 text-xs text-slate-600 hover:text-red-600 font-medium"
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
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg font-sans font-medium text-sm transition-all duration-150 cursor-pointer ${
                    isActive
                      ? "bg-red-50 text-red-900 border-l-4 border-red-600 font-semibold"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                  id={`mobile-nav-link-${item.id}`}
                >
                  {item.label}
                </button>
              );
            })}
            
            <button
              onClick={() => handleNavClick("contacto")}
              className="mt-3 w-full bg-red-600 hover:bg-red-700 text-white font-sans text-xs font-medium py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 shadow-xs"
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
