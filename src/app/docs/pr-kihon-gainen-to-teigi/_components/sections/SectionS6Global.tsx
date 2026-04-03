import { PrCard } from "../PrCard";
import { PrCompareCard, PrCompareGrid } from "../PrCompareGrid";
import { PrSectionLabel } from "../PrSectionLabel";
import { PrForceCard, PrThreeForces } from "../PrThreeForces";

export const SectionS6Global = () => {
  return (
    <section id="s6">
      <PrSectionLabel
        num="6"
        sectionNumVariant="lecture3"
        title="グローバリゼーションとPR"
        badge={<span className="lecture-badge l3">第3回 NEW</span>}
      />

      <PrCard variant="green" title="グローバリゼーションとは（バグワティの概念）">
        <p>
          バグワティのグローバリゼーションの概念によると、グローバリゼーションは「パイを大きくする」という意味で経済発展に有益だが、社会に害をもたらすものだと考えている人たちもいる。経済面でのグローバリゼーションは
          <strong>
            海外移住、テクノロジーの発展、短期ポートフォリオ投資の発展、多国籍企業の対外直接投資
          </strong>
          などを促進し、さまざまな国際統合をもたらす。一方でグローバル化の社会的課題として、貧困との戦い・性差別の解消・先住民族文化と主流文化の共存なども同時に問われる。
        </p>
      </PrCard>

      <PrCard variant="green" title="ハイパー・グローバリゼーションとは">
        <p style={{ marginBottom: 14 }}>
          1990年代以降の国際貿易において「深化を続ける経済統合」を記述するために使われ始めた用語。井之上喬は、「パブリック・リレーションズ」英文版でこの用語を以下3つの力によって生み出された新たな環境を描写するために使用している。
        </p>
      </PrCard>

      <PrThreeForces>
        <PrForceCard num="①" title="Economic force">
          ビジネスの広範なグローバル化。国際貿易の拡大的成長と国境を越えた経済統合。
        </PrForceCard>
        <PrForceCard num="②" title="Human communication via the Internet force">
          インターネットとSNSによるデジタル通信。社会的コミュニケーションの規範が変化し社会文化的バリアが曖昧になる。
        </PrForceCard>
        <PrForceCard num="③" title="Technological disruptive force">
          AIとビッグデータの破壊的技術革新。IoT・ビッグデータ・AIが新たな経済・急速な社会変化をもたらし「シンギュラリティ」の時代へ。
        </PrForceCard>
      </PrThreeForces>

      <PrCard variant="green" title="グローバリゼーションの社会的インパクトとPR">
        <p>
          ローカル → ナショナル → リージョナル → グローバルへの進展は、国家・地域の枠を超えて政治、経済（金融）、社会、文化、生活様式など地球規模での変化を促す。グローバルレベルでの様々なステークホルダーとの関わりにおいて、自己目的や組織目的を達成していくためには、関係者や関連組織との友好な関係性の構築が必須となる。
        </p>
        <p
          style={{
            marginTop: 12,
            fontSize: "1.05rem",
            fontWeight: 700,
            color: "var(--pr-green)",
          }}
        >
          リレーションシップ・マネジメント ⇒ パブリック・リレーションズ
        </p>
      </PrCard>

      <PrCard className="mb-[14px]" title="ハイコンテキスト型からローコンテキスト型へ" />
      <PrCompareGrid>
        <PrCompareCard variant="japan" title="🇯🇵 日本：ハイ・コンテキスト型社会">
          文化的なコードが暗黙裡に共有されている度合いが高く、コミュニケーションの際のやりとりされる「情報量」が節約できる。
          <br />
          日本は過去2000年以上にわたり、島国に単一的民族的な共同生活をして「和」を大切にしてきた。
        </PrCompareCard>
        <PrCompareCard variant="west" title="🌍 欧米：ロー・コンテキスト型社会">
          共有される文化的コードが少ないため、明瞭にコード化された情報を大量に伝達しあわなければ意志疎通がはかりずらい。
          <br />
          <strong>パブリック・リレーションズはローコンテキスト型のコミュニケーション。</strong>
        </PrCompareCard>
      </PrCompareGrid>
    </section>
  );
};
