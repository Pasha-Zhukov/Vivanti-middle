import React from "react";
import Buttons from "../buttons/Buttons";

interface QuestionIntroductionProps {
  question: {
    questionText: string;
  };
  currentQuestionIndex: number;
  handleStart: () => void;
}

const QuestionIntroduction: React.FC<QuestionIntroductionProps> = ({
  question,
  currentQuestionIndex,
  handleStart,
}) => {
  return (
    <div className="bg-questions p-3">
      <div className="d-flex gap-3">
        <div>
          <h5>{question.questionText}</h5>

          <p className="fs-5 fw-normal ">
            Своевременная диагностика нарушений углеводного обмена крайне важна
            для подбора корректной АГ-терапии пациентам. Раннее диагностирование
            позволяет не только замедлить манифестацию СД 2 типа, но и избежать
            у таких пациентов необратимых изменений почечной ткани на фоне
            углеводных нарушений и повышенного АД.
            <br />
            <br />
            Дорогой доктор, во время приема Вы можете предложить пациенту пройти
            этот короткий опрос, чтобы оценить 10-летний риск развития СД 2 типа
            и дать необходимые рекомендации.
          </p>
          <Buttons
            currentQuestionIndex={currentQuestionIndex}
            handleStart={handleStart}
          />
        </div>
        <img src="../../public/images/img-1.svg" alt="img" />
      </div>
    </div>
  );
};

export default QuestionIntroduction;
