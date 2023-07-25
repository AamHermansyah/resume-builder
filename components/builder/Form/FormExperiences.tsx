import CustomCheckbox from "@/components/form/Checkbox"
import InputDate from "@/components/form/InputDate"
import InputText from "@/components/form/InputText"
import { RichtextEditor } from "@/helpers/common/components/richtext"
import { IInputDisplay } from "@/helpers/constants/index.interface"
import { useExperiences } from "@/stores/experience"
import { IExperienceItem } from "@/stores/experience.interface"
import dayjs from "dayjs"
import { IoMdAdd } from "react-icons/io"
import { MdDelete } from "react-icons/md"

const initValue = {
  id: crypto.randomUUID(),
  name: '',
  position: '',
  country: '',
  url: '',
  startDate: null,
  endDate: null,
  years: '',
  summary: '',
  isWorkingHere: false,
};

type typeProps = {
  validator: IInputDisplay;
}

function FormExperiences({ validator }: typeProps) {
  const { updateExperience, experiences, remove, add, reset } = useExperiences();

  const handleOnChangeInput = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    updateExperience(index, {
      ...experiences![index],
      [name]: value
    })
  }

  const handleRichTextEditor = (index: number, htmlOutput: string) => {
    updateExperience(index, {
      ...experiences![index],
      summary: htmlOutput
    });
  }

  const handlePresentCheckbox = (index: number, e: React.FormEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const state = target.dataset.state;
    const isChecked = !(state === 'checked');

    const newData: IExperienceItem = {
      ...experiences![index],
      endDate: dayjs().format('YYYY-MM-DD'),
      isWorkingHere: isChecked
    }

    updateExperience(index, newData);
  }

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
    <form action="" className="mt-[35px]">
      {experiences!.map((experience, index) => (
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
          <div className="grid grid-cols-4 sm:grid-cols-3 gap-x-4 gap-y-4">
            <div className="w-full col-span-4 sm:col-span-2">
              <InputText
                name="name"
                id={`name-${index}`}
                label="Company"
                defaultValue={experience.name}
                onChange={(e) => handleOnChangeInput(index, e)}
              />
            </div>
            <div className="w-full col-span-2 sm:col-span-1">
              <InputText
                name="position"
                id={`position-${index}`}
                label="Position"
                defaultValue={experience.position}
                onChange={(e) => handleOnChangeInput(index, e)}
              />
            </div>
            {validator?.country && (
              <div className="w-full col-span-2 sm:col-span-1">
                <InputText
                  name="country"
                  id={`country-${index}`}
                  label="Country"
                  defaultValue={experience.country}
                  onChange={(e) => handleOnChangeInput(index, e)}
                />
              </div>
            )}
            {validator?.date && (
              <div className="w-full col-span-2 sm:col-span-1">
                <InputDate
                  name="startDate"
                  id={`startDate-${index}`}
                  label="Start Date"
                  defaultValue={experience.startDate || ''}
                  onChange={(e) => handleOnChangeInput(index, e)}
                />
              </div>
            )}
            {validator?.date && (
              <div className="w-full col-span-2 sm:col-span-1">
                <InputDate
                  name="endDate"
                  id={`endDate-${index}`}
                  label="End Date"
                  disabled={experience.isWorkingHere}
                  defaultValue={experience.endDate || ''}
                  onChange={(e) => handleOnChangeInput(index, e)}
                />
              </div>
            )}
            {validator?.date && (
              <div className="w-full self-center col-span-4 sm:col-span-1">
                <div className="w-full">
                  <CustomCheckbox
                    name="present"
                    id={`present-${index}`}
                    label="Present"
                    checked={experience.isWorkingHere}
                    onClick={(e) => handlePresentCheckbox(index, e)}
                  />
                </div>
              </div>
            )}
            {validator?.summary && (
              <div className="w-full col-span-4 sm:col-span-3">
                <div className="w-full col-span-4 lg:col-span-3">
                  <RichtextEditor
                    label="summary"
                    id={`experience-${index + 1}`}
                    value={experience.summary}
                    onChange={(htmlOuput) => {
                      handleRichTextEditor(index, htmlOuput)
                    }}
                    name="summary"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
      <div className="flex items-center justify-start gap-5">
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-white bg-tertiary border border-tertiary rounded hover:bg-tertiary-bold"
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
    </form>
  )
}

export default FormExperiences 