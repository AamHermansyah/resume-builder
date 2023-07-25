import FormHeader from "@/components/builder/Form/FormHeader";
import ResumePreview from "@/components/builder/Resume/ResumePreview";
import { form } from "@/constants/builder";
import { useState, Suspense } from "react";
import Image from "next/image";
import Button from "../landing-page/Button";
import { MdCancel, MdPrint } from "react-icons/md";
import dynamic from "next/dynamic";
import Cookies from "js-cookie";
import { resetResumeStore, useResumeStore } from "@/stores/useResumeStore";
import { Loading } from "../ui/loading";
import { signOut } from "next-auth/react";
import { useTemplates } from "@/stores/useTemplate";
import { AVAILABLE_TEMPLATES } from "@/helpers/constants";

const ResumePreviewMode = dynamic(() => import('@/components/builder/Resume/ResumePreviewMode'));
const Navigation = dynamic(() => import('@/components/builder/Navigation/Navigation'));

function BuilderLayout() {
  const [isActiveFormId, setIsActiveFormId] = useState(form[0].id);
  const [isActivePreview, setIsActivePreview] = useState(false);
  const [logouting, setLogouting] = useState(false);
  const [updating, setUpdating] = useState(false);

  const templateId = useTemplates((state) => state.activeTemplate.id);
  const inputDisplay = AVAILABLE_TEMPLATES[templateId].inputDisplay;

  const dirLayout = Cookies.get('layout') || 'left';
  const token = Cookies.get('token');
  const user = JSON.parse(localStorage.getItem('user')!);
  const { resumeData, loading, errorMessage } = useResumeStore(user?.id);

  const fetchUpdateData = async () => {
    setUpdating(true);
    const id = localStorage.getItem('resumeId');
    try {
      const response = await fetch(`/api/builder?id=${id}&userId=${user?.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: resumeData })
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        localStorage.setItem('resumeId', data.data.id);
        alert('Data successfully updated!');
      } else {
        alert('Failed to update data. Try again later');
      }
    } catch (error) {
      alert('Error updating data. Try again later');
      console.error('Error updating data:', error);
    } finally {
      setUpdating(false);
    }
  };

  const handleLogout = () => {
    setLogouting(true);
    Cookies.remove('token');
    localStorage.removeItem('user');
    localStorage.removeItem('resumeId');
    resetResumeStore();
    signOut();
  }

  if (loading || errorMessage !== null || logouting) return <Loading />

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
          ${dirLayout === 'left' ? 'flex-col md:flex-row mb-10'
            : dirLayout === 'right' ? 'flex-col md:flex-row-reverse mb-10' : 'flex-col items-center'}
          relative max-w-[1500px] mx-auto flex gap-x-6 gap-y-4 items-start`}
        >
          <div className="flex-auto w-full print:hidden overflow-auto my-4 md:my-10">
            <div className="w-full text-center bg-white rounded-lg overflow-x-auto custom-scrollbar mb-4 px-4">
              <div className="whitespace-nowrap ">
                <FormHeader
                  onClickButton={(id) => {
                    setIsActiveFormId(id);
                  }}
                  isActiveButton={isActiveFormId}
                  inputDisplay={inputDisplay}
                />
              </div>
            </div>
            <div className="overflow-auto hidden-scrollbar bg-white px-4 py-5 lg:px-7 rounded">
              {form.map((item) => {
                if (item.id === isActiveFormId && resumeData?.basics !== null) {
                  return (
                    <div
                      key={item.id}
                      className="md:min-w-[400px]"
                    >
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
                      {/* @ts-ignore */}
                      {item.component(inputDisplay[item.id])}
                      <div className="w-full col-span-4 lg:col-span-3 flex justify-end mt-4">
                        <Button
                          href="/"
                          title={updating ? 'Saving' : 'Save'}
                          className={`
                            ${updating ? 'opacity-50 cursor-wait hover:bg-tertiary-bold hover:text-white' : ''}
                            text-sm md:text-base py-[8px] px-6 rounded-sm sm:px-10 border-[2px] border-transparent hover:border-tertiary
                          `}
                          onClick={(e) => {
                            e.preventDefault();
                            if (!updating) {
                              fetchUpdateData();
                            }
                          }}
                        />
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div className={`
              ${dirLayout === 'top' ? 'mb-10 print:mb-0' : 'md:mt-[42px] flex flex-col items-center'}
              flex-auto overflow-auto lg:overflow-visible w-full rounded print:mt-0 hidden-scrollbar
            `}
          >
            {resumeData?.basics !== null && (
              <ResumePreview
                token={token}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default BuilderLayout