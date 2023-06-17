import CustomCheckbox from "@/components/form/Checkbox"
import InputDate from "@/components/form/InputDate"
import InputText from "@/components/form/InputText"
import InputTextArea from "@/components/form/InputTextArea"
import { useEducations } from "@/stores/education"
import { IEducationItem } from "@/stores/education.interface"
import dayjs from "dayjs"
import { IoMdAdd } from 'react-icons/io'
import { MdDelete } from "react-icons/md"

const initValue: IEducationItem = {
  institution: '',
  url: '',
  studyType: '',
  area: '',
  startDate: '',
  isStudyingHere: false,
  endDate: '',
  score: '',
  courses: null,
  id: '',
  description: ''
}

function FormEducations() {
  const { academics, add, remove, reset, updateEducation } = useEducations();

  const handleOnChangeInput = (index: number, e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    const newData: IEducationItem = {
      ...academics[index],
      [name]: value
    }

    updateEducation(index, newData);
  }

  const handlePresentCheckbox = (index: number, e: React.FormEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const state = target.dataset.state;
    const isChecked = !(state === 'checked');

    const newData: IEducationItem = {
      ...academics[index],
      endDate: dayjs().format('YYYY-MM-DD'),
      isStudyingHere: isChecked
    }

    updateEducation(index, newData);
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
      {academics.map((academic, index) => (
        <div key={academic.id}>
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
                id="institution"
                label="Name of Institute"
                defaultValue={academic.institution}
                onChange={(e) => handleOnChangeInput(index, e)}
              />
            </div>
            <div className="w-full col-span-4 sm:col-span-1">
              <InputText
                id="studyType"
                label="Degree"
                defaultValue={academic.studyType}
                onChange={(e) => handleOnChangeInput(index, e)}
              />
            </div>
            <div className="w-full col-span-4 sm:col-span-2">
              <InputText
                id="area"
                label="Field Of Study"
                defaultValue={academic.area}
                onChange={(e) => handleOnChangeInput(index, e)}
              />
            </div>
            <div className="w-full col-span-2 sm:col-span-1">
              <InputDate
                id="startDate"
                label="Start Date"
                defaultValue={academic.startDate || ''}
                onChange={(e) => handleOnChangeInput(index, e)}
              />
            </div>
            <div className="w-full col-span-2 sm:col-span-2">
              <InputDate
                id="endDate"
                label="End Date"
                disabled={academic.isStudyingHere}
                defaultValue={academic.endDate || ''}
                onChange={(e) => handleOnChangeInput(index, e)}
              />
            </div>
            <div className="w-full sm:self-center col-span-4 sm:col-span-1">
              <div className="w-full sm:mt-5">
                <CustomCheckbox
                  id="present"
                  label="Present"
                  checked={academic.isStudyingHere}
                  onClick={(e) => {
                    handlePresentCheckbox(index, e);
                  }}
                />
              </div>
            </div>
            <div className="w-full col-span-4 lg:col-span-3">
              <InputTextArea
                id="description"
                label="Description"
                defaultValue={academic.description || ''}
                onChange={(e) => handleOnChangeInput(index, e)}
              />
            </div>
          </div>
        </div>
      ))}
      <div className="flex items-center mt-4 justify-start gap-5">
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
    </form>
  )
}

export default FormEducations