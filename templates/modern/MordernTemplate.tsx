import { BasicIntro } from './components/BasicIntro';
import { EducationSection } from './components/Education';
import { VolunteerSection } from './components/Volunteer';
import { Objective } from './components/Objective';
import { SkillsSection } from './components/Skills';
import { SummarySection } from './components/Summary';
import { WorkSection } from './components/Work';
import { AwardSection } from './components/Awards';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';
import { StateContext } from '@/components/builder/Resume/ResumePreview';
import { useContext } from 'react';

export default function MordernTemplate() {
  const resumeData = useContext(StateContext);

  return (
    <div className="p-4 print:p-0  bg-white w-[730px] print:w-[700px]">
      <BasicIntro
        name={resumeData.basics.name}
        label={resumeData.basics.label}
        url={resumeData.basics.url}
        email={resumeData.basics.email}
        country={resumeData.basics.location.country}
        phone={resumeData.basics.phone}
        image={resumeData.basics.image}
      />
      <div className="flex">
        <div className="basis-[60%] p-3">
          <SectionValidator value={resumeData.basics.summary}>
            <SummarySection summary={resumeData.basics.summary} />
          </SectionValidator>

          <SectionValidator value={resumeData.work}>
            <WorkSection experience={resumeData.work} />
          </SectionValidator>

          <SectionValidator value={resumeData.awards}>
            <AwardSection awardsReceived={resumeData.awards} />
          </SectionValidator>
        </div>

        <div className="">
          <SectionValidator value={resumeData.basics.objective}>
            {/* <Objective objective={resumeData.basics.objective} />*/}
            <SkillsSection title="Languages" list={resumeData.skills.languages} />
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

          <SectionValidator value={resumeData.volunteer}>
            <VolunteerSection projects={resumeData.volunteer} />
          </SectionValidator>
        </div>
      </div>
    </div>
  );
}
