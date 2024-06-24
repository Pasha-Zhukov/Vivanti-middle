import circle12 from ".././../../public/images/circle-12.svg";
import circle15 from ".././../../public/images/circle-15.svg";
import circle14 from ".././../../public/images/circle-14.svg";
import circle20 from ".././../../public/images/circle-20.svg";

import { useDispatch } from "react-redux";
import { showMethodology } from "../../redux/quizReducer";

import "./Methodology.css";

export default function Methodology() {
  const dispatch = useDispatch();

  const handleMethodology = () => {
    dispatch(showMethodology(false));
  };

  return (
    <>
      <div className="d-flex justify-content-center p-2">
        <table className="table w-100 ">
          <thead>
            <tr className="text-center border-table-body text-white  fs-18">
              <th
                className="p-lg-3 p-1 bg-methodology-table-header fw-normal "
                scope="col"
              >
                Общее количество баллов
              </th>
              <th
                className="p-lg-3 p-1 bg-methodology-table-header border-table-header fw-normal "
                scope="col"
              >
                Уровень риска СД 2 типа
              </th>
              <th
                className="p-lg-3 p-1 bg-methodology-table-header fw-normal "
                scope="col"
              >
                Вероятность развития СД 2 типа
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center table-body-color-text ">
              <th
                className="p-lg-3 p-1 fw-normal border-table-body "
                scope="row"
              >
                Менее 7
              </th>
              <td className="p-lg-3 p-1 border-table-body low-risk">
                Низкий риск
              </td>
              <td className="p-lg-3 p-1 border-table-body text-nowrap ">
                1 из 100 или 1%
              </td>
            </tr>
            <tr className="text-center">
              <th
                className="p-lg-3 p-1 fw-normal border-table-body"
                scope="row"
              >
                7–11
              </th>
              <td className="p-lg-3 p-1 border-table-body slightly-raised">
                Слегка повышен
              </td>
              <td className="p-lg-3 p-1 border-table-body">1 из 25 или 4%</td>
            </tr>
            <tr className="text-center">
              <th
                className="p-lg-3 p-1 fw-normal border-table-body"
                scope="row"
              >
                12–14
              </th>
              <td className="p-lg-3 p-1 border-table-body moderate">
                Умеренный
              </td>
              <td className="p-lg-3 p-1 border-table-body">1 из 6 или 17%</td>
            </tr>
            <tr className="text-center">
              <th
                className="p-lg-3 p-1 border-table-body fw-normal"
                scope="row"
              >
                15–20
              </th>
              <td className="p-lg-3 p-1 border-table-body high">Высокий</td>
              <td className="p-lg-3 p-1 border-table-body"> 1 из 3 или 33%</td>
            </tr>
            <tr className="text-center">
              <th
                className="p-lg-3 p-1 border-table-body fw-normal"
                scope="row"
              >
                Более 20
              </th>
              <td className="p-lg-3 p-1 border-table-body very-high">
                Очень высокий
              </td>
              <td className="p-lg-3 p-1 border-table-body">1 из 2 или 50%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-between flex-column flex-lg-row gap-4 mt-lg-4 p-3 p-lg-0">
        <div className="d-flex flex-column gap-3 justify-content-between ">
          <div className="d-flex align-items-start flex-column flex-lg-row gap-3">
            <div className="d-flex align-items-center flex-column ">
              <img src={circle12} alt="circle" />
              <div className="text-circle"> {"<12"}</div>
            </div>
            <p className="fs-18">
              Общее количество баллов менее 12. У Вашего пациента хорошее
              здоровье. Рекомендуется продолжать вести здоровый образ жизни!
            </p>
          </div>

          <div className="d-flex align-items-start flex-column flex-lg-row gap-3">
            <div className="d-flex align-items-center flex-column ">
              <img src={circle15} alt="circle" />
              <div className="text-circle text-nowrap "> {"15—20"}</div>
            </div>
            <p className="fs-18">
              Общее количество баллов 15—20. Возможно, у Вашего пациента
              предиабет или сахарный диабет 2 типа. Порекомендуйте ему проверить
              уровень глюкозы (сахара) в крови. Пациенту необходимо дать
              рекомендации по модификации образа жизни и при необходимости
              назначить лекарства для снижения уровня глюкозы (сахара) в крови.
            </p>
          </div>
        </div>
        <div className="d-flex flex-column  justify-content-between ">
          <div className="d-flex align-items-start flex-column flex-lg-row gap-3">
            <div className="d-flex align-items-center flex-column ">
              <img src={circle14} alt="circle" />
              <div className="text-circle"> {"12—14"}</div>
            </div>
            <p className="fs-18">
              Общее количество баллов 12—14. Возможно, у Вашего пациента
              предиабет. Рекомендуется изменить образ жизни.
            </p>
          </div>
          <div className="d-flex align-items-start flex-column flex-lg-row gap-3">
            <div className="d-flex align-items-center flex-column ">
              <img src={circle20} alt="circle" />
              <div className="text-circle"> {">20"}</div>
            </div>
            <p className="fs-18">
              Общее количество баллов более 20. По всей вероятности у Вашего
              пациента сахарный диабет 2 типа. Проверьте у него уровень глюкозы
              (сахара) в крови и постарайтесь его нормализовать. Пациенту
              необходимо дать рекомендации по модификации образа жизни и
              назначить лекарства для контроля уровня глюкозы (сахара) в крови.
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mb-5">
        <button className="btn-back" onClick={handleMethodology}>
          Назад
        </button>
      </div>
    </>
  );
}
