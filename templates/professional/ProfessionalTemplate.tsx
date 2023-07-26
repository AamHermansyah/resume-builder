import React, { useContext } from 'react';

import AboutMe from './components/AboutMe';
import Achievements from './components/Achievements';
import BasicIntro from './components/BasicIntro';
import { Education } from './components/Education';
import Involvement from './components/Involvement';
import { Objective } from './components/Objective';
import RatedSkills from './components/RatedSkills';
import { Section } from './components/Section';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';
import UnratedSkills from './components/UnratedSkills';
import Work from './components/Work';
import styled from '@emotion/styled';
import { StateContext } from '@/components/builder/Resume/ResumePreview';
import { cn } from '@/lib/utils';
import { SectionHeading } from '../modern/atoms/SectionHeading';
import { IBasicLanguage } from '@/stores/basic.interface';

const ResumeContainer = styled.div`
  display: flex;
  height: 100%;
  padding: 40px 25px;
  column-gap: 10px;

  @media print {
    border: none;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 66%;
  row-gap: 20px;
  height: 100%;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 34%;
  row-gap: 20px;
  height: 100%;
  font-size: 12px;
`;

export default function ProfessionalTemplate({ widthClassName = '' }: { widthClassName?: string }) {
  const resumeData = useContext(StateContext);

  if (resumeData === null) return null;

  return (
    <ResumeContainer className={cn('p-2 print-exact print:p-0  bg-white w-[730px] min-w-[730px] print:w-[700px]', widthClassName)}>
      <LeftSection>
        <Section
          title={resumeData.basics?.name}
          titleClassname="text-xl font-bold"
        >
          <BasicIntro basics={resumeData.basics} />
        </Section>

        <SectionValidator value={resumeData.basics.objective}>
          <Section title="Career Objective">
            <Objective objective={resumeData.basics.objective} />
          </Section>
        </SectionValidator>

        <SectionValidator value={resumeData.work}>
          <Section title="Projects">
            <Work work={resumeData.work} />
          </Section>
        </SectionValidator>

        <SectionValidator value={resumeData.awards}>
          <Section title="Certificates and Awards">
            <Achievements data={resumeData.awards} />
          </Section>
        </SectionValidator>
      </LeftSection>

      <RightSection>
        <SectionValidator value={resumeData.basics.summary}>
          <Section title="Summary">
            <AboutMe summary={resumeData.basics.summary} profileImage={resumeData.basics.image} />
          </Section>
        </SectionValidator>

        <SectionValidator value={resumeData.basics.languages}>
          <div>
            <SectionHeading title="Languages" />
            <div className="flex gap-1 flex-wrap">
              {resumeData.basics.languages.map((language: IBasicLanguage, index: number) => (
                <span className="block border p-1 rounded" key={index}>
                  {language.value} ({language.level})
                </span>
              ))}
            </div>
            <ul className="text-xs mt-1">
              <li>3 = <span className="italic">Fluent</span></li>
              <li>2 = <span className="italic">Intermediate</span></li>
              <li>1 = <span className="italic">Conversation</span></li>
            </ul>
          </div>
        </SectionValidator>

        <SectionValidator value={resumeData.skills}>
          <Section title="Skills / Exposure">
            <UnratedSkills items={resumeData.skills} />
          </Section>
        </SectionValidator>

        <SectionValidator value={resumeData.education}>
          <Section title="Education">
            <Education education={resumeData.education} />
          </Section>
        </SectionValidator>
      </RightSection>
    </ResumeContainer>
  );
}
