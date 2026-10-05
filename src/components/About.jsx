import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="bg-[#f8f6f1] px-6 py-28">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-amber-700">
            About TIS
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Education beyond
            <span className="block text-green-900">
              the classroom.
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-lg leading-8 text-gray-600">
            Tulas International School is committed to providing
            students with an environment that encourages learning,
            creativity and personal growth.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Students are encouraged to explore their interests,
            develop confidence and prepare themselves for the
            challenges of the future.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;