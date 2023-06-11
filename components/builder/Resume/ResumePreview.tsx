import Image from 'next/image'
import React from 'react'

function ResumePreview() {
  return (
    <div className="w-full mx-auto relative aspect-[0.72/1]">
      <Image
        src="/images/cv-preview-3.png"
        alt="cv-preview-3"
        fill={true}
        className="object-cover"
      />
    </div>
  )
}

export default ResumePreview