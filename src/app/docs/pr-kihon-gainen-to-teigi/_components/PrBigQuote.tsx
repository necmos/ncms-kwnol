import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface PrBigQuoteProps {
  quote: ReactNode;
  by: ReactNode;
  className?: string;
}

export const PrBigQuote = ({ quote, by, className }: PrBigQuoteProps) => {
  return (
    <div className={cn("big-quote", className)}>
      <p>{quote}</p>
      <div className="by">{by}</div>
    </div>
  );
};
