import Buttons from "../buttons/Buttons";
import { QuestionTwoProps } from "./Question.types";

export default function QuestionTwo({
  currentQuestionIndex,
  isValid,
  handleNext,
  handleInput,
  handleBack,
  input,
}: QuestionTwoProps) {
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
          <Buttons
            currentQuestionIndex={currentQuestionIndex}
            handleBack={handleBack}
            handleNext={handleNext}
            input={input}
          />
        </div>
        <img
          className="img-question"
          src="../../public/images/img-3.svg"
          alt="img"
        />
      </div>
    </div>
  );
}
