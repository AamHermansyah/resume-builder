import CustomCheckbox from "@/components/form/Checkbox"
import InputDate from "@/components/form/InputDate"
import InputText from "@/components/form/InputText"
import { RichtextEditor } from "@/helpers/common/components/richtext"


function FormExperience() {


  return (
    <form action="" className="mt-[35px]">
      <div className="grid grid-cols-4 sm:grid-cols-3 gap-x-4 lg:gap-x-10 gap-y-4">
        <div className="w-full col-span-4 sm:col-span-2">
          <InputText
            id="organization"
            label="Company"

          />
        </div>
        <div className="w-full col-span-2 sm:col-span-1">
          <InputText
            id="position"
            label="Position"

          />
        </div>
        <div className="w-full col-span-2 sm:col-span-1">
          <InputText
            id="country"
            label="Country"
          />
        </div>
        <div className="w-full col-span-2 sm:col-span-1">
          <InputText
            id="state"
            label="State"
          />
        </div>
        <div className="w-full col-span-2 sm:col-span-1">
          <InputText
            id="pincode"
            label="Pincode"
            type="tel"
          />
        </div>
        <div className="w-full col-span-4 sm:col-span-1">
          <InputDate
            id="startDate"
            label="Start Date"
          />
        </div>
        <div className="w-full col-span-3 sm:col-span-1">
          <InputDate
            id="endDate"
            label="End Date"

          />
        </div>
        <div className="w-full self-center col-span-4 sm:col-span-1">
          <div className="w-full sm:mt-5">
            <CustomCheckbox
              id="present"
              label="Present"

            />
          </div>
        </div>
        <div className="w-full col-span-4 sm:col-span-3">
          <div className="w-full col-span-4 lg:col-span-3">
            {/* <RichtextEditor

            /> */}
          </div>
        </div>
      </div>
    </form>
  )
}

export default FormExperience 