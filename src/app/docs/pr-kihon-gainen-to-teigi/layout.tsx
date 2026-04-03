import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

import "./pr-lecture-material.css";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "パブリック・リレーションズ概論 — 第2・3・4回",
  description:
    "次世代のリーダーのためのPR理論 ／ 早稲田大学 2020年度 総合学習資料",
};

interface PrKihonGainenLayoutProps {
  children: React.ReactNode;
}

const PrKihonGainenLayout = ({ children }: PrKihonGainenLayoutProps) => {
  return (
    <div className={`${notoSansJp.variable} min-h-full`}>{children}</div>
  );
};

export default PrKihonGainenLayout;
