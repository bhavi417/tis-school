import { motion } from "framer-motion";

function Admissions() {
  return (
    <section
      id="admissions"
      className="bg-amber-400 px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid items-center gap-10 md:grid-cols-2"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-black/60">
              Admissions
            </p>

            <h2 className="mt-4 text-5xl font-bold leading-tight text-[#17251d] md:text-7xl">
              Start your child's
              <span className="block">journey.</span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-black/70">
              Discover an environment where students can learn,
              explore and grow. Connect with Tulas International
              School to learn more about admissions.
            </p>

            <button className="mt-8 rounded-full bg-[#17251d] px-8 py-4 font-semibold text-white transition hover:scale-105">
              Enquire Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Admissions;