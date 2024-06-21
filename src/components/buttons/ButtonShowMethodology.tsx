import "./Buttons.css";

import { useDispatch } from "react-redux";
import { showMethodology } from "../../redux/quizReducer";

const ButtonShowMethodology = () => {
  const dispatch = useDispatch();

  const handleMethodology = () => {
    dispatch(showMethodology(true));
  };

  return (
    <button className=" result-img w-100 h-100 " onClick={handleMethodology}>
      Методология подсчета результата
    </button>
  );
};

export default ButtonShowMethodology;
