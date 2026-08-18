type Props = {
  className?: string;
  withWordmark?: boolean;
};

export function NexLogo({ className, withWordmark = true }: Props) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        className={className ?? "h-8 w-8 text-accent"}
      >
        {/* gear ring */}
        <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <circle cx="24" cy="24" r="13" />
          <circle cx="24" cy="24" r="7.5" opacity="0.5" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line
              key={deg}
              x1="24"
              y1="7.5"
              x2="24"
              y2="10.5"
              transform={`rotate(${deg} 24 24)`}
            />
          ))}
          {/* meridians — globe */}
          <ellipse cx="24" cy="24" rx="3.4" ry="7.5" opacity="0.5" />
          <line x1="16.5" y1="24" x2="31.5" y2="24" opacity="0.5" />
          {/* circuit traces */}
          <path d="M37 24h6M24 37v6M11 24H5M24 11V5" opacity="0.35" />
        </g>
        <g fill="currentColor">
          <circle cx="43" cy="24" r="2" />
          <circle cx="24" cy="43" r="2" />
          <circle cx="5" cy="24" r="2" />
          <circle cx="24" cy="5" r="2" />
        </g>
      </svg>
      {withWordmark && (
        <span className="text-lg font-semibold tracking-[0.28em] text-foreground">
          NEX
        </span>
      )}
    </span>
  );
}
