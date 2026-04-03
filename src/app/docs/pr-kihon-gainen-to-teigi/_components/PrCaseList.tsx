import type { ReactNode } from "react";

interface PrCaseListProps {
  children: ReactNode;
}

export const PrCaseList = ({ children }: PrCaseListProps) => {
  return <div className="case-list">{children}</div>;
};

interface PrCaseItemProps {
  icon: ReactNode;
  title: ReactNode;
  children: ReactNode;
}

export const PrCaseItem = ({ icon, title, children }: PrCaseItemProps) => {
  return (
    <div className="case-item">
      <div className="case-icon">{icon}</div>
      <div>
        <h4>{title}</h4>
        <p>{children}</p>
      </div>
    </div>
  );
};
