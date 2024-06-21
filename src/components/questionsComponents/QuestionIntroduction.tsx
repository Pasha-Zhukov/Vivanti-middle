import ButtonStart from "../buttons/ButtonStart";

export default function QuestionIntroduction() {
  return (
    <div className="bg-questions p-3 h-100 ">
      <div className="d-flex flex-column flex-lg-row flex-column-reverse gap-lg-3">
        <div className="d-flex flex-column justify-content-between">
          <p className="fs-5 fw-normal fs-16 m-0 ">
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
          <ButtonStart />
        </div>
        <img
          className="img-question"
          src="../../public/images/img-1.svg"
          alt="img"
        />
      </div>
    </div>
  );
}
