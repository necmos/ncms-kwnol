import { PrCard } from '../PrCard'
import { PrDataTable } from '../PrDataTable'
import { PrStakeholderWrap } from '../PrStakeholderWrap'

const stakeholderTags = [
  '政治家',
  '取引先',
  '従業員',
  '地域社会',
  '消費者団体',
  '株主',
  '顧客',
  '地方自治体',
  '中央政府',
  '国際社会',
  '一般消費者',
  '個人投資家',
  '証券アナリスト',
  '機関投資家',
  '金融機関',
  '従業員家族',
  '海外投資家',
  '競合企業',
  'ディストリビュータ',
  'ビジネスパートナー',
] as const

export const SectionS10RelationsAssociation = () => {
  return (
    <>
      <PrCard
        variant="orange"
        title="アソシエーション・リレーションズ／インダストリー・リレーションズ"
      >
        <PrDataTable style={{ marginTop: 8 }}>
          <thead>
            <tr>
              <th className="orange-head">種類</th>
              <th className="orange-head">概要</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>アソシエーション・リレーションズ</strong>
              </td>
              <td>
                経済、商工、業界団体などを対象としたリレーションズ活動。業界内の連携・規制対応・標準化活動を通じて有利な事業環境を形成する。
              </td>
            </tr>
            <tr>
              <td>
                <strong>インダストリー・リレーションズ</strong>
              </td>
              <td>
                関係する産業分野におけるリレーションズ活動（例えば半導体、自動車などの産業界全体）。業界団体・競合企業との関係管理も含む。
              </td>
            </tr>
          </tbody>
        </PrDataTable>
      </PrCard>

      <PrStakeholderWrap
        title="組織体が関係を構築するステークホルダーの全体像"
        tags={stakeholderTags}
        footnote="出典：井之上喬（2015）『パブリック・リレーションズ（第2版）』日本評論社 P17〜18 を参考に尾上作成"
      />
    </>
  )
}
