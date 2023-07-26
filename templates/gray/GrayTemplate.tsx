import { StateContext } from '@/components/builder/Resume/ResumePreview';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import { dateParser } from '@/helpers/utils';
import { cn } from '@/lib/utils';
import { IResume } from '@/stores/index.interface';
import React, { useContext } from 'react';
import { FaLinkedinIn } from 'react-icons/fa';

export default function GrayTemplate({ widthClassName = '' }: { widthClassName?: string }) {
  const resumeData: IResume = useContext(StateContext);

  if (resumeData === null) return null;

  const socialMedia = resumeData
    .basics
    .profiles
    .filter((item) => item.value && item.network === 'linkedin' || item.network === 'github');

  return (
    <div className={cn('print-exact bg-white w-[730px] print:w-[700px] mx-auto mt-2', widthClassName)}>
      <div className="flex">
        <div className="px-4 gap-4 grid grid-cols-12 w-2/3 bg-gray-200 border-l-8 border-[#1d3344] rounded-lg h-[200px]">
          <div className="mt-6 col-span-3">
            <img
              src={resumeData.basics.image}
              alt="Profil"
              className="w-full aspect-square object-cover border-4 border-[#f3b943]"
            />
          </div>
          <div className="col-span-9 flex flex-col mt-4">
            <h1 className="text-[#1d3344] text-2xl font-normal tracking-wide">
              {resumeData.basics.name}
            </h1>
            <h3 className="text-[#f3b943] text-sm font-normal">
              {resumeData.basics.label}
            </h3>
            <p className="text-xs font-normal w-full">
              {resumeData.basics.summary}
            </p>
          </div>
        </div>
        <div className="flex w-1/3 bg-[#1d3344] h-[200px] rounded-lg ml-2">
          <div className="flex flex-col justify-center items-start gap-2 text-white text-xs ml-6">
            <div className="flex items-center ">
              <img
                src="https://i.ibb.co/XbnFjdj/email-2-Copy.png"
                alt="Logo"
                className="mt-1 w-5 h-5"
              />
              <p className="ml-2">{resumeData.basics.email}</p>
            </div>
            <div className="flex items-center">
              <img
                src="https://i.ibb.co/GtrWh48/smartphone-1.png"
                alt="Logo"
                className="mt-1 w-5 h-5"
              />
              <p className="ml-2">{resumeData.basics.phone}</p>
            </div>
            <div className="flex items-center">
              <img
                src="https://i.ibb.co/9YsH3cP/pin-1-Copy.png"
                alt="Logo"
                className="mt-1 w-5 h-5"
              />
              <p className="ml-2">{resumeData.basics.country}</p>
            </div>
            <div className="flex items-center">
              <div className="mt-1 bg-[#ECB543] w-5 aspect-square flex items-center justify-center rounded-full">
                <FaLinkedinIn fontSize={13} color="#1D3344" />
              </div>
              <p className="ml-2">
                linkedin.com/in/{socialMedia[0].value}
              </p>
            </div>
            <div className="flex items-center">
              <img
                src="https://i.ibb.co/WtD2nSV/github-Copy.png"
                alt="Logo"
                className="mt-1 w-5 h-5"
              />
              <p className="ml-2">github.com/{socialMedia[1].value}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex pl-3">
        <div className="flex flex-col w-2/3 bg-white h-auto pb-8">
          <div className="mt-3 pl-2">
            {resumeData.skills.length > 0 && (
              <div>
                <div className="pl-2 flex items-center gap-3 mt-3">
                  <img
                    src="https://i.ibb.co/zsKcYfp/creative-thinking.png"
                    alt="Icon"
                    className="w-6 h-6"
                  />
                  <h2 className="text-[#1d3344] font-semibold text-lg">SKILLS</h2>
                </div>
                <p className="col-span-2 text-lg">
                  {resumeData.skills
                    .map((skill, index, arr) => {
                      if (index === arr.length - 1) return `and ${skill.name}`;
                      return `${skill.name},`
                    })
                    .join(' ')
                  }
                </p>
              </div>
            )}
            <div className="flex items-center gap-1 mt-3">
              <img
                src="https://i.ibb.co/RvX0wDg/briefcase.png"
                alt="Icon"
                className="m-2 w-6 h-6"
              />
              <h2 className="text-[#1d3344] font-semibold text-lg">
                WORK EXPERIENCE
              </h2>
            </div>
            <div className="w-full">
              {resumeData.work.map((item) => (
                <div key={item.id}>
                  <div className="flex flex-col w-full py-2">
                    <h3 className="font-semibold text-lg">{item.position}</h3>
                    <p className="text-lg">{item.name}</p>
                    <div className="flex justify-between">
                      <p className="text-lg text-yellow-500">{item.country}</p>
                      <p className="text-lg text-yellow-500">
                        {item.startDate !== '' && dateParser(item.startDate)}
                        {item.startDate !== '' && (item.isWorkingHere || item.endDate !== '') ? ' - ' : ''}
                        {item.isWorkingHere && 'Present'}
                        {item.endDate !== '' && !item.isWorkingHere && dateParser(item.endDate)}
                      </p>
                    </div>
                    <div className="pl-2">
                      <HTMLRenderer htmlString={item.summary} className="text-sm" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="pl-2 w-full flex items-center justify-start gap-3 mt-3">
                <img
                  src="https://i.ibb.co/qpthDXs/notes.png"
                  alt="Icon"
                  className="w-6 h-6"
                />
                <h2 className="text-[#1d3344] font-semibold text-lg">
                  PERSONAL PROJECT
                </h2>
              </div>
              {resumeData.volunteer.map((item) => (
                <div className="py-2" key={item.id}>
                  <h2 className="uppercase">{item.organization}</h2>
                  <h3 className="font-semibold text-sm">
                    {item.position} {item.startDate !== '' && `(${dateParser(item.startDate)}`}
                    {item.startDate !== '' && (item.isVolunteeringNow || item.endDate !== '') ? ' - ' : ''}
                    {item.isVolunteeringNow && 'Present)'}
                    {item.endDate !== '' && !item.isVolunteeringNow && `${dateParser(item.endDate)})`}
                  </h3>
                  <HTMLRenderer htmlString={item.summary} className="text-sm" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/3 bg-gray-200 h-auto rounded-lg ml-2 mt-2 p-2 pb-8">
          <div className="flex items-center gap-1 mt-3">
            <img
              src="https://i.ibb.co/42Zvsbb/certificate.png"
              alt="Icon"
              className="m-2 w-6 h-6"
            />
            <h2 className="text-[#1d3344] font-semibold text-lg">CERTIFICATES</h2>
          </div>
          <div className="pl-2">
            {resumeData.awards.map((item) => (
              <div className="flex flex-col w-full py-2" key={item.id}>
                <h3 className="font-semibold text-sm">
                  {item.title} ({dateParser(item.date)})
                </h3>
                <p className="italic text-gray-600 text-sx">
                  {item.awarder}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-start gap-1 mt-3">
            <img
              src="https://i.ibb.co/vDYsJFF/language.png"
              alt="Icon"
              className="m-2 w-6 h-6"
            />
            <h2 className="text-[#1d3344] font-semibold text-lg">LANGUANGE</h2>
          </div>
          <ul>
            {resumeData.basics.languages.map((language) => (
              <>
                <li className="text-sx ml-6 mt-1">{language.value}</li>
                <li className="flex text-sx ml-6 mt-1 gap-3">
                  {Array.from({
                    length: language.level
                  }).map((fill, index) => (
                    <img
                      key={index}
                      src="https://i.ibb.co/9sR9wKw/radio-button.png"
                      alt="Radio"
                      className="mt-1 w-4 h-4"
                    />
                  ))
                  }
                </li>
              </>
            ))}
          </ul>
          <div>
            <div className="flex items-center justify-start gap-1 mt-3">
              <img
                src="https://i.ibb.co/nCMcRG8/strategy.png"
                alt="Icon"
                className="m-2 w-6 h-6"
              />
              <h2 className="text-[#1d3344] font-semibold text-lg">OBJECTIVES</h2>
            </div>
            <p className="pl-2 text-xs">{resumeData.basics.objective}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
