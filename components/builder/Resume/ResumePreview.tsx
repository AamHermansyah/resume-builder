import React, { useEffect } from 'react';
import { Context, createContext } from 'react';
import { getResumeStore, useResumeStore } from '@/stores/useResumeStore';
import { useTemplates } from '@/stores/useTemplate';
import { AVAILABLE_TEMPLATES } from '@/helpers/constants';
import Cookies from 'js-cookie';

type propTypes = {
  CustomTemplate?: React.FC<{ widthClassName?: string | undefined; }> | undefined;
  token?: string;
}

// TODO: need to define types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export let StateContext: Context<any> = createContext(null);

const resumePreview = ({ CustomTemplate, token }: propTypes) => {
  const templateId = useTemplates((state) => state.activeTemplate.id);
  const Template = AVAILABLE_TEMPLATES[templateId].component;
  const resumeData = getResumeStore();

  StateContext = createContext(resumeData);

  useEffect(() => {
    if (token) {
      const selectedTemplateId =
        localStorage.getItem('selectedTemplateId') || AVAILABLE_TEMPLATES['modern'].id;
      useTemplates.getState().setTemplate(AVAILABLE_TEMPLATES[selectedTemplateId]);
    }
  }, [token]);

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