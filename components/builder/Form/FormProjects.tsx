import CustomCheckbox from "@/components/form/Checkbox"
import InputDate from "@/components/form/InputDate"
import InputText from "@/components/form/InputText"
import InputTextArea from "@/components/form/InputTextArea"

function FormProjects() {
  return (
    <form action="" className="mt-[35px]">
      <div className="grid grid-cols-3 gap-x-4 lg:gap-x-10 gap-y-4">
        <div className="w-full col-span-2">
          <InputText
            id="institue_name"
            label="Name of Institute"
          />
        </div>
        <div className="w-full">
          <InputText
            id="company"
            label="Company"
          />
        </div>
        <div className="w-full">
          <InputDate
            id="start_date"
            label="Start Date"
          />
        </div>
        <div className="w-full">
          <InputDate
            id="end_date"
            label="End Date"
          />
        </div>
        <div className="w-full self-center">
          <div className="w-full mt-5">
            <CustomCheckbox
              id="present"
              label="Present"
            />
          </div>
        </div>
        <div className="w-full col-span-3">
          <div className="w-full col-span-4 lg:col-span-3">
            <InputTextArea
              id="description"
              label="Description"
            />
          </div>
        </div>
      </div>
    </form>
  )
}

export default FormProjects