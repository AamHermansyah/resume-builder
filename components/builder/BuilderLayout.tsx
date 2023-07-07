import FormHeader from "@/components/builder/Form/FormHeader";
import ResumePreview from "@/components/builder/Resume/ResumePreview";
import { form } from "@/constants/builder";
import { useState, Suspense } from "react";
import Image from "next/image";
import Button from "../landing-page/Button";
import { MdCancel, MdPrint } from "react-icons/md";
import dynamic from "next/dynamic";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { resetResumeStore, useResumeStore } from "@/stores/useResumeStore";

const ResumePreviewMode = dynamic(() => import('@/components/builder/Resume/ResumePreviewMode'));
const Navigation = dynamic(() => import('@/components/builder/Navigation/Navigation'));

function BuilderLayout() {
  const [isActiveFormId, setIsActiveFormId] = useState(form[0].id);
  const [isActivePreview, setIsActivePreview] = useState(false);
  const [logouting, setLogouting] = useState(false);
  const [updating, setUpdating] = useState(false);

  const dirLayout = Cookies.get('layout') || 'left';
  const navigate = useRouter();
  const token = Cookies.get('token');
  const user = JSON.parse(localStorage.getItem('user')!);
  const { resumeData, loading, errorMessage } = useResumeStore(user?.id);

  const fetchUpdateData = async () => {
    setUpdating(true);
    const id = localStorage.getItem('resumeId');
    try {
      const response = await fetch(`/api/builder?id=${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: resumeData })
      });

      if (response.ok) {
        await response.json();
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
    navigate.push('/auth/login');
    setLogouting(true);
    Cookies.remove('token');
    localStorage.removeItem('user');
    localStorage.removeItem('resumeId');
    resetResumeStore();
  }

  if (loading || errorMessage !== null || logouting) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-[10]">
        <div role="status" className="text-center">
          <svg
            aria-hidden="true"
            className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="mt-2 block text-lg uppercase tracking-widest">
            Loading...
          </span>
        </div>
      </div>
    )
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

      <Suspense>
        <Navigation
          onClickPreview={() => {
            setIsActivePreview(true);
          }}
        />
      </Suspense>

      <div className="relative mt-[72px] md:mt-12 min-h-screen bg-gradient-to-tr from-tertiary-semi to-violet-300 px-4 lg:px-10 overflow-hidden print:mt-0 print:px-0 print:py-0">
        <div className={`
            ${dirLayout === 'left' ? 'flex-col md:flex-row'
            : dirLayout === 'right' ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col items-center'
          }
            relative mt-10 flex gap-x-10 items-stretch print:hidden
          `}
        >
          <div className="flex-1">
            <div className="w-full text-center bg-white rounded-lg overflow-x-auto hidden-scollbar">
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
        </div>

        <div className={`
          ${dirLayout === 'left' ? 'flex-col md:flex-row mb-10'
            : dirLayout === 'right' ? 'flex-col md:flex-row-reverse mb-10' : 'flex-col items-center'}
          relative flex gap-x-10 gap-y-4 items-start`}
        >
          <div className="flex-auto w-full print:hidden overflow-auto my-4 md:my-10">
            <div className="overflow-auto hidden-scollbar bg-white px-4 py-5 lg:px-7 rounded-[20px]">
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
                      {item.component}
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
            <button
              className="hidden md:block w-full mt-6 py-2 px-4 text-lg font-semibold bg-red-600 text-white rounded hover:bg-red-700 active:scale-95 transition-all duration-200 disabled:opacity-50"
              onClick={(e) => handleLogout()}
              disabled={logouting}
            >
              {logouting ? 'Logouting...' : 'Logout'}
            </button>
          </div>
          <div className={`
              ${dirLayout === 'top' ? 'mb-10 print:mb-0' : 'md:mt-[42px] flex flex-col items-center'}
              flex-auto overflow-auto lg:overflow-visible w-full rounded-[20px] print:mt-0 hidden-scollbar
            `}
          >
            {resumeData?.basics !== null && (
              <ResumePreview
                loading={loading}
                errorMessage={errorMessage}
                resumeData={resumeData}
                token={token}
              />
            )}
            <button
              className="block md:hidden w-full mt-6 py-2 px-4 text-lg font-semibold bg-red-600 text-white rounded mb-4 hover:bg-red-700 active:scale-95 transition-all duration-200 disabled:opacity-50"
              onClick={(e) => handleLogout()}
              disabled={logouting}
            >
              {logouting ? 'Logouting...' : 'Logout'}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BuilderLayout