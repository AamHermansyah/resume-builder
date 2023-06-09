function BlurComponent() {
  return (
    <>
      <div
        className="absolute -top-[120px] -right-[75px] w-[313px] aspect-square rounded-full blur-[100px]"
        style={{
          background: "linear-gradient(180deg, #F7ABA1 0%, #ED9296 100%);"
        }}
      />
      <div
        className="absolute -bottom-[170px] -right-[75px] w-[313px] aspect-square rounded-full blur-[100px]"
        style={{
          background: "linear-gradient(180deg, #D76275 0%, #A95175 100%);"
        }}
      />
      <div
        className="absolute -bottom-[100px] -left-[75px] w-[313px] aspect-square rounded-full blur-[100px]"
        style={{
          background: "linear-gradient(180deg, #FAA997 0%, #F7988C 100%);"
        }}
      />
      <div
        className="absolute -top-[190px] -left-[55px] w-[313px] aspect-square rounded-full blur-[100px]"
        style={{
          background: "linear-gradient(180deg, #FAB8AF 0%, #FFD9D8 100%);"
        }}
      />
    </>
  )
}

export default BlurComponent