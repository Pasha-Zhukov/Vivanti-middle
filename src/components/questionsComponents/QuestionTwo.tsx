import Buttons from "../buttons/Buttons";
import { QuestionTwoProps } from "./Question.types";

export default function QuestionTwo({
  question,
  currentQuestionIndex,
  isValid,
  handleNext,
  handleInput,
  handleBack,
  input,
}: QuestionTwoProps) {
  return (
    <div className="bg-questions p-3">
      <div className="d-flex justify-content-between gap-3">
        <div className="bg-questions d-flex flex-column justify-content-between ">
          <div className="fw-bold">Вопрос 2/8</div>
          <h5 className="mb-0">{question.questionText}</h5>
          <div className="w-75">
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
                ? "p-2 pe-5 border-black bg-questions w-50 mt-3 mb-3 "
                : "p-2 pe-5 border-black bg-questions w-50 mt-3 mb-3 invalid"
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
        <img src="../../public/images/img-3.svg" alt="img" />
      </div>
    </div>
  );
}
