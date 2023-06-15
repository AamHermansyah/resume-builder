import MordernTemplate from '@/templates/modern/MordernTemplate'
// import React from 'react'

// function ResumePreview() {
//   return (
//     <div className="w-full">
//       <MordernTemplate />
//     </div>
//   )
// }

// export default ResumePreview

import { Context, createContext } from 'react';
import { useResumeStore } from '@/stores/useResumeStore';

// TODO: need to define types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export let StateContext: Context<any> = createContext(null);

const resumePreview = () => {
  const resumeData = useResumeStore();
  StateContext = createContext(resumeData);

  return (
    <StateContext.Provider value={resumeData}>
      <div className="w-full">
        <MordernTemplate />
      </div>
    </StateContext.Provider>
  );
};

export default resumePreview;