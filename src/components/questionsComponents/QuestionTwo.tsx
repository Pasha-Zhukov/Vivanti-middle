import img3 from "../../../public/images/img-3.svg";
import { ChangeEvent, useState } from "react";
import ButtonPrev from "../buttons/ButtonPrev";
import ButtonNext from "../buttons/ButtonNext";
import { nextQuestion, questionTwo } from "../../redux/quizReducer";
import { useDispatch } from "react-redux";

export default function QuestionTwo() {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(true);
  const dispatch = useDispatch();

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (/^\d{0,2}$/.test(input)) {
      setInput(event.target.value);
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleNext = () => {
    if (input) {
      dispatch(questionTwo(input));
      dispatch(nextQuestion());
    } else setIsValid(false);
    setInput("");
  };

  return (
    <div className="bg-questions p-3">
      <div className="d-flex flex-column flex-lg-row flex-column-reverse  justify-content-between ">
        <div className="bg-questions d-flex flex-column justify-content-between mt-lg-0 mt-3">
          <div className="fw-bold">Вопрос 2/8</div>
          <h5 className="mb-0">Рассчитайте индекс массы тела пациента</h5>
          <div className="width-input">
            Индекс массы тела позволяет выявить наличие избыточного веса или
            ожирения <br />
            (ИМТ = вес, кг / рост, м^2). Если у Вас не получается произвести
            расчет самостоятельно, воспользуйтесь
            <a
              target="_blank"
              href="https://clinic-cvetkov.ru/company/kalkulyator-imt/"
            >
              специальным калькулятором.
            </a>
          </div>

          <input
            className={
              isValid
                ? "p-2 pe-5 bg-questions width-input"
                : "p-2 pe-5 bg-questions width-input invalid"
            }
            type="number"
            placeholder="Текст"
            value={input}
            onChange={handleInput}
          />
          <p className="text-body-secondary fs-13 m-0">
            Менее 25 кг/м2 (0 баллов), 25—30 кг/м2 (1 балл), <br />
            больше 30 кг/м2 (3 балла)
          </p>
          <div className="d-flex flex-column flex-lg-row flex-column-reverse gap-3 mt-3">
            <ButtonPrev />
            <ButtonNext onClick={handleNext} answer={input} />
          </div>
        </div>
        <img className="img-question" src={img3} alt="img" />
      </div>
    </div>
  );
}
