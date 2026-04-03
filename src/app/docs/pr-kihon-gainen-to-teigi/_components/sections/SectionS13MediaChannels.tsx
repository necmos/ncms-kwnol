import { PrCard } from '../PrCard'
import { PrDataTable } from '../PrDataTable'

const jpNewspapers = [
  '読売、朝日、毎日、産経、日本経済新聞、Fuji Sankei Business i、日刊工業新聞、日経産業新聞',
]

const jpMagazinesBiz = [
  '日経ビジネス、週刊東洋経済、週刊ダイヤモンド、週刊エコノミスト',
]

const jpTv = [
  'NHK、日本テレビ(NTV)、TBS、フジテレビ(CX)、テレビ朝日(EX)、テレビ東京(TX)',
]

const jpWire = ['共同通信、時事通信']

const jpOnline = ['Yahoo!ニュース、LINE NEWS、NewsPicks']

const worldNewspapers = [
  'Financial Times、The Wall Street Journal、The Times、The Guardian、The New York Times、Washington Post、International Herald Tribune/The Asahi Shimbun、The Nikkei Weekly、The Daily Yomiuri、The Japan Times、人民日報 など',
]

const worldMagazines = [
  'The Economist、BusinessWeek、Forbes、Fortune、Institutional Investor など',
]

const worldTv = ['CNN、ABC、BBC、NHK、CCTV、Al Jazeera など']

const worldWire = ['AP、Bloomberg、REUTERS、DOW JONES、新華社 など']

const nationalPaperRows = [
  ['読売新聞', '809万9445部', '13.57%'],
  ['朝日新聞', '557万9398部', '9.51%'],
  ['毎日新聞', '243万5647部', '4.12%'],
  ['日経新聞', '233万3087部', '3.84%'],
  ['産経新聞', '138万7011部', '2.28%'],
]

const industryPaperRows = [
  ['日経産業新聞', '132,505'],
  ['日刊工業新聞', '422,607'],
  ['Fuji Sankei Business i', '153,000'],
  ['日経MJ', '252,014'],
  ['日経ヴェリタス', '62,000'],
]

const bizWeeklyRows = [
  ['日経ビジネス', '170,427'],
  ['週刊ダイヤモンド', '101,167'],
  ['週刊東洋経済', '93,000'],
  ['週刊エコノミスト', '70,000'],
]

const weeklyMagRows = [
  ['週刊文春', '575,567'],
  ['週刊新潮', '384,488'],
  ['週刊現代', '366,000'],
  ['週刊朝日', '72,683'],
]

const femaleWeeklyRows = [
  ['女性セブン', '329,500'],
  ['女性自身', '328,300'],
  ['週刊女性', '196,227'],
]

const freePaperRows = [
  ['Hot Pepper（50版等含む）', '2,178,800'],
  ['サンケイリビング（首都圏14版）', '1,482,442'],
  ['TOWN WORK（104版等）', '2,258,300'],
]

const keyStationRows = [
  ['日本放送協会(NHK)', '68の放送局と支局'],
  ['日本テレビ(NTV)', '30局'],
  ['東京放送（TBS）', '28局'],
  ['フジテレビジョン（CX）', '28局'],
  ['テレビ朝日（EX）', '26局'],
  ['テレビ東京（TX）', '6局'],
]

