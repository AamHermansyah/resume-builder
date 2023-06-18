import Navigation from "@/components/builder/Navigation/Navigation"
import FormHeader from "@/components/builder/Form/FormHeader";
import ResumePreview from "@/components/builder/Resume/ResumePreview";
import { form } from "@/constants/builder";
import { useState, Suspense } from "react";
import Image from "next/image";
import Button from "../landing-page/Button";
import { MdCancel, MdPrint } from "react-icons/md";
import dynamic from "next/dynamic";
import Cookies from "js-cookie";

const ResumePreviewMode = dynamic(() => import('@/components/builder/Resume/ResumePreviewMode'));

function BuilderLayout() {
  const [isActiveFormId, setIsActiveFormId] = useState(form[0].id);
  const [isActivePreview, setIsActivePreview] = useState(false);

  const dirLayout = Cookies.get('layout') || 'left';

  return (
    <>
      {/* Preview Modal */}
      {isActivePreview && (
        <div
        className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 backdrop-blur z-[999] print:hidden"
        onClick={() => {
          setIsActivePreview(false);
        }}
        >
          <Suspense>
            <ResumePreviewMode />
          </Suspense>
          <div className="absolute bottom-5 left-3 flex gap-2 sm:gap-4">
            <button
              type="button"
              className="text-white text-sm py-2 px-3 rounded-full bg-tertiary flex gap-2 items-center shadow-md"
              onClick={(e) => {
                e.stopPropagation();
                setIsActivePreview(false);
              }}
            >
              <MdCancel fontSize={24} />
              Close
            </button>

            <button
              type="button"
              className="text-white text-sm py-2 px-3 rounded-full bg-sky-500 flex gap-2 items-center shadow-md"
              onClick={(e) => {
                e.stopPropagation();
                globalThis?.print();
              }}
            >
              <MdPrint fontSize={24} />
              Print
            </button>
          </div>
        </div>
      )}

      <Navigation
        onClickPreview={() => {
          setIsActivePreview(true);
        }}
      />
      <div className="relative mt-[72px] md:mt-12 min-h-screen bg-gradient-to-tr from-tertiary-semi to-violet-300 px-4 lg:px-10 overflow-hidden print:mt-0 print:px-0 print:py-0">
        <div className={`
            ${dirLayout === 'left' ? 'flex-col md:flex-row' 
              : dirLayout === 'right' ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col items-center'
            }
            relative mt-10 flex gap-x-10 items-stretch print:hidden
          `}
        >
          <div className="flex-1">
            <div className="w-full text-center bg-white rounded-[20px] overflow-x-auto hidden-scollbar">
              <div className="whitespace-nowrap ">
                <FormHeader
                  onClickButton={(id) => {
                    setIsActiveFormId(id);
                  }}
                  isActiveButton={isActiveFormId}
                />
              </div>
            </div>
          </div>
          {dirLayout !== 'top' && <div className="hidden md:block flex-[0.7]"></div>}
        </div>

        <div className={`
            ${dirLayout === 'left' ? 'flex-col md:flex-row mb-10' 
              : dirLayout === 'right' ? 'flex-col md:flex-row-reverse mb-10' : 'flex-col items-center'
            }
            relative flex gap-x-10 gap-y-4 items-start`
          }
        >
          <div className="flex-1 w-full print:hidden">
            {form.map((item) => {
              if (item.id === isActiveFormId) {
                return (
                  <div key={item.id} className="px-4 py-5 lg:px-7 my-4 md:my-10 bg-white rounded-[20px]">
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
          <div className={`
              ${dirLayout === 'top' ? 'mb-10 print:mb-0' : 'md:mt-[42px] flex-[0.7] flex flex-col items-center'}
              w-full rounded-[20px] print:mt-0 overflow-auto hidden-scollbar
            `}
          >
            <ResumePreview />
          </div>
        </div>
      </div>
    </>
  )
}

export default BuilderLayout