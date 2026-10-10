import { useState, useMemo } from "react";
import { Search, Flame, Shield, Heart, Clock, PlayCircle, Video, Calendar, X, ExternalLink } from "lucide-react";

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
    id: "sermon-cuando-el-mundo-tiembla",
    title: "Cuando el Mundo Tiembla - Ap. Oscar Bernier",
    embedUrl: "https://www.youtube.com/embed/O3u3pkkjIpw?si=TGtlqBqpppr2d8hx",
    category: "temor",
    tagLabel: "Vencer Temor",
    duration: "49:15",
    preachedDate: "26 de Agosto, 2026",
    views: "1,890 vistas",
    description: "Inspiradora prédica del Ap. Oscar Bernier: cuando las circunstancias sacuden lo que te rodea, la paz de Dios sostiene tu vida y edifica tu fe inamovible."
  },
  {
    id: "sermon-esta-escasez-no-durara",
    title: "Esta Escasez No Durará - Ap. Oscar Bernier",
    embedUrl: "https://www.youtube.com/embed/T8uEU14ENKk?si=TaqwIfsqwGrHjIjt",
    category: "fe",
    tagLabel: "Aumentar Fe",
    duration: "54:20",
    preachedDate: "04 de Octubre, 2026",
    views: "2,350 vistas",
    description: "Un mensaje profético y revelador del Ap. Oscar Bernier sobre cómo Dios rompe los tiempos de dificultad y desata bendición abundante sobre tu hogar."
  },
  {
    id: "sermon-padre-nuestro-parte-2",
    title: "Padre Nuestro | Parte 2 - Ap. Oscar Bernier",
    embedUrl: "https://www.youtube.com/embed/EntC30B0av8?si=woZvgXhR1m7a1-a_",
    category: "fe",
    tagLabel: "Aumentar Fe",
    duration: "48:10",
    preachedDate: "07 de Octubre, 2026",
    views: "1,720 vistas",
    description: "Segunda parte de la serie magistral del Padre Nuestro impartida por el Ap. Oscar Bernier: profundizando en la comunión diaria, perdón y la presencia del Padre."
  },
  {
    id: "sermon-padre-nuestro-parte-1",
    title: "Padre Nuestro | Parte 1 - Ap. Oscar Bernier",
    embedUrl: "https://www.youtube.com/embed/1r67-asl4XE?si=f0fSfD-W2NEDfky_",
    category: "fe",
    tagLabel: "Aumentar Fe",
    duration: "51:35",
    preachedDate: "30 de Septiembre, 2026",
    views: "1,980 vistas",
    description: "Primera parte de la enseñanza sobre el modelo de oración del Padre Nuestro por el Ap. Oscar Bernier: redescubriendo el diseño divino que transforma vidas."
  },
  {
    id: "sermon-viajeras-al-futuro",
    title: "Viajeras al Futuro | Mujeres Plenas",
    embedUrl: "https://www.youtube.com/embed/j68zrf56bjE?si=z5LOZZvx4ZP9kfta",
    category: "familia",
    tagLabel: "Mujeres Plenas",
    duration: "52:45",
    preachedDate: "19 de Septiembre, 2026",
    views: "1,680 vistas",
    description: "Inspiradora conferencia del ministerio Mujeres Plenas en Vida Plena Internacional: proyectándote con fe inquebrantable, autoridad espiritual y visión divina hacia el futuro que Dios ha preparado."
  },
  {
    id: "sermon-proposito-mayor",
    title: "Hay un Propósito Mayor",
    embedUrl: "https://www.youtube.com/embed/HdJjdmw_kmA?si=84O7ZpWFsR9g9qEA",
    category: "fe",
    tagLabel: "Propósito Mayor",
    duration: "41:30",
    preachedDate: "23 de Septiembre, 2026",
    views: "1,420 vistas",
    description: "Poderosa enseñanza compartida por la Ld. Angélica Quintero en Vida Plena Internacional: descubre cómo Dios transforma cada desafío en un propósito mayor para tu vida y familia."
  },
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
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

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
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-sans text-xs font-medium tracking-normal transition-all duration-150 cursor-pointer focus:outline-hidden ${
                  isSelected
                    ? "bg-red-600 text-white shadow-xs font-semibold"
                    : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" id="filtered-videos-grid">
            {filteredSermons.map((sermon) => {
              const videoId = sermon.embedUrl.includes("/embed/")
                ? sermon.embedUrl.split("/embed/")[1].split("?")[0]
                : "";
              const thumbnailUrl = videoId 
                ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                : "https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=600&auto=format&fit=crop";
              const watchUrl = videoId
                ? `https://www.youtube.com/watch?v=${videoId}`
                : sermon.embedUrl;
              const isPlaying = playingVideoId === sermon.id;

              return (
                <div
                  key={sermon.id}
                  className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden p-4 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
                  id={`video-card-${sermon.id}`}
                >
                  <div>
                    {/* Video Player or Thumbnail */}
                    {isPlaying ? (
                      <div className="aspect-video w-full rounded-xl overflow-hidden bg-black shadow-xs mb-4 relative">
                        <iframe
                          className="w-full h-full"
                          src={`${sermon.embedUrl}${sermon.embedUrl.includes("?") ? "&" : "?"}autoplay=1`}
                          title={sermon.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                        <button
                          type="button"
                          onClick={() => setPlayingVideoId(null)}
                          className="absolute top-2 right-2 bg-slate-900/80 hover:bg-slate-900 text-white text-[10px] font-sans px-2.5 py-1 rounded-md flex items-center gap-1 shadow-xs cursor-pointer transition-colors"
                          title="Cerrar video"
                        >
                          <X className="w-3 h-3" />
                          <span>Cerrar</span>
                        </button>
                      </div>
                    ) : (
                      <div 
                        onClick={() => setPlayingVideoId(sermon.id)}
                        className="group/video block aspect-video w-full rounded-xl overflow-hidden bg-slate-950 shadow-xs mb-4 select-none relative cursor-pointer"
                        title="Reproducir video"
                      >
                        {/* High-res Video Cover Image */}
                        <img 
                          src={thumbnailUrl} 
                          alt={sermon.title}
                          className="w-full h-full object-cover group-hover/video:scale-105 transition-transform duration-300"
                          referrerPolicy="no-referrer"
                        />
                        {/* Overlay with Dark Gradient & Play Symbol */}
                        <div className="absolute inset-0 bg-slate-950/25 group-hover/video:bg-slate-950/40 transition-colors duration-200 flex items-center justify-center">
                          <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center shadow-md transform group-hover/video:scale-110 active:scale-95 transition-transform duration-200">
                            <PlayCircle className="w-7 h-7 fill-white stroke-none" />
                          </div>
                        </div>
                        {/* Click to play badge */}
                        <div className="absolute bottom-2.5 right-2.5 bg-slate-900/95 backdrop-blur-xs text-[9px] text-white font-semibold tracking-wider uppercase px-2 py-0.5 rounded-md opacity-90 group-hover/video:opacity-100 transition-opacity duration-200">
                          Reproducir
                        </div>
                      </div>
                    )}

                    {/* Metadata labels row */}
                    <div className="flex items-center justify-between text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-2 px-1">
                      <span className="text-red-600 font-bold">{sermon.tagLabel}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {sermon.duration}
                      </span>
                    </div>

                    {/* Title and description */}
                    <div className="px-1 text-left space-y-1.5">
                      <h3 className="font-sans font-semibold text-slate-900 text-sm leading-snug">
                        {sermon.title}
                      </h3>
                      <p className="text-slate-500 font-sans text-xs leading-relaxed">
                        {sermon.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Action footer layout */}
                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between px-1" id={`card-footer-${sermon.id}`}>
                    <span className="text-[10px] text-slate-400 font-medium font-sans flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {sermon.preachedDate}
                    </span>
                    <div className="flex items-center gap-3">
                      <button 
                        type="button"
                        onClick={() => setPlayingVideoId(isPlaying ? null : sermon.id)}
                        className="inline-flex items-center gap-1 text-[10px] uppercase font-bold text-red-600 tracking-wider hover:underline cursor-pointer"
                        title={isPlaying ? "Cerrar reproductor" : "Reproducir mensaje aquí"}
                      >
                        {isPlaying ? "Cerrar" : "Ver aquí"}
                        <PlayCircle className="w-3.5 h-3.5" />
                      </button>
                      <a 
                        href={watchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] text-slate-400 hover:text-slate-700 tracking-wider font-semibold transition-colors"
                        title="Abrir en YouTube"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty state when query matches absolutely no video */
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200/80 max-w-lg mx-auto" id="search-empty-state">
            <span className="text-3xl">🍿</span>
            <h4 className="font-sans font-bold text-slate-900 mt-4">Mensajes no encontrados</h4>
            <p className="text-slate-500 text-xs mt-2 max-w-xs mx-auto">
              No encontramos conferencias de fe para "{searchQuery}". Inténtelo buscando con 'familia', 'fe' o 'temor'.
            </p>
            <button
              onClick={() => {
                setActiveTab("todos");
                setSearchQuery("");
              }}
              className="mt-5 bg-slate-900 hover:bg-red-600 text-white font-sans text-xs font-medium px-5 py-2 rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              Restablecer Filtros
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
