import { PrBigQuote } from "../PrBigQuote";
import { PrCard } from "../PrCard";
import { PrDataTable } from "../PrDataTable";
import { PrResourceGrid, PrResourceCard } from "../PrResourceGrid";
import { PrSectionLabel } from "../PrSectionLabel";

export const SectionS3WhatIsPr = () => {
  return (
    <section id="s3">
      <PrSectionLabel
        num="3"
        title="パブリック・リレーションズとは何か"
        badge={<span className="lecture-badge">第2回</span>}
      />

      <PrBigQuote
        quote="「パブリック・リレーションズは21世紀最強のリアルタイム・ソフトウェア」"
        by="— 井之上 喬 ／ 「戦略的な攻めと守り」の両面を兼ね備えた手法"
      />

      <PrCard title="PRの本質的な定義（集約）">
        <p className="pr-summary-line">
          パブリック・リレーションズ＝
          <strong>社会全体との戦略的で持続的な関係構築活動</strong>
        </p>
        <p>
          組織体がそのターゲット（ステークホルダー）との関係構築・維持（リレーションズ）を図る行為の総体をパブリック・リレーションズという。パブリックとは一般社会全体（国際社会を含む）を指す。
        </p>
      </PrCard>

      <PrCard className="mb-[14px]" title="経営における「第5の経営資源」">
        <p>
          「人」「モノ」「金」「情報」という4つの経営資源を
          <strong>個々に強化し、統合する</strong>
          機能を担う。
        </p>
      </PrCard>

      <PrResourceGrid>
        <PrResourceCard label="人">
          企業のレピュテーションを高めることで有能な人材を集め、倫理教育や従業員との良好な関係で相互理解を深め個人を強化
        </PrResourceCard>
        <PrResourceCard label="モノ">
          資産や物流管理におけるリスク・マネジメントやブランディングによる高付加価値を実現
        </PrResourceCard>
        <PrResourceCard label="金">
          IR（投資家向け広報）をとおして資金調達や企業の時価総額を健全に確保
        </PrResourceCard>
        <PrResourceCard label="情報">
          インターネット社会における情報管理や双方向コミュニケーションによる情報の有効活用をおこなう
        </PrResourceCard>
        <PrResourceCard label="🔗 PR（統合）＝最短距離での目標達成" integrator>
          4つの強化された個々を統合し、有機的に機能させ最大限のシナジー効果を発揮させることで、
          <strong>最短距離での目標（目的）達成を可能にする。</strong>
        </PrResourceCard>
      </PrResourceGrid>

      <PrCard title="様々なリレーションズと主なターゲット" />

      <PrDataTable>
        <thead>
          <tr>
            <th>リレーションズの種類</th>
            <th>主なターゲット</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>メディア・リレーションズ</strong>
            </td>
            <td>新聞、雑誌、通信社、ラジオ、テレビ、オンラインメディア</td>
          </tr>
          <tr>
            <td>
              <strong>インベスター・リレーションズ</strong>
            </td>
            <td>株主、投資家、証券アナリスト</td>
          </tr>
          <tr>
            <td>
              <strong>ガバメント・リレーションズ</strong>
            </td>
            <td>中央政府、地方自治体、政治家、官僚</td>
          </tr>
          <tr>
            <td>
              <strong>エンプロイー・リレーションズ</strong>
            </td>
            <td>従業員、労働組合、従業員家族、パートタイマー</td>
          </tr>
          <tr>
            <td>
              <strong>コミュニティー・リレーションズ</strong>
            </td>
            <td>地域社会、市民団体、NGO</td>
          </tr>
          <tr>
            <td>
              <strong>カスタマー・リレーションズ</strong>
            </td>
            <td>顧客（潜在層を含む）、ビジネスパートナー</td>
          </tr>
          <tr>
            <td>
              <strong>アソシエーション・リレーションズ</strong>
            </td>
            <td>各種経済・商工・業界団体、関係者</td>
          </tr>
          <tr>
            <td>
              <strong>インダストリー・リレーションズ</strong>
            </td>
            <td>関係する産業分野（例：半導体、自動車など）</td>
          </tr>
          <tr>
            <td>
              <strong>その他リレーションズ</strong>
            </td>
            <td>その他ターゲット（ステークホルダー）</td>
          </tr>
        </tbody>
      </PrDataTable>
    </section>
  );
};
