import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface PrTimelineProps {
  children: ReactNode;
}

export const PrTimeline = ({ children }: PrTimelineProps) => {
  return <div className="timeline">{children}</div>;
};

interface PrTimelineItemProps {
  year: ReactNode;
  title: ReactNode;
  children: ReactNode;
  isLast?: boolean;
}

export const PrTimelineItem = ({
  year,
  title,
  children,
  isLast,
}: PrTimelineItemProps) => {
  return (
    <div className={cn("tl-item", isLast && "last-item")}>
      <div className="tl-year">{year}</div>
      <div className="tl-title">{title}</div>
      <div className="tl-body">{children}</div>
    </div>
  );
};
