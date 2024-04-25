import Buttons from "../buttons/Buttons";
import { QuestionOneProps } from "./Question.types";

export default function QuestionOne({
  question,
  currentQuestionIndex,
  handleNext,
  handleBack,
  isValid,
  input,
  handleInput,
}: QuestionOneProps) {
  return (
    <div className="bg-questions p-3">
      <div className="d-flex justify-content-between ">
        <div className="d-flex flex-column justify-content-between gap-3">
          <div className="fw-bold">Вопрос 1/8</div>
          <h5 className="mb-0">{question.questionText}</h5>
          <input
            className={
              isValid
                ? "p-2 pe-5 bg-questions w-50"
                : "p-2 pe-5 bg-questions w-50 invalid"
            }
            type="number"
            placeholder="Текст"
            value={input}
            onChange={handleInput}
            required
          />
          <p className="text-body-secondary fs-13">
            До 45 лет (0 баллов), 45—54 года (2 балла), <br />
            55—64 года (3 балла), cтарше 65 лет (4 балла)
          </p>
          <Buttons
            currentQuestionIndex={currentQuestionIndex}
            handleBack={handleBack}
            handleNext={handleNext}
            input={input}
          />
        </div>
        <img src="../../public/images/img-2.svg" alt="img" />
      </div>
    </div>
  );
}
