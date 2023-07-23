import { StateContext } from '@/components/builder/Resume/ResumePreview';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import { dateParser } from '@/helpers/utils';
import { cn } from '@/lib/utils';
import { IResume } from '@/stores/index.interface';
import React, { useContext } from 'react';

export default function FlatTemplate({ widthClassName = '' }: { widthClassName?: string }) {
  const resumeData: IResume = useContext(StateContext);

  if (resumeData === null) return null;

  const socialMedia = resumeData
    .basics
    .profiles
    .filter((item) => item.value && item.network === 'linkedin');

  return (
    <div className={cn('print-exact bg-white w-[730px] print:w-[700px]', widthClassName)}>
      <div className="flex flex-col">
        <div className="profile">
          <div className="flex flex-col justify-start pl-8 my-6 gap-1">
            <h1 className="text-semibold text-2xl">
              {resumeData.basics.name}
            </h1>
            <h2 className="text-base text-[#374457]">
              {resumeData.basics.label}
            </h2>
            <p className="text-sm">
              {resumeData.basics.summary}
            </p>
          </div>
        </div>
        <div className="contact">
          <div className="flex justify-evenly items-center w-[full] h-[45px] bg-[#374457] text-white text-sm">
            <div className="flex items-center">
              <img
                src="https://i.ibb.co/tDXKbSF/email-1.png"
                alt="Logo"
                className="mt-1 w-4 h-4"
              />
              <p className="ml-2">{resumeData.basics.email}</p>
            </div>
            <div className="flex items-center ">
              <img
                src="https://i.ibb.co/1Rq7YSJ/smartphone-call.png"
                alt="Logo"
                className="mt-1 w-4 h-4"
              />
              <p className="ml-2">{resumeData.basics.phone}</p>
            </div>
            <div className="flex items-center">
              <img
                src="https://i.ibb.co/Zf9d0x7/pin.png"
                alt="Logo"
                className="mt-1 w-4 h-4"
              />
              <p className="ml-2">{resumeData.basics.country}</p>
            </div>
            <div className="flex items-center">
              <img
                src="https://i.ibb.co/k84bQq3/linkedin.png"
                alt="Logo"
                className="w-4 h-4"
              />
              <p className="ml-2">{socialMedia[0]?.value || '-'}</p>
            </div>
          </div>
        </div>
        <div className="skills">
          <div className="flex flex-col pl-8 my-6">
            <h1 className="text-2xl text-[#374457] font-semibold">SKILLS</h1>
            <div className="grid grid-cols-4 gap-4 text-sm mt-2">
              {resumeData.skills.map((item, index) => (
                <span className="block" key={index}>{item.name}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="pl-8">
          <div className="workExperience">
            <h1 className="text-2xl text-[#374457] font-semibold mb-2">
              WORK EXPERIENCE
            </h1>
            {resumeData.work.map((item) => (
              <div key={item.id} className="mb-2">
                <h1 className="font-bold text-xl">
                  {item.position}
                </h1>
                <h1 className="font-semibold text-xl">
                  {item.name}
                </h1>
                <div className="flex justify-between italic text-xs text-gray-500 pr-8 gap-8">
                  <p className="w-1/2">
                    {item.startDate !== '' && dateParser(item.startDate)}
                    {item.startDate !== '' && (item.isWorkingHere || item.endDate !== '') ? ' - ' : ''}
                    {item.isWorkingHere && 'Present'}
                    {item.endDate !== '' && !item.isWorkingHere && dateParser(item.endDate)}
                  </p>
                  <p className="w-1/2 text-end">
                    {item.country}
                  </p>
                </div>
                <div className="px-4 w-full">
                  <HTMLRenderer htmlString={item.summary} className="text-sm" />
                </div>
              </div>
            ))}
          </div>
          <div className="education">
            <h1 className="text-2xl text-[#374457] font-semibold mb-2 mt-8">
              EDUCATION
            </h1>
            <div>
              {resumeData.education.map((item) => (
                <div key={item.id}>
                  <h1 className="font-bold text-xl">
                    {item.studyType} - {item.area}
                  </h1>
                  <h1 className="font-semibold">
                    {item.institution}
                  </h1>
                  <p className="italic text-xs text-gray-500 pr-8 my-1">
                    {item.startDate !== '' && dateParser(item.startDate)}
                    {item.startDate !== '' && (item.isStudyingHere || item.endDate !== '') ? ' - ' : ''}
                    {item.isStudyingHere && 'Present'}
                    {item.endDate !== '' && !item.isStudyingHere && dateParser(item.endDate)}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="organization">
            <h1 className="text-2xl text-[#374457] font-semibold mb-2 mt-8">
              Organization
            </h1>
            <div className="flex justify-between pr-8 gap-8">
              {resumeData.volunteer.map((item) => (
                <div className="w-1/2" key={item.id}>
                  <p className="font-bold text-base uppercase">
                    {item.position}
                  </p>
                  <p className="font-normal text-base">
                    {item.organization}
                  </p>
                  <p className="font-normal text-xs italic mt-1">
                    {item.startDate !== '' && dateParser(item.startDate)}
                    {item.startDate !== '' && (item.isVolunteeringNow || item.endDate !== '') ? ' - ' : ''}
                    {item.isVolunteeringNow && 'Present'}
                    {item.endDate !== '' && !item.isVolunteeringNow && dateParser(item.endDate)}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="Languanges">
            <h1 className="text-2xl text-[#374457] font-semibold mb-2 mt-8">
              Languanges
            </h1>
            <div className="flex mb-[50px] justify-start items-start gap-8">
              {resumeData.basics.languages.map((item, index) => (
                <div className="w-1/3" key={index}>
                  <h1 className="font-semibold text-lg">
                    {item.value}
                  </h1>
                  <p className="py-1 italic text-xs text-gray-500 pr-8">
                    {[
                      'Limited Working Proficienty',
                      'Native or Bilingual Proficienty',
                      'Full Professional Proficienty',
                    ][item.level - 1]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
