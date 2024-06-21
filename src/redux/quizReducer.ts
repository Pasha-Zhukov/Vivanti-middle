import { createSlice } from "@reduxjs/toolkit";
import { questionsData } from "../data/questions";

const initialState = {
  currentQuestionIndex: 0,
  questions: questionsData,
  showMethodology: false,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    nextQuestion: (state: any) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },
    startAnswering: (state: any) => {
      state.currentQuestionIndex += 1;
    },
    previousQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },
    showMethodology: (state, action) => {
      state.showMethodology = action.payload;
    },
    resetScore: (state) => {
      state.currentQuestionIndex = 0;
    },
    questionOne: (state: any, action) => {
      const answer = action.payload;
      if (answer < 45) {
        state.questions[state.currentQuestionIndex].score = 0;
      } else if (answer >= 45 && answer < 55) {
        state.questions[state.currentQuestionIndex].score = 2;
      } else if (answer >= 55 && answer < 65) {
        state.questions[state.currentQuestionIndex].score = 3;
      } else {
        state.questions[state.currentQuestionIndex].score = 4;
      }
    },
    questionTwo: (state: any, action) => {
      const answer = action.payload;
      if (answer < 25) state.questions[state.currentQuestionIndex].score = 0;
      else if (answer >= 25 && answer < 30)
        state.questions[state.currentQuestionIndex].score = 1;
      else if (answer > 30)
        state.questions[state.currentQuestionIndex].score = 3;
    },
    questionsOther: (state: any, action) => {
      state.questions[state.currentQuestionIndex].score = action.payload.value
        ? +action.payload.value
        : +action.payload;
    },
  },
});

export const {
  nextQuestion,
  previousQuestion,
  resetScore,
  startAnswering,
  showMethodology,
  questionOne,
  questionTwo,
  questionsOther,
} = quizSlice.actions;

export default quizSlice.reducer;
