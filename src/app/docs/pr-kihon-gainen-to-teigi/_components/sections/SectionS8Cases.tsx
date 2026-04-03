import { PrCaseItem, PrCaseList } from "../PrCaseList";
import { PrSectionLabel } from "../PrSectionLabel";

export const SectionS8Cases = () => {
  return (
    <section id="s8">
      <PrSectionLabel
        num="8"
        title="昨今ニュースで扱われたPR事例"
        badge={<span className="lecture-badge">第2回</span>}
      />

      <p style={{ marginBottom: 18, color: "var(--pr-gray-text)" }}>
        PRは日常のニュースに深く関わっている。以下の事例はいずれもPRの観点から分析できる。
      </p>

      <PrCaseList>
        <PrCaseItem icon="🗺️" title="領土・領有権問題（竹島・尖閣諸島など）">
          国家レベルのパブリック・リレーションズ。国際社会への情報発信・理解促進がいかに重要かを示す事例。
        </PrCaseItem>
        <PrCaseItem icon="⚛️" title="福島第一原発事故">
          危機管理コミュニケーション（クライシスコミュニケーション）の典型事例。情報公開とリスクコミュニケーションのあり方が問われた。
        </PrCaseItem>
        <PrCaseItem icon="🍔" title="マクドナルド異物混入問題">
          企業の危機対応とメディア・リレーションズの失敗事例。対応の遅れや情報管理の問題が企業価値を大きく毀損した。
        </PrCaseItem>
        <PrCaseItem icon="🦠" title="新型コロナウイルス対応">
          政府・企業・国際機関のパブリック・リレーションズが問われた事例。WHO・各国政府のコミュニケーション戦略の差が顕在化した。
        </PrCaseItem>
        <PrCaseItem icon="🗳️" title="米国大統領選">
          政治的パブリック・リレーションズの典型。候補者のメディア戦略・世論形成活動の重要性が示された。
        </PrCaseItem>
      </PrCaseList>
    </section>
  );
};
