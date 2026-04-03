import type { ReactNode } from "react";

interface PrDefHighlightProps {
  label: ReactNode;
  en: ReactNode;
  ja: ReactNode;
  source: ReactNode;
}

export const PrDefHighlight = ({
  label,
  en,
  ja,
  source,
}: PrDefHighlightProps) => {
  return (
    <div className="def-highlight">
      <div className="label">{label}</div>
      <div className="en">{en}</div>
      <div className="ja">{ja}</div>
      <div className="source">{source}</div>
    </div>
  );
};
