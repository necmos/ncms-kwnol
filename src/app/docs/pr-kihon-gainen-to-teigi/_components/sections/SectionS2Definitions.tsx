import { PrCard } from '../PrCard'
import { PrDefBox } from '../PrDefBox'
import { PrDefHighlight } from '../PrDefHighlight'
import { PrInoueDef } from '../PrInoueDef'
import { PrSectionLabel } from '../PrSectionLabel'

export const SectionS2Definitions = () => {
  return (
    <section id="s2">
      <PrSectionLabel
        num="2"
        title="パブリック・リレーションズの基本概念と定義"
        badge={<span className="lecture-badge">第2回</span>}
      />

      <PrCard title="PRとは何の略か？">
        <p className="pr-inline-strong">
          PR ≠ Promotion（宣伝・プロモーション）
          <br />
          <span className="pr-inline-blue">
            PR ＝ Public Relations（パブリック・リレーションズ）
          </span>
        </p>
      </PrCard>

      <PrDefBox
        yearTag="1976年 — レックス・F・ハーロウ（スタンフォード大学教授）"
        quote={
          <>
            「パブリック・リレーションズが、一企業体とパブリック（一般社会）との間の相互のコミュニケーション、理解、合意、協力関係の樹立、維持を助け、課題に対する論争に経営者を巻き込み、経営者に世論の動向を知らせ、その対処を助け、パブリックの利益に奉仕するための経営者の責任をはっきりと認識させ、社会の趨勢を予知するための警報システムとして経営者と一体となって変化を有効に利用し、さらにその最も重要なツールとして調査と健全かつ倫理に沿ったコミュニケーションに利用する、
            <strong>マネジメント（管理）機能の役割を果たすものである。</strong>
            」
          </>
        }
        source="— レックス・F・ハーロウ（1976年）"
      />

      <PrDefBox
        yearTag="1982年 — 米国パブリックリレーションズ協会（PRSA）"
        quote={
          <>
            「パブリック・リレーションズは、各種団体、機関の相互理解に貢献することによって多元的社会が意思決定を行い、より効果的に機能することに貢献するものである。また、パブリック・リレーションズはわれわれの社会のさまざまな団体、組織に奉仕するものであり、これらの団体・組織がそれぞれの目標を達成するためには、従業員、会員、顧客、地方企業、株主などそれぞれ違った分野のパブリック、すなわち
            <strong>
              社会全体と効果的な関係を育てていかなければならない。
            </strong>
            」
          </>
        }
        source="— PRSA（1982年）"
      />

      <PrDefHighlight
        label="✦ 現行定義（2012年）— PRSA最新・世界標準"
        en='"Public relations is a strategic communication process that builds mutually beneficial relationships between organizations and their publics."'
        ja={
          <>
            「パブリック・リレーションズは
            <strong>
              組織とそれを取り巻く様々なパブリックとの間の相互関係を有益なものとするための戦略的なコミュニケーション・プロセス
            </strong>
            である」
          </>
        }
        source="— 米国パブリックリレーションズ協会（PRSA）2012年"
      />

      <PrInoueDef
        title="井之上 喬による定義（日本を代表するPR研究者・実務家）"
        core="個人や組織体が最短距離で目標や目的を達成する"
        keywordsBlock={
          <div style={{ margin: '14px 0' }}>
            <div className="keyword">『倫理観』</div>
            <div className="connector">に支えられた</div>
            <div className="keyword" style={{ marginTop: 10 }}>
              『双方向性コミュニケーション』
            </div>
            <div className="connector">と</div>
            <div className="keyword" style={{ marginTop: 10 }}>
              『自己修正』
            </div>
            <div className="connector">
              をベースとした リレーションズ活動である
            </div>
          </div>
        }
        source="— 井之上 喬（井之上パブリックリレーションズ 代表取締役会長兼CEO）"
      />
    </section>
  )
}
