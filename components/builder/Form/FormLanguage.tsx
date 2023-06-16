import React, { ChangeEvent, useState } from 'react';
import InputText from '@/components/form/InputText';
import SelectOption from '@/components/form/SelectOption';
import { useBasicDetails } from '@/stores/basic';
import { IBasicDetailsItem, IBasicLanguage } from '@/stores/basic.interface';

export default function FormLanguage() {
  const { values: dataBasic, reset } = useBasicDetails();
  const [languages, setLanguages] = useState<IBasicLanguage[]>(dataBasic.languages);

  const handleLanguageChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    const updatedLanguages = [...languages];
    updatedLanguages[index].value = value;

    const newData: IBasicDetailsItem = {
      ...dataBasic,
      languages: updatedLanguages,
    };

    reset(newData);
  };

  const handleLevelChange = (e: ChangeEvent<HTMLSelectElement>, index: number) => {
    const { value } = e.target;
    const updatedLanguages = [...languages];
    updatedLanguages[index].level = +value;

    const newData: IBasicDetailsItem = {
      ...dataBasic,
      languages: updatedLanguages,
    };

    reset(newData);
  };

  const addLanguage = () => {
    setLanguages([...languages, { value: '', level: 0 }]);
  };

  const removeLanguage = () => {
    if (languages.length > 1) {
      const updatedLanguages = [...languages];
      updatedLanguages.pop();

      const newData: IBasicDetailsItem = {
        ...dataBasic,
        languages: updatedLanguages,
      };

      reset(newData);
      setLanguages(updatedLanguages);
    }
  };

  const resetLanguages = () => {
    setLanguages([{ value: '', level: 3 }]);
  };

  return (
    <form action="" className="mt-[35px]">
      {languages.map((language, index) => (
        <div className="flex flex-col lg:flex-row gap-4" key={index}>
          <div className="lg:w-1/2">
            <InputText
              id={`language-${index}`}
              label="Language"
              placeholder="e.g. English"
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleLanguageChange(e, index)}
              value={language.value}
            />
          </div>
          <div className="lg:w-1/2">
            <SelectOption
              id={`level-${index}`}
              label="Level"
              options={[
                {
                  value: '3',
                  title: 'Fluent',
                  isSelected: language.level === 3
                },
                {
                  value: '2',
                  title: 'Intermediate',
                  isSelected: language.level === 2
                },
                {
                  value: '1',
                  title: 'Conversation',
                  isSelected: language.level === 1
                },
              ]}
              value={language.value || ''}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => handleLevelChange(e, index)}
            />
          </div>
        </div>
      ))}
      <div className="flex items-center mt-4 justify-end gap-5">
        {languages.length > 1 && (
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-red-500 border border-tertiary rounded hover:bg-red-500 hover:text-white hover:border-red-500"
            onClick={removeLanguage}
          >
            -
          </button>
        )}
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-white bg-sky-500 rounded hover:bg-sky-600"
          onClick={resetLanguages}
        >
          Reset
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-red-500 border border-tertiary rounded hover:bg-red-500 hover:text-white hover:border-red-500"
          onClick={addLanguage}
        >
          +
        </button>
      </div>
    </form>
  );
}
