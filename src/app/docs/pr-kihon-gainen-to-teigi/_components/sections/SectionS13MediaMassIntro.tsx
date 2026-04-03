import { PrCard } from '../PrCard'
import { PrDataTable } from '../PrDataTable'

export const SectionS13MediaMassIntro = () => {
  return (
    <>
      <PrCard variant="purple" title="パブリック・リレーションズの中のメディア・リレーションズ">
        <p>
          組織体がパブリック（ステークホルダー）と関係を築く活動の一つとして、
          <strong>メディア・リレーションズ</strong>
          は新聞・雑誌・通信社・ラジオ・テレビ・オンラインメディア等をターゲットとする。組織とパブリックの間にはオープンハウス、セミナー、ウェブコミュニケーション、トレードショー、社会貢献活動など多様な接点があるが、
          <strong>メディアを通じた情報流通</strong>
          は世論形成や認知拡大において中核的な役割を担う。
        </p>
        <p className="muted-note" style={{ marginTop: 10 }}>
          出典：井之上喬（2015）『パブリック・リレーションズ（第2版）』日本評論社
          P18–19 を参考に尾上作成（講義スライド）
        </p>
      </PrCard>

      <PrCard variant="purple" title="マスメディアの定義">
        <p>
          <strong>マスメディア（Mass Media）</strong>
          は、マスコミュニケーションの媒体となるもの。新聞、雑誌、通信、ラジオ、テレビに加え、オンラインメディアやソーシャルメディアなど、
          <strong>不特定多数の受容者（大衆）</strong>
          に向けて情報を伝達し世論を形成する機能を持つ。マスメディアによる情報の伝達行為がマスコミュニケーションであるが、日本では「マスコミュニケーション」を「マスコミ」と略し、マスメディアを指す用法が定着している。
        </p>
      </PrCard>

      <PrCard variant="purple" title="マスメディアの歴史（要点）">
        <ul style={{ marginTop: 8, paddingLeft: '1.25em' }}>
          <li>
            15世紀半ば、グーテンベルクの活版印刷が情報の同時発信と大量受信を可能にし、マスメディアの端緒とされる。1660年には世界初の日刊紙「ライプツィヒ新聞」創刊。
          </li>
          <li>
            19世紀、産業革命・教育普及に伴い欧米・日本で新聞・雑誌・書籍の大衆化が進展。
          </li>
          <li>
            1895年マルコーニの無線通信実験成功、1920年世界初のラジオ局（米）、1924年日本では東京放送局（NHK前身）設立、1925年本放送開始。
          </li>
          <li>
            1982年TCP/IP標準化、インターネット概念の拡大。1995年インターネット商業化完了。
          </li>
        </ul>
      </PrCard>

      <PrCard variant="purple" title="マスメディアの役割">
        <p>
          民主主義国では「表現の自由」「報道の自由」「知る権利」を支える存在。発信側には広報・広告の媒体、アドボカシーの場としての機能もある。受信側には政治・経済・社会の情報、娯楽、政治意識の涵養など。発信情報は正確性・公平性・公共性・倫理観が求められる。
        </p>
      </PrCard>

      <PrCard variant="purple" title="マスメディアの経営">
        <p>
          収益は主に
          <strong>広告料</strong>
          と
          <strong>受信者・読者への課金</strong>
          （購読料・受信料等）。新聞・雑誌は広告と読者の双方、公共放送は受信料、民放は広告、オンラインは広告＋購読の併用が多い。日本のメディアは不動産賃貸収入を持つ例もある（朝日ビル、中日ビル、赤坂サカス等）。
        </p>
      </PrCard>

      <PrCard variant="purple" title="マスメディアの種類">
        <PrDataTable style={{ marginTop: 8 }}>
          <thead>
            <tr>
              <th className="purple-head">区分</th>
              <th className="purple-head">例</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>紙媒体</td>
              <td>新聞、雑誌</td>
            </tr>
            <tr>
              <td>電波媒体</td>
              <td>ラジオ、テレビ</td>
            </tr>
            <tr>
              <td>インターネット媒体</td>
              <td>
                電子掲示板、ブログ、ポータル、オンラインメディア、動画共有、ソーシャルメディア、キュレーションメディア など
              </td>
            </tr>
          </tbody>
        </PrDataTable>
        <p className="muted-note" style={{ marginTop: 8 }}>
          広義には書籍・音楽・映画なども含められる。
        </p>
      </PrCard>

      <PrCard variant="purple" title="各メディアの特徴（紙・電波・ネット）">
        <PrDataTable style={{ marginTop: 8 }}>
          <thead>
            <tr>
              <th className="purple-head">媒体</th>
              <th className="purple-head">特徴</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>紙（新聞・雑誌）</strong>
              </td>
              <td>
                日本では新聞が特に重要ターゲット。活字のため記録に残りやすい。一テーマを深く継続的に伝える傾向。
              </td>
            </tr>
            <tr>
              <td>
                <strong>電波（ラジオ・テレビ）</strong>
              </td>
              <td>
                紙と同等以上の重要性。映像・音声でインパクトが大きい。短期集中で話題化しやすい。
              </td>
            </tr>
            <tr>
              <td>
                <strong>インターネット</strong>
              </td>
              <td>
                絶えず更新（過去情報はデジタル上に残る）。最大の特性は
                <strong>即時性</strong>と<strong>拡散性</strong>
                。IT分野では特に重要。
              </td>
            </tr>
          </tbody>
        </PrDataTable>
      </PrCard>
    </>
  )
}
