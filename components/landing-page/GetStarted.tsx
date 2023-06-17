import { Poppins } from "next/font/google";
import Button from "./Button";
import React from "react";

const poppins = Poppins({ subsets: ['latin'], weight: ['300'] });

function GetStarted() {
  return (
    <section id="faqs" className="py-10">
      <div className="px-4 bg-tertiary-semi">
        <div className="w-full max-w-[950px] mx-auto py-[42px]">
          <p className={`${poppins.className} text-xl sm:text-2xl text-center leading-9 text-white`}>
            Do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et dolore magna  
          </p>
          <Button
            href="/builder"
            title="Create Resume"
            className="mt-[35px] mx-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default GetStarted