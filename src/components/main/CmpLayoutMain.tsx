import { FC } from 'react';
import CmpContentHero from './hero/CmpContentHero';
import CmpLayoutBenefit from './benefit/CmpLayoutBenefit';
import CmpLayoutProcess from './process/CmpLayoutProcess';
import CmpLayoutComparison from './comparison/CmpLayoutComparison';
import CmpLayoutBuiltToSpec from './built-to-spec/CmpLayoutBuiltToSpec';
import CmpLayoutPricing from './pricing/CmpLayoutPricing';
import CmpLayoutTeam from './team/CmpLayoutTeam';
import CmpContentFAQ from './faq/CmpContentFAQ';
import CmpContentContact from './contact/CmpContentContact';

const CmpLayoutMain: FC = () => {
  return (
    <>
      <CmpContentHero />
      <CmpLayoutBenefit />
      <CmpLayoutProcess />
      <CmpLayoutComparison />
      <CmpLayoutBuiltToSpec />
      <CmpLayoutPricing />
      <CmpLayoutTeam />
      <CmpContentFAQ />
      <CmpContentContact />
    </>
  );
};

export default CmpLayoutMain;
