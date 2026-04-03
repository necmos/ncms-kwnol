import { PrSectionLabel } from '../PrSectionLabel'

import { SectionS11CommCompare } from './SectionS11CommCompare'
import { SectionS11CommRelationsTable } from './SectionS11CommRelationsTable'
import { SectionS11CommReputationTable } from './SectionS11CommReputationTable'

export const SectionS11Comm = () => {
  return (
    <section id="s11">
      <PrSectionLabel
        num="11"
        sectionNumVariant="lecture4"
        title="コーポレート・コミュニケーションとマーケティング・コミュニケーション"
        badge={<span className="lecture-badge l4">第4回</span>}
      />

      <SectionS11CommCompare />
      <SectionS11CommReputationTable />
      <SectionS11CommRelationsTable />
    </section>
  )
}
