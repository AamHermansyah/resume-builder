import InputDate from "@/components/form/InputDate";
import InputFile from "@/components/form/InputFile";
import InputText from "@/components/form/InputText";
import InputTextArea from "@/components/form/InputTextArea";
import SelectOption from "@/components/form/SelectOption";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

function FormPersonal() {
  return (
    <form action="" className="mt-[35px]">
      <div className="grid grid-cols-3 gap-x-4 lg:gap-x-10 gap-y-4">
        <div className="w-full col-span-2">
          <InputText
            id="fullname"
            label="Fullname"
          />
        </div>

        <div className="w-full row-span-2">
          <InputFile
            id="dropzone-file"
          />
        </div>

        <div className="w-full col-span-2">
          <InputText
            id="job"
            label="Job title"
            required={false}
          />
        </div>
      </div>
      <div className="grid grid-cols-4 lg:grid-cols-3 gap-x-4 lg:gap-x-10 gap-y-4 mt-4">
        <div className="w-full col-span-4 sm:col-span-2 lg:col-span-1">
          <InputText
            id="email"
            label="Email"
          />
        </div>

        <div className="w-full col-span-4 sm:col-span-2 lg:col-span-1">
          <InputText
            id="phone"
            label="Phone"
          />
        </div>

        <div className="w-full col-span-4 sm:col-span-2 lg:col-span-1">
          <InputDate
            id="dob"
            label="DOB"
          />
        </div>

        <div className="w-full col-span-4 sm:col-span-2 lg:col-span-1">
          <InputText
            id="nationality"
            label="Nationality"
          />
        </div>

        <div className="w-full col-span-4 sm:col-span-2 lg:col-span-1">
          <InputText
            id="marital"
            label="Marital Status"
          />
        </div>

        <div className="w-full col-span-4 sm:col-span-2 lg:col-span-1">
          <SelectOption
            id="gender"
            label="Gender"
            options={[
              {
                value: '',
                title: 'Gender',
                isSelected: true,
                isDisabled: true
              },
              {
                value: 'male',
                title: 'Male',
              },
              {
                value: 'female',
                title: 'Female',
              },
            ]}
          />
        </div>

        <div className="w-full col-span-4 lg:col-span-3">
          <InputTextArea
            id="about"
            label="About"
          />
        </div>
      </div>
    </form>
  )
}

export default FormPersonal