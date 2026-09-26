var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");
var import_dotenv = __toESM(require("dotenv"), 1);
import_dotenv.default.config();
var app = (0, import_express.default)();
app.use(import_express.default.json());
var PORT = 3e3;
var ai = null;
var API_KEY = process.env.GEMINI_API_KEY;
if (API_KEY) {
  try {
    ai = new import_genai.GoogleGenAI({
      apiKey: API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });
    console.log("Servicio de Inteligencia Artificial (Gemini SDK) iniciado con \xE9xito.");
  } catch (err) {
    console.error("Error al inicializar el SDK de Gemini:", err);
  }
} else {
  console.log("Atenci\xF3n: GEMINI_API_KEY no detectada. Corriendo en modo offline con respuestas preestablecidas.");
}
var OFFLINE_DEVOTIONALS = {
  temor: {
    title: "Venciendo el Temor con Plena Confianza",
    verse: "Salmos 56:3 - 'En el d\xEDa que temo, yo en ti conf\xEDo.'",
    reflection: "El temor no es una se\xF1al de debilidad, sino una oportunidad para ejercer una fe radical. En Vida Plena Internacional entendemos que las tormentas golpean a todos, pero lo que define tu destino no es la fuerza del viento, sino Aquel que sostiene tu barca. Cuando perseguimos leones en el foso (como Bena\xEDa en el relato b\xEDblico), descubrimos que el peligro ruge con fuerza, pero Dios reina con absoluta autoridad divina. Hoy te animamos a no mirar el tama\xF1o de tus gigantes, sino a proclamar la fidelidad eterna de tu Padre celestial. Tu fe tiene el poder de disolver cualquier nube de ansiedad si te sometes a Dios con paciencia.",
    prayer: "Se\xF1or Jes\xFAs, hoy rindo mis temores a Tus pies. Reconozco que las circunstancias quieren saturar mi mente con duda, pero decido blindar mi coraz\xF3n con Tu Palabra. S\xE9 mi paz, mi refugio fuerte y mi gu\xEDa constante. Am\xE9n.",
    action: "Hoy, cuando sientas un sutil susurro de duda o temor, detente, respira y di en voz alta: 'Dios est\xE1 conmigo, no temer\xE9.'"
  },
  fe: {
    title: "Una Fe que Mueve Monta\xF1as e Imposibles",
    verse: "Hebreos 11:1 - 'Es, pues, la fe la certeza de lo que se espera, la convicci\xF3n de lo que no se ve.'",
    reflection: "La fe cristiana aut\xE9ntica no es una mera ilusi\xF3n o un optimismo ciego. Es una convicci\xF3n inconmovible arraigada en el car\xE1cter inmutable de Dios. Los Pastores William y Claudia Arbel\xE1ez a menudo nos recuerdan que la fe se prueba en los momentos de silencio, donde todo parece detenido pero los cielos se est\xE1n movilizando a tu favor. Dios todav\xEDa hace milagros extraordinarios hoy; Sus manos no se han acortado para salvar ni Su o\xEDdo se ha vuelto sordo a tu clamor sincero. Alimenta tu fe mediante el h\xE1bito de contemplar Su gloria y meditar d\xEDa y noche en Sus promesas sagradas.",
    prayer: "Padre celestial, incrementa mi fe hoy. Ay\xFAdame a ver el mundo a trav\xE9s de la lente de Tu soberan\xEDa. No me dejes guiar \xFAnicamente por lo que ven mis ojos f\xEDsicos, sino por lo que Tu Esp\xEDritu edifica en mi interior. Am\xE9n.",
    action: "Escribe 3 promesas b\xEDblicas clave y col\xF3calas en un sitio visible. L\xE9elas tres veces al d\xEDa con gratitud."
  },
  familia: {
    title: "Construyendo un Hogar de Vida Plena",
    verse: "Josu\xE9 24:15 - 'Pero yo y mi casa serviremos a Jehov\xE1.'",
    reflection: "El dise\xF1o original de Dios para la familia es ser un santuario de amor, edificaci\xF3n mutua y paz abundante. Vivimos en tiempos de ritmos acelerados, pero los hogares saludables requieren tiempo intencional, perd\xF3n restaurador y fundamentos firmes de fe. Al someter nuestras relaciones familiares al gobierno del amor de Cristo, permitimos que Su gracia sanadora sane heridas pasadas y fortalezca los lazos de unidad. Una mesa compartida, una palabra templada con gracia y una oraci\xF3n juntos en familia abren r\xEDos de bendici\xF3n espiritual inagotables.",
    prayer: "Amado Dios, visita mi hogar hoy. Cubre a mis seres queridos con Tu favor y desata perd\xF3n mutuo donde ha habido asperezas. Danos sabidur\xEDa para comunicarnos con ternura y gracia, sirvi\xE9ndote en armon\xEDa perfecta. Am\xE9n.",
    action: "Re\xFAne a tu familia o escribe un mensaje sincero a un ser querido expresando tu aprecio y bendici\xF3n sin pedir nada a cambio."
  },
  proposito: {
    title: "Caminando en la Mentalidad de Tu Reino",
    verse: "Jerem\xEDas 29:11 - 'Porque yo s\xE9 los pensamientos que tengo acerca de vosotros, dice Jehov\xE1, pensamientos de paz, y no de mal...'",
    reflection: "No eres el resultado de una coincidencia fortuita. Fuiste dise\xF1ado con una precisi\xF3n celestial y colocado en esta tierra para cumplir un prop\xF3sito espec\xEDfico y trascendente. Someterse a Dios significa dejar fluir Su voluntad y permitir que \xC9l reescriba nuestras prioridades cotidianas. La verdadera plenitud se experimenta cuando nuestra mentalidad individual se alinea con la del Reino de los Cielos, buscando primero Su justicia y dej\xE1ndonos moldear por Su car\xE1cter. Hoy es un d\xEDa crucial para dar un paso decidido hacia adelante, con los hombros firmes y la frente en alto, sirviendo a los dem\xE1s con generosidad.",
    prayer: "Se\xF1or, rev\xE9lame Tu plan perfecto para mi vida. Rompe toda apat\xEDa y desgano de mi coraz\xF3n. Despierta en m\xED una pasi\xF3n pura e inagotable por servir a los dem\xE1s y glorificar Tu nombre en cada acci\xF3n que emprenda. Am\xE9n.",
    action: "Haz una lista de tus tres talentos principales y planifica una forma concreta de utilizarlos para bendecir a alguien en la comunidad esta semana."
  }
};
app.post("/api/devotional", async (req, res) => {
  const { topic } = req.body;
  const normalizedTopic = String(topic || "temor").toLowerCase();
  let fallbackKey = "temor";
  if (normalizedTopic.includes("fe") || normalizedTopic.includes("confianza")) fallbackKey = "fe";
  else if (normalizedTopic.includes("familia") || normalizedTopic.includes("comunidad") || normalizedTopic.includes("nosotros")) fallbackKey = "familia";
  else if (normalizedTopic.includes("prop\xF3sito") || normalizedTopic.includes("proposito") || normalizedTopic.includes("vida") || normalizedTopic.includes("reino")) fallbackKey = "proposito";
  const fallbackData = OFFLINE_DEVOTIONALS[fallbackKey];
  if (ai) {
    try {
      const prompt = `Genera un devocional cristiano de fe en espa\xF1ol altamente inspirador y pastoral sobre el tema: "${topic || "Vencer el temor"}".
      Este devocional es en nombre de la Iglesia Cristiana "Vida Plena Internacional" y sus pastores William y Claudia Arbel\xE1ez.
      
      IMPORTANTE: Debe tener una visi\xF3n de fe liberadora, minimalista, enfocada en vencer el miedo y edificar familias fuertes.
      Usa un tono \xEDntimo, literario, maduro, profundamente b\xEDblico y libre de clich\xE9s.
      
      Debes retornar obligatoriamente un formato JSON con la siguiente estructura exacta:
      {
        "title": "Un t\xEDtulo corto y po\xE9tico sobre el tema",
        "verse": "Un vers\xEDculo b\xEDblico relevante de inspiraci\xF3n (Cita - 'Texto')",
        "reflection": "Una reflexi\xF3n teol\xF3gica e inspiradora del tema en espa\xF1ol de aproximadamente dos p\xE1rrafos. Menciona la importancia de perseverar, amar y someterse a Dios.",
        "prayer": "Una oraci\xF3n de fe \xEDntima guiada por el esp\xEDritu del devocional",
        "action": "Un paso o actividad pr\xE1ctica sencilla para realizar hoy"
      }`;
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          temperature: 1,
          responseMimeType: "application/json",
          responseSchema: {
            type: import_genai.Type.OBJECT,
            properties: {
              title: { type: import_genai.Type.STRING, description: "T\xEDtulo del devocional" },
              verse: { type: import_genai.Type.STRING, description: "Vers\xEDculo b\xEDblico completo y su cita" },
              reflection: { type: import_genai.Type.STRING, description: "Reflexi\xF3n detallada de 2 p\xE1rrafos" },
              prayer: { type: import_genai.Type.STRING, description: "Declaraci\xF3n u oraci\xF3n de fe inspiradora" },
              action: { type: import_genai.Type.STRING, description: "Acci\xF3n pr\xE1ctica diaria" }
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
  return res.json({ success: true, source: "offline", data: fallbackData });
});
app.post("/api/contact", (req, res) => {
  const { name, email, phone, messageType, message } = req.body;
  if (!name || !message) {
    return res.status(400).json({ success: false, error: "El nombre y el mensaje son obligatorios." });
  }
  const isPrayer = String(messageType).toLowerCase() === "oracion";
  const responseMessage = isPrayer ? `Gracias hermano/a ${name}. Tu petici\xF3n de oraci\xF3n ha sido recibida por nuestro equipo de intercesi\xF3n. Los pastores William y Claudia estar\xE1n presentando tu necesidad delante de Dios.` : `Gracias ${name}. Tu mensaje ha sido recibido con agrado. Estaremos respondiendo a tu correo (${email || "proporcionado"}) a la brevedad posible.`;
  return res.json({
    success: true,
    message: responseMessage,
    receivedAt: (/* @__PURE__ */ new Date()).toISOString()
  });
});
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
    console.log("Vite dev middleware montado con \xE9xito.");
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
    console.log("Sirviendo recursos est\xE1ticos de producci\xF3n compilados de /dist.");
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
