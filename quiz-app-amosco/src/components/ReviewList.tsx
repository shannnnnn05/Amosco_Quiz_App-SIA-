import { useState } from "react";
import { AnswerRecord } from "../types";
import ReviewItem from "./ReviewItem";

type ReviewListProps = {
  responses: AnswerRecord[];
};

function ReviewList({ responses }: ReviewListProps) {
  const [bukas, ibugtakAnBukas] = useState(true);

  if (responses.length === 0) {
    return null;
  }

  const tama = responses.filter(
    (tala) => tala.selected === tala.question.answer
  ).length;

  return (
    <div className="mt-[30px] w-full border-t border-line-soft pt-6">
      <button
        type="button"
        className="flex w-full cursor-pointer items-center gap-2.5 border-none bg-transparent pb-3.5 text-left text-xs tracking-[0.12em] text-dim uppercase"
        onClick={() => ibugtakAnBukas(!bukas)}
      >
        <span>
          review answers
        </span>
        <span className="ml-auto text-xs tracking-[0.04em] text-accent normal-case">
          {tama} / {responses.length} correct
        </span>
        <span
          className={`text-xs text-muted transition-transform duration-[350ms] ${
            bukas ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-[450ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
          bukas ? "grid-rows-[1fr]" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2 overflow-hidden pb-0.5">
          {responses.map((tala, index) => (
            <ReviewItem
              key={`${tala.question.id}-${index}`}
              index={index}
              record={tala}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewList;
