import { skillDetails } from "../data/skillDetails";

interface Props {
    skill: string;
}

export default function SkillTooltip({ skill }: Props) {

    const info = skillDetails[skill];

    if (!info) return null;

    return (

        <div
            className="
            absolute
            left-1/2
            -translate-x-1/2
            bottom-full
            mb-4
            w-72
            rounded-2xl
            border
            border-indigo-500/30
            bg-slate-900/95
            backdrop-blur-xl
            shadow-2xl
            opacity-0
            invisible
            scale-95
            translate-y-2
            group-hover:opacity-100
            group-hover:visible
            group-hover:translate-y-0
            group-hover:scale-100
            transition-all
            duration-300
            z-50
            pointer-events-none
        "
        >

            <div className="p-5">

                <h3 className="text-lg font-semibold text-white">
                    {skill}
                </h3>

                <p className="text-indigo-400 text-xs mb-3">
                    {info.title}
                </p>

                <p className="text-gray-300 text-sm leading-6">
                    {info.description}
                </p>

                <div className="mt-5">

                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">
                        Used For
                    </p>

                    <div className="flex flex-wrap gap-2">

                        {info.uses.map(use => (

                            <span
                                key={use}
                                className="
                                px-2
                                py-1
                                rounded-lg
                                bg-indigo-500/10
                                text-indigo-300
                                text-xs
                                "
                            >
                                {use}
                            </span>

                        ))}

                    </div>

                </div>

                <div className="mt-5">

                    <div className="flex justify-between text-xs mb-2">

                        <span className="text-gray-400">
                            Experience
                        </span>

                        <span className="text-indigo-300">
                            {info.levelText}
                        </span>

                    </div>

                    <div className="w-full h-2 rounded-full bg-gray-700 overflow-hidden">

                        <div
                            className="
                            h-full
                            rounded-full
                            bg-gradient-to-r
                            from-indigo-500
                            to-cyan-400
                            transition-all
                            duration-700
                            "
                            style={{
                                width: `${info.level}%`
                            }}
                        />

                    </div>

                </div>

            </div>

        </div>

    );

}
