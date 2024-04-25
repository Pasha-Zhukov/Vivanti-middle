import { Props } from "./Buttons.types";
import "./Buttons.css";

export default function Buttons({
  currentQuestionIndex,
  handleBack,
  handleNext,
  handleAgain,
  handleStart,
  handleMethodology,
  input,
}: Props) {
  return (
    <div className="d-flex gap-3 mt-3">
      {currentQuestionIndex >= 9 && (
        <button className=" result-img w-100" onClick={handleMethodology}>
          Методология подсчета результата
        </button>
      )}
      {currentQuestionIndex > 0 && currentQuestionIndex < 9 && (
        <button className="btn-back" onClick={handleBack}>
          Назад
        </button>
      )}
      {currentQuestionIndex < 9 && currentQuestionIndex > 0 && (
        <button
          className={input ? "btn-next " : "btn-next inactive"}
          onClick={handleNext}
        >
          Далее
        </button>
      )}
      {currentQuestionIndex == 9 && (
        <button className="btn-again" onClick={handleAgain}>
          Пройти тест заново
        </button>
      )}
      {currentQuestionIndex == 0 && (
        <button className="btn-start" onClick={handleStart}>
          Начать
        </button>
      )}
    </div>
  );
}
