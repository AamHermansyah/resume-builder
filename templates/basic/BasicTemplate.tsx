import { StateContext } from '@/components/builder/Resume/ResumePreview';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import { dateParser } from '@/helpers/utils';
import { cn } from '@/lib/utils';
import { IResume } from '@/stores/index.interface';
import React, { useContext } from 'react';
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], weight: ["400", "500", "600", "700"] });


export default function BasicTemplate({ widthClassName = '' }: { widthClassName?: string }) {
  const resumeData: IResume = useContext(StateContext);

  if (resumeData === null) return null;

  return (
    <div className={cn('print-exact bg-white w-[730px] print:w-[700px]', widthClassName, lora.className)}>
      <section className="w-[730px]">
        <div>
          <div className="flex w-full h-[120px] bg-[#3c5769] justify-center items-center">
            <h1 className="font-bold text-white text-4xl">
              {resumeData.basics.name}
            </h1>
          </div>
          <div className="flex w-full h-[5px] bg-[#3c5769] mt-1" />
        </div>
        <div className="grid grid-cols-7 w-full">
          <div className="bg-gray-200 px-8 col-span-3">
            <div className="flex flex-col items-start">
              <h1 className="font-bold text-gray-800 text-xl mt-[30px]">
                CONTACT
              </h1>
              <ul className="pl-4 mt-1">
                <li>
                  <b className="font-bold">Address:</b>
                  <br />
                  {resumeData.basics.country}
                </li>
                <li>
                  <b className="font-bold">Phone:</b>
                  <br />
                  {resumeData.basics.phone}
                </li>
                <li>
                  <b className="font-bold">Email:</b>
                  <br />
                  {resumeData.basics.email}
                </li>
              </ul>
            </div>
            {resumeData.skills.length > 0 && (
              <div className="flex flex-col items-start mt-[20px]">
                <h1 className="font-bold text-gray-800 text-xl">
                  SKILLS
                </h1>
                <ul style={{ listStyleType: "disc" }} className="list-inside">
                  {resumeData.skills.map((item, index) => (
                    <li key={index}>{item.name}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="pb-10">
              <div className="font-bold text-md mt-[20px]">
                <div>
                  <h1 className="font-bold text-gray-800 text-xl">
                    Education
                  </h1>
                </div>
              </div>
              {resumeData.education.map((item) => (
                <div key={item.id}>
                  <div className="mt-2">
                    <span className="text-xs">
                      {item.startDate !== '' && dateParser(item.startDate)}
                      {item.startDate !== '' && (item.isStudyingHere || item.endDate !== '') ? ' - ' : ''}
                      {item.isStudyingHere && 'Present'}
                      {item.endDate !== '' && !item.isStudyingHere && dateParser(item.endDate)}
                    </span>
                    <div className="flex item-center gap-2 -mt-1">
                      <p className="font-bold text-base uppercase">
                        {item.studyType}
                      </p>
                      -
                      <p className="font-bold text-base ">
                        {item.institution}
                      </p>
                    </div>
                    <div className="pl-2">
                      <span className="block">{item.area}</span>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-4 bg-white h-full px-6">
            <div className="font-bold text-md mt-[30px]">
              <div>
                <h1 className="font-bold text-gray-800 text-xl">
                  PROFESSIONAL SUMMARY
                </h1>
              </div>
            </div>
            <div className="text-base mt-[5px] flex w-full text-justify">
              <p className="w-full">
                {resumeData.basics.summary}
              </p>
            </div>
            <div className="pb-10">
              <div className="font-bold text-md mt-[20px]">
                <div>
                  <h1 className="font-bold text-gray-800 text-xl">
                    WORK HISTORY
                  </h1>
                </div>
              </div>
              {resumeData.work.map((item) => (
                <div key={item.id}>
                  <div className="mt-[15px]">
                    <span className="block">
                      {item.startDate !== '' && dateParser(item.startDate)}
                      {item.startDate !== '' && (item.isWorkingHere || item.endDate !== '') ? ' - ' : ''}
                      {item.isWorkingHere && 'Present'}
                      {item.endDate !== '' && !item.isWorkingHere && dateParser(item.endDate)}
                    </span>
                    <span className="block font-bold text-base uppercase">
                      {item.position},
                    </span>
                  </div>
                  <div className="flex flex-col text-base mt-[2px] w-full">
                    <p className="font-bold">
                      {item.name}
                    </p>
                    <HTMLRenderer htmlString={item.summary} className="text-base" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
