import type { ReactNode } from "react";

interface PrEvalGridProps {
  children: ReactNode;
}

export const PrEvalGrid = ({ children }: PrEvalGridProps) => {
  return <div className="eval-grid">{children}</div>;
};

interface PrEvalCardProps {
  pct: string;
  children: ReactNode;
}

export const PrEvalCard = ({ pct, children }: PrEvalCardProps) => {
  return (
    <div className="eval-card">
      <div className="pct">{pct}</div>
      <p>{children}</p>
    </div>
  );
};
