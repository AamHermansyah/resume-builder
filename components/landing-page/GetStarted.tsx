import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'], weight: ['300'] });

function GetStarted() {
  return (
    <section id="get-started" className="py-10">
      <div className="px-4 bg-tertiary-semi">
        <div className="w-full max-w-[950px] mx-auto py-[42px]">
          <p className={`${poppins.className} text-2xl text-center leading-9 text-white`}>
            Do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et dolore magna  
          </p>
          <button
            className="block w-max mx-auto mt-[30px] py-4 px-10 text-xl font-semibold bg-tertiary text-white rounded-[10px]"
            style={{
              boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25);'
            }}
          >
            Create Resume
          </button>
        </div>
      </div>
    </section>
  )
}

export default GetStarted