'use client';

import BlurComponent from "@/components/BlurComponent";
import Navigation from "@/components/builder/Navigation/Navigation"
import Image from "next/image";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea";
import Button from "@/components/landing-page/Button";

function BuilderPage() {
  return (
    <>
      <Navigation />
      <div className="mt-[72px] md:mt-12 relative min-h-screen px-4 lg:px-10 overflow-hidden">
        <BlurComponent />

        <div className="relative flex flex-col-reverse md:flex-row gap-x-10 items-stretch mt-6">
          <div className="flex-1">
            <div className="w-full text-center bg-white rounded-[20px] overflow-x-auto hidden-scollbar">
              <div className="whitespace-nowrap ">
                {Array.from({ length: 9 }).map((fill, index) => (
                    <button key={index} className={`mx-2.5 sm:mx-5 py-4 cursor-pointer group active:scale-95 transition`}>
                      <Image
                        src="icons/builder/mask-icon.svg"
                        alt="mask-icon"
                        width={25}
                        height={25}
                        className="object-cover group-hover:scale-110 transition"
                      />
                    </button>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block flex-[0.7]">
            <button className="w-max mx-auto px-9 py-4 text-lg font-medium bg-white rounded-lg sm:rounded-[20px] text-tertiary-semi flex items-center justify-center gap-10">
              Change template
            </button>
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row gap-10 items-start">
          <div className="flex-1 w-full">
            <div className="py-5 px-4 lg:px-7 my-10 bg-white rounded-[20px]">
              <div className="mt-4 flex items-center gap-5">
                <h1 className="text-xl font-medium text-tertiary-bold">
                  Edit Personal Details
                </h1>
                <Image
                  src="icons/builder/edit-fill.svg"
                  alt="edit-fill"
                  width={25}
                  height={25}
                  className="object-cover"
                />
              </div>
              <form action="" className="mt-[35px]">
                <div className="grid grid-cols-3 gap-x-4 lg:gap-x-10 gap-y-4">
                  <div className="w-full col-span-2">
                    <Label
                      htmlFor="email"
                      className="px-[15px] text-[15px] font-medium text-tertiary-semi"
                    >
                      Email
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      className="py-6 rounded-[20px] bg-gray-200 border-none"
                    />
                  </div>

                  <div className="w-full row-span-2">
                    <label
                      htmlFor="dropzone-file"
                      className="relative flex flex-col items-center justify-center w-full aspect-square border-[5px] border-tertiary-semi rounded-full cursor-pointer"
                    >
                      <div className="absolute w-[60%] aspect-square flex flex-col items-center justify-center">
                        <Image
                          src="/icons/builder/camera-icon.svg"
                          alt="camera-file-upload"
                          fill={true}
                          className="object-contain"
                        />
                      </div>
                      <div className="absolute bottom-1 right-[10%] w-5 lg:w-10 aspect-square">
                        <Image
                          src="/icons/builder/file-edit-icon.svg"
                          alt="file-edit-upload"
                          fill={true}
                          className="bg-white object-contain z-10"
                        />
                      </div>
                      <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                  </div>

                  <div className="w-full col-span-2">
                    <Label
                      htmlFor="email"
                      className="px-[15px] text-[15px] font-medium text-tertiary-semi"
                    >
                      Email
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      className="py-6 rounded-[20px] bg-gray-200 border-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-4 lg:grid-cols-3 gap-x-4 lg:gap-x-10 gap-y-4 mt-4">
                  {Array.from({ length: 6 }).map((fill, index) => (
                    <div className="w-full col-span-4 sm:col-span-2 lg:col-span-1" key={index}>
                      <Label
                        htmlFor="email"
                        className="px-[15px] text-[15px] font-medium text-tertiary-semi"
                      >
                        Email
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        className="py-6 rounded-[20px] bg-gray-200 border-none"
                      />
                    </div>
                  ))}

                  <div className="w-full col-span-4 lg:col-span-3">
                    <Label
                      htmlFor="email"
                      className="px-[15px] text-[15px] font-medium text-tertiary-semi"
                    >
                      About
                    </Label>
                    <Textarea
                      name="about"
                      id="about"
                      className="w-full py-6 rounded-[20px] bg-gray-200 border-none h-[200px] resize-none"
                    />
                  </div>

                  <div className="w-full col-span-4 lg:col-span-3 flex justify-end mt-4">
                    <Button
                      href="/"
                      title="Save"
                      className="md:text-base py-[8px] px-10 border-[2px] border-transparent hover:border-tertiary"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-[42px] flex-[0.7] flex flex-col items-center w-full">
            <div className="w-full mx-auto relative aspect-[0.72/1]">
              <Image
                src="/images/cv-preview-3.png"
                alt="cv-preview-3"
                fill={true}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BuilderPage