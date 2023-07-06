import React, { useEffect } from 'react';
import { Context, createContext } from 'react';
import { useResumeStore } from '@/stores/useResumeStore';
import { useTemplates } from '@/stores/useTemplate';
import { AVAILABLE_TEMPLATES } from '@/helpers/constants';
import Cookies from 'js-cookie';

// TODO: need to define types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export let StateContext: Context<any> = createContext(null);

const resumePreview = ({ CustomTemplate }: { CustomTemplate?: React.FC<{ widthClassName?: string | undefined; }> | undefined }) => {
  const resumeData = useResumeStore();
  const templateId = useTemplates((state) => state.activeTemplate.id);
  const Template = AVAILABLE_TEMPLATES[templateId].component;
  StateContext = createContext(resumeData);

  useEffect(() => {
    const selectedTemplateId =
      localStorage.getItem('selectedTemplateId') || AVAILABLE_TEMPLATES['modern'].id;
    useTemplates.getState().setTemplate(AVAILABLE_TEMPLATES[selectedTemplateId]);
  }, []);

  return (
    <StateContext.Provider value={resumeData}>
      <div className={Cookies.get('layout') === 'top' ? 'md:flex justify-center' : 'w-full'}>
        {CustomTemplate && <CustomTemplate />}
        {!CustomTemplate && Template && <Template />}
      </div>
    </StateContext.Provider>
  );
};

export default resumePreview;