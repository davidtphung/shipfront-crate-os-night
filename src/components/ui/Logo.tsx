export function CubeMark({
  className = "h-5 w-[18px]",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 26"
      aria-hidden
    >
      <g
        fill="none"
        stroke="#FF6A00"
        strokeWidth="1.25"
        strokeLinecap="square"
        strokeLinejoin="miter"
      >
        <path d="M7 9 L12 6 L17 9 L12 12 Z" />
        <path d="M7 9 L7 16 L12 19 L17 16 L17 9" />
        <path d="M12 12 L12 19" />
        <path d="M12 6 L12 13 L7 16" />
        <path d="M12 13 L17 16" />
      </g>
    </svg>
  );
}

export function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5 text-white">
      <CubeMark />
      <span
        translate="no"
        className="text-[15px] font-bold tracking-[-0.04em] sm:text-[17px]"
      >
        SHIPFRONT
      </span>
    </span>
  );
}
