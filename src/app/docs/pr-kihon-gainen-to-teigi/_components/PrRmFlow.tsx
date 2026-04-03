import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface PrRmFlowProps {
  children: ReactNode;
}

export const PrRmFlow = ({ children }: PrRmFlowProps) => {
  return <div className="rm-flow">{children}</div>;
};

interface PrRmRowProps {
  children: ReactNode;
}

export const PrRmRow = ({ children }: PrRmRowProps) => {
  return <div className="rm-row">{children}</div>;
};

export const PrRmArrow = () => {
  return <div className="rm-arrow">→</div>;
};

type RmBoxVariant = "default" | "sender" | "media-box" | "public";

interface PrRmBoxProps {
  variant?: RmBoxVariant;
  label: ReactNode;
  title: ReactNode;
  detail: ReactNode;
}

export const PrRmBox = ({
  variant = "default",
  label,
  title,
  detail,
}: PrRmBoxProps) => {
  return (
    <div
      className={cn(
        "rm-box",
        variant === "sender" && "sender",
        variant === "media-box" && "media-box",
        variant === "public" && "public"
      )}
    >
      <div className="rm-label">{label}</div>
      <div className="rm-title">{title}</div>
      <div className="rm-detail">{detail}</div>
    </div>
  );
};
