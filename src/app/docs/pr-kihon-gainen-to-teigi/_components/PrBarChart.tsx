import type { ReactNode } from "react";

interface PrBarChartProps {
  children: ReactNode;
}

export const PrBarChart = ({ children }: PrBarChartProps) => {
  return <div className="bar-chart">{children}</div>;
};

interface PrBarRowProps {
  label: string;
  widthPct: string;
  valueLabel: string;
  variant?: "default" | "japan";
}

export const PrBarRow = ({
  label,
  widthPct,
  valueLabel,
  variant = "default",
}: PrBarRowProps) => {
  return (
    <div className="bar-row">
      <div className="bar-label">{label}</div>
      <div className="bar-wrap">
        <div
          className={`bar-fill ${variant === "japan" ? "japan" : ""}`}
          style={{ width: widthPct }}
        />
      </div>
      <div className="bar-value">{valueLabel}</div>
    </div>
  );
};
