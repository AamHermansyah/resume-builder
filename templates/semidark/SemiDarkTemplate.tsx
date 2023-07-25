import { StateContext } from '@/components/builder/Resume/ResumePreview';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import { dateParser } from '@/helpers/utils';
import { cn } from '@/lib/utils';
import { IResume } from '@/stores/index.interface';
import React, { useContext } from 'react';

export default function SemiDarkTemplate({ widthClassName = '' }: { widthClassName?: string }) {
  const resumeData: IResume = useContext(StateContext);

  if (resumeData === null) return null;

  const socialMedia = resumeData
    .basics
    .profiles
    .filter((item) => item.value && item.network === 'linkedin');

  return (
    <div className={cn('print-exact bg-white w-[730px] print:w-[700px]', widthClassName)}>
      <div className="flex">
        <div className="flex w-2/3 rounded-lg min-h-[200px]">
          <div className="mt-4 ml-4">
            <div className="flex items-center justify-center border-2 border-[#1d3344] rounded-md w-[130px] h-[130px] ">
              <img
                src={resumeData.basics.image}
                alt="Profil"
                className="w-[120px] h-[120px] rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col mt-4 ml-4">
            <h1 className="text-[#1d3344] text-3xl font-normal tracking-wide">
              {resumeData.basics.name}
            </h1>
            <h3 className="text-[#b89764] font-semibold text-sm  py-1">
              {resumeData.basics.label}
            </h3>
            <p className="text-xs font-normal w-full">
              {resumeData.basics.summary}
            </p>
          </div>
        </div>
        <div className="flex w-1/3 bg-[#2d343c] min-h-[200px] rounded-lg ml-2">
          <div className="flex flex-col justify-center items-start gap-4 text-white text-base ml-4">
            <div className="flex items-center ">
              <img
                src="https://i.ibb.co/tDXKbSF/email-1.png"
                alt="Logo"
                className="mt-1 w-5 h-5"
              />
              <p className="ml-2">{resumeData.basics.email}</p>
            </div>
            <div className="flex items-center">
              <img
                src="https://i.ibb.co/1Rq7YSJ/smartphone-call.png"
                alt="Logo"
                className="mt-1 w-5 h-5"
              />
              <p className="ml-2">{resumeData.basics.phone}</p>
            </div>
            <div className="flex items-center">
              <img
                src="https://i.ibb.co/Zf9d0x7/pin.png"
                alt="Logo"
                className="mt-1 w-5 h-5"
              />
              <p className="ml-2">{resumeData.basics.country}</p>
            </div>
            <div className="flex items-center">
              <img
                src="https://i.ibb.co/k84bQq3/linkedin.png"
                alt="Logo"
                className="mt-1 w-5 h-5"
              />
              <p className="ml-2">
                {socialMedia[0]?.value || '-'}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col w-2/3 bg-white h-auto pb-8">
          <div className="mt-3 pl-2">
            <div>
              <div className="flex items-center gap-1 mt-3">
                <img
                  src="https://i.ibb.co/RvX0wDg/briefcase.png"
                  alt="Icon"
                  className="m-2 w-6 h-6"
                />
                <h2 className="text-[#1d3344] text-xl font-bold">WORK EXPERIENCE</h2>
              </div>
              <div>
                {resumeData.work.map((item) => (
                  <div key={item.id}>
                    <div className="flex flex-col w-full px-6 py-2">
                      <h3 className="font-bold text-lg">{item.position}</h3>
                      <p className="text-base font-medium">{item.name}</p>
                      <div className="flex justify-between w-full">
                        <p className="text-sm text-[#b89764] font-semibold italic">
                          {item.startDate !== '' && dateParser(item.startDate)}
                          {item.startDate !== '' && (item.isWorkingHere || item.endDate !== '') ? ' - ' : ''}
                          {item.isWorkingHere && 'Present'}
                          {item.endDate !== '' && !item.isWorkingHere && dateParser(item.endDate)}
                        </p>
                        <p className="text-sm text-[#b89764] font-semibold italic">
                          {item.country}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col w-full pl-10">
                      <HTMLRenderer htmlString={item.summary} className="text-sm" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-1 mt-6">
              <img
                src="https://i.ibb.co/VBNHCZd/mortarboard.png"
                alt="Icon"
                className="m-2 w-6 h-6"
              />
              <h2 className="text-[#1d3344] text-xl font-bold">EDUCATION</h2>
            </div>
            <div className="flex flex-col w-[500px] pl-11 py-1">
              {resumeData.education.map((item) => (
                <div key={item.id} className="mb-2">
                  <h3 className="font-bold text-lg">
                    {item.studyType} in {item.area}
                  </h3>
                  <p className="text-base font-medium">{item.institution}</p>
                  <div className="flex justify-start w-full">
                    <p className="text-sm text-[#b89764] font-semibold italic">
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
        </div>
        <div className="flex flex-col w-1/3 bg-[#2d343c] h-auto rounded-lg ml-2 mt-2 p-2 pb-8">
          <div className="flex items-center gap-1 mt-3">
            <img
              src="https://i.ibb.co/bszWb8T/creative-thinking-1.png"
              alt="Icon"
              className="m-2 w-6 h-6"
            />
            <h2 className="text-white font-semibold text-lg">SKILLS</h2>
          </div>
          <div className="ml-3">
            {resumeData.skills.map((item) => (
              <div className="inline-block bg-gray-400 p-1 m-2 rounded-md mt-2">
                <span className="font-medium text-base">{item.name}</span>
              </div>
            ))}
          </div>
          <div>
            <div className="flex items-center gap-1 mt-3">
              <img
                src="https://i.ibb.co/LQyNfbt/certificate-1.png"
                alt="Icon"
                className="m-2 w-6 h-6"
              />
              <h2 className="text-white font-semibold text-lg">CERTIFICATES</h2>
            </div>
            {resumeData.awards.map((item) => (
              <div className="flex flex-col w-full pl-6 py-2" key={item.id}>
                <h3 className="font-semibold text-white text-sm">
                  {item.title}
                </h3>
                <h6 className="italic text-white text-xs">
                  {item.awarder}
                </h6>
                <p className="text-xs text-gray-400">
                  {item.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
