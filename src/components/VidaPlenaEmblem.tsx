interface EmblemProps {
  className?: string;
}

export default function VidaPlenaEmblem({ className = "h-12 w-auto" }: EmblemProps) {
  return (
    <svg 
      viewBox="0 0 1000 970" 
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Vida Plena Internacional"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Head */}
      <circle cx="480" cy="180" r="116" />
      
      {/* Outstretched Arms and Dynamic Silhouette Body */}
      <path d="M 372 278 C 405 328, 555 328, 588 278 C 695 185, 825 98, 976 30 C 845 155, 735 285, 642 460 C 580 620, 480 810, 338 970 C 402 865, 438 735, 420 605 C 405 515, 375 465, 350 445 C 255 325, 140 245, 30 190 C 140 192, 260 220, 372 278 Z" />
    </svg>
  );
}
