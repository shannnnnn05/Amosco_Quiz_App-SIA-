import { useState } from "react";
import { AnswerRecord } from "../types";

type ReviewItemProps = {
  index: number;
  record: AnswerRecord;
};

function ReviewItem({ index, record }: ReviewItemProps) {
  const [bukas, ibugtakAnBukas] = useState(false);
  const tama = record.selected === record.question.answer;

  return (
    <div
      className={`overflow-hidden rounded-xl border bg-shell/60 transition-colors duration-200 ${
        bukas ? "border-accent/35 bg-accent/[0.04]" : "border-line-soft"
      }`}
    >
      <button
        type="button"
        className="flex w-full cursor-pointer items-center gap-3 border-none bg-transparent px-[15px] py-[13px] text-left text-sm text-fg"
        onClick={() => ibugtakAnBukas(!bukas)}
      >
        <span className="shrink-0 text-xs text-dim">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex-1 max-[520px]:text-[13px]">
          {record.question.question}
        </span>
        <span
          className={`inline-flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border text-xs font-bold ${
            tama
              ? "border-ok/35 bg-ok/10 text-ok"
              : "border-err/30 bg-err/10 text-err"
          }`}
        >
          {tama ? "✓" : "✕"}
        </span>
        <span
          className={`shrink-0 text-xs text-muted transition-transform duration-[350ms] ${
            bukas ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-[400ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
          bukas ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div
          className={`flex flex-col gap-1.5 overflow-hidden px-[15px] transition-[padding] duration-[400ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
            bukas ? "pt-0.5 pb-[15px]" : "py-0"
          }`}
        >
          {record.question.choices.map((choice, choiceIndex) => {
            const husto = choice === record.question.answer;
            const pinili = choice === record.selected;

            let tanda = "";
            if (husto && pinili) {
              tanda = "your answer";
            } else if (husto) {
              tanda = "correct answer";
            } else if (pinili) {
              tanda = "your answer";
            }

            let klaseKanPilian = "border-line-soft bg-panel-2/50 text-muted";
            let klaseKanSusi = "border-line-soft bg-muted/10 text-muted";

            if (husto) {
              klaseKanPilian = "border-ok/35 bg-ok/[0.07] text-ok";
              klaseKanSusi = "border-ok bg-ok text-[#04121a]";
            } else if (pinili) {
              klaseKanPilian = "border-err/35 bg-err/[0.07] text-err";
              klaseKanSusi = "border-err bg-err text-[#1a0505]";
            }

            return (
              <div
                key={choice}
                className={`flex items-center gap-2.5 rounded-[9px] border px-3 py-[9px] text-left text-[13.5px] ${klaseKanPilian}`}
              >
                <span
                  className={`inline-flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-md border text-[11px] font-bold ${klaseKanSusi}`}
                >
                  {String.fromCharCode(65 + choiceIndex)}
                </span>
                <span className="flex-1">{choice}</span>
                {tanda && (
                  <span className="text-[10.5px] tracking-[0.06em] uppercase max-[520px]:hidden">
                    {tanda}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ReviewItem;
