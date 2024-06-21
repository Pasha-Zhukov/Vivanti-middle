import Footer from "./components/footer/Footer";
import Banner from "./components/banner/Banner";
import Question from "./question/Questions";
import Methodology from "./components/methodology/Methodology";

import { useSelector } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const isShowMethodology = useSelector(
    (state: any) => state.quiz.showMethodology
  );

  return (
    <div>
      <div className="header"></div>
      <Banner />
      {isShowMethodology ? <Methodology /> : <Question />}
      <Footer />
    </div>
  );
}

export default App;
