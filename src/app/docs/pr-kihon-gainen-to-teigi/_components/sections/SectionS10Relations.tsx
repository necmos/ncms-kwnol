import { PrSectionLabel } from "../PrSectionLabel";
import { SectionS10RelationsAssociation } from "./SectionS10RelationsAssociation";
import { SectionS10RelationsIntro } from "./SectionS10RelationsIntro";
import { SectionS10RelationsRelCards } from "./SectionS10RelationsRelCards";

export const SectionS10Relations = () => {
  return (
    <section id="s10">
      <PrSectionLabel
        num="10"
        sectionNumVariant="lecture4"
        title="様々なリレーションズ"
        badge={<span className="lecture-badge l4">第4回</span>}
      />

      <SectionS10RelationsIntro />
      <SectionS10RelationsRelCards />
      <SectionS10RelationsAssociation />
    </section>
  );
};
