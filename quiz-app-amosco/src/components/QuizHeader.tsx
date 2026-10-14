type QuizHeaderProps = {
  current: number;
  total: number;
  score: number;
};

function QuizHeader({ current, total, score }: QuizHeaderProps) {
  return (
    <div className="mb-4 flex items-center justify-between gap-3">
      <p className="flex min-w-0 items-center gap-2 text-[13px]">
        <span className="truncate text-muted">
          question {current} of {total}
        </span>
      </p>
      <span
        key={score}
        className="inline-flex shrink-0 animate-score-pulse items-center gap-2 rounded-full border border-warn/30 bg-warn/[0.08] px-[13px] py-1.5 text-[12.5px] text-warn"
      >
        <span className="h-[7px] w-[7px] rounded-full bg-warn shadow-[0_0_10px_var(--color-warn)]" />
        score {score}
      </span>
    </div>
  );
}

export default QuizHeader;
