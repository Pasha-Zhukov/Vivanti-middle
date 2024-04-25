import { useState, ChangeEvent } from "react";
import Buttons from "../buttons/Buttons";
import { QuestionThreeProps } from "./Question.types";

export default function QuestionThree({
  question,
  isValid,
  handleNext,
  handleBack,
  currentQuestionIndex,
  handleInput,
}: QuestionThreeProps) {
  const [selectedOptionMan, setSelectedOptionMan] = useState<string | null>(
    null
  );
  const [selectedOptionWoman, setSelectedOptionWoman] = useState<string | null>(
    null
  );

  const handleChangeMan = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOptionWoman(null);
    setSelectedOptionMan(event.target.value);
    handleInput(event);
  };

  const handleChangeWoman = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOptionMan(null);
    setSelectedOptionWoman(event.target.value);
    handleInput(event);
  };

  return (
    <div className="bg-questions p-3">
      <div className="d-flex justify-content-between gap-3">
        <div className="bg-questions d-flex flex-column justify-content-between">
          <div className="fw-bold">Вопрос 3/8</div>
          <h5 className="mb-0">{question.questionText}</h5>
          <div className={!isValid ? "no-selection" : ""}>
            <div className="d-flex gap-5 align-items-end fs-18">
              <div className="d-flex flex-column">
                <h5 className="fw-bold">Мужчины</h5>
                <label className="custom-radio d-inline-flex  align-items-center gap-3">
                  <input
                    type="radio"
                    name="measurement"
                    value="0"
                    checked={selectedOptionMan === "0"}
                    onChange={handleChangeMan}
                  />
                  <span>{" < 94 см"}</span>
                </label>
                <label className="custom-radio d-inline-flex  align-items-center gap-3">
                  <input
                    type="radio"
                    name="measurement"
                    value="3"
                    checked={selectedOptionMan === "3"}
                    onChange={handleChangeMan}
                  />
                  <span>{" 94—102 см"}</span>
                </label>
                <label className="custom-radio d-inline-flex  align-items-center gap-3">
                  <input
                    type="radio"
                    name="measurement"
                    value="4"
                    checked={selectedOptionMan === "4"}
                    onChange={handleChangeMan}
                  />
                  <span>{"> 102 см"}</span>
                </label>
              </div>
              <div className="d-flex flex-column">
                <h5 className="fw-bold">Женщины</h5>
                <label className="custom-radio d-inline-flex  align-items-center gap-3">
                  <input
                    type="radio"
                    name="measurement"
                    value="0"
                    checked={selectedOptionWoman === "0"}
                    onChange={handleChangeWoman}
                  />
                  <span>{" < 80 см"}</span>
                </label>
                <label className="custom-radio d-inline-flex  align-items-center gap-3">
                  <input
                    type="radio"
                    name="measurement"
                    value="3"
                    checked={selectedOptionWoman === "3"}
                    onChange={handleChangeWoman}
                  />
                  <span>{" 80—88 см"}</span>
                </label>
                <label className="custom-radio d-inline-flex  align-items-center gap-3">
                  <input
                    type="radio"
                    name="measurement"
                    value="4"
                    checked={selectedOptionWoman === "4"}
                    onChange={handleChangeWoman}
                  />
                  <span>{"> 88 см"}</span>
                </label>
              </div>
              <div>
                <div>(0 баллов)</div>
                <div>(3 балла)</div>
                <div>(4 балла)</div>
              </div>
            </div>
          </div>

          <Buttons
            currentQuestionIndex={currentQuestionIndex}
            handleBack={handleBack}
            handleNext={handleNext}
            input={selectedOptionMan || selectedOptionWoman}
          />
        </div>
        <img src="../../public/images/img-4.svg" alt="img" />
      </div>
    </div>
  );
}
