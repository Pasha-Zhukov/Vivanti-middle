import { OptionType, SelectedOptionType } from "./Question.types";
import { useState } from "react";
import { nextQuestion, answerOtherQuestions } from "../../redux/quizReducer";
import { useDispatch } from "react-redux";

import img5 from "../../../public/images/img-5.svg";
import Select from "react-select";
import ButtonPrev from "../buttons/ButtonPrev";
import ButtonNext from "../buttons/ButtonNext";

export default function QuestionFour() {
  const [isValid, setIsValid] = useState(true);
  const [selectedOption, setSelectedOption] =
    useState<SelectedOptionType | null>(null);

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
      maxWidth: 343,
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
  const dataSelect: OptionType[] = [
    { value: "0", text: "Каждый день (0 баллов)" },
    { value: "1", text: "Не каждый день (1 балл)" },
  ];

  const handleSelectionChange = (event: any) => {
    setSelectedOption(event);
    setIsValid(true);
  };

  const dispatch = useDispatch();

  const handleNext = () => {
    if (selectedOption) {
      dispatch(answerOtherQuestions(selectedOption));
      dispatch(nextQuestion());
    } else setIsValid(false);
    setSelectedOption(null);
  };

  return (
    <div className="bg-questions p-3">
      <div className="d-flex flex-column flex-lg-row flex-column-reverse  justify-content-between  gap-3">
        <div className="bg-questions d-flex flex-column justify-content-between ">
          <div className="fw-bold">Вопрос 4/8</div>
          <h5 className="mb-3 mb-lg-0">
            Как часто Ваш пациент ест овощи, фрукты или ягоды?
          </h5>
          <Select
            styles={customStyles}
            isSearchable={false}
            options={dataSelect}
            value={selectedOption}
            onChange={handleSelectionChange}
            placeholder="Выберите вариант ответа"
            getOptionLabel={(option: SelectedOptionType) => option.text}
          />

          <div className="d-flex flex-column flex-lg-row flex-column-reverse gap-3 mt-3">
            <ButtonPrev />
            <ButtonNext onClick={handleNext} answer={selectedOption} />
          </div>
        </div>
        <img className="img-question" src={img5} alt="img" />
      </div>
    </div>
  );
}
