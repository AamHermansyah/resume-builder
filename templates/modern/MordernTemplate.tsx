import { BasicIntro } from './components/BasicIntro';
import { EducationSection } from './components/Education';
import { VolunteerSection } from './components/Volunteer';
import { SkillsSection } from './components/Skills';
import { SummarySection } from './components/Summary';
import { WorkSection } from './components/Work';
import { AwardSection } from './components/Awards';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';
import { StateContext } from '@/components/builder/Resume/ResumePreview';
import { useContext } from 'react';
import { IBasicLanguage } from '@/stores/basic.interface';
import { SectionHeading } from './atoms/SectionHeading';
import { cn } from '@/lib/utils';

export default function MordernTemplate({ widthClassName = '' }: { widthClassName?: string }) {
  const resumeData = useContext(StateContext);

  const listFormat = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
  const basicLanguages = resumeData
    .basics
    .languages
    .filter((language: IBasicLanguage) => language.value !== '')
    .map((language: IBasicLanguage) => `${language.value} (${language.level})`);
  const formattedBasicLanguages = listFormat.format(basicLanguages);

  return (
    <div className={cn('p-4 print:p-0  bg-white w-[730px] print:w-[700px]', widthClassName)}>
      <BasicIntro
        name={resumeData.basics.name}
        label={resumeData.basics.label}
        url={resumeData.basics.url}
        email={resumeData.basics.email}
        country={resumeData.basics.location.country}
        phone={resumeData.basics.phone}
        image={resumeData.basics.image}
        dob={resumeData.basics.dob}
      />
      <div className="flex">
        <div className="basis-[60%] p-3">
          <SectionValidator value={resumeData.basics.summary}>
            <SummarySection summary={resumeData.basics.summary} />
          </SectionValidator>

          <SectionValidator value={resumeData.work}>
            <WorkSection experiences={resumeData.work} />
          </SectionValidator>

          <SectionValidator value={resumeData.volunteer}>
            <VolunteerSection projects={resumeData.volunteer} />
          </SectionValidator>

          <SectionValidator value={resumeData.awards}>
            <AwardSection awardsReceived={resumeData.awards} />
          </SectionValidator>
        </div>

        <div className="">
          <SectionValidator value={resumeData.basics.languages}>
            {/* <Objective objective={resumeData.basics.objective} />*/}
            <div className="my-3">
              <SectionHeading title="Languages" />
              <span>{formattedBasicLanguages}</span>
              <ul className="text-xs">
                <li>3 = <span className="italic">Fluent</span></li>
                <li>2 = <span className="italic">Intermediate</span></li>
                <li>1 = <span className="italic">Conversation</span></li>
              </ul>
            </div>
          </SectionValidator>

          <SectionValidator value={resumeData.skills.languages}>
            <SkillsSection title="Programming Languages" list={resumeData.skills.languages} />
          </SectionValidator>

          <SectionValidator value={resumeData.skills.technologies}>
            <SkillsSection title="Technologies" list={resumeData.skills.technologies} />
          </SectionValidator>

          <SectionValidator value={resumeData.skills.frameworks}>
            <SkillsSection title="Frameworks" list={resumeData.skills.frameworks} />
          </SectionValidator>

          <SectionValidator value={resumeData.skills.tools}>
            <SkillsSection title="Tools" list={resumeData.skills.tools} />
          </SectionValidator>

          <SectionValidator value={resumeData.education}>
            <EducationSection educations={resumeData.education} />
          </SectionValidator>
        </div>
      </div>
    </div>
  );
}
