import { useSelector } from "react-redux";

export default function ResultTest() {
  const questionsData = useSelector((state: any) => state.quiz.questions);

  const totalScore = questionsData.reduce(
    (totalScore: number, question: { score: number }) =>
      totalScore + question.score,
    0
  );

  return (
    <>
      {totalScore < 7 && (
        <div className="fs-18">
          <div className="mb-3">
            Низкий риск развития СД 2 типа, вероятность 1%.
          </div>
          <div className="mb-3">
            У Вашего пациента хорошее здоровье. Рекомендуется продолжать вести
            здоровый образ жизни!
          </div>
        </div>
      )}
      {totalScore >= 7 && totalScore <= 11 && (
        <div className="fs-18">
          <div className="mb-3">
            Слегка повышен риск развития СД 2 типа, вероятность 4%.
          </div>
          <div className="mb-3">
            У Вашего пациента хорошее здоровье. Рекомендуется продолжать вести
            здоровый образ жизни!
          </div>
        </div>
      )}
      {totalScore >= 12 && totalScore <= 14 && (
        <div className="fs-18">
          <div className="mb-3">
            Умеренный риск развития СД 2 типа, вероятность 17%.
          </div>
          <div className="mb-3">
            Возможно у Вашего пациента предиабет. Рекомендуется изменить образ
            жизни.
          </div>
        </div>
      )}
      {totalScore >= 15 && totalScore <= 20 && (
        <div className="fs-18">
          <div className="mb-3">
            Высокий риск развития СД 2 типа, вероятность 33%.
          </div>
          <div className="mb-3">
            Возможно, у Вашего пациента предиабет или сахарный диабет 2 типа.
            Порекомендуйте ему проверить уровень глюкозы (сахара) в крови.
            Пациенту необходимо дать рекомендации по модификации образа жизни и
            при необходимости назначить лекарства для снижения уровня глюкозы
            (сахара) в крови.
          </div>
        </div>
      )}
      {totalScore > 20 && (
        <div className="fs-18">
          <div className="mb-3">
            Высокий риск развития СД 2 типа, вероятность 50%.
          </div>
          <div className="mb-3">
            Возможно, у Вашего пациента сахарный диабет 2 типа. Порекомендуйте
            ему проверить уровень глюкозы (сахара) в крови. Пациенту необходимо
            дать рекомендации по модификации образа жизни и при необходимости
            назначить лекарства для снижения уровня глюкозы (сахара) в крови.
          </div>
        </div>
      )}
    </>
  );
}
