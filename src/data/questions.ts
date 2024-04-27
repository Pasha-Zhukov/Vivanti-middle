import { QuestionType } from "../App.types";

export const questionsData: QuestionType[] = [
  {
    id: 1,
    inputType: "introduction",
    calculateScore: () => 0,
  },
  {
    id: 2,
    inputType: "QuestionOne",
    calculateScore: (age: number): number => {
      if (age < 45) {
        return 0;
      } else if (age >= 45 && age < 55) {
        return 2;
      } else if (age >= 55 && age < 65) {
        return 3;
      } else {
        return 4;
      }
    },
  },
  {
    id: 3,
    inputType: "QuestionTwo",
    calculateScore: (bmi: number) => {
      if (bmi < 25) return 0;
      else if (bmi >= 25 && bmi < 30) return 1;
      else if (bmi > 30) return 3;
    },
  },
  {
    id: 4,
    inputType: "QuestionThree",
    calculateScore: (waist: number) => {
      return +waist;
    },
  },
  {
    id: 5,
    inputType: "QuestionFour",
    calculateScore: (selection: string) => +selection,
  },
  {
    id: 6,
    inputType: "QuestionFive",
    calculateScore: (waist: number) => {
      return +waist;
    },
  },
  {
    id: 7,
    inputType: "QuestionSix",
    calculateScore: (waist: number) => {
      return +waist;
    },
  },
  {
    id: 8,
    inputType: "QuestionSeven",
    calculateScore: (waist: number) => {
      return +waist;
    },
  },
  {
    id: 9,
    inputType: "QuestionEight",
    calculateScore: (waist: number) => {
      return +waist;
    },
  },
  {
    id: 10,
    inputType: "result",
  },
];
