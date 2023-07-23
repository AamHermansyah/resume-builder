import SelectCustomInput from '@/components/form/SelectCustomInput'
import { useSkills } from '@/stores/skills';
import React from 'react'

function FormSkills() {
  const skills = useSkills();

  return (
    <div className="min-h-[300px] mt-[18px]">
      <div className="mb-4">
        <div>
          <SelectCustomInput
            onChange={data => {
              skills.reset(data);
            }}
            data={skills.values!}
            allow={true}
            id="skills"
          />
        </div>
      </div>
    </div>
  )
}

export default FormSkills