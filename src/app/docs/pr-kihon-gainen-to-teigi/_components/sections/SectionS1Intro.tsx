import { PrCard } from '../PrCard'
import { PrDataTable } from '../PrDataTable'
import { PrSectionLabel } from '../PrSectionLabel'

export const SectionS1Intro = () => {
  return (
    <section id="s1">
      <PrSectionLabel
        num="1"
        title="はじめに"
        badge={
          <span className="lecture-badge">第2回 + 第3回 + 第4回 + 第5回</span>
        }
      />

      <PrCard title="第2回授業（10/8）の目的">
        <p>
          パブリック・リレーションズ（PR）の基本概念を理解し、次世代を担う学生にとってPRが重要な知識であることを学ぶ。また、他の先進国の現状を知ると共に、
          <strong>日本がPR分野で遅れをとっているのは何故か</strong>
          、遅れが具体的にどのような形で日本や日本企業に影響を与えているのかを理解し、認識を深める。
        </p>
      </PrCard>

      <PrCard variant="green" title="第3回授業（10/15）の目的">
        <p>
          京都大学経営管理大学院の<strong>井之上喬 特命教授</strong>
          をゲスト講師としてお招きし、20世紀に世界最強の経済・軍事大国になった米国におけるPR概念の変遷を学んだ上で、組織体が如何にPRを必要とし、意思決定の中に組み込むに至ったかを学習する。また、日本にはいつどのようにPRが導入されたか、PRの発展の遅れにより日本がどのような不利益を受けたかを理解し、将来どのような対応が必要かを考える。
        </p>
      </PrCard>

      <PrCard
        variant="orange"
        title={
          <>
            第4回授業（10/22）の目的{' '}
            <span className="lecture-badge l4">第4回</span>
          </>
        }
      >
        <p>
          パブリック・リレーションズ（PR）の傘の下にある、
          <strong>メディア・リレーションズ</strong>
          を始め、
          <strong>インベスター・リレーションズ（IR）</strong>、
          <strong>ガバメント・リレーションズ（GR）</strong>
          など様々なリレーションズについて詳しく学ぶと共に、企業内で2つに大別されることの多い
          <strong>コーポレート・コミュニケーション</strong>
          及び
          <strong>マーケティング・コミュニケーション</strong>
          との位置付けを確認する。また、個人や組織体の
          <strong>リレーションシップ・マネジメント</strong>
          と、プロフェッショナルが関わった場合のリレーションシップ・マネジメントのあり方との相違点についても理解を深める。
        </p>
      </PrCard>

      <PrCard
        variant="purple"
        title={
          <>
            第5回授業（10/29）の目的{' '}
            <span className="lecture-badge l5">第5回</span>
          </>
        }
      >
        <p>
          パブリック・リレーションズの<strong>コア・コンピタンス</strong>
          となる
          <strong>メディア・リレーションズ</strong>
          について集中的に学ぶ。マスメディアの本質を理解し、各種マスメディアの特性を押さえると共に、各メディアの特色を知る。また、メディア・リレーションズの特徴を理解するとともに、
          <strong>メディアと良好な関係を構築する手法</strong>
          を確認する。
        </p>
      </PrCard>

      <PrCard
        variant="purple"
        title={
          <>
            前回（第4回）授業の質問 Q&A{' '}
            <span className="lecture-badge l5">第5回冒頭</span>
          </>
        }
      >
        <PrDataTable style={{ marginTop: 8 }}>
          <thead>
            <tr>
              <th className="purple-head">質問（学生）</th>
              <th className="purple-head">回答（井之上先生より）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Q1（高等学院2年 戸嶋丈）</strong>
                <br />
                エンプロイー・リレーションズに関しての質問です。昨今、日本では外国人労働者の増加が著しいですが、いくつかの企業では低賃金労働や労働環境の劣悪さ、コミュニケーション不足など多くの問題が指摘されています。そこで反対に、外国人労働者に対するエンプロイーリレーションズを重視し、上手く対処できている企業の例をお教えいただけたらと思います。
              </td>
              <td>（当日の講義・口頭補足）</td>
            </tr>
          </tbody>
        </PrDataTable>
      </PrCard>

      <PrCard
        variant="orange"
        title={
          <>
            前回（第3回）授業の質問 Q&A{' '}
            <span className="lecture-badge l4">第4回冒頭</span>
          </>
        }
      >
        <PrDataTable style={{ marginTop: 8 }}>
          <thead>
            <tr>
              <th className="orange-head">質問（学生）</th>
              <th className="orange-head">回答（井之上先生より）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Q1（文化構想学部1年 佐藤優音）</strong>
                <br />
                G7の中で日本が突出して企業の不祥事が多いのは、ハイコンテキスト社会であることと関係しているか？
              </td>
              <td>
                日本企業は集団で物事を隠す傾向が強く、ハイコンテキスト型の
                <strong>以心伝心・忖度・同調圧力</strong>
                に起因している。個々人に<strong>倫理観</strong>
                があればはねのける力を得られるが、日本社会には倫理観が希薄で「双方向性」環境が見られず「自己修正」に至らないケースが多い。他のG7国はキリスト教を社会基盤としており、日本はいわゆるバックボーンがない状態といえる。
              </td>
            </tr>
            <tr>
              <td>
                <strong>Q2（高等学院2年 木村勇翔）</strong>
                <br />
                河野太郎・行政改革担当大臣のTwitterでの情報発信、双方向性コミュニケーション・実行力からPR活動をどのように評価できるか？
              </td>
              <td>
                河野大臣は海外留学経験者であり、オープンマインドがある政治家。民主主義が何であるかを理解し、実践しようとする姿勢が見られる。他の政治家よりも
                <strong>
                  パブリック・リレーションズが何であるかを理解している
                </strong>
                方だといえる。
              </td>
            </tr>
          </tbody>
        </PrDataTable>
      </PrCard>
    </section>
  )
}
