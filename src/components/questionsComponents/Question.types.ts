export interface QuestionIntroductionProps {
  currentQuestionIndex: number;
}
export type SelectedOptionType = {
  text: string;
  value?: string;
  label?: string;
};
export type OptionType = {
  value: string;
  text: string;
};
