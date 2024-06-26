import { ChangeEvent, useState } from "react";
import { nextQuestion, answerQuestionOne } from "../../redux/quizReducer";
import { useDispatch } from "react-redux";

import img2 from "../../../public/images/img-2.svg";
import ButtonNext from "../buttons/ButtonNext";
import ButtonPrev from "../buttons/ButtonPrev";

export default function QuestionOne() {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (/^\d{0,3}$/.test(input)) {
      setInput(event.target.value);
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const dispatch = useDispatch();

  const handleNext = () => {
    if (input) {
      dispatch(answerQuestionOne(input));
      dispatch(nextQuestion());
    } else setIsValid(false);
    setInput("");
  };

  return (
    <div className="bg-questions p-3 ">
      <div className="d-flex flex-column flex-lg-row flex-column-reverse  justify-content-between ">
        <div className="d-flex flex-column justify-content-between gap-3 mt-lg-0 mt-3">
          <div className="fw-bold">Вопрос 1/8</div>
          <h5 className="mb-0">Введите возраст Вашего пациента</h5>
          <input
            className={
              isValid
                ? "p-2 pe-5 bg-questions w-100 "
                : "p-2 pe-5 bg-questions w-100  invalid"
            }
            type="number"
            placeholder="Текст"
            value={input}
            onChange={handleInput}
            maxLength={2}
          />
          <p className="text-body-secondary fs-13">
            До 45 лет (0 баллов), 45—54 года (2 балла), <br />
            55—64 года (3 балла), cтарше 65 лет (4 балла)
          </p>
          <div
            onClick={() => setInput("")}
            className="d-flex flex-column flex-lg-row flex-column-reverse gap-3 mt-3"
          >
            <ButtonPrev />
            <ButtonNext onClick={handleNext} answer={input} />
          </div>
        </div>
        <img className="img-question" src={img2} alt="img" />
      </div>
    </div>
  );
}
