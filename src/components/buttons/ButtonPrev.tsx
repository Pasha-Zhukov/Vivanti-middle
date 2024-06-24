import { memo } from "react";
import { useDispatch } from "react-redux";
import { previousQuestion } from "../../redux/quizReducer";

import "./Buttons.css";

const ButtonPrev = () => {
  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch(previousQuestion());
  };

  return (
    <button className="btn-back" onClick={handleBack}>
      Назад
    </button>
  );
};

export default memo(ButtonPrev);
