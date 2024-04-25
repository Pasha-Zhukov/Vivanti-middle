export type OptionType = {
  value: string;
  text: string;
};

export type QuestionProps = {
  question: any;
  answer: string;
  onAnswer: (score: number, answer: string) => void;
  currentQuestionIndex: number;
  handleBack: () => void;
  handleAgain: () => void;
  handleMethodology: () => void;
  totalScore: number;
};
