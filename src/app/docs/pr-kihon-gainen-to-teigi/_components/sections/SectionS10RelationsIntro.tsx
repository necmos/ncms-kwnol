import { PrCard } from '../PrCard'
import { PrDataTable } from '../PrDataTable'

export const SectionS10RelationsIntro = () => {
  return (
    <>
      <PrCard variant="orange" title="「パブリック」とは何か — 再確認">
        <p>
          パブリックは
          <strong>「公共」ではなく「一般社会」あるいは「社会全体」</strong>
          を指す。組織体は、ある目的を達成するためにターゲットを設定することになるが、組織体がそのターゲット（ステークホルダー）との
          <strong>関係構築・維持（リレーションズ）</strong>
          を図る行為すなわち「リレーションシップ・マネジメント」の総体をパブリック・リレーションズという。
        </p>
        <p
          style={{
            marginTop: 10,
            fontWeight: 700,
            color: 'var(--pr-orange)',
          }}
        >
          パブリック・リレーションズ ＝ 社会全体との戦略的で持続的な関係構築活動
        </p>
      </PrCard>

      <PrCard variant="orange" title="様々なリレーションズと主なターゲット一覧">
        <PrDataTable style={{ marginTop: 8 }}>
          <thead>
            <tr>
              <th className="orange-head">リレーションズ名</th>
              <th className="orange-head">
                主なターゲット（ステークホルダー）
              </th>
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
                <strong>インベスター・リレーションズ（IR）</strong>
              </td>
              <td>株主、投資家、証券アナリストなど</td>
            </tr>
            <tr>
              <td>
                <strong>ガバメント・リレーションズ（GR）</strong>
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
              <td>各種経済、商工、業界団体、関係者</td>
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
        <p className="muted-note" style={{ marginTop: 8 }}>
          出典：井之上喬（2015）『パブリック・リレーションズ（第2版）』日本評論社
          P26 を参考に尾上作成
        </p>
      </PrCard>
    </>
  )
}
