import React, { ChangeEvent, useState } from "react";
import InputDate from "@/components/form/InputDate";
import InputText from "@/components/form/InputText";
import InputTextArea from "@/components/form/InputTextArea";
import { useBasicDetails } from "@/stores/basic";
import { useAwards, IAwardItem } from "@/stores/awards";

function FormCertificate() {
  const { values: dataBasic, reset } = useBasicDetails();
  const { awards, updateAward } = useAwards();
  const [certificateCount, setCertificateCount] = useState(1);

  const handleOnChangeInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    const { name, value } = e.target;

    const updatedAwardItem: IAwardItem = {
      ...awards[index],
      [name]: value,
    };

    updateAward(index, updatedAwardItem);
  };

  const handleAddCertificate = () => {
    setCertificateCount(certificateCount + 1);
  };

  const handleRemoveCertificate = () => {
    if (certificateCount > 1) {
      setCertificateCount(certificateCount - 1);
    }
  };

  const handleResetCertificates = () => {
    setCertificateCount(1);
  };

  const certificateForms = [];

  for (let i = 0; i < certificateCount; i++) {
    const awardItem = awards[i];

    certificateForms.push(
      <div key={i} className="mt-[15px]">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="lg:w-1/2">
            <InputText
              id={`title-${i}`}
              label="Title"
              placeholder="e.g. Certified Data Analyst"
              value={awardItem.title}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleOnChangeInput(e, i)}
              name="title"
            />
          </div>
          <div className="lg:w-1/2">
            <InputDate
              id={`date-${i}`}
              label="Certified Date"
              value={awardItem.date || ""}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleOnChangeInput(e, i)}
              name="date"
            />
          </div>
          <div className="lg:w-1/2">
            <InputText
              id={`date-${i}`}
              label="Awarder"
              value={awardItem.awarder || ""}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleOnChangeInput(e, i)}
              name="awarder"
            />
          </div>
          <div className="lg:w-1/2">
            <InputDate
              id={`date-${i}`}
              label="Certified Date"
              value={awardItem.date || ""}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleOnChangeInput(e, i)}
              name="date"
            />
          </div>


        </div>

        <div className="mt-4">
          <InputTextArea
            id={`summary-${i}`}
            label="Description"
            value={awardItem.summary}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleOnChangeInput(e, i)}
            name="summary"
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      {certificateForms}
      <div className="flex items-center mt-4 justify-end gap-5">
        {certificateCount > 1 && (
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-red-500 border border-tertiary rounded hover:bg-red-500 hover:text-white hover:border-red-500"
            onClick={handleRemoveCertificate}
          >
            -
          </button>
        )}
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-white bg-sky-500 rounded hover:bg-sky-600"
          onClick={handleResetCertificates}
        >
          Reset
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-red-500 border border-tertiary rounded hover:bg-red-500 hover:text-white hover:border-red-500"
          onClick={handleAddCertificate}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default FormCertificate;
