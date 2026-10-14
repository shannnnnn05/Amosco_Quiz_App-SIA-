
import { CSSProperties, useEffect, useState } from "react";
import { AnswerRecord } from "../types";
import Button from "./Button";
import ReviewList from "./ReviewList";

type ResultCardProps = {
  total: number;
  correct: number;
  name: string;
  responses: AnswerRecord[];
  saPagLiwat: () => void;
  saPagUli: () => void;
};

function ResultCard({
  total,
  correct,
  name,
  responses,
  saPagLiwat,
  saPagUli,
}: ResultCardProps) {
  const mgaSala = total - correct;
  const porsyento = total > 0 ? Math.round((correct / total) * 100) : 0;
  const siisay = name ? `, ${name}` : "";
  const mensahi =
    porsyento >= 75 ? `Goods yan${siisay}!` : `Diit pa na adal${siisay}!`;

  const [pahiling, ibugtakAnPahiling] = useState(0);

  useEffect(() => {
    let frame = 0;
    const poon = performance.now();
    const kahalabaan = 1100;

    function tik(ngunyan: number) {
      const progreso = Math.min((ngunyan - poon) / kahalabaan, 1);
      const pinakamalumoy = 1 - Math.pow(1 - progreso, 3);
      ibugtakAnPahiling(Math.round(pinakamalumoy * porsyento));
      if (progreso < 1) {
        frame = requestAnimationFrame(tik);
      }
    }

    frame = requestAnimationFrame(tik);
    return () => cancelAnimationFrame(frame);
  }, [porsyento]);

  const mgaLinya = [
    { label: "total questions", value: String(total) },
    { label: "correct answers", value: String(correct) },
    { label: "incorrect answers", value: String(mgaSala) },
    { label: "final score", value: `${correct} / ${total}` },
  ];

  return (
    <div className="flex w-full flex-col items-center text-center">
      <p className="mb-2.5 text-xs tracking-[0.12em] text-dim uppercase">
      </p>
      <h1 className="mb-6 bg-[linear-gradient(100deg,#ffffff,var(--color-accent))] bg-clip-text text-[26px] font-bold text-transparent">
        {mensahi}
      </h1>

      <div
        className="grid h-[168px] w-[168px] place-items-center rounded-full bg-[conic-gradient(var(--color-accent)_calc(var(--value)*1%),#17203a_0)] shadow-[0_0_40px_rgba(56,225,255,0.18)]"
        style={{ "--value": pahiling } as CSSProperties}
      >
        <div className="flex h-[132px] w-[132px] flex-col items-center justify-center rounded-full border border-line-soft bg-ink-2">
          <span className="text-[38px] leading-none font-bold text-white">
            {pahiling}%
          </span>
          <span className="mt-1.5 text-[11px] tracking-[0.18em] text-muted uppercase">
            score
          </span>
        </div>
      </div>

      <div className="mt-7 mb-6 w-full rounded-[14px] border border-line-soft bg-shell/60 px-[18px] py-2">
        {mgaLinya.map((linya) => (
          <p
            key={linya.label}
            className="flex justify-between gap-3 border-b border-dashed border-line-soft py-[13px] text-sm last:border-b-0"
          >
            <span className="text-muted">{linya.label}</span>
            <span className="font-bold text-accent">{linya.value}</span>
          </p>
        ))}
      </div>

      <div className="flex w-full flex-wrap justify-center gap-3">
        <Button className="max-[520px]:w-full" onClick={saPagLiwat}>
          Retake Quiz
          <span>↻</span>
        </Button>
        <Button
          variant="secondary"
          className="max-[520px]:w-full"
          onClick={saPagUli}
        >
          Return Home
        </Button>
      </div>

      <ReviewList responses={responses} />
    </div>
  );
}

export default ResultCard;
