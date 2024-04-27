import Buttons from "../buttons/Buttons";
import ResultTest from "../resultTest/ResultTest";
import { ResultProps } from "./Question.types";

export default function Result({
  currentQuestionIndex,
  handleAgain,
  handleMethodology,
  totalScore,
}: ResultProps) {
  return (
    <div className="bg-questions p-3">
      <div className="d-flex flex-column flex-lg-row flex-column-reverse  justify-content-between gap-3">
        <div className="bg-questions d-flex flex-column justify-content-start">
          <div className="fw-bold mb-3">Результат</div>
          <ResultTest totalScore={totalScore} />
          <Buttons
            currentQuestionIndex={currentQuestionIndex}
            handleAgain={handleAgain}
            handleMethodology={handleMethodology}
          />
        </div>
        <img
          className="img-question"
          src="../../public/images/img-4.svg"
          alt="img"
        />
      </div>
    </div>
  );
}
