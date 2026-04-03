import { PrCard } from "../PrCard";
import { PrCoronaCard, PrCoronaGrid } from "../PrCoronaGrid";
import { PrDataTable } from "../PrDataTable";
import { PrSectionLabel } from "../PrSectionLabel";

export const SectionS7Corona = () => {
  return (
    <section id="s7">
      <PrSectionLabel
        num="7"
        sectionNumVariant="lecture3"
        title="コロナが政治・経済・社会を変える"
        badge={<span className="lecture-badge l3">第3回 NEW</span>}
      />

      <PrCard variant="green" title="2020年：パンデミックがもたらした世界規模の変化">
        <p>
          2020年の新型コロナウイルス感染症（COVID-19）のパンデミックは、政治・経済・社会のあらゆる側面に影響を与えた。PRの視点から見ると、政府・企業・国際機関それぞれのコミュニケーション戦略の巧拙が如実に現れた事例である。
        </p>
      </PrCard>

      <p className="section-heading-green">
        ■ コロナ禍がもたらした国内の社会変化
      </p>
      <PrCoronaGrid>
        <PrCoronaCard title="🏥 医療・感染予防">
          <ul>
            <li>ソーシャルディスタンス・マスクの重要性</li>
            <li>医療資源の不足、PCR検査の不足</li>
            <li>防護服・フェイスシールドの不足</li>
            <li>新型コロナウイルス治療薬の迅速承認</li>
            <li>感染者接触アプリ（COCOA）の開発</li>
            <li>全国の約8割の病院で経営悪化</li>
          </ul>
        </PrCoronaCard>
        <PrCoronaCard title="🏛️ 行政">
          <ul>
            <li>特別定額給付金による家計の支援</li>
            <li>持続化給付金（中小企業200万円、個人事業主100万円）</li>
            <li>雇用調整助成金</li>
            <li>サプライチェーン改革</li>
            <li>東京オリンピック・パラリンピックの開催延期</li>
          </ul>
        </PrCoronaCard>
        <PrCoronaCard title="📚 教育・生活">
          <ul>
            <li>学校休校（3月〜5月）</li>
            <li>GIGAスクール構想前倒し、オンライン化へ</li>
            <li>大学オンライン授業（端末・ネットワーク環境に差）</li>
            <li>マスク・消毒液の不足、デマによるトイレットペーパー不足</li>
            <li>飲食等デリバリー利用の拡大</li>
          </ul>
        </PrCoronaCard>
        <PrCoronaCard title="💼 仕事・産業">
          <ul>
            <li>テレワーク推進（全国実施率27.9%、東京都49.1%）</li>
            <li>GDP：3、4月累計 -8.4%（リーマンショック上回る）</li>
            <li>観光業・飲食店・遊泳娯楽・イベント・スポーツに打撃</li>
            <li>非正規雇用の雇止めが加速</li>
          </ul>
        </PrCoronaCard>
      </PrCoronaGrid>

      <p className="section-heading-green">
        ■ コロナ禍がもたらした海外の社会変化
      </p>
      <PrCoronaGrid>
        <PrCoronaCard title="🌐 行政（海外）">
          <ul>
            <li>EU各国：賃金支援、個人事業主・スタートアップ支援</li>
            <li>中国：個人認証＋センシングシステム</li>
            <li>研究リソースの開放（スパコン、論文、知財）</li>
            <li>各国でワクチン開発、国際影響力の拡大が狙いも</li>
            <li>「デジタル入館証」シンガポール</li>
          </ul>
        </PrCoronaCard>
        <PrCoronaCard title="💼 仕事・産業（海外）">
          <ul>
            <li>テレワーク・デジタルトランスフォーメーション（DX）の推進</li>
            <li>世界の観光地が打撃</li>
            <li>世界の自動車産業：1000億ドル銀行融資</li>
            <li>製造革命（3Dプリンタ）：人工呼吸器・フェイスシールド</li>
            <li>米：失業率14.7%（4月）</li>
          </ul>
        </PrCoronaCard>
      </PrCoronaGrid>

      <PrCard variant="green" title="国内外識者（120名）による社会変化予測（抜粋）">
        <PrDataTable style={{ marginTop: 8 }}>
          <thead>
            <tr>
              <th className="green-head">分類</th>
              <th className="green-head">キーワード・予測</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>デジタルシフト</strong>
              </td>
              <td>コロナ禍による流れは不可逆的・加速</td>
            </tr>
            <tr>
              <td>
                <strong>グローバリゼーション</strong>
              </td>
              <td>
                後退という見方と、企業レベルではリスクヘッジのためますます分散を図るという見方
              </td>
            </tr>
            <tr>
              <td>
                <strong>政府の在り方</strong>
              </td>
              <td>
                危機下で国家の役割が拡大したが、収束後も維持（ベーシックインカム導入も）
              </td>
            </tr>
            <tr>
              <td>
                <strong>リモート化・オンライン化</strong>
              </td>
              <td>
                あらゆるコミュニケーションがオンライン化。人に会うのは本当に必要な一部。直接会った時の「ライブ感覚」の価値向上
              </td>
            </tr>
            <tr>
              <td>
                <strong>産業構造</strong>
              </td>
              <td>
                飲食業や観光業は業種規模としてかなり縮小。オンラインによる新ビジネスが次々登場
              </td>
            </tr>
            <tr>
              <td>
                <strong>技術開発</strong>
              </td>
              <td>
                人間の行動変化が技術革新をリード（人間中心）。
                <strong>倫理観</strong>
                がより重要に
              </td>
            </tr>
            <tr>
              <td>
                <strong>企業行動</strong>
              </td>
              <td>
                利益追求だけでなく、
                <strong>自然と共存する考え方</strong>
                へ。長期目線の経営
              </td>
            </tr>
            <tr>
              <td>
                <strong>雇用</strong>
              </td>
              <td>
                AI活用加速により余剰労働力が増加。逆に言えば、
                <strong>労働から解放された社会</strong>
                へ
              </td>
            </tr>
          </tbody>
        </PrDataTable>
        <p className="muted-note" style={{ marginTop: 8 }}>
          出所：国立研究開発法人新エネルギー・産業技術総合開発機構「コロナ禍後の社会変化と期待されるイノベーション像」（2020年6月24日）
        </p>
      </PrCard>
    </section>
  );
};
