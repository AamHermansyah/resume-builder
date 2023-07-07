import React, { ChangeEvent, useState } from "react";
import InputDate from "@/components/form/InputDate";
import InputText from "@/components/form/InputText";
import InputTextArea from "@/components/form/InputTextArea";
import { useAwards, IAwardItem } from "@/stores/awards";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const initValue = {
  title: '',
  awarder: '',
  date: null,
  summary: '',
  id: crypto.randomUUID(),
}

function FormCertificate() {
  const { awards, updateAward, add, remove, reset } = useAwards();

  const handleOnChangeInput = (index: number, e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    const updatedAwardItem: IAwardItem = {
      ...awards![index],
      [name]: value,
    };

    updateAward(index, updatedAwardItem);
  };

  const handleDelete = (index: number) => {
    remove(index);
  }

  const handleAdd = () => {
    add(initValue);
  }

  const handleReset = () => {
    reset([initValue]);
  }

  return (
    <div>
      {awards!.map((certificate, index) => (
        <div key={index}>
          {index > 0 && (
            <>
              <div className="h-[3px] w-full bg-gray-500 rounded-full mt-6 mb-4" />
              <div className="py-2 flex justify-end">
                <button
                  type="button"
                  className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                  onClick={() => handleDelete(index)}
                >
                  <MdDelete fontSize={20} />
                </button>
              </div>
            </>
          )}
          <div className="mt-[15px]">
            <div className="grid grid-cols-3 gap-x-4 gap-y-4">
              <div className="col-span-3 sm:col-span-2">
                <InputText
                  id={`title-${index}`}
                  label="Title"
                  placeholder="e.g. Certified Data Analyst"
                  value={certificate.title}
                  onChange={(e) => handleOnChangeInput(index, e)}
                  name="title"
                />
              </div>
              <div className="col-span-3 sm:col-span-1">
                <InputText
                  id={`awarder-${index}`}
                  label="Awarder"
                  value={certificate.awarder || ''}
                  onChange={(e) => handleOnChangeInput(index, e)}
                  name="awarder"
                />
              </div>
              <div className="col-span-2">
                <InputDate
                  id={`date-${index}`}
                  label="Certified Date"
                  value={certificate.date || ''}
                  onChange={(e) => handleOnChangeInput(index, e)}
                  name="date"
                />
              </div>
            </div>

            <div className="mt-4">
              <InputTextArea
                id={`summary-${index}`}
                label="Description"
                value={certificate.summary}
                onChange={(e) => handleOnChangeInput(index, e)}
                name="summary"
              />
            </div>
          </div>
        </div>
      ))}
      <div className="mt-4 flex items-center justify-start gap-5">
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-white bg-orange-400 border border-orange-400 rounded hover:bg-orange-500"
          onClick={handleReset}
        >
          Reset
        </button>
        <button
          type="button"
          className="w-[50px] flex justify-center py-2 text-sm font-medium text-white bg-sky-500 border border-sky-500 rounded hover:bg-sky-600"
          onClick={handleAdd}
        >
          <IoMdAdd fontSize={20} />
        </button>
      </div>
    </div>
  );
}

export default FormCertificate;
