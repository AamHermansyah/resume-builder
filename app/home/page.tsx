'use client';

import Navigation from "@/components/builder/Navigation/Navigation"
import ResumePreview from "@/components/builder/Resume/ResumePreview";
import { useState, Suspense, useEffect } from "react";
import Image from "next/image";
import { MdCancel, MdPrint } from "react-icons/md";
import dynamic from "next/dynamic";
import { AVAILABLE_TEMPLATES } from "@/helpers/constants";
import { useTemplates } from "@/stores/useTemplate";
import { ITemplateContent } from "@/helpers/constants/index.interface";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';
import { signOut } from "next-auth/react";
import { resetResumeStore } from "@/stores/useResumeStore";
import { Loading } from "@/components/ui/loading";

const ResumePreviewMode = dynamic(() => import('@/components/builder/Resume/ResumePreviewMode'));

function HomePage() {
  const { setTemplate, activeTemplate } = useTemplates();
  const [isActivePreview, setIsActivePreview] = useState(false);
  const [logouting, setLogouting] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<ITemplateContent>(activeTemplate);
  const [activeChangeLayout, setActiveChangeLayout] = useState(Cookies.get('layout') || 'left');
  const navigate = useRouter();

  const router = useRouter();
  const token = Cookies.get('token');

  const handleLogout = () => {
    setLogouting(true);
    Cookies.remove('token');
    localStorage.removeItem('user');
    localStorage.removeItem('resumeId');
    resetResumeStore();
    signOut();
  }

  const handleChangeLayout = (dir: string) => {
    Cookies.set('layout', dir, {
      expires: 30
    });
    setActiveChangeLayout(dir);
  }

  useEffect(() => {
    if (token === undefined && !logouting) {
      router.push('/auth/login');
    }
  }, [router, token]);

  if (logouting || token === undefined) return <Loading />

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

      <Suspense>
        <Navigation
          onClickPreview={() => setIsActivePreview(true)}
          onClickLogout={handleLogout}
        />
      </Suspense>

      <div className="relative mt-[72px] md:mt-12 min-h-screen bg-gradient-to-tr from-tertiary-semi to-violet-300 px-4 lg:px-6 overflow-hidden print:mt-0 print:px-0 print:py-0">
        <div className={`
            ${activeChangeLayout === 'left' ? 'flex-col md:flex-row'
            : activeChangeLayout === 'right' ? 'flex-col md:flex-row-reverse' : 'flex-col items-center'
          }
            max-w-[1500px] mx-auto mb-10 mt-10 relative flex justify-center gap-x-6 gap-y-4 items-start
          `}
        >
          <div className="flex-auto md:max-w-[550px] w-full print:hidden overflow-auto bg-white px-4 py-2 lg:px-7 rounded">
            <div className="overflow-auto hidden-scrollbar">
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
              <div className="mt-4 px-1 w-full">
                <div className="max-h-[300px] md:max-h-[400px] overscroll-y-auto grid grid-cols-2 py-4 cursor-pointer gap-6">
                  {Object.keys(AVAILABLE_TEMPLATES).map((key, index) => (
                    <img
                      key={index}
                      src={AVAILABLE_TEMPLATES[key].thumbnail}
                      alt={`CV Preview ${AVAILABLE_TEMPLATES[key].id}`}
                      className={`
                          ${selectedTemplate?.id === AVAILABLE_TEMPLATES[key].id ? 'outline outline-1 outline-tertiary-semi' : ''}
                          object-contain w-full aspect-[0.73/1] border rounded`
                      }
                      onClick={() => setSelectedTemplate(AVAILABLE_TEMPLATES[key])}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                className="text-sm sm:text-base my-4 px-6 py-3 font-medium bg-tertiary rounded sm:rounded-md text-white active:scale-95 transition"
                onClick={(e) => {
                  selectedTemplate && setTemplate(selectedTemplate);
                  navigate.push('/builder');
                }}
              >
                Change template
              </button>
            </div>
            {/* <div className="mt-6 px-4 py-5 lg:px-7 bg-white rounded">
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
            </div> */}
          </div>
          <div className={`
              ${activeChangeLayout === 'top' ? 'mb-10 print:mb-0' : ''}
              overflow-auto w-full md:w-[730px] print:mt-0 hidden-scrollbar
            `}
          >
            <ResumePreview
              CustomTemplate={selectedTemplate?.component || undefined}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage