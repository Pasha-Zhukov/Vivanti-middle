import { ChangeEvent, useState } from "react";
import Buttons from "../buttons/Buttons";
import { QuestionEightProps } from "./Question.types";

export default function QuestionEight({
  question,
  isValid,
  handleNext,
  currentQuestionIndex,
  handleBack,
  handleInput,
}: QuestionEightProps) {
  const [selectedOption, setSelectedOption] = useState<string[]>([]);

  const handleSelectionChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    let newSelection = [...selectedOption];

    if (value === "0") {
      if (checked) {
        newSelection = ["0"];
      } else {
        newSelection = [];
      }
    } else {
      if (checked) {
        if (!newSelection.includes("0") && newSelection.length < 2) {
          newSelection.push(value);
        }
      } else {
        newSelection = newSelection.filter((item) => item !== value);
      }
    }

    setSelectedOption(newSelection);
    sendInput(newSelection);
  };

  const sendInput = (selection: string[]) => {
    if (selection.includes("0")) {
      handleInput("0" as any);
    } else {
      const sum = selection.reduce((acc, cur) => acc + parseInt(cur, 10), 0);
      handleInput(sum);
    }
  };

  const isChecked = (value: string) => selectedOption.includes(value);

  return (
    <div className="bg-questions p-3">
      <div className="d-flex justify-content-between gap-3">
        <div className="bg-questions d-flex flex-column justify-content-between">
          <div className="fw-bold">Вопрос 8/8</div>
          <h5 className="mb-0">{question.questionText}</h5>
          <div className={!isValid ? "no-selection" : ""}>
            <div className="d-flex gap-5 align-items-end fs-18">
              <div className="d-flex flex-column">
                <label className="custom-radio d-inline-flex align-items-center gap-3">
                  <input
                    type="checkbox"
                    name="measurement"
                    value="0"
                    checked={isChecked("0")}
                    onChange={handleSelectionChange}
                  />
                  <span> {"Нет"}</span>
                </label>
                {["3", "5"].map((value) => (
                  <label
                    key={value}
                    className="custom-radio d-inline-flex align-items-center gap-3"
                  >
                    <input
                      type="checkbox"
                      name="measurement"
                      value={value}
                      checked={isChecked(value)}
                      onChange={handleSelectionChange}
                    />
                    <span>
                      {value === "3"
                        ? "Да: дедушка/бабушка..."
                        : "Да: родители, брат/сестра..."}
                    </span>
                  </label>
                ))}
              </div>
              <div>
                <div>(0 баллов)</div>
                <div>(3 балла)</div>
                <div>(5 балла)</div>
              </div>
            </div>
          </div>

          <Buttons
            currentQuestionIndex={currentQuestionIndex}
            handleBack={handleBack}
            handleNext={handleNext}
            input={selectedOption.length}
          />
        </div>
        <img src="../../public/images/img-9.svg" alt="img" />
      </div>
    </div>
  );
}
