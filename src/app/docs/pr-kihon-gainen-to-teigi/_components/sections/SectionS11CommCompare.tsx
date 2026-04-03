import { PrCommCard, PrCommCompareGrid, PrCommEquals } from '../PrCommCompare'

export const SectionS11CommCompare = () => {
  return (
    <>
      <PrCommCompareGrid>
        <PrCommCard
          variant="corp"
          head="コーポレート・コミュニケーション"
          note="※「コーポレートPR」とほぼ同義語"
          focus="▸ 主として企業のレピュテーション向上に寄与"
        >
          企業が自らの<strong>哲学や理念</strong>
          を伝えることで企業への好意的なイメージを創出し
          <strong>評判（レピュテーション）</strong>
          を向上させることを目的とした活動。
        </PrCommCard>
        <PrCommCard
          variant="mktg"
          head="マーケティング・コミュニケーション"
          note="※「マーケティングPR」とほぼ同義"
          focus="▸ 主として財（製品やサービス）のブランド強化に寄与"
        >
          財（製品やサービス）の<strong>販売促進</strong>
          をサポートする目的を持ったコミュニケーション活動。
        </PrCommCard>
      </PrCommCompareGrid>

      <PrCommEquals>
        コーポレート・コミュニケーション ＋ マーケティング・コミュニケーション
        ＝ パブリック・リレーションズ
      </PrCommEquals>
    </>
  )
}
