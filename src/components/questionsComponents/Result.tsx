import img4 from "../../../public/images/img-4.svg";
import ButtonAgain from "../buttons/ButtonAgain";
import ButtonShowMethodology from "../buttons/ButtonShowMethodology";
import ResultTest from "../resultTest/ResultTest";

export default function Result() {
  return (
    <div className="bg-questions p-3">
      <div className="d-flex flex-column flex-lg-row flex-column-reverse  justify-content-between gap-3">
        <div className="bg-questions d-flex flex-column justify-content-start">
          <div className="fw-bold mb-3">Результат</div>
          <ResultTest />
          <div className="d-flex flex-column flex-lg-row flex-column-reverse gap-3 mt-3">
            <ButtonShowMethodology />
            <ButtonAgain />
          </div>
        </div>
        <img className="img-question" src={img4} alt="img" />
      </div>
    </div>
  );
}
