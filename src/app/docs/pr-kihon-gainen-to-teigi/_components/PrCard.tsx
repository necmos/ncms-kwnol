import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

export type PrCardVariant = "default" | "green" | "orange";

interface PrCardProps {
  title?: ReactNode;
  children?: ReactNode;
  variant?: PrCardVariant;
  className?: string;
  style?: ComponentProps<"div">["style"];
  titleAs?: "h3" | "h4";
}

export const PrCard = ({
  title,
  children,
  variant = "default",
  className,
  style,
  titleAs: TitleTag = "h3",
}: PrCardProps) => {
  return (
    <div
      className={cn(
        "card",
        variant === "green" && "green",
        variant === "orange" && "orange",
        className
      )}
      style={style}
    >
      {title != null ? <TitleTag>{title}</TitleTag> : null}
      {children ?? null}
    </div>
  );
};
