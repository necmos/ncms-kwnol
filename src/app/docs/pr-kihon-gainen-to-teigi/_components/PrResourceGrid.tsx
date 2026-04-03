import type { ReactNode } from "react";

interface PrResourceGridProps {
  children: ReactNode;
}

export const PrResourceGrid = ({ children }: PrResourceGridProps) => {
  return <div className="resource-grid">{children}</div>;
};

interface PrResourceCardProps {
  label: ReactNode;
  integrator?: boolean;
  children: ReactNode;
}

export const PrResourceCard = ({
  label,
  integrator,
  children,
}: PrResourceCardProps) => {
  return (
    <div className={`resource-card ${integrator ? "integrator" : ""}`.trim()}>
      <div className="label">{label}</div>
      <p>{children}</p>
    </div>
  );
};
