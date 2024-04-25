import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer/Footer";
import Banner from "./components/banner/Banner";
import Question from "./question/Questions";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Methodology from "./components/methodology/Methodology";
import { questionsData } from "./data/questions";
import "./App.css";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showMethodology, setShowMethodology] = useState(false);
  const [answers, setAnswers] = useState(
    new Array(questionsData.length).fill(null)
  );
  const [totalScore, setTotalScore] = useState(0);

  const handleNext = (score: number, answer: string) => {
    const newAnswers = [...answers];
    let currentScore = totalScore;

    // Если ответ на текущий вопрос уже был дан, вычитаем предыдущий балл
    if (newAnswers[currentQuestionIndex] !== null) {
      const currentQuestion = questionsData[currentQuestionIndex];
      if (currentQuestion && currentQuestion.calculateScore) {
        const oldScore = currentQuestion.calculateScore(
          newAnswers[currentQuestionIndex]
        );
        currentScore -= oldScore;
      }
    }
    // Обновляем ответ
    newAnswers[currentQuestionIndex] = answer;
    setAnswers(newAnswers);

    // Прибавляем новый балл
    currentScore += score;
    setTotalScore(currentScore);

    // Переход к следующему вопросу, если это не последний
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(
        (currentQuestionIndex) => currentQuestionIndex - 1
      );
    }
  };

  const handleAgain = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(0);
    }
    setTotalScore(0);
    setAnswers(new Array(questionsData.length).fill(null));
  };

  const handleMethodology = () => {
    setShowMethodology(!showMethodology);
  };

  return (
    <div>
      <div className="header"></div>
      <Banner />
      {showMethodology ? (
        <Methodology handleMethodology={handleMethodology} />
      ) : (
        <div className="animatePresence">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentQuestionIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="motion"
            >
              <Question
                handleMethodology={handleMethodology}
                handleAgain={handleAgain}
                handleBack={handleBack}
                onAnswer={handleNext}
                totalScore={totalScore}
                currentQuestionIndex={currentQuestionIndex}
                question={questionsData[currentQuestionIndex]}
                answer={answers[currentQuestionIndex]}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