export const SectionS13MediaChannels = () => {
  return (
    <>
      <PrCard variant="purple" title="日本の代表的マスメディア（例）">
        <p>
          <strong>新聞</strong>：{jpNewspapers[0]}
        </p>
        <p style={{ marginTop: 8 }}>
          <strong>雑誌</strong>：{jpMagazinesBiz[0]}
        </p>
        <p style={{ marginTop: 8 }}>
          <strong>テレビ・ラジオ</strong>：{jpTv[0]}
        </p>
        <p style={{ marginTop: 8 }}>
          <strong>通信</strong>：{jpWire[0]}
        </p>
        <p style={{ marginTop: 8 }}>
          <strong>オンライン</strong>：{jpOnline[0]}
        </p>
      </PrCard>

      <PrCard variant="purple" title="世界の代表的マスメディア（例）">
        <p>
          <strong>新聞</strong>：{worldNewspapers[0]}
        </p>
        <p style={{ marginTop: 8 }}>
          <strong>雑誌</strong>：{worldMagazines[0]}
        </p>
        <p style={{ marginTop: 8 }}>
          <strong>テレビ</strong>：{worldTv[0]}
        </p>
        <p style={{ marginTop: 8 }}>
          <strong>通信社</strong>：{worldWire[0]}
        </p>
      </PrCard>

      <PrCard variant="purple" title="新聞（日本）">
        <p>
          日本新聞協会調べ（2019年10月）では全国で
          <strong>3781万1248部</strong>
          が発行、1世帯あたり約
          <strong>0.66部</strong>
          。高い信頼性・情報量・社会的正義感。記事はオンラインやテレビへ波及しやすい。
        </p>
        <p className="muted-note" style={{ marginTop: 8 }}>
          出典：日本新聞協会ほか（講義スライド）
        </p>
        <p style={{ marginTop: 12, fontWeight: 700 }}>全国紙の販売部数・世帯普及率（朝刊、2019年1–6月平均）</p>
        <PrDataTable style={{ marginTop: 8 }}>
          <thead>
            <tr>
              <th className="purple-head">紙名</th>
              <th className="purple-head">部数</th>
              <th className="purple-head">世帯普及率</th>
            </tr>
          </thead>
          <tbody>
            {nationalPaperRows.map(([name, circ, rate]) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{circ}</td>
                <td>{rate}</td>
              </tr>
            ))}
          </tbody>
        </PrDataTable>
        <p className="muted-note" style={{ marginTop: 8 }}>
          出典：日本ABC協会「新聞発行社レポート 半期・普及率」2019年1–6月
        </p>
        <p style={{ marginTop: 12 }}>
          編集局には編成センター、政治部、経済部、社会部、国際部、文化部、科学部、写真部、地方部、編集委員室（解説）、校閲部など、面・テーマごとに専門部署・記者が配置される（例：読売新聞社東京本社）。
        </p>
      </PrCard>

      <PrCard variant="purple" title="日本の主要メディア — 新聞の規模（PR手帳2020 ほか）">
        <p>
          日刊紙（117紙）約4110万部。全国紙（朝日・毎日・読売・産経・日経）朝夕合計約2590万部。ブロック紙約420万部。ローカル紙（58紙）約1102万部。
        </p>
        <p style={{ marginTop: 12, fontWeight: 700 }}>産業・経済紙（部数）</p>
        <PrDataTable style={{ marginTop: 8 }}>
          <thead>
            <tr>
              <th className="purple-head">媒体名</th>
              <th className="purple-head">部数</th>
            </tr>
          </thead>
          <tbody>
            {industryPaperRows.map(([name, circ]) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{circ}</td>
              </tr>
            ))}
          </tbody>
        </PrDataTable>
      </PrCard>

      <PrCard variant="purple" title="雑誌（日本）">
        <p>
          日本雑誌協会加盟誌は約700種。週刊誌は企画から校了まで3〜4日程度。月刊は締切が約2ヶ月前、企画会議は3ヶ月前など長いリードタイム。季節企画（花粉症、新生活等）は毎年繰り返される。月刊に企画持ち込みは半年前でも早くないことも。
        </p>
        <p style={{ marginTop: 12, fontWeight: 700 }}>ビジネス週刊誌（部数）</p>
        <PrDataTable style={{ marginTop: 8 }}>
          <thead>
            <tr>
              <th className="purple-head">媒体名</th>
              <th className="purple-head">部数</th>
            </tr>
          </thead>
          <tbody>
            {bizWeeklyRows.map(([name, circ]) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{circ}</td>
              </tr>
            ))}
          </tbody>
        </PrDataTable>
        <p style={{ marginTop: 12, fontWeight: 700 }}>週刊誌（部数）</p>
        <PrDataTable style={{ marginTop: 8 }}>
          <thead>
            <tr>
              <th className="purple-head">媒体名</th>
              <th className="purple-head">部数</th>
            </tr>
          </thead>
          <tbody>
            {weeklyMagRows.map(([name, circ]) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{circ}</td>
              </tr>
            ))}
          </tbody>
        </PrDataTable>
        <p style={{ marginTop: 12, fontWeight: 700 }}>女性週刊誌（部数）</p>
        <PrDataTable style={{ marginTop: 8 }}>
          <thead>
            <tr>
              <th className="purple-head">媒体名</th>
              <th className="purple-head">部数</th>
            </tr>
          </thead>
          <tbody>
            {femaleWeeklyRows.map(([name, circ]) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{circ}</td>
              </tr>
            ))}
          </tbody>
        </PrDataTable>
        <p style={{ marginTop: 12, fontWeight: 700 }}>フリーペーパー（部数）</p>
        <PrDataTable style={{ marginTop: 8 }}>
          <thead>
            <tr>
              <th className="purple-head">媒体名</th>
              <th className="purple-head">部数</th>
            </tr>
          </thead>
          <tbody>
            {freePaperRows.map(([name, circ]) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{circ}</td>
              </tr>
            ))}
          </tbody>
        </PrDataTable>
        <p className="muted-note" style={{ marginTop: 8 }}>
          出典：日本パブリックリレーションズ協会『PR手帳2020』ほか（講義スライド）
        </p>
      </PrCard>

      <PrCard variant="purple" title="ラジオ">
        <p>
          <strong>機動力</strong>
          が強い。映像機材不要で電話取材のみの放送や、イベント現場からの生中継、緊急ニュース・災害情報にも対応。主婦・中小企業・自営業など生活密着・地域密着の切り口が好まれる。出演時は話し方が印象を左右する。
          <strong>1対1の対話感覚</strong>
          で、聴取者一人ひとりに話しかけるイメージが有効。
        </p>
      </PrCard>

      <PrCard variant="purple" title="テレビ">
        <p>
          <strong>速報性とインパクト</strong>
          が武器。生中継で即時性を出せる。映像・音声は文字では伝わりきらない臨場感を与える。
        </p>
        <p style={{ marginTop: 10 }}>
          <strong>時間的制約（非一覧性）</strong>
          ：視聴者は見たいニュースが流れるまで「待つ」必要があるため、冒頭で見出しを先に紹介する番組も増えた。
        </p>
        <p style={{ marginTop: 10 }}>
          <strong>印象が重視</strong>
          される。「面白い画」があるかが伝える側の関心事になり、実物を使った検証・解説が行われる背景でもある。
        </p>
        <p style={{ marginTop: 10 }}>
          <strong>ストレートニュース</strong>
          （その日の出来事）と
          <strong>特集</strong>
          （深掘り）。番組種別（報道、情報、ビジネス、生活、バラエティ、ドラマ等）ごとに打診先を想定する。
          <strong>後追いメディア</strong>
          でもあり、紙・雑誌で取り上げられた題材を扱うことも多い。「テレビを攻めるならまず紙」という進め方もある。
        </p>
        <p style={{ marginTop: 12, fontWeight: 700 }}>東京キー局と全国ネット（地上波・PR手帳2020）</p>
        <p className="muted-note">全国のローカルTV局数＝130</p>
        <PrDataTable style={{ marginTop: 8 }}>
          <thead>
            <tr>
              <th className="purple-head">TV局</th>
              <th className="purple-head">全国ネットワーク</th>
            </tr>
          </thead>
          <tbody>
            {keyStationRows.map(([name, net]) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{net}</td>
              </tr>
            ))}
          </tbody>
        </PrDataTable>
      </PrCard>

      <PrCard variant="purple" title="オンラインメディア">
        <p>
          Yahoo!等のポータル、各社の公式サイトに加え、オンラインメディア単独の存在感が高い。
          <strong>Yahoo!ニュースの月間PVは約50億</strong>
          規模で突出。新聞社もWeb読者獲得に注力。
        </p>
        <p style={{ marginTop: 10 }}>
          情報の流れの変化として、記者発表やプレスリリースは
          <strong>先にオンラインに掲載され、その後本紙に載る</strong>
          パターンが一般的になりつつある。
        </p>
        <p style={{ marginTop: 10 }}>
          インターネットニュース閲覧は
          <strong>40代以下で約9割前後</strong>
          （新聞通信調査会・第8回メディア世論調査2015）。閲覧サイトは
          <strong>ポータル約83%</strong>
          、
          <strong>新聞社公式サイト約13%</strong>
          （第8回2015／第9回2019の表記あり。講義では最新調査の参照を推奨）。
        </p>
        <p className="muted-note" style={{ marginTop: 8 }}>
          出典：公益財団法人 新聞通信調査会 ほか（講義スライド）
        </p>
      </PrCard>

      <PrCard variant="purple" title="ソーシャルメディア">
        <p>
          3.11以降、緊急時にも使えたTwitterを中心に、SNSによる情報発信が注目された。公式アカウント開設時は長所・短所と、
          <strong>組織としての運用が本当に必要か</strong>
          を見極めることが重要。既存ニュースの再加工で拡散が起きることも多い。
        </p>
        <p style={{ marginTop: 10, fontWeight: 700 }}>情報発信の長所</p>
        <ul style={{ marginTop: 6, paddingLeft: '1.25em' }}>
          <li>大きなコストをかけずに発信できる／比較的簡単に発信できる</li>
          <li>フォロワーへの一斉通知・伝達速度</li>
          <li>双方向コミュニケーション、緊急時の発信・収集</li>
        </ul>
        <p style={{ marginTop: 10, fontWeight: 700 }}>短所</p>
        <ul style={{ marginTop: 6, paddingLeft: '1.25em' }}>
          <li>投稿チェックやアカウント管理が疎かになりがち</li>
          <li>一次受信者はフォロワーに限られやすい／他投稿に紛れる</li>
          <li>マイナス情報・デマの瞬時拡散・炎上リスク</li>
          <li>運用次第では人手を長期間割くことになる</li>
        </ul>
        <p className="muted-note" style={{ marginTop: 8 }}>
          主要SNSのユーザー規模・フィード型／広場型の分類等：総務省「ICTによるインクルージョンの実現に関する調査研究」等（講義スライド）
        </p>
      </PrCard>

      <PrCard variant="purple" title="各メディアの比較・統計（講義の論点）">
        <p>
          情報量の増大、メディア接触時間の経年・属性別変化、ネットニュース閲読と新聞朝刊閲読の関係、
          <strong>メディア別の情報信頼度・印象</strong>
          など、図表で示される。民主主義における報道の自由、プライバシー保護とのバランスも世論調査で論じられる。
        </p>
        <p className="muted-note" style={{ marginTop: 8 }}>
          詳細数値は新聞通信調査会・総務省情報通信政策研究所・博報堂DYメディアパートナーズ等の原資料を参照（講義スライド）。
        </p>
      </PrCard>

      <PrCard variant="purple" title="主要日刊紙の発行部数 — 日・米・英・中の比較（例）">
        <PrDataTable style={{ marginTop: 8 }}>
          <thead>
            <tr>
              <th className="purple-head">国・媒体</th>
              <th className="purple-head">部数（サーキュレーション）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>日本 読売新聞（朝刊）</td>
              <td>8,099,445</td>
            </tr>
            <tr>
              <td>日本 朝日新聞</td>
              <td>5,579,398</td>
            </tr>
            <tr>
              <td>日本 毎日新聞</td>
              <td>2,435,647</td>
            </tr>
            <tr>
              <td>日本 日本経済新聞</td>
              <td>2,333,087</td>
            </tr>
            <tr>
              <td>日本 産経新聞</td>
              <td>1,387,011</td>
            </tr>
            <tr>
              <td>米国 USA Today</td>
              <td>1,621,091</td>
            </tr>
            <tr>
              <td>米国 Wall Street Journal</td>
              <td>1,011,200</td>
            </tr>
            <tr>
              <td>米国 The New York Times</td>
              <td>483,701</td>
            </tr>
            <tr>
              <td>英国 Financial Times</td>
              <td>383,067</td>
            </tr>
            <tr>
              <td>英国 The Guardian</td>
              <td>279,308</td>
            </tr>
            <tr>
              <td>中国 人民日報</td>
              <td>1,000,000</td>
            </tr>
            <tr>
              <td>中国 第一財経日報</td>
              <td>600,000</td>
            </tr>
          </tbody>
        </PrDataTable>
        <p className="muted-note" style={{ marginTop: 8 }}>
          出典：PR手帳2020・独自調査（講義スライド）。G7各国の人口当たり部数比較は『World
          Press Trends』等。
        </p>
      </PrCard>
    </>
  )
}
