import { whyUs } from "@/constants/data";
import CardWhyUs from "./CardWhyUs";
import { motion } from "framer-motion";
import { slideInVariants } from "@/utils/motion";

function Why() {
  return (
    <section id="why" className="py-10 px-8 md:px-20 overflow-hidden">
      <h1 className="text-center text-tertiary-bold text-4xl font-semibold">
        Why you should use our resume maker 
      </h1>

      {whyUs.map((data, index) => (
        <motion.div
          key={data.id}
          initial="hidden"
          whileInView="visible"
          variants={slideInVariants(index % 2 === 0 ? 'left' : 'right')}
          viewport={{ once: true }}
        >
          <CardWhyUs
            title={data.title}
            imageUrl={data.imageUrl}
            alt={data.alt}
            reverse={index % 2 === 0}
          >
            {data.description}
          </CardWhyUs>
        </motion.div>
      ))}
    </section>
  )
}

export default Why