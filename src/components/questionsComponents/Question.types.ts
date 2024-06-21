import { ChangeEvent } from "react";
import { ActionMeta, SingleValue } from "react-select";

export interface QuestionIntroductionProps {
  currentQuestionIndex: number;
}
export type SelectedOptionType = {
  text: string;
  value?: string;
  label?: string;
};

export interface QuestionOneProps {
  currentQuestionIndex: number;
  isValid: boolean;
  input: string;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface QuestionTwoProps {
  currentQuestionIndex: number;
  isValid: boolean;
  handleNext: () => void;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBack: () => void;
  input: string;
}

export interface QuestionThreeProps {
  isValid: boolean;
  handleNext: () => void;
  handleBack: () => void;
  currentQuestionIndex: number;
  handleInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

export type QuestionFourProps = {
  handleNext: () => void;
  handleBack: () => void;
  handleInput: (
    newValue: SingleValue<SelectedOptionType>,
    actionMeta?: ActionMeta<SelectedOptionType>
  ) => void;
  input: number;
  isValid: boolean;
  currentQuestionIndex: number;
};

export interface QuestionFiveProps {
  isValid: boolean;
  handleNext: () => void;
  currentQuestionIndex: number;
  handleBack: () => void;
  handleInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface QuestionSixProps {
  isValid: boolean;
  handleNext: () => void;
  currentQuestionIndex: number;
  handleBack: () => void;
  handleInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface QuestionSevenProps {
  isValid: boolean;
  handleNext: () => void;
  currentQuestionIndex: number;
  handleBack: () => void;
  handleInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

export type QuestionEightProps = {
  isValid: boolean;
  handleNext: () => void;
  currentQuestionIndex: number;
  handleBack: () => void;
  handleInput: (value: number) => void;
};

export interface ResultProps {
  currentQuestionIndex: number;
  handleAgain: () => void;
  handleMethodology: () => void;
  totalScore: number;
}
