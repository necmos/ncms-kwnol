import { PrCard } from '../PrCard'
import { PrDataTable } from '../PrDataTable'

export const SectionS11CommReputationTable = () => {
  return (
    <PrCard
      variant="orange"
      title="レピュテーション・マネジメント vs ブランド・マネジメント"
    >
      <PrDataTable style={{ marginTop: 8 }}>
        <thead>
          <tr>
            <th className="orange-head">概念</th>
            <th className="orange-head">定義と目的</th>
            <th className="orange-head">活用するコミュニケーション</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>レピュテーション</strong>
            </td>
            <td>評判・評価・世間が抱く印象の総体</td>
            <td
              rowSpan={2}
              style={{ verticalAlign: 'middle', textAlign: 'center' }}
            >
              ↑
            </td>
          </tr>
          <tr>
            <td>
              <strong>レピュテーション・マネジメント</strong>
            </td>
            <td>
              様々な要素を基にパブリックがイメージし判断しているコーポレート・レピュテーション（企業の評判・評価）を総合的に把握し管理すること
            </td>
          </tr>
          <tr>
            <td
              colSpan={2}
              style={{
                background: 'var(--pr-light-blue)',
                textAlign: 'center',
                fontWeight: 700,
                color: 'var(--pr-navy)',
              }}
            >
              →「コーポレート・コミュニケーション」を駆使
            </td>
            <td style={{ background: 'var(--pr-light-blue)' }} />
          </tr>
          <tr>
            <td>
              <strong>ブランド</strong>
            </td>
            <td>
              有形・無形にさまざまなステーク・ホルダーを満足させる、包括的な価値（様々な定義が存在）
            </td>
            <td
              rowSpan={2}
              style={{ verticalAlign: 'middle', textAlign: 'center' }}
            >
              ↑
            </td>
          </tr>
          <tr>
            <td>
              <strong>ブランド・マネジメント</strong>
            </td>
            <td>
              財の市場でのポジショニングを図り、財に対する顧客満足を維持すると共に、限られた経営資源で市場優位性を確保するためブランド構築に関する事柄を統合的に管理すること
            </td>
          </tr>
          <tr>
            <td
              colSpan={2}
              style={{
                background: 'var(--pr-light-orange)',
                textAlign: 'center',
                fontWeight: 700,
                color: 'var(--pr-orange)',
              }}
            >
              →「マーケティング・コミュニケーション」を駆使
            </td>
            <td style={{ background: 'var(--pr-light-orange)' }} />
          </tr>
        </tbody>
      </PrDataTable>
    </PrCard>
  )
}
