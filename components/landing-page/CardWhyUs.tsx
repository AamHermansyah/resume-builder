import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({ subsets: ['latin'], weight: ['300'] });

type propTypes = {
  imageUrl: string,
  title: string,
  children: string,
  alt: string,
  reverse?: boolean
}

function CardWhyUs({ imageUrl, title, children, alt, reverse } : propTypes) {
  return (
    <div className={
      `${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}
        flex-col mt-[78px] flex gap-10 items-center box-border`
    }>
      <div className="relative w-full flex-[0.8] aspect-video rounded-[20px] overflow-hidden border">
        <div
          className="absolute -top-[120px] -right-[75px] w-[313px] aspect-square rounded-full blur-[100px]"
          style={{
            background: 'linear-gradient(180deg, #F7ABA1 0%, #ED9296 100%);'
          }}
        />
        <div
          className="absolute -bottom-[170px] -right-[75px] w-[313px] aspect-square rounded-full blur-[100px]"
          style={{
            background: 'linear-gradient(180deg, #D76275 0%, #A95175 100%);'
          }}
        />
        <div
          className="absolute -bottom-[100px] -left-[75px] w-[313px] aspect-square rounded-full blur-[100px]"
          style={{
            background: 'linear-gradient(180deg, #FAA997 0%, #F7988C 100%);'
          }}
        />
        <div
          className="absolute -top-[190px] -left-[55px] w-[313px] aspect-square rounded-full blur-[100px]"
          style={{
            background: 'linear-gradient(180deg, #F5C7A1 0%, #F8B193 100%);'
          }}
        />
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