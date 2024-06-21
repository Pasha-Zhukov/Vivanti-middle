import { resetScore } from "../../redux/quizReducer";
import { useDispatch } from "react-redux";

import "./Buttons.css";

const ButtonAgain = () => {
  const dispatch = useDispatch();

  const handleAgain = () => {
    dispatch(resetScore());
  };

  return (
    <button className="btn-again" onClick={handleAgain}>
      Пройти тест заново
    </button>
  );
};

export default ButtonAgain;
