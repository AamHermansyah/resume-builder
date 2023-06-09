import Image from "next/image"

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden rounded-br-[50px] lg:rounded-br-[100px] py-20">
      <div
        className="absolute -top-[100px] -right-[75px] w-[665px] aspect-square rounded-full blur-[100px]"
        style={{
          background: 'linear-gradient(180deg, #F7ABA1 0%, #ED9296 100%);'
        }}
      />
      <div
        className="absolute -bottom-[100px] -right-[75px] w-[576px] aspect-square rounded-full blur-[100px]"
        style={{
          background: 'linear-gradient(180deg, #D76275 0%, #A95175 100%);'
        }}
      />
      <div
        className="absolute -top-[169px] -left-[108px] w-[597px] aspect-square rounded-full blur-[100px]"
        style={{
          background: 'linear-gradient(180deg, #F5C7A1 0%, #F8B193 100%);'
        }}
      />
      <div
        className="absolute -top-[89px] left-[20%] w-[532px] aspect-square rounded-full blur-[100px]"
        style={{
          background: 'linear-gradient(180deg, #FAB8AF 0%, #FFD9D8 100%);'
        }}
      />
      <div
        className="absolute top-[272px] -left-[120px] w-[586px] aspect-square rounded-full blur-[100px]"
        style={{
          background: 'linear-gradient(180deg, #FAA997 0%, #F7988C 100%);'
        }}
      />
      <div
        className="absolute top-[280px] left-[20%] w-[629px] aspect-square rounded-full blur-[100px]"
        style={{
          background: 'linear-gradient(180deg, #F7ABA1 0%, #ED9296 100%);'
        }}
      />
      <div className="relative min-h-[710px] flex items-center rounded-br-[100px]">
        <div className="absolute w-[495px] h-[266px] bottom-4 right-4">
          <Image src="/images/paper-boat.png" alt="paper-boat" fill={true} />
        </div>
        <div className="mt-20 md:mt-0 w-full flex gap-y-20 flex-col-reverse md:flex-row items-center gap-8 px-10">
          <div className="w-full flex-1 relative flex gap-[66px]">
            <div className="relative flex-1 aspect-[0.72/1]">
              <Image
                src="/images/cv-preview-1.png"
                alt="cv-preview-1"
                fill={true}
                className="object-cover"
              />
            </div>
            <div className="relative flex-1 aspect-[0.72/1]">
              <Image
                src="/images/cv-preview-3.png"
                alt="cv-preview-3"
                fill={true}
                className="object-cover"
              />
            </div>
            <div className="absolute left-[50%] -translate-y-[7%] -translate-x-[50%] w-[55%] h-[120%]">
              <Image
                src="/images/cv-preview-2.png"
                alt="cv-preview-2"
                fill={true}
              />
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-4xl font-semibold text-tertiary-bold">
              Build A Free Professional Resume
            </h1>
            <p className="text-lg leading-[22px] text-justify mt-6">
              With this free resume builder, applying for your dream job is easy and fast. Choose from hundreds of free, designer-made templates and customize them within a few clicks.
            </p>
            <button
              className="py-4 px-10 text-xl font-semibold bg-tertiary text-white rounded-[10px] mt-[35px]"
              style={{
                boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25);'
              }}
            >
              Create Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero