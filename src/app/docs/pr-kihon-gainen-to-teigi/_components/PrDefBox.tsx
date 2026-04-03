import type { ReactNode } from "react";

interface PrDefBoxProps {
  yearTag: ReactNode;
  quote: ReactNode;
  source: ReactNode;
}

export const PrDefBox = ({ yearTag, quote, source }: PrDefBoxProps) => {
  return (
    <div className="def-box">
      <div className="year-tag">{yearTag}</div>
      <blockquote>{quote}</blockquote>
      <div className="source">{source}</div>
    </div>
  );
};
