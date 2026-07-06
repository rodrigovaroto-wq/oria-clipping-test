interface SectionHeaderProps {
  num?: string;
  heading: React.ReactNode;
  intro?: React.ReactNode;
  invert?: boolean;
}

export const SectionHeader = ({ num, heading, intro, invert }: SectionHeaderProps) => {
  const body = (
    <div>
      <h2
        className={`font-serif-display font-light leading-[1.05] tracking-[-0.02em] max-w-[950px] text-[clamp(26px,5.5vw,54px)] break-words ${
          invert ? "text-background" : "text-foreground"
        }`}
      >
        {heading}
      </h2>
      {intro && (
        <p
          className={`mt-6 text-[18px] leading-[1.55] font-light max-w-[620px] ${
            invert ? "text-background/70" : "text-ink-soft"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );

  // Sem eyebrow: título em coluna única.
  if (!num) {
    return <div className="mb-12 md:mb-20 reveal">{body}</div>;
  }

  return (
    <div className="grid md:grid-cols-[180px_1fr] gap-6 md:gap-20 mb-12 md:mb-20 items-start reveal">
      <div
        className={`font-mono-label text-[11px] pt-3 ${
          invert ? "text-background/50" : "text-muted"
        }`}
      >
        {num}
      </div>
      {body}
    </div>
  );
};
