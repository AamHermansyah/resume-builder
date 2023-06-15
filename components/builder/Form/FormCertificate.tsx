import InputText from "@/components/form/InputText"
import InputTextArea from "@/components/form/InputTextArea"

function FormCertificate() {
  return (
    <form action="" className="mt-[15px]">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="lg:w-1/2">
          <InputText
            id="marital"
            label="Title"
            placeholder="e.g. Certified Data Analyst"
          />
        </div>

      </div>

      <div className="mt-4">
        <InputTextArea
          id="additionalInformation"
          label="Description"
        />
      </div>
    </form>
  )
}

export default FormCertificate