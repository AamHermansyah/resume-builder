import { StateContext } from '@/components/builder/Resume/ResumePreview';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import { dateParser } from '@/helpers/utils';
import { cn } from '@/lib/utils';
import { IResume } from '@/stores/index.interface';
import React, { useContext } from 'react';

import { Montserrat } from 'next/font/google'

const monserrat = Montserrat({ subsets: ['latin'] })

export default function MinimalistTemplate({ widthClassName = '' }: { widthClassName?: string }) {
  const resumeData: IResume = useContext(StateContext);

  if (resumeData === null) return null;

  return (
    <div className={cn('print-exact bg-white w-[730px] print:w-[700px]', widthClassName, monserrat.className)}>
      <div className="w-[730px] flex flex-col">
        <div className="Header">
          <div className="flex flex-col w-full h-auto bg-[#ffffff] justify-center items-center">
            <h1 className="font-light text-4xl text-[#555555] pt-[55px] tracking-widest text-center">
              {resumeData.basics.name}
            </h1>
            <h1 className="font-light text-xl text-[#555555] mt-4 tracking-wide text-center">
              {resumeData.basics.label}
            </h1>
            <div className="w-[80%] mt-2 mx-auto border-b-[4px] border-gray-300" />
          </div>
        </div>
        <section>
          <div className="flex justify-between">
            <div className="w-full bg-gray-100 h-full flex flex-col">
              <div className="contact">
                <h1 className="font-bold text-lg text-[#555555] mt-4 tracking-wide pl-10">
                  CONTACT
                </h1>
                <div className="flex justify-center items-center my-6">
                  <div className="flex flex-col justify-center items-start gap-4 text-base text-[#555555] pl-2 pr-4">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://i.ibb.co/MM8ghfq/mobile-phone.png"
                        alt="Logo"
                        className="mt-1 w-4 h-4"
                      />
                      <p className="pl-2 text-sm">
                        {resumeData.basics.phone}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src="https://i.ibb.co/pfcd7y3/email.png"
                        alt="Logo"
                        className="mt-1 w-4 h-4"
                      />
                      <p className="pl-2 text-sm">
                        {resumeData.basics.email}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src="https://i.ibb.co/Q6cJL8v/web.png"
                        alt="Logo"
                        className="mt-1 w-4 h-4"
                      />
                      <p className="pl-2 text-sm">
                        {resumeData.basics.url}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src="https://i.ibb.co/Byg9qW9/location.png"
                        alt="Logo"
                        className="mt-1 w-4 h-4"
                      />
                      <p className="pl-2 text-sm">
                        {resumeData.basics.country}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-10">
                <div className="w-full border-b-[6px] border-gray-400 border-dotted mx-auto" />
              </div>
              {resumeData.skills.length > 0 && (
                <>
                  <div className="Skill">
                    <h1 className="font-bold text-lg text-[#555555] mt-4 tracking-wide pl-10">
                      SKILLS
                    </h1>
                    <div className="flex justify-start pl-10 px-4 my-6">
                      <div className="flex flex-col justify-center items-start gap-4 text-sm text-[#555555]">
                        {resumeData.skills.map((item, index) => (
                          <p key={index}>
                            {item.name}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="px-10">
                    <div className="w-full border-b-[6px] border-gray-400 border-dotted mx-auto" />
                  </div>
                </>
              )}
              <div className="education">
                <h1 className="font-bold text-lg text-[#555555] mt-4 tracking-wide pl-10">
                  EDUCATION
                </h1>
                <div>
                  {resumeData.education.map((item) => (
                    <div key={item.id}>
                      <h3 className="font-bold text-base text-[#555555] mt-4 pl-10">
                        {item.studyType} - {item.area}
                      </h3>
                      <h2 className="text-sm text-[#555555] pl-10 uppercase">
                        {item.institution}
                      </h2>
                      <span className="block mt-1 text-xs font-bold text-[#555555] pl-10">
                        {item.startDate !== '' && dateParser(item.startDate)}
                        {item.startDate !== '' && (item.isStudyingHere || item.endDate !== '') ? ' - ' : ''}
                        {item.isStudyingHere && 'Present'}
                        {item.endDate !== '' && !item.isStudyingHere && dateParser(item.endDate)}
                      </span>
                      <h2 className="font-light text-base text-[#555555] pl-10">
                        {item.description}
                      </h2>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-10 my-4">
                <div className="w-full border-b-[6px] border-gray-400 border-dotted mx-auto" />
              </div>
              <div className="w-full">
                <h1 className="font-bold text-lg text-[#555555] tracking-wide pl-10">
                  LANGUANGES
                </h1>
                <div className="languange pb-10 mt-2 px-10 space-y-2">
                  {resumeData.basics.languages.map((item, index) => (
                    <div key={index}>
                      <p className="text-base text-[#555555]">{item.value}</p>
                      <div className="bg-[#555555] h-[4px]" style={{ width: `${item.level * 33.33}%` }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full h-full flex flex-col px-8">
              <div className="profile">
                <h1 className="font-bold text-lg text-[#555555] mt-4 tracking-wide">
                  PROFILE
                </h1>
                <div className="flex my-6">
                  <div className="flex flex-col items-start gap-4 text-base text-[#555555] mx-auto">
                    <p className="text-justify">
                      {resumeData.basics.summary}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full border-b-[6px] border-gray-400 border-dotted mx-auto" />
              <div className="workExperience">
                <h1 className="font-bold text-lg text-[#555555] mt-4 tracking-wide">
                  WORK EXPERIENCE
                </h1>
                <div className="mb-4">
                  {resumeData.work.map((item) => (
                    <div className="flex flex-col mt-6" key={item.id}>
                      <h2 className="font-bold text-base text-[#555555] ">
                        {item.position}
                      </h2>
                      <div className="w-full flex justify-between text-sm mx-auto gap-y-1 mt-1 flex-wrap-reverse">
                        <p>
                          {item.name}
                        </p>
                        <p>
                          {item.startDate !== '' && dateParser(item.startDate)}
                          {item.startDate !== '' && (item.isWorkingHere || item.endDate !== '') ? ' - ' : ''}
                          {item.isWorkingHere && 'Present'}
                          {item.endDate !== '' && !item.isWorkingHere && dateParser(item.endDate)}
                        </p>
                      </div>
                      <div className="w-full text-sm mt-2 text-justify">
                        <HTMLRenderer htmlString={item.summary} className="text-sm" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className=" rounded bg-[#555555] mx-auto w-full h-[1px] mb-[50px]" />
        </section>
      </div>
    </div>
  );
}
