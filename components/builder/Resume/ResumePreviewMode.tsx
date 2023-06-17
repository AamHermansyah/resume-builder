import { AVAILABLE_TEMPLATES } from "@/helpers/constants";
import { useTemplates } from "@/stores/useTemplate";

function ResumePreviewMode() {
  const templateId = useTemplates((state) => state.activeTemplate.id);
  const Template = AVAILABLE_TEMPLATES[templateId].component;

  return (
    <div
      className="w-full bg-white border shadow-md h-screen max-w-[830px] overflow-auto"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Template widthClassName="w-[800px]" />
    </div>
  )
}

export default ResumePreviewMode