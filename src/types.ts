/**
 * Type declarations for the website Vida Plena Internacional
 */

export interface ServiceInfo {
  id: string;
  name: string;
  day: string;
  time: string;
  description: string;
  iconName: "Sun" | "Calendar" | "Flame" | "Clock" | "Users" | "Heart" | "Sparkles";
  type: "principal" | "especial" | "estudio";
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  imageTheme: string; // Used to style beautiful vector backgrounds
  imageSrc?: string; // Optional real visual photo
  quote?: string;
}

export interface Devotional {
  title: string;
  verse: string;
  reflection: string;
  prayer: string;
  action: string;
}

export interface PrayerSubmission {
  name: string;
  email?: string;
  phone?: string;
  messageType: "oracion" | "contacto" | "testimonio";
  message: string;
}
