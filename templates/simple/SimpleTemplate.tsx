import { StateContext } from '@/components/builder/Resume/ResumePreview';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import { dateParser } from '@/helpers/utils';
import { divideArrayByEvenOddSkills } from '@/lib/helper';
import { cn } from '@/lib/utils';
import { IResume, ISkillsIntrf } from '@/stores/index.interface';
import React, { useContext } from 'react';

export default function SimpleTemplate({ widthClassName = '' }: { widthClassName?: string }) {
  const resumeData: IResume = useContext(StateContext);
  const [evenSkills, oddSkills] = divideArrayByEvenOddSkills(resumeData.skills);

  if (resumeData === null) return null;

  return (
    <div className={cn('p-2 print-exact print:p-0  bg-white w-[730px] print:w-[700px]', widthClassName)}>
      <div className="flex flex-col py-14 px-20">
        <div className="w-full text-center">
          <h1 className="text-3xl font-bold">{resumeData.basics.name}</h1>
          <p>{resumeData.basics.phone} - {resumeData.basics.country}</p>
          <p>{resumeData.basics.email} {resumeData.basics.url ? `- ${resumeData.basics.url}` : ''}</p>
        </div>

        <span className="block border-t-2 border-gray-800 border-dashed mt-4 mb-2" />

        <div>
          <h1 className="text-md font-bold mt-2">PROFESIONAL SUMMARY</h1>
          <p className="text-justify">
            {resumeData.basics.summary}
          </p>
        </div>

        <span className="block border-t-2 border-gray-800 border-dashed mt-4 mb-2" />

        <div className="w-full mt-2">
          <h1 className="text-md font-bold">SKILLS</h1>
          <div>
            <div className="grid grid-cols-2">
              <ul
                style={{ listStyleType: "disc" }}
                className="list-inside"
              >
                {evenSkills.map((item: ISkillsIntrf, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ul>
              <ul
                style={{ listStyleType: "disc" }}
                className="list-inside"
              >
                {oddSkills.map((item: ISkillsIntrf, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <span className="block border-t-2 border-gray-800 border-dashed mt-4 mb-2" />

        <div className="w-full">
          <div className="text-md mt-[5px]">
            <div>
              <h1 className="font-bold">WORK HISTORY</h1>
            </div>
          </div>
          {resumeData.work.map((item) => (
            <div className="mb-2" key={item.id}>
              <div className="mt-2">
                <span className="block text-gray-500 text-xs">
                  {item.startDate !== '' && dateParser(item.startDate)}
                  {item.startDate !== '' && (item.isWorkingHere || item.endDate !== '') ? ' - ' : ''}
                  {item.isWorkingHere && 'Present'}
                  {item.endDate !== '' && !item.isWorkingHere && dateParser(item.endDate)}
                </span>
                <h3 className="font-semibold">
                  {item.position} - {item.name}
                </h3>
              </div>
              <div className="flex flex-col text-base mt-[2px] text-justify">
                <HTMLRenderer htmlString={item.summary} className="text-base" />
              </div>
            </div>
          ))}
        </div>

        <span className="block border-t-2 border-gray-800 border-dashed mt-4 mb-2" />

        <div>
          <div className="text-md mt-4 mb-2">
            <h1 className="font-bold">EDUCATION</h1>
          </div>
          {resumeData.education.map((item) => (
            <div className="mb-2" key={item.id}>
              <span className="block text-gray-500 text-xs">
                {item.startDate !== '' && dateParser(item.startDate)}
                {item.startDate !== '' && (item.isStudyingHere || item.endDate !== '') ? ' - ' : ''}
                {item.isStudyingHere && 'Present'}
                {item.endDate !== '' && !item.isStudyingHere && dateParser(item.endDate)}
              </span>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">
                  {item.studyType}
                </h3>
                -
                <h6>
                  {item.institution}
                </h6>
              </div>
              <p className="text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}