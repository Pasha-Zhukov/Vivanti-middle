import React from "react";

type ButtonNextProps = {
  onClick: () => void;
  answer: any;
};

const ButtonNext: React.FC<ButtonNextProps> = ({ onClick, answer }) => {
  return (
    <button
      className={answer ? "btn-next " : "btn-next inactive"}
      onClick={onClick}
    >
      Далее
    </button>
  );
};

export default ButtonNext;
