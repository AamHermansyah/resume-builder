import SelectCustomInput from '@/components/form/SelectCustomInput'
import React, { useState } from 'react'

function FormSkills() {
  const [tags, setTags] = useState<string[]>([])

  return (
    <div className="min-h-[300px] mt-[18px]">
      <label htmlFor="skills" className="text-[15px] pl-4 text-tertiary-semi font-medium">Add Skills</label>
      <div>
        <SelectCustomInput
          onChange={data => setTags(data)}
          data={tags}
          allow={true}
        />
      </div>
    </div>
  )
}

export default FormSkills