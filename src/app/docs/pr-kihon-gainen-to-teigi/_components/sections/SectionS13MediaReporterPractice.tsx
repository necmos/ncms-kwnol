import { PrCard } from '../PrCard'
import { PrDataTable } from '../PrDataTable'

const spokespersonChecks = [
  '取材の目的は？',
  '取材のテーマは？',
  '記者の質問内容は？',
  '記者は会社やサービスについてどう思っているか？',
  'ターゲットとする相手は？',
  '今の取材場面は？（記者会見、対面取材、その他）',
  '自分の役割は？',
  '出口は紙かテレビ（生／録画）かオンラインか？',
  '原稿の締め切りは？',
]

const mediaProgramBasic = [
  '定例PR戦略会議',
  'プレスリリース作成',
  'プレスキット作成',
  'メディアリスト作成',
  'メディアブリーフィング',
  '個別インタビューのアレンジ',
  'モニタリング・クリッピング体制の構築',
  '記者会見',
  '記者懇親会',
]

const mediaProgramAdv = [
  'メディアトレーニング',
  'メディアキャラバン',
  'プレスツアー（国内・海外）',
  '講演機会創出',
  '各種調査リリース作成',
  '報道内容分析（CARMA）',
  '危機管理体制の構築 など',
]

const newsWontSell = [
  '事実の詰め込みすぎ',
  '意味のないデータ',
  '企業寄り・自己中心的な話し方',
  '曖昧・不明確なメッセージ',
  '複雑な議論や問題',
  '強引さ',
  '古いネタ',
  'インテリジェンスの欠如',
  '読者・視聴者がそもそも関心を持たないもの',
]

const newsWillSell = [
  '写真・絵・図表・映像・色',
  '感情的なドラマや争い、ヒューマン・ストーリー',
  '簡潔な情報、わかりやすいコンセプト',
  '恐怖感・スリル、新規性、奇抜な話題',
  '娯楽性・ゲームの要素、ユーモア、身近なニュース',
]

