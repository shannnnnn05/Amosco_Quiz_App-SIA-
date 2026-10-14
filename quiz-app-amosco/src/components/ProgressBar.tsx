type ProgressBarProps = {
  current: number;
  total: number;
};

function ProgressBar({ current, total }: ProgressBarProps) {
  const porsyento = Math.round((current / total) * 100);

  return (
    <div className="mb-6 flex items-center gap-3.5">
      <div className="h-2 flex-1 overflow-hidden rounded-full border border-line-soft bg-track">
        <div
          className="h-full rounded-full bg-linear-to-r from-accent to-accent-blue shadow-[0_0_16px_rgba(56,225,255,0.5)] transition-[width] duration-[350ms] ease-out"
          style={{ width: porsyento + "%" }}
        />
      </div>
      <span className="min-w-[38px] text-right text-[12.5px] text-muted">
        {porsyento}%
      </span>
    </div>
  );
}

export default ProgressBar;
