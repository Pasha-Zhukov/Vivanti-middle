import Buttons from "../buttons/Buttons";
import { ChangeEvent, useState } from "react";
import { QuestionEightProps } from "./Question.types";

export default function QuestionEight({
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

  const handleNextQuestion = () => {
    handleNext();
    setSelectedOption([]);
  };

  return (
    <div className="bg-questions p-3">
      <div className="d-flex flex-column flex-lg-row flex-column-reverse  justify-content-between gap-3">
        <div className="bg-questions d-flex flex-column justify-content-between">
          <div className="fw-bold">Вопрос 8/8</div>
          <h5 className="mb-0">
            Были ли у Вашего пациента родственники с сахарным диабетом 1 или 2
            типа?
          </h5>
          <div className={!isValid ? "no-selection" : ""}>
            <div className="d-flex gap-lg-5 gap-0 align-items-end fs-18">
              <div className="d-flex flex-column ">
                <label className="custom-radio d-inline-flex align-items-center gap-lg-3 gap-1">
                  <input
                    type="checkbox"
                    name="QuestionEight1"
                    value="0"
                    checked={isChecked("0")}
                    onChange={handleSelectionChange}
                  />
                  <span> {"Нет"}</span>
                </label>
                {["3", "5"].map((value) => (
                  <label
                    key={value}
                    className="custom-radio d-inline-flex align-items-center gap-lg-3 gap-1"
                  >
                    <input
                      type="checkbox"
                      name="QuestionEight1"
                      value={value}
                      checked={isChecked(value)}
                      onChange={handleSelectionChange}
                    />
                    <span className="text-nowrap fs-16">
                      {value === "3"
                        ? "Да: дедушка/бабушка..."
                        : "Да: родители, брат/сестра"}
                    </span>
                  </label>
                ))}
              </div>
              <div>
                <div className="text-nowrap">(0 баллов)</div>
                <div className="text-nowrap">(3 балла)</div>
                <div className="text-nowrap">(5 балла)</div>
              </div>
            </div>
          </div>

          <Buttons
            currentQuestionIndex={currentQuestionIndex}
            handleBack={handleBack}
            handleNext={handleNextQuestion}
            input={selectedOption.length}
          />
        </div>
        <img
          className="img-question"
          src="../../public/images/img-9.svg"
          alt="img"
        />
      </div>
    </div>
  );
}
