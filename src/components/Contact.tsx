import { useState, FormEvent } from "react";
import { Send, MapPin, Mail, MessageCircle, CheckCircle, RefreshCw, AlertCircle } from "lucide-react";
import { PrayerSubmission } from "../types";

export default function Contact() {
  const [formData, setFormData] = useState<Partial<PrayerSubmission>>({
    messageType: "oracion"
  });
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [successResponse, setSuccessResponse] = useState<string | null>(null);
  const [errorResponse, setErrorResponse] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      setErrorResponse("Por favor complete los campos obligatorios (*).");
      return;
    }

    setSubmitting(true);
    setSuccessResponse(null);
    setErrorResponse(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setSuccessResponse(data.message);
        setFormData({ messageType: "oracion" }); // Clear form
      } else {
        throw new Error(data.error || "No se pudo procesar la petición.");
      }
    } catch (err: any) {
      console.error(err);
      setErrorResponse("Ocurrió un contratiempo técnico al enviar tu petición. Por favor intente más tarde.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 px-6 bg-white border-t border-stone-200/50">
      <div className="max-w-6xl mx-auto">
        
        {/* Double-Panel Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start" id="contact-panel-grid">
          
          {/* Left panel: Info & location details */}
          <div className="lg:col-span-5 text-left" id="contact-info-panel">
            <span className="text-[10px] uppercase font-bold text-red-800 tracking-widest bg-red-50 border border-red-100 px-3.5 py-1 rounded-full inline-block mb-3">
              Comunícate
            </span>
            <h2 className="text-stone-900 font-display font-bold text-3xl sm:text-4xl tracking-tight leading-none mb-6">
              Estamos para Escucharte y Orar por Ti
            </h2>
            <p className="text-stone-500 font-sans text-xs sm:text-sm leading-relaxed mb-8">
              En Vida Plena Internacional valoramos cada vida de nuestra congregación. Si estás pasando por una dificultad, necesitas consejería de los pastores William y Claudia Arbeláez, o quieres compartir un testimonio de victoria, usa esta sección. Creemos en el milagro del clamor unido.
            </p>

            {/* Structured Info Lines */}
            <div className="space-y-6" id="contact-info-details">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-white border border-stone-200/50 flex items-center justify-center text-red-800 shrink-0 shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs text-stone-900 uppercase tracking-wider">Dirección Auditorio</h4>
                  <p className="text-stone-600 font-sans text-xs mt-1 leading-relaxed">
                    Instalaciones de Reunión Central, Bogotá, Colombia.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-white border border-stone-200/50 flex items-center justify-center text-red-800 shrink-0 shadow-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs text-stone-900 uppercase tracking-wider">Atención Virtual</h4>
                  <p className="text-stone-600 font-sans text-xs mt-1 leading-relaxed">
                    diasplenos09@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-white border border-stone-200/50 flex items-center justify-center text-red-800 shrink-0 shadow-sm">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs text-stone-900 uppercase tracking-wider">Comunidad Virtual</h4>
                  <p className="text-stone-600 font-sans text-xs mt-1 leading-relaxed">
                    Únete a nuestras redes para transmisiones y boletines interactivos semanales.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel: Modern interactive form card */}
          <div className="lg:col-span-7 bg-white border border-stone-200/60 rounded-[32px] p-6 sm:p-10 shadow-sm" id="contact-form-panel">
            <h3 className="font-display font-bold text-lg text-stone-900 mb-2">Formulario de Clamor Genuino</h3>
            <p className="text-stone-400 font-sans text-xs mb-8">Escribe con honestidad; guardamos confidencialidad absoluta.</p>

            {/* Form Response Alerts */}
            {successResponse && (
              <div className="bg-red-50 border border-red-200 text-red-900 p-5 rounded-2xl flex items-start gap-3.5 mb-6" id="success-alert">
                <CheckCircle className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-xs">Mensaje Procesado con Éxito</h4>
                  <p className="text-stone-600 font-sans text-xs mt-1 leading-relaxed">{successResponse}</p>
                </div>
              </div>
            )}

            {errorResponse && (
              <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-xl flex items-center gap-3 mb-6" id="error-alert">
                <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
                <p className="text-xs font-sans">{errorResponse}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5" id="prayer-intake-form">
              
              {/* Name & Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col text-left">
                  <label htmlFor="name" className="text-[10px] uppercase font-bold text-stone-500 tracking-wider mb-1.5 px-1">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name || ""}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. María Camila Gómez"
                    className="bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs text-stone-800 focus:outline-hidden focus:border-red-650 focus:ring-1 focus:ring-red-650 transition"
                    required
                    disabled={submitting}
                  />
                </div>

                <div className="flex flex-col text-left">
                  <label htmlFor="phone" className="text-[10px] uppercase font-bold text-stone-500 tracking-wider mb-1.5 px-1">
                    Teléfono Celular
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone || ""}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Ej. +57 321 000 0000"
                    className="bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs text-stone-800 focus:outline-hidden focus:border-red-650 focus:ring-1 focus:ring-red-650 transition"
                    disabled={submitting}
                  />
                </div>
              </div>

              {/* Email & Request Type Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col text-left">
                  <label htmlFor="email" className="text-[10px] uppercase font-bold text-stone-500 tracking-wider mb-1.5 px-1">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email || ""}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Ej. maria.camila@correo.com"
                    className="bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs text-stone-800 focus:outline-hidden focus:border-red-650 focus:ring-1 focus:ring-red-650 transition"
                    disabled={submitting}
                  />
                </div>

                <div className="flex flex-col text-left">
                  <label htmlFor="messageType" className="text-[10px] uppercase font-bold text-stone-500 tracking-wider mb-1.5 px-1">
                    Tipo de Mensaje
                  </label>
                  <select
                    id="messageType"
                    value={formData.messageType || "oracion"}
                    onChange={(e) => setFormData({ ...formData, messageType: e.target.value as any })}
                    className="bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs text-stone-800 focus:outline-hidden focus:border-red-650 focus:ring-1 focus:ring-red-650 transition"
                    disabled={submitting}
                  >
                    <option value="oracion">Pedido de Oración</option>
                    <option value="contacto">Inscripción / Información</option>
                    <option value="testimonio">Compartir un Testimonio</option>
                  </select>
                </div>
              </div>

              {/* Message Input Box */}
              <div className="flex flex-col text-left">
                <label htmlFor="message" className="text-[10px] uppercase font-bold text-stone-500 tracking-wider mb-1.5 px-1">
                  Tu Petición o Mensaje *
                </label>
                <textarea
                  id="message"
                  value={formData.message || ""}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  placeholder="Por favor, escribe con detalle tu petición de oración o tu mensaje para los pastores aquí..."
                  className="bg-stone-50 border border-stone-205 rounded-xl px-4 py-3 text-xs text-stone-800 focus:outline-hidden focus:border-red-650 focus:ring-1 focus:ring-red-650 transition resize-none"
                  required
                  disabled={submitting}
                />
              </div>

              {/* Submit Trigger Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-stone-900 hover:bg-stone-800 text-white font-sans text-xs font-bold py-3.5 rounded-xl shadow-xs hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                id="submit-prayer-btn"
              >
                {submitting ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Enviando mensaje de fe...
                  </>
                ) : (
                  <>
                    Enviar Mensaje de Fe
                    <Send className="w-3.5 h-3.5 text-red-400" />
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
