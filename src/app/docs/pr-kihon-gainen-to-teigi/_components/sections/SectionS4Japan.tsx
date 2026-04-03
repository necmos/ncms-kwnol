import { PrBarChart, PrBarRow } from "../PrBarChart";
import { PrBigQuote } from "../PrBigQuote";
import { PrCard } from "../PrCard";
import { PrCompareCard, PrCompareGrid } from "../PrCompareGrid";
import { PrDataTable } from "../PrDataTable";
import { PrSectionLabel } from "../PrSectionLabel";

export const SectionS4Japan = () => {
  return (
    <section id="s4">
      <PrSectionLabel
        num="4"
        title="日本がPR分野で遅れをとっているのは何故か"
        badge={<span className="lecture-badge">第2回</span>}
      />

      <PrCard title="歴史的要因">
        <PrDataTable style={{ marginTop: 8 }}>
          <thead>
            <tr>
              <th>#</th>
              <th>要因</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                島国が育んだ建国以来の <strong>単一的民族構成</strong>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                上下関係の厳しさや寡黙を求められる <strong>儒教的考え方</strong>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                江戸時代の <strong>260年に及ぶ鎖国体制</strong>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                <strong>広告代理店内にPRセクションが新設</strong>
                されたことが始まり
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                自由民主党の一党支配で形成された <strong>政・官・財協調体制</strong>
              </td>
            </tr>
          </tbody>
        </PrDataTable>
      </PrCard>

      <PrCard className="mb-[14px]" title="文化的要因：コンテキスト型の違い" />
      <PrCompareGrid>
        <PrCompareCard variant="japan" title="🇯🇵 日本：ハイ・コンテキスト型社会">
          文化的コードが暗黙裡に共有されており、「暗黙の了解」による情報量の節約が可能。言わなくても伝わる文化。間違いを犯したとき言い訳をしないことでアカウンタビリティが弱まる。
        </PrCompareCard>
        <PrCompareCard variant="west" title="🌍 欧米：ロー・コンテキスト型社会">
          共有される文化的コードが少ないため、明確に言語化された情報を大量に伝達する必要がある。明確な意思表示・説明責任が基本。
          <strong>パブリック・リレーションズはローコンテキスト型。</strong>
        </PrCompareCard>
      </PrCompareGrid>

      <PrBigQuote
        className="mt-0"
        quote="グローバル化の現代では「オープン」「フェア」「スピード」が求められる"
        by="⇒ 日本全体のパブリック・リレーションズ力強化が急務"
      />

      <PrCard title="主要国のPR協会会員数（2006年時点）">
        <PrBarChart>
          <div style={{ marginTop: 14 }}>
            <PrBarRow label="アメリカ" widthPct="100%" valueLabel="20,000人" />
            <PrBarRow label="イギリス" widthPct="40%" valueLabel="8,000人" />
            <PrBarRow label="フランス" widthPct="10%" valueLabel="2,000人" />
            <PrBarRow label="ドイツ" widthPct="9.4%" valueLabel="1,870人" />
            <PrBarRow label="カナダ" widthPct="7.8%" valueLabel="1,560人" />
            <PrBarRow label="イタリア" widthPct="5.3%" valueLabel="1,050人" />
            <PrBarRow
              label="日本"
              widthPct="2.3%"
              valueLabel="450人"
              variant="japan"
            />
          </div>
        </PrBarChart>
        <p className="muted-note">
          ※ 日本はアメリカの約2.3%。世界との大きな格差が存在する。
        </p>
      </PrCard>
    </section>
  );
};
