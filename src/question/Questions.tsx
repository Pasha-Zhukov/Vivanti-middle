import { Suspense, lazy } from "react";
import { Carousel } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { nextQuestion } from "../redux/quizReducer";
import { useDispatch, useSelector } from "react-redux";

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

const Question = () => {
  
  const currentQuestionIndex = useSelector(
    (state: { quiz: { currentQuestionIndex: number } }) =>
      state.quiz.currentQuestionIndex
  );
  
  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch(nextQuestion());
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
          touch={false}
          interval={null}
          activeIndex={currentQuestionIndex}
          onSelect={handleNext}
        >
          <Carousel.Item>
            <QuestionIntroduction />
          </Carousel.Item>
          <Carousel.Item>
            <QuestionOne />
          </Carousel.Item>
          <Carousel.Item>
            <QuestionTwo />
          </Carousel.Item>
          <Carousel.Item>
            <QuestionThree />
          </Carousel.Item>
          <Carousel.Item>
            <QuestionFour />
          </Carousel.Item>
          <Carousel.Item>
            <QuestionFive />
          </Carousel.Item>
          <Carousel.Item>
            <QuestionSix />
          </Carousel.Item>
          <Carousel.Item>
            <QuestionSeven />
          </Carousel.Item>
          <Carousel.Item>
            <QuestionEight />
          </Carousel.Item>
          <Carousel.Item>
            <Result />
          </Carousel.Item>
        </Carousel>
      </Suspense>
    </div>
  );
};
export default Question;
