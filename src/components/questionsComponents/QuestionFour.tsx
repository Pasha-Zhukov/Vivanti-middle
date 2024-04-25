import Select from "react-select";
import Buttons from "../buttons/Buttons";
import { QuestionFourProps, SelectedOptionType } from "./Question.types";

export default function QuestionFour({
  question,
  handleNext,
  handleBack,
  dataSelect,
  handleInput,
  input,
  isValid,
  currentQuestionIndex,
}: QuestionFourProps) {
  const customStyles = {
    option: (provided: any) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      backgroundColor: "#fff",
      border: "none",
      height: "35px",
      justifyContent: "center",
      paddingRight: 50,
      ":hover": {
        backgroundColor: "#E46E50",
      },
    }),
    input: (provided: any) => ({
      ...provided,
      color: "#fff",
      borderColor: isValid ? "#ccc" : "red",
      boxShadow: isValid ? "none" : "0 0 0 1px red",
      ":hover": {
        backgroundColor: "#E46E50",
      },
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: "#fff",
      border: "none",
      width: 343,
      color: "black",
    }),
    control: (provided: any) => ({
      ...provided,
      width: 343,
      backgroundColor: "none",
      borderWidth: 2,
      minHeight: "44px",
      borderColor: isValid ? "#E46E50" : "red",
      boxShadow: isValid ? "none" : "0 0 0 1px red",
      paddingRight: 5,
      paddingLeft: 5,
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      width: 0,
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      paddingTop: 4,
    }),
    menuList: (provided: any) => ({
      ...provided,
      maxHeight: "500px",
      width: 343,
    }),
  };
  const selectedOption: SelectedOptionType = {
    text: `${input == 0 ? dataSelect[0].text : dataSelect[1].text}`,
  };
  return (
    <div className="bg-questions p-3">
      <div className="d-flex justify-content-between gap-3">
        <div className="bg-questions d-flex flex-column justify-content-between ">
          <div className="fw-bold">Вопрос 4/8</div>
          <h5 className="mb-0">{question.questionText}</h5>
          <Select
            styles={customStyles}
            value={selectedOption}
            isSearchable={false}
            options={dataSelect}
            onChange={handleInput}
            placeholder="Выберите вариант ответа"
            getOptionLabel={(option: SelectedOptionType) => option.text}
          />

          <Buttons
            currentQuestionIndex={currentQuestionIndex}
            handleBack={handleBack}
            handleNext={handleNext}
            input={input}
          />
        </div>
        <img src="../../public/images/img-5.svg" alt="img" />
      </div>
    </div>
  );
}
