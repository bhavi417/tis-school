import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "22 Acre Campus",
    description:
      "A spacious, pollution-free campus designed to give students room to learn, explore and grow.",
  },
  {
    number: "02",
    title: "16+ Olympic Sports",
    description:
      "A wide range of sporting opportunities that encourage discipline, teamwork and physical wellbeing.",
  },
  {
    number: "03",
    title: "Holistic Education",
    description:
      "An approach that supports academic excellence while developing creativity, character and confidence.",
  },
];

function Features() {
  return (
    <section className="bg-[#17251d] px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-amber-400">
            Why TIS
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-bold md:text-6xl">
            More than education.
            <span className="block text-amber-400">
              A foundation for life.
            </span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.article
              key={feature.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:bg-white/10"
            >
              <span className="text-sm text-amber-400">
                {feature.number}
              </span>

              <h3 className="mt-10 text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-300">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;