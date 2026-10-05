import { motion } from "framer-motion";

const academicAreas = [
  {
    number: "01",
    title: "CBSE Curriculum",
    description:
      "A CBSE-based curriculum designed to support reasoning, analytical thinking and holistic development.",
  },
  {
    number: "02",
    title: "Innovative Learning",
    description:
      "Project-based and art-integrated learning experiences that encourage creativity and critical thinking.",
  },
  {
    number: "03",
    title: "Digital Learning",
    description:
      "Technology-enabled classrooms and digital learning tools that make education more engaging and personalised.",
  },
  {
    number: "04",
    title: "Experiential Learning",
    description:
      "Educational trips, science quests, seminars and practical experiences that connect learning with the real world.",
  },
];

function Academics() {
  return (
    <section
      id="academics"
      className="bg-white px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-amber-700">
            Academics
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-bold leading-tight text-[#17251d] md:text-6xl">
            Learning that goes
            <span className="block text-green-900">
              beyond textbooks.
            </span>
          </h2>
        </motion.div>

        <div className="mt-16 divide-y divide-gray-200 border-y border-gray-200">
          {academicAreas.map((area, index) => (
            <motion.article
              key={area.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="grid gap-6 py-8 md:grid-cols-[100px_1fr_2fr] md:items-center"
            >
              <span className="text-sm font-semibold text-amber-700">
                {area.number}
              </span>

              <h3 className="text-2xl font-semibold text-[#17251d]">
                {area.title}
              </h3>

              <p className="max-w-xl leading-7 text-gray-600">
                {area.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Academics;