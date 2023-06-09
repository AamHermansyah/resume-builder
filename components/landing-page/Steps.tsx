function Steps() {
  return (
    <section id="steps" className="mt-10 px-4 py-10 sm:px-10">
      <h1 className="text-center text-tertiary-bold text-4xl font-semibold">
        Build your resume with 4 steps
      </h1>
      <div className="relative mt-10 sm:mt-[72px] text-xl lg:text-2xl flex flex-col md:flex-row gap-4 gap-y-10 justify-between items-center w-full max-w-[1045px] text-white text-center mx-auto">
        <div className="flex items-center justify-center w-full max-w-[170px] md:max-w-[223px] lg:px-[53px] bg-tertiary-semi aspect-square rounded-full">
          <p>Pick a Template</p>
        </div>
        <div className="flex items-center justify-center w-full max-w-[170px] md:max-w-[223px] lg:px-[53px] bg-tertiary-semi aspect-square rounded-full">
          <p>Customize Your Resume Layout</p>
        </div>
        <div className="flex items-center justify-center w-full max-w-[170px] md:max-w-[223px] lg:px-[53px] bg-tertiary-semi aspect-square rounded-full">
          <p>Fill Your Details</p>
        </div>
        <div className="flex items-center justify-center w-full max-w-[170px] md:max-w-[223px] lg:px-[53px] bg-tertiary-semi aspect-square rounded-full">
          <p>Download Your Resume</p>
        </div>

        <div className="-z-[1] absolute h-full md:h-0 md:w-full border-l-[5px] md:border-l-0 md:border-b-[5px] border-dashed border-opacity-40 border-black" />
      </div>
    </section>
  )
}

export default Steps