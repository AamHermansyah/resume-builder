import CardWhyUs from "./CardWhyUs"

function Why() {
  return (
    <section id="why" className="py-10 px-8 md:px-20">
      <h1 className="text-center text-tertiary-bold text-4xl font-semibold">
        Why you should use our resume maker 
      </h1>

      <CardWhyUs
        title="Customize with templates & Themes"
        imageUrl="/icons/grid-icon.svg"
        alt="grid-icon"
      >
        do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et
      </CardWhyUs>

      <CardWhyUs
        title="Simple Interface that helps you build quickly"
        imageUrl="/icons/hand-icon.svg"
        alt="hand-icon"
        reverse={true}
      >
        do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et
      </CardWhyUs>

      <CardWhyUs
        title="No sign up needed - go straight to building"
        imageUrl="/icons/pencil-icon.svg"
        alt="pencil-icon"
      >
        do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et
      </CardWhyUs>

      <CardWhyUs
        title="Your data never leaves your device"
        imageUrl="/icons/data-icon.svg"
        alt="data-icon"
        reverse={true}
      >
        do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et
      </CardWhyUs>
    </section>
  )
}

export default Why