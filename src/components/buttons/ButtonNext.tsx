import React from "react";

import { ButtonNextProps } from "./Button.types";

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
