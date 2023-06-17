import CustomCheckbox from "@/components/form/Checkbox"
import InputDate from "@/components/form/InputDate"
import InputText from "@/components/form/InputText"
import { RichtextEditor } from "@/helpers/common/components/richtext"
import { useExperiences } from "@/stores/experience"
import { IExperienceItem } from "@/stores/experience.interface"
import dayjs from "dayjs"
import { IoMdAdd } from "react-icons/io"
import { MdDelete } from "react-icons/md"

function FormExperience() {
  const { updateExperience, experiences, remove, add } = useExperiences();

  const handleOnChangeInput = (index: number, e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    updateExperience(index, {
      ...experiences[index],
      [name]: value
    })
  }

  const handleRichTextEditor = (index: number, htmlOutput: string) => {
    updateExperience(index, {
      ...experiences[index],
      summary: htmlOutput
    });
  }

  const handlePresentCheckbox = (index: number, e: React.FormEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const state = target.dataset.state;
    const isChecked = !(state === 'checked');

    const newData: IExperienceItem = {
      ...experiences[index],
      endDate: dayjs().format('YYYY-MM-DD'),
      isWorkingHere: isChecked
    }

    updateExperience(index, newData);
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
      {experiences.map((experience, index) => (
        <div key={experience.id}>
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
          <div className="grid grid-cols-4 sm:grid-cols-3 gap-x-4 lg:gap-x-10 gap-y-4">
            <div className="w-full col-span-4 sm:col-span-2">
              <InputText
                id="name"
                label="Company"
                defaultValue={experience.name}
                onChange={(e) => handleOnChangeInput(index, e)}
              />
            </div>
            <div className="w-full col-span-2 sm:col-span-1">
              <InputText
                id="position"
                label="Position"
                defaultValue={experience.position}
                onChange={(e) => handleOnChangeInput(index, e)}
              />
            </div>
            <div className="w-full col-span-2 sm:col-span-1">
              <InputText
                id="country"
                label="Country"
                defaultValue={experience.country}
                onChange={(e) => handleOnChangeInput(index, e)}
              />
            </div>
            <div className="w-full col-span-2 sm:col-span-1">
              <InputDate
                id="startDate"
                label="Start Date"
                defaultValue={experience.startDate || ''}
                onChange={(e) => handleOnChangeInput(index, e)}
              />
            </div>
            <div className="w-full col-span-2 sm:col-span-1">
              <InputDate
                id="endDate"
                label="End Date"
                disabled={experience.isWorkingHere}
                defaultValue={experience.endDate || ''}
                onChange={(e) => handleOnChangeInput(index, e)}
              />
            </div>
            <div className="w-full self-center col-span-4 sm:col-span-1">
              <div className="w-full">
                <CustomCheckbox
                  id="present"
                  label="Present"
                  checked={experience.isWorkingHere}
                  onClick={(e) => handlePresentCheckbox(index, e)}
                />
              </div>
            </div>
            <div className="w-full col-span-4 sm:col-span-3">
              <div className="w-full col-span-4 lg:col-span-3">
                <RichtextEditor
                  label="Summary"
                  id={`experience-${index + 1}`}
                  value={experience.summary}
                  onChange={(htmlOuput) => {
                    handleRichTextEditor(index, htmlOuput)
                  }}
                  name="experiences"
                />
              </div>
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
  )
}

// export default FormExperience 