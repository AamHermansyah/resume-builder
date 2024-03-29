import InputDate from "@/components/form/InputDate";
import InputFile from "@/components/form/InputFile";
import InputText from "@/components/form/InputText";
import InputTextArea from "@/components/form/InputTextArea";
import { IInputDisplay } from "@/helpers/constants/index.interface";
import { useBasicDetails } from "@/stores/basic";
import { IBasicDetailsItem } from "@/stores/basic.interface";
import React from "react";

type typeProps = {
  validator: IInputDisplay;
}

function FormPersonal({ validator }: typeProps) {
  const { values: dataBasic, reset } = useBasicDetails();

  const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // @ts-ignore
    const newData: IBasicDetailsItem = {
      ...dataBasic,
      [name]: value
    }

    reset(newData);
  }

  const handleOnImageUpload = (imageBase64: string) => {
    // @ts-ignore
    const newData: IBasicDetailsItem = {
      ...dataBasic,
      image: imageBase64
    }

    reset(newData);
  };

  return (
    <form action="" className="mt-[35px]">
      <div className="grid grid-cols-3 gap-x-4 gap-y-4">
        <div className="w-full col-span-2">
          <InputText
            id="name"
            name="name"
            label="Fullname"
            onChange={handleOnChangeInput}
            defaultValue={dataBasic!.name}
          />
        </div>

        {validator?.image && (
          <div className="w-full row-span-2">
            <InputFile
              id="dropzone-file"
              onChange={(imageBase64) => {
                handleOnImageUpload(imageBase64);
              }}
              value={dataBasic!.image}
            />
          </div>
        )}

        {validator?.label && (
          <div className="w-full col-span-2">
            <InputText
              id="label"
              name="label"
              label="Job title"
              onChange={handleOnChangeInput}
              defaultValue={dataBasic!.label}
            />
          </div>
        )}
      </div>
      <div className="grid grid-cols-4 lg:grid-cols-3 gap-x-4 gap-y-4 mt-4">
        <div className="w-full col-span-4 sm:col-span-2 lg:col-span-1">
          <InputText
            id="email"
            name="email"
            label="Email"
            onChange={handleOnChangeInput}
            defaultValue={dataBasic!.email}
          />
        </div>

        {validator?.phone && (
          <div className="w-full col-span-4 sm:col-span-2 lg:col-span-1">
            <InputText
              id="phone"
              name="phone"
              label="Phone"
              onChange={handleOnChangeInput}
              defaultValue={dataBasic!.phone}
            />
          </div>
        )}

        {validator?.dob && (
          <div className="w-full col-span-4 sm:col-span-2 lg:col-span-1">
            <InputDate
              id="dob"
              name="dob"
              label="Date of Birth"
              defaultValue={dataBasic!.dob}
              onChange={handleOnChangeInput}
            />
          </div>
        )}

        {validator?.country && (
          <div className="w-full col-span-4 sm:col-span-2 lg:col-span-1">
            <InputText
              id="country"
              name="country"
              label="Nationality"
              onChange={handleOnChangeInput}
              defaultValue={dataBasic!.country}
            />
          </div>
        )}

        {validator?.url && (
          <div className="w-full col-span-4 lg:col-span-2">
            <InputText
              id="url"
              name="url"
              label="Portfolio Website"
              onChange={handleOnChangeInput}
              defaultValue={dataBasic!.url}
            />
          </div>
        )}

        <div className="w-full col-span-4 lg:col-span-3">
          <InputTextArea
            id="summary"
            name="summary"
            label="About"
            onChange={handleOnChangeInput}
            defaultValue={dataBasic!.summary}
          />
        </div>
      </div>
    </form>
  )
}

export default FormPersonal