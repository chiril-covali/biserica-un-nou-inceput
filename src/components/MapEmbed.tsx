interface MapEmbedProps {
  className?: string;
  title?: string;
}

/**
 * Harta locației bisericii.
 * Folosește Google Maps în mod "search by name" — fără API key.
 * Pentru a schimba locația, modifică `query` mai jos cu adresa exactă.
 */
export function MapEmbed({ className = '', title = 'Locația bisericii' }: MapEmbedProps) {
  const query = encodeURIComponent('Biserica Un Nou Început');
  const src = `https://www.google.com/maps?q=${query}&output=embed`;

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <iframe
        title={title}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full border-0"
        allowFullScreen
      />
      <a
        href={`https://www.google.com/maps/dir/?api=1&destination=${query}`}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 bg-foreground text-background px-4 py-2 text-sm font-light tracking-wide shadow-lg hover:bg-foreground/90 transition-colors"
      >
        Deschide în Google Maps
      </a>
    </div>
  );
}
