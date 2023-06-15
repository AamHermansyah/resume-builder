import React, { ChangeEvent, useState } from 'react';
import InputText from '@/components/form/InputText';
import SelectOption from '@/components/form/SelectOption';
import { useBasicDetails } from '@/stores/basic';
import { IBasicDetailsItem, IBasicLanguage } from '@/stores/basic.interface';

export default function FormLanguage() {
  const { values: dataBasic, reset } = useBasicDetails();
  const [languages, setLanguages] = useState<IBasicLanguage[]>([{ value: '', level: 1 }]);

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
    let level = 0;

    switch (value) {
      case 'fluent':
        level = 3;
        break;
      case 'intermediate':
        level = 2;
        break;
      case 'conversation':
        level = 1;
        break;
      default:
        level = 1;
        break;
    }

    const updatedLanguages = [...languages];
    updatedLanguages[index].level = level;

    const newData: IBasicDetailsItem = {
      ...dataBasic,
      languages: updatedLanguages,
    };

    reset(newData);
  };

  const addLanguage = () => {
    setLanguages([...languages, { value: '', level: 1 }]);
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
    setLanguages([{ value: '', level: 1 }]);
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
                  value: 'fluent',
                  title: 'Fluent',
                },
                {
                  value: 'intermediate',
                  title: 'Intermediate',
                },
                {
                  value: 'conversation',
                  title: 'Conversation',
                },
              ]}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => handleLevelChange(e, index)}
              value={
                language.level === 3
                  ? 'fluent'
                  : language.level === 2
                  ? 'intermediate'
                  : 'conversation'
              }
            />
          </div>
        </div>
      ))}
      <div className="flex items-center mt-4 justify-end gap-5">
        {languages.length > 1 && (
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600"
            onClick={removeLanguage}
          >
            -
          </button>
        )}
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-white bg-tertiary rounded hover:bg-pink-600"
          onClick={addLanguage}
        >
          +
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-white bg-sky-500 rounded hover:bg-[#D4CAFE]"
          onClick={resetLanguages}
        >
          Reset
        </button>
      </div>
    </form>
  );
}
