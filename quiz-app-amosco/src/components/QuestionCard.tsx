import { Question } from "../types";
import AnswerOption from "./AnswerOption";

type QuestionCardProps = {
  question: Question;
  questionNumber: number;
  selectedAnswer: string;
  saPagpili: (choice: string) => void;
};

function QuestionCard({
  question,
  questionNumber,
  selectedAnswer,
  saPagpili,
}: QuestionCardProps) {
  return (
    <div className="rounded-[14px] border border-line-soft bg-shell/60 p-6">
      <p className="mb-2.5 text-xs tracking-[0.12em] text-dim uppercase">
        question {questionNumber}
      </p>
      <h2 className="mb-5 text-[19px] leading-normal font-medium text-[#f2f6fc] max-[520px]:text-[17px]">
        {question.question}
      </h2>
      <div className="flex flex-col gap-2.5">
        {question.choices.map((choice, index) => (
          <AnswerOption
            key={choice}
            letter={String.fromCharCode(65 + index)}
            choice={choice}
            delay={0.05 + index * 0.05}
            isSelected={selectedAnswer === choice}
            saPagpili={saPagpili}
          />
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
