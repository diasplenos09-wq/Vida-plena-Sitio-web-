import { Quote, Heart, Award, CheckCircle } from "lucide-react";
import { TeamMember } from "../types";
// @ts-ignore
import pastorOscar from "../assets/images/pastor_oscar_bernier_1779737938425.png";
// @ts-ignore
import pastoraDiana from "../assets/images/pastora_diana_buitrago_1779737958044.png";
// @ts-ignore
import presbiteroElkin from "../assets/images/presbitero_elkin_quintero_1779737975790.png";

const MAIN_PASTORS: TeamMember[] = [
  {
    id: "oscar",
    name: "Apóstol Oscar Bernier",
    role: "Pastor y Apóstol Principal",
    description: "Con un llamado apostólico apasionado, dirige la iglesia internacional enseñando la Palabra de Dios con discernimiento, discerniendo tiempos y activando la fe práctica de la familia pastoral y ministerial.",
    imageTheme: "from-stone-900 to-stone-950",
    imageSrc: pastorOscar,
    quote: "La fe no es ausencia de problemas, sino la presencia de Jesús gobernando en todo tiempo.",
  },
  {
    id: "diana",
    name: "Apóstol Diana Buitrago",
    role: "Pastora y Apóstol Principal",
    description: "Destacada por su unción profunda de consejería y sanidad familiar, ministra con ternura bíblica, acompañando a matrimonios en la consolidación de un testimonio sano frente a Dios.",
    imageTheme: "from-stone-900 to-stone-950",
    imageSrc: pastoraDiana,
    quote: "Tu corazón renace al comprender la inquebrantable y fiel soberanía del Altísimo.",
  },
  {
    id: "elkin",
    name: "Presbítero Elkin Quintero",
    role: "Presbítero de Ministerio",
    description: "Encargado de coordinar ministerios con sabiduría y orden sistemático, enfocando el discipulado bíblico práctico para que cada creyente crezca en servicio e integridad.",
    imageTheme: "from-stone-900 to-stone-950",
    imageSrc: presbiteroElkin,
    quote: "Servir con integridad es la mayor demostración de un corazón agradecido al Salvador.",
  },
];

export default function Team() {
  return (
    <section id="nosotros" className="py-24 px-6 bg-stone-50 border-t border-stone-200/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="team-header">
          <span className="text-[10px] uppercase font-bold text-red-800 tracking-widest bg-red-50 border border-red-100 px-3.5 py-1 rounded-full inline-block mb-3">
            Liderazgo de Fe
          </span>
          <h2 className="text-stone-900 font-display font-bold text-3xl sm:text-4xl tracking-tight">
            Nuestros Pastores y Equipo
          </h2>
          <p className="text-stone-500 font-sans text-sm sm:text-base leading-relaxed mt-2">
            La familia pastoral y ministerial de Vida Plena Internacional comprometida en guiarte, acompañarte y servirte en amor incondicional.
          </p>
        </div>

        {/* 1. Primary Apostolic & Pastoral Leadership (with gorgeous generated pictures) */}
        <div className="mb-20" id="primary-apostles-section">
          <div className="text-left mb-8 border-b border-stone-200/60 pb-3">
            <h3 className="text-stone-900 font-display font-bold text-xl uppercase tracking-wider">
              Nuestros Pastores Principales
            </h3>
            <p className="text-stone-500 font-sans text-xs sm:text-sm mt-1">
              Liderazgo de cobertura y visión apostólica internacional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="primary-team-grid">
            {MAIN_PASTORS.map((pastor) => {
              const getPastorIcon = (id: string) => {
                switch (id) {
                  case "oscar":
                    return <Award className="w-8 h-8 text-red-600" />;
                  case "diana":
                    return <Heart className="w-8 h-8 text-red-600 fill-red-600/5" />;
                  case "elkin":
                    return <CheckCircle className="w-8 h-8 text-red-600" />;
                  default:
                    return <Award className="w-8 h-8 text-red-600" />;
                }
              };

              return (
                <div
                  key={pastor.id}
                  className="bg-white border border-stone-200/60 rounded-[32px] p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                  id={`pastor-card-${pastor.id}`}
                >
                  <div>
                    {/* Icon Card Top Wrapper */}
                    <div className="flex items-center gap-4 mb-6" id={`pastor-header-${pastor.id}`}>
                      <div className="w-16 h-16 rounded-2xl bg-stone-100 flex items-center justify-center shadow-xs shrink-0 select-none">
                        {getPastorIcon(pastor.id)}
                      </div>
                      <div>
                        <h4 className="text-stone-900 font-display font-bold text-lg leading-tight">{pastor.name}</h4>
                        <span className="text-red-800 font-sans text-xs font-semibold uppercase tracking-wide inline-block mt-0.5">
                          {pastor.role}
                        </span>
                      </div>
                    </div>

                    {/* Biography description */}
                    <p className="text-stone-600 font-sans text-xs sm:text-sm leading-relaxed mb-6 px-1">
                      {pastor.description}
                    </p>
                  </div>

                  {/* Quote */}
                  {pastor.quote && (
                    <div className="bg-stone-50 border border-stone-100 p-4 rounded-xl flex gap-3 items-start" id={`pastor-quote-${pastor.id}`}>
                      <Quote className="w-4 h-4 text-red-600 fill-red-600/10 shrink-0 mt-1 rotate-180" />
                      <p className="text-[11px] sm:text-xs text-stone-500 font-serif italic leading-relaxed">
                        "{pastor.quote}"
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Organization Statement (Trust Banner Below) */}
        <div
          className="mt-20 bg-stone-950 text-stone-100 rounded-[36px] p-8 sm:p-12 border border-stone-900 shadow-md flex flex-col justify-center text-center items-center gap-6"
          id="church-faith-banner"
        >
          <div className="w-12 h-12 rounded-full bg-stone-900 flex items-center justify-center text-[#ff0000] mb-2">
            <Award className="w-6 h-6" />
          </div>
          <h4 className="font-sans text-2xl font-bold tracking-tight text-white max-w-xl leading-normal">
            "El ladrón no viene sino para hurtar y matar y destruir; yo he venido para que tengan vida, y para que la tengan en abundancia."
          </h4>
          <span className="font-display font-medium text-[10px] text-stone-400 uppercase tracking-widest leading-none">
            — Juan 10:10 (Fundamento de Vida Plena)
          </span>
          <p className="text-stone-300 font-sans text-xs max-w-lg leading-relaxed">
            Nuestro fundamento teológico descansa enteramente en la gracia abundante de Cristo, proclamando de manera práctica y fiel que Su voluntad eterna es restaurar tu hogar, sanar tus heridas y guiarte a disfrutar de una vida plena permanente en Su Reino de fe.
          </p>

          {/* Red Google Maps button & White Contact click trigger */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4 w-full" id="theology-button-container">
            <a
              href="https://share.google/pvSe8QKyMZ2HoplYx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#ff0000] hover:bg-stone-900 text-white font-sans text-xs font-medium px-6 py-2.5 rounded-full transition-all duration-200 shadow-xs cursor-pointer"
              id="theology-btn-maps"
            >
              Google Maps
            </a>
            <button
              onClick={() => {
                const el = document.getElementById("contacto");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-flex items-center gap-2 bg-stone-900 hover:bg-[#ff0000] text-white font-sans text-xs font-medium px-6 py-2.5 rounded-full transition-all duration-200 shadow-xs cursor-pointer"
              id="theology-btn-contact"
            >
              Contáctanos
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
