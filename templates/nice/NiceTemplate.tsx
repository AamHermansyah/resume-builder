import { StateContext } from '@/components/builder/Resume/ResumePreview';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import { dateParser } from '@/helpers/utils';
import { cn } from '@/lib/utils';
import { IResume, ISkillsIntrf } from '@/stores/index.interface';
import React, { useContext } from 'react';

import { Montserrat } from 'next/font/google'
import { divideArrayByEvenOddSkills } from '@/lib/helper';

const monserrat = Montserrat({ subsets: ['latin'] })

export default function NiceTemplate({ widthClassName = '' }: { widthClassName?: string }) {
  const resumeData: IResume = useContext(StateContext);

  if (resumeData === null) return null;

  const [evenSkills, oddSkills] = divideArrayByEvenOddSkills(resumeData.skills);

  return (
    <div className={cn('print-exact bg-white w-[730px] print:w-[700px]', widthClassName, monserrat.className)}>
      <div className="flex flex-col w-[700px] mx-auto px-4 pb-10">
        <header>
          <div className="flex justify-between">
            <div className="flex flex-col justify-start items-start w-[800px] h-auto mt-[60px]">
              <span className="text-4xl text-[#8f7e1e] tracking-wider">
                {resumeData.basics.name}
              </span>
              <p className="font-normal tracking-widest mt-3">
                {resumeData.basics.label}
              </p>
            </div>
            <div className="text-right w-[700px] h-auto mt-[60px]">
              <ul className="flex flex-col gap-1.5">
                <li>{resumeData.basics.url}</li>
                <li>{resumeData.basics.email}</li>
                <li>{resumeData.basics.country}</li>
                <li>{resumeData.basics.phone}</li>
              </ul>
            </div>
          </div>
        </header>
        <section>
          <div className="flex flex-col">
            <div>
              <h2 className="text-[#8f7e1e] font-semibold text-lg">SUMMARY</h2>
            </div>
            <div className="h-[1px] w-full bg-gray-400 my-2" />
            <p>
              {resumeData.basics.summary}
            </p>
          </div>
        </section>
        <section>
          <div className="flex flex-col mt-6">
            <div>
              <h2 className="text-[#8f7e1e] font-semibold text-lg">EXPERIENCE</h2>
            </div>
            <div className="h-[1px] w-full bg-gray-400 my-2" />
            <div className="flex flex-col">
              {resumeData.work.map((item) => (
                <div key={item.id}>
                  <div className="flex items-center">
                    <span className="block text-gray-500 text-xs w-full max-w-[135px]">
                      {item.startDate !== '' && dateParser(item.startDate)}
                      {item.startDate !== '' && (item.isWorkingHere || item.endDate !== '') ? ' - ' : ''}
                      {item.isWorkingHere && 'Present'}
                      {item.endDate !== '' && !item.isWorkingHere && dateParser(item.endDate)}
                    </span>
                    <span className="text-[#8f7e1e] font-semibold text-base">
                      {item.name} - {item.country}
                    </span>
                  </div>
                  <div className="flex flex-col text-base mt-[2px] ml-[135px] w-[500px] text-justify">
                    <div>
                      <span className="font-semibold text-sm">
                        {item.position}
                      </span>
                    </div>
                    <HTMLRenderer htmlString={item.summary} className="text-base" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-col mt-6">
            <div>
              <h2 className="text-[#8f7e1e] font-semibold text-lg">EDUCATION</h2>
            </div>
            <div className="h-[1px] w-full bg-gray-400 my-2" />
            <div>
              {resumeData.education.map((item) => (
                <div className="flex flex-row justify-between items-center" key={item.id}>
                  <div className="relative flex w-full gap-2">
                    <div className="text-gray-500 text-xs basis-[155px] max-w-[130px]">
                      {item.startDate !== '' && dateParser(item.startDate)}
                      {item.startDate !== '' && (item.isStudyingHere || item.endDate !== '') ? ' - ' : ''}
                      {item.isStudyingHere && 'Present'}
                      {item.endDate !== '' && !item.isStudyingHere && dateParser(item.endDate)}
                    </div>
                    <div className="w-full text-base text-justify">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm">
                          {item.institution}
                        </span>
                        <div className="font-semibold">{item.studyType}</div>
                      </div>
                      <p>{item.area}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-col mt-6">
            <div>
              <h2 className="text-[#8f7e1e] font-semibold text-lg">CERTIFICATES</h2>
            </div>
            <div className="h-[1px] w-full bg-gray-400 my-2" />
            <div>
              {resumeData.awards.map((item) => (
                <div className="flex flex-row justify-between items-center" key={item.id}>
                  <div className="relative flex w-full gap-2">
                    <div className="text-gray-500 text-xs basis-[155px] max-w-[130px]">
                      {dateParser(item.date)}
                    </div>
                    <div className="w-full text-base text-justify">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm">
                          {item.title}
                        </span>
                      </div>
                      <p>{item.awarder}</p>
                      <p className="text-sm mb-4">{item.summary}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {resumeData.skills.length > 0 && (
          <section>
            <div className="flex flex-col mt-6">
              <div>
                <h2 className="text-[#8f7e1e] font-semibold text-lg">SKILLS</h2>
              </div>
              <div className="h-[1px] w-full bg-gray-400 my-2" />
              <div className="grid grid-cols-2">
                <ul className="list-disc list-inside">
                  {evenSkills.map((item: ISkillsIntrf, index) => (
                    <li key={index}>{item.name}</li>
                  ))}
                </ul>
                <ul className="list-disc list-inside">
                  {oddSkills.map((item: ISkillsIntrf, index) => (
                    <li key={index}>{item.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
