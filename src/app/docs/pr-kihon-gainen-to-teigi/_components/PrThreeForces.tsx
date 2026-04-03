import type { ReactNode } from "react";

interface PrThreeForcesProps {
  children: ReactNode;
}

export const PrThreeForces = ({ children }: PrThreeForcesProps) => {
  return <div className="three-forces">{children}</div>;
};

interface PrForceCardProps {
  num: string;
  title: ReactNode;
  children: ReactNode;
}

export const PrForceCard = ({ num, title, children }: PrForceCardProps) => {
  return (
    <div className="force-card">
      <div className="num">{num}</div>
      <h4>{title}</h4>
      <p>{children}</p>
    </div>
  );
};
