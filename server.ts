import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

// Initialize Express
const app = express();
app.use(express.json());
app.use(express.static(path.join(process.cwd(), "public")));
const PORT = 3000;

// Initialize GoogleGenAI client (safe backend initialization)
let ai: GoogleGenAI | null = null;
const API_KEY = process.env.GEMINI_API_KEY;

if (API_KEY) {
  try {
    ai = new GoogleGenAI({
      apiKey: API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
    console.log("Servicio de Inteligencia Artificial (Gemini SDK) iniciado con éxito.");
  } catch (err) {
    console.error("Error al inicializar el SDK de Gemini:", err);
  }
} else {
  console.log("Atención: GEMINI_API_KEY no detectada. Corriendo en modo offline con respuestas preestablecidas.");
}

// Handcrafted rich offline responses in Spanish for pastoral devotionals
const OFFLINE_DEVOTIONALS: Record<string, {
  title: string;
  verse: string;
  reflection: string;
  prayer: string;
  action: string;
}> = {
  temor: {
    title: "Venciendo el Temor con Plena Confianza",
    verse: "Salmos 56:3 - 'En el día que temo, yo en ti confío.'",
    reflection: "El temor no es una señal de debilidad, sino una oportunidad para ejercer una fe radical. En Vida Plena Internacional entendemos que las tormentas golpean a todos, pero lo que define tu destino no es la fuerza del viento, sino Aquel que sostiene tu barca. Cuando perseguimos leones en el foso (como Benaía en el relato bíblico), descubrimos que el peligro ruge con fuerza, pero Dios reina con absoluta autoridad divina. Hoy te animamos a no mirar el tamaño de tus gigantes, sino a proclamar la fidelidad eterna de tu Padre celestial. Tu fe tiene el poder de disolver cualquier nube de ansiedad si te sometes a Dios con paciencia.",
    prayer: "Señor Jesús, hoy rindo mis temores a Tus pies. Reconozco que las circunstancias quieren saturar mi mente con duda, pero decido blindar mi corazón con Tu Palabra. Sé mi paz, mi refugio fuerte y mi guía constante. Amén.",
    action: "Hoy, cuando sientas un sutil susurro de duda o temor, detente, respira y di en voz alta: 'Dios está conmigo, no temeré.'"
  },
  fe: {
    title: "Una Fe que Mueve Montañas e Imposibles",
    verse: "Hebreos 11:1 - 'Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve.'",
    reflection: "La fe cristiana auténtica no es una mera ilusión o un optimismo ciego. Es una convicción inconmovible arraigada en el carácter inmutable de Dios. Los Pastores William y Claudia Arbeláez a menudo nos recuerdan que la fe se prueba en los momentos de silencio, donde todo parece detenido pero los cielos se están movilizando a tu favor. Dios todavía hace milagros extraordinarios hoy; Sus manos no se han acortado para salvar ni Su oído se ha vuelto sordo a tu clamor sincero. Alimenta tu fe mediante el hábito de contemplar Su gloria y meditar día y noche en Sus promesas sagradas.",
    prayer: "Padre celestial, incrementa mi fe hoy. Ayúdame a ver el mundo a través de la lente de Tu soberanía. No me dejes guiar únicamente por lo que ven mis ojos físicos, sino por lo que Tu Espíritu edifica en mi interior. Amén.",
    action: "Escribe 3 promesas bíblicas clave y colócalas en un sitio visible. Léelas tres veces al día con gratitud."
  },
  familia: {
    title: "Construyendo un Hogar de Vida Plena",
    verse: "Josué 24:15 - 'Pero yo y mi casa serviremos a Jehová.'",
    reflection: "El diseño original de Dios para la familia es ser un santuario de amor, edificación mutua y paz abundante. Vivimos en tiempos de ritmos acelerados, pero los hogares saludables requieren tiempo intencional, perdón restaurador y fundamentos firmes de fe. Al someter nuestras relaciones familiares al gobierno del amor de Cristo, permitimos que Su gracia sanadora sane heridas pasadas y fortalezca los lazos de unidad. Una mesa compartida, una palabra templada con gracia y una oración juntos en familia abren ríos de bendición espiritual inagotables.",
    prayer: "Amado Dios, visita mi hogar hoy. Cubre a mis seres queridos con Tu favor y desata perdón mutuo donde ha habido asperezas. Danos sabiduría para comunicarnos con ternura y gracia, sirviéndote en armonía perfecta. Amén.",
    action: "Reúne a tu familia o escribe un mensaje sincero a un ser querido expresando tu aprecio y bendición sin pedir nada a cambio."
  },
  proposito: {
    title: "Caminando en la Mentalidad de Tu Reino",
    verse: "Jeremías 29:11 - 'Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal...'",
    reflection: "No eres el resultado de una coincidencia fortuita. Fuiste diseñado con una precisión celestial y colocado en esta tierra para cumplir un propósito específico y trascendente. Someterse a Dios significa dejar fluir Su voluntad y permitir que Él reescriba nuestras prioridades cotidianas. La verdadera plenitud se experimenta cuando nuestra mentalidad individual se alinea con la del Reino de los Cielos, buscando primero Su justicia y dejándonos moldear por Su carácter. Hoy es un día crucial para dar un paso decidido hacia adelante, con los hombros firmes y la frente en alto, sirviendo a los demás con generosidad.",
    prayer: "Señor, revélame Tu plan perfecto para mi vida. Rompe toda apatía y desgano de mi corazón. Despierta en mí una pasión pura e inagotable por servir a los demás y glorificar Tu nombre en cada acción que emprenda. Amén.",
    action: "Haz una lista de tus tres talentos principales y planifica una forma concreta de utilizarlos para bendecir a alguien en la comunidad esta semana."
  }
};

// API Endpoint: Dynamic Pastoral Devotionals (using Gemini system instructions and schema)
app.post("/api/devotional", async (req, res) => {
  const { topic } = req.body;
  const normalizedTopic = String(topic || "temor").toLowerCase();
  
  // Decide active category for fallback keys
  let fallbackKey = "temor";
  if (normalizedTopic.includes("fe") || normalizedTopic.includes("confianza")) fallbackKey = "fe";
  else if (normalizedTopic.includes("familia") || normalizedTopic.includes("comunidad") || normalizedTopic.includes("nosotros")) fallbackKey = "familia";
  else if (normalizedTopic.includes("propósito") || normalizedTopic.includes("proposito") || normalizedTopic.includes("vida") || normalizedTopic.includes("reino")) fallbackKey = "proposito";

  const fallbackData = OFFLINE_DEVOTIONALS[fallbackKey];

  // If Gemini API is available, generate dynamically!
  if (ai) {
    try {
      const prompt = `Genera un devocional cristiano de fe en español altamente inspirador y pastoral sobre el tema: "${topic || "Vencer el temor"}".
      Este devocional es en nombre de la Iglesia Cristiana "Vida Plena Internacional" y sus pastores William y Claudia Arbeláez.
      
      IMPORTANTE: Debe tener una visión de fe liberadora, minimalista, enfocada en vencer el miedo y edificar familias fuertes.
      Usa un tono íntimo, literario, maduro, profundamente bíblico y libre de clichés.
      
      Debes retornar obligatoriamente un formato JSON con la siguiente estructura exacta:
      {
        "title": "Un título corto y poético sobre el tema",
        "verse": "Un versículo bíblico relevante de inspiración (Cita - 'Texto')",
        "reflection": "Una reflexión teológica e inspiradora del tema en español de aproximadamente dos párrafos. Menciona la importancia de perseverar, amar y someterse a Dios.",
        "prayer": "Una oración de fe íntima guiada por el espíritu del devocional",
        "action": "Un paso o actividad práctica sencilla para realizar hoy"
      }`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          temperature: 1.0,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING, description: "Título del devocional" },
              verse: { type: Type.STRING, description: "Versículo bíblico completo y su cita" },
              reflection: { type: Type.STRING, description: "Reflexión detallada de 2 párrafos" },
              prayer: { type: Type.STRING, description: "Declaración u oración de fe inspiradora" },
              action: { type: Type.STRING, description: "Acción práctica diaria" }
            },
            required: ["title", "verse", "reflection", "prayer", "action"]
          }
        }
      });

      const responseText = response.text;
      if (responseText) {
        const parsedDevotional = JSON.parse(responseText.trim());
        return res.json({ success: true, source: "gemini", data: parsedDevotional });
      }
    } catch (err) {
      console.error("Fallo al generar devocional con Gemini, utilizando fallback offline:", err);
    }
  }

  // Fallback offline connection
  return res.json({ success: true, source: "offline", data: fallbackData });
});

// API Endpoint: Contact and Prayer Request Handler
app.post("/api/contact", (req, res) => {
  const { name, email, phone, messageType, message } = req.body;
  
  if (!name || !message) {
    return res.status(400).json({ success: false, error: "El nombre y el mensaje son obligatorios." });
  }

  // In a production application, this would write to a database or trigger an email.
  // Here we respond warmly, simulating pastoral intake processing.
  const isPrayer = String(messageType).toLowerCase() === "oracion";
  
  const responseMessage = isPrayer
    ? `Gracias hermano/a ${name}. Tu petición de oración ha sido recibida por nuestro equipo de intercesión. Los pastores William y Claudia estarán presentando tu necesidad delante de Dios.`
    : `Gracias ${name}. Tu mensaje ha sido recibido con agrado. Estaremos respondiendo a tu correo (${email || 'proporcionado'}) a la brevedad posible.`;

  return res.json({
    success: true,
    message: responseMessage,
    receivedAt: new Date().toISOString()
  });
});

// Setup Vite Development Middleware or Serve Production Build assets
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Vite dev middleware montado con éxito.");
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("Sirviendo recursos estáticos de producción compilados de /dist.");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
