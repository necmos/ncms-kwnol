import { PrFooter } from './_components/PrFooter'
import { PrHeader } from './_components/PrHeader'
import { PrStickyNav } from './_components/PrStickyNav'
import { SectionS10Relations } from './_components/sections/SectionS10Relations'
import { SectionS11Comm } from './_components/sections/SectionS11Comm'
import { SectionS12Rm } from './_components/sections/SectionS12Rm'
import { SectionS1Intro } from './_components/sections/SectionS1Intro'
import { SectionS2Definitions } from './_components/sections/SectionS2Definitions'
import { SectionS3WhatIsPr } from './_components/sections/SectionS3WhatIsPr'
import { SectionS4Japan } from './_components/sections/SectionS4Japan'
import { SectionS5History } from './_components/sections/SectionS5History'
import { SectionS6Global } from './_components/sections/SectionS6Global'
import { SectionS7Corona } from './_components/sections/SectionS7Corona'
import { SectionS8Cases } from './_components/sections/SectionS8Cases'
import { SectionS9Eval } from './_components/sections/SectionS9Eval'

const PrKihonGainenToTeigiPage = () => {
  return (
    <div className="pr-lecture-material">
      <PrHeader />
      <PrStickyNav />
      <main>
        <SectionS1Intro />
        <SectionS2Definitions />
        <SectionS3WhatIsPr />
        <SectionS4Japan />
        <SectionS5History />
        <SectionS6Global />
        <SectionS7Corona />
        <SectionS8Cases />
        <SectionS9Eval />
        <SectionS10Relations />
        <SectionS11Comm />
        <SectionS12Rm />
      </main>
      <PrFooter />
    </div>
  )
}

export default PrKihonGainenToTeigiPage
