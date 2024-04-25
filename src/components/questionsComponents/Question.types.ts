import { ChangeEvent } from "react";
import { ActionMeta, SingleValue } from "react-select";

export type SelectedOptionType = {
  text: string;
  value?: string;
  label?: string;
};

export interface QuestionOneProps {
  question: {
    questionText: string;
  };
  currentQuestionIndex: number;
  handleNext: () => void;
  handleBack: () => void;
  isValid: boolean;
  input: string;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface QuestionTwoProps {
  question: {
    questionText: string;
  };
  currentQuestionIndex: number;
  isValid: boolean;
  handleNext: () => void;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBack: () => void;
  input: string;
}

export interface QuestionThreeProps {
  question: {
    questionText: string;
  };
  isValid: boolean;
  handleNext: () => void;
  handleBack: () => void;
  currentQuestionIndex: number;
  handleInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

export type QuestionFourProps = {
  question: {
    questionText: string;
  };
  handleNext: () => void;
  handleBack: () => void;
  dataSelect: SelectedOptionType[];
  handleInput: (
    newValue: SingleValue<SelectedOptionType>,
    actionMeta: ActionMeta<SelectedOptionType>
  ) => void;
  input: number;
  isValid: boolean;
  currentQuestionIndex: number;
};

export interface QuestionFiveProps {
  question: {
    questionText: string;
  };
  isValid: boolean;
  handleNext: () => void;
  currentQuestionIndex: number;
  handleBack: () => void;
  handleInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface QuestionSixProps {
  question: {
    questionText: string;
  };
  isValid: boolean;
  handleNext: () => void;
  currentQuestionIndex: number;
  handleBack: () => void;
  handleInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface QuestionSevenProps {
  question: {
    questionText: string;
  };
  isValid: boolean;
  handleNext: () => void;
  currentQuestionIndex: number;
  handleBack: () => void;
  handleInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

export type QuestionEightProps = {
  question: {
    questionText: string;
  };
  isValid: boolean;
  handleNext: () => void;
  currentQuestionIndex: number;
  handleBack: () => void;
  handleInput: (value: number) => void;
};

export interface ResultProps {
  question: {
    questionText: string;
  };
  currentQuestionIndex: number;
  handleAgain: () => void;
  handleMethodology: () => void;
  totalScore: number;
}
