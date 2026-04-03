import type { ReactNode } from "react";

interface PrRelationsGridProps {
  children: ReactNode;
}

export const PrRelationsGrid = ({ children }: PrRelationsGridProps) => {
  return <div className="relations-grid">{children}</div>;
};

interface PrRelCardProps {
  name: ReactNode;
  target: ReactNode;
  children: ReactNode;
  point: ReactNode;
}

export const PrRelCard = ({
  name,
  target,
  children,
  point,
}: PrRelCardProps) => {
  return (
    <div className="rel-card">
      <div className="rel-name">{name}</div>
      <div className="rel-target">{target}</div>
      {children}
      <p className="point">{point}</p>
    </div>
  );
};
