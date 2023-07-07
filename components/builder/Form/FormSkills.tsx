import SelectCustomInput from '@/components/form/SelectCustomInput'
import { useFrameworks, useLanguages, useTechnologies, useTools } from '@/stores/skills';
import React from 'react'

function FormSkills() {
  const languages = useLanguages();
  const technologies = useTechnologies();
  const frameworks = useFrameworks();
  const tools = useTools();

  return (
    <div className="min-h-[300px] mt-[18px]">
      <div className="mb-4">
        <label htmlFor="languages" className="text-[15px] pl-4 text-tertiary-semi font-medium">
          Add Programming Languages
        </label>
        <div>
          <SelectCustomInput
            onChange={data => {
              languages.reset(data);
            }}
            data={languages.values!}
            allow={true}
            id="languages"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="technologies" className="text-[15px] pl-4 text-tertiary-semi font-medium">
          Add Technologies
        </label>
        <div>
          <SelectCustomInput
            onChange={data => {
              technologies.reset(data);
            }}
            data={technologies.values!}
            allow={true}
            id="technologies"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="frameworks" className="text-[15px] pl-4 text-tertiary-semi font-medium">
          Add Frameworks
        </label>
        <div>
          <SelectCustomInput
            onChange={data => {
              frameworks.reset(data);
            }}
            data={frameworks.values!}
            allow={true}
            id="frameworks"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="tools" className="text-[15px] pl-4 text-tertiary-semi font-medium">
          Add Tools
        </label>
        <div>
          <SelectCustomInput
            onChange={data => {
              tools.reset(data);
            }}
            data={tools.values!}
            allow={true}
            id="tools"
          />
        </div>
      </div>
    </div>
  )
}

export default FormSkills