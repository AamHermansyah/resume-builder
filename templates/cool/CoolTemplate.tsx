import { StateContext } from '@/components/builder/Resume/ResumePreview';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import { dateParser } from '@/helpers/utils';
import { cn } from '@/lib/utils';
import { IResume } from '@/stores/index.interface';
import React, { useContext } from 'react';

import { Proza_Libre } from 'next/font/google'

const prozaLibre = Proza_Libre({ subsets: ['latin'], weight: ["400", "500", "600", "700", "800"] })

export default function MinimalistTemplate({ widthClassName = '' }: { widthClassName?: string }) {
  const resumeData: IResume = useContext(StateContext);

  if (resumeData === null) return null;

  return (
    <div className={cn('relative print-exact bg-white w-[730px] print:w-[700px]', widthClassName, prozaLibre.className)}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="flex justify-center w-[200px] bg-[#dbcab9] h-[350px]" />
        <div className="flex justify-center w-[200px] bg-[#f1e7df] h-full" />
      </div>
      <div className="flex pb-10">
        <div className="w-full relative h-full flex text-[#3e3e3e] mt-16">
          {/* Card */}
          <div className="bg-white ml-10 shadow-lg w-[300px] p-4 relative z-20 border-2 border-[#8b8a81] mb-4 ">
            <div className="profile">
              <div className="flex items-center justify-center h-[300px]">
                <img
                  src={resumeData.basics.image}
                  alt="Profil"
                  className="w-[200px] h-[200px] rounded-full"
                />
              </div>
            </div>
            <div className="contact">
              <div className="flex justify-center items-center">
                <div className="flex flex-col justify-center items-start gap-2">
                  <div className="flex pt-2 pb-4 ">
                    <h2 className="text-xl font-semibold">CONTACT</h2>
                  </div>
                  <div className="flex items-center">
                    <img
                      src="https://i.ibb.co/p2MG8Xw/email-removebg-preview.png"
                      alt="Logo"
                      className="mt-1 w-4 h-4"
                    />
                    <p className="ml-2">
                      {resumeData.basics.email}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img
                      src="https://i.ibb.co/GkLyYZS/telephone-removebg-preview.png"
                      alt="Logo"
                      className="mt-1 w-4 h-4"
                    />
                    <p className="ml-2">
                      {resumeData.basics.phone}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img
                      src="https://i.ibb.co/6WmvxKx/home-icon-silhouette.png"
                      alt="Logo"
                      className="mt-1 w-4 h-4"
                    />
                    <p className="ml-2">
                      {resumeData.basics.country}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img
                      src="https://i.ibb.co/GHgmG7L/monitor-removebg-preview.png"
                      alt="Logo"
                      className="mt-1 w-4 h-4"
                    />
                    <p className="ml-2">
                      {resumeData.basics.url}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="skill">
              <div className="flex justify-center items-center">
                <div className="flex flex-col justify-center items-start gap-2">
                  <div className="flex flex-col pt-8 pb-4">
                    <h2 className="text-xl font-semibold">SKILLS</h2>
                    <ul
                      style={{ listStyle: "disc" }}
                      className="flex flex-col gap-2 pl-5 w-[200px] pt-3"
                    >
                      {resumeData.skills.map((item) => (
                        <li>{item.name}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="reference">
                <div className="flex">
                  <div className="flex flex-col items-start gap-2">
                    <div className="flex flex-col pt-8 pb-4 gap-1">
                      <h2 className="text-xl font-semibold">OBJECTIVE</h2>
                      <p>{resumeData.basics.objective}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Content */}
          <div className="flex-auto mb-10 flex flex-col justify-start items-start px-6 mt-[80px]">
            <div className="profile">
              <h1 className="text-5xl font-semibold tracking-widest pb-2 leading-[60px]">
                {resumeData.basics.name}
              </h1>
              <p className="text-xl tracking-wider">
                {resumeData.basics.label}
              </p>
              <p className="mt-10 text-base tracking-wide">
                {resumeData.basics.summary}
              </p>
            </div>
            <div className="experience pr-6">
              <h2 className="text-xl font-semibold tracking-wider mt-8">
                RELEVANT EXPERIENCE
              </h2>
              <div>
                {resumeData.work.map((item) => (
                  <div key={item.id}>
                    <h3 className="text-sm font-semibold mt-3">
                      {item.position}
                    </h3>
                    <p className="mt-1">
                      {item.name} | {item.startDate !== '' && dateParser(item.startDate)}
                      {item.startDate !== '' && (item.isWorkingHere || item.endDate !== '') ? ' - ' : ''}
                      {item.isWorkingHere && 'Present'}
                      {item.endDate !== '' && !item.isWorkingHere && dateParser(item.endDate)}
                    </p>
                    <HTMLRenderer htmlString={item.summary} className="text-sm" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
