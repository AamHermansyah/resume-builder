import Image from "next/image"
import Button from "./Button"
import { motion } from "framer-motion"

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .5 }}
    >
      <section
        id="home"
        className="relative bg-gradient-to-br from-tertiary-semi to-violet-300 overflow-hidden rounded-br-[50px] lg:rounded-br-[100px] py-20"
      >
        <div className="relative min-h-[710px] flex items-center rounded-br-[100px] z-10">
          <div className="absolute w-[250px] sm:w-[495px] aspect-[16/8] bottom-[35%] sm:bottom-4 -right-4 sm:right-4 -z-[1]">
            <Image
              src="/images/paper-boat.png"
              alt="paper-boat"
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="mt-4 sm:mt-20 md:mt-0 w-full flex gap-y-20 flex-col-reverse md:flex-row items-center gap-8 px-10">
            <div className="w-full flex-1 relative flex gap-[66px]">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: .3 }}
                className="relative flex-1 aspect-[0.72/1]"
              >
                <Image
                  src="/images/cv-preview-1.png"
                  alt="cv-preview-1"
                  fill={true}
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: .3 }}
                className="relative flex-1 aspect-[0.72/1]"
              >
                <Image
                  src="/images/cv-preview-3.png"
                  alt="cv-preview-3"
                  fill={true}
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ x: '-47%', y: '-4%' }}
                animate={{ x: '-50%', y: '-7%' }}
                transition={{ duration: 1, delay: .3 }}
                className="absolute left-[50%] w-[55%] h-[120%]"
              >
                <Image
                  src="/images/cv-preview-2.png"
                  alt="cv-preview-2"
                  fill={true}
                />
              </motion.div>
            </div>

            <div className="flex-1">
              <h1 className="text-4xl font-semibold text-tertiary-bold">
                Build A Free Professional Resume
              </h1>
              <p className="text-lg leading-[22px] text-justify mt-6">
                With this free resume builder, applying for your dream job is easy and fast. Choose from hundreds of free, designer-made templates and customize them within a few clicks.
              </p>
              <Button
                href="/builder"
                title="Create Resume"
                className="mt-[35px]"
              />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Hero