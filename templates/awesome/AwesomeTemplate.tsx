import { StateContext } from '@/components/builder/Resume/ResumePreview';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import { dateParser } from '@/helpers/utils';
import { cn } from '@/lib/utils';
import { IResume } from '@/stores/index.interface';
import React, { useContext } from 'react';

import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ["200", "400", "500", "600", "700", "800"] })

export default function AwesomeTemplate({ widthClassName = '' }: { widthClassName?: string }) {
  const resumeData: IResume = useContext(StateContext);

  if (resumeData === null) return null;

  const socialMedia = resumeData
    .basics
    .profiles
    .filter((item) => item.value && item.network === 'linkedin');

  return (
    <div className={cn('print-exact bg-white w-[730px] print:w-[720px] mx-auto', widthClassName, poppins.className)}>
      <div className="w-full flex">
        {/* Left Panel */}
        <div className="flex justify-center w-full bg-[#313642] h-auto px-6">
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-center h-[300px] pt-10">
              <div className="flex items-center justify-center border-2 border-[#54b2e6] rounded-full w-[200px] h-[200px] ">
                <img
                  src={resumeData.basics.image}
                  alt="Profil"
                  className="w-[170px] h-[170px] rounded-full object-cover"
                />
              </div>
            </div>
            <div className="mt-4">
              <h1 className="text-2xl font-semibold text-[#54b2e6]">Objectives</h1>
              <p className="mt-2 text-white text-justify">{resumeData.basics.objective}</p>
            </div>
            <div className="mt-4">
              <h1 className="text-2xl font-semibold text-[#54b2e6]">Contact</h1>
              <div className="flex justify-start items-start text-white mt-3">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center">
                    <img
                      src="https://i.ibb.co/W2fsS17/maps-and-flags.png"
                      alt="Logo"
                      className="mt-1 w-4 h-4"
                    />
                    <p className="ml-2">
                      {resumeData.basics.country}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img
                      src="https://i.ibb.co/56R85X8/envelope.png"
                      alt="Logo"
                      className="mt-1 w-4 h-4"
                    />
                    <p className="ml-2">
                      {resumeData.basics.email}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img
                      src="https://i.ibb.co/jZxzZtv/monitor-screen.png"
                      alt="Logo"
                      className="mt-1 w-4 h-4"
                    />
                    <p className="ml-2">
                      {resumeData.basics.url}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img
                      src="https://i.ibb.co/yWnVytx/linkedin-1.png"
                      alt="Logo"
                      className="mt-1 w-4 h-4"
                    />
                    <p className="ml-2">
                      {socialMedia[0]?.value}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div>
                <h1 className="text-2xl font-semibold text-[#54b2e6]">Education</h1>
                {resumeData.education.map((item) => (
                  <div className="flex flex-col justify-start items-start text-white mt-3" key={item.id}>
                    <div className="flex flex-col">
                      <h1 className="text-base font-semibold text-gray-200 tracking-widest">
                        {item.area} - {item.studyType}
                      </h1>
                      <p className="text-sm font-normal text-white">
                        {item.institution}
                      </p>
                      <p className="text-sm font-normal text-white">
                        {item.startDate !== '' && dateParser(item.startDate)}
                        {item.startDate !== '' && (item.isStudyingHere || item.endDate !== '') ? ' - ' : ''}
                        {item.isStudyingHere && 'Present'}
                        {item.endDate !== '' && !item.isStudyingHere && dateParser(item.endDate)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {resumeData.skills.length > 0 && (
              <div className="mt-4 mb-10">
                <h1 className="text-2xl font-semibold text-[#54b2e6] mb-4">Skills</h1>
                <ul className="list-disc list-inside text-white">
                  {resumeData.skills.map((item, index) => (
                    <li key={index}>{item.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        {/* End Left Panel*/}
        {/* Right Panel */}
        <div className="w-full flex items-center justify-center bg-white h-full pb-16 flex-col text-[#3e3e3e] pl-6 pr-6 print:pr-0">
          <div className="flex flex-col w-full justify-center h-full mt-10 gap-2">
            <h1 className="font-bold text-4xl tracking-widest leading-[50px]">
              {resumeData.basics.name}
            </h1>
            <h1 className="font-normal text-2xl tracking-widest">
              {resumeData.basics.label}
            </h1>
            <p className="font-light tracking-widest text-justify">
              {resumeData.basics.summary}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-4 justify-between w-full mt-10">
              <div className="text-lg font-semibold whitespace-nowrap">
                <h1>Work Experience</h1>
              </div>
              <div className="w-full h-1 bg-[#54b2e6]" />
            </div>
            <div>
              {resumeData.work.map((item) => (
                <div key={item.id}>
                  <div className="flex items-center justify-between w-full mt-4">
                    <div className="text-base w-1/2">
                      <h1>{item.position}</h1>
                    </div>
                    <div className="text-base w-1/2 text-end">
                      <p>
                        {item.startDate !== '' && dateParser(item.startDate)}
                        {item.startDate !== '' && (item.isWorkingHere || item.endDate !== '') ? ' - ' : ''}
                        {item.isWorkingHere && 'Present'}
                        {item.endDate !== '' && !item.isWorkingHere && dateParser(item.endDate)}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start w-full mt-1">
                    <div className="text-base font-semibold">
                      <h1>{item.name} | {item.country}</h1>
                      <HTMLRenderer htmlString={item.summary} className="text-sm font-normal text-justify mt-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 justify-between w-full mt-10">
              <div className="text-lg font-semibold whitespace-nowrap">
                <h1>Certificate</h1>
              </div>
              <div className="w-full h-1 bg-[#54b2e6]" />
            </div>
            <div className="mt-4">
              {resumeData.awards.map((item) => (
                <div key={item.id} className="mb-2">
                  <div className="flex justify-between flex-wrap gap-2">
                    <h1 className="text-xs uppercase">{item.awarder}</h1>
                    <p className="text-right text-sm">{dateParser(item.date)}</p>
                  </div>
                  <div className="flex flex-col justify-start w-full">
                    <div className="text-base font-semibold">
                      <h1>{item.title}</h1>
                      <HTMLRenderer htmlString={item.summary} className="text-sm font-normal text-justify" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
