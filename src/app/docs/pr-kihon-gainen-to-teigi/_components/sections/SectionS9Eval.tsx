import { PrCard } from '../PrCard'
import { PrDataTable } from '../PrDataTable'
import { PrEvalCard, PrEvalGrid } from '../PrEvalGrid'
import { PrSectionLabel } from '../PrSectionLabel'

export const SectionS9Eval = () => {
  return (
    <section id="s9">
      <PrSectionLabel
        num="9"
        title="授業の評価・参考図書"
        badge={<span className="lecture-badge">第2・3回</span>}
      />

      <PrEvalGrid>
        <PrEvalCard pct="60%">
          <>
            試験
            <br />
            （期末のみ）
          </>
        </PrEvalCard>
        <PrEvalCard pct="30%">
          <>
            授業出席
            <br />
            発言・受講態度
          </>
        </PrEvalCard>
        <PrEvalCard pct="10%">
          <>
            レポート提出
            <br />
            （2回）
          </>
        </PrEvalCard>
      </PrEvalGrid>

      <PrCard title="感想レポート①「パブリック・リレーションズ概論を受講するにあたって」">
        <PrDataTable style={{ marginTop: 8 }}>
          <thead>
            <tr>
              <th>#</th>
              <th>設問</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>①</td>
              <td>
                PRに対してどのようなイメージを持っているか？PRの何をつかみたいか？
              </td>
            </tr>
            <tr>
              <td>②</td>
              <td>
                どういった分野（ビジネス、政治、行政、NPO、教育・研究など）に興味を持っているか？
              </td>
            </tr>
            <tr>
              <td>③</td>
              <td>自分の人生シナリオをどのように描いているか？</td>
            </tr>
          </tbody>
        </PrDataTable>
        <p
          style={{
            marginTop: 12,
            fontSize: '0.86rem',
            color: 'var(--pr-gray-text)',
          }}
        >
          📅 提出期限：第5回授業 10月29日（木）5限まで ／ Word（A4）1000字程度
          <br />※ 提出は成績評価対象だが、内容の優劣は評価対象としない
        </p>
      </PrCard>

      <PrCard variant="green" title="参考図書・お薦め">
        <PrDataTable style={{ marginTop: 8 }}>
          <thead>
            <tr>
              <th className="green-head">書籍</th>
              <th className="green-head">備考</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>井之上喬『パブリックリレーションズ（第2版）』</strong>
                <br />
                日本評論社, 2015
              </td>
              <td>
                必読の一冊。テキスト。「パブリック・リレーションズは経営そのものだ。」
              </td>
            </tr>
            <tr>
              <td>
                <strong>井之上喬『「説明責任」とは何か』</strong>
                <br />
                PHP新書, 2009
              </td>
              <td>第2回お薦め。メディア戦略の視点から考える。</td>
            </tr>
            <tr>
              <td>
                <strong>エドワード・バーネイズ『プロパガンダ[新版]』</strong>
                <br />
                成甲書房, 2010
              </td>
              <td>
                第3回お薦め。PRの父バーネイズによる古典的名著。PRとプロパガンダの境界を考える上で必読。
              </td>
            </tr>
            <tr>
              <td>
                <strong>
                  Inoue, Takashi.{' '}
                  <em>Public Relations in Hyper-globalization</em>
                </strong>
                <br />
                Routledge, 2018
              </td>
              <td>英語版。ハイパーグローバル化時代のPR理論。</td>
            </tr>
            <tr>
              <td>
                <strong>
                  スコット・M・カトリップ，アレン・H・センター，グレン・M・ブルーム
                  <br />
                  『体系 パブリック・リレーションズ』
                </strong>
                ピアソンエデュケーション, 2008
              </td>
              <td>
                第4回お薦め。PR世界標準テキスト（Effective Public Relations 9th
                edition）。PRの理論・実践・倫理を体系的に解説。
              </td>
            </tr>
          </tbody>
        </PrDataTable>
      </PrCard>
    </section>
  )
}
