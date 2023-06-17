import { AVAILABLE_TEMPLATES } from "@/helpers/constants";
import { useTemplates } from "@/stores/useTemplate";
<<<<<<< Updated upstream

function ResumePreviewMode() {
  const templateId = useTemplates((state) => state.activeTemplate.id);
  const Template = AVAILABLE_TEMPLATES[templateId].component;
=======
import MordernTemplate from "@/templates/modern/MordernTemplate"

function ResumePreviewMode() {
  const templateId = useTemplates((state) => state.activeTemplate.id);
  const Template = AVAILABLE_TEMPLATES[templateId].component('w-[800px]');
>>>>>>> Stashed changes

  return (
    <div
      className="w-full bg-white border shadow-md h-screen max-w-[830px] overflow-auto"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
<<<<<<< Updated upstream
      <Template widthClassName="w-[800px]" />
=======
      {Template}
>>>>>>> Stashed changes
    </div>
  )
}

export default ResumePreviewMode