import InputText from "@/components/form/InputText"
import InputTextArea from "@/components/form/InputTextArea"
import SelectOption from "@/components/form/SelectOption";

export default function FormLanguage() {
  return (
    <form action="" className="mt-[35px]">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="lg:w-1/2">
          <InputText
            id="marital"
            label="Language"
            placeholder="e.g. English"
          />
        </div>

        <div className="lg:w-1/2">
          <SelectOption
            id="gender"
            label="Expertise"
            options={[
              {
                value: '',
                title: 'Select Your Level',
                isSelected: true,
                isDisabled: true
              },
              {
                value: '1',
                title: 'Conversation',
              },
              {
                value: '2',
                title: 'Intermediate',
              },
              {
                value: '3',
                title: 'Fluent',
              },
            ]}
          />
        </div>
      </div>

      <div className="mt-4">
        <InputTextArea
          id="additionalInformation"
          label="Additional Information"
        />
      </div>
    </form>
  )
}
