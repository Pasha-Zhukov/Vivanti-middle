import { useDispatch } from "react-redux";
import { nextQuestion, questionsOther } from "../../redux/quizReducer";
import ButtonNext from "../buttons/ButtonNext";
import ButtonPrev from "../buttons/ButtonPrev";
import { ChangeEvent, useState } from "react";

export default function QuestionEight() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isValid, setIsValid] = useState(true);
  const dispatch = useDispatch();

  const handleSelectionChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    setSelectedOptions((prevOptions) => {
      let newSelection = [];
      if (checked) {
        if (value === "0") {
          newSelection = ["0"];
        } else {
          newSelection = prevOptions.filter((option) => option !== "0");
          newSelection.push(value);
        }
      } else {
        newSelection = prevOptions.filter((option) => option !== value);
      }
      return newSelection;
    });

    setIsValid(true);
  };

  const isChecked = (value: string) => selectedOptions.includes(value);

  const calculateScore = (selection: string[]) => {
    if (selection.includes("3") && selection.includes("5")) return 8;
    if (selection.includes("0")) return "0";
    if (selection.includes("3")) return "3";
    if (selection.includes("5")) return "5";
  };

  const handleNext = () => {
    if (selectedOptions) {
      dispatch(questionsOther(calculateScore(selectedOptions)));
      dispatch(nextQuestion());
    } else setIsValid(false);
    setSelectedOptions([]);
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
                        ? "Да: дедушка/бабушка"
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
          <div
            onClick={() => setSelectedOptions([])}
            className="d-flex flex-column flex-lg-row flex-column-reverse gap-3 mt-3"
          >
            <ButtonPrev />
            <ButtonNext
              onClick={handleNext}
              answer={calculateScore(selectedOptions)}
            />
          </div>
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
