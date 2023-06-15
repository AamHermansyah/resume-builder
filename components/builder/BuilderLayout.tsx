import Navigation from "@/components/builder/Navigation/Navigation"
import FormHeader from "@/components/builder/Form/FormHeader";
import ResumePreview from "@/components/builder/Resume/ResumePreview";
import { form } from "@/constants/builder";
import { useState } from "react";
import Image from "next/image";
import Button from "../landing-page/Button";

function BuilderLayout() {
  const [isActiveFormId, setIsActiveFormId] = useState(form[0].id);

  return (
    <>
      <Navigation />
      <div className="mt-[72px] md:mt-12 relative min-h-screen bg-gradient-to-br from-tertiary-semi to-violet-300 px-4 lg:px-10 overflow-hidden print:mt-0 print:px-0 print:py-0">
        <div className="relative flex flex-col-reverse md:flex-row gap-x-10 items-stretch mt-6 print:hidden">
          <div className="flex-1">
            <div className="w-full text-center bg-white rounded-[20px] overflow-x-auto hidden-scollbar">
              <div className="whitespace-nowrap ">
                <FormHeader
                  onClickButton={(id) => {
                    setIsActiveFormId(id);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="hidden md:block flex-[0.7]">
            <button className="w-max mx-auto px-9 py-4 text-lg font-medium bg-white rounded-lg sm:rounded-[20px] text-tertiary-semi flex items-center justify-center gap-10 active:scale-95 transition">
              Change template
            </button>
          </div>
        </div>

        <div className="mb-10 relative flex flex-col md:flex-row gap-x-10 gap-y-4 items-start">
          <div className="flex-1 w-full print:hidden">
            {form.map((item) => {
              if (item.id === isActiveFormId) {
                return (
                  <div key={item.id} className="py-5 px-4 lg:px-7 my-4 md:my-10 bg-white rounded-[20px]">
                    <div className="mt-4 flex items-center gap-5">
                      <h1 className="text-xl font-medium text-tertiary-bold">
                        {item.title}
                      </h1>
                      <Image
                        src="icons/builder/edit-fill.svg"
                        alt="edit-fill"
                        width={25}
                        height={25}
                        className="object-cover"
                      />
                    </div>
                    {item.component}
                    <div className="w-full col-span-4 lg:col-span-3 flex justify-end mt-4">
                      <Button
                        href="/"
                        title="Save"
                        className="text-sm md:text-base py-[8px] px-6 rounded-sm sm:px-10 border-[2px] border-transparent hover:border-tertiary"
                      />
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="md:mt-[42px] flex-[0.7] flex flex-col items-center w-full rounded-[20px] overflow-auto hidden-scollbar print:mt-0">
            <ResumePreview />
          </div>
        </div>
      </div>
    </>
  )
}

export default BuilderLayout