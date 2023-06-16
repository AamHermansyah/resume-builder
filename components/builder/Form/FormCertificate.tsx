import React, { ChangeEvent } from "react";
import InputDate from "@/components/form/InputDate";
import InputText from "@/components/form/InputText";
import InputTextArea from "@/components/form/InputTextArea";
import { useBasicDetails } from "@/stores/basic";
import { useAwards, IAwardItem } from "@/stores/awards";

function FormCertificate() {
  const { values: dataBasic, reset } = useBasicDetails();
  const { awards, updateAward } = useAwards();
  const awardItem = awards[0];

  const handleOnChangeInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    const updatedAwardItem: IAwardItem = {
      ...awardItem,
      [name]: value,
    };

    updateAward(0, updatedAwardItem);
  };

  return (
    <form action="" className="mt-[15px]">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="lg:w-1/2">
          <InputText
            id="title"
            label="Title"
            placeholder="e.g. Certified Data Analyst"
            value={awardItem.title}
            onChange={handleOnChangeInput}
          />
        </div>
        <div className="lg:w-1/2">
          <InputDate
            id="date"
            label="Certified Date"
            value={awardItem.date || ""}
            onChange={handleOnChangeInput}
          />
        </div>
      </div>

      <div className="mt-4">
        <InputTextArea
          id="summary"
          label="Description"
          value={awardItem.summary}
          onChange={handleOnChangeInput}
        />
      </div>
    </form>
  );
}

export default FormCertificate;
