import { ISkillItem } from "@/stores/skill.interface";
import { useEffect, useRef, useState } from "react";

interface propTypes {
  data: ISkillItem[];
  allow: boolean;
  onChange: (data: ISkillItem[]) => void,
  id: string
}

const SelectCustomInput: React.FC<propTypes> = ({ data, allow, onChange, id }) => {
  const [isError, setIsError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInput = (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    event.preventDefault();

    if (inputRef.current) {
      const input = inputRef.current.value.trim();

      if (/^([a-zA-Z]+.?[a-zA-Z]+)(,([a-zA-Z]+.?[a-zA-Z]+))*$/gi.test(input)) {
        setIsError(false);
        let arrayInput = input.split(",");
        const newData = arrayInput.map((item) => ({ name: item, level: 100 }));
        onChange(Array.from(new Set([...data, ...newData])) as ISkillItem[]);
        inputRef.current.value = "";
      } else {
        setIsError(true);
      }
    }
  };

  useEffect(() => {
    setIsError(false);
  }, [data]);

  return (
    <div className="w-full">
      {allow && (
        <form onSubmit={handleInput} className="flex flex-col sm:flex-row gap-x-2 gap-y-2 sm:items-center">
          <input
            ref={inputRef}
            type="text"
            name={id}
            id={id}
            placeholder="Example: react or algorithm,next,html"
            className="w-full bg-gray-100 border border-gray-200 py-2 px-4 block focus:outline-none text-gray-700 rounded-[20px]"
          />
          <div className="flex gap-x-2 gap-y-2 items-center">
            <button
              onClick={handleInput}
              type="button"
              className="text-sm flex bg-tertiary gap-1 w-max py-2.5 px-4 text-white rounded"
            >
              Generate
            </button>
            <button
              onClick={() => onChange([])}
              type="button"
              className="text-sm flex gap-1 w-max bg-white py-2.5 px-4 text-tertiary-semi border border-tertiary-semi rounded"
            >
              Clear
            </button>
          </div>
        </form>
      )}

      {isError && <p className="text-tertiary-semi">Please input the field correctly.</p>}

      <div className="flex gap-[.5em] flex-wrap py-2">
        {data.length === 0 && (
          <div className="flex items-center gap-1 w-max bg-slate-200 border-[1px] border-slate-200 px-3 py-0.5 text-gray-700 rounded-full">
            <span>tags input in here</span>
          </div>
        )}
        {data.map((tag, index) => (
          <div
            onClick={() => allow && onChange(data.filter(item => item !== tag))}
            key={index}
            className={`${allow ? "hover:bg-tertiary-semi hover:text-white" : ""} flex items-center gap-1 w-max bg-slate-200 border-[1px] border-slate-200 px-3 py-0.5 text-gray-700 cursor-pointer rounded-full`}
          >
            <span>{tag.name}</span>
            {allow && <span className="text-xl">&times;</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectCustomInput;
