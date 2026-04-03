import type { ReactNode } from "react";

interface PrCommCompareGridProps {
  children: ReactNode;
}

export const PrCommCompareGrid = ({ children }: PrCommCompareGridProps) => {
  return <div className="comm-compare">{children}</div>;
};

interface PrCommCardProps {
  variant: "corp" | "mktg";
  head: ReactNode;
  note: ReactNode;
  focus: ReactNode;
  children: ReactNode;
}

export const PrCommCard = ({
  variant,
  head,
  note,
  focus,
  children,
}: PrCommCardProps) => {
  return (
    <div className={`comm-card ${variant}`}>
      <div className="cc-head">{head}</div>
      <p>{children}</p>
      <p
        className="muted-note"
        style={{
          marginTop: 8,
          fontSize: "0.82rem",
          color: variant === "mktg" ? "#a0522d" : undefined,
        }}
      >
        {note}
      </p>
      <div className="cc-focus">{focus}</div>
    </div>
  );
};

interface PrCommEqualsProps {
  children: ReactNode;
}

export const PrCommEquals = ({ children }: PrCommEqualsProps) => {
  return <div className="comm-equals">{children}</div>;
};
