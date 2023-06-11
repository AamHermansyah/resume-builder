import { WhyUs } from "@/constants/landing-page";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({ subsets: ['latin'], weight: ['300'] });

type propTypes = Pick<WhyUs, 'title' | 'alt' | 'imageUrl'> & {
  children: string,
  reverse?: boolean
}

function CardWhyUs({ imageUrl, title, children, alt, reverse } : propTypes) {
  return (
    <div className={
      `${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}
        flex-col mt-[78px] flex gap-10 items-center box-border`
    }>
      <div className="relative bg-gradient-to-br from-tertiary-semi to-violet-300 w-full flex-[0.8] aspect-video rounded-[20px] overflow-hidden border">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[35%] aspect-square">
            <Image
              src={imageUrl}
              alt={alt}
              fill={true}
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <h1 className="text-3xl font-semibold">
          {title}
        </h1>
        <p className={`${poppins.className} mt-4 lg:mt-[26px] font-light text-xl lg:text-2xl text-justify leading-9`}>
          {children}
        </p>
      </div>
    </div>
  )
}

export default CardWhyUs