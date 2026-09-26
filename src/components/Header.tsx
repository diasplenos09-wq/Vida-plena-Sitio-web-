import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "inicio", label: "Inicio" },
    { id: "servicios", label: "Servicios" },
    { id: "mensajes", label: "Mensajes" },
    { id: "contacto", label: "Contacto" },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
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
            className="absolute top-0 left-0 right-0 bg-white border-b border-stone-200 shadow-xl px-6 py-8 flex flex-col gap-4 animate-in slide-in-from-top duration-300"
            onClick={(e) => e.stopPropagation()}
            id="mobile-drawer-content"
          >
            <div className="text-stone-400 text-[10px] uppercase tracking-widest font-bold font-display px-2 mb-1">
              Menú de Navegación
            </div>
            {navItems.map((item) => {
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
