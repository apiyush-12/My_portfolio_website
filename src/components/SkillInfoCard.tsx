import { motion, AnimatePresence } from "motion/react";

interface Props {
  skill: string;
  info: {
    title: string;
    description: string;
    uses: string[];
    level: number;
    levelText: string;
  } | null;
}

export default function SkillInfoCard({
  skill,
  info,
}: Props) {

  if (!info) return null;

  return (

    <AnimatePresence mode="wait">

      <motion.div
        key={skill}
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        exit={{
          opacity: 0,
          y: 20
        }}
        transition={{
          duration: .35
        }}
        className="
        mt-8
        rounded-3xl
        border
        border-indigo-500/20
        bg-gradient-to-br
        from-slate-900/90
        to-slate-800/80
        backdrop-blur-xl
        p-8
        shadow-2xl
        "
      >

        <div className="flex items-center gap-3">

          <div
            className="
            w-12
            h-12
            rounded-2xl
            bg-indigo-500/10
            flex
            items-center
            justify-center
            text-2xl
            "
          >
            🚀
          </div>

          <div>

            <h3 className="text-2xl font-bold text-white">

              {skill}

            </h3>

            <p className="text-indigo-400">

              {info.title}

            </p>

          </div>

        </div>

        <p className="mt-6 text-gray-300 leading-7">

          {info.description}

        </p>

        <div className="mt-8">

          <h4
            className="
            uppercase
            text-xs
            tracking-[0.25em]
            text-gray-400
            mb-3
            "
          >
            Used For
          </h4>

          <div className="flex flex-wrap gap-3">

            {info.uses.map((use) => (

              <div
                key={use}
                className="
                rounded-xl
                bg-indigo-500/10
                border
                border-indigo-500/20
                px-3
                py-2
                text-sm
                text-indigo-200
                "
              >

                ✓ {use}

              </div>

            ))}

          </div>

        </div>

        <div className="mt-8">

          <div className="flex justify-between mb-2">

            <span className="text-gray-400">

              Experience

            </span>

            <span className="text-indigo-300">

              {info.levelText}

            </span>

          </div>

          <div className="h-3 rounded-full bg-slate-700 overflow-hidden">

            <motion.div

              initial={{
                width: 0
              }}

              animate={{
                width: `${info.level}%`
              }}

              transition={{
                duration: .7
              }}

              className="
              h-full
              rounded-full
              bg-gradient-to-r
              from-indigo-500
              to-cyan-400
              "

            />

          </div>

        </div>

      </motion.div>

    </AnimatePresence>

  );

}
