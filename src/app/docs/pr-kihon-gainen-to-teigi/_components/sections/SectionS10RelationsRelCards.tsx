import { PrRelCard, PrRelationsGrid } from "../PrRelationsGrid";

export const SectionS10RelationsRelCards = () => {
  return (
    <PrRelationsGrid>
      <PrRelCard
        name="📰 メディア・リレーションズ"
        target="対象：新聞・雑誌・通信社・ラジオ・テレビ・オンライン"
        point="▸ ステークホルダーにアクセスするための媒体として、影響力の強い「メディア」を対象にしたリレーションズ活動を行う。"
      >
        <p>
          <strong>目的：</strong>
          他のリレーションズのターゲットに対してアクセスするため、コミュニケーション・チャンネルを確立する。
        </p>
      </PrRelCard>
      <PrRelCard
        name="💹 インベスター・リレーションズ（IR）"
        target="対象：株主・投資家・証券アナリスト"
        point="▸ M&Aなど、企業経営・企業価値に大きな影響を与えるケースも多い。"
      >
        <p>
          <strong>目的：</strong>
          株主や投資家に有効な判断基準を提供し、自社の評価・価値を適正なものにする。
        </p>
      </PrRelCard>
      <PrRelCard
        name="🏛️ ガバメント・リレーションズ（GR）"
        target="対象：政党（政治家）・中央政府（官僚）・地方自治体"
        point="▸ 行政機関を相手にするため期間が長期に渡り、情報に対する高度な分析力や鋭敏な対応が求められる。"
      >
        <p>
          <strong>目的：</strong>
          規制緩和や規制撤廃、法律改正など、組織体が活動しやすい環境を実現させる。
        </p>
      </PrRelCard>
      <PrRelCard
        name="👥 エンプロイー・リレーションズ"
        target="対象：組織の構成員・構成員の家族"
        point="▸ 産業構造の転換などにより、企業のリストラや吸収合併による解雇や人員整理で労使間の緊張が生まれることも多く、重要性が高まってきている。"
      >
        <p>
          <strong>目的：</strong>
          組織体とその構成員の相互信頼を構築し、快適な職場環境を実現することで、組織体の成長を図る。
        </p>
      </PrRelCard>
      <PrRelCard
        name="🏘️ コミュニティー・リレーションズ"
        target="対象：地域社会・周辺住民"
        point="▸ 苦情受付や情報公開など、双方向性コミュニケーションが大切。公害問題をきっかけに重要視されるようになった。"
      >
        <p>
          <strong>目的：</strong>
          業績だけでなく、コーポレート・シチズン（企業市民）として地域や広く一般社会との良好な関係づくりをすることで、企業価値を高める。
        </p>
      </PrRelCard>
      <PrRelCard
        name="🛒 カスタマー・リレーションズ"
        target="対象：顧客（潜在層を含む）・ビジネスパートナー"
        point="▸ 消費者の信頼と満足を高め、長期的な顧客関係を構築する。"
      >
        <p>
          <strong>目的：</strong>
          顧客や商品・サービスの享受者（消費者）を対象としたリレーションズ活動。
        </p>
      </PrRelCard>
    </PrRelationsGrid>
  );
};
