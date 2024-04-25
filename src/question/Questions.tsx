import { Suspense, lazy, useState } from "react";
import { motion } from "framer-motion";
import { OptionType, QuestionProps } from "./Question.types";
import { Spinner } from "react-bootstrap";
import "./Questions.css";

const QuestionIntroduction = lazy(
  () => import("../components/questionsComponents/QuestionIntroduction")
);
const QuestionOne = lazy(
  () => import("../components/questionsComponents/QuestionOne")
);
const QuestionTwo = lazy(
  () => import("../components/questionsComponents/QuestionTwo")
);
const QuestionThree = lazy(
  () => import("../components/questionsComponents/QuestionThree")
);
const QuestionFour = lazy(
  () => import("../components/questionsComponents/QuestionFour")
);
const QuestionFive = lazy(
  () => import("../components/questionsComponents/QuestionFive")
);
const QuestionSix = lazy(
  () => import("../components/questionsComponents/QuestionSix")
);
const QuestionSeven = lazy(
  () => import("../components/questionsComponents/QuestionSeven")
);
const QuestionEight = lazy(
  () => import("../components/questionsComponents/QuestionEight")
);
const Result = lazy(() => import("../components/questionsComponents/Result"));

const Question = ({
  question,
  answer,
  onAnswer,
  currentQuestionIndex,
  handleBack,
  handleAgain,
  totalScore,
  handleMethodology,
}: QuestionProps) => {
  const [input, setInput] = useState<any>(answer || "");
  const [isValid, setIsValid] = useState(true);

  const handleInput = (event: any) => {
    const value = event?.target?.value || event?.value || event;
    setInput(value);
    setIsValid(true);
  };

  const handleNext = () => {
    if (!input) {
      setIsValid(false);
      return;
    }
    setIsValid(true);

    const score = question.calculateScore ? question.calculateScore(input) : 0;
    onAnswer(score, input);
  };

  const handleStart = () => {
    const score = question.calculateScore ? question.calculateScore(input) : 0;
    onAnswer(score, input);
    setIsValid(true);
    setInput(null);
  };

  const dataSelect: OptionType[] = [
    { value: "0", text: "Каждый день (0 баллов)" },
    { value: "1", text: "Не каждый день (1 балл)" },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.5 }}
      className="p-3"
    >
      <Suspense
        fallback={
          <div className="d-flex justify-content-center align-items-center ">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        }
      >
        {question.inputType === "introduction" && (
          <QuestionIntroduction
            question={question}
            handleStart={handleStart}
            currentQuestionIndex={currentQuestionIndex}
          />
        )}
        {question.inputType === "QuestionOne" && (
          <QuestionOne
            question={question}
            handleNext={handleNext}
            input={input}
            handleInput={handleInput}
            isValid={isValid}
            handleBack={handleBack}
            currentQuestionIndex={currentQuestionIndex}
          />
        )}
        {question.inputType === "QuestionTwo" && (
          <QuestionTwo
            question={question}
            handleNext={handleNext}
            handleInput={handleInput}
            input={input}
            currentQuestionIndex={currentQuestionIndex}
            handleBack={handleBack}
            isValid={isValid}
          />
        )}
        {question.inputType === "QuestionThree" && (
          <QuestionThree
            question={question}
            handleNext={handleNext}
            currentQuestionIndex={currentQuestionIndex}
            handleBack={handleBack}
            isValid={isValid}
            handleInput={handleInput}
          />
        )}
        {question.inputType === "QuestionFour" && (
          <QuestionFour
            question={question}
            handleNext={handleNext}
            currentQuestionIndex={currentQuestionIndex}
            handleBack={handleBack}
            dataSelect={dataSelect}
            handleInput={handleInput}
            input={input}
            isValid={isValid}
          />
        )}
        {question.inputType === "QuestionFive" && (
          <QuestionFive
            question={question}
            handleNext={handleNext}
            currentQuestionIndex={currentQuestionIndex}
            handleBack={handleBack}
            isValid={isValid}
            handleInput={handleInput}
          />
        )}
        {question.inputType === "QuestionSix" && (
          <QuestionSix
            question={question}
            handleNext={handleNext}
            currentQuestionIndex={currentQuestionIndex}
            handleBack={handleBack}
            handleInput={handleInput}
            isValid={isValid}
          />
        )}
        {question.inputType === "QuestionSeven" && (
          <QuestionSeven
            question={question}
            handleNext={handleNext}
            currentQuestionIndex={currentQuestionIndex}
            handleBack={handleBack}
            handleInput={handleInput}
            isValid={isValid}
          />
        )}
        {question.inputType === "QuestionEight" && (
          <QuestionEight
            question={question}
            currentQuestionIndex={currentQuestionIndex}
            handleNext={handleNext}
            handleBack={handleBack}
            handleInput={handleInput}
            isValid={isValid}
          />
        )}
        {question.inputType === "result" && (
          <Result
            question={question}
            currentQuestionIndex={currentQuestionIndex}
            handleAgain={handleAgain}
            handleMethodology={handleMethodology}
            totalScore={totalScore}
          />
        )}
      </Suspense>
    </motion.div>
  );
};
export default Question;
