'use client';

import Navigation from "@/components/builder/Navigation/Navigation"
import FormHeader from "@/components/builder/Form/FormHeader";
import ResumePreview from "@/components/builder/Resume/ResumePreview";
import { useState, Suspense } from "react";
import Image from "next/image";
import { MdCancel, MdPrint } from "react-icons/md";
import dynamic from "next/dynamic";
import Button from "@/components/landing-page/Button";

const ResumePreviewMode = dynamic(() => import('@/components/builder/Resume/ResumePreviewMode'));

function HomePage() {
  const [isActivePreview, setIsActivePreview] = useState(false);

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
        <div className="relative flex flex-col-reverse md:flex-row gap-x-10 items-stretch mt-6 print:hidden">
          <div className="flex-1"></div>
          <div className="hidden md:block flex-[0.7]">
            <button className="w-max mx-auto px-9 py-4 text-lg font-medium bg-white rounded-lg sm:rounded-[20px] text-tertiary-semi flex items-center justify-center gap-10 active:scale-95 transition">
              Change template
            </button>
          </div>
        </div>

        <div className="mb-10 relative flex flex-col md:flex-row gap-x-10 gap-y-4 items-start">
          <div className="flex-1">
            <div className="px-4 py-5 lg:px-7 my-4 md:my-10 bg-white rounded-[20px]">
              <div className="mt-4 flex items-center gap-5">
                <h1 className="text-xl font-medium text-tertiary-bold">
                  Choose Template
                </h1>
                <Image
                  src="icons/builder/edit-fill.svg"
                  alt="edit-fill"
                  width={25}
                  height={25}
                  className="object-cover"
                />
              </div>
              Edit disini
            </div>
          </div>
          <div className="md:mt-[42px] flex-[0.7] flex flex-col items-center w-full rounded-[20px] overflow-auto hidden-scollbar print:mt-0">
            <ResumePreview />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage