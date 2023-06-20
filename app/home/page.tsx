'use client';

import Navigation from "@/components/builder/Navigation/Navigation"
import ResumePreview from "@/components/builder/Resume/ResumePreview";
import { useState, Suspense } from "react";
import Image from "next/image";
import { MdCancel, MdPrint } from "react-icons/md";
import dynamic from "next/dynamic";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { AVAILABLE_TEMPLATES } from "@/helpers/constants";
import { useTemplates } from "@/stores/useTemplate";
import { ITemplateContent } from "@/helpers/constants/index.interface";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';

const ResumePreviewMode = dynamic(() => import('@/components/builder/Resume/ResumePreviewMode'));

function HomePage() {
  const { setTemplate, activeTemplate } = useTemplates();
  const [isActivePreview, setIsActivePreview] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<ITemplateContent>(activeTemplate);
  const [activeChangeLayout, setActiveChangeLayout] = useState(Cookies.get('layout') || 'left');
  const navigate = useRouter();
  const fullWidthMode = Cookies.get('fullWidthMode') === 'true' ? true : false;

  const handleChangeLayout = (dir: string) => {
    Cookies.set('layout', dir, {
      expires: 30
    });
    setActiveChangeLayout(dir);
  }

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
        <div className={`${activeChangeLayout === 'top' ? 'max-w-[700px] mx-auto' : ''} mt-10 relative flex md:flex-row gap-x-10 print:hidden`}>
          <div className={`${activeChangeLayout !== 'left' ? 'flex-[0.7]' : ''} flex-1 self-end`}>
            <Link href="/builder" className="block text-white w-max">
              <BsArrowLeft fontSize={26} />
            </Link>
          </div>
          <div className={`${activeChangeLayout !== 'left' ? 'flex-1' : 'flex-[0.7]'} hidden md:block text-center`}>
            <button
              className="text-sm sm:text-base px-6 py-3 font-medium bg-white rounded sm:rounded-md text-tertiary-semi active:scale-95 transition"
              onClick={(e) => {
                selectedTemplate && setTemplate(selectedTemplate);
                navigate.push('/builder');
              }}
            >
              Change template
            </button>
          </div>
        </div>

        <div className={`
            ${activeChangeLayout === 'left' ? 'flex-col md:flex-row' 
              : activeChangeLayout === 'right' ? 'flex-col md:flex-row-reverse' : 'flex-col items-center'
            }
            mb-10 mt-6 relative flex gap-x-10 gap-y-4 items-start
          `}
        >
          <div className={`${fullWidthMode ? 'flex-auto' : 'flex-1'} w-full print:hidden overflow-auto`}>
            <div className={`${fullWidthMode ? 'overflow-auto hidden-scollbar' : ''} bg-white px-4 py-5 lg:px-7 rounded-[20px]`}>
              <div className="px-4 py-5 lg:px-7 bg-white rounded-[20px]">
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
                <div className="mt-4 w-full">
                  <div className="w-full overflow-auto hidden-scollbar px-2 py-4 cursor-pointer flex justify-start gap-6">
                    {Object.keys(AVAILABLE_TEMPLATES).map((key, index) => (
                      <img 
                        key={index}
                        src={AVAILABLE_TEMPLATES[key].thumbnail}
                        alt={`CV Preview ${AVAILABLE_TEMPLATES[key].id}`}
                        className={`
                          ${selectedTemplate?.id === AVAILABLE_TEMPLATES[key].id ? 'outline outline-1 outline-tertiary-semi' : ''}
                          object-contain w-[300px] aspect-[0.73/1] border rounded`
                        }
                        onClick={() => setSelectedTemplate(AVAILABLE_TEMPLATES[key])}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-5 lg:px-7 bg-white rounded-[20px] mt-4 sm:mt-10">
              <div className="mt-4 flex items-center gap-5 mb-[10px]">
                <h1 className="text-xl font-medium text-tertiary-bold ">Layout</h1>
              </div>
              <div className="flex">
                {['top', 'right', 'left'].map((direction, index) => (
                  <div
                    role="button"
                    key={index}
                    className="flex items-center flex-col mr-4 ml-3 gap-1"
                    onClick={() => handleChangeLayout(direction)}
                  >
                    <Image
                      src={`/images/${direction}-layout.png`}
                      alt={`${direction} layout`}
                      width={60}
                      height={60}
                      className={`${activeChangeLayout === direction ? 'scale-110 grayscale' : ''} object-cover rounded transition`}
                    />
                    <p className="capitalize">{direction}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:hidden block my-6 text-center">
              <button className="text-sm sm:text-base px-6 py-3 font-medium bg-white rounded sm:rounded-md text-tertiary-semi active:scale-95 transition">
                Change template
              </button>
            </div>
          </div>
          <div className={`
              ${activeChangeLayout === 'top' ? 'mb-10 print:mb-0' : 'flex flex-col items-center'}
              ${fullWidthMode ? 'flex-auto overflow-auto lg:overflow-visible' : 'flex-[0.7] overflow-auto'}
              w-full rounded-[20px] print:mt-0 hidden-scollbar
            `}
          >
            <ResumePreview CustomTemplate={selectedTemplate?.component || undefined} />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage