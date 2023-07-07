import InputText from "@/components/form/InputText"
import InputTextArea from "@/components/form/InputTextArea"
import { useBasicDetails } from "@/stores/basic";
import { IBasicDetailsItem } from "@/stores/basic.interface";

function FormExtracurricular() {
  const { values: dataBasic, reset } = useBasicDetails();

  const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = e.target;

    // @ts-ignore
    const newData: IBasicDetailsItem = {
      ...dataBasic,
      objective: value,
    }

    reset(newData);
  }

  return (
    <form action="" className="mt-[15px]">
      <div className="mt-4">
        <InputTextArea
          id="objective"
          name="objective"
          label="Description"
          defaultValue={dataBasic!.objective}
          onChange={handleOnChangeInput}
        />
      </div>
    </form>
  )
}

export default FormExtracurricular