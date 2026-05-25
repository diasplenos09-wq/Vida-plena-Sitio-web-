import { useState, useMemo } from "react";
import { Search, Flame, Shield, Heart, Clock, PlayCircle, Video, Eye, Calendar, ArrowRight } from "lucide-react";

interface VideoSermon {
  id: string;
  title: string;
  embedUrl: string;
  category: string;
  duration: string;
  preachedDate: string;
  views: string;
  tagLabel: string;
  description: string;
}

const SERMONS_DATABASE: VideoSermon[] = [
  {
    id: "sermon1",
    title: "Restaurando Familias con el Poder de Dios",
    embedUrl: "https://www.youtube.com/embed/WKzvTfoh4_U?si=vZFEy3KZ8HfJs-mA",
    category: "familia",
    tagLabel: "Hogar y Familia",
    duration: "45:12",
    preachedDate: "Domingo de Adoración",
    views: "1,240 vistas",
    description: "Un poderoso mensaje enfocado en restaurar el amor mutuo, sanar los lazos familiares heridos y levantar altares de fe estables contra toda tormenta mundana."
  },
  {
    id: "sermon2",
    title: "Estableciendo el Reino de Dios en la Tierra",
    embedUrl: "https://www.youtube.com/embed/VgK7rBy3h-Y?si=zHW8ofxiB0hNHPVY",
    category: "fe",
    tagLabel: "Aumentar Fe",
    duration: "48:50",
    preachedDate: "Taller del Espíritu",
    views: "980 vistas",
    description: "Una enseñanza clave y profunda acerca de las leyes sobrenaturales del Reino de los Cielos, activando una fe activa y pura para decretar sanidad en el hogar."
  },
  {
    id: "sermon3",
    title: "Caminando con Valentía y Esperanza Diaria",
    embedUrl: "https://www.youtube.com/embed/tnUBiJwbmek?si=2c20ZBpn3jcM4a65",
    category: "temor",
    tagLabel: "Vencer temor",
    duration: "39:15",
    preachedDate: "Mensaje de Devoción",
    views: "1,550 vistas",
    description: "Aprende las claves fundamentales para superar el miedo cotidiano, desechar la ansiedad silenciosa y caminar firme con total paz de la mano del Buen Pastor."
  }
];

