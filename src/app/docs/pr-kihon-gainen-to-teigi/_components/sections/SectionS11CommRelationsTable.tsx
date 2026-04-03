import { PrCard } from '../PrCard'
import { PrDataTable } from '../PrDataTable'

export const SectionS11CommRelationsTable = () => {
  return (
    <PrCard
      variant="orange"
      title="各コミュニケーションと様々なリレーションズの位置付け"
    >
      <p
        style={{
          marginBottom: 12,
          color: 'var(--pr-gray-text)',
          fontSize: '0.87rem',
        }}
      >
        各リレーションズ活動は、コーポレート・コミュニケーションとマーケティング・コミュニケーションの両軸上に位置づけられる。
      </p>
      <PrDataTable style={{ marginTop: 4 }}>
        <thead>
          <tr>
            <th className="orange-head">リレーションズ</th>
            <th className="orange-head">主な軸</th>
            <th className="orange-head">特徴</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>メディア・リレーションズ</strong>
            </td>
            <td>コーポレート寄り</td>
            <td>
              企業・組織のレピュテーション形成に直結。他のすべてのリレーションズを支援する基盤。
            </td>
          </tr>
          <tr>
            <td>
              <strong>インベスター・リレーションズ</strong>
            </td>
            <td>コーポレート寄り</td>
            <td>
              企業評価・株主価値に直接関わる。財務情報の透明な発信が中心。
            </td>
          </tr>
          <tr>
            <td>
              <strong>ガバメント・リレーションズ</strong>
            </td>
            <td>コーポレート寄り</td>
            <td>規制・政策環境の形成。組織の中長期的な活動基盤に関わる。</td>
          </tr>
          <tr>
            <td>
              <strong>カスタマー・リレーションズ</strong>
            </td>
            <td>マーケティング寄り</td>
            <td>製品・サービスの価値訴求。ブランド強化と顧客満足が主眼。</td>
          </tr>
          <tr>
            <td>
              <strong>インダストリー・リレーションズ</strong>
            </td>
            <td>マーケティング寄り</td>
            <td>業界ポジショニング。市場形成・競合との差別化に関わる。</td>
          </tr>
          <tr>
            <td>
              <strong>エンプロイー・リレーションズ</strong>
            </td>
            <td>コーポレート寄り</td>
            <td>組織内部の信頼構築。人的資源の最大化。</td>
          </tr>
          <tr>
            <td>
              <strong>コミュニティー・リレーションズ</strong>
            </td>
            <td>コーポレート寄り</td>
            <td>地域との共生・企業市民としての価値向上。</td>
          </tr>
          <tr>
            <td>
              <strong>アソシエーション・リレーションズ</strong>
            </td>
            <td>中間</td>
            <td>業界ルール形成・ロビイング活動との連携。</td>
          </tr>
        </tbody>
      </PrDataTable>
    </PrCard>
  )
}