export const SectionS13MediaReporterPractice = () => {
  return (
    <>
      <PrCard variant="purple" title="日本のメディアシステムの特性">
        <ul style={{ marginTop: 8, paddingLeft: '1.25em' }}>
          <li>記者クラブのルールに沿った行動が一般的</li>
          <li>
            電話会議・電話インタビューは欧米ほど一般的ではなく、
            <strong>対面取材が基本</strong>
          </li>
          <li>
            複数メディア同席より、
            <strong>1対1の取材・インタビューを好む</strong>
            傾向（記者会見では質問が控えめな記者も）
          </li>
        </ul>
      </PrCard>

      <PrCard variant="purple" title="報道の種類">
        <p style={{ fontWeight: 700 }}>ストレートニュース</p>
        <ul style={{ marginTop: 6, paddingLeft: '1.25em' }}>
          <li>新規性・独自性の高い話題を重視</li>
          <li>素材の価値は時間とともに劣化</li>
          <li>知名度の高い人物、インパクトの大きい数字を前面に</li>
          <li>一テーマを短期間で集中的に取り上げる</li>
        </ul>
        <p style={{ marginTop: 12, fontWeight: 700 }}>特集・企画</p>
        <ul style={{ marginTop: 6, paddingLeft: '1.25em' }}>
          <li>背景・経緯を踏まえた詳細報道、準備に時間をかける</li>
          <li>多角的視点で全体像、解説・検証</li>
          <li>
            <strong>メディアとの良好な関係構築が、特集・企画記事づくりの鍵</strong>
          </li>
        </ul>
      </PrCard>

      <PrCard variant="purple" title="記者の置かれている環境">
        <ul style={{ marginTop: 8, paddingLeft: '1.25em' }}>
          <li>特ダネ・独自視点の特集で社内評価を得たい</li>
          <li>他社に先駆けた特落ちは避けたい</li>
          <li>チームワークもあるが、基本的には個人プレー</li>
          <li>毎日大量の情報の中から選び記事化</li>
          <li>取材したからといつも記事になるとは限らない（優先度・デスク判断）</li>
          <li>掲載前原稿の事前開示はできない</li>
          <li>所属メディアによって求める情報・スタイルが異なる</li>
        </ul>
      </PrCard>

      <PrCard variant="purple" title="記者の置かれている立場">
        <ul style={{ marginTop: 8, paddingLeft: '1.25em' }}>
          <li>国民のニーズがメディアのニーズ。読者・視聴者目線が重要</li>
          <li>記者が取り上げたい点 ≠ 売り込まれたい点（提灯記事は書きたくない）</li>
          <li>報道する意義があれば記事に。オフレコには危うさも</li>
          <li>取材源は秘匿し、ギブ＆テイクで関係を継続</li>
        </ul>
      </PrCard>

      <PrCard variant="purple" title="スポークスパーソンとして — 取材前の確認">
        <p>取材者の状況と背景を十分に理解する。</p>
        <PrDataTable style={{ marginTop: 10 }}>
          <thead>
            <tr>
              <th className="purple-head">確認項目</th>
            </tr>
          </thead>
          <tbody>
            {spokespersonChecks.map((text) => (
              <tr key={text}>
                <td>{text}</td>
              </tr>
            ))}
          </tbody>
        </PrDataTable>
      </PrCard>

      <PrCard variant="purple" title="メディア対応のコツ">
        <ul style={{ marginTop: 8, paddingLeft: '1.25em' }}>
          <li>
            常に読者・視聴者の視点に立ち、記者の背後にいる受信者に向けて話す
          </li>
          <li>事実を伝え、率直に分かりやすく答える</li>
          <li>プレッシャーで推測など迂闊な発言をしない</li>
          <li>一部でも報道されたくないことは言わない</li>
          <li>責任転嫁をしない</li>
        </ul>
      </PrCard>

      <PrCard variant="purple" title="PRライフサイクル・モデル">
        <p>
          PR活動の継続的プロセスであり、
          <strong>PRプラン立案の基本</strong>
          。井之上PRのコンサルテーション型サービスや、企業・政府・NPOの広報活動全体を把握するツールとして用いられる。
        </p>
        <p className="muted-note" style={{ marginTop: 8 }}>
          出典：井之上喬（2015）『パブリック・リレーションズ（第2版）』日本評論社
          P185 を参考に尾上作成（講義スライド）
        </p>
      </PrCard>

      <PrCard variant="purple" title="メディア・リレーションズプログラム — 基本">
        <ul style={{ marginTop: 8, paddingLeft: '1.25em' }}>
          {mediaProgramBasic.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </PrCard>

      <PrCard variant="purple" title="メディア・リレーションズプログラム — 応用">
        <ul style={{ marginTop: 8, paddingLeft: '1.25em' }}>
          {mediaProgramAdv.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </PrCard>

      <PrCard variant="purple" title="メディアトレーニングの主なメニュー">
        <ol style={{ marginTop: 8, paddingLeft: '1.25em' }}>
          <li>メディアトレーニングのアジェンダ設定</li>
          <li>会場・機材のセッティング</li>
          <li>メディア対応のポイントを講義</li>
          <li>現役・元記者による模擬インタビュー（1〜3名想定）</li>
          <li>撮影映像を踏まえたフィードバック・アドバイス（PRコンサルタント）</li>
        </ol>
      </PrCard>

      <PrCard variant="purple" title="ニュースを「売る」には">
        <p style={{ fontWeight: 700 }}>売れない理由（例）</p>
        <ul style={{ marginTop: 6, paddingLeft: '1.25em' }}>
          {newsWontSell.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <p style={{ marginTop: 12, fontWeight: 700 }}>売れる理由（例）</p>
        <ul style={{ marginTop: 6, paddingLeft: '1.25em' }}>
          {newsWillSell.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </PrCard>

      <PrCard variant="purple" title="ニュースバリューを高めるには">
        <ul style={{ marginTop: 8, paddingLeft: '1.25em' }}>
          <li>
            「世界初」「日本一」「○○首位」など、権威づけの枕詞
          </li>
          <li>時事に絡める（AI、オリンピック、台風など）</li>
          <li>
            環境変化や他社・他組織の事例に対する自社の取り組み・対策
          </li>
        </ul>
      </PrCard>

      <PrCard
        variant="purple"
        title={
          <>
            お薦めの一冊 <span className="lecture-badge l5">第5回推薦</span>
          </>
        }
      >
        <p style={{ marginTop: 8 }}>
          <strong>W.リップマン</strong>
          <br />
          『<strong>世論〈上〉</strong>』『<strong>世論〈下〉</strong>』岩波文庫、1987年
        </p>
        <p
          style={{
            marginTop: 8,
            fontSize: '0.85rem',
            color: 'var(--pr-gray-text)',
          }}
        >
          世論形成とメディアの関係を考える古典。講義スライド末尾の推薦図書。
        </p>
      </PrCard>
    </>
  )
}
