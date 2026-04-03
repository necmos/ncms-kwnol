import { PrCard } from "../PrCard";
import { PrDataTable } from "../PrDataTable";
import {
  PrRmArrow,
  PrRmBox,
  PrRmFlow,
  PrRmRow,
} from "../PrRmFlow";
import { PrSectionLabel } from "../PrSectionLabel";

const roleTags = [
  "A Husband / 夫",
  "A Citizen / 市民",
  "A Stockholder / 株主",
  "A Consumer / 消費者",
  "A Taxpayer / 納税者",
  "An Employee / 会社員",
  "A Neighbor / 隣人",
  "A Car Owner / 自動車オーナー",
  "A Reader / 読者",
  "A Father / 父",
  "A Voter / 有権者",
  "A Music Lover / 音楽好家",
];

export const SectionS12Rm = () => {
  return (
    <section id="s12">
      <PrSectionLabel
        num="12"
        sectionNumVariant="lecture4"
        title="リレーションシップ・マネジメント"
        badge={<span className="lecture-badge l4">第4回</span>}
      />

      <PrCard variant="orange" title="個人とパブリックの情報結節点">
        <p>
          1人の人間は同時に多様な社会的役割を担っている。たとえば同じ人物でも、
          <strong>消費者</strong>
          であり、
          <strong>株主</strong>
          であり、
          <strong>従業員</strong>
          であり、
          <strong>市民</strong>
          でもある。PRはこの多層的な関係性を理解した上でコミュニケーション戦略を立てる必要がある。
        </p>
        <div className="sh-tags" style={{ marginTop: 12 }}>
          {roleTags.map((t) => (
            <span key={t} className="sh-tag">
              {t}
            </span>
          ))}
        </div>
        <p className="muted-note" style={{ marginTop: 10, fontSize: "0.78rem" }}>
          出典：&quot;This is PR&quot;, 1999 Wadsworth/Thomson Learning 1999.
        </p>
      </PrCard>

      <PrCard variant="orange" title="一般的なリレーションシップ・マネジメントの流れ">
        <PrRmFlow>
          <PrRmRow>
            <PrRmBox
              variant="sender"
              label="情報発信者"
              title="企業・組織体"
              detail="国内企業・海外企業・政府機関・業界団体・NGO/NPO など"
            />
            <PrRmArrow />
            <PrRmBox
              variant="media-box"
              label="コミュニケーション・チャンネル"
              title="メディア"
              detail="オンラインメディア、ラジオ、テレビ、通信社、新聞、雑誌"
            />
            <PrRmArrow />
            <PrRmBox
              variant="public"
              label="受信者"
              title="様々なパブリック"
              detail="一般消費者、株主、顧客、投資機関、ビジネスパートナー、アナリスト、ディストリビュータ、中央政府機関、地方自治体、国際機関、業界団体、従業員、従業員家族、地域社会 など"
            />
          </PrRmRow>
          <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
            <div
              className="rm-box"
              style={{
                flex: 1,
                border: "2px solid var(--pr-border)",
                fontSize: "0.83rem",
              }}
            >
              <strong>自社標準による評価：</strong>
              ニュースクリッピングによるメディア露出の把握と評価
            </div>
          </div>
        </PrRmFlow>
      </PrCard>

      <PrCard variant="orange" title="プロフェッショナルなリレーションシップ・マネジメント">
        <p
          style={{
            marginBottom: 14,
            color: "var(--pr-gray-text)",
            fontSize: "0.87rem",
          }}
        >
          PRコンサルタントが介在することで、より戦略的かつ科学的なリレーションシップ管理が実現する。
        </p>
        <PrDataTable>
          <thead>
            <tr>
              <th className="orange-head">要素</th>
              <th className="orange-head">一般的なRM</th>
              <th className="orange-head">プロフェッショナルなRM</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>体制</strong>
              </td>
              <td>組織体のみで管理</td>
              <td>
                組織体 ＋ <strong>PRコンサルタント</strong>
                が協働
              </td>
            </tr>
            <tr>
              <td>
                <strong>機能</strong>
              </td>
              <td>自社標準による評価・ニュースクリッピング</td>
              <td>
                自己修正機能・双方向コミュニケーション・
                <strong>統計手法による分析・評価</strong>
                ・ニュースクリッピング
              </td>
            </tr>
            <tr>
              <td>
                <strong>戦略展開</strong>
              </td>
              <td>個別・断片的な対応</td>
              <td>
                PR戦略として統合: メディア・リレーションズ戦略 ＋
                カスタマー・リレーションズ戦略 ＋ ガバメント・リレーションズ戦略 ＋
                インベスター・リレーションズ戦略 ＋ エンプロイー・リレーションズ戦略 ＋
                コミュニティー・リレーションズ戦略
              </td>
            </tr>
            <tr>
              <td>
                <strong>フィードバック</strong>
              </td>
              <td>限定的・主観的</td>
              <td>
                様々なパブリックから体系的にフィードバックを収集・分析し、次の戦略に活かす
              </td>
            </tr>
          </tbody>
        </PrDataTable>
      </PrCard>

      <PrCard
        variant="orange"
        title={
          <>
            お薦めの一冊 <span className="lecture-badge l4">第4回推薦</span>
          </>
        }
      >
        <p style={{ marginTop: 8 }}>
          <strong>
            スコット・M・カトリップ，アレン・H・センター，グレン・M・ブルーム
          </strong>
          <br />
          『<strong>体系 パブリック・リレーションズ</strong>
          』ピアソンエデュケーション，2008年
        </p>
        <p
          style={{
            marginTop: 8,
            fontSize: "0.85rem",
            color: "var(--pr-gray-text)",
          }}
        >
          原題：
          <em>Effective Public Relations</em>
          （9th
          edition）。PRの古典的教科書として世界的に広く使われる標準テキスト。カトリップ・センター・ブルームの3名による共著で、PRの理論・実践・倫理を体系的に解説している。
        </p>
      </PrCard>
    </section>
  );
};
