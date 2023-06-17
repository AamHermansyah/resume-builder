import React, { forwardRef, ChangeEvent, InputHTMLAttributes } from 'react';
import InputDate from "@/components/form/InputDate";
import InputText from "@/components/form/InputText";
import { RichtextEditor } from "@/helpers/common/components/richtext";
import { useVoluteeringStore } from "@/stores/volunteering"
import { IVolunteeringItem } from "@/stores/volunteering.interface";
import dayjs from "dayjs";

const CustomCheckbox1 = forwardRef<HTMLInputElement, {
  id: string;
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}>(({ id, label, checked, onChange, ...props }, ref) => {
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.checked);
    }
  };

  return (
    <div className="flex items-center gap-[10px]">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleCheckboxChange}
        ref={ref}
        {...props}
      />
      <label
        htmlFor={id}
        className="text-[15px] font-medium text-tertiary-semi"
      >
        {label}
      </label>
    </div>
  );
});

function FormProjects() {
  const { volunteeredExps, updatedVolunteeringExp } = useVoluteeringStore();

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

  const handlePresentCheckbox = (index: number, checked: boolean) => {
    const newData: IVolunteeringItem = {
      ...volunteeredExps[index],
      endDate: checked ? dayjs().format("YYYY-MM-DD") : "",
      isVolunteeringNow: checked,
    };

    updatedVolunteeringExp(index, newData);
  };

  return (
    <form action="" className="mt-[35px]">
      {volunteeredExps.map((project, index) => (
        <div key={index} className="grid grid-cols-3 gap-x-4 lg:gap-x-10 gap-y-4">
          <div className="w-full col-span-2">
            <InputText
              id={`organization-${index}`}
              label="Organization"
              defaultValue={project.organization}
              onChange={(e) => handleOnChangeInput(index, e)}
            />
          </div>
          <div className="w-full">
            <InputText
              id={`position-${index}`}
              label="Position"
              defaultValue={project.position}
              onChange={(e) => handleOnChangeInput(index, e)}
            />
          </div>
          <div className="w-full">
            <InputDate
              id={`startDate-${index}`}
              label="Start Date"
              defaultValue={project.startDate || ""}
              onChange={(e) => handleOnChangeInput(index, e)}
            />
          </div>
          <div className="w-full flex items-center gap-[25px] ">
            <InputDate
              id={`endDate-${index}`}
              label="End Date"
              disabled={project.isVolunteeringNow}
              defaultValue={project.endDate || ""}
              onChange={(e) => handleOnChangeInput(index, e)}
            />
            <div className="flex items-center justify-center mt-[25px]">
              <CustomCheckbox1
                id={`present-${index}`}
                label="Present"
                checked={project.isVolunteeringNow}
                onChange={(checked: boolean) => handlePresentCheckbox(index, checked)}
              />
            </div>
          </div>
          <div className="w-full col-span-3">
            <RichtextEditor
              label="Summary"
              id={`project-${index}`}
              value={project.summary}
              onChange={(htmlOutput) => {
                updatedVolunteeringExp(index, {
                  ...project,
                  summary: htmlOutput,
                });
              }}
              name="experiences"
            />
          </div>
        </div>
      ))}
    </form>
  );
}

export default FormProjects;
