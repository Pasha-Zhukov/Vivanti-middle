import Buttons from "../buttons/Buttons";
import { ChangeEvent, useState } from "react";
import { QuestionFiveProps } from "./Question.types";

export default function QuestionFive({
  isValid,
  currentQuestionIndex,
  handleNext,
  handleBack,
  handleInput,
}: QuestionFiveProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    handleInput(event);
  };

  const handleNextQuestion = () => {
    handleNext();
    setSelectedOption(null);
  };

  return (
    <div className="bg-questions p-3">
      <div className="d-flex flex-column flex-lg-row flex-column-reverse  justify-content-between  gap-3">
        <div className="bg-questions d-flex flex-column justify-content-between ">
          <div className="fw-bold">Вопрос 5/8</div>
          <h5 className="mb-0">
            Занимается ли Ваш пациент физическими упражнениями? Выполняет ли он
            физические упражнения по 30 минут каждый день или 3 часа в течение
            недели?
          </h5>
          <div className={!isValid ? "no-selection" : ""}>
            <div className="d-flex gap-5 align-items-end fs-18">
              <div className="d-flex flex-column mt-3 mt-lg-0">
                <label className="custom-radio d-inline-flex  align-items-center gap-3">
                  <input
                    type="radio"
                    name="QuestionFive1"
                    value="0"
                    checked={selectedOption == "0"}
                    onChange={handleChange}
                  />
                  <span> {"Да"}</span>
                </label>
                <label className="custom-radio d-inline-flex  align-items-center gap-3">
                  <input
                    type="radio"
                    name="QuestionFive2"
                    value="2"
                    checked={selectedOption == "2"}
                    onChange={handleChange}
                  />
                  <span>{"Нет"}</span>
                </label>
              </div>
              <div>
                <div>(0 баллов)</div>
                <div>(2 балла)</div>
              </div>
            </div>
          </div>

          <Buttons
            currentQuestionIndex={currentQuestionIndex}
            handleBack={handleBack}
            handleNext={handleNextQuestion}
            input={selectedOption}
          />
        </div>
        <img
          className="img-question"
          src="../../public/images/img-6.svg"
          alt="img"
        />
      </div>
    </div>
  );
}
