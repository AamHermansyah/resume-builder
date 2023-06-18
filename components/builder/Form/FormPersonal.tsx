import InputDate from "@/components/form/InputDate";
import InputFile from "@/components/form/InputFile";
import InputText from "@/components/form/InputText";
import InputTextArea from "@/components/form/InputTextArea";
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

  const handleOnImageUpload = (imageBase64: string) => {
    const newData: IBasicDetailsItem = {
      ...dataBasic,
      image: imageBase64
    }

    reset(newData);
  };

  return (
    <form action="" className="mt-[35px]">
      <div className="grid grid-cols-3 gap-x-4 lg:gap-x-10 gap-y-4">
        <div className="w-full col-span-2">
          <InputText
            id="name"
            name="name"
            label="Fullname"
            onChange={handleOnChangeInput}
            defaultValue={dataBasic.name}
          />
        </div>

        <div className="w-full row-span-2">
          <InputFile
            id="dropzone-file"
            onChange={(imageBase64) => {
              handleOnImageUpload(imageBase64);
            }}
            value={dataBasic.image}
          />
        </div>

        <div className="w-full col-span-2">
          <InputText
            id="label"
            name="label"
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
            name="email"
            label="Email"
            onChange={handleOnChangeInput}
            defaultValue={dataBasic.email}
          />
        </div>

        <div className="w-full col-span-4 sm:col-span-2 lg:col-span-1">
          <InputText
            id="phone"
            name="phone"
            label="Phone"
            onChange={handleOnChangeInput}
            defaultValue={dataBasic.phone}
          />
        </div>

        <div className="w-full col-span-4 sm:col-span-2 lg:col-span-1">
          <InputDate
            id="dob"
            name="dob"
            label="Date of Birth"
            defaultValue={dataBasic.dob}
            onChange={handleOnChangeInput}
          />
        </div>

        <div className="w-full col-span-4 sm:col-span-2 lg:col-span-1">
          <InputText
            id="country"
            name="country"
            label="Nationality"
            onChange={handleOnChangeInput}
            defaultValue={dataBasic.location.country}
          />
        </div>

        <div className="w-full col-span-4 lg:col-span-2">
          <InputText
            id="url"
            name="url"
            label="Portfolio Website"
            onChange={handleOnChangeInput}
            defaultValue={dataBasic.url}
          />
        </div>

        <div className="w-full col-span-4 lg:col-span-3">
          <InputTextArea
            id="summary"
            name="summary"
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