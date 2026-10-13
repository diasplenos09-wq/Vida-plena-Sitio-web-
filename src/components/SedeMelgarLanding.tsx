import SedeBarranquillaLanding from "./SedeBarranquillaLanding";

interface SedeMelgarLandingProps {
  onNavigate: (pageId: string) => void;
}

// Redirects Melgar landing to Barranquilla as requested
export default function SedeMelgarLanding({ onNavigate }: SedeMelgarLandingProps) {
  return <SedeBarranquillaLanding onNavigate={onNavigate} />;
}
