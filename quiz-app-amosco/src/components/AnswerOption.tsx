type AnswerOptionProps = {
  letter: string;
  choice: string;
  delay: number;
  isSelected: boolean;
  saPagpili: (choice: string) => void;
};

function AnswerOption({
  letter,
  choice,
  delay,
  isSelected,
  saPagpili,
}: AnswerOptionProps) {
  return (
    <button
      type="button"
      className={`flex w-full animate-option-in cursor-pointer items-center gap-3.5 rounded-xl border px-[15px] py-[13px] text-left text-[15px] transition duration-200 ${
        isSelected
          ? "border-accent bg-accent/10"
          : "border-line bg-panel-2/70 hover:translate-x-0.5 hover:border-accent/55 hover:bg-accent/[0.06]"
      }`}
      style={{ animationDelay: `${delay}s` }}
      onClick={() => saPagpili(choice)}
    >
      <span
        className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border text-[13px] font-bold transition duration-200 ${
          isSelected
            ? "border-accent bg-accent text-[#04121a]"
            : "border-accent/30 bg-accent/10 text-accent"
        }`}
      >
        {letter}
      </span>
      <span className="flex-1 font-bold text-white">{choice}</span>
      <span
        className={`h-4 w-4 shrink-0 rounded-full border-2 transition duration-200 ${
          isSelected
            ? "border-accent bg-accent shadow-[0_0_0_4px_rgba(56,225,255,0.15)]"
            : "border-line"
        }`}
      />
    </button>
  );
}

export default AnswerOption;
