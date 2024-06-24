import { useDispatch } from "react-redux";
import { nextQuestion, answerOtherQuestions } from "../../redux/quizReducer";
import { ChangeEvent, useState } from "react";

import img7 from "../../../public/images/img-7.svg";
import ButtonNext from "../buttons/ButtonNext";
import ButtonPrev from "../buttons/ButtonPrev";

export default function QuestionSix() {
  const [isValid, setIsValid] = useState(true);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    setIsValid(true);
  };

  const dispatch = useDispatch();

  const handleNext = () => {
    if (selectedOption) {
      dispatch(answerOtherQuestions(selectedOption));
      dispatch(nextQuestion());
    } else setIsValid(false);
    setSelectedOption(null);
  };

  return (
    <div className="bg-questions p-3">
      <div className="d-flex flex-column flex-lg-row flex-column-reverse  justify-content-between gap-3">
        <div className="bg-questions d-flex flex-column justify-content-between ">
          <div className="fw-bold">Вопрос 6/8</div>
          <h5 className="mb-0">
            Принимал ли Ваш пациент когда-либо регулярно лекарства для снижения
            артериального давления?
          </h5>
          <div className={!isValid ? "no-selection" : ""}>
            <div className="d-flex gap-5 align-items-end fs-18">
              <div className="d-flex flex-column mt-3 mt-lg-0">
                <label className="custom-radio d-inline-flex  align-items-center gap-3">
                  <input
                    type="radio"
                    name="QuestionSix1"
                    value="2"
                    checked={selectedOption === "2"}
                    onChange={handleChange}
                  />
                  <span> {"Да"}</span>
                </label>
                <label className="custom-radio d-inline-flex  align-items-center gap-3">
                  <input
                    type="radio"
                    name="QuestionSix2"
                    value="0"
                    checked={selectedOption === "0"}
                    onChange={handleChange}
                  />
                  <span>{"Нет"}</span>
                </label>
              </div>
              <div>
                <div>(2 балла)</div>
                <div>(0 баллов)</div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column flex-lg-row flex-column-reverse gap-3 mt-3">
            <ButtonPrev />
            <ButtonNext onClick={handleNext} answer={selectedOption} />
          </div>
        </div>
        <img className="img-question" src={img7} alt="img" />
      </div>
    </div>
  );
}
