import MordernTemplate from "@/templates/modern/MordernTemplate"

function ResumePreviewMode() {
  return (
    <div
      className="w-full bg-white border shadow-md h-screen max-w-[830px] overflow-auto"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <MordernTemplate widthClassName="w-[800px] print:hidden" />
    </div>
  )
}

export default ResumePreviewMode