import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

function FormPersonal() {
  return (
    <form action="" className="mt-[35px]">
      <div className="grid grid-cols-3 gap-x-4 lg:gap-x-10 gap-y-4">
        <div className="w-full col-span-2">
          <Label
            htmlFor="fullname"
            className="px-[15px] text-[15px] font-medium text-tertiary-semi"
          >
            Fullname
          </Label>
          <Input
            type="text"
            id="fullname"
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
            htmlFor="job"
            className="px-[15px] text-[15px] font-medium text-tertiary-semi"
          >
            Job title <span className="text-xs text-slate-400 font-medium">(Optional)</span>
          </Label>
          <Input
            type="text"
            id="job"
            className="py-6 rounded-[20px] bg-gray-200 border-none"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 lg:grid-cols-3 gap-x-4 lg:gap-x-10 gap-y-4 mt-4">
        <div className="w-full col-span-4 sm:col-span-2 lg:col-span-1">
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

        <div className="w-full col-span-4 sm:col-span-2 lg:col-span-1">
          <Label
            htmlFor="phone"
            className="px-[15px] text-[15px] font-medium text-tertiary-semi"
          >
            Phone
          </Label>
          <Input
            type="tel"
            id="phone"
            className="py-6 rounded-[20px] bg-gray-200 border-none"
          />
        </div>

        <div className="w-full col-span-4 sm:col-span-2 lg:col-span-1">
          <Label
            htmlFor="dob"
            className="px-[15px] text-[15px] font-medium text-tertiary-semi"
          >
            DOB
          </Label>
          <Input
            type="date"
            id="dob"
            className="py-6 rounded-[20px] bg-gray-200 border-none text-[15px] font-medium text-tertiary-semi uppercase"
          />
        </div>

        <div className="w-full col-span-4 sm:col-span-2 lg:col-span-1">
          <Label
            htmlFor="nationality"
            className="px-[15px] text-[15px] font-medium text-tertiary-semi"
          >
            Nationality
          </Label>
          <Input
            type="text"
            id="nationality"
            className="py-6 rounded-[20px] bg-gray-200 border-none"
          />
        </div>

        <div className="w-full col-span-4 sm:col-span-2 lg:col-span-1">
          <Label
            htmlFor="marital"
            className="px-[15px] text-[15px] font-medium text-tertiary-semi"
          >
            Marital Status
          </Label>
          <Input
            type="text"
            id="marital"
            className="py-6 rounded-[20px] bg-gray-200 border-none"
          />
        </div>

        <div className="w-full col-span-4 sm:col-span-2 lg:col-span-1">
          <Label
            htmlFor="gender"
            className="px-[15px] text-[15px] font-medium text-tertiary-semi"
          >
            Gender
          </Label>
          <Input
            type="text"
            id="gender"
            className="py-6 rounded-[20px] bg-gray-200 border-none"
          />
        </div>

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
            className="w-full py-2 rounded-[20px] bg-gray-200 border-none h-[200px] resize-none"
          />
        </div>
      </div>
    </form>
  )
}

export default FormPersonal