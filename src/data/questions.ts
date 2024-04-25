import { QuestionType } from "../App.types";

export const questionsData: QuestionType[] = [
  {
    id: 1,
    inputType: "introduction", // Предполагается числовой ввод
    calculateScore: () => 0,
  },
  {
    id: 2,
    questionText: "Введите возраст Вашего пациента",
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
    questionText: "Рассчитайте индекс массы тела пациента",
    inputType: "QuestionTwo",
    calculateScore: (bmi: number) => {
      if (bmi < 25) return 0;
      else if (bmi >= 25 && bmi < 30) return 1;
      else if (bmi > 30) return 3;
    },
  },
  {
    id: 4,
    questionText: "Введите окружность талии вашего пациента",
    inputType: "QuestionThree",
    calculateScore: (waist: number) => {
      return +waist;
    },
  },
  {
    id: 5,
    questionText: "Как часто Ваш пациент ест овощи, фрукты или ягоды?",
    inputType: "QuestionFour",
    calculateScore: (selection: string) => +selection, // Баллы зависят от выбора
  },
  {
    id: 6,
    questionText:
      "Занимается ли Ваш пациент физическими упражнениями? Выполняет ли он физические упражнения по 30 минут каждый день или 3 часа в течение недели?",
    inputType: "QuestionFive",
    calculateScore: (waist: number) => {
      return +waist;
    },
  },
  {
    id: 7,
    questionText:
      "Принимал ли Ваш пациент когда-либо регулярно лекарства для снижения артериального давления?",
    inputType: "QuestionSix",
    calculateScore: (waist: number) => {
      return +waist;
    },
  },
  {
    id: 8,
    questionText:
      "Обнаруживали ли у Вашего пациента повышение глюкозы (сахара) в крови выше нормы (во время диспансеризации, проф. осмотра, во время болезни или беременности)?",
    inputType: "QuestionSeven",

    calculateScore: (waist: number) => {
      return +waist;
    },
  },
  {
    id: 9,
    questionText:
      "Были ли у Вашего пациента родственники с сахарным диабетом 1 или 2 типа?",
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
