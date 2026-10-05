import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#17251d] px-6 pt-32 text-white">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-green-900/40 blur-3xl" />

      <div className="relative mx-auto grid min-h-[80vh] max-w-7xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-5 text-sm uppercase tracking-[0.3em] text-amber-400"
          >
            Tulas International School
          </motion.p>

          <h2 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            Inspiring
            <span className="block text-amber-400">
              Young Minds.
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
            Creating an environment where curiosity, creativity
            and character come together.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#admissions"
              className="rounded-full bg-amber-400 px-7 py-3 font-semibold text-black transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Explore Admissions
            </a>

            <a
              href="#about"
              className="rounded-full border border-white/30 px-7 py-3 transition duration-300 hover:border-white hover:bg-white/10"
            >
              Discover TIS
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] border border-amber-400/20" />

          <div className="relative h-[450px] overflow-hidden rounded-[2rem] md:h-[560px]">
            <img
              src="/images/hero.jpg"
              alt="Tulas International School campus"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-7 left-7">
              <p className="text-xs uppercase tracking-[0.25em] text-amber-400">
                Learn. Grow. Lead.
              </p>

              <p className="mt-2 text-xl font-semibold">
                Shaping tomorrow's thinkers.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-center md:block"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
          Scroll to explore
        </p>

        <div className="mx-auto mt-3 h-10 w-px bg-amber-400" />
      </motion.div>
    </section>
  );
}

export default Hero;