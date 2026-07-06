interface Props {
  skill: string;
}

export default function SkillTooltip({ skill }: Props) {
  return (
    <div
      className="
        absolute
        bottom-full
        left-1/2
        -translate-x-1/2
        mb-2
        bg-red-600
        text-white
        p-3
        rounded-lg
        shadow-lg
        z-[9999]
      "
    >
      {skill}
    </div>
  );
}
