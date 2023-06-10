function BlurComponent() {
  return (
    <>
      <div
        className="absolute -top-[100px] -right-[75px] w-[665px] aspect-square rounded-full blur-[100px]"
        style={{
          background: "linear-gradient(180deg, #F7ABA1 0%, #ED9296 100%);"
        }}
      />
      <div
        className="absolute -bottom-[100px] -right-[75px] w-[576px] aspect-square rounded-full blur-[100px]"
        style={{
          background: "linear-gradient(180deg, #D76275 0%, #A95175 100%)"
        }}
      />
      <div
        className="absolute -top-[169px] -left-[108px] w-[597px] aspect-square rounded-full blur-[100px]"
        style={{
          background: "linear-gradient(180deg, #F5C7A1 0%, #F8B193 100%);"
        }}
      />
      <div
        className="absolute -top-[89px] left-[20%] w-[532px] aspect-square rounded-full blur-[100px]"
        style={{
          background: "linear-gradient(180deg, #FAB8AF 0%, #FFD9D8 100%);"
        }}
      />
      <div
        className="absolute top-[272px] -left-[120px] w-[586px] aspect-square rounded-full blur-[100px]"
        style={{
          background: "linear-gradient(180deg, #F5C7A1 0%, #F8B193 100%);"
        }}
      />
      <div
        className="absolute top-[280px] left-[20%] w-[629px] aspect-square rounded-full blur-[100px]"
        style={{
          background: "linear-gradient(180deg, #F7ABA1 0%, #ED9296 100%);"
        }}
      />
    </>
  )
}

export default BlurComponent