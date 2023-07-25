import InputText from "@/components/form/InputText"
import { IInputDisplay } from "@/helpers/constants/index.interface";
import { useBasicDetails } from "@/stores/basic";
import { IBasicDetailsItem } from "@/stores/basic.interface";

type typeProps = {
  validator: IInputDisplay;
}

function FormLink({ validator }: typeProps) {
  const { values: dataBasic, reset } = useBasicDetails();
  // @ts-ignore
  const { profiles } = dataBasic;

  const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name !== 'portfolio') {
      const filterProfiles = profiles.map((profile: any) => {
        if (profile.network === name) {
          return {
            network: name,
            value: value,
          }
        }

        return profile;
      });

      // @ts-ignore
      const newData: IBasicDetailsItem = {
        ...dataBasic,
        profiles: filterProfiles
      }

      reset(newData);
    } else {
      // @ts-ignore
      const newData: IBasicDetailsItem = {
        ...dataBasic,
        url: value,
      }

      reset(newData);
    }
  }

  return (
    <form action="" className="mt-[15px]">
      <div className="grid grid-cols-1 gap-4">
        {validator?.linkedin && (
          <div className="w-full">
            <InputText
              id="linkedin"
              name="linkedin"
              label="Linkedin Username"
              defaultValue={profiles[0].value}
              onChange={handleOnChangeInput}
            />
          </div>
        )}
        {validator?.github && (
          <div className="w-full">
            <InputText
              id="github"
              name="github"
              label="Github Username"
              defaultValue={profiles[1].value}
              onChange={handleOnChangeInput}
            />
          </div>
        )}
        {validator?.instagram && (
          <div className="w-full">
            <InputText
              id="instagram"
              name="instagram"
              label="Instagram Username"
              defaultValue={profiles[2].value}
              onChange={handleOnChangeInput}
            />
          </div>
        )}
        {validator?.portfolio && (
          <div className="w-full">
            <InputText
              id="portfolio"
              name="portfolio"
              label="Portfolio URL"
              defaultValue={dataBasic!.url}
              onChange={handleOnChangeInput}
            />
          </div>
        )}
      </div>
    </form>
  )
}

export default FormLink