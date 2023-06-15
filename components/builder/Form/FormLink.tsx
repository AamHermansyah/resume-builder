import InputText from "@/components/form/InputText"

function FormLink() {
  return (
    <form action="" className="mt-[15px]">
      <div className="flex flex-col  gap-4">
        <div className="lg:w-full">
          <InputText
            id="marital"
            label="Linkedin URL"
          />
        </div>
        <div className="lg:w-full">
          <InputText
            id="marital"
            label="Github URL"
          />
        </div>
        <div className="lg:w-full">
          <InputText
            id="marital"
            label="Portofolio URL"
          />
        </div>
        <div className="lg:w-full">
          <InputText
            id="marital"
            label="Additional Website Url"
          />
        </div>
      </div>
    </form>
  )
}

export default FormLink