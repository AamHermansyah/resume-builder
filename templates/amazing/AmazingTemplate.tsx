import { StateContext } from '@/components/builder/Resume/ResumePreview';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import { dateParser } from '@/helpers/utils';
import { cn } from '@/lib/utils';
import { IResume } from '@/stores/index.interface';
import React, { useContext } from 'react';

import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ["200", "400", "500", "600", "700", "800"] })

export default function AmazingTemplate({ widthClassName = '' }: { widthClassName?: string }) {
  const resumeData: IResume = useContext(StateContext);

  if (resumeData === null) return null;

  const socialMedia = resumeData
    .basics
    .profiles
    .filter((item) => item.value && item.network === 'linkedin');

  return (
    <div className={cn('print-exact bg-white w-[730px] print:w-[700px]', widthClassName, poppins.className)}>
      <div className="flex">
        {/* Left Panel */}
        <div className="w-[300px] bg-gray-100 h-[1150px]">
          <div className="px-4">
            {/* Profil Picture */}
            <div className="flex items-center justify-center h-[300px] pt-[100px]">
              <img
                src={resumeData.basics.image}
                alt="Profil"
                className="w-[200px] h-[200px] rounded-full"
              />
            </div>
            {/* Name */}
            <p className="font-montserrat-medium text-3xl text-center mt-10 mb-2 px-2">
              {resumeData.basics.name}
            </p>
            {/* Divider*/}
            <div className="mx-auto border-t-[3px] border-gray-400 w-full rounded-sm"></div>
            <div className="flex justify-center items-center pt-2 ">
              <p className="text-sm text-center">
                {resumeData.basics.label}
              </p>
            </div>
          </div>
          <div className="px-4">
            <div className="flex justify-center items-center pt-12 ">
              <p className="text-2xl">
                <span className="block text-center">CONTACT</span>
              </p>
            </div>
            {/* Divider*/}
            <div className="mx-auto border-t-[3px] border-gray-400 w-full rounded-sm mb-4"></div>
            <div className="w-full flex justify-center items-center">
              <div className="w-full px-2 flex flex-col justify-center items-start gap-2">
                <div className="flex items-center">
                  <img
                    src="https://i.ibb.co/GkLyYZS/telephone-removebg-preview.png"
                    alt="Logo"
                    className="mt-1 w-4 h-4"
                  />
                  <p className="ml-2">{resumeData.basics.phone}</p>
                </div>
                <div className="flex items-center">
                  <img
                    src="https://i.ibb.co/p2MG8Xw/email-removebg-preview.png"
                    alt="Logo"
                    className="mt-1 w-4 h-4"
                  />
                  <p className="ml-2">{resumeData.basics.email}</p>
                </div>
                <div className="flex items-center">
                  <img
                    src="https://i.ibb.co/GHgmG7L/monitor-removebg-preview.png"
                    alt="Logo"
                    className="mt-1 w-4 h-4"
                  />
                  <p className="ml-2">{resumeData.basics.url}</p>
                </div>
                <div className="flex items-center">
                  <img
                    src="https://i.ibb.co/6WmvxKx/home-icon-silhouette.png"
                    alt="Logo"
                    className="mt-1 w-4 h-4"
                  />
                  <p className="ml-2">{resumeData.basics.country}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 mt-10">
            <p className="text-2xl">PROFILE</p>
            {/* Divider*/}
            <div className="mx-auto border-t-[3px] border-gray-400 w-full rounded-sm mb-4"></div>
            <p className="text-sm text-justify">
              {resumeData.basics.summary}
            </p>
          </div>
          <div className="px-4 mt-10">
            <p className="text-2xl">SKILLS</p>
            {/* Divider*/}
            <div className="mx-auto border-t-[3px] border-gray-400 w-full rounded-sm mb-4"></div>
            <ul className="list-disc list-inside">
              {resumeData.skills.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* End Left Panel*/}
        {/* Right Panel */}
        <div className="w-full px-10">
          <div className="mt-[80px] ">
            <div>
              {/* Work Experience*/}
              <div className="flex justify-start items-start">
                <p className="text-2xl">
                  <span className="block text-center">WORK EXPERIENCE</span>
                </p>
              </div>
              {/* Divider*/}
              <div className="justify-start border-t-[3px] border-gray-400 rounded-sm mb-4"></div>
              {resumeData.work.map((item) => (
                <div key={item.id} className="mb-2">
                  <div className="flex justify-start items-center pt-2 ">
                    <p className="font-bold font-montserrat-medium text-md ">
                      <span className="block text-center">{item.position}</span>
                    </p>
                  </div>
                  <div className="flex justify-start items-center mb-2">
                    <p className="text-sm ">
                      <span className="block text-center">{item.name} | {item.startDate !== '' && dateParser(item.startDate)}
                        {item.startDate !== '' && (item.isWorkingHere || item.endDate !== '') ? ' - ' : ''}
                        {item.isWorkingHere && 'Present'}
                        {item.endDate !== '' && !item.isWorkingHere && dateParser(item.endDate)}</span>
                    </p>
                  </div>
                  <HTMLRenderer htmlString={item.summary} className="text-sm" />
                </div>
              ))}
              {/* End Work*/}
            </div>

            {/* Education*/}
            <div>
              <div className="flex justify-start items-start mt-[40px]">
                <p className="text-2xl">
                  <span className="block text-center">EDUCATION</span>
                </p>
              </div>
              {/* Divider*/}
              <div className="justify-start border-t-[3px] border-gray-400 rounded-sm mb-4"></div>
              {resumeData.education.map((item) => (
                <div key={item.id}>
                  <div className="flex justify-start items-center pt-2 mt-2">
                    <p className="font-montserrat-medium text-md">
                      {item.studyType} - {item.area}
                    </p>
                  </div>
                  <p className="text-sm mb-1">
                    {item.institution} | {item.startDate !== '' && dateParser(item.startDate)}
                    {item.startDate !== '' && (item.isStudyingHere || item.endDate !== '') ? ' - ' : ''}
                    {item.isStudyingHere && 'Present'}
                    {item.endDate !== '' && !item.isStudyingHere && dateParser(item.endDate)}
                  </p>
                  <p className="text-xs">{item.description}</p>
                </div>
              ))}
            </div>
            {/* End Education*/}

            {/* Languange*/}
            <div>
              <div className="flex justify-start items-start mt-[25px]">
                <p className="text-2xl">
                  <span className="block text-center">Languanges</span>
                </p>
              </div>
              {/* Divider*/}
              <div className="justify-start border-t-[3px] border-gray-400 rounded-sm mb-4"></div>
              <div className="flex justify-start items-start pt-2 mt-1 ">
                <div className="text-md ">
                  {resumeData.basics.languages.map((item, index) => (
                    <span className="block text-start">
                      <strong>{item.value}</strong>: {['Basic', 'Professional', 'Native'][item.level - 1]}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
