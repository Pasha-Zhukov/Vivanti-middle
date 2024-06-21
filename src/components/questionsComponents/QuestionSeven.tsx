import img8 from "../../../public/images/img-8.svg";
import { ChangeEvent, useState } from "react";
import ButtonPrev from "../buttons/ButtonPrev";
import ButtonNext from "../buttons/ButtonNext";
import { nextQuestion, questionsOther } from "../../redux/quizReducer";
import { useDispatch } from "react-redux";

export default function QuestionSeven() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    setIsValid(true);
  };

  const [isValid, setIsValid] = useState(true);

  const handleNext = () => {
    if (selectedOption) {
      dispatch(questionsOther(selectedOption));
      dispatch(nextQuestion());
    } else setIsValid(false);
    setSelectedOption(null);
  };

  return (
    <div className="bg-questions p-3">
      <div className="d-flex flex-column flex-lg-row flex-column-reverse  justify-content-between gap-3">
        <div className="bg-questions d-flex flex-column justify-content-between ">
          <div className="fw-bold">Вопрос 7/8</div>
          <h5 className="mb-0">
            Обнаруживали ли у Вашего пациента повышение глюкозы (сахара) в крови
            выше нормы (во время диспансеризации, проф. осмотра, во время
            болезни или беременности)?
          </h5>
          <div className={!isValid ? "no-selection" : ""}>
            <div className="d-flex gap-5 align-items-end fs-18">
              <div className="d-flex flex-column mt-3 mt-lg-0 ">
                <label className="custom-radio d-inline-flex  align-items-center gap-3">
                  <input
                    type="radio"
                    name="QuestionSeven1"
                    value="0"
                    checked={selectedOption === "0"}
                    onChange={handleChange}
                  />
                  <span> {"Нет"}</span>
                </label>
                <label className="custom-radio d-inline-flex  align-items-center gap-3">
                  <input
                    type="radio"
                    name="QuestionSeven2"
                    value="1"
                    checked={selectedOption === "1"}
                    onChange={handleChange}
                  />
                  <span>{"Да"}</span>
                </label>
              </div>
              <div>
                <div>(0 баллов)</div>
                <div>(1 балла)</div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column flex-lg-row flex-column-reverse gap-3 mt-3">
            <ButtonPrev />
            <ButtonNext onClick={handleNext} answer={selectedOption} />
          </div>
        </div>
        <img
          className="img-question"
          src={img8}
          alt="img"
        />
      </div>
    </div>
  );
}
