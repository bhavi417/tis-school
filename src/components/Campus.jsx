import { motion } from "framer-motion";

function Campus() {
  return (
    <section
      id="campus"
      className="bg-[#f8f6f1] px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-amber-700">
            The Campus
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-bold text-[#17251d] md:text-6xl">
            A place where
            <span className="block text-green-900">
              students can thrive.
            </span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="relative min-h-[400px] overflow-hidden rounded-[2rem]"
>
  <img
    src="/images/campus-1.jpg"
    alt="Tulas International School campus"
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-black/35" />

  <div className="relative flex h-full items-end p-8">
    <div className="text-white">
      <p className="text-sm uppercase tracking-widest">
        Learning Spaces
      </p>

      <h3 className="mt-2 text-3xl font-bold">
        Designed for curiosity.
      </h3>
    </div>
  </div>
</motion.div>

          <motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="relative min-h-[400px] overflow-hidden rounded-[2rem]"
>
  <img
    src="/images/campus-2.jpg"
    alt="Tulas International School student life"
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-black/35" />

  <div className="relative flex h-full items-end p-8">
    <div className="text-white">
      <p className="text-sm uppercase tracking-widest">
        Student Life
      </p>

      <h3 className="mt-2 text-3xl font-bold">
        Designed for growth.
      </h3>
    </div>
  </div>
</motion.div>
        </div>
      </div>
    </section>
  );
}

export default Campus;