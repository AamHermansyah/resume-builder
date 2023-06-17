import React, { forwardRef, ChangeEvent, InputHTMLAttributes } from 'react';
import InputDate from "@/components/form/InputDate";
import InputText from "@/components/form/InputText";
import { RichtextEditor } from "@/helpers/common/components/richtext";
import { useVoluteeringStore } from "@/stores/volunteering"
import { IVolunteeringItem } from "@/stores/volunteering.interface";
import dayjs from "dayjs";
import CustomCheckbox from '@/components/form/Checkbox';
import { IoMdAdd } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';

function FormProjects() {
  const { volunteeredExps, updatedVolunteeringExp, remove, add, reset } = useVoluteeringStore();

  const handleOnChangeInput = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    updatedVolunteeringExp(index, {
      ...volunteeredExps[index],
      [name]: value,
    });
  };

  const handlePresentCheckbox = (index: number, e: React.FormEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const state = target.dataset.state;
    const isChecked = !(state === 'checked');

    const newData: IVolunteeringItem = {
      ...volunteeredExps[index],
      endDate: dayjs().format('YYYY-MM-DD'),
      isVolunteeringNow: isChecked
    }

    updatedVolunteeringExp(index, newData);
  }

  const handleDelete = (index: number) => {
    remove(index);
  }

  const handleAdd = () => {
    // add(initValue);
  }

  const handleReset = () => {
    // reset([initValue]);
  }

  return (
    <form action="" className="mt-[35px]">
      {volunteeredExps.map((project, index) => (
        <div key={project.id}>
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
          <div className="grid grid-cols-3 gap-x-4 lg:gap-x-10 gap-y-4">
            <div className="w-full col-span-2">
              <InputText
                id="organization"                
                label="Organization"
                defaultValue={project.organization}
                onChange={(e) => handleOnChangeInput(index, e)}
              />
            </div>
            <div className="w-full">
              <InputText
                id="position"
                label="Position"
                defaultValue={project.position}
                onChange={(e) => handleOnChangeInput(index, e)}
              />
            </div>
            <div className="w-full">
              <InputDate
                id="startDate"
                label="Start Date"
                defaultValue={project.startDate || ""}
                onChange={(e) => handleOnChangeInput(index, e)}
              />
            </div>
            <div className="w-full flex items-center gap-[25px] ">
              <InputDate
                id="endDate"
                label="End Date"
                disabled={project.isVolunteeringNow}
                defaultValue={project.endDate || ""}
                onChange={(e) => handleOnChangeInput(index, e)}
              />
              <div className="flex items-center justify-center mt-[25px]">
                <CustomCheckbox
                  id="present"
                  label="Present"
                  checked={project.isVolunteeringNow}
                  onClick={(e) => handlePresentCheckbox(index, e)}
                />
              </div>
            </div>
            <div className="w-full col-span-3">
              <RichtextEditor
                label="Summary"
                id="project"
                value={project.summary}
                onChange={(htmlOutput) => {
                  updatedVolunteeringExp(index, {
                    ...project,
                    summary: htmlOutput,
                  });
                }}
                name="project"
              />
            </div>
          </div>
        </div>
      ))}
      <div className="flex items-center justify-start gap-5">
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-white bg-orange-400 border border-orange-400 rounded hover:bg-orange-500"
          // onClick={handleReset}
        >
          Reset
        </button>
        <button
          type="button"
          className="w-[50px] flex justify-center py-2 text-sm font-medium text-white bg-sky-500 border border-sky-500 rounded hover:bg-sky-600"
          // onClick={handleAdd}
        >
          <IoMdAdd fontSize={20} />
        </button>
      </div>
    </form>
  );
}

export default FormProjects;
