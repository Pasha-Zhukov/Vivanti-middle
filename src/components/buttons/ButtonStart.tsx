import { useDispatch } from "react-redux";
import { startAnswering } from "../../redux/quizReducer";

import "./Buttons.css";

const ButtonStart = () => {
  const dispatch = useDispatch();

  const handleStart = () => {
    dispatch(startAnswering());
  };

  return (
    <div className="d-flex flex-column flex-lg-row flex-column-reverse gap-3 mt-3">
      <button className="btn-start" onClick={handleStart}>
        Начать
      </button>
    </div>
  );
};
export default ButtonStart;
