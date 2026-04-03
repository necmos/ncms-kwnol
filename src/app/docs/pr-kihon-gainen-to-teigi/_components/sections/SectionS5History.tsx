import { PrCard } from '../PrCard'
import { PrDataTable } from '../PrDataTable'
import { PrGuestCard } from '../PrGuestCard'
import { PrSectionLabel } from '../PrSectionLabel'
import { PrTimeline, PrTimelineItem } from '../PrTimeline'

export const SectionS5History = () => {
  return (
    <section id="s5">
      <PrSectionLabel
        num="5"
        sectionNumVariant="lecture3"
        title="PRの歴史的背景：米国・日本の発展史"
        badge={<span className="lecture-badge l3">第3回 NEW</span>}
      />

      <PrGuestCard
        name="井之上 喬（いのうえ・たかし）"
        title="京都大学経営管理大学院 特命教授 ／ 株式会社井之上パブリックリレーションズ 代表取締役会長兼CEO"
        introParagraphs={[
          <>
            早稲田大学第一商学部卒業、早稲田大学大学院公共経営研究科博士後期課程修了（博士・公共経営）。日本楽器製造株式会社（現ヤマハ株式会社）を経て、1970年に（株）井之上パブリックリレーションズを設立。以来、インテルやアップルをはじめとして広範なPRコンサルテーション業務を手がける。
          </>,
          <>
            日本の通信市場開放や日米半導体摩擦の解消、激化する日米自動車摩擦の中で国内自動車部品市場の規制緩和プログラムに貢献。アジアのPR協会として初めて国際PR協会からゴールデンワールドアワードの最優秀グランプリを授与される（1997年）。
          </>,
        ]}
        booksTitle="主な著作"
        books={[
          '『入門・パブリックリレーションズ』（PHP研究所, 2001）',
          '『パブリック・リレーションズ』（日本評論社, 2006）',
          '『「説明責任」とは何か』（PHP研究所, 2009）',
          '『パブリック・リレーションズ 第2版』（日本評論社, 2015）',
          <>
            <em>
              Public Relations in Hyper-globalization: Essential Relationship
              Management – A Japan Perspective
            </em>
            （Routledge, 2018）
          </>,
        ]}
      />

      <PrCard variant="green" title="米国におけるPRの発展史">
        <p style={{ marginBottom: 16 }}>
          パブリック・リレーションズが意識されはじめたのは
          <strong>20世紀初頭</strong>
          。米国における7つの成長・成熟過程（『エフェクティブ・PR』より）。
        </p>
      </PrCard>

      <PrTimeline>
        <PrTimelineItem year="① 1900–1917" title="床苗期（Seedbed Era）">
          PRの誕生前夜。産業化・都市化が進む中、メディアや世論に対する企業・政府の対応が模索され始めた時期。
        </PrTimelineItem>
        <PrTimelineItem year="② 1917–1919" title="第一次世界大戦期">
          戦争広報委員会（クリール委員会）が大規模な世論形成を実施。PRが国家戦略として活用された最初の事例。
        </PrTimelineItem>
        <PrTimelineItem year="③ 1919–1929" title="第一急成長期">
          エドワード・バーネイズらがPRを専門職として確立。1923年に世界初のPRの教科書を執筆。企業PR活動が急拡大。
        </PrTimelineItem>
        <PrTimelineItem year="④ 1930–1945" title="大恐慌から第二次世界大戦期">
          経済危機・戦時下でPRが社会安定に活用。政府・企業双方でコミュニケーションの重要性が認識された。
        </PrTimelineItem>
        <PrTimelineItem year="⑤ 1945–1965" title="第二急成長期">
          戦後の経済成長とともにPR産業が急拡大。1950年に19,000人だった米国PR実務家は1965年には急増し、PRが企業経営の中核機能となる。
        </PrTimelineItem>
        <PrTimelineItem year="⑥ 1965–1985" title="抗議運動と市民運動の時代">
          公民権運動・ベトナム反戦・環境運動など市民の声が台頭。PRが双方向コミュニケーションとしての性格を強め、アカウンタビリティが重視されるように。ウォーターゲート事件（1972年）はPR倫理の転換点となった。
        </PrTimelineItem>
        <PrTimelineItem
          isLast
          year="⑦ 1986年〜"
          title="デジタル時代とグローバリゼーション"
        >
          インターネット・SNSの普及によりPRはリアルタイム性・双方向性が飛躍的に向上。グローバル規模でのリレーションシップ・マネジメントが求められる時代へ。2002年時点で米国PR実務家は228,000人に達した。
        </PrTimelineItem>
      </PrTimeline>

      <PrCard
        variant="green"
        style={{ marginTop: 8 }}
        title="日本におけるPRの発展史"
      >
        <p style={{ marginBottom: 4 }}>
          戦前の満鉄（1923年・大正12年）に「弘報係」が置かれたことが日本PRの萌芽。戦後GHQによるPR導入を経て現在に至る。
        </p>
      </PrCard>

      <PrDataTable className="jp-hist-table">
        <thead>
          <tr>
            <th className="green-head">時代区分</th>
            <th className="green-head">特長・目的</th>
            <th className="green-head">問題点</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>① 1925〜1945年</strong>
              <br />
              <small>昭和初期〜第2次世界大戦終結（PRの萌芽期）</small>
            </td>
            <td>
              プロパガンダ型（富国強兵のための）
              <br />
              目的：大衆操作
            </td>
            <td>言論の自由を抑え、世論操作を行った</td>
          </tr>
          <tr>
            <td>
              <strong>② 1947〜1952年</strong>
              <br />
              <small>GHQによる行政への導入期</small>
            </td>
            <td>
              パブリック・インフォメーション型（一方向性コミュニケーション）
              <br />
              目的：GHQが占領政策を遂行するため
            </td>
            <td>
              「お知らせ」一辺倒でPRの概念・機能を誤らせた。パブリック・インフォメーションとの混同、1952年のサンフランシスコ講和条約によるGHQ引き揚げとともにPRはその求心力を急速に失った
            </td>
          </tr>
          <tr>
            <td>
              <strong>③ 1950年代〜</strong>
              <br />
              <small>米国型PRの啓発期</small>
            </td>
            <td>
              PR広告・パブリシティ型（一方向性コミュニケーション）
              <br />
              目的：企業が社会的認容を得るため
            </td>
            <td>
              証券取引所の再開（1949）や日経連が戦後初の「経営視察団」を米国に派遣（1951）したことにより企業内に広報部門が設置。しかしPRの本来の理念や概念が浸透せず、広告代理店内にPR部門が開設されたため
              <strong>PR＝広告・パブリシティとの誤解</strong>
              を招いた
            </td>
          </tr>
          <tr>
            <td>
              <strong>④ 1950年代後半〜1990年</strong>
              <br />
              <small>高度経済成長時代におけるPRの低迷期</small>
            </td>
            <td>
              パブリシティ型（国際レベルの一方向性コミュニケーション）
              <br />
              目的：大量生産・大量消費のサイクルを創るための販売促進
            </td>
            <td>
              マーケティングPRに特化しすぎ、広範なPR実践のための技術が導入されず。企業不祥事・公害問題、海外では貿易摩擦（半導体・自動車）に代表される問題が露呈
            </td>
          </tr>
          <tr>
            <td>
              <strong>⑤ 1991年〜</strong>
              <br />
              <small>グローバルPRへの過渡期（バブル崩壊後）</small>
            </td>
            <td>
              コーポレート・コミュニケーション（C.C.）型（双方向性コミュニケーション）
              <br />
              目的：コーポレート・シチズンを目指す
            </td>
            <td>
              グローバル化の中で、日本の行政や経営システムの制度疲労と自己修正機能をもつ双方向性コミュニケーションが未成熟
            </td>
          </tr>
          <tr>
            <td>
              <strong>⑥ 2011年〜</strong>
              <br />
              <small>
                東日本大震災以降、多極化が進展する世界で新たなPRモデルが求められる
              </small>
            </td>
            <td>
              グローバルコミュニケーション型（双方向性コミュニケーション）
              <br />
              目的：グローバル視点で価値の共有化を図る（CSV）
            </td>
            <td>
              グローバル化の中で、その基盤となるPRが未成熟かつダイバーシティなどの受入れ素地がない
            </td>
          </tr>
        </tbody>
      </PrDataTable>
      <p className="muted-note" style={{ marginTop: -8, marginBottom: 18 }}>
        出所：井之上喬「パブリック・リレーションズ」第2版（日本評論社,
        2015）p.90
      </p>
    </section>
  )
}
