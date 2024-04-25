export interface QuestionType {
  id: number;
  questionText?: string;
  inputType: string;
  calculateScore?: (input?: any) => any;
}