export default function Messages() {
  const [activeTab, setActiveTab] = useState<string>("todos");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "todos", label: "Todos los Videos", icon: Video },
    { id: "temor", label: "Vencer Temor", icon: Shield },
    { id: "fe", label: "Aumentar Fe", icon: Flame },
    { id: "familia", label: "Hogar y Familia", icon: Heart }
  ];

  // Memoized filter of videos based on selected Category and searching string
  const filteredSermons = useMemo(() => {
    return SERMONS_DATABASE.filter((sermon) => {
      const matchesCategory = activeTab === "todos" || sermon.category === activeTab;
      const matchesSearch = 
        sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sermon.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <section id="mensajes-videos" className="py-24 px-6 bg-white border-t border-stone-200/50">
      <div className="max-w-6xl mx-auto">
        
        {/* Page Section Headings */}
        <div className="text-center max-w-2xl mx-auto mb-12" id="messages-header">
          <span className="text-[10px] uppercase font-bold text-red-800 tracking-widest bg-red-50 border border-red-100 px-3.5 py-1 rounded-full inline-block mb-3">
            Canal de Fe y Vida
          </span>
          <h2 className="text-stone-900 font-display font-bold text-3xl sm:text-4xl tracking-tight">
            Nuestros Mensajes y Prédicas
          </h2>
          <p className="text-stone-500 font-sans text-sm sm:text-base leading-relaxed mt-2">
            Disfruta gratis de las conferencias grabadas en nuestra iglesia. Filtra por tema de necesidad espiritual o usa la barra de búsqueda rápida para edificar tu espíritu hoy.
          </p>
        </div>

        {/* Central Search Filter Input Bar */}
        <div className="max-w-md mx-auto mb-10" id="video-search-container">
          <div className="relative flex items-center bg-stone-50 border border-stone-200 shadow-3xs rounded-full p-2 focus-within:border-red-650 focus-within:ring-1 focus-within:ring-red-650 transition duration-350">
            <Search className="w-4 h-4 text-stone-400 ml-3 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar mensajes (ej. 'familia', 'fe', 'temor')..."
              className="w-full bg-transparent px-3 py-1.5 text-xs font-sans text-stone-900 placeholder-stone-450 focus:outline-hidden"
              id="search-input-field"
            />
          </div>
        </div>

        {/* Horizontal Category Filtering Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12" id="categories-filter-row">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            const isSelected = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveTab(cat.id);
                }}
                className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full font-sans text-[11px] font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer focus:outline-hidden ${
                  isSelected
                    ? "bg-[#ff0000] text-white shadow-md scale-[1.03]"
                    : "bg-stone-50 border border-stone-200 text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                }`}
                id={`cat-btn-${cat.id}`}
              >
                <IconComponent className="w-3.5 h-3.5 shrink-0" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Conditional rendering for videos results */}
        {filteredSermons.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="filtered-videos-grid">
            {filteredSermons.map((sermon) => (
              <div
                key={sermon.id}
                className="bg-white border border-stone-200/85 rounded-[28px] overflow-hidden p-4 shadow-3xs hover:shadow-md hover:border-red-500/25 transition-all duration-300 flex flex-col justify-between"
                id={`video-card-${sermon.id}`}
              >
                <div>
                  {/* YouTube Thumbnail Cover (Avoiding Copyright iframe block) */}
                  {(() => {
                    const videoId = sermon.embedUrl.includes("/embed/")
                      ? sermon.embedUrl.split("/embed/")[1].split("?")[0]
                      : "";
                    const thumbnailUrl = videoId 
                      ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                      : "https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=600&auto=format&fit=crop";
                    const watchUrl = videoId
                      ? `https://www.youtube.com/watch?v=${videoId}`
                      : sermon.embedUrl;
                    
                    return (
                      <a
                        href={watchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/video block aspect-video w-full rounded-2xl overflow-hidden bg-stone-950 shadow-sm mb-4 select-none relative cursor-pointer"
                        title="Ver sermón en YouTube"
                      >
                        {/* High-res Video Cover Image */}
                        <img 
                          src={thumbnailUrl} 
                          alt={sermon.title}
                          className="w-full h-full object-cover group-hover/video:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        {/* Overlay with Dark Gradient & Play Symbol */}
                        <div className="absolute inset-0 bg-stone-950/25 group-hover/video:bg-stone-950/40 transition-colors duration-300 flex items-center justify-center">
                          <div className="w-14 h-14 bg-[#ff0000] text-white rounded-full flex items-center justify-center shadow-lg transform group-hover/video:scale-110 active:scale-95 transition-transform duration-300">
                            <PlayCircle className="w-8 h-8 fill-white stroke-none" />
                          </div>
                        </div>
                        {/* "Ver en YouTube" tooltip */}
                        <div className="absolute bottom-2.5 right-2.5 bg-stone-900/95 backdrop-blur-xs text-[9px] text-white font-bold tracking-wider uppercase px-2.5 py-1.2 rounded-md opacity-0 group-hover/video:opacity-100 transition-opacity duration-300">
                          Ver en YouTube
                        </div>
                      </a>
                    );
                  })()}

                  {/* Metadata labels row */}
                  <div className="flex items-center justify-between text-[10px] text-stone-400 font-bold uppercase tracking-wider mb-2 px-1">
                    <span className="text-[#ff0000] font-bold">{sermon.tagLabel}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-stone-405" />
                      {sermon.duration}
                    </span>
                  </div>

                  {/* Title and description */}
                  <div className="px-1 text-left space-y-2">
                    <h3 className="font-sans font-bold text-stone-950 text-sm leading-snug">
                      {sermon.title}
                    </h3>
                    <p className="text-stone-500 font-sans text-xs leading-relaxed">
                      {sermon.description}
                    </p>
                  </div>
                </div>

                {/* Card Action footer layout */}
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between px-1" id={`card-footer-${sermon.id}`}>
                  <span className="text-[10px] text-stone-450 font-medium font-sans flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-stone-400" />
                    {sermon.preachedDate}
                  </span>
                  {(() => {
                    const videoId = sermon.embedUrl.includes("/embed/")
                      ? sermon.embedUrl.split("/embed/")[1].split("?")[0]
                      : "";
                    const watchUrl = videoId
                      ? `https://www.youtube.com/watch?v=${videoId}`
                      : sermon.embedUrl;
                    return (
                      <a 
                        href={watchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] uppercase font-bold text-[#ff0000] tracking-wider hover:underline"
                        title="Ver sermón en YouTube"
                      >
                        Ver ahora
                        <PlayCircle className="w-3.5 h-3.5" />
                      </a>
                    );
                  })()}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty state when query matches absolutely no video */
          <div className="text-center py-20 bg-stone-50 rounded-[32px] border border-stone-200/50 max-w-lg mx-auto" id="search-empty-state">
            <span className="text-3xl">🍿</span>
            <h4 className="font-sans font-bold text-stone-900 mt-4">Mensajes no encontrados</h4>
            <p className="text-stone-500 text-xs mt-2 max-w-xs mx-auto">
              No encontramos conferencias de fe para "{searchQuery}". Inténtelo buscando con 'familia', 'fe' o 'temor'.
            </p>
            <button
              onClick={() => {
                setActiveTab("todos");
                setSearchQuery("");
              }}
              className="mt-6 bg-stone-950 hover:bg-[#ff0000] text-white font-sans text-[10px] font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-colors cursor-pointer"
            >
              Restablecer Filtros
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
