export type Question = {
  id: number;
  question: string;
  choices: string[];
  answer: string;
};

export type AnswerRecord = {
  question: Question;
  selected: string;
};
