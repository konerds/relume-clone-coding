import { FC } from 'react';
import CmpContentHero from './hero/CmpContentHero';
import CmpLayoutBenefit from './benefit/CmpLayoutBenefit';
import CmpLayoutProcess from './process/CmpLayoutProcess';
import CmpLayoutComparison from './comparison/CmpLayoutComparison';
import CmpLayoutBuiltToSpec from './built-to-spec/CmpLayoutBuiltToSpec';
import CmpLayoutPricing from './pricing/CmpLayoutPricing';
import CmpLayoutTeam from './team/CmpLayoutTeam';
import CmpLayoutFAQ from './faq/CmpLayoutFAQ';
import CmpLayoutContact from './contact/CmpLayoutContact';

type TPropsCmpLayoutMain = {
  setPosYSectionWrapperProcess: React.Dispatch<
    React.SetStateAction<[number, number]>
  >;
  setPosYSectionWrapperContact: React.Dispatch<
    React.SetStateAction<[number, number]>
  >;
};

const CmpLayoutMain: FC<TPropsCmpLayoutMain> = ({
  setPosYSectionWrapperProcess,
  setPosYSectionWrapperContact,
}) => {
  return (
    <>
      <CmpContentHero />
      <CmpLayoutBenefit />
      <CmpLayoutProcess
        setPosYSectionWrapperProcess={setPosYSectionWrapperProcess}
      />
      <CmpLayoutComparison />
      <CmpLayoutBuiltToSpec />
      <CmpLayoutPricing />
      <CmpLayoutTeam />
      <CmpLayoutFAQ />
      <CmpLayoutContact
        setPosYSectionWrapperContact={setPosYSectionWrapperContact}
      />
    </>
  );
};

export default CmpLayoutMain;
