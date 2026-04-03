import { PrSectionLabel } from '../PrSectionLabel'

import { SectionS13MediaChannels } from './SectionS13MediaChannels'
import { SectionS13MediaMassIntro } from './SectionS13MediaMassIntro'
import { SectionS13MediaReporterPractice } from './SectionS13MediaReporterPractice'

export const SectionS13MediaRelations = () => {
  return (
    <section id="s13">
      <PrSectionLabel
        num="13"
        sectionNumVariant="lecture5"
        title="メディア・リレーションズ"
        badge={<span className="lecture-badge l5">第5回</span>}
      />

      <SectionS13MediaMassIntro />
      <SectionS13MediaChannels />
      <SectionS13MediaReporterPractice />
    </section>
  )
}
