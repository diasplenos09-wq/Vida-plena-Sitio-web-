import { useState, FormEvent } from "react";
import { Send, MapPin, Mail, MessageCircle, CheckCircle, RefreshCw, AlertCircle, Phone, Globe, Clock } from "lucide-react";
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
    <section id="contacto" className="py-20 md:py-24 px-6 md:px-12 bg-[#f4f4f6] border-t border-stone-200/50">
      <div className="max-w-6xl mx-auto">
        
        {/* SECCIÓN CENTRADA ANTES DEL FORMULARIO (AMPLIA DE DERECHA A IZQUIERDA, SIN BADGE) */}
        <div className="text-center max-w-5xl mx-auto mb-12 sm:mb-16 space-y-5 px-2" id="contact-header-centered">
          <h2 className="text-stone-950 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-center max-w-4xl mx-auto">
            Estamos para Escucharte y Orar por Ti
          </h2>
          <p className="text-stone-600 font-sans text-sm sm:text-base lg:text-lg leading-relaxed text-center max-w-4xl mx-auto font-normal">
            En Vida Plena Internacional valoramos cada vida de nuestra congregación, distinguiéndonos entre las <strong className="font-semibold text-stone-900">iglesias norte de Bogotá</strong> por nuestra cercanía familiar. Si estás pasando por una dificultad, necesitas consejería de los pastores William y Claudia Arbeláez, o quieres compartir un testimonio de victoria, usa esta sección. Creemos en el milagro del clamor unido.
          </p>
        </div>

        {/* FORMULARIO DE CLAMOR GENUINO 100% CENTRADO */}
        <div className="max-w-3xl mx-auto bg-white border border-stone-200/80 rounded-[32px] p-6 sm:p-10 md:p-12 shadow-sm" id="contact-form-panel">
          <div className="text-center mb-8">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-stone-900 mb-2">Formulario de Clamor Genuino</h3>
            <p className="text-stone-500 font-sans text-xs sm:text-sm">Escribe con honestidad; guardamos confidencialidad absoluta.</p>
          </div>

          {/* Form Response Alerts */}
          {successResponse && (
            <div className="bg-red-50 border border-red-200 text-red-900 p-5 rounded-2xl flex items-start gap-3.5 mb-6" id="success-alert">
              <CheckCircle className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
              <div className="text-left">
                <h4 className="font-display font-bold text-xs">Mensaje Procesado con Éxito</h4>
                <p className="text-stone-600 font-sans text-xs mt-1 leading-relaxed">{successResponse}</p>
              </div>
            </div>
          )}

          {errorResponse && (
            <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-xl flex items-center gap-3 mb-6" id="error-alert">
              <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
              <p className="text-xs font-sans text-left">{errorResponse}</p>
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
                  className="bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs text-stone-800 focus:outline-hidden focus:border-red-600 focus:ring-1 focus:ring-red-600 transition"
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
                  className="bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs text-stone-800 focus:outline-hidden focus:border-red-600 focus:ring-1 focus:ring-red-600 transition"
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
                  className="bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs text-stone-800 focus:outline-hidden focus:border-red-600 focus:ring-1 focus:ring-red-600 transition"
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
                  className="bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs text-stone-800 focus:outline-hidden focus:border-red-600 focus:ring-1 focus:ring-red-600 transition"
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
                className="bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs text-stone-800 focus:outline-hidden focus:border-red-600 focus:ring-1 focus:ring-red-600 transition resize-none"
                required
                disabled={submitting}
              />
            </div>

            {/* Submit Trigger Button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-stone-900 hover:bg-black text-white font-sans text-xs sm:text-sm font-semibold py-3.5 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 active:scale-98"
              id="submit-prayer-btn"
            >
              {submitting ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" /> Enviando mensaje de fe...
                </>
              ) : (
                <>
                  Enviar Mensaje de Fe
                  <Send className="w-4 h-4 text-red-400" />
                </>
              )}
            </button>

          </form>
        </div>

        {/* INFORMACIÓN DE CANALES DIRECTOS 100% CENTRADOS */}
        <div className="max-w-5xl mx-auto mt-14" id="contact-info-panel">
          <h3 className="font-display font-bold text-xs sm:text-sm text-stone-500 mb-6 uppercase tracking-[0.25em] text-center">
            Canales Directos de Atención
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" id="contact-info-details">
            {/* Card 1: Dirección */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200/70 shadow-xs flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-700 mb-3 shadow-3xs">
                <MapPin className="w-4 h-4" />
              </div>
              <h4 className="font-display font-bold text-xs text-stone-900 uppercase tracking-wider mb-1">
                Dirección Auditorio
              </h4>
              <p className="text-stone-800 font-sans text-xs font-semibold leading-relaxed">
                Cl. 163 #18a-23, Bogotá
              </p>
              <p className="text-stone-400 font-sans text-[11px] mt-0.5">
                Norte de Bogotá · Parqueadero vigilado
              </p>
            </div>

            {/* Card 2: Teléfono / WhatsApp */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200/70 shadow-xs flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-700 mb-3 shadow-3xs">
                <Phone className="w-4 h-4" />
              </div>
              <h4 className="font-display font-bold text-xs text-stone-900 uppercase tracking-wider mb-1">
                Línea & WhatsApp
              </h4>
              <a 
                href="tel:+573046485133" 
                className="text-stone-900 hover:text-red-600 font-sans text-xs font-bold transition"
              >
                304 6485133
              </a>
              <a 
                href="https://wa.me/573046485133?text=Hola,%20quisiera%20recibir%20informaci%C3%B3n%20de%20la%20iglesia%20Vida%20Plena%20Internacional" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-red-600 hover:underline font-sans text-[11px] font-semibold mt-1 inline-flex items-center gap-1"
              >
                Escribir a WhatsApp
              </a>
            </div>

            {/* Card 3: Horario de Servicios */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200/70 shadow-xs flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-700 mb-3 shadow-3xs">
                <Clock className="w-4 h-4" />
              </div>
              <h4 className="font-display font-bold text-xs text-stone-900 uppercase tracking-wider mb-1">
                Horario de Servicios
              </h4>
              <p className="text-stone-800 font-sans text-xs font-semibold leading-relaxed">
                Dom 8:00 AM & 10:30 AM
              </p>
              <p className="text-stone-400 font-sans text-[11px] mt-0.5">
                Miércoles 7:00 PM
              </p>
            </div>

            {/* Card 4: Sitio Web & Correo */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200/70 shadow-xs flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-700 mb-3 shadow-3xs">
                <Globe className="w-4 h-4" />
              </div>
              <h4 className="font-display font-bold text-xs text-stone-900 uppercase tracking-wider mb-1">
                Atención Digital
              </h4>
              <a 
                href="mailto:diasplenos09@gmail.com" 
                className="text-stone-800 hover:text-red-600 font-sans text-xs font-medium transition"
              >
                diasplenos09@gmail.com
              </a>
              <a 
                href="https://vidaplenainternacional.co" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-red-600 hover:underline font-sans text-[11px] font-semibold mt-1"
              >
                vidaplenainternacional.co
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
