import InputDate from "@/components/form/InputDate";
import InputFile from "@/components/form/InputFile";
import InputText from "@/components/form/InputText";
import InputTextArea from "@/components/form/InputTextArea";
import SelectOption from "@/components/form/SelectOption";
import { useBasicDetails } from "@/stores/basic";
import { IBasicDetailsItem } from "@/stores/basic.interface";
import React from "react";

function FormPersonal() {
  const { values: dataBasic, reset } = useBasicDetails();

  const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name !== 'country') {
      const newData: IBasicDetailsItem = {
        ...dataBasic,
        [name]: value
      }

      reset(newData);
    } else {
      const newData: IBasicDetailsItem = {
        ...dataBasic,
        location: {
          ...dataBasic.location,
          country: value
        }
      }

      reset(newData);
    }
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Add null check using the optional chaining operator
  
    if (file) {
      const reader = new FileReader();
  
      reader.onloadend = () => {
        const imageBase64 = reader.result as string;
        const newData: IBasicDetailsItem = {
          ...dataBasic,
          image: imageBase64
        }
  
        reset(newData);
      };
  
      reader.readAsDataURL(file);
    }
  };

  return (
    <form action="" className="mt-[35px]">
      <div className="grid grid-cols-3 gap-x-4 lg:gap-x-10 gap-y-4">
        <div className="w-full col-span-2">
          <InputText
            id="name"
            label="Fullname"
            onChange={handleOnChangeInput}
            defaultValue={dataBasic.name}
          />
        </div>

        <div className="w-full row-span-2">
          <InputFile
            id="dropzone-file"
            onChange={handleImageUpload}
          />
        </div>

        <div className="w-full col-span-2">
          <InputText
            id="label"
            label="Job title"
            required={false}
            onChange={handleOnChangeInput}
            defaultValue={dataBasic.label}
          />
        </div>
      </div>
      <div className="grid grid-cols-4 lg:grid-cols-3 gap-x-4 lg:gap-x-10 gap-y-4 mt-4">
        <div className="w-full col-span-4 sm:col-span-2 lg:col-span-1">
          <InputText
            id="email"
            label="Email"
            onChange={handleOnChangeInput}
            defaultValue={dataBasic.email}
          />
        </div>

        <div className="w-full col-span-4 sm:col-span-2 lg:col-span-1">
          <InputText
            id="phone"
            label="Phone"
            onChange={handleOnChangeInput}
            defaultValue={dataBasic.phone}
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
            id="country"
            label="Nationality"
            onChange={handleOnChangeInput}
            defaultValue={dataBasic.location.country}
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
            id="summary"
            label="About"
            onChange={handleOnChangeInput}
            defaultValue={dataBasic.summary}
          />
        </div>
      </div>
    </form>
  )
}

export default FormPersonal