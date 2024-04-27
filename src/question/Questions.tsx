import { Suspense, lazy, useState } from "react";
import { Carousel } from "react-bootstrap";
import { QuestionProps } from "./Question.types";
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
    setInput("");
  };

  const handleStart = () => {
    const score = question.calculateScore ? question.calculateScore(input) : 0;
    onAnswer(score, input);
    setIsValid(true);
    setInput("");
  };

  return (
    <div className="p-lg-3 p-2">
      <Suspense
        fallback={
          <div className="d-flex justify-content-center align-items-center">
            <Spinner animation="border" role="status"></Spinner>
          </div>
        }
      >
        <Carousel
          interval={null}
          activeIndex={currentQuestionIndex}
          onSelect={handleNext}
        >
          <Carousel.Item>
            <QuestionIntroduction
              handleStart={handleStart}
              currentQuestionIndex={currentQuestionIndex}
            />
          </Carousel.Item>
          <Carousel.Item>
            <QuestionOne
              handleNext={handleNext}
              input={input}
              handleInput={handleInput}
              isValid={isValid}
              handleBack={handleBack}
              currentQuestionIndex={currentQuestionIndex}
            />
          </Carousel.Item>
          <Carousel.Item>
            <QuestionTwo
              handleNext={handleNext}
              handleInput={handleInput}
              input={input}
              currentQuestionIndex={currentQuestionIndex}
              handleBack={handleBack}
              isValid={isValid}
            />
          </Carousel.Item>
          <Carousel.Item>
            <QuestionThree
              handleNext={handleNext}
              currentQuestionIndex={currentQuestionIndex}
              handleBack={handleBack}
              isValid={isValid}
              handleInput={handleInput}
            />
          </Carousel.Item>
          <Carousel.Item>
            <QuestionFour
              handleNext={handleNext}
              currentQuestionIndex={currentQuestionIndex}
              handleBack={handleBack}
              handleInput={handleInput}
              input={input}
              isValid={isValid}
            />
          </Carousel.Item>
          <Carousel.Item>
            <QuestionFive
              handleNext={handleNext}
              currentQuestionIndex={currentQuestionIndex}
              handleBack={handleBack}
              isValid={isValid}
              handleInput={handleInput}
            />
          </Carousel.Item>
          <Carousel.Item>
            <QuestionSix
              handleNext={handleNext}
              currentQuestionIndex={currentQuestionIndex}
              handleBack={handleBack}
              handleInput={handleInput}
              isValid={isValid}
            />
          </Carousel.Item>
          <Carousel.Item>
            <QuestionSeven
              handleNext={handleNext}
              currentQuestionIndex={currentQuestionIndex}
              handleBack={handleBack}
              handleInput={handleInput}
              isValid={isValid}
            />
          </Carousel.Item>
          <Carousel.Item>
            <QuestionEight
              currentQuestionIndex={currentQuestionIndex}
              handleNext={handleNext}
              handleBack={handleBack}
              handleInput={handleInput}
              isValid={isValid}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Result
              currentQuestionIndex={currentQuestionIndex}
              handleAgain={handleAgain}
              handleMethodology={handleMethodology}
              totalScore={totalScore}
            />
          </Carousel.Item>
        </Carousel>
      </Suspense>
    </div>
  );
};
export default Question;
